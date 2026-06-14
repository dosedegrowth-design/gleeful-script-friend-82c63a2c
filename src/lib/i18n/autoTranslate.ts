// Lightweight DOM auto-translator. Walks text nodes and swaps any string
// found in PHRASES. Keeps the original text in a WeakMap so switching back
// to the source locale restores it.

import { PHRASES } from "./phrases";
import type { Locale } from "./translations";

const SOURCE_LOCALE: Locale = "pt-PT";
const ORIGINALS = new WeakMap<Text, string>();

const SKIP_TAGS = new Set([
  "SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA", "INPUT", "SVG", "PATH",
]);

function shouldSkip(node: Node): boolean {
  let p: Node | null = node.parentNode;
  while (p && p.nodeType === 1) {
    const el = p as HTMLElement;
    if (SKIP_TAGS.has(el.tagName)) return true;
    if (el.hasAttribute && el.hasAttribute("data-no-translate")) return true;
    p = p.parentNode;
  }
  return false;
}

function translateText(raw: string, locale: Locale): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const entry = PHRASES[trimmed];
  if (!entry) return null;
  const target = entry[locale];
  if (target == null || target === trimmed) return null;
  // Preserve surrounding whitespace
  return raw.replace(trimmed, target);
}

function processNode(node: Text, locale: Locale) {
  if (shouldSkip(node)) return;
  const original = ORIGINALS.get(node) ?? node.nodeValue ?? "";
  if (!ORIGINALS.has(node)) ORIGINALS.set(node, original);

  if (locale === SOURCE_LOCALE) {
    if (node.nodeValue !== original) node.nodeValue = original;
    return;
  }
  const next = translateText(original, locale);
  if (next != null && node.nodeValue !== next) node.nodeValue = next;
}

function walk(root: Node, locale: Locale) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let cur = walker.nextNode();
  while (cur) {
    processNode(cur as Text, locale);
    cur = walker.nextNode();
  }
}

let currentLocale: Locale = SOURCE_LOCALE;
let observer: MutationObserver | null = null;
let scheduled = false;

function schedule() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    if (typeof document !== "undefined") walk(document.body, currentLocale);
  });
}

export function applyLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  currentLocale = locale;
  walk(document.body, locale);

  if (!observer) {
    observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "characterData" && m.target.nodeType === 3) {
          processNode(m.target as Text, currentLocale);
        } else if (m.addedNodes.length) {
          for (const n of Array.from(m.addedNodes)) {
            if (n.nodeType === 3) processNode(n as Text, currentLocale);
            else if (n.nodeType === 1) walk(n, currentLocale);
          }
        }
      }
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }
  // Run again after next paint to cover late-mounting content
  schedule();
}

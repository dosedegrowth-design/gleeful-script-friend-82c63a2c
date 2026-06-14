// Lightweight DOM auto-translator.
// 1. First pass: per-element matches (handles cases where children split text
//    into multiple text nodes — e.g. SplitType per-word spans).
// 2. Second pass: per-text-node matches (catches inline strings).
// Originals are remembered so switching back to the source locale restores them.

import { PHRASES } from "./phrases";
import type { Locale } from "./translations";

const SOURCE_LOCALE: Locale = "pt-PT";
const TEXT_ORIGINALS = new WeakMap<Text, string>();
const HTML_ORIGINALS = new WeakMap<Element, string>();
const HANDLED_ELEMENTS = new WeakSet<Element>();

const SKIP_TAGS = new Set([
  "SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA", "INPUT", "SVG", "PATH",
]);

// Elements eligible for whole-element text replacement.
const ELEMENT_TAGS = new Set([
  "H1", "H2", "H3", "H4", "H5", "H6",
  "P", "SPAN", "A", "BUTTON", "LI", "LABEL",
  "STRONG", "EM", "SMALL", "BLOCKQUOTE", "FIGCAPTION",
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

function lookup(text: string, locale: Locale): string | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  // Collapse runs of whitespace so split lines/words still match.
  const normalized = trimmed.replace(/\s+/g, " ");
  const entry = PHRASES[normalized] ?? PHRASES[trimmed];
  if (!entry) return null;
  const target = entry[locale];
  if (target == null || target === normalized) return null;
  return target;
}

function processTextNode(node: Text, locale: Locale) {
  if (shouldSkip(node)) return;
  // Skip if a parent element already handled the whole text.
  const parent = node.parentElement;
  if (parent && HANDLED_ELEMENTS.has(parent)) return;

  const original = TEXT_ORIGINALS.get(node) ?? node.nodeValue ?? "";
  if (!TEXT_ORIGINALS.has(node)) TEXT_ORIGINALS.set(node, original);

  if (locale === SOURCE_LOCALE) {
    if (node.nodeValue !== original) node.nodeValue = original;
    return;
  }
  const target = lookup(original, locale);
  if (target == null) return;
  const next = original.replace(original.trim(), target);
  if (node.nodeValue !== next) node.nodeValue = next;
}

function processElement(el: Element, locale: Locale) {
  if (SKIP_TAGS.has(el.tagName)) return;
  if ((el as HTMLElement).hasAttribute?.("data-no-translate")) return;
  if (!ELEMENT_TAGS.has(el.tagName)) return;

  const originalHTML = HTML_ORIGINALS.get(el) ?? el.innerHTML;
  const text = (el.textContent ?? "").trim();
  if (!text) return;
  const normalized = text.replace(/\s+/g, " ");
  const entry = PHRASES[normalized] ?? PHRASES[text];
  if (!entry) return;

  // First time seeing this element — remember its untouched markup.
  if (!HTML_ORIGINALS.has(el)) HTML_ORIGINALS.set(el, originalHTML);

  if (locale === SOURCE_LOCALE) {
    if (el.innerHTML !== originalHTML) el.innerHTML = originalHTML;
    HANDLED_ELEMENTS.delete(el);
    return;
  }
  const target = entry[locale];
  if (target == null) return;
  // Replace inner content with plain translated text. This intentionally
  // destroys per-word split spans (e.g. SplitType) so the translation reads.
  if (el.textContent !== target) {
    el.textContent = target;
  }
  HANDLED_ELEMENTS.add(el);
}

function walk(root: Node, locale: Locale) {
  // Pass 1 — element matches.
  if (root.nodeType === 1) {
    const elWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    let curEl: Node | null = root;
    while (curEl) {
      processElement(curEl as Element, locale);
      curEl = elWalker.nextNode();
    }
  }
  // Pass 2 — text nodes not covered by element pass.
  const txtWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let cur = txtWalker.nextNode();
  while (cur) {
    processTextNode(cur as Text, locale);
    cur = txtWalker.nextNode();
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
          processTextNode(m.target as Text, currentLocale);
        } else if (m.addedNodes.length) {
          for (const n of Array.from(m.addedNodes)) {
            if (n.nodeType === 3) processTextNode(n as Text, currentLocale);
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
  // Run again on next paint to cover late-mounting content.
  schedule();
  // And again shortly after to catch animation-driven mounts.
  setTimeout(schedule, 300);
  setTimeout(schedule, 1200);
}

// Runtime DOM translator.
// Walks all text nodes + selected attributes once per language change.
// Stores the ORIGINAL Portuguese text in a WeakMap so we can restore it.
// No MutationObserver — avoids the previous "text flickers" loop.
// We re-run a few times after a change to catch nodes that mount later
// (framer-motion whileInView, route transitions, etc.).

import { translate, type Lang } from "./dict";

const ORIGINAL_TEXT = new WeakMap<Text, string>();
const ORIGINAL_ATTR = new WeakMap<Element, Record<string, string>>();

const ATTRS = ["placeholder", "alt", "aria-label", "title"];

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA"]);

function shouldSkip(node: Node): boolean {
  let el: Node | null = node.parentNode;
  while (el && el.nodeType === 1) {
    const e = el as Element;
    if (SKIP_TAGS.has(e.tagName)) return true;
    if (e.hasAttribute?.("data-no-translate")) return true;
    el = e.parentNode;
  }
  return false;
}

function translateTextNode(node: Text, lang: Lang) {
  const original = ORIGINAL_TEXT.get(node) ?? node.nodeValue ?? "";
  if (!ORIGINAL_TEXT.has(node)) ORIGINAL_TEXT.set(node, original);

  if (lang === "pt") {
    if (node.nodeValue !== original) node.nodeValue = original;
    return;
  }
  const translated = translate(original, lang);
  const next = translated ?? original;
  if (node.nodeValue !== next) node.nodeValue = next;
}

function translateAttr(el: Element, attr: string, lang: Lang) {
  const current = el.getAttribute(attr);
  if (current == null) return;
  let store = ORIGINAL_ATTR.get(el);
  if (!store) {
    store = {};
    ORIGINAL_ATTR.set(el, store);
  }
  if (!(attr in store)) store[attr] = current;
  const original = store[attr];

  if (lang === "pt") {
    if (current !== original) el.setAttribute(attr, original);
    return;
  }
  const translated = translate(original, lang);
  const next = translated ?? original;
  if (current !== next) el.setAttribute(attr, next);
}

function walk(root: Node, lang: Lang) {
  // Text nodes
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => {
      if (shouldSkip(n)) return NodeFilter.FILTER_REJECT;
      const v = (n.nodeValue ?? "").trim();
      if (!v) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let current: Node | null = walker.nextNode();
  while (current) {
    translateTextNode(current as Text, lang);
    current = walker.nextNode();
  }

  // Attributes
  if (root.nodeType === 1) {
    for (const attr of ATTRS) {
      const els = (root as Element).querySelectorAll?.(`[${attr}]`);
      els?.forEach((el) => {
        if (!shouldSkip(el)) translateAttr(el, attr, lang);
      });
    }
  }
}

let scheduled = false;
export function applyDomTranslations(lang: Lang) {
  if (typeof document === "undefined") return;
  const run = () => walk(document.body, lang);
  run();
  // Re-run shortly after to catch async-mounted nodes (whileInView, route transitions).
  if (scheduled) return;
  scheduled = true;
  const delays = [100, 400, 1200, 3000];
  delays.forEach((d) => setTimeout(run, d));
  setTimeout(() => {
    scheduled = false;
  }, 3500);
}

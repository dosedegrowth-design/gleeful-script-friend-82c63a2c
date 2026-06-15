// DOM auto-translator with dynamic AI fallback.
//
// Strategy:
// 1. Whole-element pass: if an element's full text matches the PHRASES
//    dictionary OR has a cached AI translation, swap the inner text.
// 2. Text-node pass: same lookup for inline strings.
// 3. Anything still untranslated is queued, batched, sent to the
//    `translateBatch` serverFn, cached in localStorage, and reapplied.
//
// Originals are stored in WeakMaps so switching back to pt-PT restores them.

import { PHRASES } from "./phrases";
import type { Locale } from "./translations";
import { translateBatch } from "./translate.functions";

const SOURCE_LOCALE: Locale = "pt-PT";
const TEXT_ORIGINALS = new WeakMap<Text, string>();
const ELEMENT_TEXT_ORIGINALS = new WeakMap<Element, string>();
const HTML_ORIGINALS = new WeakMap<Element, string>();
const HANDLED_ELEMENTS = new WeakSet<Element>();
const HANDLED_SUBTREES = new WeakSet<Element>();

const SKIP_TAGS = new Set([
  "SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA", "INPUT", "SVG", "PATH",
]);

const ELEMENT_TAGS = new Set([
  "H1", "H2", "H3", "H4", "H5", "H6",
  "P", "SPAN", "A", "BUTTON", "LI", "LABEL",
  "STRONG", "EM", "SMALL", "BLOCKQUOTE", "FIGCAPTION", "DIV",
]);

// ----- cache -----
type Cache = Record<string, string>;
const memCache: Record<Locale, Cache> = {
  "pt-PT": {}, "pt-BR": {}, es: {}, en: {},
};

// Bump this version whenever cache shape/keys can be corrupted by prior
// bugs (e.g. translated text accidentally used as source key). It forces a
// clean cache on next load so users don't see swapped/inverted strings.
const CACHE_VERSION = "v5";
function cacheKey(locale: Locale) { return `i18n-cache:${CACHE_VERSION}:${locale}`; }
const ENABLE_AI_FALLBACK = false;

function purgeLegacyCaches() {
  if (typeof localStorage === "undefined") return;
  try {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("i18n-cache:") && !k.startsWith(`i18n-cache:${CACHE_VERSION}:`)) {
        keys.push(k);
      }
    }
    keys.forEach((k) => localStorage.removeItem(k));
  } catch { /* noop */ }
}

function loadCache(locale: Locale) {
  if (typeof localStorage === "undefined") return;
  try {
    const raw = localStorage.getItem(cacheKey(locale));
    if (raw) memCache[locale] = JSON.parse(raw) as Cache;
  } catch { /* noop */ }
}

function saveCache(locale: Locale) {
  if (typeof localStorage === "undefined") return;
  try {
    localStorage.setItem(cacheKey(locale), JSON.stringify(memCache[locale]));
  } catch { /* noop */ }
}

function getTranslation(text: string, locale: Locale): string | null {
  const normalized = text.trim().replace(/\s+/g, " ");
  if (!normalized) return null;
  const quoteMatch = normalized.match(/^(["“”])(.+)(["“”])$/);
  const lookup = quoteMatch ? quoteMatch[2].trim() : normalized;
  const entry = PHRASES[lookup] ?? PHRASES[normalized] ?? PHRASES[text.trim()];
  const manual = entry?.[locale];
  if (manual && manual !== normalized) {
    return quoteMatch ? `${quoteMatch[1]}${manual}${quoteMatch[3]}` : manual;
  }
  const cached = memCache[locale][normalized];
  if (cached && cached !== normalized) return cached;
  return null;
}

// Heuristics: only translate things that look like prose, not numbers,
// timestamps, emails, urls, single symbols.
function isTranslatable(text: string): boolean {
  const t = text.trim();
  if (t.length < 2) return false;
  if (t.length > 600) return false;
  if (!/[a-záàâãäéèêëíìîïóòôõöúùûüç]/i.test(t)) return false;
  if (/^https?:\/\//i.test(t)) return false;
  if (/^[\d\s.,:%°ºª#@/+\-–—|·•]+$/.test(t)) return false;
  if (/@/.test(t) && /\./.test(t) && !/\s/.test(t)) return false; // email
  return true;
}

// ----- queue -----
const pending = new Set<string>();
let flushTimer: ReturnType<typeof setTimeout> | null = null;
let flushing = false;

function queue(text: string, locale: Locale) {
  if (!ENABLE_AI_FALLBACK) return;
  if (locale === SOURCE_LOCALE) return;
  const normalized = text.trim().replace(/\s+/g, " ");
  if (!normalized || !isTranslatable(normalized)) return;
  if (PHRASES[normalized]?.[locale]) return;
  if (memCache[locale][normalized]) return;
  pending.add(normalized);
  if (flushTimer) clearTimeout(flushTimer);
  flushTimer = setTimeout(() => void flush(locale), 250);
}

async function flush(locale: Locale) {
  if (flushing) return;
  if (pending.size === 0) return;
  flushing = true;
  const batch = Array.from(pending).slice(0, 60);
  batch.forEach((t) => pending.delete(t));
  try {
    const { translations } = await translateBatch({
      data: { texts: batch, target: locale as "pt-BR" | "es" | "en" },
    });
    batch.forEach((src, i) => {
      const tr = translations[i];
      if (tr && tr !== src) memCache[locale][src] = tr;
    });
    saveCache(locale);
    // Re-walk DOM so new translations get applied.
    if (typeof document !== "undefined") schedule();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn("[i18n] translate batch failed", e);
  } finally {
    flushing = false;
    if (pending.size > 0) {
      flushTimer = setTimeout(() => void flush(locale), 400);
    }
  }
}

// ----- DOM walking -----
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

function processTextNode(node: Text, locale: Locale) {
  if (shouldSkip(node)) return;
  const parent = node.parentElement;
  if (parent && HANDLED_ELEMENTS.has(parent)) return;
  if (parent && hasHandledSubtree(parent)) return;

  const original = TEXT_ORIGINALS.get(node) ?? node.nodeValue ?? "";
  if (!TEXT_ORIGINALS.has(node)) TEXT_ORIGINALS.set(node, original);

  if (locale === SOURCE_LOCALE) {
    if (node.nodeValue !== original) node.nodeValue = original;
    return;
  }
  const target = getTranslation(original, locale);
  if (target == null) {
    queue(original, locale);
    return;
  }
  const next = original.replace(original.trim(), target);
  if (node.nodeValue !== next) node.nodeValue = next;
}

function processElement(el: Element, locale: Locale) {
  if (SKIP_TAGS.has(el.tagName)) return;
  if ((el as HTMLElement).hasAttribute?.("data-no-translate")) return;
  if (!ELEMENT_TAGS.has(el.tagName)) return;

  // CRITICAL: only do element-level replacement if the element has NO
  // child elements at all. Otherwise we'd destroy nested spans used by
  // SplitType, animations, gradient/weight styling, icons, etc. — which
  // breaks layout and typography. The text-node walker handles those.
  if (el.children.length > 0) return;

  const text = (el.textContent ?? "").trim();
  if (!text) return;

  const originalHTML = HTML_ORIGINALS.get(el) ?? el.innerHTML;
  if (!HTML_ORIGINALS.has(el)) HTML_ORIGINALS.set(el, originalHTML);
  const originalText = ELEMENT_TEXT_ORIGINALS.get(el) ?? text;
  if (!ELEMENT_TEXT_ORIGINALS.has(el)) ELEMENT_TEXT_ORIGINALS.set(el, originalText);

  if (locale === SOURCE_LOCALE) {
    if (el.innerHTML !== originalHTML) el.innerHTML = originalHTML;
    HANDLED_ELEMENTS.delete(el);
    return;
  }

  const target = getTranslation(originalText, locale);
  if (target == null) {
    queue(originalText, locale);
    return;
  }
  if (el.textContent !== target) el.textContent = target;
  HANDLED_ELEMENTS.add(el);
}

function hasHandledSubtree(el: Element): boolean {
  let p: Element | null = el;
  while (p) {
    if (HANDLED_SUBTREES.has(p)) return true;
    p = p.parentElement;
  }
  return false;
}

function processComposedElement(el: Element, locale: Locale) {
  if (SKIP_TAGS.has(el.tagName)) return;
  if ((el as HTMLElement).hasAttribute?.("data-no-translate")) return;
  if (!["H1", "H2", "H3", "H4", "P", "BUTTON", "A"].includes(el.tagName)) return;
  if (el.children.length === 0) return;
  if (Array.from(el.children).some((child) => child.tagName !== "BR")) return;
  if ((el.textContent ?? "").trim().length > 220) return;

  const raw = el.textContent ?? "";
  const normalized = raw.trim().replace(/\s+/g, " ");
  const originalHTML = HTML_ORIGINALS.get(el) ?? el.innerHTML;
  if (!HTML_ORIGINALS.has(el)) HTML_ORIGINALS.set(el, originalHTML);
  const originalText = ELEMENT_TEXT_ORIGINALS.get(el) ?? normalized;
  if (!ELEMENT_TEXT_ORIGINALS.has(el)) ELEMENT_TEXT_ORIGINALS.set(el, originalText);

  if (locale === SOURCE_LOCALE) {
    if (el.innerHTML !== originalHTML) el.innerHTML = originalHTML;
    HANDLED_SUBTREES.delete(el);
    return;
  }

  const target = getTranslation(originalText, locale);
  if (!target) return;

  if (el.textContent !== target) el.textContent = target;
  HANDLED_SUBTREES.add(el);
}

function walk(root: Node, locale: Locale) {
  if (root.nodeType === 1) {
    const elWalker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    let curEl: Node | null = root;
    while (curEl) {
      processComposedElement(curEl as Element, locale);
      processElement(curEl as Element, locale);
      curEl = elWalker.nextNode();
    }
  }
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
let muted = false;

function safeWalk(root: Node, locale: Locale) {
  if (muted) return;
  muted = true;
  try {
    walk(root, locale);
  } finally {
    // Let the mutations triggered by our own writes settle before
    // re-enabling the observer, otherwise we get an infinite churn.
    setTimeout(() => { muted = false; }, 0);
  }
}

function schedule() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    scheduled = false;
    if (typeof document !== "undefined") safeWalk(document.body, currentLocale);
  });
}

export function applyLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  purgeLegacyCaches();
  currentLocale = locale;
  loadCache(locale);
  safeWalk(document.body, locale);

  if (!observer) {
    observer = new MutationObserver((mutations) => {
      if (muted) return;
      let needsWalk = false;
      for (const m of mutations) {
        if (m.type === "childList" && m.addedNodes.length) {
          for (const n of Array.from(m.addedNodes)) {
            if (n.nodeType === 1 || n.nodeType === 3) { needsWalk = true; break; }
          }
        }
      }
      if (needsWalk) schedule();
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      // NOTE: do NOT observe characterData — our own text writes would
      // re-trigger the observer and cause text to flicker every frame.
    });
  }
  schedule();
  setTimeout(schedule, 400);
  setTimeout(schedule, 1500);
}

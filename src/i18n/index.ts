import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pt from "./locales/pt.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import { applyDomTranslations } from "./applyDom";

export type Lang = "pt" | "en" | "es";
export const SUPPORTED: Lang[] = ["pt", "en", "es"];
const STORAGE_KEY = "mv_lang";

export function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && SUPPORTED.includes(stored)) return stored;
  } catch {}
  const nav = navigator.language?.slice(0, 2).toLowerCase();
  if (nav === "en") return "en";
  if (nav === "es") return "es";
  return "pt";
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
    },
    lng: detectInitialLang(),
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
    returnNull: false,
  });
}

export function setLang(lang: Lang) {
  if (!SUPPORTED.includes(lang)) return;
  i18n.changeLanguage(lang);
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang === "pt" ? "pt-PT" : lang;
    applyDomTranslations(lang);
  }
}

export function reapplyCurrentLang() {
  if (typeof document === "undefined") return;
  const lang = (i18n.language as Lang) ?? "pt";
  applyDomTranslations(SUPPORTED.includes(lang) ? lang : "pt");
}

export default i18n;

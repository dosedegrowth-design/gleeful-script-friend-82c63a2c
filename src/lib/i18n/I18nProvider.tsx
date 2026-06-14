import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, TRANSLATIONS, type Locale } from "./translations";

interface I18nCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const Ctx = createContext<I18nCtx | null>(null);

const STORAGE_KEY = "moovia_locale";

function detectInitial(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in TRANSLATIONS) return stored;
  } catch {}
  const nav = navigator.language?.toLowerCase() || "";
  if (nav.startsWith("pt-br")) return "pt-BR";
  if (nav.startsWith("pt")) return "pt-PT";
  if (nav.startsWith("es")) return "es";
  if (nav.startsWith("en")) return "en";
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(detectInitial());
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const t = (key: string) => TRANSLATIONS[locale][key] ?? TRANSLATIONS[DEFAULT_LOCALE][key] ?? key;

  return <Ctx.Provider value={{ locale, setLocale, t }}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    // Fallback when used outside provider (SSR safety)
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: (k: string) => TRANSLATIONS[DEFAULT_LOCALE][k] ?? k,
    } as I18nCtx;
  }
  return ctx;
}

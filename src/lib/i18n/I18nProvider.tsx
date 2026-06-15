import { useEffect, useState, type ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n, { detectInitialLang, setLang as setLangCore, type Lang } from "@/i18n";

// Compatibility shim so existing imports of `useI18n` keep working.
// New code should prefer `useTranslation()` from `react-i18next`.

export function I18nProvider({ children }: { children: ReactNode }) {
  // Re-sync detected language on client mount (SSR safe).
  useEffect(() => {
    const detected = detectInitialLang();
    if (i18n.language !== detected) {
      setLangCore(detected);
    } else if (typeof document !== "undefined") {
      document.documentElement.lang = detected === "pt" ? "pt-PT" : detected;
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export function useI18n() {
  const { t, i18n: i18nInstance } = useTranslation();
  const [, force] = useState(0);

  useEffect(() => {
    const handler = () => force((n) => n + 1);
    i18nInstance.on("languageChanged", handler);
    return () => {
      i18nInstance.off("languageChanged", handler);
    };
  }, [i18nInstance]);

  return {
    locale: (i18nInstance.language as Lang) ?? "pt",
    setLocale: (l: string) => setLangCore(l as Lang),
    t: (key: string) => t(key),
  };
}

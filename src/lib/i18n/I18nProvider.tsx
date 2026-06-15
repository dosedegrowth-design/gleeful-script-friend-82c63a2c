import { useEffect, useState, type ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { useRouterState } from "@tanstack/react-router";
import i18n, { detectInitialLang, setLang as setLangCore, reapplyCurrentLang, type Lang } from "@/i18n";

// Compatibility shim so existing imports of `useI18n` keep working.
// New code can still use `useTranslation()` from `react-i18next`.

function DomLangSync() {
  // Re-applies the current language whenever the URL changes so newly
  // mounted route content gets translated. No MutationObserver — we just
  // re-run the DOM walker after navigations.
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    reapplyCurrentLang();
  }, [pathname]);
  return null;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const detected = detectInitialLang();
    if (i18n.language !== detected) {
      setLangCore(detected);
    } else {
      if (typeof document !== "undefined") {
        document.documentElement.lang = detected === "pt" ? "pt-PT" : detected;
      }
      reapplyCurrentLang();
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <DomLangSync />
      {children}
    </I18nextProvider>
  );
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

// Translation dictionaries — written by native-quality manual translation.
// No external API. Add keys here as the app needs them.

export type Locale = "pt-BR" | "pt-PT" | "es" | "en";

export const LOCALES: { code: Locale; label: string; native: string; country: "BR" | "PT" | "ES" | "GB" }[] = [
  { code: "pt-BR", label: "Portuguese (Brazil)", native: "Português · BR", country: "BR" },
  { code: "pt-PT", label: "Portuguese (Portugal)", native: "Português · PT", country: "PT" },
  { code: "es", label: "Spanish", native: "Español", country: "ES" },
  { code: "en", label: "English (UK)", native: "English", country: "GB" },
];

type Dict = Record<string, string>;

const ptBR: Dict = {
  "nav.how_it_works": "Como funciona",
  "nav.services": "Serviços",
  "nav.assessment": "Assessment",
  "nav.blog": "Blog",
  "nav.contact": "Contato",
  "nav.cta": "Avaliar meu caso",
  "nav.language": "Idioma",
  "common.learn_more": "Saiba mais",
  "common.start": "Começar agora",
  "common.scroll": "Role para descobrir",
};

const ptPT: Dict = {
  "nav.how_it_works": "Como funciona",
  "nav.services": "Serviços",
  "nav.assessment": "Assessment",
  "nav.blog": "Blog",
  "nav.contact": "Contacto",
  "nav.cta": "Avaliar o meu caso",
  "nav.language": "Idioma",
  "common.learn_more": "Saber mais",
  "common.start": "Começar agora",
  "common.scroll": "Desça para descobrir",
};

const es: Dict = {
  "nav.how_it_works": "Cómo funciona",
  "nav.services": "Servicios",
  "nav.assessment": "Diagnóstico",
  "nav.blog": "Blog",
  "nav.contact": "Contacto",
  "nav.cta": "Evaluar mi caso",
  "nav.language": "Idioma",
  "common.learn_more": "Saber más",
  "common.start": "Empezar ahora",
  "common.scroll": "Desliza para descubrir",
};

const en: Dict = {
  "nav.how_it_works": "How it works",
  "nav.services": "Services",
  "nav.assessment": "Assessment",
  "nav.blog": "Journal",
  "nav.contact": "Contact",
  "nav.cta": "Assess my case",
  "nav.language": "Language",
  "common.learn_more": "Learn more",
  "common.start": "Get started",
  "common.scroll": "Scroll to discover",
};

export const TRANSLATIONS: Record<Locale, Dict> = {
  "pt-BR": ptBR,
  "pt-PT": ptPT,
  es,
  en,
};

export const DEFAULT_LOCALE: Locale = "pt-PT";

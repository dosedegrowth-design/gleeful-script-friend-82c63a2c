## Objetivo
Trocar o sistema atual de tradução automática (DOM walker + cache) por um sistema **i18next + react-i18next** com chaves explícitas e idioma na URL — exatamente o padrão que você descreveu.

## O que muda

### 1. Stack
- Adicionar `i18next` + `react-i18next`.
- Remover `src/lib/i18n/autoTranslate.ts`, `phrases.ts`, `translate.functions.ts` e qualquer chamada a `applyLocale`.

### 2. Bundles de tradução
Criar 3 arquivos estáticos com todas as strings do site:
```
src/i18n/locales/pt.json
src/i18n/locales/en.json
src/i18n/locales/es.json
```
Estrutura por seção: `hero.title`, `hero.subtitle`, `problem.headline`, `process.step1.title`, etc.

### 3. Inicialização
`src/i18n/index.ts`:
- Registra os 3 resources em memória.
- `detectInitialLang()`: URL → `localStorage.mv_lang` → `navigator.language` → `pt`.
- `fallbackLng: 'pt'`, `escapeValue: false`, `returnNull: false`.
- Importado uma vez em `src/router.tsx` (ou root).

### 4. Roteamento por idioma (TanStack Start)
- Criar layout route `src/routes/$lang.tsx` com `<Outlet />` e um `<LangSync>` que valida `lang ∈ {pt,en,es}` e chama `setLang`.
- Mover o conteúdo atual de `src/routes/index.tsx` para `src/routes/$lang.index.tsx`.
- `src/routes/index.tsx` passa a redirecionar para `/${detectInitialLang()}` via `<Navigate>`.
- URL = fonte canônica. Compartilhar `/en` força inglês.

### 5. Troca de idioma
Função `setLang(lang)`:
```ts
i18n.changeLanguage(lang);
localStorage.setItem('mv_lang', lang);
document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
```
O `LanguageSwitcher` chama `setLang` e faz `navigate` substituindo o primeiro segmento do pathname.

### 6. Consumo nos componentes
Todos os componentes de seção (`Hero`, `ProblemSection`, `ProcessSection`, `Pillars`, `Manifesto`, `FAQ`, `Footer`, `Blog`, etc.) passam a usar:
```tsx
const { t } = useTranslation();
<h1>{t('hero.title')}</h1>
```
Sem mais texto literal em PT-BR no JSX.

### 7. SEO
- `<html lang>` atualizado dinamicamente.
- `head()` de cada rota injeta `<link rel="alternate" hreflang="pt|en|es">` + `x-default`.
- `public/sitemap.xml` lista as 3 variantes.

## Detalhes técnicos
- Os componentes hoje têm strings hard-coded em PT. Extrair tudo para `pt.json`, traduzir manualmente para `en.json` e `es.json`. Sem chamada a IA em runtime.
- A flag `LangSync` previne loop: só chama `i18n.changeLanguage` se diferir do atual.
- Remover `AutoTranslateBootstrap` do root.

## Escopo da refatoração
Por causa do volume de strings (Hero, Problem, Team, Process, Assessment, Pillars, Manifesto, Blog, FAQ, Footer), esta migração toca ~15 arquivos de componentes + cria 3 JSONs grandes + reorganiza rotas. É uma mudança grande mas resolve definitivamente os bugs de "texto pisca / inverte / não traduz".

Confirma que posso prosseguir com essa refatoração completa?

// Source-text dictionary. Keys are the exact PT-PT strings as they appear in
// the rendered DOM. Values are native translations. Add new entries as the
// site grows — the auto-translator walks text nodes and swaps any match.

import type { Locale } from "./translations";

type Phrase = Partial<Record<Locale, string>>;

// key = source string (PT-PT). pt-PT is the source — no entry needed.
export const PHRASES: Record<string, Phrase> = {
  // Nav
  "Como funciona": { "pt-BR": "Como funciona", es: "Cómo funciona", en: "How it works" },
  "Serviços": { "pt-BR": "Serviços", es: "Servicios", en: "Services" },
  "Assessment": { "pt-BR": "Assessment", es: "Diagnóstico", en: "Assessment" },
  "Blog": { "pt-BR": "Blog", es: "Blog", en: "Journal" },
  "Contacto": { "pt-BR": "Contato", es: "Contacto", en: "Contact" },
  "Avaliar o meu caso": { "pt-BR": "Avaliar meu caso", es: "Evaluar mi caso", en: "Assess my case" },
  "Idioma": { "pt-BR": "Idioma", es: "Idioma", en: "Language" },

  // Hero / common
  "Coordenação de transição internacional. Brasil para Portugal.": {
    "pt-BR": "Coordenação de transição internacional. Brasil para Portugal.",
    es: "Coordinación de transición internacional. Brasil a Portugal.",
    en: "International transition coordination. Brazil to Portugal.",
  },
  "Do diagnóstico ao destino.": {
    "pt-BR": "Do diagnóstico ao destino.", es: "Del diagnóstico al destino.", en: "From diagnosis to destination.",
  },
  "Role para descobrir": { "pt-BR": "Role para descobrir", es: "Desliza para descubrir", en: "Scroll to discover" },
  "Desça para descobrir": { "pt-BR": "Role para descobrir", es: "Desliza para descubrir", en: "Scroll to discover" },
  "Saber mais": { "pt-BR": "Saiba mais", es: "Saber más", en: "Learn more" },
  "Saiba mais": { "pt-BR": "Saiba mais", es: "Saber más", en: "Learn more" },
  "Começar agora": { "pt-BR": "Começar agora", es: "Empezar ahora", en: "Get started" },
  "Avaliar meu caso": { "pt-BR": "Avaliar meu caso", es: "Evaluar mi caso", en: "Assess my case" },

  // Sections
  "Como trabalhamos": { "pt-BR": "Como trabalhamos", es: "Cómo trabajamos", en: "How we work" },
  "A posição da marca": { "pt-BR": "A posição da marca", es: "La posición de la marca", en: "Brand positioning" },
  "Antes de coordenar": { "pt-BR": "Antes de coordenar", es: "Antes de coordinar", en: "Before coordinating" },
  "Antes de coordenar transições internacionais, vivemos as nossas.": {
    "pt-BR": "Antes de coordenar transições internacionais, vivemos as nossas.",
    es: "Antes de coordinar transiciones internacionales, vivimos las nuestras.",
    en: "Before coordinating international transitions, we lived our own.",
  },
  "A equipa que coordena a sua jornada.": {
    "pt-BR": "A equipe que coordena a sua jornada.",
    es: "El equipo que coordina su trayecto.",
    en: "The team coordinating your journey.",
  },
  "As pessoas que conduzem cada mandato.": {
    "pt-BR": "As pessoas que conduzem cada mandato.",
    es: "Las personas que conducen cada mandato.",
    en: "The people leading every mandate.",
  },
  "Chegar é metade": { "pt-BR": "Chegar é metade", es: "Llegar es la mitad", en: "Arriving is half" },
  "Erros que custam": { "pt-BR": "Erros que custam", es: "Errores que cuestan", en: "Costly mistakes" },
  "Decisões simultâneas": { "pt-BR": "Decisões simultâneas", es: "Decisiones simultáneas", en: "Simultaneous decisions" },
  "A conversa certa.": { "pt-BR": "A conversa certa.", es: "La conversación correcta.", en: "The right conversation." },
  "Conversa Gratuita": { "pt-BR": "Conversa Gratuita", es: "Conversación gratuita", en: "Free consultation" },
  "Conversa direta com o founder": {
    "pt-BR": "Conversa direta com o founder", es: "Conversación directa con el fundador", en: "Direct chat with the founder",
  },
  "Diretamente com o founder": {
    "pt-BR": "Diretamente com o founder", es: "Directamente con el fundador", en: "Direct with the founder",
  },
  "Agendamento via Calendly": {
    "pt-BR": "Agendamento via Calendly", es: "Agendar vía Calendly", en: "Book via Calendly",
  },
  "Confidencial": { "pt-BR": "Confidencial", es: "Confidencial", en: "Confidential" },
  "Concierge completo": { "pt-BR": "Concierge completo", es: "Conserjería completa", en: "Full concierge" },
  "Coordenação completa": { "pt-BR": "Coordenação completa", es: "Coordinación completa", en: "Full coordination" },
  "Entendemos o seu contexto": {
    "pt-BR": "Entendemos o seu contexto", es: "Entendemos su contexto", en: "We understand your context",
  },
  "Acompanhamos um número limitado": {
    "pt-BR": "Acompanhamos um número limitado", es: "Acompañamos un número limitado", en: "We take on a limited number",
  },
  "Adaptação estruturada": { "pt-BR": "Adaptação estruturada", es: "Adaptación estructurada", en: "Structured adaptation" },
  "Conteúdo estratégico": { "pt-BR": "Conteúdo estratégico", es: "Contenido estratégico", en: "Strategic content" },

  // Form
  "Enviar e aguardar retorno": {
    "pt-BR": "Enviar e aguardar retorno", es: "Enviar y esperar respuesta", en: "Send and await reply",
  },
  "Enviando...": { "pt-BR": "Enviando...", es: "Enviando...", en: "Sending..." },
  "Enviado com sucesso!": { "pt-BR": "Enviado com sucesso!", es: "¡Enviado con éxito!", en: "Sent successfully!" },
  "Conte brevemente o seu caso": {
    "pt-BR": "Conte brevemente o seu caso", es: "Cuente brevemente su caso", en: "Briefly describe your case",
  },
  "Em que fase da decisão está?": {
    "pt-BR": "Em que fase da decisão está?", es: "¿En qué fase de la decisión está?", en: "Where are you in the decision?",
  },
  "Apenas eu": { "pt-BR": "Apenas eu", es: "Solo yo", en: "Just me" },
  "Família com filhos": { "pt-BR": "Família com filhos", es: "Familia con hijos", en: "Family with children" },
  "Família com filhos e pets": {
    "pt-BR": "Família com filhos e pets", es: "Familia con hijos y mascotas", en: "Family with kids and pets",
  },
  "Ainda estou pesquisando": { "pt-BR": "Ainda estou pesquisando", es: "Aún estoy investigando", en: "Still researching" },
  "Apenas pesquisando": { "pt-BR": "Apenas pesquisando", es: "Solo investigando", en: "Just exploring" },
  "E-mail inválido.": { "pt-BR": "E-mail inválido.", es: "Correo inválido.", en: "Invalid email." },
  "Escreva sua mensagem...": {
    "pt-BR": "Escreva sua mensagem...", es: "Escribe tu mensaje...", en: "Type your message...",
  },
  "Assistente": { "pt-BR": "Assistente", es: "Asistente", en: "Assistant" },

  // Founders / generic role labels
  "Co-Founder": { "pt-BR": "Co-Founder", es: "Cofundador", en: "Co-Founder" },
  "Conselheiro Estratégico": {
    "pt-BR": "Conselheiro Estratégico", es: "Asesor Estratégico", en: "Strategic Advisor",
  },
  "Family Transition Advisor": {
    "pt-BR": "Family Transition Advisor", es: "Asesora de Transición Familiar", en: "Family Transition Advisor",
  },

  // Footer / contact
  "Contacto MOOVIA Portugal": {
    "pt-BR": "Contato MOOVIA Portugal", es: "Contacto MOOVIA Portugal", en: "Contact MOOVIA Portugal",
  },
};

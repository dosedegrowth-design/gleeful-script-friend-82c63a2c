import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { motion, AnimatePresence } from "framer-motion";

const pillars = [
  {
    n: "01",
    verb: "Planejamos",
    tagline: "Tomar as decisões certas antes de mudar.",
    services: [
      "Strategic Assessment", "Diagnóstico Habitacional", "Diagnóstico Educacional",
      "Diagnóstico Documental", "Diagnóstico Fiscal Inicial", "Mapa de Decisão",
      "Plano de Próximos Passos", "Estratégia Migratória", "Planeamento Fiscal",
      "City Experience", "Exploração de Bairros e Estilo de Vida", 
      "Planeamento Habitacional", "Avaliação de Crédito"
    ],
    result: "Plano Estratégico de Transição Internacional"
  },
  {
    n: "02",
    verb: "Instalamos",
    tagline: "Tudo que precisa para chegar e ficar legalmente instalado.",
    services: [
      "Habitação (Busca Ativa, Airbnb Hunting, Visitas, Negociação)",
      "NIF", "NISS", "Número de Utente", "PB4", "Conta Bancária",
      "Carta de Condução", "Passe Navegante", "Abertura de Atividade",
      "Recibos Verdes", "Estatuto de Igualdade", "Airport Pick-up",
      "Airport Pick-up Executivo", "Concierge completo", "Ativação de Água",
      "Ativação de Gás", "Ativação de Luz", "Ativação de Internet",
      "Inscrição em Ginásio", "Traduções Certificadas", "Equivalências de Diplomas"
    ],
    result: "Família legalmente instalada e operando"
  },
  {
    n: "03",
    verb: "Integramos",
    tagline: "Transformando uma mudança numa transição de vida.",
    services: [
      "School Matching Nacional", "School Matching Internacional",
      "Gestão de Matrículas", "Adaptação Familiar — Programa 30 dias",
      "Adaptação Familiar — Programa 60 dias", "Adaptação Familiar — Programa 90 dias",
      "Pet Relocation (Lufthansa/TAP)", "Documentação Veterinária (CVI, VIGIAGRO)",
      "Recepção do Animal no Aeroporto", "Lisboa Experience Premium",
      "City Tour Estratégico (4h e dia inteiro)", "Integração Cultural"
    ],
    result: "Uma mudança que vira transição de vida"
  },
  {
    n: "04",
    verb: "Estruturamos",
    tagline: "Para quem quer estruturar a vida financeira em Portugal.",
    services: [
      "Enquadramento Fiscal", "Simulação de Rendimentos Líquidos",
      "Abertura de Atividade (Recibos Verdes)", "Encerramento de Atividade",
      "Primeira Declaração de IRS em Portugal", "Declaração Anual de IRS",
      "Regularização Fiscal", "Representação Fiscal para Não Residentes",
      "Transferência de Residência Fiscal", "Planeamento Fiscal Internacional",
      "Análise de Dupla Tributação", "Declarações de IVA", "Segurança Social",
      "Constituição de Empresa", "NIPC", "Início de Atividade Empresarial",
      "Contabilidade Mensal ENI", "Contabilidade Mensal Lda",
      "Processamento Salarial", "Estruturação Societária",
      "Consultoria Fiscal Empresarial", "Estruturação Patrimonial",
      "Planeamento de Investimentos", "Apoio à Instalação Empresarial"
    ],
    result: "Vida financeira estruturada e em conformidade"
  }
];

export function PillarsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="servicos" className="bg-black-2 py-32 px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Quatro pilares
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] text-white">
              "Uma jornada completa."
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-urbanist text-[18px] font-[300] text-w35 leading-[1.9] max-w-2xl mt-6">
              Não resolvemos tarefas isoladas. Coordenamos a jornada inteira,
              do planejamento à estruturação da vida em Portugal.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-b18 border border-b18 relative overflow-hidden">
          {pillars.map((pillar) => (
            <div 
              key={pillar.n} 
              className="bg-black-2 p-12 lg:p-14 relative overflow-hidden group hover:bg-black-3 cursor-pointer transition-colors"
              onClick={() => setExpanded(expanded === pillar.n ? null : pillar.n)}
            >
              <div className="font-sora text-[100px] font-[100] text-gold opacity-[0.05] absolute top-5 right-8 leading-none select-none pointer-events-none">
                {pillar.n}
              </div>
              <h3 className="font-sora text-[40px] font-[200] text-gold-l leading-none tracking-[-0.02em] mb-4">
                {pillar.verb}
              </h3>
              <p className="font-urbanist text-[14px] italic text-w35 mb-8">
                {pillar.tagline}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                 {pillar.services.slice(0, 6).map(s => (
                    <span key={s} className="px-3 py-1.5 border border-b18 font-urbanist text-[10px] uppercase tracking-widest text-w35 group-hover:border-b35">
                       {s}
                    </span>
                 ))}
                 {pillar.services.length > 6 && (
                    <span className="px-3 py-1.5 border border-b18 font-urbanist text-[10px] uppercase tracking-widest text-gold opacity-60">
                       + {pillar.services.length - 6} serviços
                    </span>
                 )}
              </div>

              <div className="mt-auto">
                 <p className="font-urbanist text-[11px] uppercase tracking-widest text-gold mb-1 font-[500]">Resultado:</p>
                 <p className="font-urbanist text-[13px] font-[300] text-w35">{pillar.result}</p>
              </div>

              {/* Bottom Border Glow on Hover */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[linear-gradient(90deg,var(--gold),var(--teal))] w-0 group-hover:w-full transition-all duration-700" />
            
              <AnimatePresence>
                {expanded === pillar.n && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="absolute inset-0 z-50 bg-black-3 p-12 overflow-y-auto"
                   >
                     <div className="flex justify-between items-start mb-10">
                        <h4 className="font-sora text-[32px] font-[200] text-gold-l">{pillar.verb}</h4>
                        <button className="text-w35 hover:text-white">Fechar ×</button>
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {pillar.services.map(s => (
                           <span key={s} className="px-4 py-2 border border-b35 font-urbanist text-[11px] uppercase tracking-widest text-off">
                              {s}
                           </span>
                        ))}
                     </div>
                   </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

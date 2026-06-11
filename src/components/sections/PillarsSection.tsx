import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Key, UsersThree, Buildings, CaretDown, CaretUp } from "@phosphor-icons/react";

const pillars = [
  {
    n: "01",
    verb: "Planejamos",
    tagline: "Tomar as decisões certas antes de mudar.",
    icon: Compass,
    className: "lg:col-span-7 lg:row-span-2",
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
    tagline: "Tudo que precisa para chegar legalmente instalado.",
    icon: Key,
    className: "lg:col-span-5 lg:row-span-1",
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
    tagline: "Mudança que vira transição de vida.",
    icon: UsersThree,
    className: "lg:col-span-5 lg:row-span-1",
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
    tagline: "Para quem quer estruturar a vida financeira.",
    icon: Buildings,
    className: "lg:col-span-12 lg:row-span-1",
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
    <section id="servicos" className="bg-navy-deep py-clamp(110px,14vh,180px) px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-cobre" />
            Quatro pilares
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(32px,5vw,60px)] font-[200] leading-[1.02] text-off"
          >
            "Uma jornada completa."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-[18px] font-[300] text-mut leading-[1.7] max-w-2xl mt-6"
          >
            Não resolvemos tarefas isoladas. Coordenamos a jornada inteira,
            do planejamento à estruturação da vida em Portugal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 grid-rows-auto gap-4">
          {pillars.map((pillar) => (
            <motion.div 
              key={pillar.n} 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setExpanded(expanded === pillar.n ? null : pillar.n)}
              className={`glass glass-hover p-10 lg:p-12 relative overflow-hidden group cursor-pointer transition-all rounded-2xl flex flex-col ${pillar.className}`}
            >
              {/* Ghosted Parallax Number */}
              <div className="font-sora text-[120px] font-[100] text-cobre opacity-[0.03] absolute top-2 right-8 leading-none select-none pointer-events-none group-hover:-translate-y-2 transition-transform duration-1000">
                {pillar.n}
              </div>

              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-8 border-line-cool group-hover:border-cobre transition-colors">
                <pillar.icon weight="thin" size={24} className="text-cobre" />
              </div>

              <h3 className="font-sora text-[32px] font-[200] text-latte leading-none tracking-[-0.02em] mb-4">
                {pillar.verb}
              </h3>
              <p className="font-urbanist text-[14px] italic text-mut mb-8 max-w-[280px]">
                {pillar.tagline}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                 {pillar.services.slice(0, 5).map(s => (
                    <span key={s} className="px-3 py-1.5 glass rounded-full font-urbanist text-[10px] uppercase tracking-widest text-mut group-hover:border-cobre/30 transition-colors">
                       {s}
                    </span>
                 ))}
                 {pillar.services.length > 5 && (
                    <span className="px-3 py-1.5 glass rounded-full font-urbanist text-[10px] uppercase tracking-widest text-cobre opacity-60">
                       + {pillar.services.length - 5} serviços
                    </span>
                 )}
              </div>

              <div className="mt-auto pt-6 border-t border-line-gold flex justify-between items-end">
                 <div>
                   <p className="font-sora text-[10px] font-[400] uppercase tracking-widest text-cobre mb-1">Resultado:</p>
                   <p className="font-urbanist text-[14px] font-[300] text-mut">{pillar.result}</p>
                 </div>
                 {expanded === pillar.n ? <CaretUp weight="thin" size={20} className="text-cobre" /> : <CaretDown weight="thin" size={20} className="text-mut" />}
              </div>

              <AnimatePresence>
                {expanded === pillar.n && (
                   <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     className="absolute inset-0 z-50 glass p-10 lg:p-12 overflow-y-auto"
                   >
                     <div className="flex justify-between items-start mb-10">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 glass rounded-lg flex items-center justify-center border-cobre/40">
                              <pillar.icon weight="thin" size={20} className="text-cobre" />
                           </div>
                           <h4 className="font-sora text-[28px] font-[200] text-latte">{pillar.verb}</h4>
                        </div>
                        <button className="text-mut hover:text-off glass px-4 py-2 rounded-full text-[11px] uppercase tracking-widest transition-colors">Fechar ×</button>
                     </div>
                     <div className="flex flex-wrap gap-3">
                        {pillar.services.map(s => (
                           <span key={s} className="px-5 py-3 glass rounded-xl font-urbanist text-[12px] uppercase tracking-widest text-off border-line-cool hover:border-cobre/50 transition-colors">
                              {s}
                           </span>
                        ))}
                     </div>
                   </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
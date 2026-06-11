import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillars = [
  {
    n: "01",
    verb: "Planejamos",
    tagline: '"Tomar as decisões certas antes de mudar."',
    services: [
      "Strategic Assessment", "Diagnóstico Habitacional", "Diagnóstico Educacional",
      "Diagnóstico Documental", "Diagnóstico Fiscal", "Mapa de Decisão",
      "Estratégia Migratória", "Planeamento Fiscal", "City Experience",
      "Exploração de Bairros", "Planeamento Habitacional", "Avaliação de Crédito"
    ],
    result: "Plano Estratégico de Transição Internacional"
  },
  {
    n: "02",
    verb: "Instalamos",
    tagline: '"Tudo que precisa para chegar e ficar legalmente instalado."',
    services: [
      "Habitação (Busca Ativa, Airbnb Hunting, Visitas, Negociação)",
      "NIF", "NISS", "Número de Utente", "PB4", "Conta Bancária",
      "Carta de Condução", "Passe Navegante", "Abertura de Atividade",
      "Recibos Verdes", "Estatuto de Igualdade", "Airport Pick-up",
      "Concierge completo", "Água", "Gás", "Luz", "Internet", "Ginásio",
      "Traduções Certificadas", "Equivalências de Diplomas"
    ],
    result: "Família legalmente instalada e operando"
  },
  {
    n: "03",
    verb: "Integramos",
    tagline: '"Transformando uma mudança numa transição de vida."',
    services: [
      "School Matching Nacional", "School Matching Internacional",
      "Gestão de Matrículas", "Adaptação Familiar 30 dias", "Adaptação 60 dias",
      "Adaptação 90 dias", "Pet Relocation (TAP/Lufthansa, CVI, VIGIAGRO, recepção)",
      "Lisboa Experience Premium", "City Tour Estratégico",
      "Exploração de Bairros", "Integração Cultural"
    ],
    result: "Uma mudança que vira transição de vida"
  },
  {
    n: "04",
    verb: "Estruturamos",
    tagline: '"Para quem quer estruturar a vida financeira em Portugal."',
    services: [
      "Enquadramento Fiscal", "Simulação de Rendimentos Líquidos",
      "Abertura e Encerramento de Atividade", "Primeira Declaração IRS",
      "Declaração Anual IRS", "Regularização Fiscal",
      "Representação Fiscal para Não Residentes", "Planeamento Internacional",
      "Dupla Tributação", "IVA", "Segurança Social",
      "Constituição de Empresa", "NIPC", "Contabilidade Mensal ENI",
      "Contabilidade Mensal Lda", "Processamento Salarial",
      "Estruturação Societária", "Estruturação Patrimonial",
      "Planeamento de Investimentos", "Apoio a Investidores"
    ],
    result: "Vida financeira estruturada e em conformidade"
  }
];

export function PillarsSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="servicos" className="bg-black-2 py-32 px-6 lg:px-20 relative">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            Quatro pilares
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(28px,4vw,48px)] font-[200] text-white leading-tight mb-8"
          >
            "Uma jornada completa."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[17px] font-[300] text-w35 leading-[1.85] max-w-2xl"
          >
            Não resolvemos tarefas isoladas. Coordenamos a jornada inteira, do planejamento à estruturação da vida em Portugal.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-b18">
          {pillars.map((pillar) => (
            <motion.div 
              key={pillar.n}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setActive(active === pillar.n ? null : pillar.n)}
              className="bg-black-2 p-12 relative group cursor-pointer overflow-hidden flex flex-col min-h-[480px]"
            >
              {/* Ghost number */}
              <div className="absolute top-4 right-8 font-display text-[100px] font-[100] text-gold opacity-[0.05] pointer-events-none group-hover:-translate-y-2 transition-transform duration-700">
                {pillar.n}
              </div>

              <h3 className="font-display text-[40px] font-[200] text-gold-l leading-none tracking-[-0.02em] mb-4">
                {pillar.verb}
              </h3>
              <p className="font-urbanist text-[14px] font-[300] italic text-w35 mb-8">
                {pillar.tagline}
              </p>

              <div className="flex flex-wrap gap-2 mb-12">
                {pillar.services.slice(0, active === pillar.n ? undefined : 6).map((service) => (
                  <span 
                    key={service} 
                    className="border border-b18 px-3 py-1.5 font-body text-[10px] uppercase tracking-widest text-w35 group-hover:border-b35 transition-colors"
                  >
                    {service}
                  </span>
                ))}
                {active !== pillar.n && pillar.services.length > 6 && (
                  <span className="font-urbanist text-[10px] text-gold mt-2 uppercase tracking-widest">+ {pillar.services.length - 6} serviços</span>
                )}
              </div>

              <div className="mt-auto border-t border-b18 pt-8 group-hover:border-gold/30 transition-colors">
                <p className="font-urbanist text-[11px] font-[500] uppercase tracking-widest text-gold mb-1">Resultado:</p>
                <p className="font-urbanist text-[13px] font-[300] text-w35">{pillar.result}</p>
              </div>

              {/* Hover line bottom */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold to-teal transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

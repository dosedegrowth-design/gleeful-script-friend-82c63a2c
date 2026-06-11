import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, Key, UsersThree, Buildings } from "@phosphor-icons/react";
import { useRef } from "react";

const pillars = [
  {
    n: "01",
    verb: "PLANEJAMOS",
    tagline: '"Tomar as decisões certas antes de mudar."',
    icon: Compass,
    services: [
      "Strategic Assessment", "Diagnósticos", "Mapa de Decisão", "Estratégia Migratória", "Planeamento Fiscal"
    ],
    deliverable: "Plano Estratégico de Transição",
    size: "col-span-12 lg:col-span-7",
  },
  {
    n: "02",
    verb: "INSTALAMOS",
    tagline: '"Tudo que precisa para chegar e ficar."',
    icon: Key,
    services: [
      "Habitação Ativa", "NIF/NISS/Utente", "Conta Bancária", "Concierge Completo"
    ],
    deliverable: "Família legalmente instalada",
    size: "col-span-12 lg:col-span-5",
  },
  {
    n: "03",
    verb: "INTEGRAMOS",
    tagline: '"Transformando mudança em vida."',
    icon: UsersThree,
    services: [
      "School Matching", "Adaptação Familiar", "Pet Relocation", "Integração Cultural"
    ],
    deliverable: "Uma transição de vida real",
    size: "col-span-12 lg:col-span-5",
  },
  {
    n: "04",
    verb: "ESTRUTURAMOS",
    tagline: '"Estruturar a vida financeira em Portugal."',
    icon: Buildings,
    services: [
      "Enquadramento Fiscal", "Declaração IRS", "Constituição de Empresa", "Contabilidade Mensal"
    ],
    deliverable: "Conformidade e Eficiência Fiscal",
    size: "col-span-12 lg:col-span-7",
  }
];

export function PillarsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="servicos" className="bg-navy-deep py-[clamp(110px,14vh,180px)] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[700px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-4"
          >
            <span className="w-6 h-px bg-cobre" />
            Quatro pilares
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] tracking-[-0.02em] text-off mb-8"
          >
            Uma jornada <span className="text-latte italic">completa.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[18px] font-[300] text-mut leading-[1.9]"
          >
            Não resolvemos tarefas isoladas. Coordenamos a jornada inteira, do planejamento à estruturação da vida em Portugal.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={pillar.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${pillar.size} bento-card p-12 lg:p-14 flex flex-col group relative`}
            >
              <motion.div 
                style={{ y: useTransform(scrollYProgress, [0, 1], [20, -60]) }}
                className="absolute top-10 right-14 font-sora text-[140px] font-[100] text-off/5 leading-none pointer-events-none select-none"
              >
                {pillar.n}
              </motion.div>

              <div className="w-14 h-14 rounded-2xl bg-navy-deep flex items-center justify-center border border-line-cool mb-12 group-hover:border-cobre/40 transition-colors duration-500">
                <pillar.icon size={28} weight="thin" className="text-cobre group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
              </div>
              
              <h3 className="font-sora text-[28px] font-[300] text-latte mb-3 tracking-[-0.02em]">
                {pillar.verb}
              </h3>
              <p className="font-urbanist text-[15px] font-[300] text-mut italic mb-10 leading-relaxed">
                {pillar.tagline}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-12 max-w-[440px]">
                {pillar.services.map((service) => (
                  <span key={service} className="font-urbanist text-[11px] tracking-[0.1em] uppercase text-mut-2 px-3 py-1.5 border border-line-cool rounded-full group-hover:border-cobre/20 transition-colors">
                    {service}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-8 border-t border-line-cool flex items-center justify-between">
                <div>
                  <p className="font-urbanist text-[11px] tracking-[0.2em] uppercase text-cobre mb-1 font-[500]">Resultado</p>
                  <p className="font-urbanist text-[14px] text-off font-[300]">{pillar.deliverable}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-line-cool flex items-center justify-center group-hover:bg-cobre group-hover:text-navy-deep transition-all duration-500">
                  <Compass size={18} weight="thin" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cobre to-harbour w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

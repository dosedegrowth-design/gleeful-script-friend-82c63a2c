import { motion } from "framer-motion";
import { RotatingLogo } from "@/components/ui/RotatingLogo";

export function ProcessSection() {
  const steps = [
    {
      id: "01",
      tag: "Sem custo · Calendly",
      title: "Entendemos o seu contexto",
      body: "Uma conversa direta com o founder, sem script, sem chatbot. Validamos o fit e mostramos como a MOOVIA pensa o seu caso.",
      badge: "Sem custo · Agendamento via Calendly",
    },
    {
      id: "02",
      tag: "Diagnóstico",
      title: "O primeiro trabalho real",
      body: "90 minutos com entregável físico. Mapeamento completo de perfil, riscos, estratégias e cronograma. Não é consulta: é diagnóstico.",
      badge: "Entregável físico",
    },
    {
      id: "03",
      tag: "Sob medida",
      title: "Coordenação completa",
      body: "Do visto ao apartamento, da escola ao banco. Um único ponto de responsabilidade para a decisão mais importante da sua família.",
      badge: "Mandato completo",
    },
    {
      id: "90",
      tag: "Único no mercado",
      title: "Chegar é metade",
      body: "Os 90 dias após o pouso são os mais críticos. Adaptação familiar, rotina, integração. Nenhum concorrente acompanha este período de forma estruturada.",
      badge: "Pós-chegada",
    },
  ];

  return (
    <section id="processo" className="bg-black py-32 px-6 lg:px-20 relative overflow-hidden">
      <RotatingLogo size="min(110vw,1400px)" opacity={0.03} duration={140} />
      <div className="mx-auto max-w-[1400px] relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            Como trabalhamos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(28px,4.5vw,60px)] font-[200] text-white leading-[0.95] tracking-[-0.04em]"
          >
            "Um processo.<br />Do diagnóstico ao destino."
          </motion.h2>
        </div>

        {/* Horizontal step flow */}
        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-b18" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-12 h-12 border border-b18 bg-black flex items-center justify-center font-display text-[14px] text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 z-10">
                    {step.id}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block flex-1 h-px bg-b18" />
                  )}
                </div>
                <p className="font-body text-[11px] font-[400] text-gold-m uppercase tracking-[0.15em] mb-3">
                  {step.tag}
                </p>
                <h3 className="font-display text-[22px] font-[300] text-white mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="font-body text-[14px] font-[300] text-w35 leading-[1.75] mb-6">
                  {step.body}
                </p>
                <div className="mt-auto px-3 py-2 bg-w05 border border-b18 w-fit">
                  <span className="font-body text-[10px] font-[500] uppercase tracking-widest text-gold-l">
                    {step.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

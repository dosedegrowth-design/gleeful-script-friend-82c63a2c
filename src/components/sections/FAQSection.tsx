import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react";

const faqs = [
  { q: "O que exatamente a MOOVIA Portugal faz?", a: "A MOOVIA Portugal coordena a jornada completa de transição internacional, do diagnóstico estratégico até 90 dias após a chegada. Não somos uma empresa de imigração, não somos uma imobiliária, não somos uma escola. Somos o único ponto de responsabilidade." },
  { q: "O que é o Strategic Assessment de €250?", a: "O Strategic Assessment é o primeiro trabalho estratégico da MOOVIA. São 90 minutos com entregável físico: um mapeamento completo de perfil, riscos, estratégias e cronograma. Os €250 são abatidos integralmente no mandato." },
  { q: "Qual a diferença entre a MOOVIA e uma empresa de imigração?", a: "Uma empresa de imigração resolve o seu visto. A MOOVIA coordena a decisão inteira, da habitação à escola, do banco à estrutura fiscal. O visto é uma das dezenas de peças que organizamos." },
  { q: "A MOOVIA trabalha com pacotes ou planos de serviço?", a: "Não. Cada mandato é desenhado sob medida a partir do seu Assessment. Não existe plano A, B ou C. Existe um mandato personalizado." },
  { q: "Quanto tempo leva o processo de transição?", a: "Depende da complexidade, mas a maioria das transições se estrutura ao longo de alguns meses de planeamento e execução, seguidos dos 90 dias de acompanhamento." },
  { q: "Quanto custa a transição completa com a MOOVIA?", a: "O Assessment é €250, abatidos no mandato. O mandato varia entre €3.000 e €10.000 conforme o escopo definido no diagnóstico." },
  { q: "A MOOVIA atende apenas brasileiros?", a: "O foco principal é o corredor Brasil para Portugal, mas atendemos também clientes de África lusófona." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-navy py-[clamp(110px,14vh,180px)] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_1.5fr] gap-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-4"
          >
            <span className="w-6 h-px bg-cobre" />
            Perguntas frequentes
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(28px,4vw,44px)] font-[200] leading-[1.15] text-off mb-8"
          >
            O que as pessoas perguntam<br />antes de decidir.
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="overflow-hidden border-b border-line-cool last:border-0">
                <button
                  className="w-full py-8 flex justify-between items-center gap-8 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={`font-urbanist text-[18px] transition-colors duration-500 ${isOpen ? "text-latte" : "text-off group-hover:text-off"}`}>
                    {f.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-cobre border-cobre text-navy-deep rotate-45" : "border-line-gold text-cobre"}`}>
                    <Plus size={16} weight="thin" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-10 pr-10">
                        <p className="font-urbanist text-[16px] font-[300] text-mut leading-[1.85] max-w-[600px]">
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

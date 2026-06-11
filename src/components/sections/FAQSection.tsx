import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "@phosphor-icons/react";

const faqs = [
  { 
    q: "O que exatamente a MOOVIA Portugal faz?", 
    a: "A MOOVIA Portugal coordena a jornada completa de transição internacional, do diagnóstico estratégico até os 90 dias após a chegada. Não somos uma empresa de imigração, não somos uma imobiliária, não somos uma escola. Somos o único ponto de responsabilidade para uma decisão que normalmente exige coordenar dez fornecedores diferentes ao mesmo tempo." 
  },
  { 
    q: "O que é o Strategic Assessment de €250?", 
    a: "É o primeiro produto da MOOVIA: não uma consulta, mas um trabalho estratégico real com entregável físico. 90 minutos com o founder, mapeamento completo de perfil, riscos, estratégias e cronograma. Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA." 
  },
  { 
    q: "Qual a diferença entre a MOOVIA e uma empresa de imigração?", 
    a: "Uma empresa de imigração resolve o visto. A MOOVIA coordena a decisão inteira: escola, imóvel, fiscalidade, integração familiar e os 90 dias depois da chegada. Você não nos contrata para resolver um problema. Nos contrata para que os problemas não apareçam." 
  },
  { 
    q: "A MOOVIA trabalha com pacotes ou planos de serviço?", 
    a: "Não. Cada cliente recebe uma proposta construída a partir do seu diagnóstico. Não existe plano A, B ou C. Existe um mandato personalizado. Um alfaiate não tem prateleira. Nós também não." 
  },
  { 
    q: "Quanto tempo leva o processo de transição?", 
    a: "Depende do perfil. Um profissional de TI com proposta de trabalho pode estar operacional em Portugal em 30 a 90 dias. Uma família em transição patrimonial pode levar de 3 a 12 meses. O cronograma real é definido no Assessment, a primeira resposta concreta que você recebe." 
  },
  { 
    q: "Quanto custa a transição completa com a MOOVIA?", 
    a: "Não publicamos tabela de preços porque não existem pacotes. O Assessment custa €250, abatidos no mandato. O mandato completo varia entre €3.000 e €10.000 dependendo do perfil, do corredor e da complexidade." 
  },
  { 
    q: "A MOOVIA atende apenas brasileiros?", 
    a: "O foco principal é o corredor Brasil para Portugal. Atendemos também clientes de África lusófona. Se o seu caso está fora desses corredores, a conversa de qualificação define se temos o perfil certo." 
  }
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-navy-deep py-[clamp(110px,14vh,180px)] px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre mb-6 flex items-center gap-4"
        >
          <span className="w-6 h-px bg-cobre" />
          Perguntas frequentes
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-[clamp(28px,4vw,44px)] font-[200] leading-[1.02] text-off mb-16"
        >
          O que as pessoas perguntam<br />antes de decidir.
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glass rounded-2xl overflow-hidden border-line-cool">
                <button
                  className={`w-full py-7 px-8 flex justify-between items-center text-left transition-colors ${isOpen ? 'bg-navy-raise' : 'hover:bg-navy-rich'}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-urbanist text-[17px] text-off font-[400] pr-8">{f.q}</span>
                  <div className="shrink-0 text-cobre">
                    {isOpen ? <X weight="thin" size={20} /> : <Plus weight="thin" size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-8">
                        <p className="font-urbanist text-[16px] font-[300] text-mut leading-[1.7] border-t border-line-cool pt-6">
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
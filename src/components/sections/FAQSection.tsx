import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

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
      a: "Uma empresa de imigração resolve o visto. A MOOVIA coordena a decisão inteira, escola, imóvel, fiscalidade, integração familiar e os 90 dias depois da chegada. Você não nos contrata para resolver um problema. Nos contrata para que os problemas não apareçam."
    },
    {
      q: "A MOOVIA trabalha com pacotes ou planos de serviço?",
      a: "Não. Cada cliente recebe uma proposta construída a partir do seu diagnóstico. Não existe plano A, B ou C. Existe um mandato personalizado. Um alfaiate não tem prateleira. Nós também não."
    },
    {
      q: "Quanto tempo leva o processo de transição?",
      a: "Depende do perfil. Um profissional de TI com proposta de trabalho pode estar operacional em Portugal em 30 a 90 dias. Uma família em transição patrimonial pode levar de 3 a 12 meses. O cronograma real é definido no Assessment."
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

  return (
    <section className="bg-black py-32 px-6 lg:px-20 relative">
      <div className="mx-auto max-w-3xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6 text-center lg:text-left"
        >
          Perguntas frequentes
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(28px,4.5vw,56px)] font-[200] text-white leading-[0.95] tracking-[-0.04em] mb-20 text-center lg:text-left uppercase"
        >
          O que as pessoas perguntam<br/>antes de decidir.
        </motion.h2>

        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <div key={i} className="flex flex-col">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="bg-black-2 p-8 flex justify-between items-center group hover:bg-black-3 transition-colors"
              >
                <span className="font-body text-[16px] text-white text-left pr-8">{faq.q}</span>
                <span className={`font-display text-[20px] text-gold transition-transform duration-300 ${active === i ? "rotate-45" : ""}`}>+</span>
              </button>
              
              <AnimatePresence>
                {active === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-w05 border-l-2 border-gold"
                  >
                    <div className="p-8 font-body text-[15px] font-[300] text-w35 leading-[1.85]">
                      {faq.a}
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

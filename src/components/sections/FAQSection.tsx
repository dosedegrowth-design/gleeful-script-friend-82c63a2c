import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Plus } from "lucide-react";

const faqs = [
  { q: "O que exatamente a MOOVIA Portugal faz?", a: "A MOOVIA Portugal coordena a jornada completa de transição internacional, do diagnóstico estratégico até os 90 dias após a chegada. Não somos uma empresa de imigração, não somos uma imobiliária, não somos uma escola. Somos o único ponto de responsabilidade para uma decisão que normalmente exige coordenar dez fornecedores differentes ao mesmo tempo." },
  { q: "O que é o Strategic Assessment de €250?", a: "É o primeiro produto da MOOVIA: não uma consulta, mas um trabalho estratégico real com entregável físico. 90 minutos com o founder, mapeamento completo do perfil, e um documento com mapa de decisão, estratégias e cronograma. Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA." },
  { q: "Qual a diferença entre a MOOVIA e uma empresa de imigração?", a: "Uma empresa de imigração resolve o visto. A MOOVIA coordena a decisão inteira, escola, imóvel, fiscalidade, integração familiar e os 90 dias depois da chegada. Você não nos contrata para resolver um problema. Nos contrata para que os problemas não apareçam." },
  { q: "A MOOVIA trabalha com pacotes ou planos de serviço?", a: "Não. Cada cliente recebe uma proposta construída a partir do seu diagnóstico. Não existe plano A, B ou C. Existe um mandato personalizado. Um alfaiate não tem prateleira. Nós também não." },
  { q: "Quanto tempo leva o processo de transição?", a: "Depende do perfil. Um profissional de TI com proposta de trabalho pode estar operacional em Portugal em 30 a 90 dias. Uma família em transição patrimonial pode levar de 3 a 12 meses. O cronograma real é definido no Assessment, a primeira resposta concreta que você recebe." },
  { q: "Quanto custa a transição completa com a MOOVIA?", a: "Não publicamos tabela de preços porque não existem pacotes. O Assessment custa €250, abatidos no mandato. O mandato completo varia entre €3.000 e €10.000 dependendo do perfil, do corredor e da complexidade." },
  { q: "A MOOVIA atende apenas brasileiros?", a: "O foco principal é o corredor Brasil para Portugal. Atendemos também clientes de África lusófona. Se o seu caso está fora desses corredores, a conversa de qualificação define se temos o perfil certo." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-black-2 py-[120px] px-6 lg:px-[80px]">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Perguntas frequentes
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-amotha text-[clamp(28px,4vw,44px)] font-extralight leading-[1.15] text-white">
            O que as pessoas perguntam<br />antes de decidir.
          </h2>

        </Reveal>
        <div className="mt-16 border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  className="w-full py-7 flex justify-between items-center gap-6 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-urbanist text-[16px] font-normal text-white">{f.q}</span>
                  <Plus
                    size={20}
                    className="text-gold shrink-0 mt-[6px] transition-transform duration-400"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                  />
                </button>
                {isOpen && (
                  <div className="pb-8 pr-10 border-l-2 border-gold bg-gold/5 p-6 mb-6">
                    <p className="font-urbanist text-[15px] font-light text-white-3 leading-[1.85]">
                      {f.a}
                    </p>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";


const faqs = [
  { q: "O que exatamente a MOOVIA Portugal faz?", a: "A MOOVIA Portugal coordena a jornada completa de transição internacional, do diagnóstico estratégico até 90 dias após a chegada. Não somos uma empresa de imigração, não somos uma imobiliária, não somos uma escola. Somos o único ponto de responsabilidade para uma decisão que normalmente exige coordenar dez fornecedores diferentes ao mesmo tempo." },
  { q: "O que é o Strategic Assessment de €250?", a: "O Strategic Assessment é o primeiro trabalho estratégico da MOOVIA. São 90 minutos com entregável físico: um mapeamento completo de perfil, riscos, estratégias e cronograma da sua transição. Não é uma consulta, é um diagnóstico. Os €250 são abatidos integralmente caso decida seguir com o mandato." },
  { q: "Qual a diferença entre a MOOVIA e uma empresa de imigração?", a: "Uma empresa de imigração resolve o seu visto. A MOOVIA coordena a decisão inteira, da habitação à escola, do banco à estrutura fiscal, da chegada à adaptação da família. O visto é uma das dezenas de peças que organizamos, não o produto final." },
  { q: "A MOOVIA trabalha com pacotes ou planos de serviço?", a: "Não trabalhamos com pacotes ou planos prontos. Cada mandato é desenhado sob medida a partir do seu Assessment, porque duas famílias nunca chegam a Portugal pelo mesmo caminho. O escopo nasce do diagnóstico, não de uma prateleira." },
  { q: "Quanto tempo leva o processo de transição?", a: "Depende da complexidade do seu caso, mas a maioria das transições se estrutura ao longo de alguns meses de planeamento e execução, seguidos dos 90 dias de acompanhamento pós-chegada. O cronograma exato faz parte do que entregamos no Assessment." },
  { q: "Quanto custa a transição completa com a MOOVIA?", a: "O Assessment é €250, abatidos no mandato. O mandato varia entre €3.000 e €10.000 conforme o escopo definido no diagnóstico. Não cobramos por tarefa avulsa, cobramos pela coordenação completa da decisão." },
  { q: "A MOOVIA atende apenas brasileiros?", a: "O corredor principal é Brasil para Portugal, mas também coordenamos transições da África Lusófona. O que define o nosso trabalho não é a nacionalidade, é a complexidade da decisão de reconstruir uma vida noutro país." },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-black-2 py-[120px] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="font-sora text-[11px] tracking-[0.34em] uppercase text-gold mb-6 flex items-center gap-3">
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
                  className="w-full py-7 flex justify-between items-center gap-6 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-sora text-[16px] font-normal text-white group-hover:text-gold transition-colors">{f.q}</span>
                  <Plus
                    size={20}
                    className="text-gold shrink-0 transition-transform duration-400"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                  />
                </button>
                {isOpen && (
                  <div className="overflow-hidden animate-[fadeUp_0.4s_ease_forwards]">
                    <div className="pb-8 pr-10 border-l-2 border-gold bg-gold/5 p-6 mb-6">
                      <p className="font-urbanist text-[15px] font-light text-white-3 leading-[1.85]">
                        {f.a}
                      </p>
                    </div>
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
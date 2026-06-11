import { Reveal } from "@/components/site/Reveal";


export function FoundersSection() {
  return (
    <section id="sobre" className="bg-black py-[120px] px-6 lg:px-[80px] relative z-[1] pointer-events-none">
      <div className="mx-auto max-w-[1400px] pointer-events-auto">
        <div className="max-w-3xl">
          <Reveal>
            <div className="font-sora text-[11px] tracking-[0.34em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Os fundadores são o produto
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-amotha text-[clamp(32px,4vw,60px)] font-extralight leading-[1.1] text-white">
              Antes de coordenar transições internacionais,<br />vivemos as nossas.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 font-urbanist text-[17px] font-light text-white-3 leading-relaxed max-w-2xl">
              Background de Deloitte, Oracle e SAP. Cada sócio passou pelo processo que coordenamos.
              Essa experiência não é marketing: é o único diferencial que nenhum concorrente consegue
              replicar.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div
              className="aspect-[4/5] w-full bg-white-5 border border-border relative"
            >
              <div className="absolute inset-0 flex items-end p-6">
                <span className="font-urbanist text-[10px] uppercase tracking-[0.22em] text-gold-l">
                  Frederico Prado · Lisboa
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div>
              <p className="font-urbanist text-[11px] tracking-[0.2em] uppercase text-gold mb-4">Founder & Senior Advisor</p>
              <h3 className="font-amotha text-4xl font-extralight text-white">Frederico Prado</h3>
              <p className="mt-6 font-urbanist text-[17px] font-light text-white-3 leading-relaxed">
                29 anos em TI. Oracle, SAP, projetos enterprise de médio e grande porte. Veio para
                Portugal em 2018 com a família e passou pelo que todo cliente nosso passa. Hoje
                coordena cada mandato com a precisão de quem já resolveu isso dezenas de vezes.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Oracle", "SAP", "Lisboa, 2018", "TI · 29 anos"].map((t) => (
                  <span key={t} className="px-3 py-1 font-urbanist text-[11px] tracking-[0.12em] uppercase border border-border text-white-3">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>



        <Reveal>
          <div className="mt-20 p-10 md:p-14 border-l-[3px] border-gold bg-gold/5 animate-[fadeUp_1s_ease_forwards]">
            <p className="font-amotha text-[clamp(22px,2.4vw,28px)] font-extralight leading-snug italic text-gold-m">
              "Vamos coordenar a sua transição internacional com o mesmo nível de cuidado, estrutura
              e atenção que gostaríamos de ter recebido na nossa."
            </p>
          </div>

        </Reveal>
      </div>
    </section>
  );
}

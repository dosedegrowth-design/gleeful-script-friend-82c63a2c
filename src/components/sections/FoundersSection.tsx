import { Reveal } from "@/components/site/Reveal";


export function FoundersSection() {
  return (
    <section id="sobre" className="bg-black py-[120px] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] pointer-events-auto">
        <div className="max-w-3xl">
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Os fundadores são o produto
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.1] text-white">
              Antes de coordenar transições internacionais,<br />vivemos as <span className="text-gold-l italic font-[200]">nossas.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 font-urbanist text-[17px] font-[300] text-white/35 leading-relaxed max-w-[600px]">
              Background de Deloitte, Oracle e SAP. Cada sócio passou pelo processo que coordenamos.
              Essa experiência não é marketing: é o único diferencial que nenhum concorrente consegue
              replicar.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div
              className="aspect-[4/5] w-full max-w-[340px] bg-black-3 border border-border relative overflow-hidden group"
            >
              <img 
                src="/images/frederico.png" 
                alt="Frederico Prado" 

                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span className="font-urbanist text-[12px] font-[300] tracking-[0.22em] text-white/35">
                  Frederico Prado · Lisboa
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div>
              <p className="font-urbanist text-[11px] tracking-[0.18em] uppercase text-gold mb-1">Founder & Senior Advisor</p>
              <h3 className="font-sora text-[28px] font-[200] text-white mb-4">Frederico Prado</h3>
              <div className="mt-6 mb-8 flex flex-wrap gap-2">
                {["Oracle", "SAP", "MBA FGV", "Tampa", "Lisboa, 2018"].map((t) => (
                  <span key={t} className="px-3 py-1 font-urbanist text-[11px] tracking-[0.1em] uppercase border border-border text-white/35">{t}</span>
                ))}
              </div>
              <p className="font-urbanist text-[16px] font-[300] text-white/35 leading-[1.9]">
                29 anos em TI multinacional. MBA em Empreendedorismo FGV. Formação em
                Comunicação na University of Tampa. Em Lisboa desde 2018 com a família.
                Viveu a transição que hoje coordena e conduz pessoalmente cada mandato.
              </p>
            </div>
          </Reveal>
        </div>



        <Reveal>
          <div className="mt-20 p-8 md:p-10 border-l-2 border-gold bg-gold/5">
            <p className="font-sora text-[20px] font-[200] leading-snug italic text-gold-m">
              "Vamos coordenar a sua transição internacional com o mesmo nível de cuidado,
               estrutura e atenção que gostaríamos de ter recebido na nossa."
            </p>
          </div>

        </Reveal>
      </div>
    </section>
  );
}

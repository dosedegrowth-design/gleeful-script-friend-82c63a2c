import { Reveal } from "@/components/site/Reveal";

const partners = [
  { name: "Felipe", role: "Conselheiro Estratégico · ex-Deloitte" },
  { name: "Pablo", role: "Especialista em Ativos Digitais" },
  { name: "Sara Russo", role: "Imobiliária · Remax Collection" },
  { name: "Laura", role: "Advogada de Imigração" },
];

export function FoundersSection() {
  return (
    <section id="sobre" className="bg-black py-[120px] px-6 lg:px-[80px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Os fundadores são o produto
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(32px,4vw,60px)] font-extralight leading-[1.1] text-white">
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
              <h3 className="font-sora text-4xl font-extralight text-white">Frederico Prado</h3>
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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className="p-8 h-full bg-black-2 hover:bg-black-3 transition-colors">
                <div className="font-sora text-xl font-light text-white">{p.name}</div>
                <div className="mt-2 font-urbanist text-[12px] uppercase tracking-[0.12em] text-gold">{p.role}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 p-10 md:p-14 border-l-[3px] border-gold bg-gold/5">
            <p className="font-sora text-[clamp(20px,2.4vw,28px)] font-extralight leading-snug italic text-gold-l">
              Vamos coordenar a sua transição internacional com o mesmo nível de cuidado, estrutura
              e atenção que gostaríamos de ter recebido na nossa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/site/Reveal";

const partners = [
  { name: "Felipe", role: "Conselheiro Estratégico · ex-Deloitte" },
  { name: "Pablo", role: "Especialista em Ativos Digitais" },
  { name: "Sara Russo", role: "Imobiliária · Remax Collection" },
  { name: "Laura", role: "Advogada de Imigração" },
];

export function FoundersSection() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow mb-6">Os fundadores são o produto</p></Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(32px,5vw,56px)] leading-[1.1]" style={{ fontWeight: 200 }}>
              Antes de coordenar transições internacionais,<br />vivemos as nossas.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-[17px] leading-relaxed max-w-2xl" style={{ color: "var(--stone)", fontWeight: 300 }}>
              Background de Deloitte, Oracle e SAP. Cada sócio passou pelo processo que coordenamos.
              Essa experiência não é marketing: é o único diferencial que nenhum concorrente consegue
              replicar.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <div
              className="aspect-[4/5] w-full"
              style={{
                background: "linear-gradient(135deg, var(--stone-light), var(--copper-light))",
                position: "relative",
              }}
            >
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--copper-dark)" }}>
                  Frederico Prado · Lisboa
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div>
              <p className="eyebrow mb-4">Founder & Senior Advisor</p>
              <h3 className="font-display text-4xl" style={{ fontWeight: 200 }}>Frederico Prado</h3>
              <p className="mt-6 text-[17px] leading-relaxed" style={{ color: "var(--ink-mid)", fontWeight: 300 }}>
                29 anos em TI. Oracle, SAP, projetos enterprise de médio e grande porte. Veio para
                Portugal em 2018 com a família e passou pelo que todo cliente nosso passa. Hoje
                coordena cada mandato com a precisão de quem já resolveu isso dezenas de vezes.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Oracle", "SAP", "Lisboa, 2018", "TI · 29 anos"].map((t) => (
                  <span key={t} className="px-3 py-1 text-[11px] tracking-[0.12em] uppercase border" style={{ borderColor: "var(--line)", color: "var(--ink-light)" }}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-px" style={{ background: "var(--line)" }}>
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <div className="p-8 h-full" style={{ background: "#FFFFFF" }}>
                <div className="font-display text-xl" style={{ fontWeight: 300 }}>{p.name}</div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.12em]" style={{ color: "var(--copper)" }}>{p.role}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 p-10 md:p-14 border-l-[3px]" style={{ background: "var(--copper-light)", borderColor: "var(--copper)" }}>
            <p className="font-display text-[clamp(20px,2.4vw,28px)] leading-snug italic" style={{ color: "var(--copper-dark)", fontWeight: 200 }}>
              Vamos coordenar a sua transição internacional com o mesmo nível de cuidado, estrutura
              e atenção que gostaríamos de ter recebido na nossa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

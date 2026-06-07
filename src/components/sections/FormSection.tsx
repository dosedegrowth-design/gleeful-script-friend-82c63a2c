import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "./LeadForm";

export function FormSection() {
  return (
    <section id="form" className="py-28 md:py-40 px-6 md:px-10" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
        <div>
          <Reveal><p className="eyebrow mb-6">Avaliar meu caso</p></Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(32px,5vw,52px)] leading-[1.1]" style={{ fontWeight: 200 }}>
              O primeiro passo<br />é a conversa certa.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-[17px] leading-relaxed" style={{ color: "var(--stone)", fontWeight: 300 }}>
              Não é um formulário de contacto. É o início de um diagnóstico. Quanto mais você nos
              contar, mais preciso será o nosso retorno.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 p-6 border-l-[3px]" style={{ borderColor: "var(--copper)", background: "var(--ivory)" }}>
              <p className="font-display italic text-[18px] leading-relaxed" style={{ color: "var(--ink-mid)", fontWeight: 200 }}>
                Cada contacto é respondido pessoalmente pelo Frederico, sem chatbot, sem script.
              </p>
            </div>
          </Reveal>
        </div>
        <div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

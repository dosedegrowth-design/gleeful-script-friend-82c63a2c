import { Reveal } from "@/components/site/Reveal";

export function ManifestoSection() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-10 relative overflow-hidden" style={{ background: "var(--stone-light)" }}>
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 font-display select-none pointer-events-none"
        style={{ color: "var(--line)", fontSize: "clamp(140px, 22vw, 280px)", lineHeight: 1 }}
      >
        10
      </div>
      <div className="mx-auto max-w-3xl text-center relative z-10">
        <Reveal>
          <h2 className="font-display text-[clamp(30px,4.5vw,46px)] leading-[1.15]">
            Acompanhamos um número limitado<br />de mandatos em simultâneo.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 text-[17px] leading-relaxed" style={{ color: "var(--stone)", fontWeight: 300 }}>
            Não por limitação operacional, porque acreditamos que decisões desta importância exigem
            acompanhamento próximo, coordenação ativa e atenção individual. Para preservar este
            nível, aceitamos apenas o número de novos mandatos que conseguimos coordenar com a
            qualidade que a decisão exige.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-10 font-display italic text-xl" style={{ color: "var(--copper-dark)" }}>
            Se o seu caso merece isso, este é o lugar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
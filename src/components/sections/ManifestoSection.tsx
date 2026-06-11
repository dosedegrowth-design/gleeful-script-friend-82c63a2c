import { Reveal } from "@/components/site/Reveal";

export function ManifestoSection() {
  return (
    <section className="bg-black py-40 px-6 lg:px-20 flex items-center justify-center text-center relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(15,31,65,.4) 0%, transparent 70%)"
        }}
      />
      
      <div className="max-w-4xl relative z-10">
        <Reveal>
          <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-10">
            A posição da marca
          </div>
        </Reveal>

        <div className="font-sora text-[200px] font-[100] text-gold opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none pointer-events-none">
          ∞
        </div>
        
        <Reveal delay={120}>
          <h2 className="font-sora text-[clamp(26px,4vw,56px)] font-[200] leading-[1.2] text-white max-w-[820px] mx-auto mb-10">
            "Acompanhamos um número limitado de mandatos em simultâneo."
          </h2>
        </Reveal>
        
        <Reveal delay={240}>
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
        </Reveal>
        
        <Reveal delay={360}>
          <p className="font-urbanist text-[17px] font-[300] text-w35 leading-[1.9] max-w-[560px] mx-auto mb-8">
            Não por limitação operacional, porque acreditamos que decisões desta
            importância exigem acompanhamento próximo, coordenação ativa e atenção
            individual. Para preservar este nível, aceitamos apenas o número de novos
            mandatos que conseguimos coordenar com a qualidade que a decisão exige.
          </p>
          <p className="font-urbanist text-[16px] font-[300] text-w35 mx-auto">
            Se o seu caso merece isso, este é o lugar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

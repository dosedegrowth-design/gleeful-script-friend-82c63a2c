import { Reveal } from "@/components/site/Reveal";

export function ManifestoSection() {
  return (
    <section className="bg-black py-[160px] px-6 lg:px-[80px] flex items-center justify-center text-center relative overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(15,31,65,0.4) 0%, transparent 70%)"
        }}
      />
      
      <div className="max-w-[900px] relative z-[100] isolate pointer-events-auto">
        <Reveal>
          <div className="font-sora text-[11px] tracking-[0.34em] uppercase text-gold mb-4 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Boutique Manifesto
            <span className="w-6 h-px bg-gold" />
          </div>
        </Reveal>
        
        <Reveal delay={120}>
          <h2 className="font-amotha text-[clamp(26px,4vw,56px)] font-extralight leading-[1.2] tracking-[-0.02em] text-white mb-10">
            Acompanhamos um número limitado de mandatos em simultâneo.
          </h2>
        </Reveal>
        
        <Reveal delay={240}>
          <div className="w-12 h-px bg-gold mx-auto mb-10" />
        </Reveal>
        
        <Reveal delay={360}>
          <p className="font-urbanist text-[17px] font-light text-white-3 leading-[1.9] max-w-[620px] mx-auto">
            Não por limitação operacional, porque acreditamos que decisões desta importância exigem acompanhamento próximo, coordenação ativa e atenção individual. Para preservar este nível, aceitamos apenas o número de novos mandatos que conseguimos coordenar com a qualidade que a decisão exige.
          </p>
          <p className="mt-8 font-sora text-[15px] font-medium tracking-[0.2em] text-gold uppercase">
            Se o seu caso merece isso, este é o lugar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

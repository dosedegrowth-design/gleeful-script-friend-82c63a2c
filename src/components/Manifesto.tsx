export const Manifesto = () => {
  return (
    <section className="relative bg-black py-[160px] px-8 overflow-hidden text-center">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(15,31,65,0.4) 0%, transparent 70%)'
        }}
      />
      
      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="font-urbanist font-normal text-[11px] uppercase tracking-[0.32em] text-gold-m mb-12 reveal">
          A posição da marca
        </div>

        <blockquote className="font-sora font-extralight text-[clamp(26px,4vw,56px)] leading-[1.2] text-white max-w-[900px] mx-auto mb-16 reveal">
          "O mercado resolve tarefas.<br />
          <span className="text-gold-l italic">A MOOVIA resolve a decisão.</span>"
        </blockquote>

        <div className="w-12 h-[2px] bg-gold mx-auto mb-16 reveal" />

        <p className="font-urbanist font-light text-[17px] text-white/35 max-w-[560px] mx-auto leading-relaxed reveal">
          Acompanhamos um número limitado de mandatos em simultâneo.
          Não por limitação operacional, porque acreditamos que decisões desta
          importância exigem acompanhamento próximo, coordenação ativa
          e atenção individual.
        </p>
      </div>
    </section>
  );
};

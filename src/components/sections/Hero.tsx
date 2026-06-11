import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative min-h-[100svh] flex flex-col lg:flex-row items-center overflow-hidden z-[1]"

    >
      <div className="absolute inset-0 z-0 bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 75% 20%, rgba(173,137,87,0.15) 0%, transparent 70%),
                         radial-gradient(ellipse 40% 60% at 20% 80%, rgba(15,31,65,0.4) 0%, transparent 60%)`
          }}
        />
      </div>

      {/* Large Decorative Azulejo */}
      <div 
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60vw] max-w-[800px] aspect-square opacity-[0.06] z-[1]"
        style={{
          transform: `translateY(calc(-50% + ${scrollY * 0.1}px)) rotate(${scrollY * 0.015}deg)`
        }}
      >
        <img 
          src="/mooviagold.png" 
          alt="Decorative Logo" 
          className="w-full h-full opacity-40 animate-[slowspin_180s_linear_infinite] pointer-events-none select-none object-contain"
        />
      </div>

      <div className="relative z-[100] px-8 lg:px-[100px] pt-[160px] pb-[120px] flex-1 isolate">
        <p className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-10 flex items-center gap-8 animate-[fadeUp_0.8s_ease_0.3s_forwards] opacity-0 will-change-transform">
          <span className="w-8 h-px bg-gold" />
          Coordenação Internacional de Vida e Património
        </p>
        
        <h1 className="font-sora text-[clamp(44px,5.5vw,82px)] font-[100] leading-[1.04] tracking-[-0.02em] mb-12 text-white will-change-transform max-w-[900px]">
          <span className="block overflow-hidden h-[1.15em]">
            <span className="inline-block animate-[slideUp_1.1s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.5s]">Você não precisa</span>
          </span>
          <span className="block overflow-hidden h-[1.15em]">
            <span className="inline-block animate-[slideUp_1.1s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.7s]">de mais informação.</span>
          </span>
          <span className="block overflow-hidden h-[1.15em]">
            <span className="inline-block font-[200] animate-[slideUp_1.1s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.9s]">Precisa de alguém</span>
          </span>
          <span className="block overflow-hidden h-[1.15em]">
            <span className="inline-block font-[200] animate-[slideUp_1.1s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:1.1s]">que coordene</span>
          </span>
          <span className="block overflow-hidden h-[1.15em]">
            <span className="inline-block font-[200] text-gold-l animate-[slideUp_1.1s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:1.3s] italic">a decisão.</span>
          </span>
        </h1>

        <p className="font-urbanist text-[17px] font-[300] text-white/35 leading-[1.85] max-w-[460px] mb-[64px] animate-[fadeUp_0.8s_ease_1.3s_forwards] opacity-0">
          A MOOVIA Portugal não resolve tarefas isoladas. Coordenação completa, do primeiro diagnóstico aos 90 dias depois da chegada.
        </p>

        <div className="flex flex-wrap gap-5 animate-[fadeUp_0.8s_ease_1.5s_forwards] opacity-0">
          <Link
            to="/contacto"
            className="bg-gold text-black font-urbanist text-[12px] font-[600] tracking-[0.2em] uppercase px-10 py-4 relative overflow-hidden group transition-all duration-300"
          >
            <span className="relative z-10">Avaliar meu caso</span>
            <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 pointer-events-none" />
          </Link>
          <a
            href="#processo"
            className="bg-transparent border border-border text-white-3 font-urbanist text-[12px] font-normal tracking-[0.2em] uppercase px-12 py-5 transition-all duration-300 hover:text-white hover:border-gold-m"
          >
            Ver como funciona
          </a>
        </div>
      </div>

      <div className="hidden xl:flex flex-col gap-px bg-border/20 relative z-[100] ml-auto mr-[100px] border border-border/20 isolate">
        {[
          { num: "€250", label: "Strategic Assessment", delay: "0.6s" },
          { num: "90'", label: "Sessão com o founder", delay: "0.75s" },
          { num: "04", label: "Pilares de coordenação", delay: "0.9s" },
          { num: "90d", label: "Acompanhamento pós-chegada", delay: "1.05s" },
        ].map((stat) => (
          <div 
            key={stat.label}
            className="p-10 border border-border/10 bg-black/40 backdrop-blur-sm animate-[fadeUp_0.8s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 translate-x-10 will-change-transform min-w-[300px]"
            style={{ animationDelay: stat.delay }}
          >
            <div className="font-amotha text-[52px] font-extralight text-gold leading-none mb-3 tracking-[-0.04em]">
              {stat.num}
            </div>
            <div className="font-sora text-[11px] tracking-[0.3em] uppercase text-white/40">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-8 lg:left-[100px] z-[2] flex items-center gap-16 font-urbanist text-[11px] tracking-[0.2em] uppercase text-white/35 animate-[fadeUp_0.6s_ease_1.8s_forwards] opacity-0 pointer-events-none">
        <div className="w-10 h-px bg-white/12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold -translate-x-full animate-[scrollLine_2s_ease_infinite]" />
        </div>
        Planejar · Chegar · Ficar
      </div>
    </section>
  );
}
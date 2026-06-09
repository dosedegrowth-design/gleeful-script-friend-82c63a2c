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
      className="relative min-h-[100svh] grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-black">
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 70% 50%, rgba(15,31,65,.7) 0%, transparent 70%),
                         radial-gradient(ellipse 40% 60% at 20% 80%, rgba(173,137,87,.06) 0%, transparent 60%)`
          }}
        />
      </div>

      <svg 
        className="hero-symbol absolute right-[-80px] top-1/2 -translate-y-1/2 w-[680px] height-[680px] opacity-[0.07] z-[1] animate-[slowspin_80s_linear_infinite]" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: `translateY(calc(-50% + ${scrollY * 0.15}px)) rotate(${scrollY * 0.02}deg)`
        }}
      >
        <path d="M100 10 L130 40 L160 10 L190 40 L160 70 L190 100 L160 130 L190 160 L160 190 L130 160 L100 190 L70 160 L40 190 L10 160 L40 130 L10 100 L40 70 L10 40 L40 10 L70 40 Z" stroke="#ad8957" strokeWidth=".5" fill="none"/>
        <path d="M100 30 L120 50 L140 30 L160 50 L140 70 L160 100 L140 130 L160 150 L140 170 L120 150 L100 170 L80 150 L60 170 L40 150 L60 130 L40 100 L60 70 L40 50 L60 30 L80 50 Z" stroke="#ad8957" strokeWidth=".5" fill="none"/>
        <circle cx="100" cy="100" r="28" stroke="#ad8957" strokeWidth=".5" fill="none"/>
        <circle cx="100" cy="100" r="16" stroke="#ad8957" strokeWidth=".5" fill="none"/>
        <path d="M100 72 L100 128 M72 100 L128 100 M79 79 L121 121 M121 79 L79 121" stroke="#ad8957" strokeWidth=".3"/>
        <path d="M100 10 L100 30 M100 170 L100 190 M10 100 L30 100 M170 100 L190 100" stroke="#ad8957" strokeWidth=".8"/>
        <circle cx="100" cy="10" r="3" fill="#ad8957"/>
        <circle cx="100" cy="190" r="3" fill="#ad8957"/>
        <circle cx="10" cy="100" r="3" fill="#ad8957"/>
        <circle cx="190" cy="100" r="3" fill="#ad8957"/>
        <circle cx="40" cy="40" r="2" fill="#ad8957" opacity=".6"/>
        <circle cx="160" cy="40" r="2" fill="#ad8957" opacity=".6"/>
        <circle cx="40" cy="160" r="2" fill="#ad8957" opacity=".6"/>
        <circle cx="160" cy="160" r="2" fill="#ad8957" opacity=".6"/>
      </svg>

      <div className="relative z-[2] px-6 lg:pl-[80px] pt-[140px] pb-[120px]">
        <p className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-8 flex items-center gap-14 animate-[fadeUp_0.8s_ease_0.3s_forwards] opacity-0 will-change-transform">
          <span className="w-8 h-px bg-gold" />
          Coordenação Internacional de Vida e Património
        </p>
        
        <h1 className="font-amotha text-[clamp(44px,5.5vw,82px)] font-extralight leading-[1.04] tracking-[-0.02em] mb-9 text-white will-change-transform">
          <span className="inline-block overflow-hidden align-bottom">
            <span className="inline-block animate-[slideUp_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.5s]">Você</span>
          </span>
          <span className="inline-block overflow-hidden align-bottom ml-3">
            <span className="inline-block animate-[slideUp_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.5s]">não</span>
          </span>
          <span className="inline-block overflow-hidden align-bottom ml-3">
            <span className="inline-block animate-[slideUp_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.65s]">precisa</span>
          </span><br/>
          <span className="inline-block overflow-hidden align-bottom">
            <span className="inline-block animate-[slideUp_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.75s]">de mais</span>
          </span>
          <span className="inline-block overflow-hidden align-bottom ml-3">
            <span className="inline-block animate-[slideUp_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.75s]">informação.</span>
          </span><br/>
          <span className="inline-block overflow-hidden align-bottom">
            <span className="inline-block animate-[slideUp_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.85s]">Precisa de</span>
          </span><br/>
          <span className="inline-block overflow-hidden align-bottom">
            <span className="inline-block animate-[slideUp_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.95s]">alguém que</span>
          </span><br/>
          <span className="inline-block overflow-hidden align-bottom">
            <span className="inline-block text-gold-l animate-[slideUp_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:1.05s]">coordene a</span>
          </span><br/>
          <span className="inline-block overflow-hidden align-bottom">
            <span className="inline-block text-gold-l animate-[slideUp_0.9s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:1.15s]">decisão.</span>
          </span>
        </h1>

        <p className="font-urbanist text-[17px] font-light text-white-3 leading-[1.85] max-w-[460px] mb-[52px] animate-[fadeUp_0.8s_ease_1.3s_forwards] opacity-0">
          A MOOVIA Portugal não resolve tarefas isoladas. Coordenação completa, <strong className="text-white-2 font-normal">do primeiro diagnóstico aos 90 dias depois da chegada.</strong>
        </p>

        <div className="flex flex-wrap gap-4 animate-[fadeUp_0.8s_ease_1.5s_forwards] opacity-0">
          <Link
            to="/contacto"
            className="bg-gold text-black font-urbanist text-[12px] font-semibold tracking-[0.2em] uppercase px-10 py-4 relative overflow-hidden group transition-all duration-300"
          >
            <span className="relative z-10">Avaliar meu caso</span>
            <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
          <a
            href="#processo"
            className="bg-transparent border border-border text-white-3 font-urbanist text-[12px] font-normal tracking-[0.18em] uppercase px-10 py-4 transition-all duration-300 hover:text-white hover:border-gold-m"
          >
            Ver como funciona
          </a>
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-px bg-border relative z-[2] ml-auto mr-[80px]">
        {[
          { num: "€250", label: "Strategic Assessment", delay: "0.6s" },
          { num: "90'", label: "Sessão com o founder", delay: "0.75s" },
          { num: "04", label: "Pilares de coordenação", delay: "0.9s" },
          { num: "90d", label: "Acompanhamento pós-chegada", delay: "1.05s" },
        ].map((stat) => (
          <div 
            key={stat.label}
            className="p-7 lg:p-8 border border-border bg-white-5 animate-[fadeUp_0.8s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 translate-x-10 will-change-transform min-w-[280px]"
            style={{ animationDelay: stat.delay }}
          >
            <div className="font-amotha text-[48px] font-extralight text-gold-l leading-none mb-2 tracking-[-0.03em]">{stat.num}</div>
            <div className="font-urbanist text-[11px] tracking-[0.14em] uppercase text-white-3">{stat.label}</div>
          </div>
        ))}
      </div>


      <div className="absolute bottom-10 left-6 lg:left-[80px] z-[2] flex items-center gap-14 font-urbanist text-[11px] tracking-[0.2em] uppercase text-white-3 animate-[fadeUp_0.6s_ease_1.8s_forwards] opacity-0">
        <div className="w-10 h-px bg-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gold -translate-x-full animate-[scrollLine_2s_ease_2s_infinite]" />
        </div>
        Planejar · Chegar · Ficar
      </div>
    </section>
  );
}

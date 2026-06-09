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
      className="relative min-h-[100svh] flex flex-col lg:flex-row items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 70% 50%, rgba(15,31,65,0.7) 0%, transparent 70%),
                         radial-gradient(ellipse 40% 60% at 20% 80%, rgba(173,137,87,0.06) 0%, transparent 60%)`
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
        <svg viewBox="0 0 3332.54 3331.06" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold opacity-60 animate-[slowspin_180s_linear_infinite]">
          <path 
            fillRule="evenodd"
            d="M1781.35,1664.28c.95,63.41-49.05,115.39-111.56,115.99-65.07.62-114.78-48.05-115.93-113.53-1.12-63.48,48.29-113.93,112.41-114.77,63.47-.83,114.13,48.61,115.08,112.31Z
               M1369.69,1662.79c.03-54.62,15.9-109.27,50.57-158.28,8.43-11.91,14.25-14.41,24.86-1.34,74.09,91.3,73.87,235.05-.18,326.54-10.68,13.19-15.58,8.67-23.67-.98-30.49-36.38-50.67-98.65-51.57-165.94Z
               M1962.84,1641.79c-.7,82.68-15,136.03-48.18,183.41-13.45,19.21-14.66,18.69-28.93-.03-70.1-91.92-71.48-220.42-3.36-313.46,17.81-24.32,19.91-24.65,36.53,1.39,29.88,46.82,44.43,98.23,43.94,128.69Z
               M1669.48,1961.04c-63.96-1.5-118.15-15.91-165.4-52.83-12.42-9.7-10.25-14.52.47-23.32,87.8-72.07,242.38-70.68,328.7,2.7,12.42,10.56,5.07,15.07-2.76,20.95-49.25,36.98-105.51,51.7-161,52.49Z
               M1669.9,1500.04c-63.53-1.18-118.44-17.8-166.5-55.27-9.56-7.45-11.52-11.65-.65-20.43,86.19-69.62,239.95-70.73,326.97-2.36,13.04,10.25,10.89,15.82-1.07,24.67-48.25,35.71-102.36,52.75-158.75,53.4Z"
          />
          <path d="M902.38,576.4c-101.68,0-203.36.46-305.04-.43-17.96-.16-23.29,3.99-23.22,22.66.67,200.83.2,401.67.64,602.5.03,14.61-3.31,20.88-18.67,23.48-36.2,6.13-70.92,18.02-103.78,34.52-168.37,84.57-259.78,221.42-259.7,409.53.09,215.84,151.54,394.58,362.72,440.63,15.44,3.37,19.96,8.37,19.91,24.28-.67,200.83-.52,401.67-.56,602.5q0,24.48,24.25,24.45c198.94-.06,397.88.11,596.82-.54,15.91-.05,21.21,4.83,24.63,20.01,13.04,57.89,36.64,111.63,71.99,159.35,97.14,131.16,227.28,202.51,391.05,196.74,204.91-7.21,379.65-155.61,427.93-355.01,4.2-17.34,11.54-21.06,27.99-21.02,195.78.57,391.56.49,587.34.36,37.29-.03,31.7,4.78,31.73-32.26.19-198.31.14-396.62-.23-594.92-.03-13.7,1.86-19.98,18.02-23.56,241.79-53.53,388.39-277.48,362.32-496.81-22.11-186.01-174.72-353.99-359.4-387.92-16.53-3.04-21.01-8.85-20.97-25.26.51-200.2-.02-400.41.61-600.61.06-18.19-4.31-23.11-22.77-23.05-203.99.7-407.98.29-611.97.77-14.4.03-21.04-2.79-23.31-18.37-5.68-38.95-19.62-75.61-35.53-111.45-76.98-173.37-271.32-279.85-458.76-251.46-192.7,29.19-338.57,169.02-375.28,361.07-3.22,16.85-9.88,20.3-25.61,20.19-101.04-.68-202.1-.35-303.14-.36Z"/>
          <path d="M578.06,1665.74c0-106.11.38-212.21-.39-318.31-.12-16.82,4.61-21.04,21.2-20.87,84.62.88,169.26.2,253.89.68,11.64.07,19.92-3.11,28.23-11.39,146.24-145.79,292.73-291.33,439.35-436.73,7.47-7.4,9.39-15.38,9.36-25.39-.23-85.26.25-170.53-.33-255.79-.1-13.94,3.36-18.17,17.78-18.14,212.84.45,425.69.47,638.53-.09,15.88-.04,18.6,5.61,18.5,19.66-.57,84.63-.2,169.26-.56,253.89-.05,10.85,2.96,18.73,10.88,26.57,126.15,124.81,251.96,249.97,377.88,375.01,20.61,20.47,41.69,40.48,61.9,61.34,7.65,7.9,15.6,11.04,26.58,10.99,85.26-.4,170.53.09,255.79-.62,14.91-.13,19.01,3.91,18.98,18.95-.49,213.47-.54,426.95.06,640.42.05,16.75-5.72,19.38-20.59,19.25-82.73-.71-165.47-.23-248.21-.69-12.13-.07-21.32,2.72-30.19,11.65-145.57,146.48-291.36,292.74-437.44,438.7-10.2,10.2-14.09,20.58-13.98,34.91.61,80.21-.07,160.42.57,240.63.12,14.91-2.77,20.73-19.39,20.69-212.84-.54-425.69-.5-638.53.08-16.01.04-18.33-5.85-18.23-19.68.61-80.21.17-160.42.75-240.63.09-12.97-3.49-22.5-12.71-31.73-146.94-146.88-293.68-293.97-440.16-441.31-9.69-9.74-19.58-13.54-33.31-13.44-82.73.65-165.48-.05-248.2.85-15.68.17-18.55-4.93-18.47-19.25.56-106.73.3-213.47.3-320.21h.2ZM1964.21,2188.56h-.29c0-67.58-.02-135.17.01-202.75.01-24.54.08-24.57,24.18-24.58,133.9-.02,267.81-.06,401.71,0,10.21,0,18.95-.75,27.3-9.12,91.41-91.68,183.19-182.99,275.3-273.96,9.45-9.33,11.97-14.6,1.19-25.29-90.95-90.33-181.4-181.17-271.65-272.21-9.17-9.25-18.52-12.89-31.54-12.85-135.16.41-270.33-.18-405.49.7-18.2.12-21.52-5.43-21.44-22.12.61-134.53.27-269.07.34-403.6,0-9.57-.27-18.04-8.09-25.82-93.15-92.62-186.05-185.48-278.7-278.61-8.96-9.01-14.34-7.51-22.6.8-90.36,90.95-180.93,181.69-271.83,272.1-9.76,9.71-13.4,19.61-13.35,33.33.55,133.9.13,267.81.79,401.71.08,16.81-3.78,22.38-21.76,22.28-135.79-.79-271.59-.34-407.39-.48-11.13-.01-20.03,1.95-28.61,10.62-90.6,91.6-181.54,182.87-272.89,273.72-9.98,9.93-10.22,15.08-.05,25.15,90.2,89.32,179.97,179.08,269.33,269.23,10.19,10.28,20.24,14.65,34.63,14.61,135.16-.43,270.33.04,405.5-.56,16.36-.07,21.41,3.92,21.33,20.96-.72,137.06-.29,274.12-.6,411.18-.02,10.88,2.7,18.95,10.58,26.77,91.9,91.2,183.62,182.59,274.97,274.34,9.14,9.18,14.5,9.79,23.89.34,91.7-92.27,183.8-184.16,275.95-275.99,6.73-6.71,9.57-13.64,9.51-23.35-.43-68.84-.23-137.69-.23-206.54Z"/>
        </svg>
      </div>

      <div className="relative z-[2] px-8 lg:px-[100px] pt-[160px] pb-[120px] flex-1">
        <p className="font-urbanist text-[11px] tracking-[0.4em] uppercase text-gold mb-10 flex items-center gap-12 animate-[fadeUp_0.8s_ease_0.3s_forwards] opacity-0 will-change-transform">
          <span className="w-10 h-px bg-gold" />
          Coordenação Internacional de Vida e Património
        </p>
        
        <h1 className="font-amotha text-[clamp(48px,6vw,92px)] font-extralight leading-[1.02] tracking-[-0.03em] mb-12 text-white will-change-transform max-w-[900px]">
          <span className="block overflow-hidden h-[1.1em]">
            <span className="inline-block animate-[slideUp_1.1s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0">Você não precisa</span>
          </span>
          <span className="block overflow-hidden h-[1.1em]">
            <span className="inline-block animate-[slideUp_1.1s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.15s]">de mais informação.</span>
          </span>
          <span className="block overflow-hidden h-[1.1em]">
            <span className="inline-block animate-[slideUp_1.1s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.3s]">Precisa de alguém que</span>
          </span>
          <span className="block overflow-hidden h-[1.1em]">
            <span className="inline-block text-gold-l animate-[slideUp_1.1s_cubic-bezier(.16,1,.3,1)_forwards] opacity-0 [animation-delay:0.45s] italic">coordene a decisão.</span>
          </span>
        </h1>

        <p className="font-urbanist text-[18px] font-light text-white/50 leading-[1.8] max-w-[520px] mb-[64px] animate-[fadeUp_0.8s_ease_1.3s_forwards] opacity-0">
          A MOOVIA Portugal não resolve tarefas isoladas. Coordenação completa, <strong className="text-white-2 font-normal">do primeiro diagnóstico aos 90 dias depois da chegada.</strong>
        </p>

        <div className="flex flex-wrap gap-5 animate-[fadeUp_0.8s_ease_1.5s_forwards] opacity-0">
          <Link
            to="/contacto"
            className="bg-gold text-black font-urbanist text-[12px] font-semibold tracking-[0.24em] uppercase px-12 py-5 relative overflow-hidden group transition-all duration-300"
          >
            <span className="relative z-10">Avaliar meu caso</span>
            <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
          <a
            href="#processo"
            className="bg-transparent border border-border text-white-3 font-urbanist text-[12px] font-normal tracking-[0.2em] uppercase px-12 py-5 transition-all duration-300 hover:text-white hover:border-gold-m"
          >
            Ver como funciona
          </a>
        </div>
      </div>

      <div className="hidden xl:flex flex-col gap-px bg-border/20 relative z-[2] ml-auto mr-[100px] border border-border/20">
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
            <div className="font-amotha text-[52px] font-extralight text-gold-l leading-none mb-3 tracking-[-0.04em]">{stat.num}</div>
            <div className="font-urbanist text-[11px] tracking-[0.18em] uppercase text-white/40">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-8 lg:left-[100px] z-[2] flex items-center gap-16 font-urbanist text-[11px] tracking-[0.25em] uppercase text-white/30 animate-[fadeUp_0.6s_ease_1.8s_forwards] opacity-0">
        <div className="w-12 h-px bg-border/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold -translate-x-full animate-[scrollLine_2s_ease_infinite]" />
        </div>
        Planejar · Chegar · Ficar
      </div>
    </section>
  );
}
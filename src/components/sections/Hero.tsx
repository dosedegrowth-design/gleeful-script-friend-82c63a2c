import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const planeY = Math.min(scrollY * 0.45, 320);
  const planeX = Math.min(scrollY * 0.25, 180);
  const planeRot = -15 + Math.min(scrollY / 25, 25);
  const planeOpacity = Math.max(1 - scrollY / 700, 0.25);

  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{
        background: "var(--ink)",
        backgroundImage:
          "radial-gradient(800px 500px at 85% 12%, rgba(155,107,58,0.14), transparent 60%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
        backgroundSize: "auto, 80px 80px, 80px 80px",
      }}
    >
      {/* Plane */}
      <div
        className="hidden md:block absolute top-32 right-20 z-10 pointer-events-none transition-opacity"
        style={{
          transform: `translate(${planeX}px, ${planeY}px) rotate(${planeRot}deg)`,
          opacity: planeOpacity,
        }}
      >
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--copper-mid)" strokeWidth="1.2">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1L15 22v-1.5L13 19v-5.5z" fill="var(--copper-mid)" stroke="none" />
        </svg>
        <svg className="absolute -left-32 -top-2" width="200" height="40" viewBox="0 0 200 40">
          <path d="M0 30 Q 100 -10 200 5" stroke="var(--copper)" strokeWidth="0.6" strokeDasharray="2 6" fill="none" opacity="0.4" />
        </svg>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-32 md:py-40 w-full grid lg:grid-cols-[1.4fr_1fr] gap-16 items-end relative z-20">
        <div>
          <Reveal>
            <p className="eyebrow mb-8">Coordenação Internacional de Vida e Património</p>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className="font-display leading-[1.05] tracking-tight"
              style={{
                color: "var(--ivory)",
                fontSize: "clamp(44px, 7vw, 86px)",
              }}
            >
              Você não precisa<br />
              de mais informação.<br />
              Precisa de alguém que<br />
              coordene a{" "}
              <em
                className="not-italic font-display italic"
                style={{ color: "var(--copper-mid)" }}
              >
                decisão.
              </em>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p
              className="mt-10 max-w-[520px] text-[17px] leading-relaxed"
              style={{ color: "rgba(250,250,247,0.55)", fontWeight: 400 }}
            >
              A MOOVIA Portugal não resolve tarefas isoladas. Coordenação completa, do primeiro
              diagnóstico aos 90 dias depois da chegada.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                to="/contacto"
                className="inline-flex items-center px-10 py-5 text-[11px] tracking-[0.22em] uppercase font-bold transition-all duration-300 hover:scale-[1.03] active:scale-95"
                style={{ 
                  background: "var(--copper-mid)", 
                  color: "var(--ink)",
                  boxShadow: "0 10px 30px -10px rgba(155,107,58,0.4)" 
                }}
              >
                Avaliar meu caso
              </Link>
              <a
                href="#processo"
                className="inline-flex items-center px-10 py-5 text-[11px] tracking-[0.22em] uppercase font-bold border transition-all duration-300 hover:bg-[rgba(250,250,247,0.05)]"
                style={{ borderColor: "rgba(250,250,247,0.2)", color: "var(--ivory)" }}
              >
                Ver como funciona
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-6 md:left-10 z-20 flex items-center gap-4">
        <div className="relative w-16 h-px overflow-hidden" style={{ background: "rgba(196,146,79,0.2)" }}>
          <div
            className="absolute inset-y-0 left-0 w-full origin-left"
            style={{ background: "var(--copper-mid)", animation: "slideLine 2s ease-in-out infinite" }}
          />
        </div>
        <span className="text-[10px] tracking-[0.22em] uppercase" style={{ color: "rgba(250,250,247,0.5)" }}>
          Planejar · Chegar · Ficar
        </span>
      </div>
      <style>{`@keyframes slideLine { 0%{transform:scaleX(0)} 50%{transform:scaleX(1)} 100%{transform:scaleX(0); transform-origin: right} }`}</style>
    </section>
  );
}
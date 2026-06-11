import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import NumberFlow from "@number-flow/react";
import SplitType from "split-type";
import { gsap } from "gsap";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  
  useEffect(() => {
    if (!headlineRef.current) return;
    const split = new SplitType(headlineRef.current, { types: 'lines' });
    gsap.fromTo(split.lines, 
      { y: '110%' },
      { 
        y: 0, 
        stagger: 0.15, 
        duration: 1.1, 
        ease: "power4.out",
        delay: 0.5
      }
    );
    return () => split.revert();
  }, []);

  const stats = [
    { num: 250, prefix: "€", label: "Strategic Assessment", delay: 0.6 },
    { num: 90, suffix: "'", label: "Sessão com o founder", delay: 0.75 },
    { num: 4, prefix: "0", label: "Pilares de coordenação", delay: 0.9 },
    { num: 90, suffix: "d", label: "Acompanhamento pós-chegada", delay: 1.05 },
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col lg:flex-row items-center px-6 lg:px-20 py-32 overflow-hidden bg-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 1: Lisbon Image */}
        <div 
          className="absolute inset-0 opacity-15 grayscale brightness-[0.15] sepia-[0.3]"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1548120231-1d6f891ad49c?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Layer 2: Navy Radial */}
        <div 
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(15,31,65,.7) 0%, transparent 70%)' }}
        />
        {/* Layer 3: Gold Radial */}
        <div 
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 40% 60% at 15% 80%, rgba(173,137,87,.08) 0%, transparent 60%)' }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-start max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-6 mb-10"
        >
          <div className="w-8 h-px bg-gold" />
          <span className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold">
            Coordenação Internacional de Vida e Património
          </span>
        </motion.div>

        <h1 
          ref={headlineRef}
          className="font-sora text-[clamp(44px,5.5vw,82px)] leading-[1.04] tracking-[-0.02em] text-white mb-12"
        >
          <span className="font-[100] block">Você não precisa</span>
          <span className="font-[100] block">de mais informação.</span>
          <span className="font-[200] block">Precisa de alguém</span>
          <span className="font-[200] block">que coordene</span>
          <span className="font-[200] text-gold-l italic block">coordene a decisão.</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-urbanist text-[17px] font-[300] text-w35 leading-[1.85] max-w-[460px] mb-12"
        >
          A MOOVIA Portugal não resolve tarefas isoladas.
          Coordenação completa, do primeiro diagnóstico
          aos 90 dias depois da chegada.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/contacto"
            className="wipe-btn bg-gold text-black font-urbanist text-[12px] font-[600] tracking-[0.2em] uppercase px-6 py-2.5 rounded-none"
          >
            <span className="relative z-10">Avaliar meu caso</span>
          </Link>
          <a
            href="#processo"
            className="border border-b18 text-w35 font-urbanist text-[12px] font-[400] tracking-[0.2em] uppercase px-6 py-2.5 hover:border-gold-m transition-all"
          >
            Ver como funciona
          </a>
        </motion.div>
      </div>

      {/* STATS PANEL */}
      <div className="relative z-10 hidden lg:flex flex-col gap-px bg-b18 ml-auto border border-b18">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: stat.delay }}
            className="p-8 lg:px-10 lg:py-8 bg-w05 min-w-[280px]"
          >
            <div className="font-sora text-[48px] font-[200] text-gold-l leading-none mb-3 tracking-[-0.03em] flex items-baseline">
              {stat.prefix && <span className="text-[28px] mr-1">{stat.prefix}</span>}
              <NumberFlow value={stat.num} />
              {stat.suffix && <span className="text-[28px] ml-1">{stat.suffix}</span>}
            </div>
            <div className="font-urbanist text-[11px] tracking-[0.14em] uppercase text-w35">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-12 left-8 lg:left-20 flex items-center gap-12 font-urbanist text-[11px] tracking-[0.2em] uppercase text-w35">
        <div className="w-10 h-px bg-gold relative overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-gold w-full"
          />
        </div>
        Planejar · Chegar · Ficar
      </div>
    </section>
  );
}

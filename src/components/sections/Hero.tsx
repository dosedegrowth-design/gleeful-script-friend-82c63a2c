import { useEffect, useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import NumberFlow from "@number-flow/react";
import SplitType from "split-type";
import { gsap } from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    if (!headlineRef.current) return;
    
    const split = new SplitType(headlineRef.current, { types: 'lines' });
    
    gsap.fromTo(split.lines, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.12, 
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
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col lg:flex-row items-center pt-[140px] pb-[120px] px-6 lg:px-[80px] overflow-hidden z-[1]"
    >
      {/* BACKGROUND MESH PARALLAX */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityFade }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div 
          className="absolute top-[20%] right-[-10%] w-[70vw] h-[70vh] opacity-30 blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(173,137,87,0.15) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[60vw] h-[60vh] opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(64,126,141,0.12) 0%, transparent 70%)' }}
        />
      </motion.div>

      {/* Decorative Azulejo */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, -150]), rotate: useTransform(scrollY, [0, 2000], [0, 45]) }}
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[50vw] max-w-[700px] aspect-square opacity-[0.04] z-[1] pointer-events-none"
      >
        <img 
          src="/mooviagold.png" 
          alt="Decorative" 
          className="w-full h-full object-contain animate-[slowspin_180s_linear_infinite]"
        />
      </motion.div>

      <div className="relative z-[100] flex-1 max-w-[1000px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 mb-10"
        >
          <div className="w-8 h-px bg-cobre" />
          <span className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre">
            Coordenação Internacional de Vida e Património
          </span>
        </motion.div>
        
        <h1 
          ref={headlineRef}
          className="font-sora text-[clamp(44px,7vw,88px)] font-[100] leading-[1.04] tracking-[-0.02em] text-off mb-12 clip-text"
        >
          Você não precisa<br />
          de mais informação.<br />
          <span className="font-[200]">Precisa de alguém</span><br />
          <span className="font-[200]">que coordene</span><br />
          <span className="font-[200] text-latte italic">a decisão.</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-urbanist text-[18px] font-[300] text-mut leading-[1.85] max-w-[480px] mb-16"
        >
          A MOOVIA Portugal não resolve tarefas isoladas. Coordenação completa, do primeiro diagnóstico aos 90 dias depois da chegada.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-5"
        >
          <Link
            to="/contacto"
            className="bg-cobre text-navy-deep font-urbanist text-[12px] font-[600] tracking-[0.2em] uppercase px-10 py-5 relative overflow-hidden group rounded-none"
          >
            <span className="relative z-10">Avaliar meu caso</span>
            <div className="absolute inset-0 bg-latte origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </Link>
          <a
            href="#processo"
            className="bg-transparent border border-line-cool text-mut font-urbanist text-[12px] font-normal tracking-[0.18em] uppercase px-10 py-5 transition-all duration-300 hover:text-off hover:border-beige rounded-none glass"
          >
            Ver como funciona
          </a>
        </motion.div>
      </div>

      {/* STATS PANEL - FROSTED GLASS */}
      <motion.div 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden xl:flex flex-col gap-px bg-line-cool glass p-1 relative z-[100] ml-auto overflow-hidden rounded-[20px]"
      >
        {stats.map((stat) => (
          <div 
            key={stat.label}
            className="px-12 py-10 bg-navy-rich/40 backdrop-blur-sm first:rounded-t-[16px] last:rounded-b-[16px]"
          >
            <div className="font-sora text-[48px] font-[100] text-latte leading-none mb-2 tracking-[-0.03em] flex items-baseline">
              {stat.prefix && <span className="text-[28px] mr-1">{stat.prefix}</span>}
              <NumberFlow value={stat.num} />
              {stat.suffix && <span className="text-[28px] ml-1">{stat.suffix}</span>}
            </div>
            <div className="font-urbanist text-[11px] tracking-[0.14em] uppercase text-mut">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-8 lg:left-[80px] flex items-center gap-12 font-urbanist text-[11px] tracking-[0.2em] uppercase text-mut-2"
      >
        <div className="w-10 h-px bg-line-gold relative overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute inset-0 bg-cobre w-full"
          />
        </div>
        Planejar · Chegar · Ficar
      </motion.div>
    </section>
  );
}

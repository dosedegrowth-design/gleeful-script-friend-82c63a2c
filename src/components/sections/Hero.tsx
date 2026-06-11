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
    <section className="relative min-h-[100svh] flex flex-col lg:flex-row items-center px-6 lg:px-20 py-clamp(110px,14vh,180px) overflow-hidden bg-navy">
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
        {/* Cinematic Mesh Layers */}
        <div className="absolute inset-0 bg-mesh opacity-70" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-start max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col gap-3 mb-12"
        >
          <div className="w-8 h-px bg-cobre" />
          <span className="font-mono text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre">
            Coordenação Internacional de Vida e Património
          </span>
        </motion.div>

        <h1 
          ref={headlineRef}
          className="font-display text-[clamp(48px,9vw,82px)] leading-[0.98] tracking-[-0.02em] text-off mb-12 overflow-hidden"
        >
          <span className="font-[200] block">Você não precisa</span>
          <span className="font-[200] block">de mais informação.</span>
          <span className="font-[300] block">Precisa de alguém</span>
          <span className="font-[300] text-latte italic block">que coordene a decisão.</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-body text-[17px] font-[300] text-mut leading-[1.7] max-w-[460px] mb-12"
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
            className="wipe-btn bg-cobre text-navy-deep font-mono text-[10px] font-[600] tracking-[0.2em] uppercase px-8 py-3 rounded-sm transition-transform active:scale-95"
          >
            <span className="relative z-10">Avaliar meu caso</span>
          </Link>
          <a
            href="#processo"
            className="border border-line-gold text-mut font-mono text-[10px] font-[400] tracking-[0.2em] uppercase px-8 py-3 hover:border-cobre transition-all rounded-sm"
          >
            Ver como funciona
          </a>
        </motion.div>
      </div>

      {/* STATS PANEL — Frosted Glass */}
      <div className="relative z-10 hidden lg:flex flex-col gap-px glass ml-auto rounded-xl overflow-hidden">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: stat.delay, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 lg:px-10 lg:py-8 min-w-[320px] glass-hover transition-colors border-b border-line-cool last:border-0"
          >
            <div className="font-display text-[48px] font-[200] text-latte leading-none mb-3 tracking-[-0.03em] flex items-baseline">
              {stat.prefix && <span className="text-[28px] mr-1 font-[100]">{stat.prefix}</span>}
              <NumberFlow value={stat.num} />
              {stat.suffix && <span className="text-[28px] ml-1 font-[100]">{stat.suffix}</span>}
            </div>
            <div className="font-mono text-[10px] font-[400] tracking-[0.14em] uppercase text-mut">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-12 left-8 lg:left-20 flex items-center gap-12 font-mono text-[10px] tracking-[0.2em] uppercase text-w35">
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

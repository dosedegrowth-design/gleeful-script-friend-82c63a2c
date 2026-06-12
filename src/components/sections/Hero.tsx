import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SplitType from "split-type";
import { gsap } from "gsap";
import { Icon } from "@/components/ui/Icon";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (!headlineRef.current) return;
    const split = new SplitType(headlineRef.current, { types: 'lines,words' });
    
    gsap.fromTo(split.words, 
      { y: '110%' },
      { 
        y: 0, 
        stagger: 0.05, 
        duration: 0.8, 
        ease: "power4.out",
        delay: 0.5
      }
    );
    return () => split.revert();
  }, []);

  return (
    <section className="relative min-h-[100svh] grid lg:grid-cols-2 align-items-stretch px-0 overflow-hidden bg-[#06091a] transition-all duration-300">
      {/* Background Gradients & Grain */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 70% at 70% 40%, rgba(15,31,65,0.4) 0%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(173,137,87,0.05) 0%, transparent 60%)' }} />
      </div>

      {/* LEFT COLUMN: Content */}
      <div className="relative z-10 flex flex-col justify-center py-20 pl-6 lg:pl-20 pr-6 lg:pr-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-px bg-gold" />
          <span className="font-body text-[11px] font-[400] tracking-[0.32em] uppercase text-gold">
            Coordenação Internacional de Vida e Património
          </span>
        </motion.div>

        <h1 
          ref={headlineRef}
          className="font-display text-[clamp(42px,5.2vw,78px)] text-white leading-[1.05] tracking-[-0.03em] mb-12"
        >
          <span className="font-[100] block opacity-85">Você não precisa</span>
          <span className="font-[100] block opacity-85">de mais informação.</span>
          <span className="font-[300] block">Precisa de alguém</span>
          <span className="font-[300] block">que coordene</span>
          <span className="font-[300] text-gold-l italic block">a decisão.</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-body text-[16px] font-[300] text-w35 leading-[1.7] max-w-[440px] mb-14"
        >
          A MOOVIA Portugal coordena a sua transição completa, unindo estratégia fiscal, imobiliária e adaptação familiar em um único mandato personalizado.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-row items-center gap-4 sm:gap-6"
        >
          <Link
            to="/#contacto"
            className="bg-gold text-black font-body font-[600] text-[11px] sm:text-[12px] tracking-[0.2em] uppercase px-6 sm:px-10 py-4 transition-all hover:bg-gold-xl rounded-[2px] shadow-[0_8px_24px_rgba(173,137,87,0.15)] whitespace-nowrap"
          >
            Avaliar meu caso
          </Link>
          <a
            href="#processo"
            className="border border-b35 text-gold font-body font-[500] text-[11px] sm:text-[12px] tracking-[0.2em] uppercase px-6 sm:px-10 py-4 hover:border-gold hover:text-white transition-all rounded-[2px] whitespace-nowrap"
          >
            Ver como funciona
          </a>
        </motion.div>

        {/* BOTTOM LEFT INDICATOR */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-6 lg:left-20 flex items-center gap-6 font-body text-[10px] tracking-[0.25em] uppercase text-w35"
        >
          <div className="w-12 h-px bg-gold/30 relative overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
          <span className="opacity-80">Planejar · Chegar · Ficar</span>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: Photo */}
      <div className="relative z-10 block h-full w-full overflow-hidden border-2 border-red-500">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 bg-cover bg-center grayscale brightness-50"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1512440114032-41484439c36d?auto=format&fit=crop&q=80&w=1200)',
          }}
        >
          {/* Overlay to integrate with navy background */}
          <div className="absolute inset-0 bg-[#06091a]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06091a] via-transparent to-transparent opacity-80" />
        </motion.div>
      </div>
    </section>
  );
}

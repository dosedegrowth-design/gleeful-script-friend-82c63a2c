import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const AzulejoSymbol = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 20]);

  return (
    <motion.div
      style={{ y, rotate }}
      className="absolute top-1/2 -right-20 -translate-y-1/2 w-[680px] h-[680px] opacity-[0.07] pointer-events-none"
    >
      <svg viewBox="0 0 680 680" className="w-full h-full animate-[spin_80s_linear_infinite]">
        <path
          d="M340 0L380 40H640V300L680 340L640 380V640H380L340 680L300 640H40V380L0 340L40 300V40H300L340 0ZM340 60L310 90H90V310L60 340L90 370V590H310L340 620L370 590H590V370L620 340L590 310V90H370L340 60Z"
          fill="currentColor"
          className="text-gold"
        />
        <rect x="240" y="240" width="200" height="200" stroke="currentColor" fill="none" strokeWidth="2" className="text-gold" />
        <circle cx="340" cy="340" r="60" stroke="currentColor" fill="none" strokeWidth="2" className="text-gold" />
      </svg>
    </motion.div>
  );
};

const StaggeredText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(' ');
  return (
    <div className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.1,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-black">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 70% 50%, rgba(15,31,65,0.7) 0%, transparent 70%),
              radial-gradient(ellipse 40% 60% at 20% 80%, rgba(173,137,87,0.06) 0%, transparent 60%)
            `
          }}
        />
      </div>

      <AzulejoSymbol />

      <div className="max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-gold" />
            <span className="font-urbanist font-normal text-[11px] uppercase tracking-[0.32em] text-gold">
              Coordenação Internacional de Vida e Património
            </span>
          </motion.div>

          <h1 className="font-amotha text-[clamp(44px,5.5vw,82px)] leading-[1.04] text-white mb-8">
            <StaggeredText text="Você não precisa" className="font-thin" delay={0.5} />
            <StaggeredText text="de mais informação." className="font-thin" delay={0.65} />
            <StaggeredText text="Precisa de alguém" className="font-extralight" delay={0.8} />
            <StaggeredText text="que coordene" className="font-extralight" delay={0.95} />
            <StaggeredText text="a decisão." className="font-extralight text-gold-l" delay={1.1} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="font-urbanist font-light text-[17px] text-white/35 max-w-[460px] mb-12 leading-relaxed"
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
            <button className="btn-primary">Avaliar meu caso</button>
            <button className="btn-ghost">Ver como funciona</button>
          </motion.div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-px bg-border/20 border border-border/20 rounded-sm overflow-hidden">
          {[
            { value: '€250', label: 'Strategic Assessment' },
            { value: "90'", label: 'Sessão com o founder' },
            { value: '04', label: 'Pilares de coordenação' },
            { value: '90d', label: 'Acompanhamento pós-chegada' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 + i * 0.1 }}
              className="bg-white/05 p-8 flex flex-col justify-center"
            >
              <div className="font-sora font-extralight text-5xl text-gold-l mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="font-urbanist font-normal text-[11px] uppercase tracking-[0.14em] text-white/35">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-8 flex items-center gap-4">
        <div className="w-10 h-px bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gold"
          />
        </div>
        <span className="font-urbanist font-light text-[10px] uppercase tracking-[0.2em] text-white/20">
          Planejar · Chegar · Ficar
        </span>
      </div>
    </section>
  );
};

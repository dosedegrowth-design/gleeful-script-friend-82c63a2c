import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroLisboaEditorial from "@/assets/hero-lisboa-editorial.jpg";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { PHRASES } from "@/lib/i18n/phrases";

export function Hero() {
  const { locale } = useI18n();
  const phrase = (text: string) => PHRASES[text]?.[locale] ?? text;

  return (
    <section className="relative min-h-[100svh] flex flex-col lg:flex-row bg-[#06091a] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 90% 70% at 70% 40%, rgba(15,31,65,0.4) 0%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 10% 90%, rgba(173,137,87,0.05) 0%, transparent 60%)' }} />
      </div>

      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center py-20 lg:py-32 pl-6 lg:pl-20 pr-6 lg:pr-10">
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
          key={locale}
          data-no-translate
          className="font-display text-[clamp(34px,3.8vw,62px)] text-white leading-[1.02] tracking-[-0.025em] mb-10"
        >
          <span className="font-[300] block text-white/70">{phrase("Você não precisa")}</span>
          <span className="font-[300] block text-white/70">{phrase("de mais informação.")}</span>
          <span className="font-[400] block mt-3">{phrase("Precisa de alguém")}</span>
          <span className="font-[400] block">{phrase("que coordene")}</span>
          <span className="font-[400] text-gold-l italic block">{phrase("a decisão.")}</span>
        </h1>



        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-body text-[16px] font-[300] text-w35 leading-[1.7] max-w-[440px] mb-14"
        >
          A MOOVIA Portugal não resolve tarefas isoladas. Coordenação completa, do primeiro diagnóstico aos 90 dias depois da chegada.
        </motion.p>


        <div className="flex flex-row items-center gap-4 sm:gap-6 mb-14">
          <Link
            to="/#contacto"
            className="group relative overflow-hidden bg-gold text-black font-body font-[600] text-[11px] sm:text-[12px] tracking-[0.2em] uppercase px-6 sm:px-10 py-4 rounded-[2px] shadow-[0_8px_24px_rgba(173,137,87,0.15)] whitespace-nowrap isolate"
          >
            <span className="absolute inset-0 bg-[#06091a] -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)]" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-gold">Avaliar meu caso</span>
          </Link>
          <a
            href="#processo"
            className="group relative overflow-hidden border border-b35 text-gold font-body font-[500] text-[11px] sm:text-[12px] tracking-[0.2em] uppercase px-6 sm:px-10 py-4 rounded-[2px] whitespace-nowrap isolate hover:border-gold"
          >
            <span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)]" />
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#06091a]">Ver como funciona</span>
          </a>
        </div>

        <div className="flex items-center gap-6 font-body text-[10px] tracking-[0.25em] uppercase text-w35">
          <div className="w-12 h-px bg-gold/30 relative overflow-hidden">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 bg-gold"
            />
          </div>
          <span className="opacity-80">Planejar · Chegar · Ficar</span>
        </div>
      </div>

      <div className="relative z-10 hidden lg:block lg:w-1/2 min-h-screen overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={heroLisboaEditorial}
            width={1080}
            height={1920}
            className="w-full h-full object-cover grayscale-[0.55] brightness-[0.9] contrast-[1.08] saturate-[0.9]"
            alt="Rua elegante de Lisboa ao entardecer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06091a] via-[#06091a]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06091a]/25 via-transparent to-[#06091a]/55" />
          <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ background: 'radial-gradient(ellipse 70% 60% at 65% 45%, rgba(173,137,87,0.45) 0%, transparent 70%)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="absolute inset-10 border border-gold/15 pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute top-16 right-12 [writing-mode:vertical-rl] rotate-180 font-body text-[10px] tracking-[0.5em] uppercase text-gold/60 font-medium pointer-events-none"
        >
          Lisboa · Cascais · Estoril — 38.7223° N
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-12 flex items-center gap-5 pointer-events-none"
        >
          <div className="w-px h-16 bg-gold/40" />
          <div className="flex flex-col gap-1">
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-gold font-semibold">Capítulo 01</span>
            <span className="font-body text-[10px] tracking-[0.25em] uppercase text-white/40">Mandato de transição</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

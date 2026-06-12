import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="bg-black py-40 px-6 lg:px-20 relative text-center overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(15,31,65,.4) 0%, transparent 70%)' }} />
      
      <div className="mx-auto max-w-[1400px] relative z-10 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-12"
        >
          A posição da marca
        </motion.p>

        {/* Ghost Symbol */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[200px] font-[200] text-gold opacity-[0.03] select-none pointer-events-none">
          ∞
        </div>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-display text-[clamp(26px,4.5vw,64px)] font-[200] text-white leading-[0.95] tracking-[-0.04em] max-w-[900px] mb-12 uppercase"
        >
          "Acompanhamos um número limitado<br/>de mandatos em simultâneo."
        </motion.h2>


        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          className="h-px bg-gold mb-12"
        />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-[17px] font-[300] text-w35 leading-[1.9] max-w-[560px] mb-8"
        >
          Não por limitação operacional, porque acreditamos que decisões desta importância exigem acompanhamento próximo, coordenação ativa e atenção individual. Para preservar este nível, aceitamos apenas o número de novos mandatos que conseguimos coordenar com a qualidade que a decisão exige.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-[16px] font-[300] text-w35 italic"
        >
          "Se o seu caso merece isso, este é o lugar."
        </motion.p>

      </div>
    </section>
  );
}

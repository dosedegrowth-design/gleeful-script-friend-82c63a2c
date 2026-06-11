import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="bg-navy-deep py-[clamp(140px,18vh,220px)] px-6 lg:px-[80px] flex items-center justify-center text-center relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(27,44,76,0.8) 0%, transparent 80%)"
        }}
      />
      
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-navy-rich/20 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-[900px] relative z-[100] isolate">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre mb-10 flex items-center justify-center gap-4"
        >
          <span className="w-6 h-px bg-cobre" />
          A posição da marca
          <span className="w-6 h-px bg-cobre" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-sora text-[clamp(28px,5vw,62px)] font-[100] leading-[1.15] tracking-[-0.02em] text-off mb-12"
        >
          Acompanhamos um número limitado de mandatos em simultâneo.
        </motion.h2>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-16 h-px bg-cobre mx-auto mb-12"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-urbanist text-[18px] font-[300] text-mut leading-[1.9] max-w-[640px] mx-auto mb-10">
            Não por limitação operacional, porque acreditamos que decisões desta importância exigem acompanhamento próximo, coordenação ativa e atenção individual. Para preservar este nível, aceitamos apenas o número de novos mandatos que conseguimos coordenar com a qualidade que a decisão exige.
          </p>
          <p className="font-urbanist text-[16px] font-[300] tracking-[0.1em] text-off uppercase opacity-60">
            Se o seu caso merece isso, este é o lugar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

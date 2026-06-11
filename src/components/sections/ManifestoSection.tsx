import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";

export function ManifestoSection() {
  return (
    <section className="bg-navy py-40 px-6 lg:px-20 flex items-center justify-center text-center relative overflow-hidden">
      {/* Background Breathing Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(173,137,87,0.05) 0%, transparent 60%)"
        }}
      />
      
      <div className="max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sora text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre mb-12"
        >
          A posição da marca
        </motion.div>

        <div className="font-sora text-[200px] font-[100] text-cobre opacity-[0.02] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none pointer-events-none">
          ∞
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-sora text-[clamp(26px,4vw,56px)] font-[200] leading-[1.2] text-off max-w-[820px] mx-auto mb-12"
        >
          "Acompanhamos um número limitado de mandatos em simultâneo."
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-cobre mx-auto mb-12" 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-urbanist text-[18px] font-[300] text-mut leading-[1.7] max-w-[560px] mx-auto mb-8">
            Não por limitação operacional, porque acreditamos que decisões desta
            importância exigem acompanhamento próximo, coordenação ativa e atenção
            individual. Para preservar este nível, aceitamos apenas o número de novos
            mandatos que conseguimos coordenar com a qualidade que a decisão exige.
          </p>
          <p className="font-urbanist text-[16px] font-[300] text-mut mx-auto italic">
            Se o seu caso merece isso, este é o lugar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { LeadForm } from "./LeadForm";

export function FormSection() {
  return (
    <section id="contacto" className="bg-navy py-[clamp(110px,14vh,180px)] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-24 items-start">
        <div className="pt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-4"
          >
            <span className="w-6 h-px bg-cobre" />
            O primeiro passo
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] tracking-[-0.02em] text-off mb-8"
          >
            A conversa<br/>
            <span className="text-latte italic">certa.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-urbanist text-[18px] font-[300] text-mut leading-[1.9] max-w-[500px] mb-12"
          >
            Não é um formulário de contato. É o início de um diagnóstico. Quanto mais você nos contar, mais preciso será o nosso retorno.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 border-l-2 border-cobre bg-navy-rich/30 backdrop-blur-sm"
          >
            <p className="font-urbanist text-[16px] font-[300] text-mut leading-[1.8] italic">
              "Cada contato é respondido pessoalmente pelo Frederico, sem chatbot, sem script."
            </p>
          </motion.div>
          
          <div className="flex flex-col gap-5 mt-16">
            {[
              "Resposta em até 2 horas em dias úteis",
              "Conversa direta com o founder",
              "Sem pitch, sem script",
              "Confidencialidade absoluta"
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                className="flex items-center gap-4 text-mut font-urbanist text-[14px] font-[300]"
              >
                <div className="w-5 h-5 rounded-full bg-cobre/10 flex items-center justify-center border border-cobre/20">
                  <span className="text-cobre text-[10px]">✓</span>
                </div>
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-[100] isolate"
        >
          <LeadForm />
        </motion.div>
      </div>
    </section>
  );
}

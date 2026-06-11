import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";

export function FoundersSection() {
  return (
    <section id="sobre" className="bg-navy py-clamp(110px,14vh,180px) px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-cobre" />
            Os fundadores são o produto
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(32px,5vw,60px)] font-[200] leading-[1.02] text-off max-w-4xl"
          >
            Antes de coordenar transições internacionais,<br />vivemos as nossas.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 font-body text-[17px] font-[300] text-mut leading-[1.7] max-w-2xl"
          >
            Background de Deloitte, Oracle e SAP. Cada sócio passou pelo processo que coordenamos.
            Essa experiência não é marketing: é o único diferencial que nenhum concorrente consegue replicar.
          </motion.p>
        </div>

        {/* Frederico Card */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] glass relative overflow-hidden group rounded-2xl border-line-gold/20"
          >
            <img 
              src="/images/frederico.png" 
              alt="Frederico Prado" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-transparent transition-all duration-700" />
            <div className="absolute bottom-6 left-8 z-10">
               <p className="font-sora text-[12px] font-[400] text-off tracking-widest uppercase bg-navy/60 backdrop-blur-md px-4 py-2 rounded-full">Frederico Prado · Lisboa</p>
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-sora text-[40px] font-[100] text-off mb-2"
            >
              Frederico Prado
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-sora text-[12px] font-[400] tracking-[0.2em] uppercase text-cobre mb-8"
            >
              Founder & CEO
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {["Oracle", "SAP", "WeDo (SONAE)", "MBA FGV", "Tampa", "Lisboa, 2018"].map((chip) => (
                <span key={chip} className="px-3 py-1.5 glass rounded-full font-urbanist text-[11px] uppercase tracking-wider text-mut">
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-urbanist text-[18px] font-[300] text-mut leading-[1.8] max-w-xl mb-12"
            >
              29 anos em TI multinacional. Oracle, SAP, WeDo (SONAE), Cipher (Prosegur),
              projetos enterprise de médio e grande porte. MBA em Empreendedorismo pela FGV.
              Formação em Comunicação na University of Tampa, onde viveu 4 anos.
              Em Lisboa desde 2018 com a família. Viveu a transição que hoje coordena
              e conduz pessoalmente cada mandato.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-10 border-l-2 border-cobre glass rounded-r-2xl bg-navy-raise/30"
            >
              <p className="font-sora text-[22px] font-[100] leading-snug text-latte italic">
                "Vamos coordenar a sua transição internacional com o mesmo nível de cuidado, estrutura e atenção que gostaríamos de ter recebido na nossa."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
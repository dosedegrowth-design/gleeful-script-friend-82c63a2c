import { motion } from "framer-motion";

export function FoundersSection() {
  return (
    <section id="sobre" className="bg-navy py-[clamp(110px,14vh,180px)] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[700px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-4"
          >
            <span className="w-6 h-px bg-cobre" />
            Os fundadores são o produto
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.1] text-off"
          >
            Antes de coordenar transições internacionais,<br />vivemos as <span className="text-latte italic">nossas.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 font-urbanist text-[17px] font-[300] text-mut leading-relaxed max-w-[600px]"
          >
            Background de Deloitte, Oracle e SAP. Cada sócio passou pelo processo que coordenamos.
            Essa experiência não é marketing: é o único diferencial que nenhum concorrente consegue
            replicar.
          </motion.p>
        </div>

        <div className="mt-20 grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] w-full max-w-[440px] bento-card relative group"
          >
            <img 
              src="/images/frederico.png" 
              alt="Frederico Prado" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              style={{ filter: 'grayscale(1) sepia(0.2) contrast(1.1)' }}
            />
            <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-navy-deep/80 to-transparent">
              <span className="font-urbanist text-[12px] font-[300] tracking-[0.22em] text-off uppercase">
                Frederico Prado · Lisboa
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-urbanist text-[11px] tracking-[0.18em] uppercase text-cobre mb-2 font-[500]">Founder & Senior Advisor</p>
            <h3 className="font-sora text-[32px] font-[200] text-off mb-8 uppercase tracking-tight">Frederico Prado</h3>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {["Oracle", "SAP", "MBA FGV", "Tampa", "Lisboa, 2018"].map((t) => (
                <span key={t} className="px-4 py-1.5 font-urbanist text-[11px] tracking-[0.1em] uppercase border border-line-cool rounded-full text-mut transition-colors hover:border-cobre/40">
                  {t}
                </span>
              ))}
            </div>
            
            <p className="font-urbanist text-[17px] font-[300] text-mut leading-[1.9] mb-12">
              29 anos em TI multinacional. MBA em Empreendedorismo FGV. Formação em
              Comunicação na University of Tampa. Em Lisboa desde 2018 com a família.
              Viveu a transição que hoje coordena e conduz pessoalmente cada mandato.
            </p>
            
            <div className="p-8 lg:p-10 border-l-2 border-cobre bg-navy-rich/40 backdrop-blur-sm">
              <p className="font-sora text-[20px] font-[200] leading-snug italic text-beige">
                "Vamos coordenar a sua transição internacional com o mesmo nível de cuidado,
                 estrutura e atenção que gostaríamos de ter recebido na nossa."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export function FoundersSection() {
  return (
    <section id="sobre" className="bg-black py-32 px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            Os fundadores são o produto
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(32px,4vw,60px)] font-[300] text-white leading-tight mb-8"
          >
            "Antes de coordenar transições internacionais,<br/>vivemos as nossas."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[17px] font-[300] text-w35 leading-[1.85] max-w-[600px]"
          >
            Background de Deloitte, Oracle e SAP. Cada sócio passou pelo processo que coordenamos. Essa experiência não é marketing: é o único diferencial que nenhum concorrente consegue replicar.
          </motion.p>
        </div>

        {/* Frederico Card */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-20 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="aspect-[4/5] bg-black-3 overflow-hidden border border-b18 relative group">
              <img 
                src="/images/frederico.png" 
                className="w-full h-full object-cover transition-all duration-1000 grayscale sepia-[0.2] group-hover:scale-105"
                alt="Frederico Prado"
                onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Frederico+Prado&background=1a1d26&color=ad8957&size=512'; }}
              />
            </div>
            <p className="font-body text-[12px] font-[300] text-w35 uppercase tracking-widest text-center">Frederico Prado · Lisboa</p>
          </motion.div>

          <div className="flex flex-col">
            <h3 className="font-display text-[28px] font-[200] text-white">Frederico Prado</h3>
            <p className="font-body text-[11px] font-[400] tracking-[0.18em] uppercase text-gold mt-1 mb-6">Founder & CEO</p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {["Oracle", "SAP", "MBA FGV", "Tampa", "Lisboa, 2018"].map(chip => (
                <span key={chip} className="border border-b18 px-3 py-1 font-body text-[11px] uppercase tracking-wider text-w35">
                  {chip}
                </span>
              ))}
            </div>

            <p className="font-body text-[16px] font-[300] text-w35 leading-[1.9] mb-10">
              29 anos em TI multinacional. MBA em Empreendedorismo FGV. Formação em Comunicação na University of Tampa. Em Lisboa desde 2018 com a família. Viveu a transição que hoje coordena e conduz pessoalmente cada mandato.
            </p>

            <div className="border-l-2 border-gold bg-w05 p-10">
              <p className="font-display text-[20px] font-[200] text-gold-m italic leading-relaxed">
                "Vamos coordenar a sua transição internacional com o mesmo nível de cuidado, estrutura e atenção que gostaríamos de ter recebido na nossa."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { RotatingLogo } from "@/components/ui/RotatingLogo";

export function FoundersSection() {
  return (
    <section id="sobre" className="bg-black py-32 px-6 lg:px-20 relative z-10 overflow-hidden">
      <RotatingLogo size="min(110vw,1500px)" opacity={0.025} duration={150} />
      <div className="mx-auto max-w-[1400px] relative z-10">
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
            className="font-display text-[clamp(32px,4.5vw,72px)] font-[200] text-white leading-[0.95] tracking-[-0.04em] mb-12"
          >
            "Antes de coordenar<br/>transições internacionais,<br/>vivemos as nossas."
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

        {/* Founders Grid — Frederico + Pablo (simétrico) */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-12 mb-32">
          {[
            {
              id: "frederico",
              img: "/images/frederico.png",
              name: "Frederico Prado",
              city: "Lisboa",
              role: "Founder & CEO",
              chips: ["Oracle", "SAP", "MBA FGV", "Tampa", "Lisboa, 2018"],
              bio: "29 anos em TI multinacional. MBA em Empreendedorismo FGV. Formação em Comunicação na University of Tampa. Em Lisboa desde 2018 com a família. Viveu a transição que hoje coordena e conduz pessoalmente cada mandato.",
              quote: "Vamos coordenar a sua transição internacional com o mesmo nível de cuidado, estrutura e atenção que gostaríamos de ter recebido na nossa.",
            },
            {
              id: "pablo",
              img: "/images/pablo.png",
              name: "Pablo Alejandro Saco Paim",
              city: "Lisboa",
              role: "Co-Founder & CFO",
              chips: ["IST", "Engenharia Mecânica", "CFD", "Europa desde os 17"],
              bio: "Com trajetória internacional iniciada aos 17 anos, lidera as áreas financeira e tecnológica da MOOVIA. Mestrando em Engenharia Mecânica no Instituto Superior Técnico, assegura que cada mandato seja estruturado com eficiência, previsibilidade e visão de longo prazo.",
              quote: "Estruturamos cada mandato com a precisão de engenharia e a previsibilidade financeira que uma decisão desta dimensão exige.",
            },
            {
              id: "dany",
              img: "/images/dany.png",
              name: "Dany Zukerman",
              city: "Lisboa",
              role: "Co-Founder & Partner",
              chips: ["Estratégia", "Relações Institucionais", "Lisboa"],
              bio: "Sócio da MOOVIA, traz visão estratégica e uma rede consolidada de relações institucionais em Portugal. Acompanha cada mandato com a sensibilidade de quem entende que uma transição internacional é, antes de tudo, uma decisão de vida.",
              quote: "Cada família que recebemos merece ser tratada como se fosse a nossa — com discrição, presença e compromisso real.",
            },
          ].map((f, idx) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex flex-col h-full"
            >
              <div className="aspect-[4/5] bg-black-3 overflow-hidden border border-b18 relative group mb-6">
                <img
                  src={f.img}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  alt={f.name}
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(f.name)}&background=1a1d26&color=ad8957&size=512`;
                  }}
                />
              </div>
              <p className="font-body text-[12px] font-[300] text-w35 uppercase tracking-widest text-center mb-8">
                {f.name.split(" ")[0]} · {f.city}
              </p>

              <h3 className="font-display text-[28px] font-[200] text-white">{f.name}</h3>
              <p className="font-body text-[11px] font-[400] tracking-[0.18em] uppercase text-gold mt-1 mb-6">
                {f.role}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {f.chips.map((chip) => (
                  <span
                    key={chip}
                    className="border border-b18 px-3 py-1 font-body text-[11px] uppercase tracking-wider text-w35"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <p className="font-body text-[15px] font-[300] text-w35 leading-[1.9] mb-8">{f.bio}</p>

              <div className="border-l-2 border-gold bg-w05 p-8 mt-auto">
                <p className="font-display text-[18px] font-[200] text-gold-m italic leading-relaxed">
                  "{f.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Equipa */}
        <div className="border-t border-b18 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            Equipa
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(28px,3.2vw,48px)] font-[300] text-white leading-[1.05] tracking-[-0.025em] mb-14 max-w-[700px]"
          >
            As pessoas que conduzem cada mandato.
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              { img: "/images/laura.png", name: "Laura Almeida", role: "Head of Operations" },
              { img: "/images/eduardo.png", name: "Eduardo Costa", role: "Legal & Compliance" },
              { img: "/images/moyses.png", name: "Moyses Filipe", role: "Relocation Lead" },
              { img: "/images/sara.png", name: "Sara Mendes", role: "Client Experience" },
            ].map((m, idx) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex flex-col"
              >
                <div className="aspect-[4/5] bg-black-3 overflow-hidden border border-b18 relative group">
                  <img
                    src={m.img}
                    className="w-full h-full object-cover grayscale-[0.4] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    alt={m.name}
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=1a1d26&color=ad8957&size=512`;
                    }}
                  />
                </div>
                <h4 className="font-display text-[18px] font-[400] text-white mt-5 tracking-[-0.01em]">{m.name}</h4>
                <p className="font-body text-[10px] font-[500] tracking-[0.22em] uppercase text-gold mt-1.5">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

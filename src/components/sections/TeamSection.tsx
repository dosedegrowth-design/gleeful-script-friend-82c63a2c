import { motion } from "framer-motion";
import { User } from "@phosphor-icons/react";

const teamMembers = [
  {
    name: "João Gabriel Prado",
    role: "Co-Founder",
    chips: ["Abreu Advogados", "ULisboa", "CIDP", "Corporate & M&A"],
    bio: "Advogado na Abreu Advogados em Corporate e M&A. Pós-graduações CIDP em Corporate Finance e M&A.",
    id: "joao"
  },
  {
    name: "Moyses Filipe",
    role: "Conselheiro Estratégico",
    chips: ["Deloitte", "Oracle", "IBM", "SAP", "Salesforce"],
    bio: "25+ anos em tecnologia corporativa. Especialista na indústria seguradora. Liderou equipas de alta performance.",
    image: "/images/moyses.png",
    id: "moyses"
  },
  {
    name: "Eduardo Trindade",
    role: "Strategic Relocation Advisor",
    chips: ["ADLS", "MBA USP", "Live University", "SC Investor"],
    bio: "VP Global Sales na ADLS. Professor de MBA, palestrante e investidor imobiliário em Santa Catarina.",
    image: "/images/eduardo.png",
    id: "eduardo"
  },
  {
    name: "Dany Zukerman",
    role: "Education & Family Transition Advisor",
    chips: ["Direito UCAM", "18 anos CLO", "CID Records"],
    bio: "18 anos como Chief Legal Officer da CID Records. Especialista no acompanhamento de estudantes.",
    id: "dany"
  },
  {
    name: "Laura Costa",
    role: "Mobilidade Internacional",
    chips: ["Mestrado ULisboa", "Erasmus", "TJSC", "Imigração"],
    bio: "Mestre em Direito pela ULisboa. Erasmus em Itália e Rep. Tcheca. Especialista em imigração.",
    image: "/images/laura.png",
    id: "laura"
  },
  {
    name: "Sara Russo",
    role: "Real Estate Specialist",
    chips: ["RE/MAX Collection", "Luxo", "10+ anos"],
    bio: "Mais de 10 anos no mercado imobiliário português. Premiada RE/MAX Portugal.",
    image: "/images/sara.png",
    id: "sara"
  },
];

export function TeamSection() {
  return (
    <section className="bg-navy py-[clamp(110px,14vh,180px)] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[700px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-4"
          >
            <span className="w-6 h-px bg-cobre" />
            A equipa
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(28px,4vw,44px)] font-[200] leading-[1.1] text-off mb-8"
          >
            A equipa que coordena a sua jornada.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[17px] font-[300] text-mut leading-relaxed"
          >
            Cada membro da MOOVIA foi escolhido pela profundidade da experiência, não pelo tamanho do currículo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-10 lg:p-12 flex flex-col group h-full rounded-2xl border-line-gold/10"
            >
              <div className="flex flex-col mb-10">
                <div className="w-20 h-20 rounded-2xl bg-navy-deep border border-line-cool overflow-hidden mb-8 group-hover:border-cobre/40 transition-colors duration-500 relative">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-sora text-[24px] font-[200] text-cobre uppercase">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-navy-rich/10 group-hover:bg-transparent transition-colors" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {member.chips.map((chip) => (
                    <span 
                      key={chip} 
                      className="font-urbanist font-[400] text-[10px] tracking-[0.05em] uppercase text-mut-2 px-2.5 py-1 border border-line-cool rounded-full group-hover:border-cobre/20 transition-colors"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="font-sora text-[20px] font-[300] text-off mb-1 group-hover:text-latte transition-colors duration-500">
                  {member.name}
                </h3>
                <p className="font-urbanist text-[12px] tracking-[0.12em] uppercase text-cobre mb-6 font-[500]">
                  {member.role}
                </p>
                <p className="font-urbanist text-[14px] font-[300] text-mut leading-[1.7] line-clamp-3 group-hover:text-off transition-colors duration-500">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

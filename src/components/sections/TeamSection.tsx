import { motion } from "framer-motion";

export function TeamSection() {
  const team = [
    {
      id: "joao",
      name: "João Gabriel Prado",
      role: "Co-Founder",
      img: "/images/joao.png",
      chips: ["Abreu Advogados", "ULisboa", "CIDP", "Corporate & M&A"],
      bio: "Advogado na Abreu Advogados em Corporate e M&A. Pós-graduações CIDP em Corporate Finance e M&A. O braço jurídico da MOOVIA no ecossistema português."
    },
    {
      id: "moyses",
      name: "Moyses Filipe",
      role: "Conselheiro Estratégico",
      img: "/images/moyses.png",
      chips: ["Deloitte", "Oracle", "IBM", "SAP", "Salesforce"],
      bio: "25+ anos em tecnologia corporativa nas maiores empresas do setor, com especialização na indústria seguradora. Liderou equipas de alta performance e operações C-Level globais."
    },
    {
      id: "eduardo",
      name: "Eduardo Trindade",
      role: "Strategic Relocation Advisor",
      img: "/images/eduardo.png",
      chips: ["ADLS", "MBA USP", "Live University", "SC Investor"],
      bio: "VP Global Sales na ADLS. Professor de MBA, palestrante internacional e investidor imobiliário em Santa Catarina. Fluente em PT, EN e ES."
    },
    {
      id: "dany",
      name: "Dany Zukerman",
      role: "Education & Family Transition Advisor",
      img: "/images/dany.png",
      chips: ["Direito UCAM", "18 anos CLO", "CID Records"],
      bio: "18 anos como Chief Legal Officer da CID Records. Especialista no acompanhamento de estudantes e famílias em transição para Portugal."
    },
    {
      id: "laura",
      name: "Laura Costa",
      role: "Mobilidade Internacional",
      img: "/images/laura.png",
      chips: ["Mestrado ULisboa", "Erasmus", "TJSC", "Imigração"],
      bio: "Mestre em Direito pela ULisboa, com Erasmus em Itália e República Tcheca. Especialista em imigração, nacionalidade e regularização documental."
    },
    {
      id: "sara",
      name: "Sara Russo",
      role: "Real Estate Specialist",
      img: "/images/sara.png",
      chips: ["RE/MAX Collection", "Luxo", "10+ anos"],
      bio: "Mais de 10 anos no mercado imobiliário português. Especialista RE/MAX Collection. Habitação a partir de €1.500/mês."
    }

  ];

  return (
    <section className="bg-black py-32 px-6 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <h3 className="font-display text-[28px] font-[400] text-white mb-6">A equipa que coordena a sua jornada.</h3>
          <p className="font-body text-[17px] font-[300] text-w35 leading-[1.85] max-w-[700px]">
            Cada membro da MOOVIA foi escolhido pela profundidade da experiência, não pelo tamanho do currículo. São as pessoas certas para as decisões que importam.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-b18">
          {team.map((member, i) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black-2 p-10 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-[2px] h-0 bg-gold transition-all duration-500 group-hover:h-full" />
              
              <div className="aspect-[4/5] bg-black-3 overflow-hidden border border-b18 relative group mb-8">
                <img
                  src={member.img}
                  className="w-full h-full object-cover grayscale-[0.4] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  alt={member.name}
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1a1d26&color=ad8957&size=512`;
                  }}
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {member.chips.map(chip => (
                  <span key={chip} className="font-body text-[10px] font-[400] text-w35 uppercase tracking-widest border border-b18 px-2 py-1">
                    {chip}
                  </span>
                ))}
              </div>
              <h4 className="font-display text-[18px] font-[300] text-white mb-1 group-hover:text-gold-l transition-colors">{member.name}</h4>
              <p className="font-body text-[11px] font-[400] tracking-[0.18em] uppercase text-gold mb-6">{member.role}</p>
              <p className="font-body text-[14px] font-[300] text-w35 leading-[1.7]">{member.bio}</p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

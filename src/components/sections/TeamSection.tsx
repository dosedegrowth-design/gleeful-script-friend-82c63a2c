import { Reveal } from "@/components/site/Reveal";

const teamMembers = [
  {
    name: "Frederico Prado",
    role: "Founder & CEO",
    chips: ["Oracle", "SAP", "MBA FGV", "Tampa", "Lisboa, 2018"],
    bio: "29 anos em TI multinacional. MBA em Empreendedorismo FGV. Formação em Comunicação na University of Tampa. Em Lisboa desde 2018 com a família. Viveu a transição que hoje coordena e conduz pessoalmente cada mandato.",
    isLarge: true,
    image: "/images/frederico.png",
  },
  {
    name: "João Gabriel Prado",
    role: "Co-Founder",
    chips: ["Abreu Advogados", "ULisboa", "CIDP", "Corporate & M&A"],
    bio: "Licenciado pela Faculdade de Direito da ULisboa, com duas pós-graduações CIDP em Corporate Finance, M&A e Corporate Litigation. Advogado na Abreu Advogados. O braço jurídico da MOOVIA.",
  },
  {
    name: "Moyses Filipe",
    role: "Conselheiro Estratégico",
    chips: ["Deloitte", "Oracle", "IBM", "SAP", "Salesforce"],
    bio: "25+ anos em tecnologia corporativa nas maiores empresas do setor, com especialização na indústria seguradora. Liderou equipas de alta performance e operações C-Level globais.",
    image: "/images/moyses.png",
  },
  {
    name: "Eduardo Trindade",
    role: "Strategic Relocation Advisor",
    chips: ["ADLS", "MBA USP", "Live University", "SC Investor"],
    bio: "VP Global Sales na ADLS. MBA em Gestão Estratégica pela USP, professor de MBA e palestrante internacional. Investidor imobiliário em Santa Catarina. Fluente em PT, EN e ES.",
    image: "/images/eduardo.png",
  },
  {
    name: "Dany Zukerman",
    role: "Education & Family Transition Advisor",
    chips: ["Direito UCAM", "18 anos CLO", "CID Records"],
    bio: "Formado em Direito pela UCAM. 18 anos como Chief Legal Officer da CID Records. Especialista no acompanhamento de estudantes e famílias brasileiras na transição para Portugal.",
  },
  {
    name: "Laura Costa",
    role: "Mobilidade Internacional",
    chips: ["Mestrado ULisboa", "Erasmus", "TJSC", "Imigração"],
    bio: "Mestre em Direito Penal e Ciências Criminais pela ULisboa, com Erasmus em Itália e na República Checa. Especialista em imigração, nacionalidade e regularização documental.",
    image: "/images/laura.png",
  },
  {
    name: "Sara Russo",
    role: "Real Estate Specialist",
    chips: ["RE/MAX Collection", "Luxo", "10+ anos"],
    bio: "Mais de 10 anos no mercado imobiliário português. Premiada na RE/MAX e especialista RE/MAX Collection, o segmento de luxo. Foco em aquisição, investimento e habitação a partir de €1.500/mês.",
    image: "/images/sara.png",
  },
];

export function TeamSection() {
  return (
    <section className="bg-black py-[120px] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] pointer-events-auto">
        <div className="max-w-[580px] mb-20">
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              A equipa
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora font-[200] text-[clamp(28px,3vw,44px)] leading-[1.1] text-white">
              A equipa que coordena a sua jornada.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 font-urbanist font-[300] text-[17px] text-white/35 leading-relaxed">
              Cada membro da MOOVIA foi escolhido pela profundidade da experiência, não pelo tamanho do currículo. São as pessoas certas para as decisões que importam.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border relative z-[100] isolate pointer-events-auto">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 50} className={member.name === 'Frederico Prado' ? "hidden" : ""}>
              <div 
                className="group h-full p-8 md:p-9 transition-all duration-500 border-l-2 border-transparent hover:border-gold flex flex-col bg-black-2 hover:bg-black-3"
              >
                <div className="flex flex-col mb-5">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.chips.map((chip) => (
                      <span 
                        key={chip} 
                        className="font-urbanist font-[400] text-[10px] tracking-[0.1em] uppercase text-white/35 px-2.5 py-1 border border-border group-hover:border-gold/30 transition-colors"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-sora font-[300] text-[18px] text-white">
                  {member.name}
                </h3>
                <p className="font-urbanist text-[11px] tracking-[0.18em] uppercase text-gold mt-1 font-[400]">
                  {member.role}
                </p>
                <p className="font-urbanist font-[300] text-[14px] text-white/35 leading-[1.7] mt-3.5 line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
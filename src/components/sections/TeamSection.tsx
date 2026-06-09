import { Reveal } from "@/components/site/Reveal";

const teamMembers = [
  {
    name: "Frederico Prado",
    role: "Founder & CEO",
    chips: ["Oracle", "SAP", "MBA FGV", "Lisboa, 2018"],
    bio: "29 anos em TI multinacional. Veio para Portugal em 2018 com a família e viveu o que todo cliente nosso vive. A MOOVIA foi construída sobre essa experiência.",
    isLarge: true,
  },
  {
    name: "João Gabriel Prado",
    role: "Co-Founder",
    chips: ["Abreu Advogados", "ULisboa", "Corporate & M&A"],
    bio: "Advogado na Abreu Advogados em Corporate e M&A. O braço jurídico da MOOVIA no ecossistema português.",
  },
  {
    name: "Moyses Filipe",
    role: "Conselheiro Estratégico",
    chips: ["Deloitte", "Oracle", "SAP", "Salesforce"],
    bio: "25 anos em tecnologia corporativa nas maiores empresas do setor. Garante o posicionamento institucional e os padrões internacionais da marca.",
  },
  {
    name: "Eduardo Trindade",
    role: "Strategic Relocation Advisor",
    chips: ["ADLS", "MBA USP", "Live University"],
    bio: "VP Global Sales na ADLS. Professor de MBA e investidor imobiliário. Ponte consultiva entre clientes brasileiros e a transição para Portugal.",
  },
  {
    name: "Dany Zukerman",
    role: "Education & Family Transition Advisor",
    chips: ["Direito", "18 anos CLO", "CID Records"],
    bio: "18 anos como Chief Legal Officer da CID Records. Especialista no acompanhamento de estudantes e famílias brasileiras na transição para Portugal.",
  },
  {
    name: "Laura Costa",
    role: "Mobilidade Internacional",
    chips: ["Mestrado ULisboa", "Erasmus", "Imigração"],
    bio: "Mestre em Direito pela ULisboa. Especialista em imigração, nacionalidade e documentação transfronteiriça para clientes brasileiros em Portugal.",
  },
  {
    name: "Sara Russo",
    role: "Real Estate Specialist",
    chips: ["RE/MAX Collection", "Luxo", "10+ anos"],
    bio: "Mais de 10 anos no mercado imobiliário português. Especialista em RE/MAX Collection. Referência em aquisição, investimento e relocation residencial.",
  },
];

export function TeamSection() {
  return (
    <section className="bg-black pt-[80px] px-6 lg:px-[80px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[580px] mb-20">
          <Reveal>
            <h2 className="font-sora font-[200] text-[clamp(28px,3vw,44px)] leading-[1.1] text-white">
              A equipa que coordena a sua jornada.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 font-urbanist font-[300] text-[17px] text-white/35 leading-relaxed">
              Cada membro da MOOVIA foi escolhido pela profundidade da experiência, não pelo tamanho do currículo. São as pessoas certas para as decisões que importam.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#181818]">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 50} className={member.isLarge ? "lg:col-span-2" : ""}>
              <div 
                className={`group h-full p-8 md:p-9 transition-all duration-500 border-l-2 border-transparent hover:border-gold flex flex-col ${
                  member.isLarge ? "bg-[#0A0A0A]" : "bg-[#0E0E0E] hover:bg-[#0A0A0A]"
                }`}
              >
                <div className="flex flex-wrap gap-2 mb-5">
                  {member.chips.map((chip) => (
                    <span 
                      key={chip} 
                      className="font-urbanist font-[400] text-[10px] tracking-[0.12em] uppercase text-white/35 px-2.5 py-1 border border-[#181818]"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {member.isLarge && (
                  <div className="aspect-[4/3] w-full bg-[#181818] mb-6 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                )}

                <h3 className="font-sora font-[300] text-[18px] text-white mt-auto">
                  {member.name}
                </h3>
                <p className="font-urbanist font-[400] text-[11px] tracking-[0.18em] uppercase text-gold mt-1">
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

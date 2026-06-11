import { Reveal } from "@/components/site/Reveal";

const team = [
  {
    name: "João Gabriel Prado",
    role: "Co-Founder",
    chips: ["Abreu Advogados", "ULisboa", "CIDP", "Corporate & M&A"],
    bio: "Advogado na Abreu Advogados em Corporate e M&A. Pós-graduações CIDP em Corporate Finance e M&A. O braço jurídico da MOOVIA no ecossistema português."
  },
  {
    name: "Moyses Filipe",
    role: "Conselheiro Estratégico",
    chips: ["Deloitte", "Oracle", "IBM", "SAP", "Salesforce"],
    bio: "25+ anos em tecnologia corporativa. Especialista na indústria seguradora. Liderou equipas de alta performance e operações C-Level globais."
  },
  {
    name: "Eduardo Trindade",
    role: "Strategic Relocation Advisor",
    chips: ["ADLS", "MBA USP", "Live University", "SC Investor"],
    bio: "VP Global Sales na ADLS. Professor de MBA, palestrante e investidor imobiliário em Santa Catarina. Fluente em PT, EN e ES."
  },
  {
    name: "Dany Zukerman",
    role: "Education & Family Transition Advisor",
    chips: ["Direito UCAM", "18 anos CLO", "CID Records"],
    bio: "18 anos como Chief Legal Officer da CID Records. Especialista no acompanhamento de estudantes e famílias brasileiras na transição."
  },
  {
    name: "Laura Costa",
    role: "Mobilidade Internacional",
    chips: ["Mestrado ULisboa", "Erasmus", "TJSC", "Imigração"],
    bio: "Mestre em Direito pela ULisboa. Erasmus em Itália e Rep. Tcheca. Especialista em imigração, nacionalidade e documentação transfronteiriça."
  },
  {
    name: "Sara Russo",
    role: "Real Estate Specialist",
    chips: ["RE/MAX Collection", "Luxo", "10+ anos"],
    bio: "Mais de 10 anos no mercado imobiliário português. Premiada RE/MAX Portugal. Housing acima de €1.500/mês exclusivamente."
  }
];

export function FoundersSection() {
  return (
    <section id="sobre" className="bg-black py-32 px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Os fundadores são o produto
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.1] text-white">
              Antes de coordenar transições internacionais,<br />vivemos as nossas.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 font-urbanist text-[17px] font-[300] text-w35 leading-relaxed max-w-2xl">
              Background de Deloitte, Oracle e SAP. Cada sócio passou pelo processo que coordenamos.
              Essa experiência não é marketing: é o único diferencial que nenhum concorrente consegue replicar.
            </p>
          </Reveal>
        </div>

        {/* Frederico Card */}
        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start mb-32">
          <Reveal>
            <div className="aspect-[4/5] bg-black-3 relative overflow-hidden group border border-b18">
              <img 
                src="/images/frederico.png" 
                alt="Frederico Prado" 
                className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-4 left-6 z-10">
                 <p className="font-urbanist text-[12px] font-[300] text-w35">Frederico Prado · Lisboa</p>
              </div>
            </div>
          </Reveal>

          <div>
            <h3 className="font-sora text-[28px] font-[200] text-white">Frederico Prado</h3>
            <p className="font-urbanist text-[11px] tracking-[0.18em] uppercase text-gold mt-1">Founder & CEO</p>
            
            <div className="flex flex-wrap gap-2 mt-6 mb-8">
              {["Oracle", "SAP", "MBA FGV", "Tampa", "Lisboa, 2018"].map((chip) => (
                <span key={chip} className="px-3 py-1 border border-b18 font-urbanist text-[11px] uppercase text-w35">
                  {chip}
                </span>
              ))}
            </div>

            <p className="font-urbanist text-[16px] font-[300] text-w35 leading-[1.9] max-w-xl">
              29 anos em TI multinacional. MBA em Empreendedorismo FGV. Formação em Comunicação na University of Tampa. Em Lisboa desde 2018 com a família. Viveu a transição que hoje coordena e conduz pessoalmente cada mandato.
            </p>

            <div className="mt-10 p-7 border-l-2 border-gold bg-[rgba(173,137,87,.04)]">
              <p className="font-sora text-[20px] font-[200] leading-snug text-gold-m italic">
                "Vamos coordenar a sua transição internacional com o mesmo nível de cuidado, estrutura e atenção que gostaríamos de ter recebido na nossa."
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="pt-20">
          <h2 className="font-sora text-[32px] font-[200] text-white mb-4">A equipa que coordena a sua jornada.</h2>
          <p className="font-urbanist text-[17px] font-[300] text-w35 leading-relaxed max-w-2xl mb-16">
            Cada membro da MOOVIA foi escolhido pela profundidade da experiência, não pelo tamanho do currículo. São as pessoas certas para as decisões que importam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-b18 border border-b18">
            {team.map((member, i) => (
              <div key={member.name} className="p-9 bg-black-2 hover:bg-black-3 transition-colors group">
                <div className="flex flex-wrap gap-2 mb-5 h-12 content-start">
                  {member.chips.map(c => (
                    <span key={c} className="px-2 py-0.5 border border-b18 text-[9px] uppercase tracking-wider text-w35">{c}</span>
                  ))}
                </div>
                <h4 className="font-sora text-[18px] font-[300] text-white">{member.name}</h4>
                <p className="font-urbanist text-[11px] tracking-[0.18em] uppercase text-gold mt-1">{member.role}</p>
                <p className="font-urbanist text-[14px] font-[300] text-w35 leading-[1.7] mt-5 line-clamp-3">
                  {member.bio}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

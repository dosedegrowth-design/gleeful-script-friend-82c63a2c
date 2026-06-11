import { Reveal } from "@/components/site/Reveal";
import { useEffect, useState } from "react";

const fullTeam = [
  {
    id: "frederico",
    name: "Frederico Prado",
    title: "Founder & Senior Advisor",
    credentials: ["Oracle", "SAP", "MBA FGV", "Tampa", "Lisboa, 2018"],
    hasPhoto: true,
    bio: [
      { text: "29 anos em TI multinacional. MBA em Empreendedorismo FGV. Formação em Comunicação na University of Tampa. Em Lisboa desde 2018 com a família.", isStrong: true },
      { text: "Viveu a transição que hoje coordena e conduz pessoalmente cada mandato.", isAccent: true },
    ]
  },
  {
    id: "joao",
    hasPhoto: true,
    name: "JOÃO GABRIEL PRADO",
    title: "Co-Founder",
    credentials: ["Abreu Advogados", "ULisboa", "CIDP", "Corporate & M&A", "ELSA"],
    bio: [
      { text: "Advogado na Abreu Advogados em Corporate e M&A. Pós-graduações CIDP em Corporate Finance e M&A.", isStrong: true },
      { text: "O braço jurídico da MOOVIA no ecossistema português.", isAccent: true },
    ]
  },
  {
    id: "moyses",
    hasPhoto: true,
    name: "MOYSES FILIPE",
    title: "Conselheiro Estratégico",
    credentials: ["Deloitte", "Oracle", "IBM", "SAP", "Salesforce", "FIA", "FGV"],
    bio: [
      { text: "25+ anos em tecnologia corporativa. Especialista na indústria seguradora.", isStrong: true },
      { text: "Liderou equipas de alta performance e operações C-Level globais.", isAccent: true },
    ]
  },
  {
    id: "eduardo",
    hasPhoto: true,
    name: "EDUARDO TRINDADE",
    title: "Strategic Relocation Advisor",
    credentials: ["ADLS", "MBA USP", "Live University", "VP Global Sales", "SC Investor"],
    bio: [
      { text: "VP Global Sales na ADLS. Professor de MBA, palestrante e investidor imobiliário em Santa Catarina. Fluente em PT, EN e ES.", isStrong: true },
    ]
  },
  {
    id: "dany",
    hasPhoto: true,
    name: "DANY ZUKERMAN",
    title: "Education & Family Transition Advisor",
    credentials: ["Direito UCAM", "18 anos CLO", "CID Records"],
    bio: [
      { text: "18 anos como Chief Legal Officer da CID Records.", isStrong: true },
      { text: "Especialista no acompanhamento de estudantes e famílias brasileiras na transição.", isAccent: true },
    ]
  },
  {
    id: "laura",
    hasPhoto: true,
    name: "LAURA COSTA",
    title: "Mobilidade Internacional",
    credentials: ["Mestrado ULisboa", "Erasmus", "TJSC", "Imigração", "Documentação"],
    bio: [
      { text: "Mestre em Direito pela ULisboa. Erasmus em Itália e Rep. Tcheca.", isStrong: true },
      { text: "Especialista em imigração, nacionalidade e documentação transfronteiriça.", isAccent: true },
    ]
  },
  {
    id: "sara",
    hasPhoto: true,
    name: "SARA RUSSO",
    title: "Real Estate Specialist",
    credentials: ["RE/MAX Collection", "Luxo", "10+ anos", "Premiada RE/MAX Portugal"],
    bio: [
      { text: "Mais de 10 anos de experiência no mercado imobiliário português. Trajetória reconhecida e premiada pela RE/MAX Portugal. Especialista em RE/MAX Collection, o segmento de luxo e investimento da RE/MAX em Portugal.", isStrong: true },
      { text: "Especializada no atendimento a clientes nacionais e internacionais em aquisição imobiliária, investimento, relocation residencial e oportunidades de património em Portugal. Acompanhamento próximo ao longo de todo o processo, com comunicação constante e transparente.", isAccent: true },
      { text: "Na MOOVIA, lidera a frente de real estate e investimento imobiliário. Atua com housing acima de €1.500/mês.", isAccent: true },
    ]
  }
];

export function FullTeamSection() {
  const [activeSection, setActiveSection] = useState(fullTeam[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    fullTeam.forEach((member) => {
      const el = document.getElementById(member.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black relative">
      {/* Sticky Navigation */}
      <div className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col gap-4">
          {fullTeam.map((member) => (
            <a
              key={member.id}
              href={`#${member.id}`}
              className={`text-[10px] tracking-[0.2em] uppercase font-urbanist transition-all duration-300 text-right ${
                activeSection === member.id ? "text-gold translate-x-[-10px]" : "text-white/20 hover:text-white/40"
              }`}
            >
              {member.name.split(" ")[0]}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px]">
        {fullTeam.map((member, i) => (
          <div
            key={member.id}
            id={member.id}
            className={`group py-[80px] px-6 lg:px-[80px] grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-24 items-start transition-all duration-700 relative overflow-hidden ${
              i % 2 === 0 ? "bg-black" : "bg-[#0A0A0A]"
            }`}
          >
            {/* Hover border animation */}
            <div className="absolute left-0 top-0 w-[2px] h-0 bg-gold transition-all duration-500 group-hover:h-full" />

            <div className="lg:sticky lg:top-[120px]">
              <Reveal>
                <h3 className="font-sora font-[200] text-[28px] text-white leading-tight uppercase">
                  {member.name}
                </h3>
                <p className="font-urbanist font-[400] text-[11px] tracking-[0.2em] uppercase text-gold mt-2">
                  {member.title}
                </p>
                <div className="w-10 h-px bg-white/35 my-6" />
                <div className="flex flex-col gap-2">
                  {member.credentials.map((cred) => (
                    <div
                      key={cred}
                      className="font-urbanist font-[400] text-[11px] tracking-[0.1em] uppercase text-white/35 border border-[#181818] px-3.5 py-1.5 w-fit group-hover:border-gold group-hover:text-gold-l transition-colors duration-300"
                    >
                      {cred}
                    </div>
                  ))}
                </div>

                {member.hasPhoto && (
                  <div className="mt-8 aspect-[4/5] w-full bg-[#181818] border border-[#181818] transition-all duration-700 overflow-hidden">
                    <img 
                      src={`/images/${member.id === 'frederico' ? 'frederico' : member.id}.png`} 
                      style={{ filter: 'grayscale(1) sepia(0.2) contrast(1.1)' }}
                      alt={member.name} 

                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </Reveal>
            </div>

            <div className="flex flex-col gap-8">
              <Reveal delay={100}>
                {member.bio.map((para, idx) => (
                  <p
                    key={idx}
                    className={`font-urbanist text-[17px] leading-[1.9] ${
                      para.isStrong ? "font-[400] text-white" : "font-[300] text-white/35"
                    } ${
                      para.isAccent 
                        ? "border-left-2 border-gold bg-gold/5 p-6 italic" 
                        : ""
                    }`}
                    style={para.isAccent ? { borderLeft: '2px solid #AD8957' } : {}}
                    dangerouslySetInnerHTML={{ __html: para.text }}
                  />
                ))}
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

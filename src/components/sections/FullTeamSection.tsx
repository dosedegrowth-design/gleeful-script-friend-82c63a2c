import { Reveal } from "@/components/site/Reveal";
import { useEffect, useState } from "react";

const fullTeam = [
  {
    id: "frederico",
    name: "FREDERICO PRADO",
    title: "Founder & CEO",
    credentials: ["Oracle", "WeDo (SONAE)", "Cipher (Prosegur)", "MBA FGV", "Tampa", "Lisboa, 2018"],
    hasPhoto: true,
    bio: [
      { text: "Tem 29 anos de experiência como executivo em empresas multinacionais de tecnologia: Oracle, WeDo (SONAE), Cipher (Prosegur), Choice Technologies, Link Consulting.", isStrong: true },
      { text: "Liderou projetos estratégicos e relações de alto nível entre América Latina, Europa e África. Formado em Comunicação pela University of Tampa, onde viveu 4 anos e iniciou a sua trajetória internacional. MBA em Empreendedorismo e Desenvolvimento de Novos Negócios pela Fundação Getulio Vargas." },
      { text: "Veio para Portugal em 2018 com a família e passou pela mesma jornada que hoje coordena para os seus clientes: documentação, imóvel, escola, fiscalidade, adaptação, os 90 dias depois de chegar. Foi essa experiência vivida de dentro, somada a décadas de vendas consultivas e desenvolvimento de negócios em ambiente corporativo global, que motivou a criação da MOOVIA." },
      { text: "Na MOOVIA, coordena pessoalmente cada mandato. É ele quem conduz a Conversa Gratuita, o Assessment e a relação com cada família ao longo de toda a jornada.", isAccent: true },
    ]
  },
  {
    id: "joao",
    hasPhoto: true,
    name: "JOÃO GABRIEL PRADO",
    title: "Co-Founder",
    credentials: ["Abreu Advogados", "ULisboa", "CIDP", "Corporate & M&A", "ELSA"],
    bio: [
      { text: "Licenciado pela Faculdade de Direito da Universidade de Lisboa, com duas pós-graduações pelo CIDP nas áreas de Corporate Finance, M&A e Corporate Litigation.", isStrong: true },
      { text: "Atua na Abreu Advogados em Direito Empresarial, operações societárias e assessoria a clientes nacionais e internacionais. Vice-Presidente da ELSA U.Lisboa, Diretor Pedagógico do NELB e membro do Conselho Lusófono da Conexão Lusófona." },
      { text: "Na MOOVIA, contribui com a dimensão jurídica e a credibilidade que só o conhecimento do ecossistema legal português de dentro pode oferecer.", isAccent: true },
    ]
  },
  {
    id: "moyses",
    hasPhoto: true,
    name: "MOYSES FILIPE",
    title: "Conselheiro Estratégico",
    credentials: ["Deloitte", "Oracle", "IBM", "SAP", "Salesforce", "FIA", "FGV"],
    bio: [
      { text: "Mais de 25 anos de experiência internacional em tecnologia, transformação digital e desenvolvimento de negócios nas maiores empresas do setor: Deloitte, Oracle, IBM, SAP, Guidewire e Salesforce.", isStrong: true },
      { text: "Apoiou grandes organizações na criação de valor tangível, modernização operacional e relacionamento executivo de longo prazo. Especialização na indústria seguradora. Formação em Administração Estratégica pela FIA e em Seguros pela FGV." },
      { text: "Na MOOVIA, garante o posicionamento institucional, o desenvolvimento da operação e os padrões internacionais de confiança e excelência que a marca boutique exige.", isAccent: true },
    ]
  },
  {
    id: "eduardo",
    hasPhoto: true,
    name: "EDUARDO TRINDADE",
    title: "Strategic Relocation Advisor",
    credentials: ["ADLS", "MBA USP", "Live University", "VP Global Sales", "SC Investor"],
    bio: [
      { text: "Mais de 25 anos de experiência em desenvolvimento de negócios, educação executiva e relações comerciais internacionais. Vice-President of Global Sales na Advantages Digital Learning Solutions (ADLS).", isStrong: true },
      { text: "Liderou negociações internacionais de alto impacto com grandes grupos editoriais globais. Professor em programas de MBA da Live University. Palestrante internacional. MBA pela USP. Investidor imobiliário em Itapema e Porto Belo, SC." },
      { text: "Na MOOVIA, apoia clientes brasileiros com abordagem consultiva, humana e estratégica nos momentos de planeamento internacional, investimento e transição de vida.", isAccent: true },
    ]
  },
  {
    id: "dany",
    hasPhoto: true,
    name: "DANY ZUKERMAN",
    title: "Education & Family Transition Advisor",
    credentials: ["Direito UCAM", "18 anos CLO", "CID Records"],
    bio: [
      { text: "Formado em Direito pela Universidade Candido Mendes. 18 anos como Chief Legal Officer da CID Records, com experiência em gestão, relações institucionais e acompanhamento estratégico de projetos e pessoas.", isStrong: true },
      { text: "Com forte capacidade relacional e visão humana sobre os desafios da mobilidade internacional, atua como ponte entre o Brasil e Portugal, apoiando estudantes e famílias nas etapas de preparação, organização e adaptação à nova realidade académica e cultural portuguesa.", isAccent: true },
      { text: "Na MOOVIA, lidera o suporte a famílias e estudantes brasileiros em transição, com foco em continuidade educacional, integração familiar e construção de redes de apoio em Portugal.", isAccent: true },
    ]
  },
  {
    id: "laura",
    hasPhoto: true,
    name: "LAURA COSTA",
    title: "Mobilidade Internacional",
    credentials: ["Mestrado ULisboa", "Erasmus", "TJSC", "Imigração", "Documentação"],
    bio: [
      { text: "Mestre em Direito Penal e Ciências Criminais pela Faculdade de Direito da Universidade de Lisboa. Formação internacional pelo programa Erasmus na Itália e na República Tcheca.", isStrong: true },
      { text: "Experiência junto ao Tribunal de Justiça de Santa Catarina em organização documental e produção de textos formais no âmbito jurídico. Radicada em Lisboa, consolidou atuação em imigração e mobilidade internacional, com foco em processos migratórios, nacionalidade portuguesa e regularização documental de clientes brasileiros e estrangeiros.", isAccent: true },
      { text: "Na MOOVIA, contribui para uma experiência de transição mais segura, estruturada e humanizada, apoiando clientes em processos documentais, imigração e integração em Portugal.", isAccent: true },
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
                <h3 className="font-sora font-[200] text-[28px] text-white leading-tight">
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
                  <div className="mt-8 aspect-[4/5] w-full bg-[#181818] border border-[#181818] grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                    <img 
                      src={`/${member.id}.png`} 
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
                  >
                    {para.text}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

export function FoundersSection() {
  const team = [
    {
      id: "joao",
      name: "João Gabriel Prado",
      role: "Co-Founder",
      chips: ["Abreu Advogados", "ULisboa", "CIDP", "Corporate & M&A"],
      bio: "Advogado na Abreu Advogados em Corporate e M&A. Pós-graduações CIDP em Corporate Finance e M&A. O braço jurídico da MOOVIA no ecossistema português."
    },
    {
      id: "moyses",
      name: "Moyses Filipe",
      role: "Conselheiro Estratégico",
      chips: ["Deloitte", "Oracle", "IBM", "SAP", "Salesforce"],
      bio: "25+ anos em tecnologia corporativa. Especialista na indústria seguradora. Liderou equipas de alta performance e operações C-Level globais."
    },
    {
      id: "eduardo",
      name: "Eduardo Trindade",
      role: "Strategic Relocation Advisor",
      chips: ["ADLS", "MBA USP", "Live University", "SC Investor"],
      bio: "VP Global Sales na ADLS. Professor de MBA, palestrante e investidor imobiliário em Santa Catarina. Fluente em PT, EN e ES."
    },
    {
      id: "dany",
      name: "Dany Zukerman",
      role: "Education & Family Transition Advisor",
      chips: ["Direito UCAM", "18 anos CLO", "CID Records"],
      bio: "18 anos como Chief Legal Officer da CID Records. Especialista no acompanhamento de estudantes e famílias brasileiras na transição."
    },
    {
      id: "laura",
      name: "Laura Costa",
      role: "Mobilidade Internacional",
      chips: ["Mestrado ULisboa", "Erasmus", "TJSC", "Imigração"],
      bio: "Mestre em Direito pela ULisboa. Erasmus em Itália e Rep. Tcheca. Especialista em imigração, nacionalidade e documentação transfronteiriça."
    },
    {
      id: "sara",
      name: "Sara Russo",
      role: "Real Estate Specialist",
      chips: ["RE/MAX Collection", "Luxo", "10+ anos"],
      bio: "Mais de 10 anos no mercado imobiliário português. Premiada RE/MAX Portugal. Housing acima de €1.500/mês exclusivamente."
    }
  ];

  return (
    <section className="bg-black py-32 px-6 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            Os fundadores são o produto
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(28px,4vw,48px)] font-[200] text-white leading-tight mb-8"
          >
            "Antes de coordenar transições internacionais,<br/>vivemos as nossas."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[17px] font-[300] text-w35 leading-[1.85] max-w-[600px]"
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
            <p className="font-urbanist text-[12px] font-[300] text-w35 uppercase tracking-widest text-center">Frederico Prado · Lisboa</p>
          </motion.div>

          <div className="flex flex-col">
            <h3 className="font-sora text-[28px] font-[200] text-white">Frederico Prado</h3>
            <p className="font-urbanist text-[11px] font-[400] tracking-[0.18em] uppercase text-gold mt-1 mb-6">Founder & CEO</p>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {["Oracle", "SAP", "MBA FGV", "Tampa", "Lisboa, 2018"].map(chip => (
                <span key={chip} className="border border-b18 px-3 py-1 font-urbanist text-[11px] uppercase tracking-wider text-w35">
                  {chip}
                </span>
              ))}
            </div>

            <p className="font-urbanist text-[16px] font-[300] text-w35 leading-[1.9] mb-10">
              29 anos em TI multinacional. MBA em Empreendedorismo FGV. Formação em Comunicação na University of Tampa. Em Lisboa desde 2018 com a família. Viveu a transição que hoje coordena e conduz pessoalmente cada mandato.
            </p>

            <div className="border-l-2 border-gold bg-w05 p-10">
              <p className="font-sora text-[20px] font-[200] text-gold-m italic leading-relaxed">
                "Vamos coordenar a sua transição internacional com o mesmo nível de cuidado, estrutura e atenção que gostaríamos de ter recebido na nossa."
              </p>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="mt-40">
          <div className="mb-20">
            <h3 className="font-sora text-[28px] font-[200] text-white mb-6">A equipa que coordena a sua jornada.</h3>
            <p className="font-urbanist text-[17px] font-[300] text-w35 leading-[1.85] max-w-[700px]">
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
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {member.chips.map(chip => (
                    <span key={chip} className="font-urbanist text-[10px] font-[400] text-w35 uppercase tracking-widest border border-b18 px-2 py-1">
                      {chip}
                    </span>
                  ))}
                </div>
                <h4 className="font-sora text-[18px] font-[300] text-white mb-1 group-hover:text-gold-l transition-colors">{member.name}</h4>
                <p className="font-urbanist text-[11px] font-[400] tracking-[0.18em] uppercase text-gold mb-6">{member.role}</p>
                <p className="font-urbanist text-[14px] font-[300] text-w35 leading-[1.7] line-clamp-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

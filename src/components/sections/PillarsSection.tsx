import { Reveal } from "@/components/site/Reveal";

const pillars = [
  {
    n: "01",
    verb: "PLANEJAMOS",
    tagline: '"Tomar as decisões certas antes de mudar."',
    services: [
      "Strategic Assessment", "Diagnósticos", "Mapa de Decisão", "Estratégia Migratória", "Planeamento Fiscal", "City Experience", "Planeamento Habitacional", "Avaliação de Crédito"
    ],
    deliverable: "Plano Estratégico de Transição Internacional"
  },
  {
    n: "02",
    verb: "INSTALAMOS",
    tagline: '"Tudo que precisa para chegar e ficar legalmente instalado."',
    services: [
      "Habitação (Busca Ativa, Airbnb Hunting, Visitas, Negociação)", "NIF", "NISS", "Utente", "PB4", "Conta Bancária", "Carta", "Passe Navegante", "Abertura de Atividade", "Recibos Verdes", "Concierge completo", "Ativações (Água, Gás, Luz, Internet)", "Traduções e Equivalências"
    ],
    deliverable: "Família legalmente instalada e operando"
  },
  {
    n: "03",
    verb: "INTEGRAMOS",
    tagline: '"Transformando uma mudança numa transição de vida."',
    services: [
      "School Matching Nacional", "School Matching Internacional", "Gestão de Matrículas", "Adaptação Familiar (30/60/90 dias)", "Pet Relocation (TAP/Lufthansa, CVI, VIGIAGRO)", "Lisboa Experience Premium", "Integração Cultural"
    ],
    deliverable: "Uma mudança que vira transição de vida"
  },
  {
    n: "04",
    verb: "ESTRUTURAMOS",
    tagline: '"Para quem quer estruturar a vida financeira em Portugal."',
    services: [
      "Enquadramento Fiscal", "Simulação de Rendimentos", "Abertura e Encerramento de Atividade", "Declaração IRS", "Dupla Tributação", "IVA", "Constituição de Empresa", "NIPC", "Contabilidade Mensal ENI e Lda", "Estruturação Societária e Patrimonial"
    ],
    deliverable: "Vida financeira estruturada e em conformidade"
  }
];

export function PillarsSection() {
  return (
    <section id="servicos" className="bg-black-2 py-[120px] px-6 lg:px-[80px] relative z-[1] pointer-events-none">
      <div className="mx-auto max-w-[1400px] pointer-events-auto">
        <Reveal>
          <div className="font-sora text-[11px] tracking-[0.34em] uppercase text-gold mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Quatro pilares
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-amotha text-[clamp(32px,4vw,60px)] font-extralight leading-[1.06] tracking-[-0.02em] mb-6 text-white">
            Uma jornada <span className="text-gold italic">completa.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-urbanist text-[17px] font-light text-white-3 leading-[1.9] max-w-[680px] mb-12">
            Não resolvemos tarefas isoladas. Coordenamos a jornada inteira, do planejamento à estruturação da vida em Portugal.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mt-[72px] relative z-[100] isolate pointer-events-auto">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.n} delay={i * 120} distance={30} className="h-full">
              <div className="pillar bg-black-2 p-[60px] lg:p-[52px] relative overflow-hidden group transition-colors duration-400 hover:bg-black-3 h-full group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(173,137,87,0.12)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="font-urbanist text-[120px] font-thin text-gold/5 leading-none absolute top-5 right-8 tracking-[-0.06em] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  {pillar.n}
                </div>
                <h3 className="font-sora text-[16px] font-semibold text-gold leading-none mb-3 tracking-[0.1em] uppercase">
                  {pillar.verb}
                </h3>
                <p className="font-urbanist text-[14px] font-light text-white-3 italic mb-7 leading-relaxed">
                  {pillar.tagline}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {pillar.services.map((service) => (
                    <li key={service} className="font-sora text-[11px] tracking-[0.2em] uppercase font-normal text-white-3 px-3.5 py-1.5 border border-border transition-all duration-200 group-hover:border-border-2">
                      {service}
                    </li>
                  ))}
                </ul>
                {pillar.deliverable && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="font-sora text-[10px] uppercase tracking-widest text-gold mb-1">Resultado:</p>
                    <p className="font-urbanist text-[13px] text-white-3 italic">{pillar.deliverable}</p>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-600 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


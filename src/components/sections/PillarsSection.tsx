import { Reveal } from "@/components/site/Reveal";

const pillars = [
  {
    n: "01",
    verb: "Planejamos",
    tagline: '"Tomar as decisões certas antes de mudar."',
    services: [
      "Assessment", "Diagnósticos", "Mapa de Decisão",
      "Estratégia Migratória", "Fiscal Inicial", "City Experience"
    ]
  },
  {
    n: "02",
    verb: "Instalamos",
    tagline: '"Tudo que precisa para chegar legalmente instalado."',
    services: [
      "Habitação", "NIF · NISS", "Conta Bancária",
      "Concierge", "Airport Pick-up", "Traduções"
    ]
  },
  {
    n: "03",
    verb: "Integramos",
    tagline: '"Transformando uma mudança numa transição de vida."',
    services: [
      "School Matching", "Educação Internacional",
      "Adaptação Familiar", "Pet Relocation", "Lisboa Experience"
    ]
  },
  {
    n: "04",
    verb: "Estruturamos",
    tagline: '"Para quem quer estruturar a vida financeira em Portugal."',
    services: [
      "Fiscalidade", "Constituição de Empresa",
      "Contabilidade", "Planeamento Patrimonial", "Investidores"
    ]
  }
];

export function PillarsSection() {
  return (
    <section id="servicos" className="bg-black-2 py-[120px] px-6 lg:px-[80px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Quatro pilares
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-sora text-[clamp(32px,4vw,60px)] font-extralight leading-[1.06] tracking-[-0.02em] mb-6 text-white">
            Uma jornada <em className="text-gold-l not-italic italic">completa.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-urbanist text-[17px] font-light text-white-3 leading-[1.9] max-w-[680px] mb-12">
            Não resolvemos tarefas isoladas. Coordenamos a jornada inteira, do planejamento à estruturação da vida em Portugal.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mt-[72px]">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.n} delay={i * 100}>
              <div className="pillar bg-black-2 p-[60px] lg:p-[52px] relative overflow-hidden group transition-colors duration-400 hover:bg-black-3 h-full">
                <div className="font-sora text-[100px] font-thin text-gold/5 leading-none absolute top-5 right-8 tracking-[-0.06em] pointer-events-none">
                  {pillar.n}
                </div>
                <h3 className="font-sora text-[40px] font-extralight text-gold-l leading-none mb-3 tracking-[-0.02em]">
                  {pillar.verb}
                </h3>
                <p className="font-urbanist text-[14px] font-light text-white-3 italic mb-7 leading-relaxed">
                  {pillar.tagline}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {pillar.services.map((service) => (
                    <li key={service} className="font-urbanist text-[11px] tracking-[0.08em] uppercase font-normal text-white-3 px-3.5 py-1.5 border border-border transition-all duration-200 group-hover:border-border-2">
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold to-teal transition-all duration-600 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

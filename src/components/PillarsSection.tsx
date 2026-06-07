import { cn } from '@/lib/utils';

const pillars = [
  {
    num: '01',
    title: 'PLANEJAMOS',
    subtitle: '"Tomar as decisões certas antes de mudar."',
    tags: ['Assessment', 'Diagnósticos', 'Mapa de Decisão', 'Estratégia Migratória', 'Fiscal Inicial', 'City Experience'],
  },
  {
    num: '02',
    title: 'INSTALAMOS',
    subtitle: '"Tudo que precisa para chegar legalmente instalado."',
    tags: ['Habitação', 'NIF', 'NISS', 'Conta Bancária', 'Concierge', 'Airport Pick-up', 'Traduções', 'Pet Relocation'],
  },
  {
    num: '03',
    title: 'INTEGRAMOS',
    subtitle: '"Transformando uma mudança numa transição de vida."',
    tags: ['School Matching', 'Educação Internacional', 'Adaptação Familiar', 'Pet Relocation', 'Lisboa Experience', 'Programa 30/60/90 dias'],
  },
  {
    num: '04',
    title: 'ESTRUTURAMOS',
    subtitle: '"Para quem quer estruturar a vida financeira em Portugal."',
    tags: ['Fiscalidade', 'Constituição de Empresa', 'Contabilidade Mensal', 'Processamento Salarial', 'Planeamento Patrimonial', 'Investidores'],
  },
];

export const PillarsSection = () => {
  return (
    <section className="bg-black-2 py-[120px] px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.num}
              className={cn(
                'relative bg-black-2 p-16 group transition-colors duration-700 hover:bg-black-3 overflow-hidden reveal',
                `delay-${(i % 4) + 1}`
              )}
            >
              {/* Giant Ghost Number */}
              <div className="absolute top-8 right-8 font-amotha font-thin text-[120px] leading-none opacity-[0.04] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-700">
                {pillar.num}
              </div>

              <h3 className="font-sora font-extralight text-[40px] text-gold-l leading-tight mb-4">
                <span className="text-white/20 mr-4 font-sora font-light text-base align-top inline-block mt-3">{pillar.num} ·</span>
                {pillar.title}
              </h3>
              
              <p className="font-urbanist font-light text-base text-white/50 mb-12 italic">
                {pillar.subtitle}
              </p>

              <div className="flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-border rounded-full font-urbanist text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/60 group-hover:border-white/20 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Border Hover animation */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-gold to-teal transition-all duration-1000 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

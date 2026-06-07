export const Marquee = () => {
  const items = [
    'Transição Internacional',
    'Brasil para Portugal',
    'Coordenação de Vida e Património',
    'Strategic Assessment',
    'Mandato Personalizado',
    '90 dias Pós-chegada',
    'School Matching',
    'Fiscalidade Internacional',
  ];

  const content = items.join(' · ');

  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-black/80 h-12 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center px-4">
            <span className="font-urbanist font-normal text-[11px] uppercase tracking-[0.24em] text-white/35">
              {items.map((item, j) => (
                <span key={j}>
                  {item}
                  <span className="text-gold mx-8">·</span>
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

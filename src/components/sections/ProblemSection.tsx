import { Reveal } from "@/components/site/Reveal";

const cards = [
  {
    n: "01",
    tag: "O Azulejo Inteiro",
    title: "Portugal na primeira olhada",
    body: "O todo emerge antes das partes. O cérebro reconhece o azulejo e classifica: Portugal, qualidade, permanência. A marca comunica onde existe antes de dizer uma palavra.",
  },
  {
    n: "02",
    tag: "Portal e Ponte",
    title: "Cross-border sem precisar dizer",
    body: "Os arcos são os portais históricos de Portugal: entradas das cidades, pontes entre margens. A linguagem arquitetônica que diz: aqui começa outro mundo.",
  },
  {
    n: "03",
    tag: "A Alça da Mala",
    title: "A mudança é concreta",
    body: "A curva ornamental é uma alça de bagagem. Mudar de país é físico, real, tangível. A MOOVIA coordena o que vai dentro das malas e o que fica para trás.",
  },
  {
    n: "04",
    tag: "A Casa",
    title: "O destino final de todo mandato",
    body: "No centro do padrão está uma casa. Não um imóvel. Uma casa. Porque o que a MOOVIA entrega não é um contrato: é a sensação de chegar a um lugar que é seu.",
  },
  {
    n: "05",
    tag: "As Pessoas",
    title: "A MOOVIA conecta e move gente",
    body: "Figuras humanas repetidas em quatro direções. A MOOVIA não move processos: move pessoas. Famílias inteiras, com histórias, com medo, com expectativa.",
  },
  {
    n: "06",
    tag: "O Avião",
    title: "O momento em que tudo muda",
    body: "O avião aparece quatro vezes porque a jornada não tem um único sentido. Vai, volta, acompanha. A MOOVIA começa antes do avião decolar.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-black-2 py-[120px] px-6 lg:px-[80px]">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            O símbolo
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-amotha text-[clamp(32px,4vw,60px)] font-extralight leading-[1.06] tracking-[-0.02em] mb-6 text-white">
            Seis grafismos.<br/>
            <em className="text-gold-l not-italic italic">Uma história só.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-urbanist text-[17px] font-light text-white-3 leading-[1.9] max-w-[680px] mb-12">
            Dentro do azulejo da MOOVIA estão escondidos os seis momentos de toda transição. Você precisa saber olhar.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-border mt-[72px]">
          {cards.map((card, i) => (
            <Reveal key={card.n} delay={100 + i * 50}>
              <div className="inside-card p-10 lg:p-[48px] bg-black-2 relative overflow-hidden group transition-colors duration-400 hover:bg-black-3 h-full">
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-gold transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:h-full" />
                <div className="font-amotha text-[72px] font-thin text-gold/10 leading-none mb-1 tracking-[-0.04em]">
                  {card.n}
                </div>
                <p className="font-urbanist text-[10px] tracking-[0.22em] uppercase text-gold mb-4 font-medium">
                  {card.tag}
                </p>
                <h3 className="font-amotha text-[20px] font-light text-white mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="font-urbanist text-[14px] font-light text-white-3 leading-[1.85]">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

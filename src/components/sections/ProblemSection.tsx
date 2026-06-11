import { Reveal } from "@/components/site/Reveal";

const cards = [
  {
    n: "01",
    tag: "Decisões simultâneas",
    title: "O tempo não é o maior problema",
    body: "O tempo não é o maior problema. É tomar dez decisões simultâneas sem ter feito nenhuma delas antes.",
  },
  {
    n: "02",
    tag: "Volume de informação",
    title: "Informação demais, clareza de menos",
    body: "Grupos de WhatsApp, YouTube, advogados e corretores dizem coisas diferentes. O volume de informação não resolve a decisão, cria mais dúvida.",
  },
  {
    n: "03",
    tag: "Riscos invisíveis",
    title: "Erros que custam",
    body: "Apartamento no bairro errado. Escola sem vaga. Uma rotina mal estruturada para a família. Cada erro custa dinheiro, tempo e energia que a família não tem.",
  },
  {
    n: "04",
    tag: "Adaptação estruturada",
    title: "O depois que ninguém resolve",
    body: "Chegar é metade do processo. A adaptação, do cônjuge que largou a carreira, das crianças na nova escola, da rotina reconstruída, exige acompanhamento real.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-black-2 py-[120px] px-6 lg:px-[80px] relative z-[1] pointer-events-none">
      <div className="mx-auto max-w-[1400px] pointer-events-auto">
        <Reveal>
          <div className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            O mercado resolve tarefas
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-amotha text-[clamp(32px,4vw,60px)] font-extralight leading-[1.06] tracking-[-0.02em] mb-6 text-white">
            O problema não é a burocracia.<br/>
            <em className="text-gold-l not-italic">É que ninguém coordena o todo.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-urbanist text-[17px] font-light text-white-3 leading-[1.9] max-w-[720px] mb-12">
            Você tem um advogado para o visto, um corretor para o imóvel, uma escola para os filhos, um contador para o NIF. Cada um no seu quadrado. E você no meio tentando fazer tudo encaixar numa das decisões mais complexas da sua vida.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-border mt-[72px] relative z-[100] isolate pointer-events-auto">
          {cards.map((card, i) => (
            <Reveal key={card.n} delay={i * 80} distance={30}>
              <div className="inside-card p-10 lg:p-[48px] bg-black-2 relative overflow-hidden group transition-colors duration-400 hover:bg-black-3 h-full">
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-gold transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:h-full" />
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

        <Reveal delay={400} className="mt-20 text-center bg-black p-12">
          <p className="font-amotha text-[clamp(28px,4vw,52px)] font-extralight leading-snug text-white">
            "O mercado resolve tarefas."<br/>
            <span className="text-gold-l italic">"A MOOVIA resolve a decisão."</span>
          </p>
        </Reveal>

      </div>
    </section>
  );
}

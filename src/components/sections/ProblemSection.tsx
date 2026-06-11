import { Reveal } from "@/components/site/Reveal";

const cards = [
  {
    n: "01",
    title: "O tempo não é o maior problema",
    body: "O tempo não é o maior problema. É tomar dez decisões simultâneas sem ter feito nenhuma delas antes.",
  },
  {
    n: "02",
    title: "Informação demais, clareza de menos",
    body: "Grupos de WhatsApp, YouTube, advogados e corretores dizem coisas diferentes. O volume de informação não resolve a decisão, cria mais dúvida.",
  },
  {
    n: "03",
    title: "Erros que custam",
    body: "Apartamento no bairro errado. Escola sem vaga. Uma rotina mal estruturada para a família. Cada erro custa dinheiro, tempo e energia que a família não tem.",
  },
  {
    n: "04",
    title: "O depois que ninguém resolve",
    body: "Chegar é metade do processo. A adaptação, do cônjuge que largou a carreira, das crianças na nova escola, da rotina reconstruída, exige acompanhamento real.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-black-2 py-32 px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              O mercado resolve tarefas
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] tracking-[-0.02em] mb-6 text-white max-w-4xl">
              "O problema não é a burocracia.<br/>
              É que ninguém coordena o todo."
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-urbanist text-[18px] font-[300] text-w35 leading-[1.9] max-w-[640px]">
              Você tem um advogado para o visto, um corretor para o imóvel, uma escola para os filhos, um contador para o NIF. Cada um no seu quadrado. E você no meio tentando fazer tudo encaixar numa das decisões mais complexas da sua vida.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-b18 border border-b18">
          {cards.map((card, i) => (
            <div key={card.n} className="p-10 lg:p-12 bg-black-2 relative overflow-hidden group hover:bg-black-3 transition-colors">
              <div className="absolute top-0 left-0 w-[3px] h-0 bg-gold transition-all duration-500 group-hover:h-full" />
              <div className="font-sora text-[60px] font-[100] text-[rgba(173,137,87,.07)] leading-none mb-1 tracking-[-0.04em]">
                {card.n}
              </div>
              <h3 className="font-sora text-[19px] font-[300] text-white mb-4">
                {card.title}
              </h3>
              <p className="font-urbanist text-[14px] font-[300] text-w35 leading-[1.85]">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <Reveal delay={400} className="mt-1 flex flex-col items-center justify-center text-center bg-black py-20 px-12 border border-b18">
          <p className="font-sora text-[clamp(26px,4vw,52px)] font-[200] leading-snug text-white">
            "O mercado resolve tarefas."<br/>
            <span className="text-gold-l italic">A MOOVIA resolve a decisão.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

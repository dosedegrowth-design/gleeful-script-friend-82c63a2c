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
    body: "Apartamento no bairro errado. Escola sem vaga. Uma rotina mal estruturada para a família. Cada erro custa dinheiro, tempo e energia.",
  },
  {
    n: "04",
    title: "O depois que ninguém resolve",
    body: "Chegar é metade do processo. A adaptação, do cônjuge que largou a carreira, das crianças na nova escola, da rotina reconstruída, exige acompanhamento real.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10" style={{ background: "var(--ivory)" }}>
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow mb-6">O mercado resolve tarefas</p></Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(32px,5vw,56px)] leading-[1.1]" style={{ fontWeight: 200 }}>
              O problema não é a burocracia.<br />
              É que ninguém coordena o todo.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-[18px] leading-relaxed max-w-2xl" style={{ color: "var(--stone)", fontWeight: 300 }}>
              Você tem um advogado para o visto, um corretor para o imóvel, uma escola para os filhos,
              um contador para o NIF. Cada um no seu quadrado. E você no meio tentando fazer tudo
              encaixar numa das decisões mais complexas da sua vida.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-px" style={{ background: "var(--line)" }}>
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 80}>
              <div
                className="p-10 md:p-12 h-full group transition-all duration-500 border-l-[3px] border-l-transparent hover:border-l-[var(--copper)]"
                style={{ background: "var(--stone-light)" }}
              >
                <span className="font-display text-sm" style={{ color: "var(--copper)", letterSpacing: "0.2em" }}>
                  {c.n}
                </span>
                <h3 className="mt-6 font-display text-2xl leading-tight" style={{ fontWeight: 300 }}>{c.title}</h3>
                <p className="mt-5 text-[15px] leading-relaxed" style={{ color: "var(--ink-light)", fontWeight: 300 }}>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 p-12 md:p-20 text-center" style={{ background: "var(--ink)" }}>
            <p className="font-display text-[clamp(28px,4vw,44px)] leading-tight" style={{ color: "var(--ivory)", fontWeight: 200 }}>
              O mercado resolve tarefas.<br />
              A MOOVIA resolve a{" "}
              <em className="not-italic italic font-display" style={{ color: "var(--copper-mid)" }}>decisão.</em>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

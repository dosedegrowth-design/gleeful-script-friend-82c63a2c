import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";

const steps = [
  {
    n: "01",
    title: "Conversa Gratuita",
    tag: "Sem custo · Agendamento via Calendly",
    body: "Uma conversa direta com o founder, sem script, sem chatbot. Entendemos o seu contexto, validamos o fit e mostramos como a MOOVIA pensa o seu caso. Não entregamos a solução aqui. Mostramos a profundidade do que é necessário resolver.",
    cta: { label: "Avaliar meu caso →", to: "/contacto" },
  },
  {
    n: "02",
    title: "Strategic Assessment · €250",
    tag: "€250 abatidos no mandato · 90 minutos",
    body: "Não é uma consulta, é o primeiro trabalho estratégico da MOOVIA. Mapeamos o seu perfil familiar, financeiro, migratório, patrimonial, timing e risco. O resultado é um entregável físico:",
    bullets: [
      "Mapa de decisão personalizado",
      "Estratégia de habitação",
      "Estratégia documental e migratória",
      "Estratégia familiar",
      "Estrutura fiscal",
      "Plano de próximos passos com cronograma",
    ],
  },
  {
    n: "03",
    title: "Mandato Personalizado",
    tag: "Sob medida · Sem pacotes",
    body: "Coordenação completa da jornada, do visto ao apartamento, da escola ao banco, da chegada à adaptação. Um único ponto de responsabilidade para a decisão mais importante da sua família.",
  },
  {
    n: "90",
    title: "Acompanhamento Pós-chegada",
    tag: "Único no mercado",
    body: "Chegar é metade. Ficar é o que importa. Os 90 dias após o pouso são os mais críticos. Nenhum concorrente acompanha este período de forma estruturada. Nós acompanhamos.",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="py-28 md:py-40 px-6 md:px-10" style={{ background: "var(--stone-light)" }}>
      <div className="mx-auto max-w-[1400px]">
        <Reveal><p className="eyebrow mb-6">Como trabalhamos</p></Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] leading-[1.1] max-w-3xl" style={{ fontWeight: 200 }}>
            Um processo em duas etapas.<br />
            Do diagnóstico ao destino.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="grid md:grid-cols-[160px_1fr] gap-8 p-10 md:p-14 border border-[var(--line)] hover:border-[var(--copper-mid)] transition-colors duration-500" style={{ background: "var(--stone-light)" }}>
                <div>
                  <div className="font-display text-[64px] leading-none" style={{ color: "var(--copper)", fontWeight: 200 }}>{s.n}</div>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-[rgba(196,146,79,0.08)] text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--copper-dark)" }}>{s.tag}</div>
                  <h3 className="mt-3 font-display text-3xl" style={{ fontWeight: 200 }}>{s.title}</h3>
                  <p className="mt-5 text-[16px] leading-relaxed max-w-3xl" style={{ color: "var(--ink-mid)", fontWeight: 300 }}>{s.body}</p>
                  {s.bullets && (
                    <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[14px]" style={{ color: "var(--ink-mid)" }}>
                          <span style={{ color: "var(--copper)" }}>·</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.cta && (
                    <Link to={s.cta.to} className="inline-flex mt-8 text-[11px] uppercase tracking-[0.18em] font-bold py-3 px-6 bg-[var(--ink)] text-[var(--ivory)] hover:bg-[var(--copper-mid)] hover:text-[var(--ink)] transition-colors duration-300">
                      {s.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

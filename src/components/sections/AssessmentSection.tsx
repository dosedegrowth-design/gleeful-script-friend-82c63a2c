import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";

const deliverables = [
  "Diagnóstico de perfil: familiar, financeiro e migratório",
  "Avaliação patrimonial e estrutura fiscal ideal",
  "Análise de timing e mapeamento de riscos",
  "Mapa de decisão: visto, cidades e housing strategy",
  "Estratégia de escolas e integração familiar",
  "Cronograma personalizado completo",
  "Entregável físico: documento que você leva",
];

export function AssessmentSection() {
  return (
    <section className="py-28 md:py-40 px-6 md:px-10" style={{ background: "var(--ink)" }}>
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1.1fr_1fr] gap-16 items-start">
        <div>
          <Reveal><p className="eyebrow mb-6">Strategic Relocation Assessment</p></Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-[clamp(30px,4.5vw,52px)] leading-[1.1]" style={{ color: "var(--ivory)", fontWeight: 200 }}>
              O diagnóstico que organiza<br />o que você não sabia<br />que precisava organizar.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 text-[17px] leading-relaxed max-w-lg" style={{ color: "rgba(250,250,247,0.55)", fontWeight: 300 }}>
              Não é uma consulta. É o primeiro trabalho estratégico da MOOVIA, com entregável físico,
              que mapeia tudo o que precisa ser decidido antes de comprar a passagem.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div
            className="p-10 md:p-12 border-t-2"
            style={{ background: "rgba(250,250,247,0.04)", borderColor: "var(--copper-mid)" }}
          >
            <div className="font-display text-[72px] leading-none" style={{ color: "var(--copper-mid)", fontWeight: 200 }}>
              €250
            </div>
            <p className="mt-3 text-[12px] uppercase tracking-[0.18em]" style={{ color: "rgba(250,250,247,0.6)" }}>
              Strategic Relocation Assessment · 90 minutos
            </p>
            <ul className="mt-8 space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="flex gap-3 text-[15px]" style={{ color: "rgba(250,250,247,0.7)", fontWeight: 300 }}>
                  <span style={{ color: "var(--copper-mid)" }}>—</span>
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display italic text-sm" style={{ color: "rgba(250,250,247,0.4)", fontWeight: 200 }}>
              Os €250 são abatidos integralmente no mandato.
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-block px-7 py-4 text-[11px] tracking-[0.18em] uppercase font-medium"
              style={{ background: "var(--copper-mid)", color: "var(--ink)" }}
            >
              Solicitar Assessment
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

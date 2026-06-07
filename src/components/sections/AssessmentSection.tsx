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
    <section id="assessment" className="bg-black py-[120px] px-6 lg:px-[80px]">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Strategic Relocation Assessment
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-amotha text-[clamp(30px,4.5vw,52px)] font-extralight leading-[1.1] text-white">
              O diagnóstico que organiza<br />o que você não sabia<br />que precisava organizar.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 font-urbanist text-[17px] font-light text-white-3 leading-relaxed max-w-lg">
              Não é uma consulta. É o primeiro trabalho estratégico da MOOVIA, com entregável físico,
              que mapeia tudo o que precisa ser decidido antes de comprar a passagem.
            </p>
            <p className="mt-6 font-urbanist text-[17px] font-light text-white-3 leading-relaxed max-w-lg">
              A maioria das pessoas chega a Portugal sem ter respondido as perguntas certas. Nós construímos o mapa antes da viagem.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div
            className="p-10 md:p-12 border-t-2 border-gold bg-white-5"
          >
            <div className="font-amotha text-[72px] font-thin text-gold-l leading-none tracking-[-0.04em]">
              €250
            </div>
            <p className="mt-3 font-urbanist text-[12px] tracking-[0.18em] uppercase text-white-3">
              Strategic Relocation Assessment · 90 minutos
            </p>
            <div className="mt-8 font-urbanist text-[11px] tracking-[0.2em] uppercase text-gold/80 mb-2">Entregáveis:</div>
            <ul className="mt-0 space-y-0">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 font-urbanist text-[15px] font-light text-white-3 py-3 border-b border-border last:border-0 leading-relaxed">
                  <span className="text-gold shrink-0 mt-0.5">—</span>
                  {d}
                </li>
              ))}
            </ul>
            <p className="font-urbanist text-[13px] font-light text-gold/60 italic mt-8 border-t border-border pt-6">
              Os €250 são abatidos integralmente no mandato.
            </p>
            <Link
              to="/contacto"
              className="bg-gold text-black font-urbanist text-[12px] font-semibold tracking-[0.2em] uppercase px-10 py-4 relative overflow-hidden group transition-all duration-300 w-full text-center mt-8 block"
            >
              <span className="relative z-10">Solicitar Assessment</span>
              <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

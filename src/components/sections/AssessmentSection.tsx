import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";

const deliverables = [
  "Mapa de decisão personalizado",
  "Estratégia de habitação",
  "Estratégia documental e migratória",
  "Estratégia familiar e escolar",
  "Estrutura fiscal inicial",
  "Plano de próximos passos com cronograma",
  "Entregável físico: documento que você leva",
];

export function AssessmentSection() {
  return (
    <section id="assessment-details" className="bg-black-2 py-[120px] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-start pointer-events-auto">
        <div>
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Strategic Relocation Assessment
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(28px,3.5vw,52px)] font-[200] leading-[1.1] text-white">
              O diagnóstico que organiza<br />o que você não sabia<br />que precisava organizar.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 font-urbanist text-[17px] font-[300] text-white/35 leading-relaxed max-w-lg">
              Não é uma consulta. É o primeiro trabalho estratégico da MOOVIA, com entregável físico,
              que mapeia tudo o que precisa ser decidido antes de comprar a passagem.
            </p>
            <p className="mt-6 font-urbanist text-[17px] font-[300] text-white/35 leading-relaxed max-w-lg">
              A maioria das pessoas chega a Portugal sem ter respondido as perguntas certas. Nós construímos o mapa antes da viagem.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 mt-10">
              {[
                { icon: "⏱", text: "90 minutos estruturados" },
                { icon: "📄", text: "Entregável físico que você leva" },
                { icon: "💰", text: "€250 abatidos no mandato" },
                { icon: "👨‍💼", text: "Diretamente com o founder" }
              ].map((b, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-2xl">{b.icon}</span>
                  <span className="font-urbanist text-[13px] text-white/35 leading-tight">{b.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} className="relative z-[100] isolate pointer-events-auto">
          <div
            className="p-10 md:p-12 border border-border bg-black-3 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,var(--gold),var(--teal),var(--gold))] bg-[length:200%] animate-[gradientSlide_4s_ease_infinite]" />
            <p className="font-urbanist text-[11px] tracking-[0.24em] uppercase text-gold mb-8">Strategic Relocation Assessment</p>
            <div className="font-sora text-[88px] font-[100] text-gold-l leading-none tracking-[-0.04em]">
              €250
            </div>
            <p className="mt-1 font-urbanist text-[11px] tracking-[0.11em] uppercase text-white/35">
              90 minutos · Entregável físico
            </p>
            <div className="mt-12 font-urbanist text-[11px] tracking-[0.2em] uppercase text-gold mb-4 font-semibold">Entregáveis:</div>
            <ul className="mt-0 space-y-0">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 font-urbanist text-[14px] font-[300] text-white/35 py-3 border-b border-border last:border-0 leading-relaxed group-hover:text-white-2 transition-colors">
                  <span className="text-gold shrink-0 mt-0.5">→</span>
                  {d}
                </li>
              ))}
            </ul>
            <p className="font-urbanist text-[13px] font-[300] text-gold/60 italic mt-8 border-t border-border pt-6">
              "Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA."
            </p>
            <Link
              to="/contacto"
              className="bg-gold text-black font-urbanist text-[12px] font-[600] tracking-[0.2em] uppercase px-10 py-5 relative overflow-hidden group transition-all duration-300 w-full text-center mt-8 block"
            >
              <span className="relative z-10">Solicitar Assessment</span>
              <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </div>
        </Reveal>
      </div>
      <style>{`
        @keyframes gradientSlide { 0%{background-position:0%} 100%{background-position:200%} }
      `}</style>
    </section>
  );
}


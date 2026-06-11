import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";
import NumberFlow from "@number-flow/react";

const deliverables = [
  "Mapa de decisão personalizado",
  "Estratégia de habitação",
  "Estratégia documental e migratória",
  "Estratégia familiar e escolar",
  "Estrutura fiscal inicial",
  "Plano de próximos passos com cronograma",
  "Entregável físico: documento que você leva"
];

export function AssessmentSection() {
  return (
    <section id="assessment" className="bg-black-2 py-32 px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Strategic Relocation Assessment
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(28px,3.5vw,52px)] font-[200] leading-[1.1] text-white mb-8">
              "O diagnóstico que organiza<br />o que você não sabia<br />que precisava organizar."
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-urbanist text-[17px] font-[300] text-w35 leading-[1.9] max-w-lg mb-12">
              Não é uma consulta. É o primeiro trabalho estratégico da MOOVIA,
              com entregável físico, que mapeia tudo o que precisa ser decidido
              antes de comprar a passagem.
              <br /><br />
              A maioria das pessoas chega a Portugal sem ter respondido as perguntas
              certas. Nós construímos o mapa antes da viagem.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-6 mt-12">
             {[
               { icon: "⏱", t: "90 minutos estruturados" },
               { icon: "📄", t: "Entregável físico que você leva" },
               { icon: "💰", t: "€250 abatidos no mandato" },
               { icon: "👨‍💼", t: "Diretamente com o founder" }
             ].map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-w05 border border-b18">
                   <span className="text-lg">{b.icon}</span>
                   <span className="font-urbanist text-[12px] uppercase tracking-wide text-w35 leading-tight">{b.t}</span>
                </div>
             ))}
          </div>
        </div>

        <div className="lg:pl-10">
           {/* Repetindo o card por instrução do prompt */}
           <div className="bg-black-3 border border-b18 p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,var(--gold),var(--teal),var(--gold))] bg-[length:200%] animate-[gradient_4s_linear_infinite]" />
            <p className="font-urbanist text-[11px] tracking-[0.24em] uppercase text-gold mb-10">Strategic Relocation Assessment</p>
            <div className="font-sora text-[88px] font-[100] text-gold-l leading-none tracking-[-0.04em] flex items-baseline">
              <span className="text-[40px] mr-2">€</span>
              <NumberFlow value={250} />
            </div>
            <p className="font-urbanist text-[11px] font-[300] text-w35 tracking-[0.1em] uppercase mt-2 mb-10">90 minutos · Entregável físico</p>
            <ul className="space-y-4 mb-12">
              {deliverables.map(d => (
                <li key={d} className="flex gap-4 font-urbanist text-[14px] font-[300] text-w35">
                  <span className="text-gold shrink-0">→</span>
                  {d}
                </li>
              ))}
            </ul>
            <Link
              to="/contacto"
              className="wipe-btn block w-full text-center bg-gold text-black font-urbanist text-[12px] font-[600] tracking-[0.2em] uppercase py-5 rounded-none"
            >
              <span className="relative z-10 uppercase">Solicitar Assessment</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

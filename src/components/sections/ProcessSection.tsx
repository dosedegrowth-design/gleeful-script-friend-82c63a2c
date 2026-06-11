import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";

const steps = [
  {
    n: "01",
    tag: "Sem custo · Calendly",
    title: "Entendemos o seu contexto",
    body: "Uma conversa direta com o founder, sem script, sem chatbot. Validamos o fit e mostramos como a MOOVIA pensa o seu caso. Não entregamos a solução aqui. Mostramos a profundidade do que é necessário resolver.",
    badge: "Sem custo · Agendamento via Calendly"
  },
  {
    n: "02",
    tag: "€250 abatidos no mandato",
    title: "O primeiro trabalho real",
    body: "90 minutos com entregável físico. Mapeamento completo de perfil, riscos, estratégias e cronograma. Não é consulta: é diagnóstico.",
    badge: "€250 abatidos no mandato"
  },
  {
    n: "03",
    tag: "Sob medida",
    title: "Coordenação completa",
    body: "Do visto ao apartamento, da escola ao banco. Um único ponto de responsabilidade para a decisão mais importante da sua família.",
    badge: "€3.000 a €10.000"
  },
  {
    n: "90",
    tag: "Único no mercado",
    title: "Os 90 dias após o pouso",
    body: "Os 90 dias após o pouso são os mais críticos. Adaptação familiar, rotina, integração. Nenhum concorrente acompanha este período de forma estruturada. Nós acompanhamos.",
    badge: "Único no mercado"
  }
];

const deliverables = [
  "Mapa de decisão personalizado",
  "Estratégia de habitação",
  "Estratégia documental e migratória",
  "Estratégia familiar e escolar",
  "Estrutura fiscal inicial",
  "Plano de próximos passos com cronograma",
  "Entregável físico: documento que você leva"
];

export function ProcessSection() {
  return (
    <section id="processo" className="bg-black py-32 px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-start">
        {/* Timeline */}
        <div>
          <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Como trabalhamos
          </div>
          <h2 className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] tracking-[-0.02em] text-white mb-16">
            "Um processo.<br/>Do diagnóstico ao destino."
          </h2>

          <div className="relative">
             {steps.map((step, i) => (
                <div key={step.n} className="flex gap-8 group mb-12 last:mb-0 relative">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 border border-b18 bg-w05 flex items-center justify-center font-sora text-[14px] text-gold group-hover:bg-gold group-hover:text-black transition-all">
                      {step.n}
                    </div>
                    {i < steps.length - 1 && <div className="w-px h-full bg-b18 mt-4" />}
                  </div>
                  <div className="pb-8">
                     <p className="font-urbanist text-[11px] tracking-[0.14em] uppercase text-gold-m mb-2">{step.tag}</p>
                     <h3 className="font-sora text-[20px] font-[300] text-white mb-3">{step.title}</h3>
                     <p className="font-urbanist text-[14px] font-[300] text-w35 leading-[1.85] mb-4">{step.body}</p>
                     <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] uppercase tracking-wider border border-gold/20">
                        {step.badge}
                     </span>
                  </div>
                </div>
             ))}
          </div>
        </div>

        {/* Assessment Card */}
        <div className="sticky top-32 lg:ml-10">
          <div className="bg-black-3 border border-b18 p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,var(--gold),var(--teal),var(--gold))] bg-[length:200%] animate-[gradient_4s_linear_infinite]" />
            <style>{`@keyframes gradient { 0%{background-position:0%} 100%{background-position:200%} }`}</style>
            
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

            <p className="font-urbanist text-[13px] italic text-[rgba(173,137,87,.6)] mb-10 pt-6 border-t border-b18">
              "Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA."
            </p>

            <Link
              to="/contacto"
              className="wipe-btn block w-full text-center bg-gold text-black font-urbanist text-[12px] font-[600] tracking-[0.2em] uppercase py-5 rounded-none"
            >
              <span className="relative z-10">Solicitar Assessment</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

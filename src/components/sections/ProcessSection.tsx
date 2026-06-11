import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NumberFlow from "@number-flow/react";

const steps = [
  {
    n: "01",
    tag: "Sem custo · Calendly",
    title: "Entendemos o seu contexto",
    body: "Uma conversa direta com o founder, sem script, sem chatbot. Validamos o fit e mostramos como a MOOVIA pensa o seu caso. Não entregamos a solução aqui. Mostramos a profundidade do que é necessário resolver.",
    badge: "Sem custo · Agendamento via Calendly",
  },
  {
    n: "02",
    tag: "€250 abatidos no mandato",
    title: "O primeiro trabalho real",
    body: "90 minutos com entregável físico. Mapeamento completo de perfil, riscos, estratégias e cronograma. Não é consulta: é diagnóstico.",
    badge: "€250 abatidos no mandato",
  },
  {
    n: "03",
    tag: "Sob medida",
    title: "Coordenação completa",
    body: "Do visto ao apartamento, da escola ao banco. Um único ponto de responsabilidade para a decisão mais importante da sua família.",
    badge: "€3.000 a €10.000",
  },
  {
    n: "90",
    tag: "Único no mercado",
    title: "Os 90 dias após o pouso",
    body: "Os 90 dias após o pouso são os mais críticos. Adaptação familiar, rotina, integração. Nenhum concorrente acompanha este período de forma estruturada. Nós acompanhamos.",
    badge: "Único no mercado",
  },
];

const deliverables = [
  "Mapa de decisão personalizado",
  "Estratégia de habitação",
  "Estratégia documental e migratória",
  "Estratégia familiar e escolar",
  "Estrutura fiscal inicial",
  "Plano de próximos passos com cronograma",
  "Entregável físico: documento que você leva",
];

export function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section ref={containerRef} id="processo" className="bg-black py-[120px] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-start pointer-events-auto">
        {/* ESQUERDA — TIMELINE */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-4"
          >
            <span className="w-6 h-px bg-gold" />
            Como trabalhamos
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] tracking-[-0.02em] text-white mb-16"
          >
            Um processo.<br/>
            <span className="text-gold-l italic">Do diagnóstico ao destino.</span>
          </motion.h2>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div 
                key={step.n} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="group flex gap-0 mb-0.5"
              >
                <div className="flex flex-col items-center w-[72px] shrink-0">
                  <div className="w-12 h-12 border border-border bg-white/05 flex items-center justify-center font-sora text-[14px] font-[300] text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:border-gold">
                    {step.n}
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 min-h-[20px] bg-border" />}
                </div>
                <div className="pl-6 pb-12">
                  <p className="font-urbanist text-[11px] tracking-[0.18em] uppercase text-gold mb-2">{step.tag}</p>
                  <h3 className="font-sora text-[20px] font-[300] text-white mb-2.5">{step.title}</h3>
                  <p className="font-urbanist text-[14px] font-[300] text-white/35 leading-[1.85]">{step.body}</p>
                  <span className="inline-block font-urbanist text-[10px] tracking-[0.14em] uppercase text-black bg-gold px-3 py-1 mt-3">
                    {step.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DIREITA — ASSESSMENT CARD */}
        <div className="hidden lg:block sticky top-[120px]">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black-3 border border-border p-[52px] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-teal to-gold bg-[length:200%] animate-[gradientSlide_4s_ease_infinite]" />
            
            <p className="font-urbanist text-[11px] font-[400] tracking-[0.24em] uppercase text-gold mb-10">
              Strategic Relocation Assessment
            </p>
            
            <div className="font-sora text-[88px] font-[100] text-gold-l leading-none tracking-[-0.04em] mb-1 flex items-baseline">
              <span className="text-[40px] mr-2">€</span>
              <NumberFlow value={250} />
            </div>
            
            <p className="font-urbanist text-[11px] font-[300] tracking-[0.11em] uppercase text-white/35 mb-12">
              90 minutos · Entregável físico
            </p>
            
            <ul className="space-y-0 mb-12">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 font-urbanist text-[14px] font-[300] text-white/35 py-3 border-b border-border last:border-0 leading-relaxed group-hover:text-white/60 transition-colors">
                  <span className="text-gold shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="font-urbanist text-[13px] font-[300] text-gold/60 italic mb-10 leading-relaxed border-t border-border pt-8">
              "Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA."
            </p>
            
            <Link
              to="/contacto"
              className="bg-gold text-black font-urbanist text-[12px] font-[600] tracking-[0.2em] uppercase py-5 relative overflow-hidden group w-full text-center block rounded-none transition-all duration-500"
            >
              <span className="relative z-10">Solicitar Assessment</span>
              <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </motion.div>
        </div>
      </div>
      <style>{`
        @keyframes gradientSlide { 0%{background-position:0%} 100%{background-position:200%} }
      `}</style>
    </section>
  );
}

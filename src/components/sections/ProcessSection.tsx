import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChatCircle, FileText, Compass, MapPin, CheckCircle } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: "01",
    tag: "Sem custo · Calendly",
    title: "Entendemos o seu contexto",
    body: "Uma conversa direta com o founder, sem script, sem chatbot. Validamos o fit e mostramos como a MOOVIA pensa o seu caso. Não entregamos a solução aqui. Mostramos a profundidade do que é necessário resolver.",
    badge: "Sem custo · Agendamento via Calendly",
    icon: ChatCircle
  },
  {
    n: "02",
    tag: "€250 abatidos no mandato",
    title: "O primeiro trabalho real",
    body: "90 minutos com entregável físico. Mapeamento completo de perfil, riscos, estratégias e cronograma. Não é consulta: é diagnóstico.",
    badge: "€250 abatidos no mandato",
    icon: FileText
  },
  {
    n: "03",
    tag: "Sob medida",
    title: "Coordenação completa",
    body: "Do visto ao apartamento, da escola ao banco. Um único ponto de responsabilidade para a decisão mais importante da sua família.",
    badge: "€3.000 a €10.000",
    icon: Compass
  },
  {
    n: "90",
    tag: "Único no mercado",
    title: "Chegar é metade",
    body: "Os 90 dias após o pouso são os mais críticos. Adaptação familiar, rotina, integração. Nenhum concorrente acompanha este período de forma estruturada. Nós acompanhamos.",
    badge: "Acompanhamento 90 dias",
    icon: MapPin
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
  const spineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!spineRef.current || !containerRef.current) return;

    gsap.fromTo(spineRef.current, 
      { scaleY: 0 },
      { 
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 60%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section id="processo" ref={containerRef} className="bg-navy py-clamp(110px,14vh,180px) px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-start">
        {/* Timeline */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-cobre" />
            Como trabalhamos
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(32px,5vw,60px)] font-[200] leading-[1.02] tracking-[-0.02em] text-off mb-20"
          >
            "Um processo.<br/>Do diagnóstico ao destino."
          </motion.h2>

          <div className="relative pl-12">
             {/* The Spine */}
             <div className="absolute left-[23px] top-2 bottom-8 w-px bg-line-gold" />
             <div 
               ref={spineRef}
               className="absolute left-[23px] top-2 bottom-8 w-px bg-cobre origin-top z-10" 
             />

             {steps.map((step, i) => (
                <div key={step.n} className="flex gap-10 group mb-20 last:mb-0 relative">
                   {/* Node */}
                   <div className="absolute -left-[12px] top-0 z-20">
                      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border-line-cool group-hover:border-cobre transition-all group-hover:scale-110 duration-500">
                         <step.icon weight="thin" size={20} className="text-cobre" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-navy-rich border border-line-gold flex items-center justify-center rounded-full text-[9px] font-mono text-latte">
                         {step.n}
                      </div>
                   </div>

                   <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="pb-4"
                   >
                      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-beige mb-2">{step.tag}</p>
                      <h3 className="font-display text-[26px] font-[200] text-off mb-4 group-hover:text-latte transition-colors">{step.title}</h3>
                      <p className="font-urbanist text-[15px] font-[300] text-mut leading-[1.7] mb-6 max-w-md">{step.body}</p>
                      <span className="inline-block px-4 py-1.5 glass rounded-full text-cobre text-[10px] font-mono uppercase tracking-widest border-cobre/20">
                         {step.badge}
                      </span>
                   </motion.div>
                </div>
             ))}
          </div>
        </div>

        {/* Assessment Card */}
        <div className="sticky top-32 lg:pl-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 lg:p-12 relative overflow-hidden group rounded-2xl border-line-gold/20"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cobre opacity-30 group-hover:opacity-100 transition-opacity" />
            
            <p className="font-mono text-[11px] font-[400] tracking-[0.24em] uppercase text-cobre mb-10">Strategic Relocation Assessment</p>
            
            <div className="font-display text-[88px] font-[100] text-latte leading-none tracking-[-0.04em] flex items-baseline">
              <span className="text-[40px] mr-2">€</span>
              <NumberFlow value={250} />
            </div>
            
            <p className="font-urbanist text-[11px] font-[300] text-mut-2 tracking-[0.1em] uppercase mt-2 mb-10">90 minutos · Entregável físico</p>

            <ul className="space-y-4 mb-12">
              {deliverables.map((d, i) => (
                <li key={d} className="flex gap-4 font-urbanist text-[15px] font-[300] text-mut">
                  <CheckCircle weight="thin" size={20} className="text-cobre shrink-0" />
                  {d}
                </li>
              ))}
            </ul>

            <p className="font-urbanist text-[13px] italic text-cobre/60 mb-10 pt-8 border-t border-line-cool">
              "Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA."
            </p>

            <Link
              to="/contacto"
              className="wipe-btn block w-full text-center bg-cobre text-navy-deep font-urbanist text-[12px] font-[600] tracking-[0.2em] uppercase py-5 rounded-sm"
            >
              <span className="relative z-10">Solicitar Assessment</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
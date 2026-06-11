import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChatCircle, FileText, Compass, MapPin } from "@phosphor-icons/react";
import NumberFlow from "@number-flow/react";

const steps = [
  {
    n: "01",
    icon: ChatCircle,
    tag: "Passo 01 · Conversa Gratuita",
    title: "Entendemos o seu contexto",
    body: "Uma conversa direta com o founder, sem script, sem chatbot. Validamos o fit e mostramos como a MOOVIA pensa o seu caso.",
    badge: "Sem custo · Agendamento via Calendly",
  },
  {
    n: "02",
    icon: FileText,
    tag: "Passo 02 · Strategic Assessment",
    title: "O primeiro trabalho real",
    body: "90 minutos com entregável físico. Mapeamento completo de perfil, riscos, estratégias e cronograma. Não é consulta: é diagnóstico.",
    badge: "€250 abatidos no mandato",
  },
  {
    n: "03",
    icon: Compass,
    tag: "Passo 03 · Mandato Personalizado",
    title: "Coordenação completa",
    body: "Do visto ao apartamento, da escola ao banco. Um único ponto de responsabilidade para a decisão mais importante da sua família.",
    badge: "€3.000 a €10.000",
  },
  {
    n: "90",
    icon: MapPin,
    tag: "Passo 90 · Pós-chegada",
    title: "Os 90 dias após o pouso",
    body: "Os 90 dias após o pouso são os mais críticos. Adaptação familiar, rotina, integração. Nós acompanhamos.",
    badge: "Único no mercado",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(progressRef.current, 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: spineRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          }
        }
      );

      steps.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.step-${i}`,
          start: "top 70%",
          onEnter: () => {
            gsap.to(`.node-${i}`, { backgroundColor: "#ad8957", borderColor: "#ad8957", boxShadow: "0 0 20px rgba(173,137,87,0.5)", duration: 0.4 });
          },
          onLeaveBack: () => {
            gsap.to(`.node-${i}`, { backgroundColor: "#1B2C4C", borderColor: "rgba(173,137,87,0.16)", boxShadow: "none", duration: 0.4 });
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="processo" className="bg-navy py-[clamp(110px,14vh,180px)] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-4"
          >
            <span className="w-6 h-px bg-cobre" />
            Como trabalhamos
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] tracking-[-0.02em] text-off mb-16"
          >
            Um processo.<br/>
            <span className="text-latte italic">Do diagnóstico ao destino.</span>
          </motion.h2>

          <div className="relative pl-12 lg:pl-16">
            {/* THE SPINE */}
            <div ref={spineRef} className="absolute left-6 lg:left-8 top-4 bottom-4 w-px bg-line-gold origin-top">
              <div ref={progressRef} className="absolute inset-0 bg-cobre origin-top scale-y-0" />
            </div>

            <div className="space-y-20">
              {steps.map((step, i) => (
                <div key={step.n} className={`step-${i} relative`}>
                  {/* NODE */}
                  <div className={`node-${i} absolute -left-12 lg:-left-16 top-2 w-12 h-12 rounded-full glass border border-line-gold flex items-center justify-center z-10 transition-colors duration-500`}>
                    <step.icon size={20} weight="thin" className="text-off" />
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="font-urbanist text-[11px] tracking-[0.2em] uppercase text-cobre mb-2">{step.tag}</p>
                    <h3 className="font-sora text-[22px] font-[300] text-off mb-4">{step.title}</h3>
                    <p className="font-urbanist text-[16px] font-[300] text-mut leading-[1.8] max-w-[500px] mb-6">{step.body}</p>
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-navy-rich border border-line-cool text-off font-urbanist text-[11px] tracking-[0.05em] uppercase">
                      {step.badge}
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ASSESSMENT CARD STICKY */}
        <div className="hidden lg:block sticky top-[140px]">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bento-card p-12 lg:p-14 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cobre via-latte to-cobre" />
            <p className="font-urbanist text-[11px] tracking-[0.24em] uppercase text-cobre mb-10">Strategic Relocation Assessment</p>
            
            <div className="font-sora text-[100px] font-[100] text-latte leading-none tracking-[-0.04em] mb-4 flex items-baseline">
              <span className="text-[40px] mr-2">€</span>
              <NumberFlow value={250} />
            </div>
            
            <p className="font-urbanist text-[12px] tracking-[0.12em] uppercase text-mut mb-12">90 minutos · Entregável físico</p>
            
            <ul className="space-y-4 mb-12">
              {[
                "Mapa de decisão personalizado",
                "Estratégia de habitação",
                "Estratégia familiar e escolar",
                "Plano de próximos passos"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 font-urbanist text-[15px] font-[300] text-mut group-hover:text-off transition-colors duration-500">
                  <div className="w-5 h-5 rounded-full bg-cobre/10 flex items-center justify-center border border-cobre/20">
                    <Compass size={12} weight="thin" className="text-cobre" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="font-urbanist text-[14px] font-[300] text-mut/60 italic mb-10 leading-relaxed border-t border-line-cool pt-8">
              "Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA."
            </p>
            
            <Link
              to="/contacto"
              className="bg-cobre text-navy-deep font-urbanist text-[13px] font-[600] tracking-[0.2em] uppercase py-5 relative overflow-hidden group w-full text-center block rounded-none"
            >
              <span className="relative z-10 uppercase">Solicitar Assessment</span>
              <div className="absolute inset-0 bg-latte origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

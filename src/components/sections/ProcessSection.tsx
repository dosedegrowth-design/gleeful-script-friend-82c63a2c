import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";
import processRelocationDocuments from "@/assets/process-relocation-documents.jpg";

export function ProcessSection() {
  const steps = [
    {
      id: "01",
      tag: "Sem custo · Calendly",
      title: "Entendemos o seu contexto",
      body: "Uma conversa direta com o founder, sem script, sem chatbot. Validamos o fit e mostramos como a MOOVIA pensa o seu caso. Não entregamos a solução aqui. Mostramos a profundidade do que é necessário resolver.",
      badge: "Sem custo · Agendamento via Calendly"
    },
    {
      id: "02",
      tag: "€250 abatidos no mandato",
      title: "O primeiro trabalho real",
      body: "90 minutos com entregável físico. Mapeamento completo de perfil, riscos, estratégias e cronograma. Não é consulta: é diagnóstico.",
      badge: "€250 abatidos no mandato"
    },
    {
      id: "03",
      tag: "Sob medida",
      title: "Coordenação completa",
      body: "Do visto ao apartamento, da escola ao banco. Um único ponto de responsabilidade para a decisão mais importante da sua família.",
      badge: "€3.000 a €10.000"
    },
    {
      id: "90",
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

  return (
    <section id="processo" className="bg-black py-32 px-6 lg:px-20 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-start">
        <div className="relative">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            Como trabalhamos
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(28px,4vw,48px)] font-[200] text-white leading-tight mb-20"
          >
            "Um processo.<br/>Do diagnóstico ao destino."
          </motion.h2>

          <div className="space-y-20 relative">
            <div className="absolute left-[23px] top-12 bottom-12 w-px bg-b18" />
            
            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-[48px_1fr] gap-12 group"
              >
                <div className="w-12 h-12 border border-b18 bg-w05 flex items-center justify-center font-display text-[14px] text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  {step.id}
                </div>
                <div className="flex flex-col">
                  <p className="font-body text-[11px] font-[400] text-gold-m uppercase tracking-[0.15em] mb-2">{step.tag}</p>
                  <h3 className="font-display text-[22px] font-[300] text-white mb-4">{step.title}</h3>
                  <p className="font-body text-[15px] font-[300] text-w35 leading-[1.8] mb-6 max-w-md">{step.body}</p>
                  <div className="px-4 py-2 bg-w05 border border-b18 w-fit">
                    <span className="font-body text-[10px] font-[500] uppercase tracking-widest text-gold-l">{step.badge}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="sticky top-32 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[4px] border border-b18 min-h-[320px]"
          >
            <img
              src={processRelocationDocuments}
              loading="lazy"
              width={1920}
              height={1080}
              alt="Documentos e itens que representam a coordenação de uma mudança internacional"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#06091a]/35 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06091a] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-body text-[10px] uppercase tracking-[0.22em] text-gold mb-3">Coordenação real</p>
              <p className="font-display text-[28px] font-[200] text-white leading-tight max-w-[14ch]">
                Cada etapa tratada como parte da mesma decisão.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-black-3 border border-b18 p-12 relative group"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-teal to-gold bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]" />
            
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes gradient {
                0% { background-position: 0% 50%; }
                100% { background-position: 200% 50%; }
              }
            ` }} />

            <p className="font-body text-[11px] font-[400] tracking-[0.24em] uppercase text-gold mb-12">Strategic Relocation Assessment</p>
            
            <div className="font-display text-[88px] font-[100] text-gold-l leading-none tracking-[-0.04em] mb-4">
              <span className="text-[40px] mr-2">€</span>
              <NumberFlow value={250} />
            </div>
            <p className="font-body text-[11px] font-[300] text-w35 uppercase tracking-widest mb-12">90 minutos · Entregável físico</p>

            <ul className="space-y-4 mb-12">
              {deliverables.map((d) => (
                <li key={d} className="flex gap-4 font-body text-[15px] font-[300] text-white/70">
                  <span className="text-gold">→</span>
                  {d}
                </li>
              ))}
            </ul>

            <p className="font-body text-[14px] italic text-gold/60 mb-12 border-t border-b18 pt-10">
              "Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA."
            </p>

            <button className="w-full bg-gold text-black font-body font-[600] text-[13px] tracking-[0.22em] uppercase py-6 transition-all hover:bg-gold-xl relative group overflow-hidden">
              <span className="relative z-10">Solicitar Assessment</span>
              <div className="absolute inset-0 bg-gold-xl translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

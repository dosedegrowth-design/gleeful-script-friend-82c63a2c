import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";

export function AssessmentSection() {
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
    <section id="assessment" className="bg-black py-32 px-6 lg:px-20 relative">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            Strategic Relocation Assessment
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(28px,4.5vw,64px)] font-[200] text-white leading-[0.95] tracking-[-0.04em] mb-12 uppercase"
          >
            "O diagnóstico que organiza<br/>o que você não sabia<br/>que precisava organizar."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[17px] font-[300] text-w35 leading-[1.9] max-w-lg mb-12"
          >
            Não é uma consulta. É o primeiro trabalho estratégico da MOOVIA, com entregável físico, que mapeia tudo o que precisa ser decidido antes de comprar a passagem.
            <br/><br/>
            A maioria das pessoas chega a Portugal sem ter respondido as perguntas certas. Nós construímos o mapa antes da viagem.
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "⏱", label: "90 minutos estruturados" },
              { icon: "📄", label: "Entregável físico que você leva" },
              { icon: "💰", label: "€250 abatidos no mandato" },
              { icon: "👨‍💼", label: "Diretamente com o founder" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black-3 border border-b18 p-6 flex flex-col gap-2"
              >
                <span className="text-2xl mb-2">{item.icon}</span>
                <span className="font-body text-[11px] font-[400] text-w35 uppercase tracking-widest leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:pl-20">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black-3 border border-b18 p-12 relative group"
          >
            {/* Animated border top */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-teal to-gold bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]" />
            
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

            <button className="w-full bg-gold text-black font-body font-[600] text-[13px] tracking-[0.22em] uppercase py-6 transition-all hover:bg-gold-xl group overflow-hidden relative">
              <span className="relative z-10">Solicitar Assessment</span>
              <div className="absolute inset-0 bg-gold-xl translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

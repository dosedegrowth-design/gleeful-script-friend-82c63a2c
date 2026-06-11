import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { CheckCircle } from "@phosphor-icons/react";

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
    <section id="assessment" className="bg-navy py-clamp(110px,14vh,180px) px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-cobre" />
            Strategic Relocation Assessment
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(28px,5vw,52px)] font-[200] leading-[1.02] text-off mb-8"
          >
            "O diagnóstico que organiza<br />o que você não sabia<br />que precisava organizar."
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-[17px] font-[300] text-mut leading-[1.7] max-w-lg mb-12"
          >
            Não é uma consulta. Es o primeiro trabalho estratégico da MOOVIA,
            com entregável físico, que mapeia tudo o que precisa ser decidido
            antes de comprar a passagem.
            <br /><br />
            A maioria das pessoas chega a Portugal sem ter respondido as perguntas
            certas. Nós construímos o mapa antes da viagem.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 mt-12">
             {[
               { icon: "⏱", t: "90 minutos estruturados" },
               { icon: "📄", t: "Entregável físico completo" },
               { icon: "💰", t: "€250 abatidos no mandato" },
               { icon: "👨‍💼", t: "Diretamente com o founder" }
             ].map((b, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 p-5 glass rounded-xl"
                >
                   <span className="text-lg">{b.icon}</span>
                   <span className="font-mono text-[10px] uppercase tracking-wide text-mut leading-tight">{b.t}</span>
                </motion.div>
             ))}
          </div>
        </div>

        <div className="lg:pl-10">
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass p-10 lg:p-12 relative overflow-hidden group rounded-2xl"
           >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cobre opacity-30 group-hover:opacity-100 transition-opacity" />
            
            <p className="font-mono text-[11px] font-[400] tracking-[0.24em] uppercase text-cobre mb-10">Strategic Relocation Assessment</p>
            
            <div className="font-display text-[88px] font-[100] text-latte leading-none tracking-[-0.04em] flex items-baseline">
              <span className="text-[40px] mr-2">€</span>
              <NumberFlow value={250} />
            </div>
            
            <p className="font-mono text-[10px] font-[300] text-mut-2 tracking-[0.1em] uppercase mt-2 mb-10">90 minutos · Entregável físico</p>
            
            <ul className="space-y-4 mb-12">
              {deliverables.map((d, i) => (
                <motion.li 
                  key={d} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex gap-4 font-body text-[15px] font-[300] text-mut"
                >
                  <CheckCircle weight="thin" size={20} className="text-cobre shrink-0" />
                  {d}
                </motion.li>
              ))}
            </ul>
            
            <Link
              to="/contacto"
              className="wipe-btn block w-full text-center bg-cobre text-navy-deep font-mono text-[10px] font-[600] tracking-[0.2em] uppercase py-5 rounded-none active:scale-[0.98] transition-transform"
            >
              <span className="relative z-10">Solicitar Assessment</span>
            </Link>

            <p className="font-body text-[13px] italic text-cobre/60 mt-10 text-center">
              "Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
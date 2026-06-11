import { motion } from "framer-motion";
import { Clock, StackSimple, Warning, House } from "@phosphor-icons/react";

const cards = [
  {
    n: "01",
    title: "O tempo não é o maior problema",
    body: "É tomar dez decisões simultâneas sem ter feito nenhuma delas antes. O tempo é apenas o sintoma.",
    icon: Clock,
    className: "lg:col-span-1"
  },
  {
    n: "02",
    title: "Informação demais, clareza de menos",
    body: "Grupos, advogados e corretores dizem coisas diferentes. O volume de informação não resolve a decisão, cria paralisia.",
    icon: StackSimple,
    className: "lg:col-span-1"
  },
  {
    n: "03",
    title: "Erros que custam o futuro",
    body: "Apartamento no bairro errado. Escola sem vaga. Uma rotina mal estruturada. Cada erro custa dinheiro e energia que a família não tem.",
    icon: Warning,
    className: "lg:col-span-1"
  },
  {
    n: "04",
    title: "O depois que ninguém resolve",
    body: "Chegar é metade do processo. A adaptação, do cônjuge e das crianças, exige acompanhamento real. Nós acompanhamos.",
    icon: House,
    className: "lg:col-span-1"
  },
];

export function ProblemSection() {
  return (
    <section className="bg-navy py-clamp(110px,14vh,180px) px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-cobre" />
            O mercado resolve tarefas
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(32px,5vw,60px)] font-[200] leading-[1.02] tracking-[-0.02em] mb-6 text-off max-w-4xl"
          >
            "O problema não é a burocracia.<br/>
            É que ninguém coordena o todo."
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-urbanist text-[18px] font-[300] text-mut leading-[1.7] max-w-[640px]"
          >
            Você tem um advogado para o visto, um corretor para o imóvel, uma escola para os filhos, um contador para o NIF. Cada um no seu quadrado. E você no meio tentando fazer tudo encaixar numa das decisões mais complexas da sua família.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <motion.div 
              key={card.n} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-10 lg:p-12 relative overflow-hidden group hover:bg-navy-rich transition-colors rounded-2xl"
            >
              <div className="w-10 h-10 glass rounded-lg flex items-center justify-center mb-8 border-line-cool group-hover:border-cobre/40 transition-colors">
                <card.icon weight="thin" size={20} className="text-cobre" />
              </div>
              
              <div className="font-sora text-[44px] font-[100] text-cobre opacity-[0.05] absolute top-4 right-8 leading-none select-none pointer-events-none group-hover:-translate-y-1 transition-transform">
                {card.n}
              </div>

              <h3 className="font-sora text-[19px] font-[300] text-off mb-4 leading-snug">
                {card.title}
              </h3>
              <p className="font-urbanist text-[15px] font-[300] text-mut leading-[1.7]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-4 flex flex-col items-center justify-center text-center glass py-24 px-12 rounded-2xl border-line-gold/20"
        >
          <p className="font-sora text-[clamp(26px,4vw,52px)] font-[200] leading-tight text-off">
            "O mercado resolve tarefas."<br/>
            <span className="text-latte italic font-[200]">A MOOVIA resolve a decisão.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
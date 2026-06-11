import { motion } from "framer-motion";
import { Clock, ListBullets, Warning, House } from "@phosphor-icons/react";

const cards = [
  {
    n: "01",
    icon: Clock,
    title: "O tempo não é o maior problema",
    body: "É tomar dez decisões simultâneas sem ter feito nenhuma delas antes.",
    size: "col-span-12 md:col-span-6 lg:col-span-8",
  },
  {
    n: "02",
    icon: ListBullets,
    title: "Informação demais, clareza de menos",
    body: "Grupos de WhatsApp e corretores dizem coisas diferentes. O volume cria mais dúvida.",
    size: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    n: "03",
    icon: Warning,
    title: "Erros que custam",
    body: "Bairro errado, escola sem vaga. Cada erro custa tempo e energia que a família não tem.",
    size: "col-span-12 md:col-span-6 lg:col-span-4",
  },
  {
    n: "04",
    icon: House,
    title: "O depois que ninguém resolve",
    body: "Chegar é metade. A adaptação exige acompanhamento real pós-pouso.",
    size: "col-span-12 md:col-span-6 lg:col-span-8",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-navy-deep py-[clamp(110px,14vh,180px)] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[700px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-4"
          >
            <span className="w-6 h-px bg-cobre" />
            O mercado resolve tarefas
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] tracking-[-0.02em] text-off mb-8"
          >
            O problema não é a burocracia.<br/>
            <span className="text-latte italic">É que ninguém coordena o todo.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-urbanist text-[18px] font-[300] text-mut leading-[1.9]"
          >
            Você tem um advogado para o visto, um corretor para o imóvel, uma escola para os filhos, um contador para o NIF. Cada um no seu quadrado. E você no meio tentando fazer tudo encaixar.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          {cards.map((card, i) => (
            <motion.div 
              key={card.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${card.size} bento-card p-10 lg:p-12 flex flex-col group`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-navy-raise flex items-center justify-center border border-line-cool group-hover:border-cobre/40 transition-colors duration-500">
                  <card.icon size={24} weight="thin" className="text-cobre group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="font-sora text-[13px] font-[300] text-mut-2">/{card.n}</span>
              </div>
              
              <h3 className="font-sora text-[22px] font-[300] text-off mb-4 leading-tight group-hover:text-latte transition-colors duration-500">
                {card.title}
              </h3>
              <p className="font-urbanist text-[15px] font-[300] text-mut leading-[1.8] max-w-[400px]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center py-20 bg-navy-rich rounded-[20px] border border-line-cool relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,137,87,0.05)_0%,transparent_70%)]" />
          <p className="font-sora text-[clamp(26px,4vw,52px)] font-[200] leading-snug text-off relative z-10">
            "O mercado resolve tarefas."<br/>
            <span className="text-latte italic">A MOOVIA resolve a decisão.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

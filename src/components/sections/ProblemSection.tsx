import { motion } from "framer-motion";

export function ProblemSection() {
  const cards = [
    {
      n: "01",
      title: "Decisões simultâneas",
      body: "O tempo não é o maior problema. É tomar dez decisões simultâneas sem ter feito nenhuma delas antes.",
      fullBody: "O tempo não é o maior problema. É tomar dez decisões simultâneas sem ter feito nenhuma delas antes."
    },
    {
      n: "02",
      title: "Volume de informação",
      body: "Informação demais, clareza de menos",
      fullBody: "Grupos de WhatsApp, YouTube, advogados e corretores dizem coisas diferentes. O volume de informação não resolve a decisão, cria mais dúvida."
    },
    {
      n: "03",
      title: "Riscos invisíveis",
      body: "Erros que custam",
      fullBody: "Apartamento no bairro errado. Escola sem vaga. Uma rotina mal estruturada para a família. Cada erro custa dinheiro, tempo e energia que a família não tem."
    },
    {
      n: "04",
      title: "Adaptação estruturada",
      body: "O depois que ninguém resolve",
      fullBody: "Chegar é metade do processo. A adaptação, do cônjuge que largou a carreira, das crianças na nova escola, da rotina reconstruída, exige acompanhamento real."
    }
  ];

  return (
    <section className="bg-black-2 py-32 px-6 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            O mercado resolve tarefas
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(32px,4vw,60px)] font-[200] text-white leading-tight mb-8"
          >
            "O problema não é a burocracia.<br/>É que ninguém coordena o todo."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[18px] font-[300] text-w35 leading-[1.85] max-w-[640px]"
          >
            Você tem um advogado para o visto, um corretor para o imóvel, uma escola para os filhos, um contador para o NIF. Cada um no seu quadrado. E você no meio tentando fazer tudo encaixar numa das decisões mais complexas da sua vida.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-b18">
          {cards.map((card, i) => (
            <motion.div 
              key={card.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black-2 p-12 relative group overflow-hidden"
            >
              {/* Hover line */}
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-gold transition-all duration-500 group-hover:h-full" />
              
              <div className="font-sora text-[60px] font-[100] text-gold opacity-[0.07] mb-8 leading-none">
                {card.n}
              </div>
              <h3 className="font-sora text-[19px] font-[300] text-white mb-4">
                {card.title}
              </h3>
              <p className="font-urbanist text-[14px] font-[300] text-w35 leading-[1.7]">
                {card.fullBody}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-1 bg-black p-20 text-center"
        >
          <p className="font-sora text-[clamp(26px,4vw,52px)] font-[200] text-white leading-tight">
            "O mercado resolve tarefas."<br/>
            <span className="text-gold-l italic font-[200]">"A MOOVIA resolve a decisão."</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

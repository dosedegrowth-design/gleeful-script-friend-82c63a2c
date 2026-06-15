import { motion } from "framer-motion";
import { LayersIcon, SearchIcon, AlertIcon, ClockIcon } from "@/components/ui/MooviaIcons";
import problemLisboaPlanning from "@/assets/problem-lisboa-planning.jpg";

export function ProblemSection() {
  const cards = [
    {
      icon: Layers,
      title: "Decisões simultâneas",
      body: "O tempo não é o maior problema. É tomar dez decisões simultâneas sem ter feito nenhuma delas antes.",
      fullBody: "O tempo não é o maior problema. É tomar dez decisões simultâneas sem ter feito nenhuma delas antes."
    },
    {
      icon: Search,
      title: "Volume de informação",
      body: "Informação demais, clareza de menos",
      fullBody: "Grupos de WhatsApp, YouTube, advogados e corretores dizem coisas diferentes. O volume de informação não resolve a decisão, cria mais dúvida."
    },
    {
      icon: AlertTriangle,
      title: "Riscos invisíveis",
      body: "Erros que custam",
      fullBody: "Apartamento no bairro errado. Escola sem vaga. Uma rotina mal estruturada para a família. Cada erro custa dinheiro, tempo e energia que a família não tem."
    },
    {
      icon: Clock,
      title: "Adaptação estruturada",
      body: "O depois que ninguém resolve",
      fullBody: "Chegar é metade do processo. A adaptação, do cônjuge que largou a carreira, das crianças na nova escola, da rotina reconstruída, exige acompanhamento real."
    }
  ];

  return (
    <section className="bg-black-2 py-32 px-6 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-end mb-20">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
            >
              O mercado resolve tarefas
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="font-display text-[clamp(32px,4.5vw,72px)] font-[200] text-white leading-[0.95] tracking-[-0.04em] mb-12"
          >
            O problema não é a burocracia.<br/>É que ninguém coordena o todo.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}
              className="font-body text-[18px] font-[300] text-w35 leading-[1.85] max-w-[640px]"
            >
              Você tem um advogado para o visto, um corretor para o imóvel, uma escola para os filhos, um contador para o NIF. Cada um no seu quadrado. E você no meio tentando fazer tudo encaixar numa das decisões mais complexas da sua vida.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[420px] overflow-hidden rounded-[4px] border border-b18 bg-black-3"
          >
            <img
              src={problemLisboaPlanning}
              loading="lazy"
              width={1920}
              height={1080}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06091a] via-[#06091a]/20 to-transparent" />
            <div className="absolute inset-0 bg-[#06091a]/28 mix-blend-multiply" />
          </motion.div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-b18">
          {cards.map((card, i) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black-2 p-[52px_44px] relative group overflow-hidden rounded-[2px] transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.25),0_0_0_1px_rgba(173,137,87,0.2)]"
            >
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-gold transition-all duration-500 group-hover:h-full" />
              <div className="mb-8">
                <Icon icon={card.icon} size={20} color="var(--gold)" />
              </div>
              <h3 className="font-display text-[19px] font-[300] text-white mb-4">
                {card.title}
              </h3>
              <p className="font-body text-[14px] font-[300] text-w35 leading-[1.7]">
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
          <p className="font-display text-[clamp(26px,4vw,52px)] font-[200] text-white leading-tight">
            O mercado resolve tarefas.<br/>
            <span className="text-gold-l italic font-[200]">A MOOVIA resolve a decisão.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}

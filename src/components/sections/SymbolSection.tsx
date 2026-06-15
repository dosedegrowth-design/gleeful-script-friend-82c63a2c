import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Card = {
  num: string;
  concept: string;
  pillar: string;
  description: string;
  tagline: string;
  icon: ReactNode;
  alt: string;
};

const iconBaseProps = {
  width: 52,
  height: 52,
  viewBox: "0 0 52 52",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const AviaoIcon = () => (
  <svg {...iconBaseProps} aria-hidden>
    <path d="M26 6 L30 24 L46 30 L46 33 L30 30 L28 42 L33 45 L33 47 L26 45 L19 47 L19 45 L24 42 L22 30 L6 33 L6 30 L22 24 Z" />
  </svg>
);

const PonteIcon = () => (
  <svg {...iconBaseProps} aria-hidden>
    <path d="M6 38 H46" />
    <path d="M10 38 V22 A16 16 0 0 1 42 22 V38" />
    <path d="M18 38 V28 M26 38 V24 M34 38 V28" />
  </svg>
);

const PessoaIcon = () => (
  <svg {...iconBaseProps} aria-hidden>
    <circle cx="26" cy="16" r="6" />
    <path d="M12 46 V40 A14 14 0 0 1 40 40 V46" />
  </svg>
);

const CasaIcon = () => (
  <svg {...iconBaseProps} aria-hidden>
    <path d="M8 24 L26 8 L44 24 V44 H8 Z" />
    <path d="M22 44 V30 H30 V44" />
  </svg>
);

const cards: Card[] = [
  {
    num: "01 / 04",
    concept: "A Decisão",
    pillar: "Planejamos",
    description:
      "Toda transição começa com uma decisão. Antes de comprar a passagem, é preciso ter clareza sobre o que vem depois: visto, escola, imóvel, fiscalidade, família. O Assessment existe para que a partida seja o início de um plano — não o início de um improviso.",
    tagline: "A decisão certa começa aqui.",
    icon: <AviaoIcon />,
    alt: "Ícone de avião",
  },
  {
    num: "02 / 04",
    concept: "A Passagem",
    pillar: "Instalamos",
    description:
      "Cruzar uma fronteira não é só pegar um avião. É obter documentação, abrir uma conta bancária, conseguir o NIF, a casa, a escola, as ativações. A MOOVIA coordena cada etapa dessa passagem para que a família chegue a Portugal instalada — não perdida.",
    tagline: "A fronteira é o começo, não o obstáculo.",
    icon: <PonteIcon />,
    alt: "Ícone de arco/ponte",
  },
  {
    num: "03 / 04",
    concept: "A Coordenação",
    pillar: "Integramos",
    description:
      "Uma mudança de país não termina quando o avião aterrissa. Começa. A escola das crianças, a rotina do cônjuge, a rede social, a adaptação cultural — tudo isso precisa de atenção nos primeiros 90 dias. A MOOVIA é a única empresa que acompanha este período de forma estruturada.",
    tagline: "Chegar é metade. Ficar é o que importa.",
    icon: <PessoaIcon />,
    alt: "Ícone de pessoa",
  },
  {
    num: "04 / 04",
    concept: "O Destino",
    pillar: "Estruturamos",
    description:
      "O objetivo final não é ter o visto ou o NIF. É ter uma vida em Portugal — estruturada, legal e financeiramente organizada. Fiscalidade, empresa, patrimônio, investimento. A MOOVIA coordena a chegada e a construção do que vem depois.",
    tagline: "Portugal não é o destino. É o começo.",
    icon: <CasaIcon />,
    alt: "Ícone de casa",
  },
];

export function SymbolSection() {
  return (
    <section className="bg-black relative overflow-hidden" style={{ padding: "120px 80px" }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-urbanist text-[10px] font-[400] tracking-[0.24em] uppercase text-gold/80 mb-6"
        >
          O símbolo e o que ele diz
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sora font-[200] text-white text-[clamp(36px,5vw,64px)] leading-[1.05] mb-8"
        >
          Quatro ícones.
          <br />
          <span className="italic text-gold/90">A sua jornada inteira.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-urbanist font-[300] text-w35 text-[15px] leading-[1.85] max-w-[580px]"
        >
          O símbolo da MOOVIA não é decorativo. Cada elemento do azulejo representa um momento real da
          sua transição — do planejamento ao destino. Quando você olha o símbolo, está olhando para a
          jornada que coordenamos.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto relative">
        {/* Connector line — desktop only */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          style={{ transformOrigin: "left center" }}
          className="hidden lg:block absolute left-0 right-0 top-[124px] h-px bg-gold/20 z-0 pointer-events-none"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-b15 relative z-10">
          {cards.map((card, i) => (
            <motion.article
              key={card.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-black2 hover:bg-black3 transition-colors duration-500 overflow-hidden border-t border-transparent hover:border-gold"
              style={{ padding: "52px 40px" }}
            >
              {/* Ghost number */}
              <span
                aria-hidden
                className="absolute top-6 right-6 font-sora font-[100] leading-none select-none pointer-events-none"
                style={{ fontSize: "80px", color: "rgba(173,137,87,0.05)" }}
              >
                {card.num.split(" / ")[0]}
              </span>

              {/* Icon */}
              <motion.div
                role="img"
                aria-label={card.alt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
                className="relative mb-8 w-[52px] h-[52px] flex items-center justify-center text-gold transition-transform duration-500 group-hover:scale-110"
              >
                {card.icon}
              </motion.div>

              {/* Number label */}
              <p className="font-urbanist font-[400] text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-3">
                {card.num}
              </p>

              {/* Concept */}
              <h3 className="font-sora font-[200] text-white mb-2" style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}>
                {card.concept}
              </h3>

              {/* Pillar */}
              <p className="font-urbanist font-[500] text-[10px] tracking-[0.16em] uppercase text-gold mb-5">
                {card.pillar}
              </p>

              {/* Description */}
              <p className="font-urbanist font-[300] text-[15px] text-w35 leading-[1.85]">
                {card.description}
              </p>

              {/* Tagline */}
              <p
                className="font-urbanist font-[300] text-[13px] text-w35 italic mt-6 pt-5 border-t border-b15 translate-y-1 group-hover:translate-y-0 transition-transform duration-500"
              >
                {card.tagline}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

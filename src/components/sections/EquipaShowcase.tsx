import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

type Member = {
  id: string;
  name: string;
  initials: string;
  role: string;
  img?: string;
  chips: string[];
  bio: string[];
  quote: string;
  ratio: "founder" | "team";
};

const FOUNDERS: Member[] = [
  {
    id: "frederico",
    name: "Frederico Prado",
    initials: "FP",
    role: "Founder & CEO",
    img: "/images/frederico.png",
    ratio: "founder",
    chips: ["Oracle", "WeDo (SONAE)", "Cipher (Prosegur)", "MBA FGV", "Tampa", "Lisboa, 2018"],
    bio: [
      "Tem 29 anos de experiência como executivo em empresas multinacionais de tecnologia: Oracle, WeDo (SONAE), Cipher (Prosegur), Choice Technologies e Link Consulting. Liderou projetos estratégicos e relações de alto nível entre América Latina, Europa e África, com décadas de vendas consultivas e desenvolvimento de negócios em ambiente corporativo global.",
      "Formado em Comunicação pela University of Tampa, onde viveu 4 anos e iniciou a sua trajetória internacional. MBA em Empreendedorismo e Desenvolvimento de Novos Negócios pela Fundação Getulio Vargas.",
      "Veio para Portugal em 2018 com a família e passou pela mesma jornada que hoje coordena para os seus clientes: documentação, imóvel, escola, fiscalidade, adaptação e os 90 dias depois de chegar. Foi essa experiência vivida de dentro, somada a décadas de vendas consultivas, que motivou a criação da MOOVIA.",
      "Na MOOVIA, coordena pessoalmente cada mandato. É ele quem conduz a Conversa Gratuita, o Assessment e a relação com cada família ao longo de toda a jornada. A venda é sua. A coordenação é sua. A responsabilidade é sua.",
    ],
    quote: "Passei pelo que todo cliente nosso passa — e aprendi o que nunca mais vou deixar ninguém errar.",
  },
  {
    id: "pablo",
    name: "Pablo Alejandro Saco Paim",
    initials: "PP",
    role: "Co-Founder & CFO",
    img: "/images/pablo.png",
    ratio: "founder",
    chips: ["IST", "Engenharia Mecânica", "CFD", "Hydrofoils", "Europa desde os 17 anos"],
    bio: [
      "Com trajetória internacional iniciada aos 17 anos, Pablo deixou o Brasil em busca de oportunidades académicas e profissionais na Europa. Mestrando em Engenharia Mecânica no Instituto Superior Técnico, combina rigor analítico com pensamento estratégico e visão tecnológica.",
      "A sua trajetória inclui experiência em estudos de fluido dinâmica computacional voltada para otimização da eficiência energética de veículos, design de hydrofoils de alta performance, indústria naval, aerodinâmica, materiais compósitos e engenharia mecânica aplicada. Esteve envolvido em projetos de embarcações de alta performance na Europa e nos EUA.",
      "Na MOOVIA, lidera as áreas financeira, tecnológica e de desenvolvimento de processos, garantindo que cada mandato seja estruturado com eficiência, previsibilidade e visão de longo prazo. A precisão da engenharia aplicada à coordenação de transições de vida.",
    ],
    quote: "Rigor analítico e visão internacional aplicados a cada decisão que a MOOVIA toma.",
  },
];

const TEAM: Member[] = [
  {
    id: "joao",
    name: "João Gabriel Prado",
    initials: "JG",
    role: "Co-Founder",
    img: "/images/joao.png",
    ratio: "team",
    chips: ["Abreu Advogados", "ULisboa", "CIDP", "Corporate Finance", "M&A", "ELSA"],
    bio: [
      "Licenciado pela Faculdade de Direito da Universidade de Lisboa, com duas pós-graduações pelo Centro de Investigação de Direito Privado (CIDP) da ULisboa, nas áreas de Corporate Finance, M&A e Corporate Litigation.",
      "Atua na Abreu Advogados, uma das mais prestigiadas sociedades de advogados de Portugal, com foco em Direito Empresarial, operações societárias e assessoria jurídica a clientes nacionais e internacionais.",
      "Ao longo do percurso académico e profissional, exerceu funções de liderança em organizações universitárias e institucionais: Vice-Presidente da ELSA U.Lisboa, Diretor Pedagógico do NELB e membro do Conselho Lusófono da Conexão Lusófona.",
      "Com ligação profunda entre Brasil e Portugal, alia formação jurídica rigorosa, proximidade cultural e visão estratégica à experiência institucional portuguesa.",
    ],
    quote: "O conhecimento do sistema jurídico português de dentro é o que diferencia uma boa decisão de uma decisão cara.",
  },
  {
    id: "moyses",
    name: "Moyses Filipe",
    initials: "MF",
    role: "Conselheiro Estratégico",
    img: "/images/moyses.png",
    ratio: "team",
    chips: ["Deloitte", "Lucent", "Oracle", "IBM", "SAP", "Guidewire", "Salesforce", "FIA", "FGV"],
    bio: [
      "Mais de 25 anos de experiência internacional em tecnologia, transformação digital e desenvolvimento de negócios, sendo mais de duas décadas dedicadas ao software corporativo. Passou por Deloitte, Lucent Technologies, Oracle, IBM, SAP, Guidewire e Salesforce, apoiando grandes organizações na criação de valor tangível e modernização operacional.",
      "Especialização consolidada na indústria seguradora. Formação em Administração Estratégica pela FIA e em Seguros pela FGV. Reconhecido pela capacidade de desenvolver equipas de alta performance, fortalecer relações C-Level e impulsionar crescimento sustentável em ambientes corporativos globais.",
      "Na MOOVIA, atua no posicionamento institucional da empresa, no desenvolvimento da operação e na garantia dos padrões internacionais de confiança, sofisticação e excelência que a marca boutique exige.",
    ],
    quote: "Construir uma operação de alto padrão não é sobre tamanho. É sobre critério, disciplina e visão de longo prazo.",
  },
  {
    id: "eduardo",
    name: "Eduardo Trindade",
    initials: "ET",
    role: "Strategic Relocation Advisor",
    img: "/images/eduardo.png",
    ratio: "team",
    chips: ["ADLS", "VP Global Sales", "MBA USP", "Live University", "SC Investor", "PT · EN · ES"],
    bio: [
      "Mais de 25 anos de experiência em desenvolvimento de negócios, educação executiva e relações comerciais internacionais, com atuação no Brasil, América Latina e mercados globais. Integrou a Advantages Digital Learning Solutions (ADLS), empresa norte-americana de soluções educacionais digitais, onde ocupou a posição de Vice-President of Global Sales, liderando negociações internacionais de alto impacto com grandes grupos editoriais globais.",
      "Professor em programas de MBA da Live University. Palestrante internacional. Formado em Jornalismo com MBA em Gestão Estratégica de Negócios pela USP. Certificação internacional em coaching profissional. Fluente em português, inglês e espanhol.",
      "Atua paralelamente como consultor e investidor imobiliário em Itapema e Porto Belo, Santa Catarina, trazendo para a MOOVIA uma visão sobre investimento, patrimônio e movimentação internacional de capital e estilo de vida.",
    ],
    quote: "A decisão de mudar de país é, antes de tudo, uma decisão de vida. Precisa de acompanhamento humano, não de processos automatizados.",
  },
  {
    id: "dany",
    name: "Dany Zukerman",
    initials: "DZ",
    role: "Education & Family Transition Advisor",
    img: "/images/dany.png",
    ratio: "team",
    chips: ["Direito UCAM", "18 anos CLO", "CID Records", "Famílias", "Estudantes"],
    bio: [
      "Formado em Direito pela Universidade Candido Mendes, no Rio de Janeiro. Construiu trajetória executiva de 18 anos como Chief Legal Officer da CID Records, desenvolvendo experiência em gestão, relações institucionais, estruturação operacional e acompanhamento estratégico de projetos e pessoas.",
      "Com forte capacidade relacional e visão humana sobre os desafios da mobilidade internacional, atua como ponte entre o Brasil e Portugal, apoiando estudantes e famílias nas etapas de preparação, organização e adaptação à nova realidade académica e cultural portuguesa.",
      "Na MOOVIA, lidera o suporte a famílias e estudantes brasileiros em transição, com foco em continuidade educacional, integração familiar e construção de redes de apoio em Portugal.",
    ],
    quote: "Cada família que acompanhamos carrega uma história única. O nosso trabalho é garantir que ela continue a ser escrita em Portugal sem rupturas desnecessárias.",
  },
  {
    id: "laura",
    name: "Laura Costa",
    initials: "LC",
    role: "Mobilidade Internacional",
    img: "/images/laura.png",
    ratio: "team",
    chips: ["Mestrado ULisboa", "Erasmus Itália", "Erasmus Rep. Tcheca", "TJSC", "Imigração", "Documentação"],
    bio: [
      "Mestre em Direito Penal e Ciências Criminais pela Faculdade de Direito da Universidade de Lisboa. Formação internacional pelo programa Erasmus na Università Federico II di Napoli, em Itália, e na Univerzita Palackého v Olomouci, na República Tcheca.",
      "Consolidou experiência na elaboração e revisão de documentos jurídicos, pareceres e comunicações institucionais de elevado padrão técnico. Atuou junto ao Tribunal de Justiça de Santa Catarina (TJSC) com experiência em organização documental e produção de textos formais no âmbito jurídico.",
      "Radicada em Lisboa, desenvolveu atuação em imigração e mobilidade internacional, em colaboração com advogados portugueses, com foco em processos migratórios, nacionalidade portuguesa e regularização documental de clientes brasileiros e estrangeiros.",
    ],
    quote: "Documentação não é burocracia. É a base que permite que a vida em Portugal comece com segurança e com direitos protegidos.",
  },
  {
    id: "sara",
    name: "Sara Russo",
    initials: "SR",
    role: "Real Estate Specialist",
    img: "/images/sara.png",
    ratio: "team",
    chips: ["RE/MAX Collection", "Luxo", "10+ anos", "Premiada RE/MAX Portugal", "Investimento", "Relocation"],
    bio: [
      "Mais de 10 anos de experiência no mercado imobiliário português. Trajetória reconhecida e premiada pela RE/MAX Portugal. Especialista em RE/MAX Collection, o segmento de luxo e investimento imobiliário da RE/MAX em Portugal.",
      "Especializada no atendimento a clientes nacionais e internacionais em aquisição imobiliária, investimento, relocation residencial e oportunidades de patrimônio em Portugal. Destaca-se pelo acompanhamento próximo ao longo de todo o processo imobiliário, visão estratégica na identificação de oportunidades e capacidade de antecipar desafios antes que se tornem problemas.",
      "Mantém comunicação constante e transparente para assegurar processos eficientes, seguros e alinhados aos objetivos de cada cliente. Na MOOVIA, lidera a frente de real estate e investimento imobiliário. Atua com housing a partir de €1.500/mês.",
    ],
    quote: "Encontrar o lugar certo não é só sobre metros quadrados ou preço. É sobre entender onde cada família vai ser feliz.",
  },
];

function MemberCard({ m, onOpen, index }: { m: Member; onOpen: () => void; index: number }) {
  const aspect = m.ratio === "founder" ? "aspect-[4/5]" : "aspect-[3/4]";
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative block w-full overflow-hidden bg-black-3 text-left ${aspect}`}
    >
      {/* Photo */}
      {m.img ? (
        <img
          src={m.img}
          alt={m.name}
          className="absolute inset-0 h-full w-full object-cover transition-all duration-700 [filter:grayscale(0.4)_contrast(1.1)] group-hover:scale-105 group-hover:[filter:grayscale(0)_contrast(1.05)]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : null}

      {/* Initials placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-sora font-[100] text-[clamp(80px,12vw,180px)] leading-none"
          style={{ color: "rgba(173,137,87,0.15)" }}
        >
          {m.initials}
        </span>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black group-hover:via-black/70" />

      {/* Top gold border grow-from-left */}
      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />

      {/* Scan line on hover */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100">
        <div
          className="absolute left-0 right-0 h-[2px] bg-gold"
          style={{
            boxShadow: "0 0 20px rgba(173,137,87,0.9)",
            animation: "moovia-scan 0.5s ease-out",
          }}
        />
      </div>

      {/* Arrow */}
      <div className="absolute right-4 top-4 grid h-9 w-9 place-items-center border border-gold/60 bg-black/40 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 translate-x-1">
        <ArrowUpRight className="h-4 w-4 text-gold" strokeWidth={1.5} />
      </div>

      {/* Name + role */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-sora text-[20px] font-[300] text-white leading-tight">{m.name}</h3>
        <p className="mt-1 font-urbanist text-[11px] font-[400] uppercase tracking-[0.22em] text-gold">{m.role}</p>

        {/* Chips stagger on hover */}
        <div className="mt-4 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {m.chips.slice(0, 4).map((c, i) => (
            <span
              key={c}
              className="border border-gold/40 bg-black/50 px-2 py-1 font-urbanist text-[10px] uppercase tracking-[0.18em] text-w70 transition-transform duration-500"
              style={{ transform: "translateY(8px)", transitionDelay: `${i * 60}ms` }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .group:hover [style*="translateY(8px)"] { transform: translateY(0) !important; }
        @keyframes moovia-scan { from { top: 0 } to { top: 100% } }
      `}</style>
    </motion.button>
  );
}

function Lightbox({ m, onClose }: { m: Member; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
      style={{
        background: "rgba(4,6,16,0.92)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(173,137,87,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(173,137,87,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.92, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative grid w-full max-w-[960px] max-h-[88vh] grid-cols-1 overflow-hidden bg-black md:grid-cols-[380px_1fr]"
        style={{
          borderImageSource:
            "linear-gradient(135deg, rgba(173,137,87,1) 0%, rgba(173,137,87,0) 50%, rgba(173,137,87,0.3) 100%)",
          borderImageSlice: 1,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        {/* Scan line on open */}
        <div
          className="pointer-events-none absolute left-0 right-0 z-30 h-[2px] bg-gold"
          style={{
            boxShadow: "0 0 20px rgba(173,137,87,0.9)",
            animation: "moovia-scan-open 0.7s ease-out forwards",
          }}
        />

        {/* Left: photo */}
        <div className="relative h-[280px] md:h-auto overflow-hidden bg-black-3">
          {m.img && (
            <img
              src={m.img}
              alt={m.name}
              className="h-full w-full object-cover [filter:grayscale(0.3)]"
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-sora font-[100] text-[120px] leading-none" style={{ color: "rgba(173,137,87,0.18)" }}>
              {m.initials}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Corner decorations */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute left-4 top-4 h-10 w-10 border-l border-t border-gold"
          />
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-gold"
          />

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="absolute inset-x-0 bottom-0 p-5"
          >
            <p className="font-sora text-[20px] font-[300] text-white leading-tight">{m.name}</p>
            <p className="mt-1 font-urbanist text-[11px] font-[400] uppercase tracking-[0.22em] text-gold">{m.role}</p>
          </motion.div>
        </div>

        {/* Right: content */}
        <div
          className="relative max-h-[88vh] overflow-y-auto p-8 md:p-10"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(173,137,87,0.4) transparent" }}
        >
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-5 top-5 grid h-9 w-9 place-items-center border border-b18 bg-b15 text-w70 transition-colors hover:bg-gold hover:text-black"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>

          <div className="flex flex-wrap gap-2 pr-12">
            {m.chips.map((c, i) => (
              <motion.span
                key={c}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                className="border border-gold/30 px-2.5 py-1 font-urbanist text-[10px] uppercase tracking-[0.2em] text-w70"
              >
                {c}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="my-7 h-px origin-left bg-b18"
          />

          <div className="space-y-4">
            {m.bio.map((p, i) => (
              <p key={i} className="font-urbanist text-[15px] font-[300] leading-[1.9] text-w70">
                {p}
              </p>
            ))}
          </div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 border-l-2 border-gold px-6 py-5"
            style={{ background: "rgba(173,137,87,0.04)" }}
          >
            <p className="font-sora text-[15px] font-[300] italic text-gold-l leading-relaxed">"{m.quote}"</p>
          </motion.div>
        </div>

        <style>{`
          @keyframes moovia-scan-open { from { top: 0 } to { top: 100% } }
          .max-h-\\[88vh\\]::-webkit-scrollbar { width: 6px; }
          .max-h-\\[88vh\\]::-webkit-scrollbar-thumb { background: rgba(173,137,87,0.4); }
        `}</style>
      </motion.div>
    </motion.div>
  );
}

export function EquipaShowcase() {
  const [active, setActive] = useState<Member | null>(null);

  return (
    <section className="bg-black px-6 pb-24 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Founders */}
        <p className="mb-6 font-urbanist text-[11px] uppercase tracking-[0.32em] text-gold">Fundadores</p>
        <div className="grid grid-cols-1 gap-[2px] bg-b18 md:grid-cols-2">
          {FOUNDERS.map((m, i) => (
            <div key={m.id} className="bg-black">
              <MemberCard m={m} onOpen={() => setActive(m)} index={i} />
            </div>
          ))}
        </div>

        {/* Team */}
        <p className="mb-6 mt-20 font-urbanist text-[11px] uppercase tracking-[0.32em] text-gold">A equipa</p>
        <div className="grid grid-cols-2 gap-[2px] bg-b18 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <div key={m.id} className="bg-black">
              <MemberCard m={m} onOpen={() => setActive(m)} index={i} />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-20 max-w-[480px] text-center font-urbanist text-[16px] font-[300] text-w35">
          Atendemos famílias internacionais em todas as suas formas.
        </p>
      </div>

      <AnimatePresence>{active && <Lightbox m={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

type Service = { name: string; desc: string };
type Group = { label?: string; items: Service[] };
type Pillar = {
  id: string;
  num: string;
  verb: string;
  moment: string;
  tagline: string;
  result: string;
  groups: Group[];
};

const PILLARS: Pillar[] = [
  {
    id: "planejamos",
    num: "01",
    verb: "Planejamos",
    moment: "Antes da mudança",
    tagline: "Tomar as decisões certas antes de mudar.",
    result: "Plano Estratégico de Transição Internacional",
    groups: [
      {
        items: [
          { name: "Strategic Relocation Assessment", desc: "Sessão de 90 minutos com o founder. Diagnóstico completo do perfil familiar, financeiro e migratório. Entregável físico com mapa de decisão, estratégias e cronograma. É o primeiro trabalho real da MOOVIA." },
          { name: "Diagnóstico Habitacional", desc: "Análise das opções de habitação alinhadas ao perfil, orçamento e zona pretendida. Define estratégia de arrendamento ou compra, bairros prioritários e próximos passos concretos." },
          { name: "Diagnóstico Educacional", desc: "Levantamento das opções de escolas — públicas, privadas e internacionais — em função da idade, língua, currículo e zona de residência pretendida. Define timeline de matrícula." },
          { name: "Diagnóstico Documental", desc: "Mapeamento de todos os documentos necessários para a transição: passaportes, certidões, apostilas, contratos, diplomas e equivalências. Cronograma de obtenção antes da partida." },
          { name: "Diagnóstico Fiscal Inicial", desc: "Primeira análise do perfil fiscal do cliente: enquadramento mais vantajoso, impacto do IFICI, dupla tributação e estrutura de rendimentos recomendada para a chegada." },
          { name: "Mapa de Decisão", desc: "Documento visual e estruturado com todas as decisões que precisam ser tomadas, em que ordem, com que prazo e com que impacto. O guia central da transição." },
          { name: "Plano de Próximos Passos", desc: "Cronograma detalhado com todas as ações necessárias antes e depois da mudança, distribuídas por responsável, prazo e dependência." },
          { name: "Estratégia Migratória", desc: "Definição do melhor visto ou via de entrada em Portugal (D3, D2, D7, reunificação familiar) com base no perfil, rendimentos e timing. Inclui análise de riscos e alternativas." },
          { name: "Planeamento Fiscal", desc: "Estratégia fiscal de longo prazo: estrutura de rendimentos, enquadramento no IFICI, gestão de dupla tributação, recomendações para minimizar carga fiscal legal em Portugal." },
          { name: "City Experience", desc: "Visita estratégica guiada a Lisboa ou Porto para reconhecimento de bairros, escolas, supermercados, transportes e qualidade de vida. Orientada à decisão, não ao turismo." },
          { name: "Exploração de Bairros e Estilo de Vida", desc: "Análise comparativa de bairros por perfil familiar: segurança, transportes, escolas próximas, comércio, comunidade brasileira e custo de vida real por zona." },
          { name: "Planeamento Habitacional", desc: "Definição da estratégia de habitação: arrendar ou comprar, zona prioritária, tipologia ideal, budget compatível com o perfil e timing de busca." },
          { name: "Avaliação de Crédito", desc: "Análise das condições de acesso ao crédito imobiliário em Portugal para não residentes e residentes recentes. Simula capacidade de financiamento e requisitos dos bancos." },
        ],
      },
    ],
  },
  {
    id: "instalamos",
    num: "02",
    verb: "Instalamos",
    moment: "Na chegada",
    tagline: "Tudo que precisa para chegar e ficar legalmente instalado.",
    result: "Família legalmente instalada e operando",
    groups: [
      {
        label: "Habitação",
        items: [
          { name: "Busca Ativa de Habitação", desc: "Identificação e seleção de imóveis alinhados ao perfil, orçamento e zona definidos no diagnóstico. A MOOVIA faz o filtro — o cliente visita apenas o que realmente importa." },
          { name: "Airbnb Hunting & Negotiation", desc: "Para chegadas urgentes ou períodos de transição: identificação de acomodações temporárias de qualidade com negociação de valor e condições de permanência estendida." },
          { name: "Visitas Presenciais", desc: "Acompanhamento nas visitas aos imóveis selecionados com análise crítica de estrutura, localização, vizinhança e adequação ao perfil da família." },
          { name: "Negociação Contratual", desc: "Apoio na negociação dos termos do contrato de arrendamento: valor, duração, cláusulas, garantias e condições de saída. Revisão antes da assinatura." },
        ],
      },
      {
        label: "Documentação",
        items: [
          { name: "NIF (Número de Identificação Fiscal)", desc: "Obtenção do número fiscal português — obrigatório para qualquer ato jurídico ou financeiro em Portugal. Inclui representação fiscal quando necessário." },
          { name: "NISS (Segurança Social)", desc: "Registo na Segurança Social portuguesa para acesso a benefícios, contribuições e sistema de saúde complementar." },
          { name: "Número de Utente do SNS", desc: "Inscrição no Serviço Nacional de Saúde para acesso a cuidados de saúde públicos em Portugal." },
          { name: "PB4 (Cobertura de Saúde Internacional)", desc: "Gestão do formulário PB4 entre Brasil e Portugal para cobertura de saúde durante o período de transição para cidadãos com direito." },
          { name: "Conta Bancária", desc: "Abertura de conta bancária em Portugal — processo específico para novos residentes com requisitos próprios de documentação e histórico financeiro." },
          { name: "Carta de Condução", desc: "Processo de troca ou validação da carta de condução brasileira em Portugal, incluindo prazos e documentação necessária." },
          { name: "Passe Navegante", desc: "Subscrição ao passe de transportes públicos de Lisboa ou Porto, com orientação sobre os tipos disponíveis e vantagens fiscais." },
          { name: "Abertura de Atividade (Recibos Verdes)", desc: "Registro como trabalhador independente em Portugal para emissão de recibos verdes. Inclui enquadramento no regime mais vantajoso." },
          { name: "Estatuto de Igualdade", desc: "Processo para obtenção do Estatuto de Igualdade de Direitos e Deveres para cidadãos brasileiros em Portugal — amplia direitos de residência e acesso a serviços públicos." },
        ],
      },
      {
        label: "Concierge & Instalação",
        items: [
          { name: "Airport Pick-up", desc: "Recepção no aeroporto de Lisboa ou Porto com transporte para o destino, orientação inicial sobre a cidade e primeiros apoios logísticos." },
          { name: "Apoio nas Compras da Primeira Semana", desc: "Acompanhamento nas compras essenciais da primeira semana: supermercado, farmácia, equipamentos básicos do apartamento e orientação sobre onde comprar o quê." },
          { name: "Ativação de Água, Gás, Luz e Internet", desc: "Gestão completa das ativações de utilities no novo apartamento: contratos, agendamentos de instalação e primeiras faturas." },
          { name: "Traduções Certificadas e Juramentadas", desc: "Tradução de documentos pessoais, académicos e profissionais para português europeu, com certificação reconhecida por entidades portuguesas." },
          { name: "Equivalências de Diplomas", desc: "Processo de validação e equivalência de títulos académicos obtidos no Brasil junto às entidades competentes em Portugal." },
        ],
      },
    ],
  },
  {
    id: "integramos",
    num: "03",
    verb: "Integramos",
    moment: "Nos primeiros meses",
    tagline: "Transformando uma mudança numa transição de vida.",
    result: "Uma mudança que vira transição de vida",
    groups: [
      {
        label: "Educação Nacional",
        items: [
          { name: "School Matching Nacional", desc: "Análise e seleção de escolas públicas e privadas portuguesas com base no perfil da criança, zona de residência, ano letivo e necessidades específicas." },
          { name: "Busca e Gestão de Matrículas", desc: "Gestão completa do processo de candidatura e matrícula: documentação exigida, prazos, contactos com as escolas e acompanhamento até confirmação da vaga." },
        ],
      },
      {
        label: "Educação Internacional",
        items: [
          { name: "School Matching Internacional", desc: "Seleção de escolas com currículo internacional (IB, British, American) em Lisboa e Porto para famílias que pretendem continuidade curricular ou preparação para universidades internacionais." },
          { name: "Matrícula em Escola Internacional", desc: "Gestão do processo de candidatura a escolas internacionais: candidatura, entrevistas, documentação e integração com o calendário da família." },
        ],
      },
      {
        label: "Adaptação Familiar",
        items: [
          { name: "Programa de Adaptação 30 dias", desc: "Acompanhamento estruturado nas primeiras quatro semanas: check-ins semanais, resolução de imprevistos, orientação sobre serviços locais e apoio emocional à família." },
          { name: "Programa de Adaptação 60 dias", desc: "Versão estendida com foco na rotina da família: escola, trabalho, saúde, lazer e integração social. Identificação e resolução proativa de desafios de adaptação." },
          { name: "Programa de Adaptação 90 dias", desc: "Acompanhamento completo dos três primeiros meses — o período mais crítico de qualquer transição internacional. Relatório final de integração com recomendações para os próximos 6 meses." },
        ],
      },
      {
        label: "Pet Relocation",
        items: [
          { name: "Transporte de Animais (Lufthansa / TAP)", desc: "Coordenação completa do transporte de animais de estimação como carga ou bagagem acompanhada pelas companhias parceiras, com orientação sobre caixas, peso e rotas disponíveis." },
          { name: "Documentação Veterinária (CVI e Passaporte Pet)", desc: "Obtenção do Certificado Veterinário Internacional (CVI) e passaporte europeu para o animal: vacinas, microchip, atestados e validação VIGIAGRO." },
          { name: "Inspeção VIGIAGRO no Aeroporto", desc: "Coordenação e orientação para a inspeção sanitária obrigatória à chegada em Portugal (VIGIAGRO), incluindo documentação exigida e pontos de controlo no aeroporto." },
          { name: "Recepção e Transporte do Animal", desc: "Recepção do animal no aeroporto e transporte até ao destino final, com cuidados de bem-estar no trajeto." },
        ],
      },
      {
        label: "Lisboa Experience",
        items: [
          { name: "City Tour Estratégico (4h ou dia inteiro)", desc: "Tour pela cidade orientado à vida real, não ao turismo: bairros residenciais, mercados, escolas, transportes, restaurantes e espaços do quotidiano. Para quem quer conhecer Lisboa como morador." },
          { name: "Exploração de Bairros e Estilo de Vida", desc: "Visita comparativa a diferentes zonas de Lisboa ou Porto com análise de custo de vida, comunidade, acessos e qualidade do ambiente para famílias e casais." },
          { name: "Integração Cultural e Social", desc: "Orientação sobre costumes, cultura, gastronomia, eventos e formas de construir rede social em Portugal. Inclui sugestões de comunidades, grupos e iniciativas de integração." },
        ],
      },
    ],
  },
  {
    id: "estruturamos",
    num: "04",
    verb: "Estruturamos",
    moment: "Para a vida toda",
    tagline: "Para quem quer estruturar a vida financeira em Portugal.",
    result: "Vida financeira estruturada e em conformidade",
    groups: [
      {
        label: "Fiscalidade & Compliance",
        items: [
          { name: "Enquadramento Fiscal", desc: "Análise do regime fiscal mais vantajoso para o perfil do cliente em Portugal: trabalhador por conta de outrem, independente, empresário ou investidor. Inclui recomendação de estrutura." },
          { name: "Simulação de Rendimentos Líquidos", desc: "Projeção dos rendimentos líquidos em Portugal após impostos, contribuições para a Segurança Social e outros encargos. Permite comparar cenários antes da decisão." },
          { name: "Abertura de Atividade (Recibos Verdes)", desc: "Registo como trabalhador independente com enquadramento no regime simplificado ou contabilidade organizada, consoante o volume de rendimentos previsto." },
          { name: "Encerramento de Atividade", desc: "Processo de cessação de atividade em Portugal, com liquidação de obrigações fiscais, declarações finais e orientação sobre impacto na Segurança Social." },
          { name: "Primeira Declaração de IRS em Portugal", desc: "Apoio na primeira entrega da declaração anual de IRS em Portugal: rendimentos, deduções, NHR/IFICI e orientação sobre o processo junto às Finanças." },
          { name: "Declaração Anual de IRS", desc: "Preparação e entrega da declaração anual de IRS para residentes em Portugal, incluindo otimização de deduções e acompanhamento de reembolsos." },
          { name: "Regularização Fiscal", desc: "Processo de regularização de situações fiscais em dívida ou irregulares junto à Autoridade Tributária, com plano de pagamento e resolução estruturada." },
          { name: "Representação Fiscal para Não Residentes", desc: "Nomeação de representante fiscal em Portugal para não residentes com obrigações fiscais portuguesas — obrigatório em determinadas situações legais." },
          { name: "Transferência de Residência Fiscal", desc: "Processo de alteração da residência fiscal do Brasil para Portugal, com análise do impacto no Brasil (saída definitiva ou temporária) e entrada no sistema português." },
          { name: "Planeamento Fiscal Internacional", desc: "Estratégia de longo prazo para otimização fiscal entre Brasil e Portugal: uso de tratados de dupla tributação, estruturação de rendimentos e proteção patrimonial internacional." },
          { name: "Análise de Dupla Tributação", desc: "Estudo do Tratado de Dupla Tributação Brasil-Portugal aplicado ao caso específico do cliente, com recomendações para evitar tributação dupla sobre rendimentos." },
          { name: "Declarações de IVA", desc: "Gestão das obrigações de IVA para trabalhadores independentes e empresas em Portugal, incluindo regimes de isenção, periodicidade e submissão às Finanças." },
          { name: "Segurança Social", desc: "Orientação e gestão das contribuições para a Segurança Social em Portugal: regime de trabalhador independente, isenções disponíveis e impacto nos direitos futuros." },
        ],
      },
      {
        label: "Empresas",
        items: [
          { name: "Constituição de Empresa", desc: "Criação de sociedade em Portugal (ENI, Lda. ou SA): escolha da forma jurídica, capital social, sede, pacto social e registo na Conservatória e nas Finanças." },
          { name: "NIPC (Número de Identificação de Pessoa Coletiva)", desc: "Obtenção do número de identificação fiscal da empresa portuguesa, necessário para todas as obrigações comerciais, fiscais e bancárias." },
          { name: "Contabilidade Mensal ENI", desc: "Gestão contabilística mensal para Empresários em Nome Individual: lançamentos, obrigações fiscais, declarações periódicas e relatórios de situação financeira." },
          { name: "Contabilidade Mensal Lda.", desc: "Contabilidade organizada para Sociedades por Quotas: lançamentos, balancetes, declarações fiscais periódicas e cumprimento das obrigações legais." },
          { name: "Processamento Salarial", desc: "Gestão mensal de salários, descontos para Segurança Social, IRS por retenção na fonte e comunicação com a AT e SS para empresas com trabalhadores." },
          { name: "Estruturação Societária", desc: "Definição da melhor estrutura legal e fiscal para a empresa: sócios, quotas, distribuição de lucros, holding ou estrutura operacional simples." },
          { name: "Consultoria Fiscal Empresarial", desc: "Apoio estratégico contínuo em questões fiscais da empresa: otimização de carga tributária, reorganização societária e compliance permanente." },
        ],
      },
      {
        label: "Investidores & Patrimônio",
        items: [
          { name: "Estruturação Patrimonial Internacional", desc: "Definição da estrutura ideal para proteger, organizar e fazer crescer o patrimônio entre Brasil e Portugal: contas, investimentos, imóveis e ativos em diferentes jurisdições." },
          { name: "Planeamento de Investimentos em Portugal", desc: "Orientação sobre as principais opções de investimento em Portugal: imobiliário, fundos, depósitos, negócios e condições fiscais associadas a cada classe de ativo." },
          { name: "Apoio à Instalação Empresarial", desc: "Suporte completo para empresários e investidores que pretendem estabelecer operações em Portugal: licenças, localização, recrutamento inicial e conexão com o ecossistema local." },
        ],
      },
    ],
  },
];

function ServiceTag({ s, i, visible }: { s: Service; i: number; visible: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="group/tag transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${i * 40}ms`,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative overflow-hidden border border-b18 px-3.5 py-2 font-urbanist text-[11px] uppercase tracking-[0.14em] text-w70 transition-colors hover:border-gold hover:text-white"
      >
        <span className="absolute inset-0 -translate-y-full bg-gold/15 transition-transform duration-500 group-hover/tag:translate-y-0" />
        <span className="relative">{s.name}</span>
      </button>
      {open && (
        <p className="mt-2 max-w-md font-urbanist text-[13px] font-[300] leading-[1.7] text-w35">
          {s.desc}
        </p>
      )}
    </div>
  );
}

function PillarSection({ p, idx, onInView }: { p: Pillar; idx: number; onInView: (id: string) => void }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const alt = idx % 2 === 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (e.intersectionRatio > 0.3) onInView(p.id);
          }
        }
      },
      { threshold: [0, 0.3, 0.6] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [p.id, onInView]);

  return (
    <section
      ref={ref}
      id={p.id}
      className={`relative overflow-hidden px-6 py-24 md:py-32 lg:px-20 ${alt ? "bg-black-2" : "bg-black"}`}
    >
      {/* Ghost number */}
      <div
        aria-hidden
        className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none font-sora font-[100] leading-none text-white md:block ${
          alt ? "left-[-2vw]" : "right-[-2vw]"
        }`}
        style={{ fontSize: "clamp(200px, 28vw, 360px)", opacity: 0.04 }}
      >
        {p.num}
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <p className="mb-4 flex items-center gap-3 font-urbanist text-[11px] uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-6 bg-gold" /> Momento
          </p>
          <p className="font-urbanist text-[13px] font-[300] uppercase tracking-[0.18em] text-w35">
            Pilar {p.num} · {p.moment}
          </p>
          <h2
            className="mt-4 font-sora font-[100] leading-[0.95] text-gold-l"
            style={{ fontSize: "clamp(52px, 6vw, 88px)" }}
          >
            {p.verb}
          </h2>
          <p className="mt-8 border-l-2 border-b30 pl-5 font-urbanist text-[18px] font-[300] italic leading-[1.6] text-w70">
            "{p.tagline}"
          </p>
          <div
            className="mt-10 border-l-2 border-gold px-6 py-5"
            style={{ background: "rgba(173,137,87,0.04)" }}
          >
            <p className="font-urbanist text-[10px] uppercase tracking-[0.28em] text-gold">Resultado</p>
            <p className="mt-2 font-sora text-[18px] font-[300] text-white">{p.result}</p>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative space-y-10"
        >
          {p.groups.map((g, gi) => {
            const start = p.groups.slice(0, gi).reduce((a, x) => a + x.items.length, 0);
            return (
              <div key={gi}>
                {g.label && (
                  <p className="mb-4 font-urbanist text-[10px] uppercase tracking-[0.28em] text-b30">{g.label}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s, i) => (
                    <ServiceTag key={s.name} s={s} i={start + i} visible={visible} />
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SideNav({ active }: { active: string }) {
  return (
    <nav className="fixed right-8 top-1/2 z-[80] hidden -translate-y-1/2 flex-col gap-4 md:flex">
      {PILLARS.map((p) => {
        const isActive = active === p.id;
        return (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="group relative grid h-3 w-3 place-items-center"
            aria-label={p.verb}
          >
            <span
              className={`h-2 w-2 rounded-full border border-gold transition-all duration-300 ${
                isActive ? "scale-[1.4] bg-gold" : "bg-transparent group-hover:bg-gold/40"
              }`}
            />
            <span className="pointer-events-none absolute right-6 whitespace-nowrap border border-b18 bg-black px-2 py-1 font-urbanist text-[10px] uppercase tracking-[0.18em] text-w70 opacity-0 transition-opacity group-hover:opacity-100">
              {p.verb}
            </span>
          </a>
        );
      })}
    </nav>
  );
}

function JourneyBar({ active }: { active: string }) {
  return (
    <div className="sticky top-[72px] z-[60] border-y border-b18 bg-black/85 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] overflow-x-auto">
        <div className="grid min-w-[640px] grid-cols-4">
          {PILLARS.map((p, i) => {
            const isActive = active === p.id;
            return (
              <a
                key={p.id}
                href={`#${p.id}`}
                className={`block border-r border-b18 px-5 py-5 transition-colors hover:bg-white/[0.03] ${
                  i === PILLARS.length - 1 ? "border-r-0" : ""
                } ${isActive ? "border-b-2 border-b-gold" : "border-b-2 border-b-transparent"}`}
              >
                <p className="font-urbanist text-[10px] uppercase tracking-[0.22em] text-gold">
                  {p.num} · {p.verb}
                </p>
                <p className="mt-1 font-urbanist text-[12px] font-[300] text-w70">{p.moment}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ServicosShowcase() {
  const [active, setActive] = useState(PILLARS[0].id);

  return (
    <>
      <SideNav active={active} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-6 pb-16 pt-[140px] md:pt-[160px] lg:px-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 10% 30%, rgba(173,137,87,0.10), transparent 65%), radial-gradient(50% 60% at 80% 20%, rgba(15,30,60,0.6), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px]">
          <p className="mb-6 flex items-center gap-3 font-urbanist text-[11px] uppercase tracking-[0.28em] text-gold">
            <span className="h-px w-6 bg-gold" /> Os pilares
          </p>
          <h1
            className="font-sora font-[100] leading-[1.02] text-white"
            style={{ fontSize: "clamp(40px, 6.5vw, 84px)" }}
          >
            Não resolvemos
            <br />
            tarefas isoladas.
            <br />
            <span className="font-[200] italic text-gold-l">Coordenamos</span>
            <br />
            <span className="font-[200] italic text-gold-l">a jornada inteira.</span>
          </h1>
          <p className="mt-10 max-w-2xl font-urbanist text-[17px] font-[300] leading-[1.8] text-w35">
            Do planejamento estratégico antes da mudança à estruturação da vida financeira em Portugal. Um único ponto de responsabilidade para tudo.
          </p>
        </div>
      </section>

      <JourneyBar active={active} />

      {PILLARS.map((p, i) => (
        <PillarSection key={p.id} p={p} idx={i} onInView={setActive} />
      ))}

      {/* CTA */}
      <section className="relative overflow-hidden bg-black px-6 py-32 lg:px-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 70% at 50% 40%, rgba(173,137,87,0.10), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[900px] text-center">
          <h2
            className="font-sora font-[100] leading-[1.05] text-white"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Não sabe por qual pilar começar?
          </h2>
          <p className="mt-6 font-sora text-[20px] font-[200] italic text-gold-l">
            O Assessment responde isso.
          </p>
          <p className="mx-auto mt-8 max-w-xl font-urbanist text-[16px] font-[300] leading-[1.85] text-w35">
            Em 90 minutos mapeamos o seu perfil completo e definimos exatamente o que a sua jornada precisa. Sem pacotes. Sem atalhos. Sob medida.
          </p>
          <Link
            to="/assessment"
            className="group relative mt-12 inline-flex items-center overflow-hidden bg-gold px-8 py-4 font-urbanist text-[12px] font-[500] uppercase tracking-[0.22em] text-black transition-colors"
          >
            <span className="absolute inset-0 -translate-x-full bg-gold-xl transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">Solicitar Assessment · €250</span>
          </Link>
        </div>
      </section>
    </>
  );
}

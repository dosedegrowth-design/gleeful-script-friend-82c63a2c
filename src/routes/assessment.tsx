import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Briefcase, Users, TrendingUp, Clock, AlertCircle, Search } from "lucide-react";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Strategic Relocation Assessment — MOOVIA Portugal" },
      { name: "description", content: "90 minutos com o founder. Diagnóstico, estratégias e entregável físico. €250 abatidos no mandato." },
      { property: "og:title", content: "Strategic Relocation Assessment · €250" },
      { property: "og:description", content: "O diagnóstico que organiza o que você não sabia que precisava organizar." },
    ],
  }),
  component: AssessmentPage,
});

const deliverables = [
  { n: "01", t: "Mapa de Decisão Personalizado", d: "Documento visual com todas as decisões que precisam ser tomadas, em que ordem, com que prazo e com que impacto. O guia central da sua transição — construído para o seu caso, não para um caso genérico." },
  { n: "02", t: "Estratégia de Habitação", d: "Definição da zona, tipologia, orçamento real e estratégia de busca alinhados ao seu perfil familiar. Inclui análise de bairros, escolas próximas e viabilidade de arrendamento ou compra." },
  { n: "03", t: "Estratégia Documental e Migratória", d: "Mapeamento completo dos documentos necessários antes da partida e depois da chegada. Análise do melhor visto para o seu perfil e cronograma de obtenção de cada documento." },
  { n: "04", t: "Estratégia Familiar e Escolar", d: "Plano de integração familiar com foco nas crianças: tipo de escola recomendado, regiões com vagas, timeline de matrícula e adaptação cultural nos primeiros meses." },
  { n: "05", t: "Estrutura Fiscal Inicial", d: "Primeira análise do enquadramento fiscal mais vantajoso para o seu perfil em Portugal: regime de tributação, impacto do IFICI, dupla tributação e estrutura de rendimentos recomendada." },
  { n: "06", t: "Plano de Próximos Passos com Cronograma", d: "Lista detalhada de todas as ações necessárias, distribuídas por responsável e prazo. Do que fazer antes de partir ao que fazer nas primeiras semanas depois de chegar." },
];

const profiles = [
  { Icon: Briefcase, t: "Profissional com proposta confirmada", d: "Tem oferta de trabalho em Portugal mas não sabe como encaixar documentação, habitação, família e fiscalidade ao mesmo tempo." },
  { Icon: Users, t: "Família planejando a mudança", d: "Decidiu ir mas tem filhos em idade escolar, cônjuge que vai largar a carreira e dez frentes abertas sem saber por onde começar." },
  { Icon: TrendingUp, t: "Investidor ou empresário", d: "Quer estruturar patrimônio ou empresa em Portugal mas precisa entender o contexto fiscal e legal antes de qualquer decisão." },
  { Icon: Clock, t: "Quem tem prazo real", d: "Comprou a passagem, foi contratado ou tem deadline específico. Precisa de um plano agora, não de mais pesquisa." },
  { Icon: AlertCircle, t: "Quem já tentou uma vez", d: "Iniciou o processo antes e algo deu errado — escola sem vaga, apartamento no bairro errado, visto reprovado. Quer refazer com método." },
  { Icon: Search, t: "Quem pesquisa há meses", d: "Já leu tudo, está em todos os grupos, mas continua sem um plano claro. O Assessment transforma pesquisa em decisão." },
];

const docSections = [
  "Perfil familiar e financeiro", "Análise do corredor de mudança", "Estratégia migratória e visto",
  "Estratégia de habitação", "Estratégia educacional", "Estrutura fiscal inicial",
  "Plano de adaptação familiar", "Documentação necessária antes da partida", "Documentação necessária na chegada",
  "Cronograma geral de ações", "Alertas de risco do perfil", "Próximos passos recomendados",
];

const objections = [
  { q: "“€250 é caro para uma reunião.”", a: "O Assessment não é uma reunião. É o primeiro trabalho estratégico da MOOVIA, com entregável físico, conduzido pelo founder. E os €250 são abatidos integralmente no mandato — se você seguir com a MOOVIA, o Assessment não custou nada." },
  { q: "“Posso pesquisar as respostas sozinho.”", a: "Você provavelmente já está pesquisando há semanas ou meses. O problema não é falta de informação. É que ninguém integra as decisões para o seu caso específico. O Assessment faz exatamente isso." },
  { q: "“Já tenho advogado de imigração.”", a: "Um advogado de imigração resolve o visto. O Assessment mapeia o visto, a habitação, a escola, a fiscalidade e a adaptação familiar — ao mesmo tempo, para o seu perfil. São coisas diferentes." },
  { q: "“Ainda não tenho certeza se vou.”", a: "O Assessment existe exatamente para isso. Ao final dos 90 minutos, você terá clareza suficiente para tomar a decisão — ou para entender que não é o momento certo. Essa resposta também tem valor." },
];

function AssessmentPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <MinimalNav />
      <Hero />
      <NotIsSection />
      <DeliverablesSection />
      <TimelineSection />
      <ProfilesSection />
      <PhysicalDocSection />
      <ObjectionsSection />
      <CtaFormSection />
      <MinimalFooter />
    </div>
  );
}

function MinimalNav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/85 backdrop-blur-md border-b border-b15">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-12 h-[72px]">
        <Link to="/" className="flex items-center">
          <img src="/moovia-logotype.png" alt="MOOVIA Portugal" className="h-8 w-auto" />
        </Link>
        <a href="#form" className="group relative overflow-hidden bg-gold text-black font-body font-[600] text-[11px] tracking-[0.22em] uppercase px-6 py-3 transition-colors">
          <span className="relative z-10">Solicitar Assessment</span>
          <span className="absolute inset-0 bg-gold-xl translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const headline = ["O", "diagnóstico", "que", "organiza", "o", "que", "você", "não", "sabia", "que", "precisava", "organizar."];
  return (
    <section className="relative pt-[160px] pb-[120px] px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,30,60,0.6)_0%,_rgba(6,9,26,0)_70%)]" />
      <div className="relative mx-auto max-w-[760px] text-center">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-10">
          Strategic Relocation Assessment · €250
        </motion.p>
        <h1 className="font-display font-[200] text-white leading-[1.02] tracking-[-0.04em] text-[clamp(38px,7vw,88px)] mb-10">
          {headline.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.05 }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="font-body text-[19px] font-[300] text-w35 leading-[1.7] max-w-[580px] mx-auto mb-14">
          Não é uma consulta. É o primeiro trabalho estratégico da MOOVIA, com entregável físico, que mapeia tudo o que precisa ser decidido antes de comprar a passagem.
        </motion.p>
        <div className="flex items-stretch justify-center gap-10 mb-12">
          <div>
            <div className="font-display font-[200] text-[48px] text-gold-l leading-none mb-2">€250</div>
            <div className="font-body text-[11px] font-[300] text-w35 tracking-[0.2em] uppercase">Investimento</div>
          </div>
          <div className="w-px bg-b15" />
          <div>
            <div className="font-display font-[200] text-[48px] text-gold-l leading-none mb-2">90 min</div>
            <div className="font-body text-[11px] font-[300] text-w35 tracking-[0.2em] uppercase">Com o founder</div>
          </div>
        </div>
        <a href="#form" className="group relative inline-block overflow-hidden bg-gold text-black font-body font-[600] text-[12px] tracking-[0.24em] uppercase px-10 py-5">
          <span className="relative z-10">Solicitar agora</span>
          <span className="absolute inset-0 bg-gold-xl translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
        </a>
        <p className="mt-6 font-body text-[13px] font-[300] italic text-w35">
          Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA.
        </p>
      </div>
    </section>
  );
}

function NotIsSection() {
  const notIs = [
    "Uma consulta genérica com respostas vagas",
    "Uma lista de informações que você acha no Google",
    "Um atendimento por chatbot ou assistente",
    "Um pacote com serviços pré-definidos",
    "Uma reunião sem entregável",
  ];
  const is = [
    "90 minutos de trabalho estratégico real",
    "Diagnóstico do seu perfil completo",
    "Estratégias construídas para o seu caso",
    "Cronograma personalizado de ações",
    "Um documento físico que você leva",
    "Diretamente com o founder, sem intermediários",
  ];
  return (
    <section className="bg-black-2 px-6 lg:px-20 py-24">
      <div className="mx-auto max-w-[1200px] grid md:grid-cols-2 md:divide-x md:divide-b15 gap-12">
        <div className="md:pr-12">
          <p className="font-body font-[500] text-[11px] tracking-[0.24em] uppercase text-w35 mb-8">Não é isso</p>
          <ul className="space-y-5">
            {notIs.map((t) => (
              <li key={t} className="flex gap-4 font-body text-[15px] font-[300] text-white/70 leading-[1.6]">
                <span className="text-[#c0392b] font-[500]">✗</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:pl-12">
          <p className="font-body font-[500] text-[11px] tracking-[0.24em] uppercase text-gold mb-8">É exatamente isso</p>
          <ul className="space-y-5">
            {is.map((t) => (
              <li key={t} className="flex gap-4 font-body text-[15px] font-[300] text-white/80 leading-[1.6]">
                <span className="text-gold font-[500]">→</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DeliverablesSection() {
  return (
    <section className="bg-black px-6 lg:px-20 py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6">O que você recebe</p>
        <h2 className="font-display text-[clamp(32px,5vw,72px)] font-[200] text-white leading-[0.98] tracking-[-0.04em] mb-8">
          Sete entregáveis.<br/>Um documento.<br/>O mapa do seu caso.
        </h2>
        <p className="font-body text-[17px] font-[300] text-w35 leading-[1.85] max-w-[560px]">
          Cada item abaixo é construído durante os 90 minutos da sessão com base no seu perfil específico. Nada genérico. Tudo calibrado para o seu momento, a sua família e a sua realidade.
        </p>
        <div className="mt-[72px] grid md:grid-cols-2 gap-px bg-b15">
          {deliverables.map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-black-2 p-10 hover:bg-black-3 border-t-2 border-transparent hover:border-gold transition-all"
            >
              <span className="block font-display font-[100] text-[48px] leading-none mb-1" style={{ color: "rgba(173,137,87,0.12)" }}>{c.n}</span>
              <h3 className="font-display font-[300] text-[19px] text-white mb-3">{c.t}</h3>
              <p className="font-body text-[14px] font-[300] text-w35 leading-[1.8]">{c.d}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.42 }}
            className="md:col-span-2 p-10 border-l-2 border-gold"
            style={{ background: "rgba(173,137,87,0.04)" }}
          >
            <span className="block font-display font-[100] text-[48px] leading-none mb-1" style={{ color: "rgba(173,137,87,0.18)" }}>07</span>
            <h3 className="font-display font-[300] text-[22px] text-white mb-3">Entregável Físico — O Documento que Você Leva</h3>
            <p className="font-body text-[15px] font-[300] text-w35 leading-[1.8] max-w-[860px]">
              Todos os seis itens anteriores são compilados em um único documento que você recebe ao final da sessão. Não é um PDF genérico — é um relatório produzido durante a sessão com os dados do seu caso, que você pode usar como referência ao longo de toda a transição.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const blocks = [
    { time: "Primeiros 20 min", t: "Diagnóstico", d: "O Frederico mapeia o seu perfil completo: família, trabalho, finanças, timeline, prioridades e medos reais. Nenhuma pergunta é ociosa." },
    { time: "50 min centrais", t: "Estratégias", d: "Construção das estratégias específicas para o seu caso: habitação, visto, escola, fiscalidade. Cada decisão é discutida com contexto e alternativas." },
    { time: "Últimos 20 min", t: "Cronograma", d: "Fechamento do plano de ação com datas, responsáveis e dependências. Você sai da sessão sabendo o que fazer e em que ordem." },
  ];
  return (
    <section className="bg-black-2 px-6 lg:px-20 py-32">
      <div className="mx-auto max-w-[1400px]">
        <p className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6">O que acontece na sessão</p>
        <h2 className="font-display text-[clamp(32px,5vw,68px)] font-[200] text-white leading-[0.98] tracking-[-0.04em] mb-20">
          90 minutos estruturados.<br/>Nem mais. Nem menos.
        </h2>
        <div className="relative grid md:grid-cols-3 gap-10 md:gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="hidden md:block absolute top-[18px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
          />
          {blocks.map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="relative"
            >
              <div className="w-[14px] h-[14px] rounded-full bg-gold mb-8 relative z-10 ring-4 ring-black-2" />
              <p className="font-body text-[10px] tracking-[0.28em] uppercase text-gold mb-3">{b.time}</p>
              <h3 className="font-display font-[300] text-[28px] text-white mb-4">{b.t}</h3>
              <p className="font-body text-[14px] font-[300] text-w35 leading-[1.8]">{b.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 border-l-2 border-gold px-7 py-6" style={{ background: "rgba(173,137,87,0.04)" }}>
          <p className="font-body text-[15px] font-[300] text-white/80 leading-[1.8] italic">
            O Frederico conduz a sessão pessoalmente. Nenhum assistente, nenhum script, nenhum processo automático. Você fala com quem criou a MOOVIA e viveu a transição que está prestes a fazer.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProfilesSection() {
  return (
    <section className="bg-black px-6 lg:px-20 py-24">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="font-display text-center text-[clamp(28px,4.5vw,56px)] font-[200] text-white leading-[1.05] tracking-[-0.03em] mb-16">
          O Assessment é para você se...
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-b15">
          {profiles.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-black-2 p-9 border-t border-b15 hover:border-t-2 hover:border-gold transition-all"
            >
              <p.Icon size={24} strokeWidth={1.5} className="text-gold mb-6" />
              <h3 className="font-display font-[300] text-[18px] text-white mb-3 leading-snug">{p.t}</h3>
              <p className="font-body text-[14px] font-[300] text-w35 leading-[1.75]">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhysicalDocSection() {
  return (
    <section className="bg-black-2 px-6 lg:px-20 py-32">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <p className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6">O documento que você leva</p>
          <h2 className="font-display text-[clamp(32px,5vw,68px)] font-[200] text-white leading-[0.98] tracking-[-0.04em] mb-10">
            Não é um PDF.<br/>É o mapa do seu caso.
          </h2>
          <p className="font-body text-[17px] font-[300] text-w35 leading-[1.85] mb-10">
            A maioria das consultorias entrega uma lista de tarefas genéricas. A MOOVIA entrega um documento construído durante a sessão com os dados do seu caso específico.
            <br/><br/>
            Doze seções. Estruturado pelo Frederico. Serve como referência durante toda a transição — antes de partir, nos primeiros dias depois de chegar e nos 90 dias de adaptação que se seguem.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {docSections.map((s) => (
              <li key={s} className="flex gap-3 font-body text-[14px] font-[300] text-w35 leading-[1.6]">
                <span className="text-gold">→</span>{s}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-[420px] aspect-[1/1.414] bg-black-3 border border-b30 p-10 overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
            <div className="w-[70%] aspect-square grid grid-cols-2 gap-2">
              <div className="bg-gold rounded-sm" /><div className="bg-gold rounded-sm" />
              <div className="bg-gold rounded-sm" /><div className="bg-gold rounded-sm" />
            </div>
          </div>
          <div className="relative flex flex-col h-full">
            <img src="/moovia-logotype.png" alt="" className="h-5 w-auto mb-6 opacity-80" />
            <p className="font-body text-[9px] tracking-[0.28em] uppercase text-gold mb-8">Strategic Relocation Assessment</p>
            <div className="space-y-2.5 flex-1">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="h-[6px] bg-white/8 rounded-sm" style={{ width: `${60 + ((i * 37) % 40)}%` }} />
              ))}
            </div>
            <p className="font-body text-[9px] tracking-[0.24em] uppercase text-w35 mt-6">Documento Confidencial</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ObjectionsSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-black px-6 lg:px-20 py-24">
      <div className="mx-auto max-w-[900px]">
        <h2 className="font-display text-center text-[clamp(32px,5vw,64px)] font-[200] text-white leading-[1.05] tracking-[-0.04em] mb-14">
          Antes de decidir.
        </h2>
        <div className="divide-y divide-b15 border-y border-b15">
          {objections.map((o, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left py-6 group"
                >
                  <span className="font-display text-[18px] md:text-[20px] font-[300] text-white pr-4">{o.q}</span>
                  <span className={`text-gold text-2xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="font-body text-[15px] font-[300] text-w35 leading-[1.85] pb-6 max-w-[760px]">{o.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaFormSection() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [name, setName] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(name.trim() || "Olá");
  }

  return (
    <section id="form" className="bg-black-2 px-6 lg:px-20 py-32">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20">
        <div>
          <p className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6">O próximo passo</p>
          <h2 className="font-display text-[clamp(32px,5vw,68px)] font-[200] text-white leading-[0.98] tracking-[-0.04em] mb-10">
            Solicitar o Assessment.
          </h2>
          <p className="font-body text-[17px] font-[300] text-w35 leading-[1.85] mb-10 max-w-[520px]">
            Preencha o formulário. O Frederico entra em contacto pessoalmente para confirmar disponibilidade e enviar o link de pagamento. A sessão é agendada após a confirmação.
          </p>
          <div className="border-l-2 border-gold pl-6 py-2" style={{ background: "rgba(173,137,87,0.04)" }}>
            <p className="font-body text-[13px] font-[400] tracking-wide uppercase text-white/80 mb-3">O que acontece depois</p>
            <ul className="space-y-2 font-body text-[14px] font-[300] text-w35 leading-[1.75]">
              <li><span className="text-gold mr-2">→</span>Frederico responde em até 2 horas em dias úteis</li>
              <li><span className="text-gold mr-2">→</span>Você recebe o link de pagamento (€250)</li>
              <li><span className="text-gold mr-2">→</span>Após o pagamento, agendamos a sessão via Calendly</li>
              <li><span className="text-gold mr-2">→</span>A sessão é por videochamada (Zoom ou Google Meet)</li>
            </ul>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="bg-black-3 border border-b18 p-10">
              <p className="font-display text-[26px] font-[200] text-white leading-snug mb-4">
                {submitted}, recebemos a sua solicitação.
              </p>
              <p className="font-body text-[15px] font-[300] text-w35 leading-[1.85]">
                O Frederico vai entrar em contacto pessoalmente em até 2 horas em dias úteis para confirmar a data e enviar o link de pagamento.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="bg-black-3 border border-b18 p-8 md:p-10 space-y-5">
              <Field label="Qual é o seu perfil principal?">
                <select required className={inputCls}>
                  <option value="">Selecione...</option>
                  <option>Profissional com proposta de trabalho confirmada</option>
                  <option>Família planejando a mudança</option>
                  <option>Investidor ou empresário</option>
                  <option>Tenho prazo urgente (&lt; 60 dias)</option>
                  <option>Já tentei antes e não deu certo</option>
                  <option>Estou pesquisando há muito tempo</option>
                </select>
              </Field>
              <Field label="Quando pretende fazer a mudança?">
                <select required className={inputCls}>
                  <option value="">Selecione...</option>
                  <option>Menos de 60 dias</option>
                  <option>3 a 6 meses</option>
                  <option>6 a 12 meses</option>
                  <option>Ainda estou decidindo</option>
                </select>
              </Field>
              <Field label="Nome completo">
                <input required maxLength={100} value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
              </Field>
              <Field label="WhatsApp (com código do país)">
                <input required type="tel" maxLength={30} className={inputCls} placeholder="+55 11 ..." />
              </Field>
              <Field label="E-mail">
                <input required type="email" maxLength={255} className={inputCls} />
              </Field>
              <Field label="O que te trouxe até o Assessment? (opcional)">
                <textarea maxLength={1000} rows={3} className={`${inputCls} resize-none`} />
              </Field>
              <button type="submit" className="group relative w-full overflow-hidden bg-gold text-black font-body font-[600] text-[13px] tracking-[0.24em] uppercase py-5">
                <span className="relative z-10">Solicitar o meu Assessment</span>
                <span className="absolute inset-0 bg-gold-xl translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </button>
              <p className="font-body text-[12px] font-[300] text-w35 text-center leading-relaxed">
                Sem compromisso automático. Após o formulário, o Frederico entra em contacto antes de qualquer cobrança.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full bg-transparent border-b border-b18 focus:border-gold outline-none font-body text-[15px] font-[300] text-white py-3 transition-colors";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-body text-[10px] tracking-[0.24em] uppercase text-w35 mb-2">{label}</span>
      {children}
    </label>
  );
}

function MinimalFooter() {
  return (
    <footer className="bg-black border-t border-b15 py-14 px-6">
      <div className="mx-auto max-w-[800px] flex flex-col items-center text-center gap-3">
        <img src="/moovia-logotype.png" alt="MOOVIA Portugal" className="h-8 w-auto opacity-90" />
        <p className="font-body text-[11px] tracking-[0.28em] uppercase text-w35">Planejar · Chegar · Ficar</p>
        <p className="font-body text-[12px] font-[300] text-w35">
          mooviaportugal.com · <Link to="/privacidade" className="hover:text-gold-l transition-colors">Privacidade</Link>
        </p>
      </div>
    </footer>
  );
}

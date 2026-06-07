import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";

const steps = [
  {
    n: "01",
    tag: "Conversa Gratuita",
    title: "Entendemos o seu contexto",
    body: "Uma conversa direta com o founder, sem script, sem chatbot. Validamos o fit e mostramos como a MOOVIA pensa o seu caso. Não entregamos a solução aqui. Mostramos a profundidade do que é necessário resolver.",
    badge: "Sem custo · Agendamento via Calendly",
  },
  {
    n: "02",
    tag: "Strategic Assessment · €250",
    title: "O primeiro trabalho real",
    body: "90 minutos com entregável físico. Mapeamento completo de perfil, riscos, estratégias e cronograma. Não é consulta: é diagnóstico.",
    badge: "€250 abatidos no mandato",
  },
  {
    n: "03",
    tag: "Mandato Personalizado",
    title: "Coordenação completa",
    body: "Do visto ao apartamento, da escola ao banco. Um único ponto de responsabilidade para a decisão mais importante da sua família.",
    badge: "€3.000 a €10.000",
  },
  {
    n: "90",
    tag: "Pós-chegada",
    title: "Chegar é metade",
    body: "Os 90 dias após o pouso são os mais críticos. Adaptação familiar, rotina, integração. Nenhum concorrente acompanha este período de forma estruturada. Nós acompanhamos.",
    badge: "Único no mercado",
  },
];

const deliverables = [
  "Mapa de decisão personalizado",
  "Estratégia de habitação",
  "Estratégia documental e migratória",
  "Estrutura fiscal inicial",
  "Estratégia familiar e escolar",
  "Plano de próximos passos",
];

export function ProcessSection() {
  return (
    <section id="processo" className="bg-black py-[120px] px-6 lg:px-[80px]">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Como trabalhamos
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-amotha text-[clamp(32px,4vw,60px)] font-extralight leading-[1.06] tracking-[-0.02em] mb-12 text-white">
              Um processo.<br/>
              <em className="text-gold-l not-italic italic">Do diagnóstico<br/>ao destino.</em>
            </h2>
          </Reveal>

          <div className="space-y-0" id="assessment">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 120} distance={20}>
                <div className="group flex gap-0 mb-0.5 animate-[fadeUp_0.7s_cubic-bezier(.16,1,.3,1)_forwards]">
                  <div className="flex flex-col items-center w-[72px] shrink-0">
                    <div className="w-12 h-12 border border-border bg-white-5 flex items-center justify-center font-amotha text-[14px] font-light text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:border-gold">
                      {step.n}
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1 min-h-[20px] bg-border" />}
                  </div>
                  <div className="pl-6 pb-8">
                    <p className="font-urbanist text-[10px] tracking-[0.2em] uppercase text-gold mb-2">{step.tag}</p>
                    <h3 className="font-amotha text-[20px] font-light text-white mb-2.5">{step.title}</h3>
                    <p className="font-urbanist text-[14px] font-light text-white-3 leading-[1.85]">{step.body}</p>
                    <span className="inline-block font-urbanist text-[10px] tracking-[0.12em] uppercase text-black bg-gold px-3 py-1 mt-3">
                      {step.badge}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="hidden lg:block sticky top-[120px] mt-[72px]">
          <Reveal delay={200}>
            <div className="bg-black-3 border border-border p-[52px] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,var(--gold),var(--teal),var(--gold))] bg-[length:200%] animate-[gradientSlide_4s_ease_infinite]" />
              <p className="font-urbanist text-[11px] tracking-[0.24em] uppercase text-gold mb-6">Strategic Relocation Assessment</p>
              <div className="font-amotha text-[88px] font-thin text-gold-l leading-none tracking-[-0.04em] mb-1">€250</div>
              <p className="font-urbanist text-[11px] tracking-[0.24em] uppercase text-white-3 mb-9">90 minutos · Entregável físico</p>
              <ul className="space-y-0">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-urbanist text-[14px] font-light text-white-3 py-3 border-b border-border last:border-0 leading-relaxed">
                    <span className="text-gold shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-urbanist text-[13px] font-light text-gold/60 italic mt-6 pt-6 border-t border-border">
                Os €250 são abatidos integralmente no mandato se decidir seguir com a MOOVIA.
              </p>
              <Link
                to="/contacto"
                className="bg-gold text-black font-urbanist text-[12px] font-semibold tracking-[0.2em] uppercase px-10 py-4 relative overflow-hidden group transition-all duration-300 w-full text-center mt-7 block"
              >
                <span className="relative z-10">Solicitar Assessment</span>
                <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        @keyframes gradientSlide { 0%{background-position:0%} 100%{background-position:200%} }
      `}</style>
    </section>
  );
}

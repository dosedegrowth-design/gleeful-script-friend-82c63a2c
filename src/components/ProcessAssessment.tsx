import { cn } from '@/lib/utils';

const steps = [
  {
    num: '01',
    title: 'Entendemos o seu contexto',
    tag: 'Sem custo · Calendly',
    content: 'Uma conversa direta com o founder, sem script, sem chatbot. Validamos o fit e mostramos como a MOOVIA pensa o seu caso.',
    badge: 'Sem custo · Calendly',
  },
  {
    num: '02',
    title: 'O primeiro trabalho real',
    tag: '€250 abatidos no mandato',
    content: '90 minutos com entregável físico. Mapeamento completo de perfil, riscos, estratégias e cronograma. Não é consulta: é diagnóstico.',
    badge: '€250 abatidos no mandato',
  },
  {
    num: '03',
    title: 'Coordenação completa',
    tag: 'Sob medida',
    content: 'Do visto ao apartamento, da escola ao banco. Um único ponto de responsabilidade para a decisão mais importante da sua família.',
    badge: '€3.000 a €10.000',
  },
  {
    num: '90',
    title: 'Chegar é metade',
    tag: 'Único no mercado',
    content: 'Os 90 dias após o pouso são os mais críticos. Nenhum concorrente acompanha este período de forma estruturada. Nós acompanhamos.',
    badge: 'Acompanhamento pós-chegada',
  },
];

const deliverables = [
  'Mapa de decisão personalizado',
  'Estratégia de habitação',
  'Estratégia documental e migratória',
  'Estrutura fiscal inicial',
  'Estratégia familiar e escolar',
  'Plano de próximos passos',
];

export const ProcessAssessment = () => {
  return (
    <section className="bg-black py-[120px] px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="font-urbanist font-normal text-[11px] uppercase tracking-[0.32em] text-gold mb-8 reveal">
            Como trabalhamos
          </div>
          <h2 className="font-amotha font-extralight text-5xl text-white mb-20 reveal">
            Um processo.<br />Do diagnóstico<br />ao destino.
          </h2>

          <div className="space-y-0 relative">
            {steps.map((step, i) => (
              <div key={step.num} className="grid grid-cols-[72px_1fr] group reveal delay-1 mb-12 last:mb-0 relative">
                {/* Connecting Line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[24px] top-[48px] w-px h-[calc(100%+48px)] bg-border" />
                )}
                
                <div className="w-12 h-12 border border-border flex items-center justify-center font-amotha font-light text-sm text-gold bg-black transition-all duration-500 group-hover:bg-gold group-hover:text-black group-hover:border-gold z-10">
                  {step.num}
                </div>
                
                <div className="pt-2">
                  <div className="font-urbanist font-normal text-[10px] uppercase tracking-widest text-gold-m mb-2">
                    {step.tag}
                  </div>
                  <h3 className="font-sora font-light text-xl text-white mb-3">{step.title}</h3>
                  <p className="font-urbanist font-light text-sm text-white/35 leading-relaxed max-w-md mb-4">
                    {step.content}
                  </p>
                  <div className="inline-block px-3 py-1 border border-border rounded-full font-urbanist text-[9px] uppercase tracking-widest text-white/20 group-hover:text-white/40 group-hover:border-white/20 transition-colors">
                    {step.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="lg:sticky lg:top-[120px] bg-black-3 border border-border p-12 overflow-hidden reveal">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold via-teal to-gold animate-gradient-x" />
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="font-sora font-thin text-[88px] text-gold-l leading-none tracking-tighter">€250</span>
              </div>
              <div className="font-urbanist font-normal text-xs uppercase tracking-widest text-white/35 mt-4">
                Strategic Relocation Assessment · 90 minutos
              </div>
            </div>

            <div className="space-y-4 mb-12">
              {deliverables.map((item) => (
                <div key={item} className="flex items-center gap-3 font-urbanist font-light text-sm text-white/70">
                  <span className="text-gold text-lg">→</span>
                  {item}
                </div>
              ))}
            </div>

            <p className="font-urbanist font-light italic text-xs text-white/35 mb-8">
              "Os €250 são abatidos integralmente no mandato."
            </p>

            <button className="btn-primary w-full">Solicitar Assessment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const cards = [
  {
    num: '01',
    title: 'O Azulejo Inteiro',
    subtitle: '"Portugal na primeira olhada"',
    content: 'O todo emerge antes das partes. O cérebro reconhece o azulejo e classifica: Portugal, qualidade, permanência. A marca comunica onde existe antes de dizer uma palavra.',
  },
  {
    num: '02',
    title: 'Portal e Ponte',
    subtitle: '"Cross-border sem precisar dizer"',
    content: 'Os arcos são os portais históricos de Portugal: entradas das cidades, pontes entre margens. A linguagem arquitetônica que diz: aqui começa outro mundo.',
  },
  {
    num: '03',
    title: 'A Alça da Mala',
    subtitle: '"A mudança é concreta"',
    content: 'A curva ornamental é uma alça de bagagem. Mudar de país é físico, real, tangível. A MOOVIA coordena o que vai nas malas e o que fica para trás.',
  },
  {
    num: '04',
    title: 'A Casa',
    subtitle: '"O destino final de todo mandato"',
    content: 'No centro está uma casa. Não um imóvel. Uma casa. Porque o que a MOOVIA entrega não é um contrato: é a sensação de chegar a um lugar que é seu.',
  },
  {
    num: '05',
    title: 'As Pessoas',
    subtitle: '"A MOOVIA conecta e move gente"',
    content: 'Figuras humanas repetidas em quatro direções. A MOOVIA não move processos: move pessoas. Famílias inteiras, com histórias, com medo, com expectativa.',
  },
  {
    num: '06',
    title: 'O Avião',
    subtitle: '"O momento em que tudo muda"',
    content: 'O avião aparece quatro vezes porque a jornada não tem um único sentido. Vai, volta, acompanha. A MOOVIA começa antes do avião decolar.',
  },
];

export const InsideTheSymbol = () => {
  return (
    <section className="bg-black-2 py-[120px] px-8">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-amotha font-extralight text-5xl text-white mb-20 reveal">
          Seis grafismos. Uma história só.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
          {cards.map((card, i) => (
            <div
              key={card.num}
              className={cn(
                'group relative p-12 bg-black-2 border-r border-b border-border transition-colors duration-500 hover:bg-black-3 reveal',
                `delay-${(i % 3) + 1}`
              )}
            >
              {/* Gold border hover animation */}
              <div className="absolute left-0 top-0 w-[3px] h-0 bg-gold transition-all duration-500 group-hover:h-full" />

              <div className="font-sora font-light text-sm text-gold-l mb-8">{card.num}</div>
              <h3 className="font-sora font-light text-2xl text-white mb-2">{card.title}</h3>
              <div className="font-urbanist font-normal text-xs uppercase tracking-wider text-gold-m mb-6">
                {card.subtitle}
              </div>
              <p className="font-urbanist font-light text-sm text-white/35 leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

const posts = [
  {
    category: "Visto",
    title: "Visto D3, D2 ou D7: qual é o certo para o seu perfil?",
    excerpt: "A escolha do visto define o cronograma inteiro da sua mudança. Entender a diferença antes de contratar qualquer advogado é o primeiro passo para não perder tempo e dinheiro.",
    date: "12 Jun 2026",
    readTime: "6 min",
    id: 1
  },
  {
    category: "Fiscalidade",
    title: "Como funciona a tributação para brasileiros em Portugal em 2025",
    excerpt: "O RNH acabou. O IFICI chegou. O que muda para quem pretende se mudar em 2025 e como estruturar a chegada para pagar menos imposto legalmente.",
    date: "10 Jun 2026",
    readTime: "8 min",
    id: 2
  },
  {
    category: "Habitação",
    title: "Quanto custa morar em Lisboa em 2025: bairro por bairro",
    excerpt: "Os preços mudaram. Parque das Nações, Cascais, Almada: onde fica o melhor custo-benefício para quem chega com família.",
    date: "05 Jun 2026",
    readTime: "10 min",
    id: 3
  }
];

export function BlogTeaserSection() {
  return (
    <section className="bg-black-2 py-[120px] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] pointer-events-auto">
        <div className="max-w-[580px] mb-16">
          <Reveal>
            <div className="font-sora text-[11px] tracking-[0.34em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Conteúdo estratégico
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora font-[200] text-[clamp(28px,4vw,48px)] leading-[1.1] text-white">
              O que você precisa entender antes de decidir.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 font-urbanist text-[17px] font-light text-white-3 leading-relaxed">
              Artigos escritos pela equipa da MOOVIA sobre os temas que mais impactam a jornada de transição internacional.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.id} delay={i * 100}>
              <div className="bg-black-3 border border-border p-8 h-full flex flex-col group hover:border-gold/30 transition-colors duration-500 relative">
                <div className="bg-gold/10 px-3 py-1 w-fit font-urbanist font-[500] text-[10px] tracking-widest uppercase text-gold mb-6">
                  {post.category}
                </div>
                <h3 className="font-sora text-[20px] font-[300] text-white leading-tight mb-4 line-clamp-2 group-hover:text-gold-l transition-colors">
                  {post.title}
                </h3>
                <p className="font-urbanist text-[14px] font-[300] text-white-3 leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-border flex items-center justify-between font-urbanist text-[12px] text-white-4">
                  <div className="flex gap-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <span className="text-gold text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-16 text-center">
          <Link
            to="/blog"
            className="inline-block border border-border px-10 py-4 font-urbanist text-[12px] tracking-[0.2em] uppercase text-white-3 hover:text-white hover:border-gold transition-all duration-300"
          >
            Ver todos os artigos
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

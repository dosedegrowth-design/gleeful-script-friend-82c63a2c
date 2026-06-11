import { Reveal } from "@/components/site/Reveal";
import { Link } from "@tanstack/react-router";

const posts = [
  {
    category: "Visto",
    title: "Visto D3, D2 ou D7: qual é o certo para o seu perfil?",
    excerpt: "A escolha do visto define o cronograma inteiro da sua mudança. Entender a diferença antes de contratar qualquer advogado é o primeiro passo para não perder tempo e dinheiro.",
    date: "12 Jun 2026",
    readTime: "6 min"
  },
  {
    category: "Fiscalidade",
    title: "Como funciona a tributação para brasileiros em Portugal em 2025",
    excerpt: "O RNH acabou. O IFICI chegou. O que muda para quem pretende se mudar em 2025 e como estruturar a chegada para pagar menos imposto legalmente.",
    date: "10 Jun 2026",
    readTime: "8 min"
  },
  {
    category: "Habitação",
    title: "Quanto custa morar em Lisboa em 2025: bairro por bairro",
    excerpt: "Os preços mudaram. Parque das Nações, Cascais, Almada: onde fica o melhor custo-benefício para quem chega com família.",
    date: "05 Jun 2026",
    readTime: "10 min"
  }
];

export function BlogTeaserSection() {
  return (
    <section className="bg-black-2 py-32 px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              Conteúdo estratégico
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(28px,4vw,44px)] font-[200] leading-[1.1] text-white max-w-2xl">
              "O que você precisa entender antes de decidir."
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 font-urbanist text-[17px] font-[300] text-w35 leading-relaxed max-w-xl">
              Artigos escritos pela equipa da MOOVIA sobre os temas que mais impactam a jornada de transição internacional.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {posts.map((post, i) => (
             <div key={post.title} className="bg-black-3 border border-b18 p-10 flex flex-col group hover:border-gold/30 transition-all duration-500">
                <div className="px-3 py-1 bg-gold/10 w-fit text-gold font-urbanist text-[10px] uppercase tracking-widest mb-10">
                  {post.category}
                </div>
                <h3 className="font-sora text-[20px] font-[300] text-white mb-4 leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-urbanist text-[14px] font-[300] text-w35 leading-relaxed mb-10 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-b18 flex items-center justify-between text-[11px] font-urbanist text-w35 uppercase tracking-widest">
                   <div className="flex gap-4">
                     <span>{post.date}</span>
                     <span>{post.readTime}</span>
                   </div>
                   <span className="text-gold text-lg transition-transform group-hover:translate-x-1">→</span>
                </div>
             </div>
           ))}
        </div>

        <div className="mt-20 text-center">
           <Link 
             to="/blog"
             className="inline-block py-4 px-10 border border-b18 font-urbanist text-[12px] uppercase tracking-[0.2em] text-w35 hover:text-white hover:border-gold transition-all"
           >
             Ver todos os artigos
           </Link>
        </div>
      </div>
    </section>
  );
}

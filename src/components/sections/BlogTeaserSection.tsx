import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

export function BlogTeaserSection() {
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

  return (
    <section className="bg-black-2 py-32 px-6 lg:px-20 relative overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            Conteúdo estratégico
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(28px,4vw,44px)] font-[200] text-white leading-tight mb-8"
          >
            "O que você precisa entender<br/>antes de decidir."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[17px] font-[300] text-w35 leading-[1.7] max-w-xl"
          >
            Artigos escritos pela equipa da MOOVIA sobre os temas que mais impactam a jornada de transição internacional.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-b18">
          {posts.map((post, i) => (
            <motion.div 
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black-3 p-10 flex flex-col group border border-transparent hover:border-b18 transition-all"
            >
              <div className="inline-block bg-w12 px-3 py-1 font-urbanist text-[10px] font-[500] uppercase tracking-widest text-gold mb-10 w-fit">
                {post.category}
              </div>
              <h3 className="font-sora text-[18px] font-[300] text-white mb-4 line-clamp-2">{post.title}</h3>
              <p className="font-urbanist text-[14px] font-[300] text-w35 leading-[1.7] mb-10 line-clamp-3">{post.excerpt}</p>
              
              <div className="mt-auto pt-6 border-t border-b18 flex items-center justify-between text-[11px] font-urbanist text-w35 uppercase tracking-widest">
                <div className="flex gap-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="text-gold text-lg group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/blog" 
            className="inline-block border border-b18 px-10 py-4 font-urbanist text-[12px] uppercase tracking-[0.2em] text-w35 hover:text-white hover:border-gold transition-all"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
}

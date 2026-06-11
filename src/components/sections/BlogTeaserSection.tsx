import { motion } from "framer-motion";
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
    <section className="bg-navy py-clamp(110px,14vh,180px) px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-cobre" />
            Conteúdo estratégico
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora text-[clamp(28px,4vw,44px)] font-[200] leading-[1.1] text-off max-w-2xl"
          >
            "O que você precisa entender antes de decidir."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 font-urbanist text-[17px] font-[300] text-mut leading-[1.7] max-w-xl"
          >
            Artigos escritos pela equipa da MOOVIA sobre os temas que mais impactam a jornada de transição internacional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {posts.map((post, i) => (
             <motion.div 
               key={post.title} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass glass-hover p-10 flex flex-col group rounded-2xl transition-all duration-500"
             >
                <div className="px-3 py-1 glass rounded-full w-fit text-cobre font-sora text-[10px] uppercase tracking-widest mb-10">
                  {post.category}
                </div>
                <h3 className="font-sora text-[20px] font-[300] text-off mb-4 leading-tight line-clamp-2 group-hover:text-latte transition-colors">
                  {post.title}
                </h3>
                <p className="font-urbanist text-[14px] font-[300] text-mut leading-[1.7] mb-10 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-line-cool flex items-center justify-between text-[11px] font-urbanist text-mut-2 uppercase tracking-widest">
                   <div className="flex gap-4">
                     <span>{post.date}</span>
                     <span>{post.readTime}</span>
                   </div>
                   <span className="text-cobre text-lg transition-transform group-hover:translate-x-1">→</span>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-20 text-center">
           <Link 
             to="/blog"
             className="inline-block py-4 px-10 border border-line-gold font-urbanist text-[12px] uppercase tracking-[0.2em] text-mut hover:text-off hover:border-cobre transition-all rounded-sm active:scale-95"
           >
             Ver todos os artigos
           </Link>
        </div>
      </div>
    </section>
  );
}
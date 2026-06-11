import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

const posts = [
  {
    category: "Visto",
    title: "Visto D3, D2 ou D7: qual é o certo para o seu perfil?",
    excerpt: "A escolha do visto define o cronograma inteiro da sua mudança. Entender a diferença é o primeiro passo.",
    date: "12 Jun 2026",
    readTime: "6 min",
    id: 1
  },
  {
    category: "Fiscalidade",
    title: "Como funciona a tributação para brasileiros em Portugal em 2025",
    excerpt: "O RNH acabou. O IFICI chegou. O que muda para quem pretende se mudar em 2025.",
    date: "10 Jun 2026",
    readTime: "8 min",
    id: 2
  },
  {
    category: "Habitação",
    title: "Quanto custa morar em Lisboa em 2025: bairro por bairro",
    excerpt: "Os preços mudaram. Parque das Nações, Cascais, Almada: onde fica o melhor custo-benefício.",
    date: "05 Jun 2026",
    readTime: "10 min",
    id: 3
  }
];

export function BlogTeaserSection() {
  return (
    <section className="bg-navy-deep py-[clamp(110px,14vh,180px)] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[700px] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-4"
          >
            <span className="w-6 h-px bg-cobre" />
            Conteúdo estratégico
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(28px,4vw,44px)] font-[200] leading-[1.1] text-off mb-8"
          >
            O que você precisa entender<br />antes de decidir.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[17px] font-[300] text-mut leading-relaxed"
          >
            Artigos escritos pela equipa da MOOVIA sobre os temas que mais impactam a jornada.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card p-10 lg:p-12 flex flex-col group h-full"
            >
              <div className="bg-navy-raise/50 px-4 py-1.5 rounded-full w-fit font-urbanist font-[500] text-[10px] tracking-widest uppercase text-cobre mb-10 border border-line-cool">
                {post.category}
              </div>
              <h3 className="font-sora text-[22px] font-[300] text-off leading-tight mb-6 group-hover:text-latte transition-colors duration-500 line-clamp-2">
                {post.title}
              </h3>
              <p className="font-urbanist text-[15px] font-[300] text-mut leading-[1.7] mb-10 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mt-auto pt-8 border-t border-line-cool flex items-center justify-between font-urbanist text-[12px] text-mut-2 uppercase tracking-widest">
                <div className="flex gap-4">
                  <span>{post.readTime}</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-line-gold flex items-center justify-center group-hover:bg-cobre group-hover:text-navy-deep transition-all duration-500">
                  <ArrowRight size={14} weight="thin" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-4 border border-line-gold px-12 py-5 font-urbanist text-[12px] font-[600] tracking-[0.2em] uppercase text-off hover:bg-navy-rich hover:border-cobre transition-all duration-500"
          >
            Ver todos os artigos
            <ArrowRight size={16} weight="thin" className="text-cobre" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

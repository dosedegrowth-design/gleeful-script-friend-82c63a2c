import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import blogVistoLisboa from "@/assets/blog-visto-lisboa.jpg";
import blogFiscalLisboa from "@/assets/blog-fiscal-lisboa.jpg";
import blogHabitacaoLisboa from "@/assets/blog-habitacao-lisboa.jpg";

export function BlogTeaserSection() {
  const posts = [
    {
      slug: "visto-d3-d2-d7-qual-escolher",
      category: "Visto",
      title: "Visto D3, D2 ou D7: qual é o certo para o seu perfil?",
      excerpt: "A escolha do visto define o cronograma inteiro da sua mudança. Entender a diferença antes de contratar qualquer advogado é o primeiro passo para não perder tempo e dinheiro.",
      date: "12 Jun 2026",
      readTime: "6 min",
      image: blogVistoLisboa,
      alt: "Rua de Lisboa ao entardecer representando decisões de visto"
    },
    {
      slug: "tributacao-brasileiros-portugal-2026",
      category: "Fiscalidade",
      title: "Como funciona a tributação para brasileiros em Portugal em 2026",
      excerpt: "O RNH acabou. O IFICI chegou. O que muda para quem pretende se mudar em 2026 e como estruturar a chegada para pagar menos imposto legalmente.",
      date: "10 Jun 2026",
      readTime: "8 min",
      image: blogFiscalLisboa,
      alt: "Escritório elegante com vista para Lisboa e documentos financeiros"
    },
    {
      slug: "quanto-custa-morar-lisboa-2026",
      category: "Habitação",
      title: "Quanto custa morar em Lisboa em 2026: bairro por bairro",
      excerpt: "Os preços mudaram. Parque das Nações, Cascais, Almada: onde fica o melhor custo-benefício para quem chega com família.",
      date: "05 Jun 2026",
      readTime: "10 min",
      image: blogHabitacaoLisboa,
      alt: "Vista editorial de edifícios residenciais em Lisboa"
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
            className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            Conteúdo estratégico
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(28px,4.5vw,56px)] font-[200] text-white leading-[0.95] tracking-[-0.04em] mb-12"
          >
            "O que você precisa entender<br/>antes de decidir."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-[17px] font-[300] text-w35 leading-[1.7] max-w-xl"
          >
            Artigos escritos pela equipa da MOOVIA sobre os temas que mais impactam a jornada de transição internacional.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-b18">
          {posts.map((post, i) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black-3 flex flex-col group border border-transparent hover:border-b18 transition-all overflow-hidden"
            >
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-b border-b18">
                  <img
                    src={post.image}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    alt={post.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06091a]/50 via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 inline-block bg-black/55 backdrop-blur-sm px-3 py-1 font-body text-[10px] font-[500] uppercase tracking-widest text-gold w-fit border border-b18">
                    {post.category}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1">
                  <h3 className="font-display text-[20px] font-[300] text-white mb-4 line-clamp-2">{post.title}</h3>
                  <p className="font-body text-[14px] font-[300] text-w35 leading-[1.7] mb-10 line-clamp-3">{post.excerpt}</p>

                  <div className="mt-auto pt-6 border-t border-b18 flex items-center justify-between text-[11px] font-body text-w35 uppercase tracking-widest">
                    <div className="flex gap-4">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="text-gold text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            to="/blog" 
            className="inline-block border border-b18 px-10 py-4 font-body text-[12px] uppercase tracking-[0.2em] text-w35 hover:text-white hover:border-gold transition-all"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
}

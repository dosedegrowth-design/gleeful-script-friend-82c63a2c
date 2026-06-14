import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — MOOVIA Portugal" },
      { name: "description", content: "Artigos sobre transição internacional, fiscalidade, habitação, escolas e adaptação. Brasil para Portugal." },
      { property: "og:title", content: "Blog MOOVIA Portugal" },
      { property: "og:description", content: "Estratégia para quem está a coordenar uma transição internacional." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false });
        
        if (error) throw error;
        return data || [];
      } catch (e) {
        console.error("Error fetching posts:", e);
        throw e;
      }
    },
    retry: 1,
  });

  if (error) {
    return (
      <SiteLayout>
        <div className="bg-black pt-[120px]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 text-center">
            <h1 className="text-white text-2xl font-[200]">Não foi possível carregar o blog.</h1>
            <p className="text-white/35 mt-4">Por favor, tente novamente mais tarde.</p>
          </div>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="bg-black pt-[120px]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-[80px] py-16">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Blog
          </p>
          <h1 className="font-sora text-[clamp(40px,6vw,68px)] font-[100] leading-[1.05] max-w-3xl text-white">
            Estratégia, não dicas.
          </h1>
          <p className="mt-8 max-w-2xl font-urbanist text-[17px] font-[300] text-w35 leading-relaxed">
            Conteúdo para quem está a coordenar uma decisão real, não a colecionar informação.
          </p>
        </div>
      </div>
      <section className="py-20 px-6 md:px-[80px] bg-black-2">
        <div className="mx-auto max-w-[1400px]">
          {isLoading ? (
            <p className="text-w35 font-urbanist">A carregar…</p>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-b18">
              {posts.map((p: any, i: number) => (
                <Reveal key={p.id} delay={i * 60} className="h-full">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex h-full flex-col bg-black-2 hover:bg-black-3 transition-colors border-l-[3px] border-transparent hover:border-gold overflow-hidden"
                  >
                    {p.featured_image && (
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-b18">
                        <img
                          src={p.featured_image}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {p.category && (
                          <div className="absolute left-5 top-5 bg-black/55 backdrop-blur-sm px-3 py-1 font-urbanist text-[10px] uppercase tracking-[0.18em] text-gold border border-b18">
                            {p.category}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-10">
                      {!p.featured_image && p.category && (
                        <div className="font-urbanist text-[11px] uppercase tracking-[0.18em] text-gold">{p.category}</div>
                      )}
                      <h2 className="mt-2 font-sora text-2xl font-[200] text-white leading-tight">{p.title}</h2>
                      {p.excerpt && (
                        <p className="mt-4 font-urbanist text-[15px] font-[300] text-w35 leading-relaxed line-clamp-3">{p.excerpt}</p>
                      )}
                      <div className="mt-auto pt-8 font-urbanist text-[11px] uppercase tracking-[0.16em] text-w35 group-hover:text-gold transition-colors">
                        {p.read_time ? `${p.read_time} min de leitura` : "Ler artigo"} →
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center bg-black-2 border border-b18">
              <p className="font-sora text-2xl font-[100] text-w35">
                Primeiros artigos em breve.
              </p>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

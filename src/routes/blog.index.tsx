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
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      return data || [];
    },
  });

  return (
    <SiteLayout>
      <div className="bg-black pt-[120px]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Blog
          </p>
          <h1 className="font-sora text-[clamp(40px,6vw,68px)] font-extralight leading-[1.05] max-w-3xl text-white">
            Estratégia, não dicas.
          </h1>
          <p className="mt-8 max-w-2xl font-urbanist text-[17px] font-light text-white-3 leading-relaxed">
            Conteúdo para quem está a coordenar uma decisão real, não a colecionar informação.
          </p>
        </div>
      </div>
      <section className="py-20 px-6 md:px-10 bg-black-2">
        <div className="mx-auto max-w-[1400px]">
          {isLoading ? (
            <p className="text-white-3 font-urbanist">A carregar…</p>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {posts.map((p: any, i: number) => (
                <Reveal key={p.id} delay={i * 60}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="block h-full p-10 bg-black-2 hover:bg-black-3 transition-colors"
                  >
                    {p.category && (
                      <div className="font-urbanist text-[11px] uppercase tracking-[0.18em] text-gold">{p.category}</div>
                    )}
                    <h2 className="mt-4 font-sora text-2xl font-light text-white leading-tight">{p.title}</h2>
                    {p.excerpt && (
                      <p className="mt-4 font-urbanist text-[15px] font-light text-white-3 leading-relaxed">{p.excerpt}</p>
                    )}
                    <div className="mt-6 font-urbanist text-[11px] uppercase tracking-[0.16em] text-white-4">
                      {p.read_time ? `${p.read_time} min de leitura` : "Ler artigo"} →
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center bg-black-2 border border-border">
              <p className="font-sora text-2xl font-extralight text-white-3">
                Primeiros artigos em breve.
              </p>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

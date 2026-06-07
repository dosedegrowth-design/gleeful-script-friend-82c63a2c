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
      <div style={{ background: "var(--ivory)", paddingTop: 120 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
          <p className="eyebrow mb-6">Blog</p>
          <h1 className="font-display text-[clamp(40px,6vw,68px)] leading-[1.05] max-w-3xl" style={{ fontWeight: 200 }}>
            Estratégia, não dicas.
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed" style={{ color: "var(--stone)", fontWeight: 300 }}>
            Conteúdo para quem está a coordenar uma decisão real, não a colecionar informação.
          </p>
        </div>
      </div>
      <section className="py-20 px-6 md:px-10" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-[1400px]">
          {isLoading ? (
            <p className="text-stone">A carregar…</p>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--line)" }}>
              {posts.map((p: any, i: number) => (
                <Reveal key={p.id} delay={i * 60}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="block h-full p-10 transition-colors hover:bg-[var(--copper-light)]"
                    style={{ background: "#FFFFFF" }}
                  >
                    {p.category && (
                      <div className="text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--copper)" }}>{p.category}</div>
                    )}
                    <h2 className="mt-4 font-display text-2xl leading-tight" style={{ fontWeight: 300 }}>{p.title}</h2>
                    {p.excerpt && (
                      <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "var(--ink-mid)" }}>{p.excerpt}</p>
                    )}
                    <div className="mt-6 text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--stone)" }}>
                      {p.read_time ? `${p.read_time} min de leitura` : "Ler artigo"} →
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center" style={{ background: "var(--ivory)" }}>
              <p className="font-display text-2xl" style={{ fontWeight: 200, color: "var(--stone)" }}>
                Primeiros artigos em breve.
              </p>
            </div>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}

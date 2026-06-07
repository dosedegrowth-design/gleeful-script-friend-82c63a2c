import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({
    meta: [
      { title: "Artigo — MOOVIA Portugal" },
      { name: "description", content: "Artigo MOOVIA Portugal sobre transição internacional." },
    ],
  }),
  component: Post,
});

function Post() {
  const { slug } = Route.useParams();
  const { data: post, isLoading } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const { data } = await supabase.from("posts").select("*").eq("slug", slug).eq("published", true).maybeSingle();
      return data;
    },
  });

  return (
    <SiteLayout>
      <article style={{ background: "var(--ivory)", paddingTop: 120 }}>
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20">
          {isLoading ? (
            <p style={{ color: "var(--stone)" }}>A carregar…</p>
          ) : !post ? (
            <div>
              <p className="eyebrow mb-6">Não encontrado</p>
              <h1 className="font-display text-4xl" style={{ fontWeight: 200 }}>Este artigo não existe ou ainda não foi publicado.</h1>
              <Link to="/blog" className="mt-8 inline-block text-[12px] uppercase tracking-[0.18em] border-b pb-1" style={{ color: "var(--copper-dark)", borderColor: "var(--copper)" }}>
                Voltar ao blog →
              </Link>
            </div>
          ) : (
            <>
              {post.category && (
                <div className="text-[11px] uppercase tracking-[0.18em] mb-6" style={{ color: "var(--copper)" }}>{post.category}</div>
              )}
              <h1 className="font-display text-[clamp(32px,5vw,56px)] leading-[1.1]" style={{ fontWeight: 200 }}>{post.title}</h1>
              {post.excerpt && (
                <p className="mt-8 text-[19px] leading-relaxed" style={{ color: "var(--ink-mid)", fontWeight: 300 }}>{post.excerpt}</p>
              )}
              <div className="mt-12 prose prose-lg max-w-none" style={{ color: "var(--ink-mid)" }} dangerouslySetInnerHTML={{ __html: post.content || "" }} />

              <div className="mt-20 p-10 border-l-[3px]" style={{ background: "#FFFFFF", borderColor: "var(--copper)" }}>
                <p className="eyebrow mb-3">Pronto para dar o próximo passo?</p>
                <h2 className="font-display text-2xl" style={{ fontWeight: 200 }}>Avalie o seu caso com a MOOVIA.</h2>
                <Link to="/contacto" className="mt-6 inline-flex items-center px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-medium" style={{ background: "var(--ink)", color: "var(--ivory)" }}>
                  Avaliar meu caso
                </Link>
              </div>
            </>
          )}
        </div>
      </article>
    </SiteLayout>
  );
}

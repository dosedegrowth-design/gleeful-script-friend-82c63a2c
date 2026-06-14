import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteLayout } from "@/components/site/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import DOMPurify from "isomorphic-dompurify";

async function fetchPost(slug: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    return { post: await fetchPost(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.post ? `${loaderData.post.title} — MOOVIA Portugal` : "Artigo — MOOVIA Portugal" },
      { name: "description", content: loaderData?.post?.excerpt || "Artigo MOOVIA Portugal sobre transição internacional." },
      { property: "og:title", content: loaderData?.post?.title || "Artigo MOOVIA Portugal" },
      { property: "og:description", content: loaderData?.post?.excerpt || "Estratégia para quem está a coordenar uma transição internacional." },
    ],
  }),
  component: Post,
});

function Post() {
  const { slug } = Route.useParams();
  const initialData = Route.useLoaderData();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
    initialData: initialData?.post,
    retry: 1,
  });

  if (error) {
    return (
      <SiteLayout>
        <div className="bg-black pt-[120px]">
          <div className="mx-auto max-w-3xl px-6 md:px-10 py-20 text-center">
            <h1 className="text-white text-2xl font-light">Erro ao carregar o artigo.</h1>
            <p className="text-white/35 mt-4">Por favor, tente novamente mais tarde.</p>
            <Link to="/blog" className="mt-8 inline-block font-urbanist text-[12px] uppercase tracking-[0.18em] border-b border-gold text-gold-l pb-1">
              Voltar ao blog →
            </Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <article className="bg-black pt-[120px]">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20">
          {isLoading && !post ? (
            <p className="text-white/35 font-urbanist">A carregar…</p>
          ) : !post ? (
            <div>
              <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
                <span className="w-6 h-px bg-gold" />
                Não encontrado
              </p>
              <h1 className="font-sora text-4xl font-[200] text-white">Este artigo não existe ou ainda não foi publicado.</h1>
              <Link to="/blog" className="mt-8 inline-block font-urbanist text-[12px] uppercase tracking-[0.18em] border-b border-gold text-gold-l pb-1">
                Voltar ao blog →
              </Link>
            </div>
          ) : (
            <>
              {post.category && (
                <div className="font-urbanist text-[11px] uppercase tracking-[0.18em] mb-6 text-gold">{post.category}</div>
              )}
              <h1 className="font-sora text-[clamp(32px,5vw,56px)] font-[200] leading-[1.1] text-white">{post.title}</h1>
              {post.excerpt && (
                <p className="mt-8 font-urbanist text-[19px] font-[300] text-white/70 leading-relaxed">{post.excerpt}</p>
              )}
              <div className="mt-12 prose prose-invert prose-lg max-w-none font-urbanist font-[300] text-white/35 leading-[1.9] prose-headings:font-sora prose-headings:font-[200] prose-a:text-gold" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content || "", { FORBID_TAGS: ["script", "style", "iframe", "object", "embed", "form"], FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover", "onfocus", "onblur", "onchange", "onsubmit", "style"] }) }} />

              <div className="mt-24 p-12 border border-b18 bg-black-2 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold to-teal" />
                <p className="font-urbanist text-[11px] tracking-[0.22em] uppercase text-gold mb-4">Pronto para o próximo passo?</p>
                <h2 className="font-sora text-[clamp(24px,3vw,36px)] font-[200] text-white leading-tight mb-8">Avalie o seu caso com a MOOVIA.</h2>
                <Link to="/#contacto" className="bg-gold text-black font-urbanist text-[12px] font-bold tracking-[0.18em] uppercase px-10 py-5 relative overflow-hidden group/btn transition-all duration-300 inline-block">
                  <span className="relative z-10">Avaliar meu caso</span>
                  <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/btn:scale-x-100" />
                </Link>
              </div>

            </>
          )}
        </div>
      </article>
    </SiteLayout>
  );
}

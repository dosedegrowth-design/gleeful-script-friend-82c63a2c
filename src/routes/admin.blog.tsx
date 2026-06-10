import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Plus, 
  Search, 
  MoreHorizontal, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  Clock,
  Eye
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/blog")({
  component: AdminBlog,
});

function AdminBlog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (e) {
      toast.error("Erro ao carregar posts");
    } finally {
      setLoading(false);
    }
  }

  const filteredPosts = posts.filter(p => 
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-amotha text-4xl text-white mb-2">Gestão do Blog</h1>
          <p className="font-urbanist text-white-3 uppercase tracking-widest text-[11px]">Conteúdo e Educação Estratégica</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white-4" />
            <input
              type="text"
              placeholder="Pesquisar artigos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-black-2 border border-border text-white-2 pl-12 pr-4 py-3 font-urbanist text-sm min-w-[280px] outline-none focus:border-gold transition-colors"
            />
          </div>

          <button 
            className="bg-gold text-black px-8 py-3 hover:bg-gold-xl transition-colors flex items-center gap-2 font-urbanist text-[11px] uppercase tracking-[0.2em] font-bold"
          >
            <Plus size={16} /> Novo Post
          </button>
        </div>
      </div>

      <div className="bg-black-2 border border-border rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse font-urbanist">
          <thead>
            <tr className="bg-black-3 border-b border-border">
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Artigo</th>
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Status</th>
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Categoria</th>
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Publicação</th>
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post) => (
              <tr key={post.id} className="border-b border-border hover:bg-white/05 transition-colors group">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    {post.featured_image && (
                      <img src={post.featured_image} className="w-12 h-12 object-cover rounded border border-border" alt="" />
                    )}
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-gold transition-colors">{post.title}</p>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1 flex items-center gap-2">
                        <Clock size={10} /> {post.read_time || 5} min leitura
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <span className={cn(
                    "px-3 py-1 border rounded text-[9px] uppercase tracking-widest font-bold",
                    post.published ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-white/05 border-white/10 text-white/40"
                  )}>
                    {post.published ? "Publicado" : "Rascunho"}
                  </span>
                </td>
                <td className="p-6 text-xs text-white/60 uppercase tracking-widest">{post.category || "Geral"}</td>
                <td className="p-6 text-xs text-white/40">
                  {post.published_at ? format(new Date(post.published_at), "dd/MM/yyyy") : "—"}
                </td>
                <td className="p-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <a href={`/blog/${post.slug}`} target="_blank" className="p-2 text-white/20 hover:text-gold transition-colors"><Eye size={18} /></a>
                    <button className="p-2 text-white/20 hover:text-gold transition-colors"><MoreHorizontal size={20} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPosts.length === 0 && (
          <div className="py-20 text-center text-white/20 uppercase tracking-widest text-xs">Nenhum artigo encontrado.</div>
        )}
      </div>
    </div>
  );
}

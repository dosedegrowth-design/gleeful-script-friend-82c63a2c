import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Save, 
  History, 
  Eye, 
  Type, 
  Image as ImageIcon, 
  Code, 
  Layout, 
  ChevronRight,
  Database
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/content")({
  component: AdminContent,
});

const SECTIONS = [
  { id: 'hero', label: 'Homepage · Hero', icon: Layout },
  { id: 'problem', label: 'Homepage · Problema', icon: Type },
  { id: 'founders', label: 'Homepage · Fundadores', icon: ImageIcon },
  { id: 'process', label: 'Homepage · Processo', icon: Code },
  { id: 'footer', label: 'Global · Footer', icon: Database },
];

function AdminContent() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [content, setContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .order("key", { ascending: true });

      if (error) throw error;
      setContent(data || []);
    } catch (e) {
      toast.error("Erro ao carregar conteúdo");
    } finally {
      setLoading(false);
    }
  }

  const activeItems = content.filter(item => item.section === activeSection);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-amotha text-4xl text-white mb-2">CMS · Gestão de Conteúdo</h1>
        <p className="font-urbanist text-white-3 uppercase tracking-widest text-[11px]">Edição Dinâmica das Seções do Site</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="space-y-2">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded transition-all group",
                activeSection === section.id ? "bg-gold text-black font-bold" : "bg-black-2 border border-border text-white/40 hover:text-gold"
              )}
            >
              <div className="flex items-center gap-3">
                <section.icon size={18} />
                <span className="font-urbanist text-[11px] uppercase tracking-widest">{section.label}</span>
              </div>
              <ChevronRight size={14} className={cn("transition-transform", activeSection === section.id ? "rotate-90" : "")} />
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 space-y-8 bg-black-2 border border-border p-8 rounded-lg">
          <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
            <h3 className="font-amotha text-2xl text-white">{SECTIONS.find(s => s.id === activeSection)?.label}</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-border text-white/40 text-[10px] uppercase tracking-widest font-bold hover:border-gold hover:text-white transition-all"><History size={14} /> Histórico</button>
              <button className="flex items-center gap-2 px-6 py-2 bg-gold text-black text-[10px] uppercase tracking-widest font-bold hover:bg-gold-xl transition-all"><Save size={14} /> Salvar Tudo</button>
            </div>
          </div>

          <div className="space-y-10">
            {activeItems.length === 0 ? (
              <div className="py-20 text-center text-white/20 uppercase tracking-widest text-xs">Nenhum campo configurado para esta seção.</div>
            ) : (
              activeItems.map((item) => (
                <div key={item.key} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="font-urbanist text-[10px] uppercase tracking-[0.2em] text-gold font-bold">{item.label || item.key}</label>
                    <span className="text-[9px] text-white/20 uppercase">Chave: {item.key}</span>
                  </div>
                  {item.type === 'text' ? (
                    <input 
                      type="text" 
                      defaultValue={item.value}
                      className="w-full bg-black border border-border p-4 text-sm text-white/80 outline-none focus:border-gold transition-colors"
                    />
                  ) : item.type === 'richtext' ? (
                    <textarea 
                      defaultValue={item.value}
                      className="w-full h-32 bg-black border border-border p-4 text-sm text-white/80 outline-none focus:border-gold transition-colors resize-none"
                    />
                  ) : (
                    <div className="p-4 bg-black border border-border border-dashed text-center text-white/20 uppercase tracking-widest text-[10px]">
                      Campo do tipo {item.type} (não implementado no editor visual)
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

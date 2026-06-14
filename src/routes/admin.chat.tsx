import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  MessageSquare, 
  User, 
  Bot, 
  Calendar, 
  Clock, 
  ChevronRight,
  Filter,
  Search,
  UserCheck
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/chat")({
  component: AdminChat,
});

function AdminChat() {
  const [sessions, setSessions] = useState<any[]>([]);
  const [activeSession, setActiveSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSessions();
  }, []);

  async function fetchSessions() {
    try {
      const { data, error } = await supabase
        .from("chat_logs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      // Dedupe by session_id, keep latest snapshot per session
      const seen = new Set<string>();
      const unique = (data || []).filter((row: any) => {
        const key = row.session_id || row.id;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      setSessions(unique);
      if (unique.length > 0) setActiveSession(unique[0]);
    } catch (e) {
      toast.error("Erro ao carregar logs de chat");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-12 h-[calc(100vh-160px)] flex flex-col">
      <div>
        <h1 className="font-amotha text-4xl text-white mb-2">Chatbot Intelligence</h1>
        <p className="font-urbanist text-white-3 uppercase tracking-widest text-[11px]">Monitoramento e Análise de Conversas</p>
      </div>

      <div className="flex-1 flex gap-8 overflow-hidden">
        {/* Sessions Sidebar */}
        <div className="w-80 flex flex-col gap-4 bg-black-2 border border-border rounded-lg overflow-hidden">
          <div className="p-4 border-b border-border bg-black-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white-4" />
              <input 
                type="text" 
                placeholder="Pesquisar sessões..."
                className="w-full bg-black border border-border pl-10 pr-4 py-2 text-xs text-white outline-none focus:border-gold"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => setActiveSession(session)}
                className={cn(
                  "w-full p-6 text-left border-b border-border transition-all group",
                  activeSession?.id === session.id ? "bg-white/05" : "hover:bg-white/[0.02]"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">
                    {format(new Date(session.created_at), "HH:mm · d MMM", { locale: ptBR })}
                  </span>
                  {session.lead_captured && (
                    <div className="p-1 bg-gold/10 text-gold rounded" title="Lead capturado">
                      <UserCheck size={10} />
                    </div>
                  )}
                </div>
                <p className="text-xs text-white/70 font-urbanist line-clamp-1 group-hover:text-gold transition-colors">
                  {session.messages?.[session.messages.length - 1]?.content || "Conversa vazia"}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Conversation View */}
        <div className="flex-1 bg-black-2 border border-border rounded-lg flex flex-col overflow-hidden">
          {activeSession ? (
            <>
              <div className="p-6 border-b border-border bg-black-3 flex items-center justify-between">
                <div>
                  <h3 className="font-urbanist text-xs uppercase tracking-widest text-gold font-bold">Sessão: {activeSession.session_id.slice(0, 8)}...</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-[10px] text-white/30 flex items-center gap-1"><Clock size={10} /> {activeSession.duration_secs || 0}s duração</span>
                    <span className="text-[10px] text-white/30 flex items-center gap-1"><MessageSquare size={10} /> {activeSession.messages?.length || 0} mensagens</span>
                  </div>
                </div>
                {activeSession.lead_id && (
                  <a 
                    href={`/admin/leads?id=${activeSession.lead_id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-white/05 border border-white/05 text-[10px] uppercase tracking-widest text-white hover:text-gold transition-colors"
                  >
                    Ver Lead Vinculado <ChevronRight size={12} />
                  </a>
                )}
              </div>
              <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-[url('/noise.png')]">
                {activeSession.messages?.map((msg: any, i: number) => (
                  <div 
                    key={i} 
                    className={cn(
                      "max-w-[80%] flex gap-4",
                      msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                      msg.role === 'user' ? "bg-white/05 text-white/40" : "bg-gold text-black"
                    )}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={cn(
                      "p-5 rounded-lg border",
                      msg.role === 'user' ? "bg-black-3 border-border text-white/80 rounded-tr-none" : "bg-white/05 border-gold/20 text-white/90 rounded-tl-none border-l-4 border-l-gold"
                    )}>
                      <p className="font-urbanist text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-12">
              <MessageSquare size={48} className="text-white/10 mb-6" />
              <p className="text-white/20 uppercase tracking-widest text-xs font-bold font-urbanist">Selecione uma conversa para visualizar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

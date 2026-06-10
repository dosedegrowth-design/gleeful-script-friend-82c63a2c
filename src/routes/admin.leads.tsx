import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Loader2, 
  Search, 
  Download, 
  Plus, 
  LayoutGrid, 
  Table as TableIcon,
  Filter,
  MoreHorizontal,
  Phone,
  ArrowRight
} from "lucide-react";
import { toast } from "sonner";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { LeadDetailsDrawer } from "@/components/admin/LeadDetailsDrawer";

import { ptBR } from "date-fns/locale";

export const Route = createFileRoute("/admin/leads")({
  component: AdminCRM,
});

const STAGES = [
  { id: 'novo',           label: 'Novo',            color: '#ef4444' },
  { id: 'qualificado',    label: 'Qualificado',      color: '#f97316' },
  { id: 'conv_agendada',  label: 'Conversa Agendada',color: '#eab308' },
  { id: 'diagnostico',    label: 'Diagnóstico',      color: '#3b82f6' },
  { id: 'proposta',       label: 'Proposta Enviada', color: '#a855f7' },
  { id: 'mandato_ativo',  label: 'Mandato Ativo',    color: '#22c55e' },
  { id: 'frio',           label: 'Frio',             color: '#6b7280' },
];

function AdminCRM() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<'kanban' | 'table'>('kanban');
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState<any>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  async function fetchLeads() {
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (e) {
      toast.error("Erro ao carregar leads");
    } finally {
      setLoading(false);
    }
  }

  const filteredLeads = useMemo(() => {
    return leads.filter(l => 
      l.name?.toLowerCase().includes(search.toLowerCase()) ||
      l.email?.toLowerCase().includes(search.toLowerCase()) ||
      l.whatsapp?.includes(search)
    );
  }, [leads, search]);

  const onDragEnd = async (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newStatus = destination.droppableId;
    
    // Optimistic update
    const updatedLeads = leads.map(l => l.id === draggableId ? { ...l, status: newStatus } : l);
    setLeads(updatedLeads);

    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: newStatus })
        .eq("id", draggableId);
      
      if (error) throw error;
    } catch (e) {
      toast.error("Erro ao atualizar status");
      fetchLeads(); // Rollback
    }
  };

  const exportCSV = () => {
    const headers = ["Data", "Nome", "E-mail", "WhatsApp", "Objetivo", "Timing", "Status", "Temperatura"];
    const rows = filteredLeads.map(l => [
      format(new Date(l.created_at), "yyyy-MM-dd HH:mm"), 
      l.name, l.email, l.whatsapp, l.objective, l.timing, l.status, l.temperature
    ]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `moovia_crm_${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
  };

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-amotha text-4xl text-white mb-2">CRM · Pipeline de Vendas</h1>
          <p className="font-urbanist text-white-3 uppercase tracking-widest text-[11px]">Gerenciamento de Transições Internacionais</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex bg-black-2 border border-border p-1 rounded-md">
            <button 
              onClick={() => setView('kanban')}
              className={cn("p-2 rounded transition-all", view === 'kanban' ? "bg-gold text-black" : "text-white/40 hover:text-white")}
            >
              <LayoutGrid size={18} />
            </button>
            <button 
              onClick={() => setView('table')}
              className={cn("p-2 rounded transition-all", view === 'table' ? "bg-gold text-black" : "text-white/40 hover:text-white")}
            >
              <TableIcon size={18} />
            </button>
          </div>

          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white-4" />
            <input
              type="text"
              placeholder="Pesquisar leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-black-2 border border-border text-white-2 pl-12 pr-4 py-3 font-urbanist text-sm min-w-[280px] outline-none focus:border-gold transition-colors"
            />
          </div>

          <button 
            onClick={exportCSV}
            className="bg-black-2 border border-border text-white-3 px-6 py-3 hover:text-gold hover:border-gold transition-colors flex items-center gap-2 font-urbanist text-[11px] uppercase tracking-[0.2em] font-bold"
          >
            <Download size={16} /> Exportar
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-40">
          <Loader2 className="animate-spin text-gold" size={40} />
        </div>
      ) : view === 'kanban' ? (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-6 overflow-x-auto pb-8 min-h-[70vh]">
            {STAGES.map((stage) => (
              <div key={stage.id} className="flex-shrink-0 w-80 flex flex-col gap-6">
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stage.color }} />
                    <h3 className="font-urbanist font-bold text-[11px] uppercase tracking-[0.2em] text-white-2">{stage.label}</h3>
                  </div>
                  <span className="text-[10px] font-bold bg-white/05 px-2 py-1 border border-white/05 text-white/40 rounded-full">
                    {filteredLeads.filter(l => l.status === stage.id).length}
                  </span>
                </div>

                <Droppable droppableId={stage.id}>
                  {(provided, snapshot) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className={cn(
                        "flex-1 flex flex-col gap-4 p-2 rounded-lg transition-colors min-h-[500px]",
                        snapshot.isDraggingOver ? "bg-white/05" : "bg-transparent"
                      )}
                    >
                      {filteredLeads
                        .filter(l => (l.status || 'novo') === stage.id)
                        .map((lead, index) => (
                          <Draggable key={lead.id} draggableId={lead.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  ...provided.draggableProps.style,
                                } as React.CSSProperties}
                                onClick={() => setSelectedLead(lead)}
                                className={cn(
                                  "bg-black-2 border border-border p-5 group cursor-pointer hover:border-gold transition-all relative overflow-hidden",
                                  snapshot.isDragging ? "shadow-2xl border-gold ring-2 ring-gold/20" : "",
                                  lead.temperature === 'hot' ? "border-l-4 border-l-red-500" : 
                                  lead.temperature === 'warm' ? "border-l-4 border-l-orange-500" : "border-l-4 border-l-blue-500"
                                )}
                              >
                                <div className="flex justify-between items-start mb-4">
                                  <h4 className="font-amotha text-lg text-white group-hover:text-gold transition-colors">{lead.name}</h4>
                                  <div className={cn(
                                    "p-1.5 bg-white/05 rounded-full transition-transform group-hover:scale-110",
                                    lead.temperature === 'hot' ? "text-red-500" : "text-white/20"
                                  )}>
                                    <Phone size={12} />
                                  </div>
                                </div>
                                <div className="space-y-3 font-urbanist">
                                  <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed line-clamp-1">{lead.objective}</p>
                                  <div className="flex items-center justify-between pt-2 border-t border-white/05">
                                    <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold">
                                      {format(new Date(lead.created_at), "d 'de' MMM", { locale: ptBR })}
                                    </span>
                                    <div className="flex items-center gap-1 text-gold-l">
                                      <span className="text-[10px] font-bold uppercase tracking-tighter">Detalhes</span>
                                      <ArrowRight size={10} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </div>
        </DragDropContext>
      ) : (
        <div className="bg-black-2 border border-border rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse font-urbanist">
            <thead>
              <tr className="bg-black-3 border-b border-border">
                <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Data</th>
                <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Lead</th>
                <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Objetivo</th>
                <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Status</th>
                <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Temp.</th>
                <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} onClick={() => setSelectedLead(lead)} className="border-b border-border hover:bg-white/05 cursor-pointer transition-colors group">
                  <td className="p-6 text-xs text-white/40">{format(new Date(lead.created_at), "dd/MM/yyyy HH:mm")}</td>
                  <td className="p-6">
                    <p className="text-sm font-bold text-white group-hover:text-gold transition-colors">{lead.name}</p>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest mt-1">{lead.email}</p>
                  </td>
                  <td className="p-6 text-xs text-white/60">{lead.objective}</td>
                  <td className="p-6">
                    <span className="px-3 py-1 bg-white/05 border border-white/10 rounded text-[9px] uppercase tracking-widest text-white/40">
                      {STAGES.find(s => s.id === (lead.status || 'novo'))?.label}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      lead.temperature === 'hot' ? "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]" :
                      lead.temperature === 'warm' ? "bg-orange-500" : "bg-blue-500"
                    )} />
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-white/20 hover:text-gold transition-colors"><MoreHorizontal size={20} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedLead && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[950] animate-[fadeIn_0.3s_ease-in-out]" onClick={() => setSelectedLead(null)} />
          <LeadDetailsDrawer 
            lead={selectedLead} 
            onClose={() => setSelectedLead(null)} 
            onUpdate={fetchLeads}
          />
        </>
      )}
    </div>
  );
}

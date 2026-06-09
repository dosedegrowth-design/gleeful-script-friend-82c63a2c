import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Loader2, Search, Download, ExternalLink, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/leads")({
  component: AdminLeads,
});

const statusColors: Record<string, string> = {
  novo: "bg-red-500/10 text-red-500 border-red-500/20",
  qualificado: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  conversa_agendada: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  diagnostico: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  proposta: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  mandato_ativo: "bg-green-500 text-white border-green-600",
  frio: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const statusLabels: Record<string, string> = {
  novo: "Novo",
  qualificado: "Qualificado",
  conversa_agendada: "Conv. Agendada",
  diagnostico: "Diagnóstico",
  proposta: "Proposta",
  mandato_ativo: "Mandato Ativo",
  frio: "Frio",
};

function AdminLeads() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchLeads();
  }, []);

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate({ to: "/admin" });
    }
  }

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

  async function updateStatus(id: string, status: string) {
    try {
      const { error } = await supabase
        .from("leads")
        .update({ status })
        .eq("id", id);
      
      if (error) throw error;
      setLeads(leads.map(l => l.id === id ? { ...l, status } : l));
      toast.success("Status atualizado");
    } catch (e) {
      toast.error("Erro ao atualizar status");
    }
  }

  const filteredLeads = leads.filter(l => 
    l.name?.toLowerCase().includes(search.toLowerCase()) ||
    l.email?.toLowerCase().includes(search.toLowerCase()) ||
    l.whatsapp?.includes(search)
  );

  const exportCSV = () => {
    const headers = ["Data", "Nome", "E-mail", "WhatsApp", "Objetivo", "Timing", "Fase", "Status"];
    const rows = filteredLeads.map(l => [
      l.created_at, l.name, l.email, l.whatsapp, l.objective, l.timing, l.decision_phase, l.status
    ]);
    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `moovia_leads_${format(new Date(), "yyyy-MM-dd")}.csv`;
    link.click();
  };

  return (
    <SiteLayout>
      <div className="min-h-screen bg-black pt-32 pb-20 px-6 lg:px-[80px]">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="font-amotha text-4xl text-white mb-2">Gestão de Leads</h1>
              <p className="font-urbanist text-white-3 uppercase tracking-widest text-[11px]">MOOVIA Admin Dashboard</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white-4" />
                <input
                  type="text"
                  placeholder="Pesquisar leads..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-black-3 border border-border text-white-2 pl-12 pr-4 py-3 font-urbanist text-sm min-w-[300px] outline-none focus:border-gold transition-colors"
                />
              </div>
              <button 
                onClick={exportCSV}
                className="bg-black-3 border border-border text-white-3 p-3 hover:text-gold hover:border-gold transition-colors flex items-center gap-2 font-urbanist text-[12px] uppercase tracking-widest"
              >
                <Download size={18} />
                Exportar CSV
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-40">
              <Loader2 className="animate-spin text-gold" size={40} />
            </div>
          ) : (
            <div className="bg-black-2 border border-border overflow-hidden">
              <Table>
                <TableHeader className="bg-black-3">
                  <TableRow className="border-border">
                    <TableHead className="font-urbanist uppercase text-[10px] tracking-widest text-gold-l p-6">Data</TableHead>
                    <TableHead className="font-urbanist uppercase text-[10px] tracking-widest text-gold-l p-6">Lead</TableHead>
                    <TableHead className="font-urbanist uppercase text-[10px] tracking-widest text-gold-l p-6">Objetivo</TableHead>
                    <TableHead className="font-urbanist uppercase text-[10px] tracking-widest text-gold-l p-6">Timing</TableHead>
                    <TableHead className="font-urbanist uppercase text-[10px] tracking-widest text-gold-l p-6">Status</TableHead>
                    <TableHead className="font-urbanist uppercase text-[10px] tracking-widest text-gold-l p-6 text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLeads.map((lead) => (
                    <TableRow key={lead.id} className="border-border hover:bg-black-3 transition-colors group">
                      <TableCell className="p-6 font-urbanist text-sm text-white-3">
                        {lead.created_at ? format(new Date(lead.created_at), "dd MMM, HH:mm", { locale: ptBR }) : "-"}
                      </TableCell>
                      <TableCell className="p-6">
                        <div className="font-amotha text-lg text-white mb-1">{lead.name}</div>
                        <div className="flex flex-col gap-1">
                          <span className="font-urbanist text-[12px] text-white-4">{lead.email}</span>
                          <a 
                            href={`https://wa.me/${lead.whatsapp?.replace(/\D/g, '')}`} 
                            target="_blank" 
                            className="font-urbanist text-[12px] text-gold-l hover:text-gold flex items-center gap-1 w-fit"
                          >
                            {lead.whatsapp} <ExternalLink size={10} />
                          </a>
                        </div>
                      </TableCell>
                      <TableCell className="p-6 font-urbanist text-sm text-white-3">
                        {lead.objective}
                      </TableCell>
                      <TableCell className="p-6 font-urbanist text-sm text-white-3">
                        {lead.timing}
                      </TableCell>
                      <TableCell className="p-6">
                        <select
                          value={lead.status || "novo"}
                          onChange={(e) => updateStatus(lead.id, e.target.value)}
                          className={cn(
                            "bg-transparent border border-border rounded-sm p-2 font-urbanist text-[11px] uppercase tracking-widest outline-none",
                            statusColors[lead.status || "novo"]
                          )}
                        >
                          {Object.entries(statusLabels).map(([val, label]) => (
                            <option key={val} value={val} className="bg-black text-white">{label}</option>
                          ))}
                        </select>
                      </TableCell>
                      <TableCell className="p-6 text-right">
                        <button className="text-white-4 hover:text-gold transition-colors p-2" title="Ver notas">
                          <MessageSquare size={18} />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {filteredLeads.length === 0 && (
                <div className="py-20 text-center font-urbanist text-white-4">Nenhum lead encontrado.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </SiteLayout>
  );
}
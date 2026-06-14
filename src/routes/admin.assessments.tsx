import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  Package, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Euro, 
  FileText,
  Search,
  MoreHorizontal
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/assessments")({
  component: AdminAssessments,
});

function AdminAssessments() {
  const [assessments, setAssessments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssessments();
  }, []);

  async function fetchAssessments() {
    try {
      const { data, error } = await supabase
        .from("assessments")
        .select("*, leads(name)")
        .order("scheduled_at", { ascending: false });

      if (error) throw error;
      setAssessments(data || []);
    } catch (e: any) {
      console.error("[admin.assessments] fetch error:", e);
      toast.error(`Erro ao carregar assessments: ${e?.message || e}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-amotha text-4xl text-white mb-2">Assessments Tracker</h1>
          <p className="font-urbanist text-white-3 uppercase tracking-widest text-[11px]">Gestão de Diagnósticos e Agendamentos</p>
        </div>
        
        <button className="bg-gold text-black px-8 py-3 hover:bg-gold-xl transition-colors flex items-center gap-2 font-urbanist text-[11px] uppercase tracking-[0.2em] font-bold">
          <Calendar size={16} /> Novo Agendamento
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-black-2 border border-border p-6 rounded-lg">
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Agendados</p>
          <p className="font-amotha text-3xl text-white">{assessments.filter(a => a.status === 'agendado').length}</p>
        </div>
        <div className="bg-black-2 border border-border p-6 rounded-lg">
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Realizados</p>
          <p className="font-amotha text-3xl text-white">{assessments.filter(a => a.status === 'realizado').length}</p>
        </div>
        <div className="bg-black-2 border border-border p-6 rounded-lg">
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Receita Total</p>
          <p className="font-amotha text-3xl text-gold">€{(assessments.filter(a => a.payment_status === 'pago').reduce((acc, curr) => acc + Number(curr.amount_eur), 0)).toLocaleString()}</p>
        </div>
        <div className="bg-black-2 border border-border p-6 rounded-lg">
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Conversão para Mandato</p>
          <p className="font-amotha text-3xl text-white-2">{assessments.length ? ((assessments.filter(a => a.converted_to_mandato).length / assessments.length) * 100).toFixed(1) : 0}%</p>
        </div>
      </div>

      <div className="bg-black-2 border border-border rounded-lg overflow-x-auto">
        <table className="w-full min-w-[640px] text-left border-collapse font-urbanist">
          <thead>
            <tr className="bg-black-3 border-b border-border">
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Cliente</th>
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Data Agendada</th>
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Status</th>
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l">Pagamento</th>
              <th className="p-6 text-[10px] uppercase tracking-[0.2em] font-bold text-gold-l text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((a) => (
              <tr key={a.id} className="border-b border-border hover:bg-white/05 transition-colors group">
                <td className="p-6">
                  <p className="text-sm font-bold text-white group-hover:text-gold transition-colors">{a.leads?.name || "Desconhecido"}</p>
                </td>
                <td className="p-6 text-xs text-white/60">
                  {a.scheduled_at ? format(new Date(a.scheduled_at), "dd/MM/yyyy · HH:mm") : "Não agendado"}
                </td>
                <td className="p-6">
                  <span className={cn(
                    "px-3 py-1 border rounded text-[9px] uppercase tracking-widest font-bold",
                    a.status === 'realizado' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" :
                    a.status === 'agendado' ? "bg-blue-500/10 border-blue-500/20 text-blue-400" : "bg-white/05 border-white/10 text-white/40"
                  )}>
                    {a.status}
                  </span>
                </td>
                <td className="p-6">
                  <span className={cn(
                    "px-3 py-1 border rounded text-[9px] uppercase tracking-widest font-bold",
                    a.payment_status === 'pago' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-red-500/10 border-red-500/20 text-red-400"
                  )}>
                    {a.payment_status}
                  </span>
                </td>
                <td className="p-6 text-right">
                  <button className="p-2 text-white/20 hover:text-gold transition-colors"><MoreHorizontal size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {assessments.length === 0 && (
          <div className="py-20 text-center text-white/20 uppercase tracking-widest text-xs">Nenhum assessment registrado.</div>
        )}
      </div>
    </div>
  );
}

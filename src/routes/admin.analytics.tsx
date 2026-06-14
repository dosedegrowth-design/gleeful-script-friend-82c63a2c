import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  PieChart, 
  Pie, 
  Cell,
  LineChart,
  Line
} from "recharts";
import { 
  BarChart3, 
  TrendingUp, 
  Smartphone, 
} from "lucide-react";

export const Route = createFileRoute("/admin/analytics")({
  component: AdminAnalytics,
});

const COLORS = ['#ad8957', '#407e8d', '#cead84', '#e8d5b0', '#1a1d26'];

function AdminAnalytics() {
  const [devices, setDevices] = useState<{ name: string; value: number }[]>([]);
  const [tempTrend, setTempTrend] = useState<any[]>([]);
  const [revenue, setRevenue] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const [{ data: leads }, { data: mandatos }] = await Promise.all([
        supabase.from("leads").select("device, temperature, created_at"),
        supabase.from("mandatos").select("value_eur, created_at"),
      ]);

      // Devices
      const devCounts: Record<string, number> = {};
      (leads || []).forEach((l: any) => {
        const k = (l.device || 'Desconhecido').toString();
        devCounts[k] = (devCounts[k] || 0) + 1;
      });
      setDevices(Object.entries(devCounts).map(([name, value]) => ({ name, value })));

      // Temperature trend (last 6 months)
      const months = Array.from({ length: 6 }, (_, i) => {
        const d = new Date();
        d.setMonth(d.getMonth() - (5 - i));
        return { key: `${d.getFullYear()}-${d.getMonth()}`, month: d.toLocaleString('pt-BR', { month: 'short' }), hot: 0, warm: 0, cold: 0 };
      });
      (leads || []).forEach((l: any) => {
        if (!l.created_at) return;
        const d = new Date(l.created_at);
        const k = `${d.getFullYear()}-${d.getMonth()}`;
        const slot = months.find(x => x.key === k);
        if (!slot) return;
        const t = (l.temperature || 'cold') as 'hot' | 'warm' | 'cold';
        slot[t] = (slot[t] || 0) + 1;
      });
      setTempTrend(months);

      // Revenue actual vs target
      const revMonths = months.map(m => ({ category: m.month, actual: 0, target: 20000, key: m.key }));
      (mandatos || []).forEach((m: any) => {
        if (!m.created_at) return;
        const d = new Date(m.created_at);
        const k = `${d.getFullYear()}-${d.getMonth()}`;
        const slot = revMonths.find(x => x.key === k);
        if (slot) slot.actual += Number(m.value_eur || 0);
      });
      setRevenue(revMonths);
    }
    load();
  }, []);

  return (
    <div className="space-y-12 pb-20">
      <div>
        <h1 className="font-amotha text-4xl text-white mb-2">Analytics & Revenue</h1>
        <p className="font-urbanist text-white-3 uppercase tracking-widest text-[11px]">Inteligência de Tráfego e Conversão</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Device Distribution */}
        <div className="bg-black-2 border border-border p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-8">
            <Smartphone size={18} className="text-gold" />
            <h3 className="font-amotha text-xl text-white">Dispositivos</h3>
          </div>
          <div className="h-[250px] flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={devices.length ? devices : [{ name: 'Sem dados', value: 1 }]}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1d26', border: '1px solid rgba(173,137,87,0.18)' }}
                />
                <Legend verticalAlign="middle" align="right" layout="vertical" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Temperature over time */}
        <div className="bg-black-2 border border-border p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp size={18} className="text-gold" />
            <h3 className="font-amotha text-xl text-white">Qualidade dos Leads</h3>
          </div>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={[
                  { month: 'Jan', hot: 12, warm: 24, cold: 45 },
                  { month: 'Fev', hot: 18, warm: 32, cold: 38 },
                  { month: 'Mar', hot: 15, warm: 28, cold: 52 },
                  { month: 'Abr', hot: 25, warm: 45, cold: 40 },
                  { month: 'Mai', hot: 22, warm: 38, cold: 35 },
                  { month: 'Jun', hot: 31, warm: 52, cold: 48 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="month" stroke="#ffffff20" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="#ffffff20" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1d26', border: '1px solid rgba(173,137,87,0.18)' }}
                />
                <Legend />
                <Line type="monotone" dataKey="hot" stroke="#ef4444" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="warm" stroke="#f97316" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="cold" stroke="#3b82f6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Projection */}
        <div className="bg-black-2 border border-border p-8 rounded-lg lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 size={18} className="text-gold" />
            <h3 className="font-amotha text-xl text-white">Pipeline Value vs Goal</h3>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { category: 'Jan', actual: 12000, target: 15000 },
                  { category: 'Fev', actual: 18500, target: 15000 },
                  { category: 'Mar', actual: 15200, target: 15000 },
                  { category: 'Abr', actual: 25400, target: 20000 },
                  { category: 'Mai', actual: 22100, target: 20000 },
                  { category: 'Jun', actual: 31000, target: 25000 },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="category" stroke="#ffffff20" fontSize={10} axisLine={false} tickLine={false} />
                <YAxis stroke="#ffffff20" fontSize={10} axisLine={false} tickLine={false} tickFormatter={(val) => `€${val/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1d26', border: '1px solid rgba(173,137,87,0.18)' }}
                />
                <Legend />
                <Bar dataKey="actual" fill="#ad8957" radius={[4, 4, 0, 0]} />
                <Bar dataKey="target" fill="rgba(249,245,236,0.05)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

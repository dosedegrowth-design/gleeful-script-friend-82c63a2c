import { createFileRoute } from "@tanstack/react-router";
import { KPICards } from "@/components/admin/KPICards";
import { ActivityFeed } from "@/components/admin/ActivityFeed";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  BarChart,
  Bar,
  Cell,
  Legend,
  FunnelChart,
  Funnel,
  LabelList
} from "recharts";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [funnelData, setFunnelData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFunnel() {
      // Aggregate data from funnel_events and CRM tables
      // For now, using mock data that follows the structure
      const data = [
        { value: 8432, name: 'Visitas', fill: '#8884d8' },
        { value: 1241, name: 'Forms Iniciados', fill: '#83a6ed' },
        { value: 347, name: 'Forms Submetidos', fill: '#8dd1e1' },
        { value: 189, name: 'Conversas Agendadas', fill: '#82ca9d' },
        { value: 67, name: 'Assessments Pagos', fill: '#a4de6c' },
        { value: 23, name: 'Mandatos Ativos', fill: '#d0ed57' },
      ];
      setFunnelData(data);
    }
    fetchFunnel();
  }, []);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="font-amotha text-4xl text-white mb-2">Dashboard Operacional</h1>
        <p className="font-urbanist text-white-3 uppercase tracking-widest text-[11px]">Bem-vindo de volta, Frederico</p>
      </div>

      <KPICards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Funnel Section */}
          <div className="bg-black-2 border border-border p-8 rounded-lg">
            <h3 className="font-amotha text-2xl text-white mb-8">Funil de Conversão (End-to-End)</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <FunnelChart>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1d26', borderColor: 'rgba(173,137,87,0.18)', color: '#fff' }}
                    itemStyle={{ color: '#ad8957' }}
                  />
                  <Funnel
                    dataKey="value"
                    data={funnelData}
                    isAnimationActive
                  >
                    <LabelList position="right" fill="#ad8957" stroke="none" dataKey="name" />
                    <LabelList position="center" fill="#000" stroke="none" dataKey="value" />
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Chart Section */}
          <div className="bg-black-2 border border-border p-8 rounded-lg">
            <h3 className="font-amotha text-2xl text-white mb-8">Receita Estimada (Últimos 6 meses)</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={[
                    { name: 'Jan', revenue: 12000 },
                    { name: 'Fev', revenue: 18500 },
                    { name: 'Mar', revenue: 15200 },
                    { name: 'Abr', revenue: 25400 },
                    { name: 'Mai', revenue: 22100 },
                    { name: 'Jun', revenue: 31000 },
                  ]}
                >
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ad8957" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ad8957" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="name" stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#ffffff20" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `€${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1d26', borderColor: 'rgba(173,137,87,0.18)', border: '1px solid' }}
                    itemStyle={{ color: '#ad8957' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#ad8957" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <ActivityFeed />
          
          <div className="bg-black-2 border border-border p-8 rounded-lg">
            <h3 className="font-amotha text-xl text-white mb-6">Origem dos Leads</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={[
                    { name: 'Organic', value: 45, color: '#ad8957' },
                    { name: 'LinkedIn', value: 32, color: '#407e8d' },
                    { name: 'Direct', value: 18, color: '#f9f5ec' },
                    { name: 'Referral', value: 12, color: '#cead84' },
                    { name: 'WhatsApp', value: 9, color: '#22c55e' },
                  ]}
                >
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#ffffff40" fontSize={10} axisLine={false} tickLine={false} width={80} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#1a1d26', borderColor: '#ad895733' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                    {
                      [1,2,3,4,5].map((entry, index) => (
                        <Cell key={`cell-${index}`} />
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
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
  Users, 
  MousePointer2, 
  Globe2, 
  Smartphone, 
  Laptop
} from "lucide-react";

export const Route = createFileRoute("/admin/analytics")({
  component: AdminAnalytics,
});

const COLORS = ['#ad8957', '#407e8d', '#cead84', '#e8d5b0', '#1a1d26'];

function AdminAnalytics() {
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
                  data={[
                    { name: 'Desktop', value: 58 },
                    { name: 'Mobile', value: 35 },
                    { name: 'Tablet', value: 7 },
                  ]}
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

import { createFileRoute } from "@tanstack/react-router";
import { 
  Settings, 
  Shield, 
  Code, 
  Globe, 
  Save, 
  Link as LinkIcon,
  Bell,
  Wallet
} from "lucide-react";

export const Route = createFileRoute("/admin/settings")({
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <div className="space-y-12 max-w-4xl">
      <div>
        <h1 className="font-amotha text-4xl text-white mb-2">Configurações</h1>
        <p className="font-urbanist text-white-3 uppercase tracking-widest text-[11px]">Gestão Estratégica do Sistema</p>
      </div>

      <div className="space-y-8 bg-black-2 border border-border p-10 rounded-lg">
        <div className="flex items-center gap-3 mb-10 border-b border-border pb-6">
          <Globe size={20} className="text-gold" />
          <h3 className="font-amotha text-2xl text-white">Integrações Globais</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <label className="font-urbanist text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Calendly URL</label>
            <input 
              type="text" 
              placeholder="https://calendly.com/frederico-prado"
              className="w-full bg-black border border-border p-4 text-sm text-white/80 outline-none focus:border-gold transition-colors"
            />
          </div>
          <div className="space-y-3">
            <label className="font-urbanist text-[10px] uppercase tracking-[0.2em] text-gold font-bold">WhatsApp Operacional</label>
            <input 
              type="text" 
              placeholder="+351 9XX XXX XXX"
              className="w-full bg-black border border-border p-4 text-sm text-white/80 outline-none focus:border-gold transition-colors"
            />
          </div>
          <div className="space-y-3">
            <label className="font-urbanist text-[10px] uppercase tracking-[0.2em] text-gold font-bold">GA4 Measurement ID</label>
            <input 
              type="text" 
              placeholder="G-XXXXXXXXXX"
              className="w-full bg-black border border-border p-4 text-sm text-white/80 outline-none focus:border-gold transition-colors"
            />
          </div>
          <div className="space-y-3">
            <label className="font-urbanist text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Meta Pixel ID</label>
            <input 
              type="text" 
              placeholder="XXXXXXXXXXXXXX"
              className="w-full bg-black border border-border p-4 text-sm text-white/80 outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        <div className="pt-10 flex justify-end">
          <button className="flex items-center gap-2 px-10 py-4 bg-gold text-black text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-gold-xl transition-all">
            <Save size={16} /> Salvar Alterações
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-black-2 border border-border p-8 rounded-lg group hover:border-gold transition-colors cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <Shield size={24} className="text-gold" />
            <h4 className="font-amotha text-xl text-white">Equipe e Permissões</h4>
          </div>
          <p className="font-urbanist text-xs text-white/40 leading-relaxed uppercase tracking-widest">Gerenciar usuários administrativos e níveis de acesso RBAC.</p>
        </div>

        <div className="bg-black-2 border border-border p-8 rounded-lg group hover:border-gold transition-colors cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <Code size={24} className="text-gold" />
            <h4 className="font-amotha text-xl text-white">Scripts Dinâmicos</h4>
          </div>
          <p className="font-urbanist text-xs text-white/40 leading-relaxed uppercase tracking-widest">Injetar tags de marketing, pixels e widgets personalizados no head/body.</p>
        </div>

        <div className="bg-black-2 border border-border p-8 rounded-lg group hover:border-gold transition-colors cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <Bell size={24} className="text-gold" />
            <h4 className="font-amotha text-xl text-white">Notificações</h4>
          </div>
          <p className="font-urbanist text-xs text-white/40 leading-relaxed uppercase tracking-widest">Configurar alertas via E-mail e Push para novos leads quentes.</p>
        </div>

        <div className="bg-black-2 border border-border p-8 rounded-lg group hover:border-gold transition-colors cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <Wallet size={24} className="text-gold" />
            <h4 className="font-amotha text-xl text-white">Financeiro</h4>
          </div>
          <p className="font-urbanist text-xs text-white/40 leading-relaxed uppercase tracking-widest">Taxas de câmbio, valores de mandatos e integrações de pagamento.</p>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminLogin,
});

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      toast.success("Login realizado com sucesso");
      navigate({ to: "/admin/leads" });
    } catch (error: any) {
      toast.error(error.message || "Erro ao realizar login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <Reveal>
          <div className="w-full max-w-md bg-black-2 border border-border p-10 lg:p-12">
            <div className="text-center mb-10">
              <h1 className="font-amotha text-3xl text-white mb-2">Painel Admin</h1>
              <p className="font-urbanist text-[13px] tracking-widest uppercase text-gold">MOOVIA Portugal</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block font-urbanist text-[11px] uppercase tracking-widest text-white-3 mb-2">E-mail</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black-3 border border-border text-white p-4 font-urbanist text-sm outline-none focus:border-gold transition-colors"
                  placeholder="admin@mooviaportugal.com"
                />
              </div>
              
              <div>
                <label className="block font-urbanist text-[11px] uppercase tracking-widest text-white-3 mb-2">Senha</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-black-3 border border-border text-white p-4 pr-12 font-urbanist text-sm outline-none focus:border-gold transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white-3 hover:text-gold"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-black font-urbanist text-[12px] font-bold uppercase tracking-[0.2em] py-5 mt-4 hover:bg-gold-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="animate-spin" size={16} />}
                Entrar no sistema
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </SiteLayout>
  );
}
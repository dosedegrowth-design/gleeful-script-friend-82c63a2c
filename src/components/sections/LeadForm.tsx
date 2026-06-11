import { useState, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const selectFields = [
  { 
    name: "objective", 
    placeholder: "Qual o seu objetivo principal?", 
    options: ["Mudar com a família", "Investir e estruturar património", "Estudo dos filhos", "Aposentadoria em Portugal"] 
  },
  { 
    name: "timing", 
    placeholder: "Quando pretende mudar?", 
    options: ["Nos próximos 3 meses", "3 a 6 meses", "6 a 12 meses", "Ainda pesquisando"] 
  },
  { 
    name: "composition", 
    placeholder: "Quantas pessoas participam da mudança?", 
    options: ["Apenas eu", "Casal", "Família com filhos"] 
  },
  { 
    name: "decision_phase", 
    placeholder: "Em que fase da decisão está?", 
    options: ["Só começando a pensar", "Decidido, organizando", "Pronto para executar"] 
  },
];

export function LeadForm() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("moovia_partial_lead");
    if (saved) {
      try {
        setForm(JSON.parse(saved));
      } catch (e) {
        console.error("Error restoring partial lead", e);
      }
    }
  }, []);

  useEffect(() => {
    if (Object.keys(form).length > 0 && !submitted) {
      sessionStorage.setItem("moovia_partial_lead", JSON.stringify(form));
    }
  }, [form, submitted]);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    try {
      if (!form.name || form.name.trim().length < 3) throw new Error("Por favor, insira o seu nome completo.");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!form.email || !emailRegex.test(form.email)) throw new Error("Por favor, insira um e-mail válido.");
      if (!form.whatsapp || form.whatsapp.length < 8) throw new Error("Por favor, insira um WhatsApp válido.");

      const sid = localStorage.getItem("moovia_session");
      const utm = JSON.parse(localStorage.getItem("moovia_utm") || "{}");
      const history = JSON.parse(localStorage.getItem("moovia_history") || "[]");

      const { error } = await supabase.from("leads").insert({
        ...form,
        source: "website_form",
        session_id: sid,
        utm_source: utm.source,
        utm_medium: utm.medium,
        utm_campaign: utm.campaign,
        page_history: history,
      });

      if (error) throw error;

      sessionStorage.removeItem("moovia_partial_lead");
      setSubmitted(true);
      toast.success("Mensagem enviada com sucesso!");
    } catch (error: any) {
      console.error("Form submission error:", error);
      const message = error.message || "Não conseguimos registrar agora. Tente novamente em instantes.";
      setErr(message);
      toast.error(message);
      reportLovableError(error, { component: "LeadForm", action: "submit" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const calendlyUrl = `https://calendly.com/moovia-portugal/conversa-gratuita?name=${encodeURIComponent(form.name || "")}&email=${encodeURIComponent(form.email || "")}`;
    return (
      <div className="p-10 md:p-14 bg-black-3 border border-border animate-[fadeUp_0.8s_ease_forwards]">
        <p className="font-urbanist text-[11px] tracking-[0.22em] uppercase text-gold mb-4">Recebido</p>
        <h3 className="font-amotha text-4xl font-extralight text-gold-l mb-5 leading-tight tracking-tight">
          Recebemos o seu caso, {form.name?.split(" ")[0] || "obrigado"}.
        </h3>
        <p className="font-urbanist text-[16px] font-light text-white-3 leading-relaxed mb-8">
          O Frederico vai analisar o seu perfil e entrar em contacto pessoalmente. Enquanto isso,
          pode agendar diretamente a sua Conversa Gratuita:
        </p>
        <div className="aspect-[4/5] md:aspect-[16/10] border border-border bg-black/40">
          <iframe src={calendlyUrl} className="w-full h-full" title="Calendly" />
        </div>
        <a href="https://wa.me/351913000000" target="_blank" rel="noopener noreferrer" className="mt-10 block text-center font-urbanist text-[13px] uppercase tracking-[0.14em] text-gold-l hover:text-gold transition-colors font-medium">
          Prefere WhatsApp? →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-1.5">
      {selectFields.map((f) => (
        <Select key={f.name} onValueChange={(v) => set(f.name, v)} value={form[f.name] || ""}>
          <SelectTrigger>
            <SelectValue placeholder={f.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {f.options.map((o) => (
              <SelectItem key={o} value={o}>{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
      <input 
        required 
        placeholder="Seu nome completo"
        value={form.name || ""} 
        onChange={(e) => set("name", e.target.value)} 
        className="w-full bg-black-3 border border-border text-white-2 font-urbanist text-[15px] font-light p-[18px_20px] outline-none transition-all duration-300 focus:border-gold focus:bg-black/80" 
      />
      <input 
        required 
        type="tel" 
        placeholder="WhatsApp com código do país — ex: +55 11 99999-9999" 
        value={form.whatsapp || ""} 
        onChange={(e) => set("whatsapp", e.target.value)} 
        className="w-full bg-black-3 border border-border text-white-2 font-urbanist text-[15px] font-light p-[18px_20px] outline-none transition-all duration-300 focus:border-gold focus:bg-black/80" 
      />
      <input 
        required 
        type="email" 
        placeholder="E-mail"
        value={form.email || ""} 
        onChange={(e) => set("email", e.target.value)} 
        className="w-full bg-black-3 border border-border text-white-2 font-urbanist text-[15px] font-light p-[18px_20px] outline-none transition-all duration-300 focus:border-gold focus:bg-black/80" 
      />
      <textarea 
        placeholder="Conte brevemente o seu caso (opcional)"
        rows={3} 
        value={form.message || ""} 
        onChange={(e) => set("message", e.target.value)} 
        className="w-full bg-black-3 border border-border text-white-2 font-urbanist text-[15px] font-light p-[18px_20px] outline-none transition-all duration-300 focus:border-gold focus:bg-black/80 resize-none min-h-[100px]" 
      />

      {err && <p className="text-sm text-red-500 mt-2">{err}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-gold text-black font-urbanist text-[13px] font-bold tracking-[0.22em] uppercase px-10 py-5 relative overflow-hidden group transition-all duration-300 mt-2 disabled:opacity-60"
      >
        <span className="relative z-10">{loading ? "A enviar…" : "Enviar e aguardar retorno"}</span>
        <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </button>
      <div className="mt-8 text-center">
        <a 
          href="https://calendly.com/moovia-portugal/conversa-gratuita" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-urbanist text-[12px] tracking-[0.12em] uppercase text-white-3 hover:text-gold transition-colors"
        >
          Já decidiu? → <span className="text-gold border-b border-gold/30">Marcar Conversa Gratuita diretamente</span>
        </a>
      </div>
    </form>
  );
}
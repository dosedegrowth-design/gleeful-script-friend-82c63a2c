import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { reportLovableError } from "@/lib/lovable-error-reporting";

const selectFields = [
  { name: "objective", placeholder: "Qual o seu objetivo principal?", options: ["Trabalhar em Portugal", "Estudar", "Mudar com a família", "Investir", "Outro"] },
  { name: "timing", placeholder: "Quando pretende mudar?", options: ["Menos de 3 meses", "3 a 6 meses", "6 a 12 meses", "Ainda estou pesquisando"] },
  { name: "composition", placeholder: "Quantas pessoas participam da mudança?", options: ["Apenas eu", "Casal", "Família com filhos", "Tenho animais de estimação"] },
  { name: "decision_phase", placeholder: "Em que fase da sua decisão está?", options: ["Apenas pesquisando", "Comparando alternativas", "Já tomei a decisão", "Já tenho proposta confirmada"] },
];

export function LeadForm() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    try {
      // Basic validation
      if (!form.name || !form.email || !form.whatsapp) {
        throw new Error("Por favor, preencha todos os campos obrigatórios.");
      }

      const { error } = await supabase.from("leads").insert({
        ...form,
        source: "website_form",
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success("Mensagem enviada com sucesso!");
    } catch (error: any) {
      console.error("Form submission error:", error);
      const message = error.message || "Não conseguimos registrar agora. Tente novamente em instantes.";
      setErr(message);
      toast.error(message);
      reportLovableError(error, { 
        component: "LeadForm", 
        action: "submit",
        formData: { ...form, email: "REDACTED" } // Privacy-conscious reporting
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const calendlyUrl = `https://calendly.com/moovia-portugal/conversa-gratuita?name=${encodeURIComponent(form.name || "")}&email=${encodeURIComponent(form.email || "")}`;
    return (
      <div className="p-10 md:p-14 bg-black-3 border border-border">
        <p className="font-urbanist text-[11px] tracking-[0.22em] uppercase text-gold mb-4">Recebido</p>
        <h3 className="font-sora text-3xl font-extralight text-white mb-5 leading-tight">
          Recebemos o seu caso, {form.name?.split(" ")[0] || "obrigado"}.
        </h3>
        <p className="font-urbanist text-[16px] font-light text-white-3 leading-relaxed mb-8">
          O Frederico vai analisar o seu perfil e entrar em contacto pessoalmente. Enquanto isso,
          pode agendar diretamente a sua Conversa Gratuita:
        </p>
        <div className="aspect-[4/5] md:aspect-[16/10] border border-border">
          <iframe src={calendlyUrl} className="w-full h-full" title="Calendly" />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-1">
      {selectFields.map((f) => (
        <div key={f.name} className="relative">
          <select
            required
            value={form[f.name] || ""}
            onChange={(e) => set(f.name, e.target.value)}
            className="w-full bg-black-3 border border-border text-white-2 font-urbanist text-[15px] font-light p-[18px_20px] outline-none transition-all duration-300 focus:border-gold focus:bg-black/80 appearance-none"
          >
            <option value="" disabled>{f.placeholder}</option>
            {f.options.map((o) => <option key={o} value={o} className="bg-black-3">{o}</option>)}
          </select>
        </div>
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
        rows={4} 
        value={form.message || ""} 
        onChange={(e) => set("message", e.target.value)} 
        className="w-full bg-black-3 border border-border text-white-2 font-urbanist text-[15px] font-light p-[18px_20px] outline-none transition-all duration-300 focus:border-gold focus:bg-black/80 resize-none min-h-[100px]" 
      />

      {err && <p className="text-sm text-red-500 mt-2">{err}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-gold text-black font-urbanist text-[13px] font-semibold tracking-[0.22em] uppercase px-10 py-5 relative overflow-hidden group transition-all duration-300 mt-2 disabled:opacity-60"
      >
        <span className="relative z-10">{loading ? "A enviar…" : "Enviar e aguardar retorno"}</span>
        <div className="absolute inset-0 bg-gold-xl origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </button>
    </form>
  );
}

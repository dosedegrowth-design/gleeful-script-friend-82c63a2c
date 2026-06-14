import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WhatsappLogo, ArrowRight } from "@phosphor-icons/react";

const selectFields = [
  { 
    name: "objective", 
    placeholder: "Qual o seu objetivo principal?", 
    options: ["Trabalhar em Portugal", "Estudar em Portugal", "Mudar com a família", "Investir em imóveis", "Aposentadoria em Portugal", "Outro"] 
  },
  { 
    name: "timing", 
    placeholder: "Quando pretende mudar?", 
    options: ["Menos de 3 meses (urgente)", "3 a 6 meses", "6 a 12 meses", "Mais de 1 ano", "Ainda estou pesquisando"] 
  },
  { 
    name: "composition", 
    placeholder: "Quantas pessoas participam da mudança?", 
    options: ["Apenas eu", "Casal", "Família com filhos", "Família com filhos e pets", "Projeto individual"] 
  },

  { 
    name: "decision_phase", 
    placeholder: "Em que fase da decisão está?", 
    options: ["Apenas pesquisando", "Comparando Portugal com outras opções", "Já decidi Portugal, planejando quando", "Tomei a decisão, preciso agir", "Já tenho proposta ou contrato assinado"] 
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
      try { setForm(JSON.parse(saved)); } catch (e) { console.error(e); }
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
      if (!form.name || form.name.trim().length < 3) throw new Error("Insira seu nome completo.");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!form.email || !emailRegex.test(form.email)) throw new Error("E-mail inválido.");
      if (!form.whatsapp || form.whatsapp.length < 8) throw new Error("WhatsApp inválido.");

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
      toast.success("Recebemos seu caso!");
    } catch (error: any) {
      const message = error.message || "Tente novamente em instantes.";
      setErr(message);
      toast.error(message);
      reportLovableError(error, { component: "LeadForm", action: "submit" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bento-card p-10 lg:p-14 bg-navy-rich relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectFields.map((f) => (
                  <Select key={f.name} onValueChange={(v) => set(f.name, v)} value={form[f.name] || ""}>
                    <SelectTrigger className="w-full bg-navy-deep/50 border-0 border-b border-line-cool text-off font-body text-[14px] font-[300] h-[54px] px-0 outline-none transition-all duration-300 focus:border-cobre focus:ring-0 focus:bg-navy-raise/30 rounded-none">
                      <SelectValue placeholder={f.placeholder} />
                    </SelectTrigger>
                    <SelectContent className="bg-navy-rich border border-line-cool text-off font-body">
                      {f.options.map((o) => (
                        <SelectItem key={o} value={o} className="focus:bg-cobre/10 focus:text-latte">{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              </div>

              <div className="space-y-4 pt-4">
                {[
                  { id: "name", label: "Seu nome completo", type: "text" },
                  { id: "whatsapp", label: "WhatsApp (ex: +55 11 99999-9999)", type: "tel" },
                  { id: "email", label: "E-mail", type: "email" }
                ].map((input) => (
                  <div key={input.id} className="relative group">
                    <input 
                      required 
                      type={input.type}
                      id={input.id}
                      placeholder={input.label}
                      value={form[input.id] || ""} 
                      onChange={(e) => set(input.id, e.target.value)} 
                      className="peer w-full bg-transparent border-0 border-b border-line-cool text-off font-body text-[15px] font-[300] py-4 outline-none transition-all duration-300 focus:border-cobre placeholder:text-transparent" 
                    />
                    <label 
                      htmlFor={input.id}
                      className="absolute left-0 top-4 text-mut font-body text-[15px] font-[300] pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-cobre peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-cobre"
                    >
                      {input.label}
                    </label>
                  </div>
                ))}

                <div className="relative group pt-2">
                  <textarea 
                    id="message"
                    placeholder="Conte brevemente o seu caso (opcional)"
                    rows={2} 
                    value={form.message || ""} 
                    onChange={(e) => set("message", e.target.value)} 
                    className="peer w-full bg-transparent border-0 border-b border-line-cool text-off font-body text-[15px] font-[300] py-4 outline-none transition-all duration-300 focus:border-cobre placeholder:text-transparent resize-none min-h-[80px]" 
                  />
                  <label 
                    htmlFor="message"
                    className="absolute left-0 top-6 text-mut font-body text-[15px] font-[300] pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-[11px] peer-focus:text-cobre peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-cobre"
                  >
                    Conte brevemente o seu caso (opcional)
                  </label>

                </div>
              </div>

              {err && <p className="text-[12px] text-red-400 mt-4">{err}</p>}

              <button
                type="submit"
                disabled={loading}
                className="bg-cobre text-navy-deep font-body text-[11px] font-[600] tracking-[0.22em] uppercase py-5 relative overflow-hidden group w-full mt-10 rounded-none transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(173,137,87,0.3)]"
              >
                <span className="relative z-10">{loading ? "Processando..." : "Enviar e aguardar retorno"}</span>
                <div className="absolute inset-0 bg-latte origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </button>
              
              <p className="text-center mt-8 font-body text-[10px] text-mut uppercase tracking-[0.1em]">
                Já decidiu? → <a href="https://calendly.com/moovia-portugal/conversa-gratuita" target="_blank" rel="noopener" className="text-cobre underline underline-offset-4 decoration-cobre/30 hover:text-latte transition-colors">Marcar Conversa diretamente</a>
              </p>


            </form>
          </motion.div>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <h3 className="font-display text-[32px] font-[400] text-latte mb-6 leading-tight">
              Recebemos o seu caso,<br />{form.name?.split(" ")[0]}.
            </h3>
            <p className="font-body text-[17px] font-[300] text-mut leading-relaxed mb-10 max-w-[400px] mx-auto">
              O Frederico vai analisar o seu perfil pessoalmente. Enquanto isso, agende sua Conversa Gratuita:
            </p>
            
            <div className="aspect-[16/10] bg-navy-deep rounded-xl border border-line-cool overflow-hidden mb-10">
              <iframe 
                src={`https://calendly.com/moovia-portugal/conversa-gratuita?name=${encodeURIComponent(form.name || "")}&email=${encodeURIComponent(form.email || "")}`} 
                className="w-full h-full" 
                title="Calendly" 
              />
            </div>
            
            <a 
              href="https://wa.me/351913000000" 
              target="_blank" 
              rel="noopener" 
              className="inline-flex items-center gap-3 text-cobre font-body text-[11px] font-[500] uppercase tracking-[0.2em] hover:text-latte transition-colors"
            >
              <WhatsappLogo size={20} weight="thin" />
              Prefere WhatsApp?
            </a>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

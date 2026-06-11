import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "@phosphor-icons/react";

export function LeadForm() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!form.name || !form.email || !form.whatsapp) {
        throw new Error("Por favor, preencha os campos obrigatórios.");
      }

      const { error } = await supabase.from("leads").insert({
        ...form,
        source: "website_form",
        status: "novo",
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success("Recebemos o seu caso!");
    } catch (error: any) {
      toast.error(error.message || "Erro ao enviar formulário.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-left"
      >
        <h3 className="font-sora text-[32px] font-[200] text-latte mb-4 leading-tight">
          Recebemos o seu caso, {form.name?.split(" ")[0] || "obrigado"}.
        </h3>
        <p className="font-urbanist text-[17px] font-[300] text-mut leading-relaxed mb-10">
          O Frederico vai analisar o seu perfil e entrar em contacto pessoalmente.
          Enquanto isso, você já pode agendar a Conversa Gratuita:
        </p>
        
        <div className="aspect-[16/10] w-full glass rounded-2xl border-line-cool overflow-hidden mb-10">
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
          className="font-urbanist text-[13px] font-[500] uppercase tracking-[0.2em] text-cobre hover:text-latte transition-colors border-b border-cobre/20 pb-1"
        >
          Prefere WhatsApp? →
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-1">
      <div className="space-y-1">
        <Select onValueChange={(v) => set("objective", v)}>
          <SelectTrigger className="w-full bg-transparent border-0 border-b border-line-gold text-mut font-urbanist text-[15px] font-[300] py-8 px-0 rounded-none focus:ring-0 focus:border-cobre transition-all">
            <SelectValue placeholder="Qual o seu objetivo principal?" />
          </SelectTrigger>
          <SelectContent className="glass border-line-cool text-off">
            {["Trabalhar em Portugal", "Estudar em Portugal", "Mudar com a família", "Investir em imóveis", "Aposentadoria em Portugal", "Outro"].map(o => (
              <SelectItem key={o} value={o} className="focus:bg-navy-rich">{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(v) => set("timing", v)}>
          <SelectTrigger className="w-full bg-transparent border-0 border-b border-line-gold text-mut font-urbanist text-[15px] font-[300] py-8 px-0 rounded-none focus:ring-0 focus:border-cobre transition-all">
            <SelectValue placeholder="Quando pretende mudar?" />
          </SelectTrigger>
          <SelectContent className="glass border-line-cool text-off">
            {["Menos de 3 meses (urgente)", "3 a 6 meses", "6 a 12 meses", "Mais de 1 ano", "Ainda estou pesquisando"].map(o => (
              <SelectItem key={o} value={o} className="focus:bg-navy-rich">{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(v) => set("composition", v)}>
          <SelectTrigger className="w-full bg-transparent border-0 border-b border-line-gold text-mut font-urbanist text-[15px] font-[300] py-8 px-0 rounded-none focus:ring-0 focus:border-cobre transition-all">
            <SelectValue placeholder="Quantas pessoas participam da mudança?" />
          </SelectTrigger>
          <SelectContent className="glass border-line-cool text-off">
            {["Apenas eu", "Casal sem filhos", "Família com filhos", "Tenho animais de estimação", "Família com filhos e pets"].map(o => (
              <SelectItem key={o} value={o} className="focus:bg-navy-rich">{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(v) => set("decision_phase", v)}>
          <SelectTrigger className="w-full bg-transparent border-0 border-b border-line-gold text-mut font-urbanist text-[15px] font-[300] py-8 px-0 rounded-none focus:ring-0 focus:border-cobre transition-all">
            <SelectValue placeholder="Em que fase da decisão está?" />
          </SelectTrigger>
          <SelectContent className="glass border-line-cool text-off">
            {["Apenas pesquisando", "Comparando Portugal com outras opções", "Já decidi Portugal, planejando quando", "Tomei a decisão, preciso agir", "Já tenho proposta/contrato assinado"].map(o => (
              <SelectItem key={o} value={o} className="focus:bg-navy-rich">{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <input 
          required 
          placeholder="Seu nome completo"
          className="w-full bg-transparent border-0 border-b border-line-gold text-off font-urbanist text-[15px] font-[300] py-6 px-0 outline-none focus:border-cobre transition-all placeholder:text-mut-2" 
          onChange={(e) => set("name", e.target.value)}
        />
        <input 
          required 
          type="tel"
          placeholder="WhatsApp com código do país — ex: +55 11 99999-9999"
          className="w-full bg-transparent border-0 border-b border-line-gold text-off font-urbanist text-[15px] font-[300] py-6 px-0 outline-none focus:border-cobre transition-all placeholder:text-mut-2" 
          onChange={(e) => set("whatsapp", e.target.value)}
        />
        <input 
          required 
          type="email"
          placeholder="E-mail"
          className="w-full bg-transparent border-0 border-b border-line-gold text-off font-urbanist text-[15px] font-[300] py-6 px-0 outline-none focus:border-cobre transition-all placeholder:text-mut-2" 
          onChange={(e) => set("email", e.target.value)}
        />
        <textarea 
          placeholder="Conte brevemente o seu caso"
          rows={3}
          className="w-full bg-transparent border-0 border-b border-line-gold text-off font-urbanist text-[15px] font-[300] py-6 px-0 outline-none focus:border-cobre transition-all placeholder:text-mut-2 resize-none" 
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="wipe-btn w-full bg-cobre text-navy-deep font-urbanist text-[13px] font-[600] tracking-[0.22em] uppercase py-6 mt-10 rounded-sm transition-all disabled:opacity-50"
      >
        <span className="relative z-10">{loading ? "Enviando..." : "Enviar e aguardar retorno"}</span>
      </button>

      <div className="pt-10 text-center">
         <p className="font-urbanist text-[14px] text-mut">
           Já decidiu? <a href="https://calendly.com/moovia-portugal/conversa-gratuita" target="_blank" rel="noopener" className="text-cobre border-b border-cobre/30 ml-2">Marcar Conversa Gratuita diretamente</a>
         </p>
      </div>
    </form>
  );
}

export function FormSection() {
  return (
    <section id="contacto" className="bg-navy-deep py-clamp(110px,14vh,180px) px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[11px] font-[400] tracking-[0.32em] uppercase text-cobre mb-4 flex items-center gap-3"
          >
            <span className="w-6 h-px bg-cobre" />
            O primeiro passo
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] text-off mb-8"
          >
            "A conversa certa."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-urbanist text-[17px] font-[300] text-mut leading-[1.7] max-w-lg mb-10"
          >
            Não é um formulário de contato. É o início de um diagnóstico.
            Quanto mais você nos contar, mais preciso será o nosso retorno.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 border-l-2 border-cobre glass rounded-r-2xl mb-12"
          >
            <p className="font-urbanist text-[16px] font-[300] text-mut italic">
              "Cada contato é respondido pessoalmente pelo Frederico, sem chatbot, sem script."
            </p>
          </motion.div>

          <div className="space-y-4">
             {[
               "Resposta em até 2 horas em dias úteis",
               "Conversa direta com o founder",
               "Sem pitch, sem script",
               "Confidencialidade absoluta"
             ].map((d, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-4 font-urbanist text-[14px] font-[300] text-mut"
                >
                   <CheckCircle weight="thin" size={20} className="text-cobre" />
                   {d}
                </motion.div>
             ))}
          </div>
        </div>

        <div className="lg:pl-10">
          <div className="glass p-10 lg:p-12 rounded-2xl border-line-gold/20">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
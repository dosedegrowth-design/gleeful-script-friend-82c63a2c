import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "@/components/site/Reveal";

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
        <h3 className="font-sora text-[32px] font-[200] text-gold-l mb-4 leading-tight">
          Recebemos o seu caso, {form.name?.split(" ")[0] || "obrigado"}.
        </h3>
        <p className="font-urbanist text-[17px] font-[300] text-w35 leading-relaxed mb-10">
          O Frederico vai analisar o seu perfil e entrar em contacto pessoalmente.
          Enquanto isso, você já pode agendar a Conversa Gratuita:
        </p>
        
        <div className="aspect-[16/10] w-full border border-b18 bg-black-3 overflow-hidden mb-10">
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
          className="font-urbanist text-[13px] font-[500] uppercase tracking-[0.2em] text-gold hover:text-gold-l transition-colors"
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
          <SelectTrigger className="w-full bg-black-3 border-0 border-b border-b18 text-w70 font-urbanist text-[15px] font-[300] py-8 px-0 rounded-none focus:ring-0 focus:border-gold focus:bg-[rgba(14,15,18,.6)] transition-all">
            <SelectValue placeholder="Qual o seu objetivo principal?" />
          </SelectTrigger>
          <SelectContent className="bg-black-3 border-b18 text-off">
            {["Trabalhar em Portugal", "Estudar em Portugal", "Mudar com a família", "Investir em imóveis", "Aposentadoria em Portugal", "Outro"].map(o => (
              <SelectItem key={o} value={o}>{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(v) => set("timing", v)}>
          <SelectTrigger className="w-full bg-black-3 border-0 border-b border-b18 text-w70 font-urbanist text-[15px] font-[300] py-8 px-0 rounded-none focus:ring-0 focus:border-gold focus:bg-[rgba(14,15,18,.6)] transition-all">
            <SelectValue placeholder="Quando pretende mudar?" />
          </SelectTrigger>
          <SelectContent className="bg-black-3 border-b18 text-off">
            {["Menos de 3 meses (urgente)", "3 a 6 meses", "6 a 12 meses", "Mais de 1 ano", "Ainda estou pesquisando"].map(o => (
              <SelectItem key={o} value={o}>{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(v) => set("composition", v)}>
          <SelectTrigger className="w-full bg-black-3 border-0 border-b border-b18 text-w70 font-urbanist text-[15px] font-[300] py-8 px-0 rounded-none focus:ring-0 focus:border-gold focus:bg-[rgba(14,15,18,.6)] transition-all">
            <SelectValue placeholder="Quantas pessoas participam da mudança?" />
          </SelectTrigger>
          <SelectContent className="bg-black-3 border-b18 text-off">
            {["Apenas eu", "Casal sem filhos", "Família com filhos", "Tenho animais de estimação", "Família com filhos e pets"].map(o => (
              <SelectItem key={o} value={o}>{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={(v) => set("decision_phase", v)}>
          <SelectTrigger className="w-full bg-black-3 border-0 border-b border-b18 text-w70 font-urbanist text-[15px] font-[300] py-8 px-0 rounded-none focus:ring-0 focus:border-gold focus:bg-[rgba(14,15,18,.6)] transition-all">
            <SelectValue placeholder="Em que fase da decisão está?" />
          </SelectTrigger>
          <SelectContent className="bg-black-3 border-b18 text-off">
            {["Apenas pesquisando", "Comparando Portugal com outras opções", "Já decidi Portugal, planejando quando", "Tomei a decisão, preciso agir", "Já tenho proposta/contrato assinado"].map(o => (
              <SelectItem key={o} value={o}>{o}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <input 
          required 
          placeholder="Seu nome completo"
          className="w-full bg-black-3 border-0 border-b border-b18 text-w70 font-urbanist text-[15px] font-[300] py-6 px-0 outline-none focus:border-gold focus:bg-[rgba(14,15,18,.6)] transition-all placeholder:text-w35" 
          onChange={(e) => set("name", e.target.value)}
        />
        <input 
          required 
          type="tel"
          placeholder="WhatsApp com código do país — ex: +55 11 99999-9999"
          className="w-full bg-black-3 border-0 border-b border-b18 text-w70 font-urbanist text-[15px] font-[300] py-6 px-0 outline-none focus:border-gold focus:bg-[rgba(14,15,18,.6)] transition-all placeholder:text-w35" 
          onChange={(e) => set("whatsapp", e.target.value)}
        />
        <input 
          required 
          type="email"
          placeholder="E-mail"
          className="w-full bg-black-3 border-0 border-b border-b18 text-w70 font-urbanist text-[15px] font-[300] py-6 px-0 outline-none focus:border-gold focus:bg-[rgba(14,15,18,.6)] transition-all placeholder:text-w35" 
          onChange={(e) => set("email", e.target.value)}
        />
        <textarea 
          placeholder="Conte brevemente o seu caso"
          rows={3}
          className="w-full bg-black-3 border-0 border-b border-b18 text-w70 font-urbanist text-[15px] font-[300] py-6 px-0 outline-none focus:border-gold focus:bg-[rgba(14,15,18,.6)] transition-all placeholder:text-w35 resize-none" 
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="wipe-btn w-full bg-gold text-black font-urbanist text-[13px] font-[600] tracking-[0.22em] uppercase py-6 mt-10 rounded-none transition-all disabled:opacity-50"
      >
        <span className="relative z-10">{loading ? "Enviando..." : "Enviar e aguardar retorno"}</span>
      </button>

      <div className="pt-10 text-center">
         <p className="font-urbanist text-[14px] text-w35">
           Já decidiu? <a href="https://calendly.com/moovia-portugal/conversa-gratuita" target="_blank" rel="noopener" className="text-gold border-b border-gold/30 ml-2">Marcar Conversa Gratuita diretamente</a>
         </p>
      </div>
    </form>
  );
}

export function FormSection() {
  return (
    <section id="contacto" className="bg-black-2 py-32 px-6 lg:px-20 relative z-10">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              O primeiro passo
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] text-white mb-8">
              "A conversa certa."
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-urbanist text-[17px] font-[300] text-w35 leading-[1.9] max-w-lg mb-10">
              Não é um formulário de contato. É o início de um diagnóstico.
              Quanto mais você nos contar, mais preciso será o nosso retorno.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="p-8 border-l-2 border-gold bg-[rgba(173,137,87,.04)] mb-12">
              <p className="font-urbanist text-[16px] font-[300] text-w35 italic">
                "Cada contato é respondido pessoalmente pelo Frederico, sem chatbot, sem script."
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
             {[
               "Resposta em até 2 horas em dias úteis",
               "Conversa direta com o founder",
               "Sem pitch, sem script",
               "Confidencial"
             ].map((d, i) => (
                <div key={i} className="flex items-center gap-4 font-urbanist text-[14px] font-[300] text-w35">
                   <span className="text-gold">✓</span>
                   {d}
                </div>
             ))}
          </div>
        </div>

        <div className="lg:pl-10">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

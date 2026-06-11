import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function FormSection() {
  const [form, setForm] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: string, v: string) => setForm((f: any) => ({ ...f, [k]: v }));

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("leads").insert([{ ...form, source: "website" }]);
      if (error) throw error;
      setSubmitted(true);
      toast.success("Enviado com sucesso!");
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-black-2 py-32 px-6 lg:px-20">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="font-sora text-[32px] font-[200] text-gold-l mb-4">Recebemos o seu caso, {form.name?.split(" ")[0]}.</h2>
          <p className="font-urbanist text-[17px] font-[300] text-w35 mb-10">O Frederico vai analisar o seu perfil e entrar em contacto pessoalmente. Enquanto isso, você já pode agendar a Conversa Gratuita:</p>
          <div className="max-w-4xl mx-auto h-[600px] border border-b18">
            <iframe 
              src={`https://calendly.com/moovia-portugal/conversa-gratuita?name=${encodeURIComponent(form.name || "")}&email=${encodeURIComponent(form.email || "")}`} 
              className="w-full h-full" 
            />
          </div>
          <div className="mt-10">
             <a href="https://wa.me/351913000000" className="text-gold font-urbanist text-[14px] uppercase tracking-widest border-b border-gold/30">Prefere WhatsApp? →</a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="bg-black-2 py-32 px-6 lg:px-20 relative">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-6"
          >
            O primeiro passo
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-[clamp(28px,4vw,60px)] font-[200] text-white leading-tight mb-8"
          >
            "A conversa certa."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-[17px] font-[300] text-w35 leading-[1.7] max-w-lg mb-12"
          >
            Não é um formulário de contato. É o início de um diagnóstico. Quanto mais você nos contar, mais preciso será o nosso retorno.
          </motion.p>

          <div className="border-l-2 border-gold bg-w05 p-8 italic mb-12">
            <p className="font-urbanist text-[16px] font-[300] text-w35">"Cada contato é respondido pessoalmente pelo Frederico, sem chatbot, sem script."</p>
          </div>

          <div className="space-y-4">
            {["Resposta em até 2 horas em dias úteis", "Conversa direta com o founder", "Sem pitch, sem script", "Confidencial"].map((item, i) => (
              <div key={i} className="flex items-center gap-4 font-urbanist text-[14px] font-[300] text-w35">
                <span className="text-gold">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-1">
          <select required onChange={e => set("objective", e.target.value)} className="bg-black-3 border-0 border-b border-b18 font-urbanist text-[15px] font-[300] text-w70 p-6 focus:border-gold outline-none transition-all appearance-none">
            <option value="">Qual o seu objetivo principal?</option>
            <option value="trabalhar">Trabalhar em Portugal</option>
            <option value="estudar">Estudar em Portugal</option>
            <option value="familia">Mudar com a família</option>
            <option value="imoveis">Investir em imóveis</option>
            <option value="aposentadoria">Aposentadoria em Portugal</option>
            <option value="outro">Outro</option>
          </select>
          <select required onChange={e => set("timing", e.target.value)} className="bg-black-3 border-0 border-b border-b18 font-urbanist text-[15px] font-[300] text-w70 p-6 focus:border-gold outline-none transition-all appearance-none">
            <option value="">Quando pretende mudar?</option>
            <option value="3m">Menos de 3 meses (urgente)</option>
            <option value="3-6m">3 a 6 meses</option>
            <option value="6-12m">6 a 12 meses</option>
            <option value="1y">Mais de 1 ano</option>
            <option value="pesquisa">Ainda estou pesquisando</option>
          </select>
          <select required onChange={e => set("composition", e.target.value)} className="bg-black-3 border-0 border-b border-b18 font-urbanist text-[15px] font-[300] text-w70 p-6 focus:border-gold outline-none transition-all appearance-none">
            <option value="">Quantas pessoas participam da mudança?</option>
            <option value="individual">Apenas eu</option>
            <option value="casal">Casal sem filhos</option>
            <option value="familia">Família com filhos</option>
            <option value="pets">Tenho animais de estimação</option>
            <option value="familia-pets">Família com filhos e pets</option>
          </select>
          <select required onChange={e => set("phase", e.target.value)} className="bg-black-3 border-0 border-b border-b18 font-urbanist text-[15px] font-[300] text-w70 p-6 focus:border-gold outline-none transition-all appearance-none">
            <option value="">Em que fase da decisão está?</option>
            <option value="pesquisa">Apenas pesquisando</option>
            <option value="comparando">Comparando Portugal com outras opções</option>
            <option value="decidi">Já decidi Portugal, planejando quando</option>
            <option value="agir">Tomei a decisão, preciso agir</option>
            <option value="proposta">Já tenho proposta/contrato assinado</option>
          </select>
          <input required placeholder="Seu nome completo" onChange={e => set("name", e.target.value)} className="bg-black-3 border-0 border-b border-b18 font-urbanist text-[15px] font-[300] text-w70 p-6 focus:border-gold outline-none transition-all" />
          <input required type="tel" placeholder="WhatsApp com código do país — ex: +55 11 99999-9999" onChange={e => set("whatsapp", e.target.value)} className="bg-black-3 border-0 border-b border-b18 font-urbanist text-[15px] font-[300] text-w70 p-6 focus:border-gold outline-none transition-all" />
          <input required type="email" placeholder="E-mail" onChange={e => set("email", e.target.value)} className="bg-black-3 border-0 border-b border-b18 font-urbanist text-[15px] font-[300] text-w70 p-6 focus:border-gold outline-none transition-all" />
          <textarea rows={3} placeholder="Conte brevemente o seu caso" onChange={e => set("message", e.target.value)} className="bg-black-3 border-0 border-b border-b18 font-urbanist text-[15px] font-[300] text-w70 p-6 focus:border-gold outline-none transition-all resize-none" />
          
          <button type="submit" disabled={loading} className="w-full bg-gold text-black font-urbanist font-[600] text-[13px] tracking-[0.22em] uppercase py-6 mt-10 transition-all hover:bg-gold-xl group relative overflow-hidden">
            <span className="relative z-10">{loading ? "Enviando..." : "Enviar e aguardar retorno"}</span>
            <div className="absolute inset-0 bg-gold-xl translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </button>
          
          <div className="mt-8 text-center">
            <p className="font-urbanist text-[14px] text-w35">Já decidiu? <a href="https://calendly.com/moovia-portugal/conversa-gratuita" className="text-gold ml-1 border-b border-gold/30">Marcar Conversa Gratuita diretamente</a></p>
          </div>
        </form>
      </div>
    </section>
  );
}

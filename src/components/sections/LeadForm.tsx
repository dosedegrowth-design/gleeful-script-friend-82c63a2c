import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { supabase } from "@/integrations/supabase/client";

const selectFields: { name: string; label: string; options: string[] }[] = [
  { name: "objective", label: "Qual o seu objetivo principal?", options: ["Trabalhar em Portugal", "Estudar", "Mudar com a família", "Investir", "Outro"] },
  { name: "timing", label: "Quando pretende mudar?", options: ["Menos de 3 meses", "3 a 6 meses", "6 a 12 meses", "Ainda estou pesquisando"] },
  { name: "composition", label: "Quantas pessoas participam da mudança?", options: ["Apenas eu", "Casal", "Família com filhos", "Tenho animais de estimação"] },
  { name: "decision_phase", label: "Em que fase da sua decisão está?", options: ["Apenas pesquisando", "Comparando alternativas", "Já tomei a decisão", "Já tenho proposta confirmada"] },
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
    const sessionId = typeof window !== "undefined" ? localStorage.getItem("moovia_session") : null;
    const utm = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("moovia_utm") || "{}") : {};
    const history = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("moovia_history") || "[]") : [];
    const { error } = await supabase.from("leads").insert({
      ...form,
      session_id: sessionId,
      page_history: history,
      utm_source: utm.source,
      utm_medium: utm.medium,
      utm_campaign: utm.campaign,
      source: "website_form",
    });
    setLoading(false);
    if (error) setErr("Não conseguimos registar agora. Tente novamente em instantes.");
    else setSubmitted(true);
  };

  if (submitted) {
    const calendlyUrl = `https://calendly.com/moovia-portugal/conversa-gratuita?name=${encodeURIComponent(form.name || "")}&email=${encodeURIComponent(form.email || "")}`;
    return (
      <div className="p-10 md:p-14" style={{ background: "var(--ivory)", border: "1px solid var(--line)" }}>
        <p className="eyebrow mb-4" style={{ color: "var(--copper-dark)" }}>Recebido</p>
        <h3 className="font-display text-3xl" style={{ fontWeight: 200 }}>
          Recebemos o seu caso, {form.name?.split(" ")[0] || "obrigado"}.
        </h3>
        <p className="mt-5 text-[16px] leading-relaxed" style={{ color: "var(--ink-mid)", fontWeight: 300 }}>
          O Frederico vai analisar o seu perfil e entrar em contacto pessoalmente. Enquanto isso,
          pode agendar diretamente a sua Conversa Gratuita:
        </p>
        <div className="mt-8 aspect-[4/5] md:aspect-[16/10] border" style={{ borderColor: "var(--line)" }}>
          <iframe src={calendlyUrl} className="w-full h-full" title="Calendly" />
        </div>
        <a
          href={`https://wa.me/351912345678?text=${encodeURIComponent("Olá, acabei de submeter o formulário no site, sou " + (form.name || ""))}`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block text-[12px] uppercase tracking-[0.18em] border-b pb-1"
          style={{ color: "var(--copper-dark)", borderColor: "var(--copper)" }}
        >
          Prefere WhatsApp? →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {selectFields.map((f) => (
        <Field key={f.name} label={f.label}>
          <select
            required
            value={form[f.name] || ""}
            onChange={(e) => set(f.name, e.target.value)}
            className="w-full bg-transparent border-0 border-b py-3 text-[15px] focus:outline-none focus:border-[var(--copper)] transition"
            style={{ borderColor: "var(--line)" }}
          >
            <option value="">Selecione…</option>
            {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>
      ))}
      <Field label="Seu nome completo">
        <input required value={form.name || ""} onChange={(e) => set("name", e.target.value)} className="w-full bg-transparent border-0 border-b py-3 text-[15px] focus:outline-none focus:border-[var(--copper)] transition" style={{ borderColor: "var(--line)" }} />
      </Field>
      <Field label="WhatsApp com código do país">
        <input required type="tel" placeholder="+55 11 99999-9999" value={form.whatsapp || ""} onChange={(e) => set("whatsapp", e.target.value)} className="w-full bg-transparent border-0 border-b py-3 text-[15px] focus:outline-none focus:border-[var(--copper)] transition" style={{ borderColor: "var(--line)" }} />
      </Field>
      <Field label="E-mail">
        <input required type="email" value={form.email || ""} onChange={(e) => set("email", e.target.value)} className="w-full bg-transparent border-0 border-b py-3 text-[15px] focus:outline-none focus:border-[var(--copper)] transition" style={{ borderColor: "var(--line)" }} />
      </Field>
      <Field label="Conte brevemente o seu caso (opcional)">
        <textarea rows={3} value={form.message || ""} onChange={(e) => set("message", e.target.value)} className="w-full bg-transparent border-0 border-b py-3 text-[15px] focus:outline-none focus:border-[var(--copper)] transition resize-none" style={{ borderColor: "var(--line)" }} />
      </Field>

      {err && <p className="text-sm text-red-700">{err}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-5 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors disabled:opacity-60"
        style={{ background: "var(--ink)", color: "var(--ivory)" }}
      >
        {loading ? "A enviar…" : "Enviar e aguardar retorno"}
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <label className="block">
        <span className="block text-[11px] uppercase tracking-[0.16em] mb-2" style={{ color: "var(--ink-light)" }}>{label}</span>
        {children}
      </label>
    </Reveal>
  );
}

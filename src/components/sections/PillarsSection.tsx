import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Plus } from "lucide-react";

const pillars = [
  {
    n: "01",
    title: "PLANEJAMOS",
    tag: "Tomar as decisões certas antes de mudar.",
    services: [
      "Strategic Relocation Assessment",
      "Diagnósticos: Habitacional, Educacional, Documental, Fiscal",
      "Mapa de Decisão",
      "Estratégia Migratória",
      "Planeamento Fiscal",
      "City Experience · Exploração de Bairros",
      "Planeamento Habitacional",
      "Avaliação de Crédito",
    ],
    deliverable: "Plano Estratégico de Transição Internacional",
  },
  {
    n: "02",
    title: "INSTALAMOS",
    tag: "Tudo o que precisa para chegar e ficar legalmente instalado.",
    services: [
      "Habitação: Busca Ativa, Airbnb Hunting, Visitas, Negociação",
      "Documentação: NIF, NISS, Utente, PB4, Conta Bancária, Carta de Condução, Passe Navegante, Abertura de Atividade, Recibos Verdes, Estatuto de Igualdade",
      "Concierge: Airport Pick-up, Compras 1ª semana, Ativações (Água, Gás, Eletricidade, Internet, Ginásio)",
      "Traduções e Equivalências de Diplomas",
    ],
  },
  {
    n: "03",
    title: "INTEGRAMOS",
    tag: "Transformando uma mudança de país numa transição de vida.",
    services: [
      "Educação Nacional: School Matching, Busca, Matrícula",
      "Educação Internacional: School Matching Internacional, Busca, Matrícula",
      "Adaptação Familiar: Programa 30/60/90 dias",
      "Pet Relocation: Transporte, Documentação, Receção, Uber Pet",
      "Lisboa Experience Premium",
      "Integração Cultural",
    ],
  },
  {
    n: "04",
    title: "ESTRUTURAMOS",
    tag: "Para investidores, empresários e profissionais que querem estruturar sua vida financeira em Portugal.",
    services: [
      "Fiscalidade e Compliance: Enquadramento Fiscal, Simulação de Rendimentos, Atividade, Primeira/Anual IRS, Regularização, Representação Fiscal, Planeamento Internacional, Dupla Tributação, IVA, Segurança Social",
      "Empresas: Constituição, NIPC, Início de Atividade, Contabilidade Mensal ENI/Lda., Processamento Salarial, Estruturação Societária, Consultoria Fiscal",
      "Investidores: Estruturação Patrimonial, Planeamento de Investimentos, Apoio à instalação empresarial",
    ],
  },
];

export function PillarsSection() {
  const [open, setOpen] = useState<string | null>("01");
  return (
    <section className="py-28 md:py-40 px-6 md:px-10" style={{ background: "#FFFFFF" }}>
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <h2 className="font-display text-[clamp(32px,5vw,56px)] leading-[1.1] max-w-3xl" style={{ fontWeight: 200 }}>
            Quatro pilares.<br />Uma jornada completa.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-px" style={{ background: "var(--line)" }}>
          {pillars.map((p, i) => {
            const isOpen = open === p.n;
            return (
              <Reveal key={p.n} delay={i * 80}>
                <button
                  onClick={() => setOpen(isOpen ? null : p.n)}
                  className="w-full text-left p-10 md:p-12 transition-all duration-500 group border-l-[3px] border-l-transparent hover:border-l-[var(--copper)]"
                  style={{ background: isOpen ? "var(--copper-light)" : "#FFFFFF", borderLeftColor: isOpen ? "var(--copper)" : "transparent" }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="font-display text-sm" style={{ color: "var(--copper)", letterSpacing: "0.2em" }}>{p.n}</div>
                      <h3 className="mt-4 font-display text-3xl" style={{ fontWeight: 300, letterSpacing: "0.04em" }}>{p.title}</h3>
                      <p className="mt-3 font-display italic text-[17px]" style={{ color: "var(--ink-mid)", fontWeight: 200 }}>"{p.tag}"</p>
                    </div>
                    <Plus
                      size={20}
                      style={{ color: "var(--copper)", transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.4s" }}
                    />
                  </div>
                  {isOpen && (
                    <div className="mt-8">
                      <ul className="space-y-2">
                        {p.services.map((s) => (
                          <li key={s} className="text-[14px] leading-relaxed flex gap-3" style={{ color: "var(--ink-mid)" }}>
                            <span style={{ color: "var(--copper)" }}>·</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                      {p.deliverable && (
                        <p className="mt-6 text-[13px] uppercase tracking-[0.16em]" style={{ color: "var(--copper-dark)" }}>
                          Entregável: <span className="font-medium">{p.deliverable}</span>
                        </p>
                      )}
                    </div>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

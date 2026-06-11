import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { FormSection } from "@/components/sections/FormSection";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — MOOVIA Portugal" },
      { name: "description", content: "Quatro pilares, uma jornada completa: Planejamos, Instalamos, Integramos, Estruturamos. Coordenação completa Brasil → Portugal." },
      { property: "og:title", content: "Serviços MOOVIA — quatro pilares, uma jornada" },
      { property: "og:description", content: "Da estratégia à adaptação pós-chegada. Mandato sob medida, sem pacotes." },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <SiteLayout>
      <div className="bg-black pt-[120px]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-[80px] py-20">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Os pilares
          </p>
          <h1 className="font-sora text-[clamp(40px,6vw,72px)] font-[100] leading-[1.05] text-white">
            Quatro pilares.<br />Uma jornada completa.
          </h1>
        </div>
      </div>

      <PillarsSection />
      <ProcessSection />
      <FormSection />
    </SiteLayout>
  );
}

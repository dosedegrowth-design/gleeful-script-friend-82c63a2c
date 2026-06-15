import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServicosShowcase } from "@/components/sections/ServicosShowcase";

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
      <ServicosShowcase />
    </SiteLayout>
  );
}

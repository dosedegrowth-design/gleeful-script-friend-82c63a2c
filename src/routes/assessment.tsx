import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AssessmentSection } from "@/components/sections/AssessmentSection";
import { FormSection } from "@/components/sections/FormSection";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "Strategic Relocation Assessment — MOOVIA Portugal" },
      { name: "description", content: "90 minutos. Mapa de decisão, estratégia documental, fiscal e familiar. €250 abatidos no mandato. Entregável físico." },
      { property: "og:title", content: "Strategic Relocation Assessment · €250" },
      { property: "og:description", content: "O diagnóstico que organiza o que você não sabia que precisava organizar." },
    ],
  }),
  component: Assessment,
});

function Assessment() {
  return (
    <SiteLayout>
      <div className="bg-black pt-[96px]" />
      <AssessmentSection />
      <FormSection />
    </SiteLayout>
  );
}

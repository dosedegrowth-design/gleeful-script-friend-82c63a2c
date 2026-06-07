import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AssessmentSection } from "@/components/sections/AssessmentSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FormSection } from "@/components/sections/FormSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOOVIA Portugal — Coordenação Internacional de Vida e Património" },
      { name: "description", content: "A MOOVIA Portugal coordena a jornada completa de transição internacional, do diagnóstico estratégico à adaptação pós-chegada. Assessment a partir de €250." },
      { property: "og:title", content: "Você não precisa de mais informação. Precisa de alguém que coordene a decisão." },
      { property: "og:description", content: "MOOVIA Portugal — coordenação boutique de transições internacionais. Brasil para Portugal." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <ProblemSection />
      <FoundersSection />
      <ProcessSection />
      <AssessmentSection />
      <PillarsSection />
      <ManifestoSection />
      <FAQSection />
      <FormSection />
    </SiteLayout>
  );
}

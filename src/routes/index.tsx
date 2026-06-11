import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { TeamSection } from "@/components/sections/TeamSection";
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
      <div id="grain" className="fixed inset-[-50%] w-[200%] h-[200%] pointer-events-none z-[1000] opacity-40 animate-[grain_8s_steps(10)_infinite] bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_256_256%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noise%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%22.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noise)%22_opacity=%22.04%22/%3E%3C/svg%3E')]" />
      <Hero />
      <div className="marquee-wrap border-y border-border bg-black overflow-hidden h-12 flex items-center relative z-10 pointer-events-none">
        <div className="marquee-track flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[1, 2, 3].map((i) => (
            <div key={i} className="marquee-item flex items-center gap-10 px-10 font-urbanist text-[11px] tracking-[0.24em] uppercase text-white-3 shrink-0">
              Transição Internacional <span className="text-gold text-lg">·</span> 
              Brasil para Portugal <span className="text-gold text-lg">·</span> 
              Coordenação de Vida e Património <span className="text-gold text-lg">·</span> 
              Strategic Assessment <span className="text-gold text-lg">·</span> 
              Mandato Personalizado <span className="text-gold text-lg">·</span> 
              90 dias Pós-chegada <span className="text-gold text-lg">·</span> 
              School Matching <span className="text-gold text-lg">·</span> 
              Fiscalidade Internacional <span className="text-gold text-lg">·</span>
            </div>
          ))}
        </div>
      </div>

      <ProblemSection />
      <FoundersSection />
      <TeamSection />
      <ProcessSection />
      <AssessmentSection />
      <PillarsSection />
      <ManifestoSection />
      <FAQSection />
      <FormSection />
    </SiteLayout>
  );
}

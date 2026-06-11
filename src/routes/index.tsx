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
import { BlogTeaserSection } from "@/components/sections/BlogTeaserSection";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOOVIA Portugal — Coordenação Internacional de Vida e Património" },
      { name: "description", content: "A MOOVIA Portugal coordena a jornada completa de transição internacional de brasileiros para Portugal. Do diagnóstico estratégico à adaptação pós-chegada. Assessment a partir de €250." },
      { property: "og:title", content: "Você não precisa de mais informação. Precisa de alguém que coordene a decisão." },
      { property: "og:description", content: "MOOVIA Portugal — Coordenação de transição internacional. Brasil para Portugal." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      
      {/* MARQUEE — Redesigned for v4 */}
      <div className="bg-navy-deep/80 border-y border-line-gold/20 h-[56px] flex items-center overflow-hidden relative z-20 backdrop-blur-sm">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-12 px-12 font-urbanist text-[11px] font-[400] tracking-[0.3em] uppercase text-mut">
              Transição Internacional <span className="text-cobre text-[12px] opacity-40">♦</span> 
              Brasil para Portugal <span className="text-cobre text-[12px] opacity-40">♦</span> 
              Coordenação de Vida e Património <span className="text-cobre text-[12px] opacity-40">♦</span> 
              Strategic Assessment <span className="text-cobre text-[12px] opacity-40">♦</span> 
              Mandato Personalizado <span className="text-cobre text-[12px] opacity-40">♦</span> 
              90 dias Pós-chegada <span className="text-cobre text-[12px] opacity-40">♦</span> 
              School Matching <span className="text-cobre text-[12px] opacity-40">♦</span> 
              Fiscalidade Internacional <span className="text-cobre text-[12px] opacity-40">♦</span>
            </div>
          ))}
        </motion.div>
      </div>

      <ProblemSection />
      <ProcessSection />
      <AssessmentSection />
      <PillarsSection />
      <FoundersSection />
      <TeamSection />
      <BlogTeaserSection />
      <ManifestoSection />
      <FAQSection />
      <FormSection />
    </SiteLayout>
  );
}
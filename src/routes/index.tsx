import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { TeamSection } from "@/components/sections/TeamSection";

import { ProcessSection } from "@/components/sections/ProcessSection";
import { AssessmentSection } from "@/components/sections/AssessmentSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { SymbolSection } from "@/components/sections/SymbolSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FormSection } from "@/components/sections/FormSection";
import { BlogTeaserSection } from "@/components/sections/BlogTeaserSection";
import { LisboaGallery } from "@/components/sections/LisboaGallery";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MOOVIA Portugal — Coordenação Internacional de Vida e Património" },
      { name: "description", content: "A MOOVIA Portugal coordena a jornada completa de transição internacional de brasileiros para Portugal. Do diagnóstico estratégico à adaptação pós-chegada. Assessment a partir de €250." },
      { property: "og:title", content: "Você não precisa de mais informação. Precisa de alguém que coordene a decisão." },
      { property: "og:description", content: "MOOVIA Portugal — Coordenação de transição internacional. Brasil para Portugal." },
      { property: "og:image", content: "https://mooviaportugal.com/og-image.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      
      {/* MARQUEE — SEÇÃO 2 */}
      <div className="bg-black/80 border-y border-b18 h-[46px] flex items-center overflow-hidden relative z-20">
        <motion.div 
          animate={{ x: [0, "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-16 px-16 font-urbanist text-[11px] font-[400] tracking-[0.24em] uppercase text-w35">
              Transição Internacional <span className="text-gold text-[10px]">♦</span> 
              Brasil para Portugal <span className="text-gold text-[10px]">♦</span> 
              Coordenação de Vida e Património <span className="text-gold text-[10px]">♦</span> 
              Strategic Assessment <span className="text-gold text-[10px]">♦</span> 
              Mandato Personalizado <span className="text-gold text-[10px]">♦</span> 
              90 dias Pós-chegada <span className="text-gold text-[10px]">♦</span> 
              School Matching <span className="text-gold text-[10px]">♦</span> 
              Fiscalidade Internacional <span className="text-gold text-[10px]">♦</span>
            </div>
          ))}
        </motion.div>
      </div>

      <ProblemSection />
      <FoundersSection />
      <TeamSection />
      <ProcessSection />

      <AssessmentSection />
      <PillarsSection />
      <SymbolSection />
      <LisboaGallery />
      <ManifestoSection />
      <BlogTeaserSection />
      <FAQSection />
      <FormSection />
    </SiteLayout>
  );
}

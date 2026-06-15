import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { TeamSection } from "@/components/sections/TeamSection";

export const Route = createFileRoute("/equipa")({
  head: () => ({
    meta: [
      { title: "Equipa — MOOVIA Portugal" },
      { name: "description", content: "Conheça a equipa MOOVIA: fundadores e especialistas em mobilidade internacional, fiscalidade, imigração, imobiliário e família." },
      { property: "og:title", content: "Equipa MOOVIA Portugal" },
      { property: "og:description", content: "Multidisciplinares. Cada decisão importante coordenada por quem entende dela." },
      { property: "og:url", content: "https://beta.mooviaportugal.com/equipa" },
    ],
    links: [{ rel: "canonical", href: "https://beta.mooviaportugal.com/equipa" }],
  }),
  component: Equipa,
});

function Equipa() {
  return (
    <SiteLayout>
      <div className="bg-black pt-[120px]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-[80px] py-20">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            A equipa
          </p>
          <h1 className="font-sora text-[clamp(40px,6vw,72px)] font-[100] leading-[1.05] text-white">
            Multidisciplinar.<br />Por desenho, não por acaso.
          </h1>
          <p className="mt-10 max-w-2xl font-urbanist text-[17px] font-[300] text-w35 leading-relaxed">
            Cinco especialistas, uma só coordenação. Direito, fiscalidade, imobiliário, educação e mobilidade internacional — pessoas que viveram o caminho antes de o coordenarem para si.
          </p>
        </div>
      </div>

      <FoundersSection />
      <TeamSection />
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { TeamSection } from "@/components/sections/TeamSection";
import sobreHero from "@/assets/sobre-hero.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — MOOVIA Portugal" },
      { name: "description", content: "Os fundadores são o produto. Background Deloitte, Oracle e SAP. Cada sócio passou pela transição que coordenamos." },
      { property: "og:title", content: "Sobre a MOOVIA Portugal" },
      { property: "og:description", content: "Antes de coordenar transições internacionais, vivemos as nossas." },
      { property: "og:image", content: sobreHero },
      { name: "twitter:image", content: sobreHero },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <SiteLayout>
      <section className="relative isolate min-h-[80vh] flex items-end overflow-hidden">
        <img
          src={sobreHero}
          alt="Vista panorâmica de Lisboa ao entardecer"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-[80px] pb-24 pt-[180px]">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            A MOOVIA Portugal
          </p>
          <h1 className="font-sora text-[clamp(40px,6vw,72px)] font-[100] leading-[1.05] text-white">
            Uma consultoria boutique<br />de coordenação internacional.
          </h1>
          <p className="mt-10 max-w-2xl font-urbanist text-[17px] font-[300] text-white/75 leading-relaxed">
            Nascemos da experiência prática de quem fez o caminho. O mercado vende tarefas; nós
            coordenamos a decisão completa, do primeiro diagnóstico aos 90 dias depois da chegada.
          </p>
        </div>
      </section>

      <FoundersSection />
      <TeamSection />
      <ManifestoSection />
    </SiteLayout>
  );
}

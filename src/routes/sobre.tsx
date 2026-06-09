import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — MOOVIA Portugal" },
      { name: "description", content: "Os fundadores são o produto. Background Deloitte, Oracle e SAP. Cada sócio passou pela transição que coordenamos." },
      { property: "og:title", content: "Sobre a MOOVIA Portugal" },
      { property: "og:description", content: "Antes de coordenar transições internacionais, vivemos as nossas." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <SiteLayout>
      <div className="bg-black pt-[120px]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-[80px] py-20">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            A MOOVIA Portugal
          </p>
          <h1 className="font-amotha text-[clamp(40px,6vw,72px)] font-extralight leading-[1.05] text-white">
            Uma consultoria boutique<br />de coordenação internacional.
          </h1>
          <p className="mt-10 max-w-2xl font-urbanist text-[17px] font-light text-white-3 leading-relaxed">
            Nascemos da experiência prática de quem fez o caminho. O mercado vende tarefas; nós
            coordenamos a decisão completa, do primeiro diagnóstico aos 90 dias depois da chegada.
          </p>
        </div>
      </div>

      <FoundersSection />
      <ManifestoSection />
    </SiteLayout>
  );
}

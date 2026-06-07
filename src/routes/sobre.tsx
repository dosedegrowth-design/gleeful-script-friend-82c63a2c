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
      <div style={{ background: "var(--ink)", paddingTop: 120 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
          <p className="eyebrow mb-6">A MOOVIA Portugal</p>
          <h1 className="font-display text-[clamp(40px,6vw,72px)] leading-[1.05]" style={{ color: "var(--ivory)", fontWeight: 200 }}>
            Uma consultoria boutique<br />de coordenação internacional.
          </h1>
          <p className="mt-10 max-w-2xl text-[17px] leading-relaxed" style={{ color: "rgba(250,250,247,0.55)", fontWeight: 300 }}>
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

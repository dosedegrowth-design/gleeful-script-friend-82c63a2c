import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FormSection } from "@/components/sections/FormSection";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — MOOVIA Portugal" },
      { name: "description", content: "Avaliar o seu caso. Cada contacto é respondido pessoalmente pelo Frederico, sem chatbot, sem script." },
      { property: "og:title", content: "Contacto MOOVIA Portugal" },
      { property: "og:description", content: "O primeiro passo é a conversa certa." },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  return (
    <SiteLayout>
      <div className="bg-black pt-[120px]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Contacto
          </p>
          <h1 className="font-sora text-[clamp(40px,6vw,68px)] font-extralight leading-[1.05] max-w-3xl text-white">
            Avalie o seu caso<br />com a MOOVIA.
          </h1>
        </div>
      </div>
      <FormSection />
    </SiteLayout>
  );
}

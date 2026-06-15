import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FormSection } from "@/components/sections/FormSection";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — MOOVIA Portugal | Lisboa" },
      { name: "description", content: "Fale com a MOOVIA Portugal em Lisboa. Formulário, e-mail, WhatsApp e LinkedIn. Cada contacto é respondido pessoalmente." },
      { property: "og:title", content: "Contacto MOOVIA Portugal" },
      { property: "og:description", content: "Sediados em Lisboa. O primeiro passo é a conversa certa." },
      { property: "og:url", content: "https://beta.mooviaportugal.com/contacto" },
    ],
    links: [{ rel: "canonical", href: "https://beta.mooviaportugal.com/contacto" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "MOOVIA Portugal",
        url: "https://beta.mooviaportugal.com",
        email: "hello@mooviaportugal.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Avenida da Liberdade",
          addressLocality: "Lisboa",
          postalCode: "1250-096",
          addressCountry: "PT",
        },
        contactPoint: [{
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "hello@mooviaportugal.com",
          areaServed: ["PT", "BR"],
          availableLanguage: ["pt-PT", "pt-BR", "en", "es"],
        }],
      }),
    }],
  }),
  component: Contacto,
});

function Contacto() {
  const channels = [
    { label: "E-mail", value: "hello@mooviaportugal.com", href: "mailto:hello@mooviaportugal.com" },
    { label: "WhatsApp", value: "+351 910 000 000", href: "https://wa.me/351910000000" },
    { label: "LinkedIn", value: "/company/moovia-portugal", href: "https://www.linkedin.com/company/moovia-portugal" },
    { label: "Horário", value: "Seg–Sex · 09:00 – 19:00 WET" },
  ];

  return (
    <SiteLayout>
      <div className="bg-black pt-[120px]">
        <div className="mx-auto max-w-[1400px] px-6 md:px-[80px] py-16">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Contacto
          </p>
          <h1 className="font-sora text-[clamp(40px,6vw,68px)] font-[100] leading-[1.05] max-w-3xl text-white">
            Avalie o seu caso<br />com a MOOVIA.
          </h1>
          <p className="mt-8 max-w-2xl font-urbanist text-[17px] font-[300] text-w35 leading-relaxed">
            Cada contacto é respondido pessoalmente. Sem chatbot, sem script. Lisboa é a nossa base — o mundo, o nosso terreno.
          </p>
        </div>
      </div>

      {/* Canais + Localização */}
      <section className="bg-black px-6 md:px-[80px] pb-16">
        <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-px bg-b18">
          <div className="bg-black-2 p-10 md:p-14">
            <h2 className="font-sora text-[28px] font-[200] text-white mb-10">Canais diretos</h2>
            <ul className="divide-y divide-b18">
              {channels.map((c) => (
                <li key={c.label} className="py-5 flex items-baseline justify-between gap-6">
                  <span className="font-urbanist text-[11px] tracking-[0.22em] uppercase text-gold">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="font-urbanist text-[15px] text-white/80 hover:text-gold transition-colors text-right">{c.value}</a>
                  ) : (
                    <span className="font-urbanist text-[15px] text-white/80 text-right">{c.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black-2 p-10 md:p-14">
            <h2 className="font-sora text-[28px] font-[200] text-white mb-6">Lisboa · Portugal</h2>
            <p className="font-urbanist text-[15px] font-[300] text-w35 leading-relaxed mb-6">
              Avenida da Liberdade<br />
              1250-096 Lisboa<br />
              Portugal
            </p>
            <div className="aspect-[16/10] border border-b18 overflow-hidden">
              <iframe
                title="MOOVIA Portugal — Lisboa"
                src="https://www.google.com/maps?q=Avenida+da+Liberdade,+Lisboa,+Portugal&output=embed"
                loading="lazy"
                className="w-full h-full grayscale-[0.6] contrast-110"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <FormSection />
    </SiteLayout>
  );
}

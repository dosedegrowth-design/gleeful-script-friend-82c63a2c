import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — MOOVIA Portugal" },
      { name: "description", content: "Como a MOOVIA Portugal utiliza cookies e tecnologias semelhantes neste site." },
      { property: "og:title", content: "Política de Cookies — MOOVIA Portugal" },
      { property: "og:url", content: "https://beta.mooviaportugal.com/cookies" },
    ],
    links: [{ rel: "canonical", href: "https://beta.mooviaportugal.com/cookies" }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <SiteLayout>
      <article className="bg-black pt-[120px]">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Compliance
          </p>
          <h1 className="font-sora text-[clamp(32px,5vw,56px)] font-[200] leading-[1.1] text-white">Política de Cookies</h1>
          <p className="mt-4 text-w35 font-urbanist text-[13px]">Última atualização: junho de 2026</p>

          <div className="mt-12 space-y-10 font-urbanist text-[16px] font-[300] text-white/70 leading-[1.9]">
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">O que são cookies</h2>
              <p>Cookies são pequenos ficheiros de texto guardados no seu dispositivo que permitem reconhecê-lo entre visitas e melhorar a sua experiência de navegação.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">Tipos que utilizamos</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-white">Estritamente necessários</strong> — essenciais ao funcionamento do site (preferência de idioma, sessão). Não requerem consentimento.</li>
                <li><strong className="text-white">Analíticos</strong> — agregados e anónimos, usados para entender o comportamento global de navegação.</li>
                <li><strong className="text-white">Funcionais</strong> — guardam preferências do utilizador (ex. modo de cursor, idioma).</li>
              </ul>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">Gestão</h2>
              <p>Pode, a qualquer momento, configurar o seu browser para bloquear ou apagar cookies. Tenha em conta que algumas funcionalidades poderão deixar de funcionar corretamente.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">Contacto</h2>
              <p>Dúvidas: <a href="mailto:privacidade@mooviaportugal.com" className="text-gold underline">privacidade@mooviaportugal.com</a></p>
            </section>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}

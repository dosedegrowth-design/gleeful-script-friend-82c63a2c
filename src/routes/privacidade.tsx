import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — MOOVIA Portugal" },
      { name: "description", content: "Como a MOOVIA Portugal recolhe, trata e protege os seus dados pessoais, em conformidade com o RGPD." },
      { property: "og:title", content: "Política de Privacidade — MOOVIA Portugal" },
      { property: "og:url", content: "https://beta.mooviaportugal.com/privacidade" },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "https://beta.mooviaportugal.com/privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <SiteLayout>
      <article className="bg-black pt-[120px]">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Compliance
          </p>
          <h1 className="font-sora text-[clamp(32px,5vw,56px)] font-[200] leading-[1.1] text-white">Política de Privacidade</h1>
          <p className="mt-4 text-w35 font-urbanist text-[13px]">Última atualização: junho de 2026</p>

          <div className="mt-12 space-y-10 font-urbanist text-[16px] font-[300] text-white/70 leading-[1.9]">
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">1. Responsável pelo tratamento</h2>
              <p>MOOVIA Portugal, Lda., com sede em Lisboa, Portugal, é a entidade responsável pelo tratamento dos dados pessoais recolhidos através deste site, em conformidade com o Regulamento (UE) 2016/679 (RGPD) e a Lei n.º 58/2019.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">2. Dados recolhidos</h2>
              <p>Recolhemos apenas os dados que nos fornece voluntariamente nos formulários de contacto e assessment: nome, e-mail, telefone, país de origem, dimensão do agregado, intenção de mudança e mensagem livre. Adicionalmente registamos dados técnicos (IP, browser, páginas visitadas) para fins analíticos.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">3. Finalidades</h2>
              <p>Os dados são tratados para: (i) responder ao seu pedido de contacto; (ii) prestar os serviços contratados; (iii) cumprir obrigações legais; (iv) melhorar a experiência do site através de métricas agregadas.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">4. Fundamento legal</h2>
              <p>Consentimento (art. 6.º/1/a do RGPD), execução de contrato (art. 6.º/1/b) e interesse legítimo (art. 6.º/1/f) na melhoria contínua do serviço.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">5. Conservação</h2>
              <p>Os dados são conservados pelo tempo estritamente necessário às finalidades acima e, em qualquer caso, nunca para além dos prazos legais aplicáveis (até 10 anos para registos contabilísticos).</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">6. Partilha com terceiros</h2>
              <p>Não vendemos nem cedemos os seus dados. Podem ser partilhados com subcontratantes (alojamento cloud, e-mail transacional, ferramentas de análise) sujeitos a acordos de tratamento e a transferências seguras dentro do EEE.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">7. Os seus direitos</h2>
              <p>Pode exercer, a qualquer momento, os direitos de acesso, retificação, apagamento, limitação, portabilidade e oposição, contactando-nos para <a href="mailto:privacidade@mooviaportugal.com" className="text-gold underline">privacidade@mooviaportugal.com</a>. Tem ainda o direito de reclamar junto da CNPD.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">8. Segurança</h2>
              <p>Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados contra acesso não autorizado, perda ou destruição.</p>
            </section>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}

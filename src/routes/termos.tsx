import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos e Condições — MOOVIA Portugal" },
      { name: "description", content: "Termos e condições de utilização do site e dos serviços de consultoria boutique da MOOVIA Portugal." },
      { property: "og:title", content: "Termos e Condições — MOOVIA Portugal" },
      { property: "og:url", content: "https://beta.mooviaportugal.com/termos" },
    ],
    links: [{ rel: "canonical", href: "https://beta.mooviaportugal.com/termos" }],
  }),
  component: Termos,
});

function Termos() {
  return (
    <SiteLayout>
      <article className="bg-black pt-[120px]">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-20">
          <p className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-6 flex items-center gap-3">
            <span className="w-6 h-px bg-gold" />
            Compliance
          </p>
          <h1 className="font-sora text-[clamp(32px,5vw,56px)] font-[200] leading-[1.1] text-white">Termos e Condições</h1>
          <p className="mt-4 text-w35 font-urbanist text-[13px]">Última atualização: junho de 2026</p>

          <div className="mt-12 space-y-10 font-urbanist text-[16px] font-[300] text-white/70 leading-[1.9]">
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">1. Objeto</h2>
              <p>Os presentes Termos regulam a utilização do site mooviaportugal.com e a contratação dos serviços de consultoria boutique de mobilidade internacional prestados pela MOOVIA Portugal, Lda.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">2. Serviços</h2>
              <p>A MOOVIA presta serviços de coordenação estratégica para transições internacionais, organizados em quatro pilares: Planeamento, Instalação, Integração e Estruturação. Cada mandato é descrito em proposta autónoma assinada pelas partes.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">3. Assessment</h2>
              <p>O Strategic Relocation Assessment tem o valor de €250, é entregue presencialmente ou por videoconferência e o respetivo montante é abatido em caso de contratação de mandato dentro de 90 dias.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">4. Pagamentos</h2>
              <p>Os valores devidos são pagos nos prazos definidos na proposta. O incumprimento autoriza a suspensão imediata da prestação dos serviços.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">5. Obrigações do cliente</h2>
              <p>O cliente compromete-se a fornecer informação verdadeira, completa e atualizada, indispensável à correta execução do mandato.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">6. Limitação de responsabilidade</h2>
              <p>A MOOVIA é uma consultoria de coordenação. Não substitui aconselhamento jurídico, fiscal, médico ou financeiro vinculativo de profissionais habilitados, sendo a responsabilidade limitada aos honorários efetivamente pagos pelo mandato em causa.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">7. Propriedade intelectual</h2>
              <p>Todo o conteúdo do site — textos, imagens, marcas e metodologias — é propriedade exclusiva da MOOVIA Portugal e não pode ser reproduzido sem autorização escrita.</p>
            </section>
            <section>
              <h2 className="font-sora text-2xl font-[200] text-white mb-4">8. Lei aplicável e foro</h2>
              <p>Aplica-se a lei portuguesa. Para qualquer litígio é competente o foro da Comarca de Lisboa, com renúncia expressa a qualquer outro.</p>
            </section>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}

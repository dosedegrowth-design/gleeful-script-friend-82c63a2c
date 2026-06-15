import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import sobreHero from "@/assets/sobre-hero.jpg";
import problemLisboa from "@/assets/problem-lisboa-planning.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — MOOVIA Portugal" },
      { name: "description", content: "Antes de coordenar transições internacionais, vivemos as nossas. Uma consultoria boutique nascida da experiência prática." },
      { property: "og:title", content: "Sobre a MOOVIA Portugal" },
      { property: "og:description", content: "Antes de coordenar transições internacionais, vivemos as nossas." },
      { property: "og:image", content: sobreHero },
      { name: "twitter:image", content: sobreHero },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      <Hero />
      <Historia />
      <Acreditamos />
      <Diferencia />
      <Boutique />
      <Simbolo />
      <Cta />
    </SiteLayout>
  );
}

/* ─────────────────────────── S2 — HERO ─────────────────────────── */
function Hero() {
  return (
    <section className="relative isolate min-h-[70vh] flex items-end overflow-hidden">
      <img
        src={sobreHero}
        alt="Lisboa ao entardecer"
        className="absolute inset-0 -z-20 h-full w-full object-cover saturate-[0.55] contrast-[1.15] brightness-[0.85] [filter:hue-rotate(-8deg)]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06091a]/95 via-[#06091a]/70 to-[#06091a]/30" />

      <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-20 pb-24 pt-[180px]">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-8 flex items-center gap-3"
        >
          <span className="w-6 h-px bg-gold" /> Sobre a MOOVIA Portugal
        </motion.p>
        <h1 className="font-display font-[200] text-white leading-[1.02] tracking-[-0.03em] text-[clamp(52px,7vw,96px)]">
          {[
            { t: "Antes de coordenar", cls: "" },
            { t: "transições internacionais,", cls: "" },
            { t: "vivemos as nossas.", cls: "text-gold-l italic font-[300]" },
          ].map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`block ${l.cls}`}
            >
              {l.t}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-6 max-w-[520px] font-body font-[300] text-[18px] text-w35 leading-[1.7]"
        >
          A MOOVIA não foi criada num escritório. Foi criada numa mudança de país com a família,
          com os mesmos erros, medos e decisões simultâneas que hoje coordenamos para os nossos
          clientes.
        </motion.p>
      </div>
    </section>
  );
}

/* ─────────────────────────── S3 — HISTÓRIA ─────────────────────────── */
function Historia() {
  const paragraphs = [
    "Em 2018, Frederico Prado veio para Lisboa com a família. Depois de 29 anos como executivo em empresas como Oracle, WeDo (SONAE) e Cipher, sabia navegar ambientes corporativos complexos. Mas não estava preparado para o que encontrou: dez decisões simultâneas, fornecedores desconectados e ninguém que coordenasse o todo.",
    "Escola para os filhos. Apartamento no bairro certo. NIF, NISS, conta bancária. Fiscalidade em dois países. Cônjuge reinventando a carreira do zero. Cada profissional resolvia a sua parte — e ninguém integrava a decisão inteira. A família ficou no meio, tentando ser o próprio gestor de uma transição para a qual não existia manual.",
    "A MOOVIA nasceu dessa experiência. Não como uma empresa de imigração, não como uma agência de relocation, não como um despachante com site bonito. Como uma consultoria boutique que coordena a jornada inteira — do primeiro diagnóstico aos 90 dias depois da chegada. Com o mesmo nível de cuidado que o Frederico gostaria de ter recebido em 2018.",
  ];
  return (
    <section className="bg-black py-[120px] px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <p className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6">A origem</p>
          <h2 className="font-display font-[200] text-white leading-[1.02] tracking-[-0.03em] text-[clamp(32px,4vw,52px)] mb-12">
            Uma empresa criada<br />de dentro para fora.
          </h2>
          <div className="space-y-8">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="font-body font-[300] text-[17px] text-w35 leading-[1.95]"
              >
                {p}
              </motion.p>
            ))}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="border-l-2 border-gold bg-[rgba(173,137,87,0.04)] py-6 px-7 font-body font-[300] text-[17px] text-white/85 leading-[1.85] italic"
            >
              "O produto principal da MOOVIA não é o mandato. É o cuidado com que cada mandato é
              conduzido. Isso não se escala sem critério."
            </motion.blockquote>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="lg:sticky lg:top-28"
        >
          <div className="relative overflow-hidden border border-b15">
            <img
              src={problemLisboa}
              alt="Frederico em Lisboa, 2018"
              className="w-full h-[560px] object-cover grayscale-[0.4] contrast-[1.1] brightness-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06091a]/30 to-transparent" />
          </div>
          <p className="mt-5 font-body font-[300] italic text-[12px] tracking-[0.04em] text-w35">
            Lisboa, 2018. O mesmo caminho que hoje coordenamos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────── S4 — ACREDITAMOS ─────────────────────────── */
function Acreditamos() {
  const blocos = [
    {
      n: "01",
      t: "Coordenação, não execução",
      d: "Existem centenas de profissionais que fazem vistos, encontram apartamentos, abrem empresas ou matriculam crianças em escolas. O que não existe — e é o que a MOOVIA faz — é alguém que coordena tudo isso ao mesmo tempo, com visão do todo e responsabilidade pelo resultado.",
    },
    {
      n: "02",
      t: "Personalização sem exceção",
      d: "Não temos pacotes. Não temos planos A, B ou C. Cada mandato começa do zero, a partir do diagnóstico do perfil de quem está à frente. Família com filhos e pets é diferente de investidor solteiro. Profissional de TI com proposta é diferente de empreendedor sem vínculo. A solução que serve um não serve o outro.",
    },
    {
      n: "03",
      t: "Acompanhamento que não termina na chegada",
      d: "Nenhum concorrente acompanha os 90 dias depois do pouso de forma estruturada. Nós acompanhamos. Porque sabemos, por experiência própria, que chegar é a parte mais fácil. O que define a qualidade da transição é o que acontece nas semanas seguintes.",
    },
  ];
  return (
    <section className="bg-black-2 py-[120px] px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6">O que nos guia</p>
        <h2 className="font-display font-[200] text-white leading-[1.02] tracking-[-0.03em] text-[clamp(32px,4vw,52px)] mb-16">
          Três coisas que a MOOVIA<br />nunca vai negociar.
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-b15">
          {blocos.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group relative bg-black-2 px-10 py-12 transition-colors duration-500 hover:bg-black-3 border-t-2 border-transparent hover:border-gold"
            >
              <span className="font-display font-[100] text-[60px] text-[rgba(173,137,87,0.08)] leading-none block mb-6">
                {b.n}
              </span>
              <h3 className="font-display font-[300] text-[22px] text-white mb-5">{b.t}</h3>
              <p className="font-body font-[300] text-[15px] text-w35 leading-[1.85]">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── S5 — DIFERENCIAL ─────────────────────────── */
function Diferencia() {
  const rows: Array<[string, string, string, string, string]> = [
    ["Visto e documentação", "✓", "✗", "✗", "✓"],
    ["Habitação", "✗", "✓", "✗", "✓"],
    ["Escola e educação", "✗", "✗", "✗", "✓"],
    ["Fiscalidade", "✗", "✗", "✗", "✓"],
    ["Adaptação familiar", "✗", "✗", "✗", "✓"],
    ["Pós-chegada 90 dias", "✗", "✗", "✗", "✓"],
    ["Pet relocation", "✗", "✗", "parcial", "✓"],
    ["Estruturação patrimonial", "✗", "✗", "✗", "✓"],
    ["Um único ponto de contato", "✗", "✗", "✗", "✓"],
  ];
  const headers = ["", "Empresa de Imigração", "Imobiliária", "Concierge", "MOOVIA"];

  const renderCell = (v: string, isMoovia: boolean) => {
    if (v === "✓") return <span className={isMoovia ? "text-gold-l text-[20px]" : "text-gold text-[16px]"}>✓</span>;
    if (v === "✗") return <span className="text-white/20 text-[16px]">✗</span>;
    return <span className="font-body text-[12px] text-w35 italic">{v}</span>;
  };

  return (
    <section className="bg-black py-[120px] px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6">Por que a MOOVIA</p>
        <h2 className="font-display font-[200] text-white leading-[1.05] tracking-[-0.03em] text-[clamp(28px,3.6vw,46px)] mb-8">
          Não somos uma empresa de imigração.<br />
          Não somos uma imobiliária.<br />
          Não somos um despachante.
        </h2>
        <p className="font-body font-[300] text-[17px] text-w35 leading-[1.7] max-w-[600px] mb-16">
          Somos o único ponto de responsabilidade para uma decisão que normalmente exige coordenar
          dez fornecedores diferentes ao mesmo tempo.
        </p>

        <div className="bg-black-2 border border-b15 overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="border-b border-b15">
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`text-left px-5 py-5 font-body text-[11px] tracking-[0.22em] uppercase ${
                      i === 4 ? "text-gold" : "text-w35"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="border-b border-b15 last:border-0"
                >
                  <td className="px-5 py-4 font-body font-[300] text-[14px] text-white/85">{row[0]}</td>
                  {row.slice(1).map((c, j) => (
                    <td
                      key={j}
                      className={`px-5 py-4 ${j === 3 ? "bg-[rgba(173,137,87,0.05)]" : ""}`}
                    >
                      {renderCell(c, j === 3)}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 font-body font-[300] text-[14px] italic text-w35">
          Os outros são fornecedores. A MOOVIA é o coordenador.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── S6 — BOUTIQUE ─────────────────────────── */
function Boutique() {
  return (
    <section className="relative bg-black py-[160px] px-6 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 [background:radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(9,24,61,0.6)_0%,transparent_65%)]" />
      <div className="relative max-w-[900px] mx-auto text-center">
        <p className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-8">A posição da marca</p>
        <h2 className="font-display font-[200] text-white leading-[1.05] tracking-[-0.03em] text-[clamp(28px,4.5vw,60px)] mx-auto max-w-[800px]">
          {["Acompanhamos um número limitado", "de mandatos em simultâneo."].map((l, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="block"
            >
              {l}
            </motion.span>
          ))}
        </h2>
        <div className="w-12 h-px bg-gold mx-auto my-9" />
        <p className="font-body font-[300] text-[17px] text-w35 leading-[1.95] max-w-[540px] mx-auto whitespace-pre-line">
{`Não por limitação operacional.
Porque acreditamos que decisões desta importância
exigem acompanhamento próximo, coordenação ativa
e atenção individual.

Para preservar este nível, aceitamos apenas o número
de novos mandatos que conseguimos coordenar
com a qualidade que a decisão exige.
Não mais. Não menos.`}
        </p>
        <p className="mt-8 font-body font-[300] text-[15px] text-w35">
          Se o seu caso merece isso, este é o lugar.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── S7 — SÍMBOLO ─────────────────────────── */
function Simbolo() {
  const itens = [
    { src: "/icons/aviao.svg", t: "O momento em que a decisão se torna irreversível" },
    { src: "/icons/ponte.svg", t: "A passagem entre dois mundos" },
    { src: "/icons/pessoa.svg", t: "As pessoas que a MOOVIA move, não os processos" },
    { src: "/icons/casa.svg", t: "O destino final de todo mandato" },
  ];
  return (
    <section className="bg-black-2 py-[120px] px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex justify-center">
          <motion.img
            src="/mooviagold.svg"
            alt="Isotipo MOOVIA"
            className="w-[280px] h-[280px] object-contain"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <div>
          <p className="font-body text-[11px] tracking-[0.32em] uppercase text-gold mb-6">
            O símbolo e o que ele diz
          </p>
          <h2 className="font-display font-[200] text-white leading-[1.02] tracking-[-0.03em] text-[clamp(32px,4vw,52px)] mb-8">
            Um azulejo.<br />Quatro histórias.<br />Uma só jornada.
          </h2>
          <p className="font-body font-[300] text-[17px] text-w35 leading-[1.95] mb-10">
            O símbolo da MOOVIA não é decoração. É um azulejo geométrico — o mesmo que cobre as
            paredes dos mosteiros, das estações de comboio e dos palácios de Lisboa há cinco
            séculos. E dentro dele estão escondidos quatro ícones que representam a jornada que
            coordenamos.
          </p>
          <ul className="space-y-4 mb-10">
            {itens.map((it, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 font-body font-[300] text-[15px] text-white/80"
              >
                <span className="text-gold">→</span>
                <img src={it.src} alt="" className="w-5 h-5 [filter:brightness(0)_saturate(100%)_invert(67%)_sepia(33%)_saturate(580%)_hue-rotate(360deg)_brightness(91%)_contrast(85%)]" />
                <span>{it.t}</span>
              </motion.li>
            ))}
          </ul>
          <p className="font-body font-[300] text-[16px] text-w35 leading-[1.85] italic">
            Cada elemento aparece quatro vezes no padrão — em rotação simétrica. Porque a jornada
            não tem um único sentido. Vai, volta, acompanha. Assim como a MOOVIA.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── S8 — CTA ─────────────────────────── */
function Cta() {
  return (
    <section className="bg-black py-[120px] px-6 lg:px-20">
      <div className="max-w-[760px] mx-auto text-center">
        <h2 className="font-display font-[200] text-white leading-[1.05] tracking-[-0.03em] text-[clamp(32px,4vw,52px)] mb-8">
          O primeiro passo<br />é a conversa certa.
        </h2>
        <p className="font-body font-[300] text-[17px] text-w35 leading-[1.7] max-w-[480px] mx-auto mb-12">
          Uma conversa direta com o Frederico. Sem custo. Sem script. Sem chatbot. 30 minutos para
          entender o seu caso e mostrar como a MOOVIA pensa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            hash="contacto"
            className="group relative overflow-hidden bg-gold text-black font-body font-[600] text-[12px] tracking-[0.22em] uppercase px-10 py-4 isolate"
          >
            <span className="absolute inset-0 bg-[#06091a] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 transition-colors group-hover:text-gold">Avaliar o meu caso</span>
          </Link>
          <Link
            to="/equipa"
            className="group relative overflow-hidden border border-b30 text-gold font-body font-[500] text-[12px] tracking-[0.22em] uppercase px-10 py-4 isolate hover:border-gold"
          >
            <span className="absolute inset-0 bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative z-10 transition-colors group-hover:text-[#06091a]">Ver a equipa</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "O que exatamente a MOOVIA Portugal faz?",
    a: "A MOOVIA Portugal coordena a jornada completa de transição internacional, do diagnóstico estratégico até os 90 dias após a chegada. Não somos uma empresa de imigração, não somos uma imobiliária, não somos uma escola. Somos o único ponto de responsabilidade para uma decisão que normalmente exige coordenar dez fornecedores diferentes ao mesmo tempo.",
  },
  {
    q: "O que é o Strategic Assessment de €250?",
    a: "É o primeiro produto da MOOVIA: não uma consulta, mas um trabalho estratégico real com entregável físico. 90 minutos com o founder, mapeamento completo do perfil, e um documento com mapa de decisão, estratégias e cronograma. Os €250 são abatidos integralmente no mandato.",
  },
  {
    q: "Qual a diferença entre a MOOVIA e uma empresa de imigração?",
    a: "Uma empresa de imigração resolve o visto. A MOOVIA coordena a decisão inteira, escola, imóvel, fiscalidade, integração familiar e os 90 dias depois da chegada. Você não nos contrata para resolver um problema. Nos contrata para que os problemas não apareçam.",
  },
  {
    q: "A MOOVIA trabalha com pacotes ou planos de serviço?",
    a: "Não. Cada cliente recebe uma proposta construída a partir do seu diagnóstico. Não existe plano A, B ou C. Existe um mandato personalizado. Um alfaiate não tem prateleira. Nós também não.",
  },
  {
    q: "Quanto tempo leva o processo de transição?",
    a: "Depende do perfil. Um profissional de TI com proposta de trabalho pode estar operacional em Portugal em 30 a 90 dias. Uma família em transição patrimonial pode levar de 3 a 12 meses. O cronograma real é definido no Assessment.",
  },
  {
    q: "Quanto custa a transição completa com a MOOVIA?",
    a: "Não publicamos tabela de preços porque não existem pacotes. O Assessment custa €250, abatidos no mandato. O mandato completo varia entre €3.000 e €10.000 dependendo do perfil e da complexidade.",
  },
  {
    q: "A MOOVIA atende apenas brasileiros?",
    a: "O foco principal é o corredor Brasil para Portugal. Atendemos também clientes de África lusófona. Se o seu caso está fora desses corredores, a conversa de qualificação define se temos o perfil certo.",
  },
];

export const FAQSection = () => {
  return (
    <section className="bg-black-2 py-[120px] px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-sora font-extralight text-4xl text-white mb-16 text-center reveal">Perguntas Frequentes</h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="border-none bg-transparent reveal"
            >
              <AccordionTrigger className="hover:no-underline group py-6 border-b border-border">
                <span className="font-urbanist font-normal text-left text-base text-white group-data-[state=open]:text-gold transition-colors">
                  {faq.q}
                </span>
                <Plus className="w-5 h-5 text-gold transition-transform duration-300 group-data-[state=open]:rotate-45" />
              </AccordionTrigger>
              <AccordionContent className="pt-6 pb-8 px-6 bg-gold/05 border-l-2 border-gold mt-2">
                <p className="font-urbanist font-light text-[15px] text-white/35 leading-[1.85]">
                  {faq.a}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "./LeadForm";

export function FormSection() {
  return (
    <section id="contacto" className="bg-black-2 py-[120px] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="pt-2">
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.28em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              O primeiro passo
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-amotha text-[clamp(32px,4vw,60px)] font-extralight leading-[1.06] tracking-[-0.02em] mb-6 text-white">
              A conversa<br/>
              <em className="text-gold-l not-italic italic">certa.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-urbanist text-[17px] font-light text-white-3 leading-[1.9] max-w-[680px] mb-10">
              Não é um formulário de contato. É o início de um diagnóstico. Quanto mais você nos contar, mais preciso será o nosso retorno.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="p-6 md:p-7 border-l-2 border-gold bg-gold/5">
              <p className="font-urbanist text-[15px] font-light text-white-3 leading-[1.8] italic">
                Cada contato é respondido pessoalmente pelo Frederico, sem chatbot, sem script.
              </p>
            </div>
          </Reveal>
        </div>
        
        <Reveal delay={200} distance={20} className="relative z-[100] isolate">
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}





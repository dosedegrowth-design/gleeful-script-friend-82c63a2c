import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "./LeadForm";

export function FormSection() {
  return (
    <section id="contacto" className="bg-black-2 py-[120px] px-6 lg:px-[80px] relative z-[1]">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-20 pointer-events-auto">
        <div className="pt-2">
          <Reveal>
            <div className="font-urbanist text-[11px] tracking-[0.32em] uppercase text-gold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-gold" />
              O primeiro passo
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-sora text-[clamp(32px,4vw,60px)] font-[200] leading-[1.06] tracking-[-0.02em] mb-6 text-white">
              A conversa<br/>
              <span className="text-gold-l italic">certa.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-urbanist text-[17px] font-[300] text-white/35 leading-[1.9] max-w-[680px] mb-10">
              Não é um formulário de contato. É o início de um diagnóstico. Quanto mais você nos contar, mais preciso será o nosso retorno.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="p-6 md:p-8 border-l-2 border-gold bg-gold/5 mb-10">
              <p className="font-urbanist text-[15px] font-[300] text-white/35 leading-[1.8] italic">
                "Cada contato é respondido pessoalmente pelo Frederico, sem chatbot, sem script."
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-12">
              {[
                "Resposta em até 2 horas em dias úteis",
                "Conversa direta com o founder",
                "Sem pitch, sem script",
                "Confidencial"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/35 font-urbanist text-[14px] font-[300]">
                  <span className="text-gold">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        
        <Reveal delay={200} distance={20} className="relative z-[100] isolate pointer-events-auto">
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}





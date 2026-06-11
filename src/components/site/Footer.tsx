import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { WhatsappLogo, LinkedinLogo, Globe } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-navy-deep py-24 px-6 lg:px-20 border-t border-line-gold">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-4 gap-16">
        <div className="lg:col-span-2">
           <div className="flex items-center gap-2 mb-8">
              <img src="/mooviagold.svg" alt="MOOVIA" className="h-8" />
           </div>
           <p className="font-urbanist text-[13px] font-[300] text-mut leading-[1.8] max-w-[260px] mt-5">
             Coordenação Internacional de Vida e Património.<br />
             Brasil → Portugal · África Lusófona
           </p>
        </div>

        <div className="flex flex-col gap-4">
           <h4 className="font-sora text-[12px] font-[400] tracking-[0.2em] uppercase text-cobre mb-4">A Jornada</h4>
           {["Assessment", "Como funciona", "Serviços", "Blog"].map(l => (
             <Link key={l} to="/" className="font-urbanist text-[13px] text-mut hover:text-off transition-colors">{l}</Link>
           ))}
        </div>

        <div className="flex flex-col gap-4">
           <h4 className="font-sora text-[12px] font-[400] tracking-[0.2em] uppercase text-cobre mb-4">Legal</h4>
           {["Termos", "Privacidade", "Compliance"].map(l => (
             <Link key={l} to="/" className="font-urbanist text-[13px] text-mut hover:text-off transition-colors">{l}</Link>
           ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] mt-24 pt-12 border-t border-line-cool flex flex-col md:flex-row justify-between items-center gap-8">
         <p className="font-urbanist text-[11px] text-mut">© 2026 MOOVIA Portugal. Todos os direitos reservados.</p>
         <div className="flex gap-6">
            <a href="#" className="text-mut hover:text-cobre transition-colors"><WhatsappLogo size={20} weight="thin"/></a>
            <a href="#" className="text-mut hover:text-cobre transition-colors"><LinkedinLogo size={20} weight="thin"/></a>
            <a href="#" className="text-mut hover:text-cobre transition-colors"><Globe size={20} weight="thin"/></a>
         </div>
      </div>
    </footer>
  );
}
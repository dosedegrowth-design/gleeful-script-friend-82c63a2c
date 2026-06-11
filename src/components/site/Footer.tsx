import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { WhatsappLogo, LinkedinLogo, Globe } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-line-cool py-[clamp(80px,10vh,120px)] px-6 lg:px-[80px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-20 mb-20">
          <div className="footer-brand">
            <Wordmark />
            <p className="font-urbanist text-[12px] tracking-[0.28em] uppercase text-mut-2 mt-6">Planejar · Chegar · Ficar</p>
            <p className="font-urbanist text-[15px] font-[300] text-mut max-w-[300px] mt-8 leading-relaxed">
              Coordenação Internacional de Vida e Património.<br />
              Brasil → Portugal · África Lusófona
            </p>
          </div>
          
          <div className="footer-col">
            <h5 className="font-urbanist text-[11px] tracking-[0.2em] uppercase text-cobre mb-10 font-[500]">Explorar</h5>
            <nav className="flex flex-col gap-4">
              {[
                { to: "/servicos", label: "Como funciona" },
                { to: "/assessment", label: "Assessment" },
                { to: "/blog", label: "Conteúdo" },
                { to: "/sobre", label: "A MOOVIA" },
                { to: "/contacto", label: "Avaliar Caso" }
              ].map((link) => (
                <Link 
                  key={link.label}
                  to={link.to} 
                  className="font-urbanist text-[15px] font-[300] text-mut hover:text-latte transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="footer-col">
            <h5 className="font-urbanist text-[11px] tracking-[0.2em] uppercase text-cobre mb-10 font-[500]">Contacto</h5>
            <div className="flex flex-col gap-6">
              <a href="https://mooviaportugal.com" className="flex items-center gap-3 font-urbanist text-[15px] font-[300] text-mut hover:text-latte transition-colors group">
                <Globe size={18} weight="thin" className="text-cobre group-hover:rotate-12 transition-transform" />
                mooviaportugal.com
              </a>
              <a href="https://wa.me/351913000000" className="flex items-center gap-3 font-urbanist text-[15px] font-[300] text-mut hover:text-latte transition-colors group">
                <WhatsappLogo size={18} weight="thin" className="text-cobre group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-3 font-urbanist text-[15px] font-[300] text-mut hover:text-latte transition-colors group">
                <LinkedinLogo size={18} weight="thin" className="text-cobre group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-line-cool font-urbanist text-[12px] font-[300] text-mut-2">
          <span>© 2026 MOOVIA Portugal · Todos os direitos reservados</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-off transition-colors">Privacidade</a>
            <a href="#" className="hover:text-off transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-black-2 border-t border-border py-[72px] px-6 lg:px-[80px] pb-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-20 mb-[56px]">
          <div className="footer-brand">
            <div className="font-amotha text-[28px] tracking-[0.04em] text-white mb-0">
              MOO<span className="text-gold-l">VIA</span>
            </div>
            <p className="font-urbanist text-[11px] tracking-[0.3em] uppercase text-white-4 mb-3">
              Portugal
            </p>
            <p className="font-urbanist text-[10px] tracking-[0.2em] uppercase text-white/10">
              Planejar · Chegar · Ficar
            </p>
          </div>

          
          <div className="footer-col">
            <h5 className="font-urbanist text-[11px] tracking-[0.2em] uppercase text-gold mb-5 font-medium">Serviços</h5>
            <div className="flex flex-col gap-2.5">
              <Link to="/assessment" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">Assessment</Link>
              <Link to="/servicos" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">Pilares</Link>
              <Link to="/blog" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">Blog</Link>
              <Link to="/sobre" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">Sobre</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h5 className="font-urbanist text-[11px] tracking-[0.2em] uppercase text-gold mb-5 font-medium">Contacto</h5>
            <div className="flex flex-col gap-2.5">
              <a href="https://mooviaportugal.com" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">mooviaportugal.com</a>
              <a href="https://wa.me/351913000000" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">WhatsApp</a>
              <a href="https://linkedin.com" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border font-urbanist text-[12px] font-light text-white-4">
          <span>© 2026 MOOVIA Portugal</span>
          <span className="hidden md:inline">Brasil → Portugal · África Lusófona</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

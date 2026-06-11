import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-black-2 border-t border-border py-[72px] px-6 lg:px-[80px] pb-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-[72px]">
          <div className="footer-brand">
            <Link to="/" className="flex flex-col group">
              <div className="flex items-baseline gap-2">
                <span className="font-sora text-[28px] font-[500] text-gold-l tracking-[0.04em] uppercase">MOOVIA</span>
              </div>
              <span className="font-urbanist text-[13px] font-[300] text-white/35 tracking-[0.3em] uppercase">Portugal</span>
            </Link>
            <p className="font-urbanist text-[12px] tracking-[0.28em] uppercase text-white/12 mt-4">Planejar · Chegar · Ficar</p>
            <p className="font-urbanist text-[13px] font-[300] text-white/35 max-w-[260px] mt-6 leading-relaxed">
              Coordenação Internacional de Vida e Património.<br />
              Brasil → Portugal · África Lusófona
            </p>
          </div>

          
          <div className="footer-col">
            <h5 className="font-urbanist text-[11px] tracking-[0.2em] uppercase text-gold mb-[18px] font-[500]">Serviços</h5>
            <div className="flex flex-col gap-2.5">
              <Link to="/assessment" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">Assessment</Link>
              <Link to="/servicos" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">Pilares</Link>
              <Link to="/blog" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">Blog</Link>
              <Link to="/sobre" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">Sobre</Link>
            </div>
          </div>
          
          <div className="footer-col">
            <h5 className="font-urbanist text-[11px] tracking-[0.2em] uppercase text-gold mb-[18px] font-[500]">Contacto</h5>
            <div className="flex flex-col gap-2.5">
              <a href="https://mooviaportugal.com" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">mooviaportugal.com</a>
              <a href="https://wa.me/351913000000" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">WhatsApp</a>
              <a href="https://linkedin.com" className="font-urbanist text-[14px] font-light text-white-3 hover:text-gold-l transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-[28px] border-t border-border font-urbanist text-[12px] font-[300] text-white/12">
          <span>© 2026 MOOVIA Portugal · Todos os direitos reservados</span>
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

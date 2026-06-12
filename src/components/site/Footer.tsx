import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-black-2 border-t border-b18 py-20 px-6 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-3 gap-20 lg:gap-8 mb-20">
          
          {/* ESQUERDA */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex flex-col items-start mb-6">
              <img src="/moovia-logotype.png" alt="MOOVIA Portugal" className="h-[40px] w-auto object-contain" />
            </Link>
            <p className="font-urbanist text-[12px] font-[400] tracking-[0.28em] uppercase text-w12 mb-6">Planejar · Chegar · Ficar</p>
            <p className="font-urbanist text-[13px] font-[300] text-w35 max-w-[260px] leading-relaxed">
              Coordenação Internacional de Vida e Património. Brasil → Portugal · África Lusófona
            </p>
          </div>

          {/* CENTRO */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h5 className="font-urbanist font-[500] text-[11px] tracking-[0.2em] uppercase text-gold">Serviços</h5>
              <div className="flex flex-col gap-3">
                {["Como funciona", "Assessment", "4 Pilares", "Blog", "Sobre", "Contacto"].map(link => (
                  <Link key={link} to="/#" className="font-urbanist text-[14px] font-[300] text-w35 hover:text-gold-l transition-colors">{link}</Link>
                ))}
              </div>
            </div>
          </div>

          {/* DIREITA */}
          <div className="flex flex-col gap-6">
            <h5 className="font-urbanist font-[500] text-[11px] tracking-[0.2em] uppercase text-gold">Contacto</h5>
            <div className="flex flex-col gap-3 font-urbanist text-[14px] font-[300] text-w35">
              <a href="mailto:contato@mooviaportugal.com" className="hover:text-gold-l transition-colors">mooviaportugal.com</a>
              <a href="https://wa.me/351913000000" className="hover:text-gold-l transition-colors">WhatsApp</a>
              <a href="#" className="hover:text-gold-l transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-gold-l transition-colors">E-mail</a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-b18 flex flex-col md:flex-row justify-between items-center gap-6 font-urbanist text-[12px] font-[300] text-w12">
          <span>© 2026 MOOVIA Portugal · Todos os direitos reservados</span>
          <span>Brasil → Portugal · África Lusófona</span>
          <div className="flex gap-8">
            <Link to="/#">Privacidade</Link>
            <Link to="/#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

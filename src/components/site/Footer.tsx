import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-black-2 border-t border-b18 pt-20 px-6 lg:px-20 pb-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
          {/* Coluna 1: Logo */}
          <div>
            <div className="flex flex-col group mb-8">
              <div className="flex items-baseline">
                <span className="font-sora text-[28px] font-[500] text-gold-l tracking-[0.04em] uppercase">MO</span>
                <span className="font-sora text-[28px] font-[500] text-gold tracking-[0.04em] uppercase">O</span>
                <span className="font-sora text-[28px] font-[500] text-gold-l tracking-[0.04em] uppercase">VIA</span>
              </div>
              <span className="font-urbanist text-[14px] font-[300] text-w35 tracking-[0.3em] uppercase -mt-1">Portugal</span>
            </div>
            <p className="font-urbanist text-[12px] tracking-[0.28em] uppercase text-w12 mb-6">Planejar · Chegar · Ficar</p>
            <p className="font-urbanist text-[13px] font-[300] text-w35 max-w-[260px] leading-relaxed">
              "Coordenação Internacional de Vida e Património. Brasil → Portugal · África Lusófona"
            </p>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h5 className="font-urbanist text-[11px] font-[500] tracking-[0.2em] uppercase text-gold mb-8">Serviços</h5>
            <div className="flex flex-col gap-3">
               {["Como funciona", "Assessment", "4 Pilares", "Blog", "Sobre", "Contacto"].map(l => (
                 <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="font-urbanist text-[14px] font-[300] text-w35 hover:text-gold-l transition-colors w-fit">{l}</a>
               ))}
            </div>
          </div>

          {/* Coluna 3: Contacto */}
          <div>
            <h5 className="font-urbanist text-[11px] font-[500] tracking-[0.2em] uppercase text-gold mb-8">Contacto</h5>
            <div className="flex flex-col gap-3">
               <a href="https://mooviaportugal.com" className="font-urbanist text-[14px] font-[300] text-w35 hover:text-gold-l transition-colors w-fit">mooviaportugal.com</a>
               <a href="https://wa.me/351913000000" className="font-urbanist text-[14px] font-[300] text-w35 hover:text-gold-l transition-colors w-fit">WhatsApp</a>
               <a href="https://linkedin.com" className="font-urbanist text-[14px] font-[300] text-w35 hover:text-gold-l transition-colors w-fit">LinkedIn</a>
               <a href="mailto:contato@mooviaportugal.com" className="font-urbanist text-[14px] font-[300] text-w35 hover:text-gold-l transition-colors w-fit">E-mail</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-b18 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-urbanist text-[12px] font-[300] text-w12">© 2026 MOOVIA Portugal · Todos os direitos reservados</p>
          <p className="font-urbanist text-[12px] font-[300] text-w12 hidden md:block">Brasil → Portugal · África Lusófona</p>
          <div className="flex gap-6 font-urbanist text-[12px] font-[300] text-w12">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

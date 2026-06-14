export const Footer = () => {
  return (
    <footer className="bg-black-2 border-t border-border pt-[72px] pb-10 px-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-20 mb-20">
        <div>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-urbanist font-bold text-2xl text-white">MOO</span>
            <span className="font-urbanist font-bold text-2xl text-gold-l">VIA</span>
          </div>
          <div className="font-urbanist font-normal text-[12px] uppercase tracking-[0.28em] text-white/20">
            Planejar · Chegar · Ficar
          </div>
        </div>

        <div>
          <h4 className="font-urbanist font-normal text-[10px] uppercase tracking-widest text-white/20 mb-6">Serviços</h4>
          <ul className="space-y-4 font-urbanist font-light text-[13px] text-white/40">
            <li><a href="#" className="hover:text-gold transition-colors">Assessment</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Pilares</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Sobre</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-urbanist font-normal text-[10px] uppercase tracking-widest text-white/20 mb-6">Contato</h4>
          <ul className="space-y-4 font-urbanist font-light text-[13px] text-white/40">
            <li><a href="#" className="hover:text-gold transition-colors">mooviaportugal.com</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">WhatsApp</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 font-urbanist font-light text-[12px] text-white/20">
        <div>© 2026 MOOVIA Portugal | Brasil → Portugal</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

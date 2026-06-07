import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(250,250,247,0.65)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Wordmark tone="light" />
            <p
              className="mt-6 font-display italic text-sm"
              style={{ color: "var(--copper-mid)", fontWeight: 200, letterSpacing: "0.04em" }}
            >
              Planejar · Chegar · Ficar
            </p>
            <p className="mt-8 text-sm leading-relaxed max-w-xs" style={{ color: "rgba(250,250,247,0.45)" }}>
              Coordenação Internacional de Vida e Património. Brasil → Portugal · África Lusófona.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-6" style={{ color: "var(--copper-mid)" }}>Navegação</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/servicos" className="hover:text-ivory transition" style={{ color: "rgba(250,250,247,0.7)" }}>Serviços</Link></li>
              <li><Link to="/assessment" className="hover:text-ivory transition" style={{ color: "rgba(250,250,247,0.7)" }}>Assessment</Link></li>
              <li><Link to="/sobre" className="hover:text-ivory transition" style={{ color: "rgba(250,250,247,0.7)" }}>Sobre</Link></li>
              <li><Link to="/blog" className="hover:text-ivory transition" style={{ color: "rgba(250,250,247,0.7)" }}>Blog</Link></li>
              <li><Link to="/contacto" className="hover:text-ivory transition" style={{ color: "rgba(250,250,247,0.7)" }}>Contacto</Link></li>
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-6" style={{ color: "var(--copper-mid)" }}>Contacto</div>
            <p className="text-sm">mooviaportugal.com</p>
            <p className="text-sm mt-2">Lisboa, Portugal</p>
            <div className="flex gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.16em]" style={{ color: "var(--copper-mid)" }}>LinkedIn</a>
              <a href="https://wa.me/351912345678" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-[0.16em]" style={{ color: "var(--copper-mid)" }}>WhatsApp</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between gap-4 text-xs" style={{ borderColor: "rgba(228,224,220,0.1)", color: "rgba(250,250,247,0.4)" }}>
          <span>© 2026 MOOVIA Portugal</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ivory">Política de Privacidade</a>
            <a href="#" className="hover:text-ivory">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

const links = [
  { to: "/servicos", label: "Como funciona" },
  { to: "/servicos", label: "Serviços" },
  { to: "/assessment", label: "Assessment" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,250,247,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link to="/"><Wordmark /></Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.label} to={l.to} className="nav-link">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className="hidden md:inline-flex items-center justify-center px-5 py-3 text-[11px] tracking-[0.16em] uppercase font-medium transition-colors"
            style={{ background: "var(--ink)", color: "var(--ivory)" }}
          >
            Avaliar meu caso
          </Link>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col"
          style={{ background: "var(--ink)" }}
        >
          <div className="flex items-center justify-between px-6 h-[72px]">
            <Wordmark tone="light" />
            <button onClick={() => setOpen(false)} aria-label="Fechar">
              <X size={22} color="var(--ivory)" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-8 px-10">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl"
                style={{ color: "var(--ivory)", fontWeight: 200 }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-6 inline-block px-6 py-4 text-xs tracking-[0.16em] uppercase font-medium w-fit"
              style={{ background: "var(--copper-mid)", color: "var(--ink)" }}
            >
              Avaliar meu caso
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

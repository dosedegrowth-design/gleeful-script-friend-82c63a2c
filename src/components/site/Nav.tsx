import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
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
    <nav
      id="nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-[900] px-6 md:px-[60px] h-[72px] flex items-center justify-between transition-all duration-500 ease-in-out",
        scrolled ? "bg-black/92 backdrop-blur-[20px] border-b border-border" : "bg-transparent"
      )}
    >
      <Wordmark />

      <div className="hidden lg:flex items-center gap-10">
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="font-urbanist text-[13px] font-normal tracking-[0.1em] uppercase text-white-3 hover:text-white relative transition-colors group"
          >
            {l.label}
            <span className="absolute -bottom-[2px] left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        <Link
          to="/contacto"
          className="bg-transparent border border-border-2 text-gold-l px-6 py-[10px] font-urbanist text-[12px] tracking-[0.16em] uppercase transition-all duration-300 hover:bg-gold hover:text-black hover:border-gold"
        >
          Avaliar meu caso
        </Link>
      </div>

      <button
        className="lg:hidden p-2 text-white-3 hover:text-white transition-colors"
        onClick={() => setOpen(true)}
      >
        <Menu size={24} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col p-6">
          <div className="flex items-center justify-between h-[72px] mb-8">
            <Wordmark />
            <button onClick={() => setOpen(false)} className="text-white-3">
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-amotha text-3xl font-light text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="bg-gold text-black text-center py-4 font-urbanist text-sm font-semibold tracking-widest uppercase mt-4"
            >
              Avaliar meu caso
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

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
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-[900] px-6 md:px-[80px] h-[88px] flex items-center justify-between transition-all duration-500 ease-in-out",
        scrolled ? "bg-black/95 backdrop-blur-[24px] border-b border-white/05 h-[72px]" : "bg-transparent",
        !isVisible && "translate-y-[-100%] opacity-0"
      )}
    >
      <Wordmark />

      <div className="hidden lg:flex items-center gap-12">
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="font-urbanist text-[13px] font-normal tracking-[0.12em] uppercase text-white/40 hover:text-white relative transition-colors group"
          >
            {l.label}
            <span className="absolute -bottom-[4px] left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        <Link
          to="/contacto"
          className="bg-transparent border border-border/40 text-gold-l px-8 py-[12px] font-urbanist text-[12px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold hover:text-black hover:border-gold"
        >
          Avaliar meu caso
        </Link>
      </div>

      <button
        className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
        onClick={() => setOpen(true)}
      >
        <Menu size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col p-8 animate-[fadeUp_0.4s_ease_forwards]">
          <div className="flex items-center justify-between h-[88px] mb-12">
            <Wordmark />
            <button onClick={() => setOpen(false)} className="text-white/60">
              <X size={36} />
            </button>
          </div>
          <div className="flex flex-col gap-10">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-amotha text-4xl font-light text-white tracking-tight"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="bg-gold text-black text-center py-5 font-urbanist text-sm font-semibold tracking-[0.25em] uppercase mt-6"
            >
              Avaliar meu caso
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

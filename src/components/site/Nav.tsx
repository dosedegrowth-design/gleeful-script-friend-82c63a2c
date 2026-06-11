import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Como funciona", hash: "#processo" },
  { to: "/", label: "Serviços", hash: "#servicos" },
  { to: "/", label: "Assessment", hash: "#assessment" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-[900] px-6 lg:px-20 h-[80px] flex items-center justify-between transition-all duration-500",
        scrolled ? "glass h-[68px]" : "bg-transparent"
      )}
    >
      <Wordmark />

      <div className="hidden lg:flex items-center gap-10">
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            hash={l.hash}
            className="font-mono text-[10px] font-[400] tracking-[0.2em] uppercase text-mut hover:text-off relative transition-colors group"
          >
            {l.label}
            <span className="absolute -bottom-[4px] left-0 w-0 h-px bg-cobre transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        
        <Link
          to="/contacto"
          className="wipe-btn bg-cobre text-navy-deep px-6 py-2.5 font-mono text-[10px] font-[600] tracking-[0.2em] uppercase transition-all duration-300 rounded-sm active:scale-95"
        >
          Avaliar meu caso
        </Link>
      </div>

      <button
        className="lg:hidden p-2 text-mut hover:text-off transition-colors"
        onClick={() => setOpen(true)}
      >
        <List size={28} weight="thin" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[1000] bg-navy flex flex-col p-8"
          >
            <div className="flex items-center justify-between h-[80px] mb-12">
              <Wordmark />
              <button onClick={() => setOpen(false)} className="text-mut">
                <X size={32} weight="thin" />
              </button>
            </div>
            <div className="flex flex-col gap-10">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="font-display text-[36px] font-[200] text-off tracking-tight"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="wipe-btn bg-cobre text-navy-deep text-center py-5 font-urbanist text-[13px] font-[600] tracking-[0.25em] uppercase mt-6"
              >
                Avaliar meu caso
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
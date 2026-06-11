import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";
import { motion, AnimatePresence } from "framer-motion";

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
        "fixed top-0 left-0 right-0 z-[900] px-6 lg:px-20 h-[68px] flex items-center justify-between transition-all duration-500",
        scrolled ? "nav-glass" : "bg-transparent"
      )}
    >
      <Wordmark />

      <div className="hidden lg:flex items-center gap-10">
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="font-urbanist text-[12px] font-[400] tracking-[0.12em] uppercase text-w35 hover:text-white relative transition-colors group"
          >
            {l.label}
            <span className="absolute -bottom-[4px] left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        
        <Link
          to="/contacto"
          className="border border-b35 text-gold-l px-6 py-2.5 font-urbanist text-[12px] font-[600] tracking-[0.18em] uppercase transition-all duration-300 hover:bg-gold hover:text-black hover:border-gold"
        >
          Avaliar meu caso
        </Link>
      </div>

      <button
        className="lg:hidden p-2 text-w35 hover:text-white transition-colors"
        onClick={() => setOpen(true)}
      >
        <List size={28} weight="thin" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 z-[1000] bg-black flex flex-col p-8"
          >
            <div className="flex items-center justify-between h-[68px] mb-12">
              <Wordmark />
              <button onClick={() => setOpen(false)} className="text-w35">
                <X size={32} weight="thin" />
              </button>
            </div>
            <div className="flex flex-col gap-10">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-sora text-[36px] font-[200] text-white tracking-tight"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="bg-gold text-black text-center py-5 font-urbanist text-[13px] font-[600] tracking-[0.25em] uppercase mt-6"
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

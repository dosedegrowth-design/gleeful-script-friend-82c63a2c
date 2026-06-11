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
        "fixed top-0 left-0 right-0 z-[900] px-6 lg:px-[80px] h-[88px] flex items-center justify-between transition-all duration-500 ease-in-out",
        scrolled ? "glass h-[68px]" : "bg-transparent",
        !isVisible && "translate-y-[-100%] opacity-0"
      )}
    >
      <Wordmark />

      <div className="hidden lg:flex items-center gap-10">
        {links.map((l) => (
          <Link
            key={l.label}
            to={l.to}
            className="font-urbanist text-[12px] font-normal tracking-[0.12em] uppercase text-mut hover:text-off relative transition-colors group"
          >
            {l.label}
            <span className="absolute -bottom-[4px] left-0 w-0 h-[1.5px] bg-cobre transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        <Link
          to="/contacto"
          className="bg-transparent border border-line-gold text-latte px-6 py-2.5 font-urbanist text-[12px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-cobre hover:text-navy-deep hover:border-cobre rounded-none relative overflow-hidden group"
        >
          <span className="relative z-10">Avaliar meu caso</span>
          <div className="absolute inset-0 bg-latte origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 z-[1000] bg-navy-deep flex flex-col p-8"
          >
            <div className="flex items-center justify-between h-[88px] mb-12">
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
                  onClick={() => setOpen(false)}
                  className="font-sora text-[36px] font-[200] text-off tracking-tight"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setOpen(false)}
                className="bg-cobre text-navy-deep text-center py-5 font-urbanist text-[13px] font-semibold tracking-[0.25em] uppercase mt-6"
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

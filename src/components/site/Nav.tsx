import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Como funciona", to: "/#processo" },
    { name: "Serviços", to: "/#servicos" },
    { name: "Assessment", to: "/#assessment" },
    { name: "Blog", to: "/blog" },
    { name: "Contacto", to: "/#contacto" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[900] h-[68px] flex items-center px-6 lg:px-20 transition-all duration-300 ${
        scrolled ? "bg-[#06091a]/92 backdrop-blur-[20px] border-b border-b18" : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 mr-auto group">
        <div className="w-10 h-10 flex items-center justify-center border border-gold/20 rounded-lg bg-black/40 backdrop-blur-sm group-hover:border-gold transition-colors duration-500">
          <img src="/mooviagold.png" alt="MOOVIA" className="w-6 h-6 object-contain" />
        </div>
        <div className="flex flex-col items-start">
          <span className="font-sora font-[500] text-[22px] text-gold-l tracking-[0.04em] leading-none">MOOVIA</span>
          <span className="font-urbanist font-[300] text-[11px] text-w35 tracking-[0.32em] uppercase leading-none mt-1">Portugal</span>
        </div>
      </Link>

      {/* LINKS (Desktop) */}
      <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        {links.map(link => (
          <Link 
            key={link.name} 
            to={link.to} 
            className="font-urbanist font-[400] text-[12px] tracking-[0.12em] uppercase text-w35 hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* CTA (Desktop) */}
      <Link 
        to="/#contacto" 
        className="hidden lg:block border border-b35 text-gold-l font-urbanist font-[600] text-[12px] tracking-[0.18em] uppercase px-6 py-2.5 hover:bg-gold hover:text-black hover:border-gold transition-all"
      >
        Avaliar meu caso
      </Link>

      {/* Hamburger */}
      <button 
        className="lg:hidden flex flex-col gap-1.5 z-[1001]"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <div className={`w-6 h-px bg-gold transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
        <div className={`w-6 h-px bg-gold transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
        <div className={`w-6 h-px bg-gold transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 bg-[#06091a] z-[1000] flex flex-col items-center justify-center gap-8"
          >
            {links.map(link => (
              <Link 
                key={link.name} 
                to={link.to} 
                onClick={() => setMobileOpen(false)}
                className="font-sora font-[200] text-[36px] text-white hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/#contacto" 
              onClick={() => setMobileOpen(false)}
              className="mt-4 border border-gold text-gold font-urbanist font-[600] text-[14px] tracking-[0.2em] uppercase px-10 py-4"
            >
              Avaliar meu caso
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

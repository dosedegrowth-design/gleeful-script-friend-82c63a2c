import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { useSiteContent } from "@/lib/useSiteContent";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();
  const { data: cms } = useSiteContent();
  const cmsText = (k: string, fb: string) => (cms && cms[k]) || fb;
  const logoIcon = cmsText("brand.logo_icon", "/mooviagold.png");
  const logoWord = cmsText("brand.logo_wordmark", "/moovia-logotype.png");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: cmsText("nav.link_servicos", t("nav.services")), to: "/servicos" },
    { name: cmsText("nav.link_assessment", t("nav.assessment")), to: "/assessment" },
    { name: cmsText("nav.link_sobre", "Sobre"), to: "/sobre" },
    { name: cmsText("nav.link_equipa", "Equipa"), to: "/equipa" },
    { name: cmsText("nav.link_blog", t("nav.blog")), to: "/blog" },
    { name: cmsText("nav.link_contacto", t("nav.contact")), to: "/contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[900] h-[68px] flex items-center px-6 lg:px-20 transition-all duration-300 ${
        scrolled ? "bg-[#06091a]/92 backdrop-blur-[20px] border-b border-b18" : "bg-transparent"
      }`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 mr-auto group">
        <img src={logoIcon} alt="MOOVIA" className="w-9 h-9 object-contain group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out" />
        <div className="flex flex-col items-start h-[30px] justify-center ml-1">
          <img src={logoWord} alt="MOOVIA Portugal" className="h-[28px] w-auto object-contain brightness-110" />
        </div>
      </Link>

      {/* LINKS (Desktop) */}
      <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="font-body font-[400] text-[12px] tracking-[0.12em] uppercase text-w35 hover:text-white transition-colors relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* CTA + Language (Desktop) */}
      <div className="hidden lg:flex items-center gap-4">
        <LanguageSwitcher />
        <Link
          to="/#contacto"
          className="border border-b35 text-gold-l font-body font-[600] text-[12px] tracking-[0.18em] uppercase px-6 py-2.5 hover:bg-gold hover:text-black hover:border-gold transition-all"
        >
          {cmsText("nav.cta", t("nav.cta"))}
        </Link>
      </div>

      {/* Mobile language + hamburger */}
      <div className="lg:hidden flex items-center gap-3 ml-auto">
        <LanguageSwitcher compact />
        <button
          className="flex flex-col gap-1.5 z-[1001]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className={`w-6 h-px bg-gold transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-px bg-gold transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-px bg-gold transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

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
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-display font-[200] text-[36px] text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Link
              to="/#contacto"
              onClick={() => setMobileOpen(false)}
              className="mt-4 border border-gold text-gold font-body font-[600] text-[14px] tracking-[0.2em] uppercase px-10 py-4"
            >
              {cmsText("nav.cta", t("nav.cta"))}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

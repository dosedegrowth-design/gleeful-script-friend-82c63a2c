import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Como funciona', href: '#como-funciona' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Assessment', href: '#assessment' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-8 py-6',
        isScrolled
          ? 'bg-black/92 backdrop-blur-xl border-bottom border-border py-4'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-baseline gap-2 group cursor-pointer">
          <span className="text-gold-l font-urbanist font-bold text-xl tracking-tight">MOOVIA</span>
          <span className="text-white/35 font-urbanist font-light text-[10px] uppercase tracking-[0.32em]">
            Portugal
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group font-urbanist font-normal text-[13px] uppercase tracking-[0.1em] text-white/35 hover:text-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button className="btn-ghost py-2.5 px-6 text-[11px]">
          Avaliar meu caso
        </button>
      </div>
    </nav>
  );
};

import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-4 group">
      <div className="w-10 h-10 text-gold-l group-hover:scale-110 transition-transform duration-500">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(173,137,87,0.2)]">
          <path d="M100 25 L110 35 H165 V90 L175 100 L165 110 V165 H110 L100 175 L90 165 H35 V110 L25 100 L35 90 V35 H90 L100 25 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05"/>
          <path d="M100 25 L110 35 H165 V90 L175 100 L165 110 V165 H110 L100 175 L90 165 H35 V110 L25 100 L35 90 V35 H90 L100 25 Z" stroke="currentColor" strokeWidth="0.8" fill="none"/>
          <circle cx="100" cy="100" r="12" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        </svg>
      </div>
      <div className="flex flex-col gap-0">
        <div className="font-amotha text-[26px] tracking-[0.04em] text-white leading-none">
          MOO<span className="text-gold-l">VIA</span>
        </div>
        <span className="font-urbanist text-[10px] tracking-[0.35em] uppercase text-white/30 mt-[3px]">
          Portugal
        </span>
      </div>
    </Link>
  );
}

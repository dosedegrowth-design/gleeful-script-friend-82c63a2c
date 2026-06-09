import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-4 group">
      <div className="w-10 h-10 text-gold-l group-hover:scale-110 transition-transform duration-500">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(173,137,87,0.2)]">
          <path d="M100 20 L115 35 H165 V85 L180 100 L165 115 V165 H115 L100 180 L85 165 H35 V115 L20 100 L35 85 V35 H85 L100 20 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05"/>
          <path d="M100 20 L115 35 H165 V85 L180 100 L165 115 V165 H115 L100 180 L85 165 H35 V115 L20 100 L35 85 V35 H85 L100 20 Z" stroke="currentColor" strokeWidth="0.8" fill="none"/>
          <circle cx="100" cy="100" r="10" stroke="currentColor" strokeWidth="0.8" fill="none"/>
          <path d="M100 92 V108 M92 100 H108" stroke="currentColor" strokeWidth="0.8"/>
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

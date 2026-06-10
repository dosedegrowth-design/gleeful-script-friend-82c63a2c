import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-4 group">
      <div className="w-10 h-10 group-hover:scale-110 transition-transform duration-500">
        <img 
          src="/mooviagold.svg" 
          alt="MOOVIA Logo" 
          className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(173,137,87,0.2)]"
        />
      </div>
      <div className="flex flex-col gap-0">
        <div className="font-amotha text-[26px] tracking-[0.04em] text-white leading-none">
          MO<span className="text-[#cead84]">O</span>VIA
        </div>
        <span className="font-urbanist text-[10px] tracking-[0.35em] uppercase text-white/30 mt-[3px]">
          Portugal
        </span>
      </div>
    </Link>
  );
}
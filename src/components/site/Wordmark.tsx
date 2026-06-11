import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-4 group">
      <div className="w-10 h-10 group-hover:scale-110 transition-transform duration-500">
        <img 
          src="/mooviagold.svg" 
          alt="MOOVIA Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-0">
        <div className="font-amotha text-[26px] tracking-[0.14em] text-white leading-none uppercase">
          MO<span className="text-gold">O</span>VIA
        </div>
        <span className="font-sora text-[10px] tracking-[0.5em] uppercase text-white/30 mt-[3px]">
          PORTUGAL
        </span>
      </div>
    </Link>
  );
}
import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex flex-col group gap-0.5">
      <div className="h-10 group-hover:scale-105 transition-transform duration-500">
        <img 
          src="/mooviagold.svg" 
          alt="MOOVIA Logo" 
          className="h-full w-auto object-contain"
        />
      </div>
      <p className="font-sora text-[8px] tracking-[0.34em] uppercase text-white/20 transition-colors group-hover:text-white/40">
        Planejar · Chegar · Ficar
      </p>
    </Link>
  );
}
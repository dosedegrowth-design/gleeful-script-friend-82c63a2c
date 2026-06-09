import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex flex-col gap-0 group">
      <div className="font-amotha text-[28px] tracking-[0.04em] text-white leading-none">
        MOO<span className="text-gold-l">VIA</span>
      </div>
      <span className="font-urbanist text-[10px] tracking-[0.32em] uppercase text-white-3 mt-[2px] ml-[2px]">
        Portugal
      </span>
    </Link>
  );
}




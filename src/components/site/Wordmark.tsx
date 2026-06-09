import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex flex-col gap-0 group">
      <span className="font-amotha text-[28px] tracking-[0.04em] text-gold-l leading-none">MOOVIA</span>
      <span className="font-urbanist text-[10px] tracking-[0.32em] uppercase text-white-3 mt-[2px] ml-[2px]">
        Portugal
      </span>
    </Link>
  );
}



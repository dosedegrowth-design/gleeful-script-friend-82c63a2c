import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex flex-col gap-0 group">
      <span className="font-sora text-[20px] font-medium tracking-[0.08em] text-gold-l">MOOVIA</span>
      <span className="font-urbanist text-[10px] tracking-[0.32em] uppercase text-white-3 mt-[1px]">
        Portugal
      </span>
    </Link>
  );
}


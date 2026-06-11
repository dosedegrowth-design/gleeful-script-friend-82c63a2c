import { Link } from "@tanstack/react-router";

export function Wordmark() {
  return (
    <Link to="/" className="flex flex-col group">
      <div className="flex items-baseline gap-2">
        <span className="font-sora text-[22px] font-[500] text-gold-l tracking-[0.04em] uppercase">MOOVIA</span>
      </div>
      <span className="font-urbanist text-[11px] font-[300] text-white-3 tracking-[0.32em] uppercase">Portugal</span>
    </Link>
  );
}
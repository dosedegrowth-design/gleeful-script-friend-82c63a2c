export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const inkColor = tone === "dark" ? "var(--ink)" : "var(--ivory)";
  const stoneColor = tone === "dark" ? "var(--stone)" : "rgba(250,250,247,0.55)";
  return (
    <div className="flex items-baseline gap-2 leading-none">
      <span
        className="font-display text-[22px] tracking-tight"
        style={{ color: inkColor, fontWeight: 400 }}
      >
        MOOVIA
      </span>
      <span
        className="font-sans text-[10px] uppercase"
        style={{ color: stoneColor, letterSpacing: "0.22em", fontWeight: 400 }}
      >
        Portugal
      </span>
    </div>
  );
}

"use client";

export default function GlowCard({
  children,
  className = "",
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px]",
        "border border-white/[0.08]",
        "bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]",
        "backdrop-blur-xl",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,81,1,0.14),transparent_42%)]" />

      <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-[#FF5101]/10 blur-3xl" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
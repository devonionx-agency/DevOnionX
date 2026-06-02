"use client";

export default function MobileCard() {
  return (
    <div className="w-[180px] rounded-[34px] border border-white/10 bg-[#050505] p-3 shadow-[0_0_40px_rgba(255,81,1,.15)]">
      <div className="rounded-[28px] bg-[#0B0B0B] p-4">
        <p className="text-xs text-zinc-500">Discover</p>

        <div className="mt-6 rounded-2xl bg-zinc-900 h-28 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-zinc-700" />
        </div>

        <p className="mt-4 text-xs text-white">Headphone</p>

        <p className="text-xs text-zinc-500">$199.00</p>

        <div className="mt-6 grid grid-cols-4 gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-8 rounded-lg bg-zinc-800" />
          ))}
        </div>
      </div>
    </div>
  );
}

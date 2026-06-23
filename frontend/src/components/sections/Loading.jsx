/* ────────────────────────────────────────────────────────────
   loading.jsx — Global page loading skeleton
   Covers both hero+sections pages and card-grid pages.
   Next.js shows this automatically — no manual usage needed.
   Place at: app/loading.jsx
──────────────────────────────────────────────────────────── */

const Shimmer = ({ className = "" }) => (
  <div className={`relative overflow-hidden rounded-xl bg-white/[0.04] ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
  </div>
);

const CardSkeleton = () => (
  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden flex flex-col">
    <Shimmer className="w-full aspect-[16/9] rounded-none" />
    <div className="p-6 flex flex-col gap-3 flex-1">
      <Shimmer className="h-5 w-20 rounded-full" />
      <div className="flex flex-col gap-2">
        <Shimmer className="h-5 w-full" />
        <Shimmer className="h-5 w-[75%]" />
      </div>
      <div className="flex flex-col gap-1.5 mt-1">
        <Shimmer className="h-3.5 w-full" />
        <Shimmer className="h-3.5 w-[90%]" />
        <Shimmer className="h-3.5 w-[70%]" />
      </div>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.04]">
        <div className="flex items-center gap-2">
          <Shimmer className="w-8 h-8 rounded-full" />
          <Shimmer className="h-3.5 w-20" />
        </div>
        <Shimmer className="h-3.5 w-16" />
      </div>
    </div>
  </div>
);

export default function Loading() {
  return (
    <div className="bg-[#050505] min-h-screen pt-16">

      {/* ── Hero ── */}
      <div className="pt-24 pb-16 px-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center gap-3 mb-6">
          <Shimmer className="h-8 w-48 rounded-full" />
          <Shimmer className="h-12 w-[60%] max-w-[560px]" />
          <Shimmer className="h-12 w-[40%] max-w-[380px]" />
        </div>
        <div className="flex flex-col items-center gap-2 mb-10">
          <Shimmer className="h-4 w-[45%] max-w-[420px]" />
          <Shimmer className="h-4 w-[35%] max-w-[320px]" />
        </div>
        <div className="flex justify-center gap-4">
          <Shimmer className="h-12 w-40 rounded-full" />
          <Shimmer className="h-12 w-36 rounded-full" />
        </div>
      </div>

      <div className="h-px bg-white/[0.04] max-w-[1280px] mx-6" />

      {/* ── Feature cards (3-col) ── */}
      <div className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center gap-3 mb-14">
          <Shimmer className="h-6 w-32 rounded-full" />
          <Shimmer className="h-10 w-[50%] max-w-[480px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-7 flex flex-col gap-4">
              <Shimmer className="h-10 w-10 rounded-xl" />
              <Shimmer className="h-5 w-[60%]" />
              <div className="flex flex-col gap-2">
                <Shimmer className="h-3 w-full" />
                <Shimmer className="h-3 w-[85%]" />
                <Shimmer className="h-3 w-[70%]" />
              </div>
              <div className="flex gap-2 mt-2">
                <Shimmer className="h-6 w-16 rounded-full" />
                <Shimmer className="h-6 w-16 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-white/[0.04] max-w-[1280px] mx-6" />

      {/* ── Blog / service card grid (3-col) ── */}
      <div className="py-20 px-6 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center gap-3 mb-10">
          <Shimmer className="h-6 w-40 rounded-full" />
          <Shimmer className="h-10 w-[45%] max-w-[440px]" />
        </div>
        <div className="flex gap-3 mb-10 flex-wrap">
          {Array.from({ length: 5 }).map((_, i) => (
            <Shimmer key={i} className="h-9 w-24 rounded-full" />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>

    </div>
  );
}
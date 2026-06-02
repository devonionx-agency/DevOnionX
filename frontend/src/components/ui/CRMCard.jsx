"use client";

export default function CRMCard({ leads = 1248, growth = "+18.6%" }) {
  return (
    <div className="w-[340px] rounded-[32px] border border-white/10 bg-[#050505]/95 backdrop-blur-xl p-6 shadow-[0_0_50px_rgba(255,81,1,.15)]">
      <div className="flex justify-between">
        <span className="text-white">CRM Dashboard</span>

        <span className="text-zinc-500">This Month</span>
      </div>

      <h3 className="mt-6 text-5xl font-bold text-white">
        {leads.toLocaleString()}
      </h3>
      <p className="mt-2 text-green-500">
        {growth}
        </p>
      <div className="mt-8 flex gap-6 items-end">
        {[35, 55, 80, 45, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-[#FF5101]"
            style={{
              height: `${h}px`,
            }}
          />
        ))}
      </div>

      <div className="mt-8 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500">Campaigns</span>

          <span>82%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-500">Social Media</span>

          <span>75%</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-500">Referrals</span>

          <span>48%</span>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function DashboardCard({
  revenue = "$450",
  growth = "+24%",
}) {
  return (
    <div className="w-[360px] rounded-[32px] border border-white/10 bg-[#050505]/95 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(255,81,1,.18)]">
      <div className="flex justify-between items-center">
        <span className="text-zinc-500 text-sm">Total Revenue</span>

        <span className="text-green-500 font-medium">{growth}</span>
      </div>

      <h3 className="mt-4 text-4xl font-bold text-white">{revenue}</h3>

      <p className="mt-1 text-green-500 text-sm">+18.4% this month</p>

      {/* Fake Graph */}

      <div className="mt-8 h-44 rounded-2xl overflow-hidden bg-gradient-to-b from-[#1A0900] to-transparent relative">
        <svg viewBox="0 0 400 180" className="w-full h-full">
          <path
            d="M10 150 L70 120 L120 130 L180 80 L240 95 L300 50 L380 65"
            fill="none"
            stroke="#FF5101"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* Future Backend Table */}

      <div className="mt-6 space-y-3">
        {["Acme Corp", "Quick Corporation", "Intech"].map((item) => (
          <div key={item} className="flex justify-between text-sm">
            <span className="text-zinc-400">{item}</span>

            <span className="text-zinc-500">-$4,200</span>
          </div>
        ))}
      </div>
    </div>
  );
}

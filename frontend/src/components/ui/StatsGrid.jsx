export default function StatsGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="group rounded-3xl border border-white/10 bg-white/3 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF5101]/40 hover:shadow-[0_20px_60px_rgba(255,81,1,0.15)]"
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF5101]/20 bg-[#FF5101]/10 transition-all duration-500 group-hover:scale-110">
              <Icon className="text-2xl text-[#FF5101]" />
            </div>

            <h3 className="mb-2 text-5xl font-bold text-[#FF5101]">
              {item.value}
            </h3>

            <h4 className="mb-3 text-xl font-semibold text-white">
              {item.title}
            </h4>

            <p className="leading-relaxed text-white/60">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
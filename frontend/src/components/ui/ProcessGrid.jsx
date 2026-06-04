export default function ProcessGrid({ items }) {
  return (
    <div className="grid gap-[2px] lg:grid-cols-5">
      {items.map((step, index) => (
        <StepCard
          key={step.number}
          step={step}
          index={index}
          total={items.length}
        />
      ))}
    </div>
  );
}

function StepCard({ step, index, total }) {
  const isLast = index === total - 1;

  return (
    <div className="group relative">
      {!isLast && (
        <div
          className="absolute z-2 hidden lg:block"
          style={{
            top: 52,
            right: -1,
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "#FF5101",
          }}
        />
      )}

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 px-6 pt-8 pb-7 transition-all duration-300 hover:border-[#FF5101]/30">
        <div className="absolute left-1/2 top-0 h-px w-[60%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FF5101] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <span className="mb-5 block text-[18px] font-bold text-white">
          {step.number}
        </span>

        <div
          className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/3
          text-[#39ff6a] transition-colors duration-300 group-hover:text-[#FF5101]"
        >
          {step.icon}
        </div>

        <h3 className="mb-3 para-lg font-bold text-white">
          {step.title}
        </h3>

        <p className="mb-5 flex-grow para-base text-white/80">
          {step.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[#FF5101]/15 bg-[#FF5101]/10 px-2 py-1 text-[11px] font-medium text-[#39ff6a]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

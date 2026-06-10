"use client";

import { SERVICES } from "@/helper/contact";

export default function ServiceSelector({
  selected,
  setSelected,
  setValue,
  error,
}) {
  return (
    <div>
      <p className="text-[12px] font-bold tracking-[2px] uppercase text-[#FF5101] mb-3">
        Select Services
      </p>

      <div className="flex flex-wrap gap-2">
        {SERVICES.map((s) => {
          const active = selected.includes(s);

          return (
            <button
              key={s}
              type="button"
              onClick={() => {
                const updated = selected.includes(s)
                  ? selected.filter((x) => x !== s)
                  : [...selected, s];

                setSelected(updated);

                setValue("services", updated, {
                  shouldValidate: true,
                });
              }}
              className={`text-[12px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                active
                  ? "border-[#FF5101] bg-[#FF5101]/10 text-[#FF5101]"
                  : "border-white/[0.08] bg-white/[0.03] text-[#94a3b8]"
              }`}
            >
              {active ? "✓ " : ""}
              {s}
            </button>
          );
        })}
      </div>

      {error && (
        <p className="mt-2 text-xs text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
}
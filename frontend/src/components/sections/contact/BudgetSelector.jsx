"use client";

import { BUDGETS } from "@/helper/contact";

export default function BudgetSelector({
  budget,
  setBudget,
  setValue,
  error,
}) {
  return (
    <div>
      <p className="text-[12px] font-bold tracking-[2px] uppercase text-[#FF5101] mb-3">
        Budget Range
      </p>

      <div className="flex flex-wrap gap-2">
        {BUDGETS.map((b) => {
          const active = budget === b;

          return (
            <button
              key={b}
              type="button"
              onClick={() => {
                setBudget(b);

                setValue("budget", b, {
                  shouldValidate: true,
                });
              }}
              className={`text-[12px] font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                active
                  ? "border-[#FF5101] bg-[#FF5101]/10 text-[#FF5101]"
                  : "border-white/[0.08] bg-white/[0.03] text-[#94a3b8]"
              }`}
            >
              {b}
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
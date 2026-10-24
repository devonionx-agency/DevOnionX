"use client";

import { FiCheck, FiDollarSign, FiMessageCircle } from "react-icons/fi";

import { BUDGETS } from "@/helper/contact";

export default function BudgetSelector({
  budget = "",
  setBudget,
  setValue,
  error,
}) {
  const handleSelect = (item) => {
    setBudget(item);

    setValue("budget", item, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-slate-900">
          What's your budget?
          <span className="ml-1 text-[#FF5101]">*</span>
        </h4>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          This helps us suggest a suitable solution.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {BUDGETS.map((item) => {
          const active = budget === item;
          const isDiscuss = item === "Let's Discuss";

          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => handleSelect(item)}
              className={`flex min-h-[64px] min-w-0 items-center gap-2.5 rounded-xl border px-3 py-3 text-left outline-none transition-colors duration-200 focus-visible:ring-4 focus-visible:ring-orange-500/15 ${
                active
                  ? "border-[#FF5101] bg-[#FFF5EF]"
                  : "border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50/50"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  active
                    ? "bg-[#FF5101] text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {active ? (
                  <FiCheck size={15} strokeWidth={2.5} />
                ) : isDiscuss ? (
                  <FiMessageCircle size={15} />
                ) : (
                  <FiDollarSign size={15} />
                )}
              </span>

              <span
                className={`min-w-0 text-xs font-semibold leading-5 ${
                  active ? "text-[#D94300]" : "text-slate-700"
                }`}
              >
                {item}
              </span>
            </button>
          );
        })}
      </div>

      {error && (
        <p role="alert" className="mt-3 text-xs font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}

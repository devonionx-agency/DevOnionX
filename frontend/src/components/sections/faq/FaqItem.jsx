
"use client";

import { HiMinus, HiPlus } from "react-icons/hi2";

export default function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        isOpen
          ? "border-[rgba(255,81,1,0.35)] shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
          : "border-[#E2E8F0] hover:border-[rgba(255,81,1,0.25)]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 p-5 text-left sm:p-6"
      >
        <h3 className="text-base font-semibold leading-relaxed text-[#171C28] sm:text-lg">
          {item.question}
        </h3>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[#FF5101] text-white"
              : "border border-[#E2E8F0] bg-white text-[#FF5101] hover:border-[#FF5101]"
          }`}
        >
          {isOpen ? <HiMinus size={18} /> : <HiPlus size={18} />}
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-6 text-sm leading-7 text-[#475569] sm:px-6 sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

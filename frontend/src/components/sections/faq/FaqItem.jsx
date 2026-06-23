"use client";

import { HiMinus, HiPlus } from "react-icons/hi2";

export default function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300
      ${
        isOpen
          ? "border-orange-500/20 bg-orange-500/3"
          : "border-white/5 bg-white/2"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-white">{item.question}</h3>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full
          ${
            isOpen
              ? "bg-orange-500 text-black"
              : "border border-white/10 text-orange-400"
          }`}
        >
          {isOpen ? <HiMinus size={18} /> : <HiPlus size={18} />}
        </div>
      </button>

      <div
        className={`grid transition-all duration-300
        ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-white/70">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

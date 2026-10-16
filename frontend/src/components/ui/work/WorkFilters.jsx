"use client";

export default function WorkFilters({
  filters,
  activeFilter,
  onChange,
}) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="inline-flex max-w-full items-center gap-1.5 overflow-x-auto rounded-full border border-[#DEDEDC] bg-transparent p-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      {filters.map((filter) => {
        const isActive = filter === activeFilter;

        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={`shrink-0 whitespace-nowrap rounded-full border px-[19px] py-[7px] text-[12px] font-medium leading-[16px] tracking-[-0.02em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5101] focus-visible:ring-offset-2 cursor-pointer ${
              isActive
                ? "border-[#FF5101] bg-[#FFFFFF] text-[#FF5101]"
                : "border-transparent bg-transparent text-[#555963] hover:text-[#FF5101]"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
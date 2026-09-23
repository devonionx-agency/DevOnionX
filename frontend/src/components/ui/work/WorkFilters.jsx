// src/components/ui/work/WorkFilters.jsx
"use client";

export default function WorkFilters({ filters, activeFilter, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      className="
        flex items-center gap-6 overflow-x-auto pb-1
        [scrollbar-width:none] [-ms-overflow-style:none]
        [&::-webkit-scrollbar]:hidden
      "
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
            className="
              relative shrink-0 whitespace-nowrap pb-2 text-[13px] font-medium
              tracking-tight transition-colors duration-300
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#FF5101] focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F5F4F1] rounded-sm
            "
            style={{ color: isActive ? "#FF5101" : "#6B7078" }}
          >
            {filter}
            <span
              aria-hidden="true"
              className="absolute left-0 -bottom-px h-px transition-all duration-300 motion-reduce:transition-none"
              style={{
                width: isActive ? "100%" : "0%",
                backgroundColor: "#FF5101",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}

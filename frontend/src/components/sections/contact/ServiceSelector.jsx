"use client";

import {
  FiCheck,
  FiCode,
  FiLayers,
  FiLayout,
  FiServer,
  FiSettings,
  FiGrid,
} from "react-icons/fi";

import { SERVICES } from "@/helper/contact";

const SERVICE_ICONS = {
  "Website Development": FiCode,
  "Web Application": FiLayers,
  "SaaS Platform": FiGrid,
  "UI/UX Design": FiLayout,
  "API Integration": FiServer,
  "Maintenance & Support": FiSettings,
};

export default function ServiceSelector({
  selected = [],
  setSelected,
  setValue,
  error,
}) {
  const handleToggle = (service) => {
    const updated = selected.includes(service)
      ? selected.filter((item) => item !== service)
      : [...selected, service];

    setSelected(updated);

    setValue("services", updated, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            What do you need?
            <span className="ml-1 text-[#FF5101]">*</span>
          </h4>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Choose all services relevant to your project.
          </p>
        </div>

        <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600">
          {selected.length} selected
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {SERVICES.map((service) => {
          const active = selected.includes(service);
          const Icon = SERVICE_ICONS[service] || FiLayers;

          return (
            <button
              key={service}
              type="button"
              aria-pressed={active}
              onClick={() => handleToggle(service)}
              className={`group flex min-h-[62px] w-full items-center gap-3 rounded-xl border p-3 text-left outline-none transition-colors duration-200 focus-visible:ring-4 focus-visible:ring-orange-500/15 ${
                active
                  ? "border-[#FF5101] bg-[#FFF5EF]"
                  : "border-slate-200 bg-white hover:border-orange-300 hover:bg-orange-50/50"
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                  active
                    ? "bg-[#FF5101] text-white"
                    : "bg-slate-100 text-slate-600 group-hover:bg-orange-100 group-hover:text-[#E74700]"
                }`}
              >
                <Icon size={17} />
              </span>

              <span className="min-w-0 flex-1 text-[12px] font-semibold leading-5 text-slate-800">
                {service}
              </span>

              <span
                className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border transition-colors duration-200 ${
                  active
                    ? "border-[#FF5101] bg-[#FF5101] text-white"
                    : "border-slate-300 bg-white text-transparent"
                }`}
              >
                <FiCheck size={12} strokeWidth={3} />
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

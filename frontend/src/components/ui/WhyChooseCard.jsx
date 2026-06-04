"use client";

import { forwardRef } from "react";

const WhyChooseCard = forwardRef(({ feature }, ref) => {
  const Icon = feature.icon;
  console.log(feature);
  console.log(feature.icon);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 20% 20%, ${feature.glowColor}, transparent)`,
        }}
      />

      <div className="relative z-10 mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} color={feature.accentColor} />
      </div>

      <h3 className="relative z-10 mb-2 text-base font-semibold text-white">
        {feature.title}
      </h3>

      <p className="relative z-10 flex-1 text-sm leading-7 text-white/50">
        {feature.description}
      </p>

      <div className="relative z-10 mt-6 flex items-center gap-3">
        <span
          className="text-xs font-semibold"
          style={{ color: feature.accentColor }}
        >
          {feature.id}
        </span>

        <div className="h-px flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full w-[28%] rounded-full transition-all duration-500 group-hover:w-[60%]"
            style={{
              background: feature.accentColor,
              boxShadow: `0 0 10px ${feature.accentColor}`,
            }}
          />
        </div>

        <div className="flex gap-1">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="h-1 w-1 rounded-full"
              style={{
                background:
                  dot === 0 ? feature.accentColor : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

WhyChooseCard.displayName = "WhyChooseCard";

export default WhyChooseCard;

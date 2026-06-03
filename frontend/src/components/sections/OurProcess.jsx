"use client";

import { steps } from "@/helper/ourprocess";
import SectionHeader from "../ui/SectionHeader";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#02090F] px-6 py-[120px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,81,1,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,81,1,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-20 text-center">
          <SectionHeader
            label="Our Process"
            text="How We Build World Digital Products"
            colorWord="Digital Products"
          />

          <p className="mx-auto max-w-[460px] text-[18px] leading-[1.7] text-white/85">
            A proven process that turns complex ideas into world-class digital
            products.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid gap-[2px] lg:grid-cols-5">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              total={steps.length}
            />
          ))}
        </div>

        {/* Bottom Line */}
        <div
          className="mt-16 h-px opacity-40"
          style={{
            background:
              "linear-gradient(90deg, transparent, #FF5101, transparent)",
          }}
        />
      </div>
    </section>
  );
}

function StepCard({ step, index, total }) {
  const isLast = index === total - 1;

  return (
    <div className="group relative">
      {!isLast && (
        <div
          className="absolute z-[2] hidden lg:block"
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

      <div
        className="
          relative flex h-full flex-col overflow-hidden rounded-2xl
          border border-white/10 bg-white/[0.02]
          px-6 pt-8 pb-7
          transition-all duration-300
          hover:border-[#FF5101]/30
        "
      >
        {/* Top Glow Line */}
        <div
          className="
            absolute left-1/2 top-0 h-px w-[60%]
            -translate-x-1/2
            bg-gradient-to-r from-transparent via-[#FF5101] to-transparent
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        {/* Step Number */}
        <span className="mb-5 block text-[18px] font-bold text-white">
          {step.number}
        </span>

        {/* Icon */}
        <div
          className="
            mb-6 flex h-12 w-12 items-center justify-center
            rounded-xl border border-white/10 bg-white/[0.04]
            text-[#39ff6a]
            transition-colors duration-300
            group-hover:text-[#FF5101]
          "
        >
          {step.icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-[18px] font-bold leading-[1.3] tracking-[-0.01em] text-white">
          {step.title}
        </h3>

        {/* Description */}
        <p className="mb-5 flex-grow text-[13px] leading-[1.65] text-white/80">
          {step.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-md border border-[#FF5101]/15
                bg-[#FF5101]/10
                px-2 py-1
                text-[11px] font-medium
                text-[#39ff6a]
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

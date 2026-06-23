"use client";

import DirectionalButton from "@/components/common/Directionalbutton";
import { ArrowRight } from "lucide-react";

export default function FaqInfo() {
  return (
    <div className="lg:sticky lg:top-24 self-start z-10">
      {/* Heading */}
      <h3 className="text-3xl font-bold tracking-tight text-white/80">
        Answers To Common Questions
      </h3>

      {/* Sub text */}
      <p className="mt-4 max-w-md leading-relaxed text-white/60">
        Clear answers to the questions clients ask most often before starting a
        project with us.
      </p>

      {/* CTA Card */}
      <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10">
        {/* Glow Effects */}
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10">
          <h4 className="text-xl font-semibold tracking-tight text-white">
            Still have a question?
          </h4>

          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Every project is different. If you need advice, pricing guidance, or
            want to discuss an idea, we're here to help you move forward with
            clarity.
          </p>

          {/* Button */}
          <div className="mt-6">
            <DirectionalButton
              href="/contact"
              label="Let's Talk"
              flairColor="#FF5101"
              borderColor="rgba(255,81,1,0.8)"
              textColor="#ffffff"
              className="font-semibold py-3 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(255,81,1,0.25)]"
              rightIcon={<ArrowRight size={18} />}
            />
          </div>

          {/* Micro trust line */}
          <p className="mt-4 text-xs text-white/40">
            Usually responds within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

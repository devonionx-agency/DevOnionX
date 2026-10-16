
"use client";

import DirectionalButton from "@/components/common/Directionalbutton";
import { ArrowRight } from "lucide-react";

export default function FaqInfo() {
  return (
    <div className="self-start lg:sticky lg:top-24 z-10">
      <h3 className="text-3xl font-bold tracking-tight text-[#171C28]">
        Got Questions?
        <br />
        We're Here to Help.
      </h3>

      <p className="mt-4 max-w-md leading-relaxed text-[#475569]">
        Starting a project can bring up a lot of questions. Whether you have
        an idea in mind or just need some guidance, feel free to talk to us.
      </p>

      <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative z-10">
          <h4 className="text-xl font-semibold tracking-tight text-[#171C28]">
            Still unsure about something?
          </h4>

          <p className="mt-3 text-sm leading-relaxed text-[#475569]">
            Tell us what you're working on. We'll listen, answer your
            questions, and help you figure out what makes sense for your
            project. No pressure to have everything figured out yet.
          </p>

          <div className="mt-6">
            <DirectionalButton
              href="/contact"
              label="Let's Talk"
              flairColor="#FF5101"
              borderColor="rgba(255,81,1,0.8)"
              textColor="#171C28"
              className="py-3 font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_25px_rgba(255,81,1,0.15)]"
              rightIcon={<ArrowRight size={18} />}
            />
          </div>

          <p className="mt-4 text-xs text-[#697586]">
            Have a question? We'd be happy to hear from you.
          </p>
        </div>
      </div>
    </div>
  );
}

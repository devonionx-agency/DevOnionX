"use client";

import { steps } from "@/helper/ourprocess";
import SectionHeader from "../ui/SectionHeader";
import Container from "../ui/Container";
import ProcessGrid from "../ui/ProcessGrid";

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#02090F] px-6 py-10 xl:py-[80px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,81,1,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,81,1,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container size="xl">
        <div className="relative">
          <div className="pb-20 text-center">
            <SectionHeader
              label="Our Process"
              text="How We Build Digital Products"
              colorWord="Digital Products"
            />

            <p className="mx-auto max-w-[460px] para-lg text-white/80">
              A structured process for turning ideas into scalable digital
              products.
            </p>
          </div>

          <ProcessGrid items={steps} />

          <div
            className="mt-16 h-px opacity-40"
            style={{
              background:
                "linear-gradient(90deg, transparent, #FF5101, transparent)",
            }}
          />
        </div>
      </Container>
    </section>
  );
}

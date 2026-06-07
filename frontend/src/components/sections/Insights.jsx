"use client";
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import Container from "../ui/Container";
export default function Insights() {
  return (
    <>
      <section className="bg-[#02090F]">
        <Container size="xl">
          <div className="relative">
            <div className="pb-20 text-center">
              <SectionHeader
                label="Our Blog"
                text="Insights and Updates"
                colorWord="Updates"
              />

              <p className="mx-auto max-w-[600px] para-lg text-white/80">
               Explore a selection of SaaS platforms, web applications, and digital products we've crafted to help businesses grow and scale.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}


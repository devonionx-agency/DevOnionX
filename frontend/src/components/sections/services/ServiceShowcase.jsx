"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { serviceCategories, services } from "@/helper/servicesPage";
import ServiceBentoGrid from "./Servicebentogrid";
import ServiceFilterBar from "./Servicefilterbar";

const ServiceShowcase = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? services : services.filter((s) => s.value === active);

  return (
    <section className="bg-black pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <Container>
        {/* Header */}
        <SectionHeader
          label="What We Offer"
          text="Services That Drive Results"
          colorWord="Drive Results"
        />

        {/* Filter Bar */}
        <div className="mt-10">
          <ServiceFilterBar
            categories={serviceCategories}
            active={active}
            onSelect={setActive}
          />
        </div>

        {/* Bento Grid */}
        <div className="mt-8">
          <ServiceBentoGrid services={filtered} />
        </div>
      </Container>
    </section>
  );
};

export default ServiceShowcase;

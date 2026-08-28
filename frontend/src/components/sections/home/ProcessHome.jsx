import Container from "@/components/ui/Container";
import ProcessCard from "@/components/ui/ProcessCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { stepsHome } from "@/helper/ourprocess";
import React from "react";

const ProcessHome = () => {
  return (
    <section className="bg-[#02090F] py-10 xl:py-[80px]">
      <Container size="hero">
        <div>
          <div className="pb-20 text-center">
            <SectionHeader
              label="Our Process"
              text="How We Build Digital Products"
              colorWord="Digital Products"
              description={
                "   A structured process for turning ideas into scalable digitalproducts."
              }
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 ">
            {stepsHome.map((step) => (
              <ProcessCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessHome;

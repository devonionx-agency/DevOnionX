import DirectionalButton from "@/components/common/Directionalbutton";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { serviceCategories } from "@/helper/servicesPage";
import React from "react";

const ServiceShowcase = () => {
  return (
    <section className="bg-black pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <Container>
        <div>
          <SectionHeader
            label="What We Offer"
            text="Services That Drive Results"
            colorWord="Drive Results"
          />
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {serviceCategories.map((items) => (
              <DirectionalButton
                borderColor={"#fff"}
                textColor="white"
                borderHoverColor="#ff5101"
                label={items.label}
                key={items.id}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceShowcase;

import DirectionalButton from "@/components/common/Directionalbutton";
import Responsive from "@/components/common/Responsive";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { workCategories } from "@/helper/workPage";
import React from "react";

const WorkShowcase = () => {
  return (
    <section className="bg-black pt-[50px] pb-[80px]">
      <Container>
        <div className="">
          <SectionHeader text="Explore Our Work" colorWord="Our Work" />
        </div>
        <div className="mt-5">
          <Responsive.Flex wrap={true}>
            {workCategories.map((items) => {
              return (
                <DirectionalButton
                  borderColor="#fff"
                  textColor="white"
                  borderHoverColor={"#ff5101"}
                  label={items.label}
                  key={items.id}
                />
              );
            })}
          </Responsive.Flex>
        </div>
      </Container>
    </section>
  );
};

export default WorkShowcase;

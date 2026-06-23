import BreadCrumb from "@/components/common/BreadCrumb";
import DirectionalButton from "@/components/common/Directionalbutton";
import Responsive from "@/components/common/Responsive";
import Container from "@/components/ui/Container";
import { allIcon } from "@/helper/iconProvider";
import { workPageImage } from "@/helper/imageProvider/workImage";
import { workHeroArrObject } from "@/helper/workPage";
import Image from "next/image";
import React from "react";

const WorkDetilsHero = () => {
  const { upperArrow, live } = allIcon;
  const { workDetilsHero } = workPageImage;
  return (
    <section className="bg-black pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <Container>
        {/* breadcrumb */}
        <div className="relative z-20 mb-8 sm:mb-10 lg:mb-12">
          <BreadCrumb />
        </div>
        <div className="">
          <Responsive.Grid gap="lg">
            <div>
              <p className="relative z-10 mb-4 text-[18px] font-bold uppercase tracking-[4px] text-[#FF5101]">
                Web Application
              </p>
              <h2 className="headingTwo bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent leading-tight">
                FitZone
              </h2>
              <h2 className="headingTwo text-white !font-normal">
                Gym & Fitness Platform
              </h2>
              <p className="text-white para-base font-normal mt-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
                et doloribus voluptate aliquid rerum, consectetur iste facere,
                soluta cupiditate culpa quisquam asperiores! Unde commodi
                reprehenderit sequi eius itaque veritatis sunt.
              </p>
              <div className="my-10">
                <Responsive.Flex>
                  <DirectionalButton
                    label={"Visit Website"}
                    textColor="white"
                    className="py-3.5"
                    borderColor="white"
                    borderHoverColor={"#ff5101"}
                    rightIcon={live}
                  />
                  <DirectionalButton
                    label={"View Case Live"}
                    textColor="white"
                    className="py-3.5"
                    borderColor="white"
                    borderHoverColor={"#ff5101"}
                    rightIcon={upperArrow}
                  />
                </Responsive.Flex>
              </div>
              <div className="">
                <Responsive.Flex gap="xl">
                  {workHeroArrObject.map((items) => {
                    return (
                      <div className="space-y-3" key={items.label}>
                        <div className="flex gap-3 items-center">
                          <span className="text-[#ff5101] text-xl">
                            {items.icon}
                          </span>
                          <p className="text-white para-base font-normal">
                            {items.label}
                          </p>
                        </div>
                        <h6 className="text-white headingSix font-normal ">
                          {items.value}
                        </h6>
                      </div>
                    );
                  })}
                </Responsive.Flex>
              </div>
            </div>
            <div className="relative w-auto h-[500px]">
              <Image
                src={workDetilsHero}
                className="object-cover"
                alt="workDetilsHero"
                fill
              />
            </div>
          </Responsive.Grid>
        </div>
      </Container>
    </section>
  );
};

export default WorkDetilsHero;

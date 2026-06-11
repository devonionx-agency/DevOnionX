import React from "react";
import Container from "../ui/Container";
import BreadCrumb from "./BreadCrumb";
import SectionHeader from "../ui/SectionHeader";
import Responsive from "./Responsive";
import Image from "next/image";
import { allServiceHeroImages } from "@/helper/imageProvider/serviceHeroImages";
import DirectionalButton from "./Directionalbutton";
import { allIcon } from "@/helper/iconProvider";
import StatsGrid from "../ui/StatsGrid";
import { stats } from "@/helper/trustmetrics";

function ServiceHero() {
  const { serviceCommonImg } = allServiceHeroImages;
  const { upperArrow, serviceHeroCommonTech } = allIcon;

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 overflow-hidden">
      <Container>

        {/* BreadCrumb — bottom spacing only */}
        <div className="mb-8 sm:mb-10">
          <BreadCrumb />
        </div>

        {/* Main grid */}
        <div className="mb-12 sm:mb-16">
          <Responsive.Grid className="items-center gap-10 lg:gap-16">

            {/* Left col */}
            <div>
              <SectionHeader
                label={"Custom Web Development"}
                text={"Digital build Product that drive real Growth"}
                colorWord={"drive real Growth"}
                className="text-start"
              />

              {/* Description */}
              <p className="text-white/50 mt-4 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                quis rem. Nulla laboriosam unde cupiditate minima ad, commodi
                recusandae veritatis maiores sapiente, nobis quod iste fugiat,
                ipsum eum aspernatur a!
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <DirectionalButton
                  label={"Start Project"}
                  className="py-3 !bg-[#ff5101]"
                  textColor="white"
                  rightIcon={upperArrow}
                />
                <DirectionalButton
                  label={"View Case Study"}
                  className="py-3"
                  borderHoverColor={"#ff5101"}
                  textColor="white"
                  borderColor="#fff"
                  rightIcon={upperArrow}
                />
              </div>

              {/* Tech stack */}
              <div className="mt-10">
                <p className="text-white/50 mb-4 text-sm">Technology we use</p>
                <Responsive.Flex className="gap-3">
                  {serviceHeroCommonTech.map((items) => (
                    <span
                      key={items.id}
                      className={`${items.class} text-[35px] p-2.5 backdrop-blur-[20px] rounded-lg bg-white/15`}
                    >
                      {items.icon}
                    </span>
                  ))}
                </Responsive.Flex>
              </div>
            </div>

            {/* Right col — image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src={serviceCommonImg}
                height={250}
                width={600}
                alt="serviceCommonImg"
                className="w-full max-w-[600px] h-auto"
              />
            </div>

          </Responsive.Grid>
        </div>

        {/* Stats */}
        <StatsGrid items={stats} />

      </Container>
    </section>
  );
}

export default ServiceHero;
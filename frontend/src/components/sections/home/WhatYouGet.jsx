import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatYouGetList from "@/components/ui/WhatYouGetList";
import WhatWeGetImage from "../../../../public/images/whatweget/whatweget-img.png";
import React from "react";

const WhatYouGet = () => {
  return (
    <section className="relative section-padding overflow-hidden bg-[#FFFFFF]">
      <div className="absolute inset-0 -z-20">
        <Image
          src={WhatWeGetImage}
          alt=""
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center"
        />
        {/* Light base tint — just enough for text contrast, image stays visible */}
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        {/* Vignette — darker at top/bottom edges so it blends into the rest
            of the dark page, while the middle (where content sits) still
            shows the image. Tune the /XX opacity values to taste. */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/85"
          aria-hidden="true"
        />
      </div>

      <Container size="hero">
        <div className="relative z-10">
          <div>
            <SectionHeader
              label="OUR PROCESS"
              text="Our Development Process"
              colorWord="Process"
              description="A structured approach to planning, building, testing, and delivering reliable software that meets real business requirements."
            />
          </div>
          <div>
            <WhatYouGetList />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatYouGet;

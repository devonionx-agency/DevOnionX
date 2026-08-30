import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatYouGetList from "@/components/ui/WhatYouGetList";
import WhatWeGetImage from "../../../../public/images/whatweget/whatweget-img.png";
import React from "react";

const WhatYouGet = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* ---------------------------------------------------------------
       * Background image
       * - `fill` + `sizes="100vw"` lets Next.js generate a responsive
       *   srcset and serve the right size per device (mobile/tablet/desktop).
       * - `object-cover` keeps it filling the section without distortion
       *   at any breakpoint.
       * - Swap the `src` below with your own image (put it in /public,
       *   e.g. /public/images/what-you-get-bg.jpg → src="/images/what-you-get-bg.jpg").
       * - If this section sits above the fold on page load, add
       *   `priority` to the <Image> for better LCP. Otherwise leave it
       *   out — Next.js lazy-loads it by default.
       * - Using a remote/CDN image instead of a local file? Add that
       *   domain under images.remotePatterns in next.config.js first.
       * --------------------------------------------------------------- */}
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
              label={"WHAT YOU GET"}
              text={"More Than Code. A Complete Digital Product."}
              colorWord={"A Complete Digital Product."}
              description={
                "We don't just build websites—we build digital products designed to earn client trust, drive conversions, and turn visitors into loyal customers. From strategy to launch, every detail is crafted to make your brand look credible, feel professional, and deliver real business value."
              }
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

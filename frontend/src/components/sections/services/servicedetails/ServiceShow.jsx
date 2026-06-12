import React from "react";
import OurProcess from "./Ourprocess";
import TechStack from "./Techstack";
import WhatWeDeliver from "./Whatwedeliver";
import WhatIsService from "./Whatisservice";
import { serviceDetails } from "@/helper/services/index";
import { services } from "@/helper/servicesPage";

export default function ServiceShow({ slug }) {
  // Find the matching service from services array
  const service = services.find((s) => s.value === slug);
  const detail = serviceDetails?.[slug];

  // Fallback if slug not found
  if (!service || !detail) {
    return (
      <section className="bg-black py-32 text-center">
        <p className="text-white/40 text-lg">Service not found.</p>
      </section>
    );
  }

  return (
    <div className="bg-black">
      <WhatIsService data={detail.whatIs} iconColor={service.iconColor} />
      <WhatWeDeliver items={detail.deliver} iconColor={service.iconColor} />
      <OurProcess steps={detail.process} iconColor={service.iconColor} />
      <TechStack items={detail.techStack} iconColor={service.iconColor} />
    </div>
  );
}

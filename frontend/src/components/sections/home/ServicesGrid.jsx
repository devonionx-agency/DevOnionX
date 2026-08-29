"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ServiceCard from "@/components/ui/ServiceCard";

import {
  HiOutlineGlobeAlt,
  HiOutlineCodeBracket,
  HiOutlineServerStack,
  HiOutlineSquares2X2,
  HiOutlineRocketLaunch,
  HiOutlineChartBarSquare,
  HiOutlineShoppingCart,
  HiOutlineWrenchScrewdriver,
  HiOutlineLifebuoy,
} from "react-icons/hi2";

const services = [
  {
    icon: HiOutlineGlobeAlt,
    titleTop: "Custom Web",
    titleBottom: "Development",
    description:
      "High-performance websites built to strengthen your brand, build trust, and turn visitors into qualified customers.",
    link: "/services/custom-web",
  },

  {
    icon: HiOutlineCodeBracket,
    titleTop: "Frontend",
    titleBottom: "Development",
    description:
      "Fast, responsive, conversion-focused interfaces that create a smooth experience across every device.",
    link: "/services/frontend",
  },

  {
    icon: HiOutlineServerStack,
    titleTop: "Backend",
    titleBottom: "Development",
    description:
      "Secure and scalable backend systems engineered for reliability, performance, and long-term business growth.",
    link: "/services/backend",
  },

  {
    icon: HiOutlineSquares2X2,
    titleTop: "Full Stack",
    titleBottom: "Development",
    description:
      "Complete end-to-end solutions that connect powerful technology with your business goals and customer needs.",
    link: "/services/fullstack",
  },

  {
    icon: HiOutlineRocketLaunch,
    titleTop: "SaaS",
    titleBottom: "Development",
    description:
      "Scalable SaaS products designed for real users, recurring growth, and a strong foundation for your next big idea.",
    link: "/services/saas",
  },

  {
    icon: HiOutlineChartBarSquare,
    titleTop: "Dashboard &",
    titleBottom: "CRM Systems",
    description:
      "Smart dashboards and CRM systems that simplify operations, improve decision-making, and help you manage customers better.",
    link: "/services/dashboard-crm",
  },

  {
    icon: HiOutlineShoppingCart,
    titleTop: "E-Commerce",
    titleBottom: "Development",
    description:
      "Conversion-focused online stores built to create trust, reduce friction, and turn product visitors into paying customers.",
    link: "/services/ecommerce",
  },
  {
    icon: HiOutlineWrenchScrewdriver,
    titleTop: "Website",
    titleBottom: "Maintenance",
    description:
      "Continuous updates, optimization, and performance improvements that keep your website secure, fast, and conversion-ready.",
    link: "/services/maintenance",
  },

  {
    icon: HiOutlineLifebuoy,
    titleTop: "Technical",
    titleBottom: "Support",
    description:
      "Reliable technical support to solve issues quickly, protect your digital presence, and keep your business running smoothly.",
    link: "/services/support",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-[#000]">
      <Container size="hero">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
          <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
            <SectionHeader
              label="WHAT WE DO"
              text="Solutions Built To . Grow Your Business."
              colorWord="Grow Your Business."
              description="From high-converting websites to scalable digital products, we build modern solutions that earn trust, drive conversions, and turn visitors into valuable customers."
            />
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} index={i} {...service} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

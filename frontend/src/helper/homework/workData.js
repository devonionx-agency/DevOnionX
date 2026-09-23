// src/helper/workData.js
// Single source of truth for the "Our Work" section.
// `category`  -> display label shown on the card (e.g. "CRM Platform")
// `tag`       -> which filter bucket this project belongs to
// `size`      -> "lg" spans the full grid width, "md" sits in the 2-col pair
// `featured`  -> only the first featured item is rendered by WorkFeatured

export const workFilters = [
  "All",
  "SaaS",
  "Web Apps",
  "E-commerce",
  "Platforms",
];

export const workProjects = [
  {
    id: 1,
    title: "Vertex CRM",
    category: "CRM Platform",
    tag: "SaaS",
    year: "2026",
    description:
      "A modern CRM platform designed to simplify customer operations and help growing businesses manage their sales, support and relationships more efficiently.",
    image: "/images/projects/dashboard.webp",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Redis",
      "MongoDB",
      "Firebase Auth",
    ],
    href: "https://crm-dashboard-ten-orpin.vercel.app/",
    featured: true,
    size: "lg",
  },
  {
    id: 2,
    title: "EduFilo",
    category: "Education Platform",
    tag: "Platforms",
    year: "2026",
    description:
      "A digital education platform built for madrasah institutions to manage courses, students and academic operations efficiently.",
    image: "/images/projects/edufilo.webp",
    technologies: [
      "Next.js",
      "Firebase Auth",
      "Context API",
      "GSAP",
      "Tailwind CSS",
    ],
    href: "https://edufilo.vercel.app/",
    featured: false,
    size: "md",
  },
  {
    id: 3,
    title: "business-websites",
    category: "Bitox Business",
    tag: "E-commerce",
    year: "2025",
    description:
      "A modern business consulting website built with Next.js and Tailwind CSS, featuring responsive layouts, engaging animations, and conversion-focused sections designed to showcase services, build trust, and generate high-quality business leads",
    image: "/images/projects/business.webp",
    technologies: [
      "Next.js",
      "Firebase",
      "Payment Gateway",
      "GSAP",
      "Tailwind CSS",
    ],
    href: "https://bitox-business-consulting-website.vercel.app/",
    featured: false,
    size: "md",
  },
  {
    id: 4,
    title: "Qeducato",
    category: "University Platform",
    tag: "Platforms",
    year: "2025",
    description:
      "A complete university management system designed to streamline academic operations, student management and administration.",
    image: "/images/projects/qeducato.webp",
    technologies: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Payment Gateway",
      "GSAP",
    ],
    href: "https://qeducato.vercel.app/",
    featured: false,
    size: "lg",
  },
];

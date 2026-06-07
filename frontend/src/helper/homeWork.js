import { FaReact, FaNodeJs, FaStripe } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiSocketdotio,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

export const featuredWorks = [
  {
    id: 1,
    category: "SaaS Platform",
    title: "Nimbus Dashboard",
    description:
      "A comprehensive analytics platform for SaaS businesses to track performance, revenue, and growth in real time.",

    image: "/images/projects/saas.png",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],

    href: "https://edufilos.vercel.app/",
  },

  {
    id: 2,
    category: "E-commerce",
    title: "Urbanove Store",
    description:
      "A modern online store designed to deliver a seamless shopping experience and maximize conversions.",

    image: "/images/projects/ecommerce.png",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Stripe",
        icon: FaStripe,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],

    href: "https://morent-hazel.vercel.app/",
  },

  {
    id: 3,
    category: "Web Application",
    title: "ProjectFlow",
    description:
      "A collaborative project management platform helping teams organize tasks, workflows, and delivery cycles.",

    image: "/images/projects/business.png",

    technologies: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
    ],

    href: "https://bitox-business-consulting-website.vercel.app/",
  },
];

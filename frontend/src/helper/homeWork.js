import { FaReact, FaNodeJs, FaStripe, FaCreditCard } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiReact,
  SiGreensock,
  SiJavascript,
  SiSocketdotio,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiFirebase,
} from "react-icons/si";

export const featuredWorks = [
  {
    id: 1,
    category: "CRM Dashboard",

    title: "Vertex CRM",

    description:
      "A modern CRM dashboard designed to simplify business operations with interactive analytics, customer management, responsive layouts, and a clean user experience built for productivity.",

    image: "/images/projects/dashboard.webp",

    technologies: [
          { name: "Next.js", icon: SiNextdotjs },
          { name: "TypeScript", icon: SiTypescript },
          { name: "Node.js", icon: FaNodeJs },
          { name: "Express.js", icon: SiExpress },
          { name: "PostgreSQL", icon: SiPostgresql },
          { name: "Prisma", icon: SiPrisma },
          { name: "Redis", icon: SiRedis },
           { name: "Tailwind CSS", icon: SiTailwindcss },
        ],

    href: "https://crm-dashboard-ten-orpin.vercel.app/",
  },

  {
    id: 2,
    category: "Education SaaS",

    title: "EduFilo",

    description:
      "A modern Madrasah management platform built to simplify admissions, student management, and daily academic operations through an intuitive, multilingual interface with a seamless user experience.",

    image: "/images/projects/edufilo.webp",

    technologies: [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase Auth", icon: SiFirebase },
  { name: "Payment Gateway", icon: FaCreditCard },
  { name: "Context API", icon: SiReact },
  { name: "GSAP", icon: SiGreensock },
],

    href: "https://edufilo.vercel.app/",
  },

  {
    id: 3,
    category: "Qeducato University",

    title: "Qeducato University",

    description:
      "A premium business website built with a modern interface, responsive layouts, smooth animations, and conversion-focused sections to create a fast and engaging user experience.",

    image: "/images/projects/qeducato.webp",

    technologies: [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express.js", icon: SiExpress },
  { name: "Payment Gateway", icon: FaCreditCard },
  { name: "Socket.io", icon: SiSocketdotio },
  { name: "GSAP", icon: SiGreensock },
  { name: "Tailwind CSS", icon: SiTailwindcss },
],

    href: "https://qeducato.vercel.app/",
  },
];

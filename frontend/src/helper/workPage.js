import { allPageHeroImg } from "./imageProvider/pageHeroImage";
import { FaReact, FaNodeJs, FaStripe, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiSocketdotio,
  SiPostgresql,
  SiPrisma,
  SiOpenai,
  SiExpress,
  SiFramer,
  SiSupabase,
  SiRedis,
} from "react-icons/si";





// for work category filter items

export const workCategories = [
  { id: 1, label: "All Projects", value: "all" },
  { id: 2, label: "Case Studies", value: "case-studies" },
  { id: 3, label: "SaaS Platforms", value: "saas" },
  { id: 4, label: "Business Websites", value: "business-websites" },
  { id: 5, label: "AI Projects", value: "ai" },
  { id: 6, label: "E-Commerce", value: "ecommerce" },
  { id: 7, label: "Web Applications", value: "web-applications" },
  { id: 8, label: "Dashboard & CRM", value: "dashboard-crm" },
  { id: 9, label: "Featured", value: "featured" },
];

export const featuredWorkItems = [
  {
    id: 1,
    category: "saas",
    featured: true,
    title: "Nimbus Dashboard",
    description:
      "A comprehensive analytics platform for SaaS businesses to track performance, revenue, and growth in real time.",
    image: "/images/projects/saas.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MongoDB", icon: SiMongodb },
    ],
    href: "https://edufilos.vercel.app/",
  },

  {
    id: 2,
    category: "ecommerce",
    featured: false,
    title: "Urbanove Store",
    description:
      "A modern online store designed to deliver a seamless shopping experience and maximize conversions.",
    image: "/images/projects/ecommerce.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Stripe", icon: FaStripe },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Prisma", icon: SiPrisma },
    ],
    href: "https://morent-hazel.vercel.app/",
  },

  {
    id: 3,
    category: "web-applications",
    featured: true,
    title: "ProjectFlow",
    description:
      "A collaborative project management platform helping teams organize tasks, workflows, and delivery cycles.",
    image: "/images/projects/business.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    href: "https://bitox-business-consulting-website.vercel.app/",
  },

  {
    id: 4,
    category: "ai",
    featured: true,
    title: "SynthMind AI",
    description:
      "An AI-powered content generation platform that helps marketers and creators produce high-quality copy at scale.",
    image: "/images/projects/saas.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "OpenAI", icon: SiOpenai },
      { name: "TypeScript", icon: SiTypescript },
      { name: "MongoDB", icon: SiMongodb },
    ],
    href: "https://edufilos.vercel.app/",
  },

  {
    id: 5,
    category: "dashboard-crm",
    featured: false,
    title: "ClientAxis CRM",
    description:
      "A smart CRM system built for agencies to manage leads, pipelines, and client relationships all in one place.",
    image: "/images/projects/business.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
    href: "https://bitox-business-consulting-website.vercel.app/",
  },

  {
    id: 6,
    category: "business-websites",
    featured: false,
    title: "Crestline Consulting",
    description:
      "A premium business consulting website built to establish authority, attract enterprise clients, and drive conversions.",
    image: "/images/projects/business.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TypeScript", icon: SiTypescript },
    ],
    href: "https://bitox-business-consulting-website.vercel.app/",
  },

  {
    id: 7,
    category: "case-studies",
    featured: true,
    title: "Vaultex Fintech",
    description:
      "A fintech case study showcasing how we built a secure, scalable payment infrastructure for a growing startup.",
    image: "/images/projects/saas.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Stripe", icon: FaStripe },
      { name: "Supabase", icon: SiSupabase },
      { name: "TypeScript", icon: SiTypescript },
    ],
    href: "https://edufilos.vercel.app/",
  },

  {
    id: 8,
    category: "ai",
    featured: false,
    title: "DocuSense AI",
    description:
      "An intelligent document processing tool that extracts, summarizes, and analyzes data from PDFs using AI.",
    image: "/images/projects/ecommerce.png",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "OpenAI", icon: SiOpenai },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
    ],
    href: "https://morent-hazel.vercel.app/",
  },

  {
    id: 9,
    category: "ecommerce",
    featured: false,
    title: "Luxora Fashion",
    description:
      "A high-end fashion e-commerce platform with advanced filtering, wishlist, and a smooth checkout experience.",
    image: "/images/projects/ecommerce.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Stripe", icon: FaStripe },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
    ],
    href: "https://morent-hazel.vercel.app/",
  },

  {
    id: 10,
    category: "dashboard-crm",
    featured: true,
    title: "OpsCore Dashboard",
    description:
      "An internal operations dashboard for mid-size companies to monitor KPIs, team performance, and real-time metrics.",
    image: "/images/projects/business.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
    ],
    href: "https://bitox-business-consulting-website.vercel.app/",
  },

  {
    id: 11,
    category: "web-applications",
    featured: false,
    title: "MediBook Pro",
    description:
      "A healthcare appointment booking web app with real-time scheduling, doctor profiles, and patient management.",
    image: "/images/projects/saas.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
    href: "https://edufilos.vercel.app/",
  },

  {
    id: 12,
    category: "business-websites",
    featured: false,
    title: "Northgate Law Firm",
    description:
      "A professional law firm website focused on trust, clarity, and converting visitors into consultation bookings.",
    image: "/images/projects/business.png",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "TypeScript", icon: SiTypescript },
    ],
    href: "https://bitox-business-consulting-website.vercel.app/",
  },
];
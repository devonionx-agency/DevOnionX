import { allPageHeroImg } from "./imageProvider/pageHeroImage";
import {
  FaReact,
  FaNodeJs,
  FaStripe,
  FaPython,
  FaCode,
  FaCloud,
  FaCreditCard,
} from "react-icons/fa";
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
  SiGreensock,
  SiReact,
  SiJavascript,
  SiZustand,
  SiFirebase,
  SiRedux,
} from "react-icons/si";
import { allIcon } from "./iconProvider";
import { RiScrollToBottomLine } from "react-icons/ri";

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

const { workHeroIconsArr } = allIcon;

export const featuredWorkItems = [
  {
    id: 1,
    category: "dashboard-crm",
    featured: true,
    title: "CRM Dashboard",
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
    category: "saas",
    featured: false,
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
    category: "case-studies",
    featured: true,
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

  {
    id: 4,
    category: "business-websites",
    featured: true,
    title: "Bitox Business",
    description:
      "A modern business consulting website built with Next.js and Tailwind CSS, featuring responsive layouts, engaging animations, and conversion-focused sections designed to showcase services, build trust, and generate high-quality business leads.",
    image: "/images/projects/business.webp",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "OpenAI", icon: SiOpenai },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Firebase", icon: SiFirebase },
      { name: "Payment Gateway", icon: FaCreditCard },
      { name: "GSAP", icon: SiGreensock },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    href: "https://bitox-business-consulting-website.vercel.app/",
  },

  {
    id: 5,
    category: "ecommerce",
    featured: false,
    title: "Uomo UIM",
    description:
      "Built with a modern full-stack architecture using Next.js and Express.js, featuring JavaScript, Firebase Authentication, REST APIs, Redis caching, and Zustand for efficient state management. Enhanced with Lenis for smooth scrolling, delivering a fast, scalable, and responsive user experience.",
    image: "/images/projects/uimo-uim.webp",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Firebase", icon: SiFirebase },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: FaCode },
      { name: "Redis", icon: SiRedis },
      { name: "Zustand", icon: SiRedux },
      { name: "Cloudinary", icon: FaCloud },
      { name: "Lenis", icon: RiScrollToBottomLine },
    ],
    href: "https://uomo-uim.vercel.app/",
  },

  {
    id: 6,
    category: "web-applications",
    featured: false,
    title: "Domainshub",
    description:
      "A modern domain marketplace that enables users to search, register, and manage domain names through a fast, responsive interface with secure authentication, real-time availability checks, and integrated payment processing.",
    image: "/images/projects/domain.webp",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Payment Gateway", icon: FaCreditCard },
      { name: "Redis", icon: SiRedis },
      { name: "REST API", icon: FaCode },
    ],
    href: "https://domainshub-nine.vercel.app/",
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

// work hero

export const workHeroArrObject = [
  {
    label: "Client",
    icon: workHeroIconsArr[0].icon,
    value: "FitZone Ltd.",
  },
  {
    label: "Industry",
    icon: workHeroIconsArr[1].icon,
    value: "Fitness & Health",
  },
  {
    label: "Duration",
    icon: workHeroIconsArr[2].icon,
    value: "12 Weeks",
  },
  {
    label: "Year",
    icon: workHeroIconsArr[3].icon,
    value: "2026",
  },
];

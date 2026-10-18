import { FiCode, FiCloud, FiServer, FiMonitor  } from "react-icons/fi";
import { PiBrain } from "react-icons/pi";

export const HERO_CONTENT = {
  eyebrow: "Our Services",
 titleLines: [
  { text: "Turning Your Vision Into", accent: false },
  { text: "Digital Success", accent: true },
],
description:
  "We help ambitious businesses turn ideas into powerful digital products built to solve real problems, deliver exceptional experiences, and grow with your business.",
  primaryCta: { label: "Explore Our Services", href: "/services" },
  secondaryCta: { label: "View Our Work", href: "/work" },
};

// Tailwind class strings must be written in full so the compiler can detect them.
export const SERVICES = [
  {
    id: "custom-software",
    title: "Business Software Solutions",
    icon: FiCode,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    id: "saas-products",
    title: "Scalable SaaS Platforms",
    icon: FiCloud,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
  },
  {
    id: "ai-ml",
    title: "AI-Powered Business Automation",
    icon: PiBrain,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud & Business Infrastructure",
    icon: FiServer,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
  id: "web-platforms",
  title: "Modern Web Experiences",
  icon: FiMonitor,
  iconBg: "bg-cyan-100",
  iconColor: "text-cyan-500",
},
];

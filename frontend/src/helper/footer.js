import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
export const companyLinks = [
  { name: "Our Story", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export const serviceLinks = [
  { name: "Web Applications", href: "/services/web-development" },
  { name: "SaaS Platforms", href: "/services/saas-development" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "API Integration", href: "/services/api-integration" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/devonionx-agency",
    icon: FaGithub,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com",
    icon: FaXTwitter,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/01566068310",
    icon: FaWhatsapp,
  },
];
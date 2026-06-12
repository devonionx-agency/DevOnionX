import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
export const companyLinks = [
  { name: "Our Story", href: "/about" },
  { name: "Our Work", href: "/work" },
  { name: "Our Services", href: "/services" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const serviceLinks = [
  { name: "Web Applications", href: "/services/custom-web" },
  { name: "SaaS Platforms", href: "/services/saas" },
  { name: "UI/UX Design", href: "/services/uiux" },
  { name: "API Integration", href: "/services/backend" },
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
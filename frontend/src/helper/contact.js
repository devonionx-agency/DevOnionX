import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";


export const CONTACT_INFO = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "hello@devonionx.com",
    href: "mailto:hello@devonionx.com",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+8801XXXXXXXXX",
    href: "tel:+8801XXXXXXXXX",
  },
  {
    icon: <MessageCircle size={18} />,
    label: "WhatsApp",
    value: "+8801XXXXXXXXX",
    href: "https://wa.me/8801XXXXXXXXX",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Bangladesh",
    href: null,
  },
];


export const SERVICES = [
  "Website Development",
  "Web Application",
  "SaaS Platform",
  "UI/UX Design",
  "API Integration",
  "Maintenance & Support",
];


export const BUDGETS = ["< $500", "$500 – $1k", "$1k – $5k", "$5k+", "Let's Discuss"];



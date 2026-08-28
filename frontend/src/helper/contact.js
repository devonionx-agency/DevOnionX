import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";


export const CONTACT_INFO = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "devonionx@gmail.com",
    href: "mailto:devonionx@gmail.com",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+8801870758677",
    href: "tel:+8801870758677",
  },
  {
    icon: <MessageCircle size={18} />,
    label: "WhatsApp",
    value: "+8801870758677",
    href: "https://wa.me/8801870758677",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Dhaka, Bangladesh",
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
// service key: service_hhp7zfy

export const BUDGETS = ["< $500", "$500 – $1k", "$1k – $5k", "$5k+", "Let's Discuss"];



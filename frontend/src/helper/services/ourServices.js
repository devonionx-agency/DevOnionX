import {
  LuCode,
  LuLayers,
  LuBrain,
  LuPalette,
} from "react-icons/lu";

export const serviceCategories = [
  {
    id: "development",
    label: "Development",
  },
  {
    id: "business-systems",
    label: "Business Systems",
  },
  {
    id: "ai-integration",
    label: "AI & Integration",
  },
  {
    id: "design-support",
    label: "Design & Support",
  },
];

export const servicesData = [
  {
    id: "development",
    number: "01",
    eyebrow: "DIGITAL PRODUCTS",
    title: "Web Solutions & SaaS Engineering",
    description:
      "We engineer fast, scalable websites and custom web applications built around your business goals. From frontend architecture to full-stack SaaS platforms, every solution is designed for performance, usability, and long-term growth.",
    image: "/images/service/saas_engineering.jpg",
    imageAlt: "Web application and SaaS project preview",
    icon: LuCode,
    includes: [
      "Custom web development",
      "Frontend development",
      "Backend development",
      "Full-stack development",
      "Custom SaaS development",
      "REST API integration",
      "Landing page engineering",
      "Headless CMS integration",
      "Performance optimization",
      "System maintenance",
    ],
  },
  {
    id: "business-systems",
    number: "02",
    eyebrow: "BUSINESS SOLUTIONS",
    title: "Business Systems, ERP & CRM",
    description:
      "Streamline complex business operations with software tailored to your workflows. We build custom dashboards, management systems, and e-commerce experiences that bring your essential business processes together.",
    image: "/images/service/business_systems.jpg",
    imageAlt: "Business dashboard and management system preview",
    icon: LuLayers,
    includes: [
      "Custom ERP development",
      "Custom CRM solutions",
      "Dashboard development",
      "E-commerce development",
      "Inventory management",
      "Payment gateway integration",
      "Database architecture",
      "Business logic automation",
      "Internal business tools",
      "Legacy system integration",
    ],
  },
  {
    id: "ai-integration",
    number: "03",
    eyebrow: "INTELLIGENT SYSTEMS",
    title: "AI Integration & Automation",
    description:
      "Connect intelligent capabilities to your digital products and business workflows. From integrating existing AI models to automating repetitive tasks, we help make your systems more efficient and useful.",
    image: "/images/service/ai_automation.jpg",
    imageAlt: "AI integration and workflow automation preview",
    icon: LuBrain,
    includes: [
      "AI API integration",
      "LLM integration",
      "AI chatbot integration",
      "Workflow automation",
      "Customer support automation",
      "Lead qualification workflows",
      "AI-powered search",
      "Document processing",
      "Third-party API integration",
      "Intelligent business workflows",
    ],
  },
  {
    id: "design-support",
    number: "04",
    eyebrow: "EXPERIENCE & RELIABILITY",
    title: "UI/UX, Maintenance & Support",
    description:
      "Create intuitive digital experiences and keep your website running reliably. We combine thoughtful interface implementation with ongoing improvements, technical maintenance, and practical support.",
    image: "/images/service/ui-ux.jpg",
    imageAlt: "UI design and digital experience project preview",
    icon: LuPalette,
    includes: [
      "UI/UX design implementation",
      "Responsive interface development",
      "Design system implementation",
      "Pixel-accurate development",
      "Website maintenance",
      "Bug fixes and troubleshooting",
      "Performance improvements",
      "Cross-browser testing",
      "Technical support",
      "Ongoing improvements",
    ],
  },
];

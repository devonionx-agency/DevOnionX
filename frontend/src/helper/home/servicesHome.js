/* ------------------------------------------------------------------ */
/* EDIT HERE: image paths (files live in /public/images/service/)      */
/* ------------------------------------------------------------------ */
const IMAGE_PATHS = {
  webSaas: "/images/service/saas_engineering.jpg",
  erpCrm: "/images/service/business_systems.jpg",
  aiAutomation: "/images/service/ai_automation.jpg",
  uiuxSupport: "/images/service/ui-ux.jpg",
};

/* ------------------------------------------------------------------ */
/* EDIT HERE: service detail URLs                                      */
/* ------------------------------------------------------------------ */
const SERVICE_ROUTES = {
  webSaas: "/services/web-saas-development",
  erpCrm: "/services/erp-crm-systems",
  aiAutomation: "/services/ai-automation",
  uiuxSupport: "/services/ui-ux-support",
};

/* ------------------------------------------------------------------ */
/* Tailwind needs full class strings, so keep the colors written out.  */
/* ------------------------------------------------------------------ */
const SERVICES = [
  {
    id: "web-saas",
    number: "01",
    category: "Web Solutions & SaaS Engineering",
    heading: "Custom Web Development",
    description:
      "We build fast, scalable and secure web applications, SaaS platforms and digital products tailored to your business goals.",
    tags: [
      "Custom Web Apps",
      "SaaS Platforms",
      "API Integration",
      "Full-Stack Development",
    ],
    image: {
      src: IMAGE_PATHS.webSaas,
      alt: "SaaS dashboard shown on a laptop and a mobile phone",
    },
    href: SERVICE_ROUTES.webSaas,
    tone: {
      row: "bg-[#DCE9D5]",
      border: "border-[#C8DABF]",
      tag: "border-[#BBD0B0] bg-white/60",
    },
  },
  {
    id: "erp-crm",
    number: "02",
    category: "Business Systems, ERP & CRM",
    heading: "Streamlined Business Systems",
    description:
      "We develop ERP, CRM and business management systems that connect your operations, data and people in one place.",
    tags: ["ERP Systems", "CRM Solutions", "Dashboards", "E-commerce"],
    image: {
      src: IMAGE_PATHS.erpCrm,
      alt: "ERP and CRM analytics dashboard with business metrics and charts",
    },
    href: SERVICE_ROUTES.erpCrm,
    tone: {
      row: "bg-[#F0D8B5]",
      border: "border-[#E3C79F]",
      tag: "border-[#D9BC90] bg-white/60",
    },
  },
  {
    id: "ai-automation",
    number: "03",
    category: "AI Integration & Automation",
    heading: "Smarter Workflows with AI",
    description:
      "We integrate AI and automation tools to eliminate repetitive work, improve decision-making and unlock new opportunities.",
    tags: [
      "LLM Integration",
      "AI Chatbots",
      "Workflow Automation",
      "AI Search",
    ],
    image: {
      src: IMAGE_PATHS.aiAutomation,
      alt: "AI workflow diagram with connected tools, a chatbot interface and automation nodes",
    },
    href: SERVICE_ROUTES.aiAutomation,
    tone: {
      row: "bg-[#D8DDF5]",
      border: "border-[#C4CBEA]",
      tag: "border-[#B7BFE2] bg-white/60",
    },
  },
  {
    id: "uiux-support",
    number: "04",
    category: "UI/UX, Maintenance & Support",
    heading: "Better Experiences, Longer Performance",
    description:
      "We design intuitive interfaces, implement responsive layouts and provide ongoing support to keep your systems running smoothly.",
    tags: [
      "UI/UX Implementation",
      "Responsive Development",
      "Performance",
      "Technical Support",
    ],
    image: {
      src: IMAGE_PATHS.uiuxSupport,
      alt: "UI design system with responsive website screens and component previews",
    },
    href: SERVICE_ROUTES.uiuxSupport,
    tone: {
      row: "bg-[#F2D2C8]",
      border: "border-[#E6BFB2]",
      tag: "border-[#DCB1A3] bg-white/60",
    },
  },
];

export default SERVICES;

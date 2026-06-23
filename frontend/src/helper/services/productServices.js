export const productServices = {
  saas: {
    whatIs: {
      title: "What is SaaS Development?",
      description:
        "We build scalable Software-as-a-Service platforms with powerful multi-tenant architecture, subscription management, and seamless onboarding experiences designed to grow with your business.",
      bullets: [
        { label: "Multi-Tenant Architecture", icon: "ti-check" },
        { label: "Subscription Management", icon: "ti-check" },
        { label: "Usage-Based Billing", icon: "ti-check" },
        { label: "Onboarding Flows", icon: "ti-check" },
        { label: "Role-Based Access", icon: "ti-check" },
        { label: "Analytics Dashboard", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-users",
        title: "Multi-Tenancy",
        desc: "Isolated & secure tenants",
      },
      {
        icon: "ti-credit-card",
        title: "Billing System",
        desc: "Stripe & subscription plans",
      },
      {
        icon: "ti-user-plus",
        title: "Onboarding",
        desc: "Smooth user setup flow",
      },
      {
        icon: "ti-chart-bar",
        title: "Analytics",
        desc: "Usage metrics & insights",
      },
      { icon: "ti-lock", title: "RBAC", desc: "Role-based access control" },
      {
        icon: "ti-api",
        title: "Public API",
        desc: "For third-party integrations",
      },
      {
        icon: "ti-mail",
        title: "Email Automation",
        desc: "Drip campaigns & alerts",
      },
      {
        icon: "ti-activity",
        title: "Uptime Monitoring",
        desc: "99.9% availability target",
      },
    ],
    process: [
      { num: "01", title: "Discovery", desc: "SaaS model & market fit" },
      { num: "02", title: "Architecture", desc: "Multi-tenant system design" },
      { num: "03", title: "Auth & Billing", desc: "User & payment systems" },
      { num: "04", title: "Core Features", desc: "Building the product" },
      { num: "05", title: "Testing", desc: "Load & security testing" },
      { num: "06", title: "Beta Launch", desc: "Early user feedback" },
      { num: "07", title: "Scale", desc: "Optimize & grow" },
    ],
    techStack: [
      { icon: "ti-brand-nextjs", label: "Next.js", color: "#ffffff" },
      { icon: "ti-brand-nodejs", label: "Node.js", color: "#68A063" },
      { icon: "ti-brand-stripe", label: "Stripe", color: "#635BFF" },
      { icon: "ti-brand-postgresql", label: "PostgreSQL", color: "#336791" },
      { icon: "ti-brand-redis", label: "Redis", color: "#DC382D" },
      { icon: "ti-brand-docker", label: "Docker", color: "#2496ED" },
      { icon: "ti-brand-aws", label: "AWS", color: "#FF9900" },
      { icon: "ti-brand-vercel", label: "Vercel", color: "#ffffff" },
    ],
  },

  "dashboard-crm": {
    whatIs: {
      title: "What is Dashboard & CRM Development?",
      description:
        "We build data-driven dashboards and CRM systems that give you full visibility into your business operations. Manage leads, track performance, automate workflows and make smarter decisions faster.",
      bullets: [
        { label: "Real-Time Data", icon: "ti-check" },
        { label: "Custom Reports", icon: "ti-check" },
        { label: "Lead Management", icon: "ti-check" },
        { label: "Workflow Automation", icon: "ti-check" },
        { label: "Role-Based Access", icon: "ti-check" },
        { label: "Mobile Friendly", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-chart-line",
        title: "Analytics Dashboard",
        desc: "KPIs & live metrics",
      },
      {
        icon: "ti-users",
        title: "Contact Management",
        desc: "Leads, clients & pipeline",
      },
      {
        icon: "ti-robot",
        title: "Automation",
        desc: "Trigger-based workflows",
      },
      {
        icon: "ti-file-analytics",
        title: "Custom Reports",
        desc: "Exportable data reports",
      },
      {
        icon: "ti-bell",
        title: "Notifications",
        desc: "Smart alerts & reminders",
      },
      {
        icon: "ti-calendar",
        title: "Scheduling",
        desc: "Tasks & meeting manager",
      },
      {
        icon: "ti-lock",
        title: "Access Control",
        desc: "Team roles & permissions",
      },
      { icon: "ti-api", title: "Integrations", desc: "Slack, email & more" },
    ],
    process: [
      { num: "01", title: "Discovery", desc: "Business processes & needs" },
      { num: "02", title: "Data Modeling", desc: "Entities & relationships" },
      { num: "03", title: "UI Design", desc: "Dashboard wireframes" },
      { num: "04", title: "Development", desc: "Frontend & backend build" },
      { num: "05", title: "Integrations", desc: "Connecting data sources" },
      { num: "06", title: "Testing", desc: "Data accuracy & performance" },
      { num: "07", title: "Training", desc: "Team onboarding & handoff" },
    ],
    techStack: [
      { icon: "ti-brand-react", label: "React", color: "#61DAFB" },
      { icon: "ti-brand-recharts", label: "Recharts", color: "#FF6B6B" },
      { icon: "ti-brand-nodejs", label: "Node.js", color: "#68A063" },
      { icon: "ti-brand-mongodb", label: "MongoDB", color: "#47A248" },
      { icon: "ti-brand-postgresql", label: "PostgreSQL", color: "#336791" },
      { icon: "ti-brand-redis", label: "Redis", color: "#DC382D" },
      { icon: "ti-brand-aws", label: "AWS", color: "#FF9900" },
      { icon: "ti-brand-docker", label: "Docker", color: "#2496ED" },
    ],
  },

  ecommerce: {
    whatIs: {
      title: "What is E-Commerce Development?",
      description:
        "We build conversion-focused online stores with smooth shopping experiences, secure payment gateways and powerful inventory management. From Shopify to fully custom solutions, we make selling online effortless.",
      bullets: [
        { label: "Conversion Optimized", icon: "ti-check" },
        { label: "Secure Payments", icon: "ti-check" },
        { label: "Inventory Management", icon: "ti-check" },
        { label: "Mobile Commerce", icon: "ti-check" },
        { label: "SEO Friendly", icon: "ti-check" },
        { label: "Analytics Built-In", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-shopping-cart",
        title: "Product Catalog",
        desc: "Variants, filters & search",
      },
      {
        icon: "ti-credit-card",
        title: "Payment Gateway",
        desc: "Stripe, PayPal & more",
      },
      {
        icon: "ti-truck",
        title: "Shipping & Tax",
        desc: "Automated calculations",
      },
      {
        icon: "ti-chart-bar",
        title: "Sales Analytics",
        desc: "Revenue & conversion data",
      },
      {
        icon: "ti-tag",
        title: "Discounts & Coupons",
        desc: "Promo & loyalty tools",
      },
      {
        icon: "ti-user",
        title: "Customer Accounts",
        desc: "Order history & profiles",
      },
      {
        icon: "ti-mail",
        title: "Email Marketing",
        desc: "Cart recovery & promotions",
      },
      {
        icon: "ti-shield",
        title: "Fraud Protection",
        desc: "Secure checkout flow",
      },
    ],
    process: [
      { num: "01", title: "Discovery", desc: "Products, market & goals" },
      { num: "02", title: "Platform Choice", desc: "Shopify vs custom" },
      { num: "03", title: "Design", desc: "Store UI & UX flow" },
      { num: "04", title: "Development", desc: "Build & configure" },
      { num: "05", title: "Payment Setup", desc: "Gateway integration" },
      { num: "06", title: "Testing", desc: "Order flow & edge cases" },
      { num: "07", title: "Launch", desc: "Go live & optimize" },
    ],
    techStack: [
      { icon: "ti-brand-nextjs", label: "Next.js", color: "#ffffff" },
      { icon: "ti-brand-stripe", label: "Stripe", color: "#635BFF" },
      { icon: "ti-brand-shopify", label: "Shopify", color: "#96BF48" },
      { icon: "ti-brand-mongodb", label: "MongoDB", color: "#47A248" },
      { icon: "ti-brand-nodejs", label: "Node.js", color: "#68A063" },
      { icon: "ti-brand-tailwind", label: "Tailwind", color: "#38BDF8" },
      { icon: "ti-brand-aws", label: "AWS", color: "#FF9900" },
      { icon: "ti-brand-vercel", label: "Vercel", color: "#ffffff" },
    ],
  },
};

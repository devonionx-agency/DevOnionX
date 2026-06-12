// =============================================
// ADD THIS to your existing servicesPage.js
// below the existing `services` array
// =============================================

export const serviceDetails = {
  "custom-web": {
    whatIs: {
      title: "What is Custom Web Development?",
      description:
        "We create custom-tailored web solutions designed specifically around your business needs rather than using generic templates. Our websites are fast, secure, scalable and built to convert visitors into customers.",
      bullets: [
        { label: "100% Custom & Unique", icon: "ti-check" },
        { label: "Scalable & Future Ready", icon: "ti-check" },
        { label: "Optimized for Speed", icon: "ti-check" },
        { label: "SEO Friendly", icon: "ti-check" },
        { label: "Secure & Reliable", icon: "ti-check" },
        { label: "Better User Experience", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-device-laptop",
        title: "Responsive Website",
        desc: "Perfect on all devices",
      },
      {
        icon: "ti-layout-dashboard",
        title: "Admin Dashboard",
        desc: "Powerful & easy to manage",
      },
      {
        icon: "ti-lock",
        title: "Authentication System",
        desc: "Secure login & user management",
      },
      {
        icon: "ti-api",
        title: "API Integration",
        desc: "Third-party & custom APIs",
      },
      {
        icon: "ti-credit-card",
        title: "Payment Gateway",
        desc: "Secure online payments",
      },
      {
        icon: "ti-search",
        title: "SEO Setup",
        desc: "On-page & technical SEO",
      },
      {
        icon: "ti-rocket",
        title: "Performance Optimization",
        desc: "Lightning fast websites",
      },
      {
        icon: "ti-shield-lock",
        title: "Security Hardening",
        desc: "Protect your data & users",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery",
        desc: "Understanding your business & goals",
      },
      { num: "02", title: "Planning", desc: "Strategy, sitemap & wireframes" },
      { num: "03", title: "Design", desc: "UI/UX design & prototyping" },
      { num: "04", title: "Development", desc: "Clean & scalable coding" },
      { num: "05", title: "Testing", desc: "Quality assurance & bug fixing" },
      { num: "06", title: "Launch", desc: "Deployment & optimization" },
      { num: "07", title: "Support", desc: "Ongoing support & maintenance" },
    ],
    techStack: [
      { icon: "ti-brand-react", label: "React", color: "#61DAFB" },
      { icon: "ti-brand-nextjs", label: "Next.js", color: "#ffffff" },
      { icon: "ti-brand-typescript", label: "TypeScript", color: "#3178C6" },
      { icon: "ti-brand-nodejs", label: "Node.js", color: "#68A063" },
      { icon: "ti-brand-mongodb", label: "MongoDB", color: "#47A248" },
      { icon: "ti-brand-tailwind", label: "Tailwind", color: "#38BDF8" },
      { icon: "ti-brand-aws", label: "AWS", color: "#FF9900" },
      { icon: "ti-brand-vercel", label: "Vercel", color: "#ffffff" },
    ],
  },

  frontend: {
    whatIs: {
      title: "What is Frontend Development?",
      description:
        "We build pixel-perfect, responsive and interactive user interfaces using modern frameworks. Every component is crafted for performance, accessibility and seamless user experience across all devices.",
      bullets: [
        { label: "Pixel-Perfect Design", icon: "ti-check" },
        { label: "Cross-Browser Compatible", icon: "ti-check" },
        { label: "Fully Responsive", icon: "ti-check" },
        { label: "Accessibility First", icon: "ti-check" },
        { label: "Fast Load Times", icon: "ti-check" },
        { label: "Interactive UI", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-components",
        title: "Component Library",
        desc: "Reusable UI components",
      },
      {
        icon: "ti-device-mobile",
        title: "Mobile First",
        desc: "Optimized for every screen",
      },
      {
        icon: "ti-accessible",
        title: "Accessibility",
        desc: "WCAG compliant interfaces",
      },
      {
        icon: "ti-brand-framer",
        title: "Animations",
        desc: "Smooth & purposeful motion",
      },
      {
        icon: "ti-paint",
        title: "Design System",
        desc: "Consistent visual language",
      },
      {
        icon: "ti-brand-storybook",
        title: "Storybook Docs",
        desc: "Component documentation",
      },
      {
        icon: "ti-test-pipe",
        title: "Unit Testing",
        desc: "Jest & Testing Library",
      },
      {
        icon: "ti-rocket",
        title: "Performance",
        desc: "Core Web Vitals optimized",
      },
    ],
    process: [
      { num: "01", title: "Design Review", desc: "Analyzing Figma/XD files" },
      {
        num: "02",
        title: "Architecture",
        desc: "Component structure planning",
      },
      { num: "03", title: "Development", desc: "Building reusable components" },
      { num: "04", title: "Integration", desc: "Connecting APIs & backend" },
      { num: "05", title: "Testing", desc: "Cross-browser & device testing" },
      { num: "06", title: "Optimization", desc: "Performance & accessibility" },
      { num: "07", title: "Delivery", desc: "Handoff & documentation" },
    ],
    techStack: [
      { icon: "ti-brand-react", label: "React", color: "#61DAFB" },
      { icon: "ti-brand-nextjs", label: "Next.js", color: "#ffffff" },
      { icon: "ti-brand-typescript", label: "TypeScript", color: "#3178C6" },
      { icon: "ti-brand-tailwind", label: "Tailwind", color: "#38BDF8" },
      { icon: "ti-brand-framer", label: "Framer", color: "#0055FF" },
      { icon: "ti-brand-redux", label: "Redux", color: "#764ABC" },
      { icon: "ti-test-pipe", label: "Jest", color: "#C21325" },
      { icon: "ti-brand-figma", label: "Figma", color: "#F24E1E" },
    ],
  },

  backend: {
    whatIs: {
      title: "What is Backend Development?",
      description:
        "We build robust, secure and scalable server-side systems that power your digital products. From REST APIs to database architecture, we handle the complex infrastructure behind your application.",
      bullets: [
        { label: "Scalable Architecture", icon: "ti-check" },
        { label: "Secure by Default", icon: "ti-check" },
        { label: "High Performance APIs", icon: "ti-check" },
        { label: "Database Optimization", icon: "ti-check" },
        { label: "Real-time Capabilities", icon: "ti-check" },
        { label: "Cloud Ready", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-api",
        title: "REST APIs",
        desc: "Clean & documented endpoints",
      },
      {
        icon: "ti-database",
        title: "Database Design",
        desc: "Optimized schema & queries",
      },
      {
        icon: "ti-lock",
        title: "Authentication",
        desc: "JWT, OAuth, session-based",
      },
      {
        icon: "ti-cloud",
        title: "Cloud Deployment",
        desc: "AWS, GCP, DigitalOcean",
      },
      {
        icon: "ti-mail",
        title: "Email Services",
        desc: "Transactional & marketing",
      },
      {
        icon: "ti-file-upload",
        title: "File Storage",
        desc: "S3, Cloudinary integration",
      },
      {
        icon: "ti-activity",
        title: "Logging & Monitoring",
        desc: "Error tracking & alerts",
      },
      {
        icon: "ti-shield",
        title: "Security Audits",
        desc: "Vulnerability assessments",
      },
    ],
    process: [
      { num: "01", title: "Requirements", desc: "API & data model planning" },
      { num: "02", title: "Architecture", desc: "System design & tech stack" },
      { num: "03", title: "Database", desc: "Schema design & migrations" },
      {
        num: "04",
        title: "API Development",
        desc: "Building & documenting APIs",
      },
      { num: "05", title: "Security", desc: "Auth, validation & hardening" },
      { num: "06", title: "Testing", desc: "Unit, integration & load tests" },
      { num: "07", title: "Deployment", desc: "CI/CD & cloud setup" },
    ],
    techStack: [
      { icon: "ti-brand-nodejs", label: "Node.js", color: "#68A063" },
      { icon: "ti-brand-express", label: "Express", color: "#ffffff" },
      { icon: "ti-brand-mongodb", label: "MongoDB", color: "#47A248" },
      { icon: "ti-brand-postgresql", label: "PostgreSQL", color: "#336791" },
      { icon: "ti-brand-redis", label: "Redis", color: "#DC382D" },
      { icon: "ti-brand-docker", label: "Docker", color: "#2496ED" },
      { icon: "ti-brand-aws", label: "AWS", color: "#FF9900" },
      { icon: "ti-brand-github", label: "GitHub CI", color: "#ffffff" },
    ],
  },

  fullstack: {
    whatIs: {
      title: "What is Full Stack Development?",
      description:
        "We handle everything from front to backend seamlessly — one team, full ownership. From database design to pixel-perfect UI, we deliver complete end-to-end digital products built for scale.",
      bullets: [
        { label: "End-to-End Ownership", icon: "ti-check" },
        { label: "Unified Tech Stack", icon: "ti-check" },
        { label: "Faster Delivery", icon: "ti-check" },
        { label: "Consistent Architecture", icon: "ti-check" },
        { label: "Full Code Ownership", icon: "ti-check" },
        { label: "Ongoing Support", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-layout",
        title: "Full UI/UX",
        desc: "Complete frontend experience",
      },
      {
        icon: "ti-server-2",
        title: "Backend Systems",
        desc: "APIs & server architecture",
      },
      {
        icon: "ti-database",
        title: "Database",
        desc: "Design, optimize & manage",
      },
      {
        icon: "ti-brand-docker",
        title: "DevOps",
        desc: "CI/CD & containerization",
      },
      {
        icon: "ti-lock",
        title: "Auth & Security",
        desc: "End-to-end protection",
      },
      {
        icon: "ti-cloud-upload",
        title: "Deployment",
        desc: "Cloud & CDN setup",
      },
      { icon: "ti-test-pipe", title: "Testing", desc: "Full coverage testing" },
      {
        icon: "ti-headphones",
        title: "Maintenance",
        desc: "Post-launch support",
      },
    ],
    process: [
      { num: "01", title: "Discovery", desc: "Full project scope & goals" },
      { num: "02", title: "Architecture", desc: "Full stack planning" },
      { num: "03", title: "Design", desc: "UI/UX & DB schema" },
      {
        num: "04",
        title: "Development",
        desc: "Frontend + backend simultaneously",
      },
      { num: "05", title: "Integration", desc: "Connecting all layers" },
      { num: "06", title: "Testing", desc: "End-to-end quality checks" },
      { num: "07", title: "Launch", desc: "Deploy & go live" },
    ],
    techStack: [
      { icon: "ti-brand-react", label: "React", color: "#61DAFB" },
      { icon: "ti-brand-nextjs", label: "Next.js", color: "#ffffff" },
      { icon: "ti-brand-nodejs", label: "Node.js", color: "#68A063" },
      { icon: "ti-brand-mongodb", label: "MongoDB", color: "#47A248" },
      { icon: "ti-brand-postgresql", label: "PostgreSQL", color: "#336791" },
      { icon: "ti-brand-docker", label: "Docker", color: "#2496ED" },
      { icon: "ti-brand-aws", label: "AWS", color: "#FF9900" },
      { icon: "ti-brand-vercel", label: "Vercel", color: "#ffffff" },
    ],
  },

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

  uiux: {
    whatIs: {
      title: "What is UI/UX Design?",
      description:
        "We design beautiful, intuitive and user-centered digital experiences that enhance engagement and drive conversions. From user research to high-fidelity prototypes, every design decision is backed by data.",
      bullets: [
        { label: "User-Centered Design", icon: "ti-check" },
        { label: "Research-Backed", icon: "ti-check" },
        { label: "Design System", icon: "ti-check" },
        { label: "Interactive Prototypes", icon: "ti-check" },
        { label: "Accessibility First", icon: "ti-check" },
        { label: "Dev-Ready Handoff", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-users",
        title: "User Research",
        desc: "Interviews & surveys",
      },
      {
        icon: "ti-layout-2",
        title: "Wireframing",
        desc: "Low & mid-fi layouts",
      },
      {
        icon: "ti-brand-figma",
        title: "UI Design",
        desc: "High-fidelity Figma designs",
      },
      {
        icon: "ti-brand-framer",
        title: "Prototyping",
        desc: "Interactive clickable demos",
      },
      {
        icon: "ti-paint",
        title: "Design System",
        desc: "Tokens, components & docs",
      },
      {
        icon: "ti-accessible",
        title: "Accessibility",
        desc: "WCAG 2.1 AA compliance",
      },
      {
        icon: "ti-test-pipe",
        title: "Usability Testing",
        desc: "User feedback sessions",
      },
      {
        icon: "ti-file-export",
        title: "Dev Handoff",
        desc: "Specs, assets & guides",
      },
    ],
    process: [
      { num: "01", title: "Research", desc: "Understanding users & market" },
      { num: "02", title: "Wireframes", desc: "Structure & information flow" },
      { num: "03", title: "Visual Design", desc: "Colors, type & components" },
      { num: "04", title: "Prototype", desc: "Interactive mockups" },
      { num: "05", title: "User Testing", desc: "Feedback & iteration" },
      { num: "06", title: "Refinement", desc: "Polish & final designs" },
      { num: "07", title: "Handoff", desc: "Dev-ready files & specs" },
    ],
    techStack: [
      { icon: "ti-brand-figma", label: "Figma", color: "#F24E1E" },
      { icon: "ti-brand-framer", label: "Framer", color: "#0055FF" },
      { icon: "ti-brand-adobe", label: "Illustrator", color: "#FF9A00" },
      { icon: "ti-brand-storybook", label: "Storybook", color: "#FF4785" },
      { icon: "ti-brand-notion", label: "Notion", color: "#ffffff" },
      { icon: "ti-brand-lottie", label: "Lottie", color: "#00DDB3" },
      { icon: "ti-brand-tailwind", label: "Tailwind", color: "#38BDF8" },
      { icon: "ti-brand-chrome", label: "DevTools", color: "#4285F4" },
    ],
  },

  maintenance: {
    whatIs: {
      title: "What is Website Maintenance?",
      description:
        "We keep your web applications fast, secure and up-to-date so you can focus on growing your business. Our proactive maintenance plans prevent issues before they impact your users.",
      bullets: [
        { label: "Proactive Monitoring", icon: "ti-check" },
        { label: "Regular Updates", icon: "ti-check" },
        { label: "Security Patches", icon: "ti-check" },
        { label: "Performance Audits", icon: "ti-check" },
        { label: "Uptime Guarantee", icon: "ti-check" },
        { label: "Monthly Reports", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-activity",
        title: "Uptime Monitoring",
        desc: "24/7 availability checks",
      },
      {
        icon: "ti-shield",
        title: "Security Patches",
        desc: "Vulnerability fixes",
      },
      {
        icon: "ti-refresh",
        title: "Dependency Updates",
        desc: "Libraries & frameworks",
      },
      {
        icon: "ti-rocket",
        title: "Performance Audits",
        desc: "Speed & Core Web Vitals",
      },
      {
        icon: "ti-database",
        title: "DB Backups",
        desc: "Daily automated backups",
      },
      {
        icon: "ti-bug",
        title: "Bug Fixing",
        desc: "Priority issue resolution",
      },
      {
        icon: "ti-file-analytics",
        title: "Monthly Reports",
        desc: "Health & usage summary",
      },
      {
        icon: "ti-headphones",
        title: "Priority Support",
        desc: "Fast response times",
      },
    ],
    process: [
      { num: "01", title: "Audit", desc: "Full site health check" },
      { num: "02", title: "Setup", desc: "Monitoring & alerts config" },
      { num: "03", title: "Schedule", desc: "Update & backup plan" },
      { num: "04", title: "Monitoring", desc: "Continuous oversight" },
      { num: "05", title: "Bug Fixes", desc: "As issues arise" },
      { num: "06", title: "Reporting", desc: "Monthly health reports" },
      { num: "07", title: "Review", desc: "Quarterly strategy check" },
    ],
    techStack: [
      { icon: "ti-brand-github", label: "GitHub", color: "#ffffff" },
      { icon: "ti-brand-docker", label: "Docker", color: "#2496ED" },
      { icon: "ti-brand-aws", label: "AWS", color: "#FF9900" },
      { icon: "ti-brand-vercel", label: "Vercel", color: "#ffffff" },
      { icon: "ti-brand-cloudflare", label: "Cloudflare", color: "#F38020" },
      { icon: "ti-brand-sentry", label: "Sentry", color: "#362D59" },
      { icon: "ti-database", label: "Backups", color: "#47A248" },
      { icon: "ti-activity", label: "Uptime Robot", color: "#3BD671" },
    ],
  },

  support: {
    whatIs: {
      title: "What is Technical Support?",
      description:
        "We provide round-the-clock technical support to ensure your digital products run flawlessly at every stage of growth. Our dedicated team is always ready to diagnose, fix and improve your systems.",
      bullets: [
        { label: "24/7 Availability", icon: "ti-check" },
        { label: "Fast Response Times", icon: "ti-check" },
        { label: "Dedicated Team", icon: "ti-check" },
        { label: "Proactive Solutions", icon: "ti-check" },
        { label: "Clear Communication", icon: "ti-check" },
        { label: "SLA Guaranteed", icon: "ti-check" },
      ],
    },
    deliver: [
      {
        icon: "ti-headphones",
        title: "24/7 Support",
        desc: "Always available team",
      },
      {
        icon: "ti-bug",
        title: "Bug Resolution",
        desc: "Fast diagnosis & fixes",
      },
      {
        icon: "ti-activity",
        title: "System Monitoring",
        desc: "Real-time health checks",
      },
      {
        icon: "ti-refresh",
        title: "Emergency Fixes",
        desc: "Critical issue response",
      },
      {
        icon: "ti-file-analytics",
        title: "Incident Reports",
        desc: "Full post-mortems",
      },
      { icon: "ti-message", title: "Live Chat", desc: "Direct team access" },
      {
        icon: "ti-clipboard-list",
        title: "Ticket System",
        desc: "Tracked & prioritized",
      },
      {
        icon: "ti-shield-check",
        title: "SLA Management",
        desc: "Guaranteed response times",
      },
    ],
    process: [
      { num: "01", title: "Onboarding", desc: "System access & documentation" },
      { num: "02", title: "Monitoring Setup", desc: "Alerts & dashboards" },
      { num: "03", title: "Issue Triage", desc: "Priority classification" },
      { num: "04", title: "Resolution", desc: "Fix & verify" },
      { num: "05", title: "Root Cause", desc: "Analysis & prevention" },
      { num: "06", title: "Reporting", desc: "Status & incident reports" },
      { num: "07", title: "Review", desc: "Continuous improvement" },
    ],
    techStack: [
      { icon: "ti-brand-slack", label: "Slack", color: "#4A154B" },
      { icon: "ti-brand-github", label: "GitHub", color: "#ffffff" },
      { icon: "ti-brand-docker", label: "Docker", color: "#2496ED" },
      { icon: "ti-brand-sentry", label: "Sentry", color: "#362D59" },
      { icon: "ti-brand-aws", label: "AWS", color: "#FF9900" },
      { icon: "ti-brand-cloudflare", label: "Cloudflare", color: "#F38020" },
      { icon: "ti-activity", label: "Grafana", color: "#F46800" },
      { icon: "ti-brand-vercel", label: "Vercel", color: "#ffffff" },
    ],
  },
};

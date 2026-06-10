import { blogImages } from "./imageProvider/blogImage";

const { allBlogImages } = blogImages;

// colSpan pattern per 6-item cycle:
// index 0 → 2, index 1 → 1  (row 1: col-span-2 | col-span-1)
// index 2 → 1, index 3 → 1  (row 2: col-span-1 | col-span-1)
// index 4 → 1, index 5 → 2  (row 3: col-span-1 | col-span-2)

const colSpanPattern = [2, 1, 1, 1, 1, 2];
export const blogData = [
  {
    id: 1,
    category: "Case Study",
    categoryClass: "bg-[#F97316]",
    overlayClass:
      "bg-gradient-to-t from-[#F97316]/65 from-10% via-[#0f0500]/55 via-50% to-transparent",
    readTime: "5 min read",
    title: "How We Built a Real-Time Chat System",
    excerpt:
      "A deep dive into architecture decisions, scaling challenges, and lessons learned from building a production-grade chat app.",
    author: "Jhulon",
    date: "Jan 3, 2026",
    tags: ["Node.js", "Socket.io", "Express.js", "MongoDB"],
    href: "/blog/real-time-chat-system",
    image: allBlogImages[2].img,
  },
  {
    id: 2,
    category: "UI/UX Design",
    categoryClass: "bg-[#8B5CF6]",
    overlayClass:
      "bg-gradient-to-t from-[#8B5CF6]/65 from-10% via-[#0a0014]/55 via-50% to-transparent",
    readTime: "4 min read",
    title: "Designing for Accessibility Without Sacrificing Aesthetics",
    excerpt:
      "How we approach inclusive design at DevOnionX — balancing visual appeal with WCAG compliance.",
    author: "Nadia Islam",
    date: "Jan 10, 2026",
    tags: ["Figma", "WCAG", "Design System", "CSS"],
    href: "/blog/accessibility-design",
    image: allBlogImages[5].img,
  },
  {
    id: 3,
    category: "DevOps",
    categoryClass: "bg-[#06B6D4]",
    overlayClass:
      "bg-gradient-to-t from-[#06B6D4]/65 from-10% via-[#00080f]/55 via-50% to-transparent",
    readTime: "6 min read",
    title: "Zero-Downtime Deployments with Docker and GitHub Actions",
    excerpt:
      "Our CI/CD pipeline walkthrough — from push to production without a single dropped request.",
    author: "Rafiq Hassan",
    date: "Jan 18, 2026",
    tags: ["Docker", "GitHub Actions", "CI/CD", "Nginx"],
    href: "/blog/zero-downtime-deployments",
    image: allBlogImages[3].img,
  },
  {
    id: 4,
    category: "Frontend",
    categoryClass: "bg-[#10B981]",
    overlayClass:
      "bg-gradient-to-t from-[#10B981]/65 from-10% via-[#001209]/55 via-50% to-transparent",
    readTime: "3 min read",
    title: "Why We Migrated from Pages Router to App Router in Next.js",
    excerpt:
      "The real reasons behind our migration — performance, DX, and what we wish we knew before starting.",
    author: "Sumaiya Akter",
    date: "Jan 25, 2026",
    tags: ["Next.js", "React", "App Router", "Performance"],
    href: "/blog/nextjs-app-router-migration",
    image: allBlogImages[4].img,
  },
  {
    id: 5,
    category: "AI Integration",
    categoryClass: "bg-[#FBBF24]",
    overlayClass:
      "bg-gradient-to-t from-[#FBBF24]/65 from-10% via-[#100800]/55 via-50% to-transparent",
    readTime: "7 min read",
    title: "Integrating OpenAI Into a SaaS Product — What Nobody Tells You",
    excerpt:
      "Prompt engineering, cost control, rate limits, and UX patterns we learned the hard way.",
    author: "Jhulon",
    date: "Feb 2, 2026",
    tags: ["OpenAI", "SaaS", "Prompt Engineering", "Node.js"],
    href: "/blog/openai-saas-integration",
    image: allBlogImages[0].img,
  },
  {
    id: 6,
    category: "Backend",
    categoryClass: "bg-[#EF4444]",
    overlayClass:
      "bg-gradient-to-t from-[#EF4444]/65 from-10% via-[#0f0000]/55 via-50% to-transparent",
    readTime: "5 min read",
    title: "Building a Scalable REST API With Express and MongoDB",
    excerpt:
      "From schema design to rate limiting — a complete guide to production-ready Express APIs.",
    author: "Jhulon",
    date: "Feb 9, 2026",
    tags: ["Express.js", "MongoDB", "REST API", "Node.js"],
    href: "/blog/scalable-rest-api",
    image: allBlogImages[1].img,
  },
  {
    id: 7,
    category: "Case Study",
    categoryClass: "bg-[#F97316]",
    overlayClass:
      "bg-gradient-to-t from-[#F97316]/65 from-10% via-[#0f0500]/55 via-50% to-transparent",
    readTime: "8 min read",
    title: "Rebuilding a Legacy E-Commerce Platform From Scratch",
    excerpt:
      "How we took a 7-year-old PHP codebase and turned it into a modern Next.js storefront in 8 weeks.",
    author: "Jhulon",
    date: "Feb 16, 2026",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    href: "/blog/ecommerce-rebuild",
    image: allBlogImages[2].img,
  },
  {
    id: 8,
    category: "UI/UX Design",
    categoryClass: "bg-[#8B5CF6]",
    overlayClass:
      "bg-gradient-to-t from-[#8B5CF6]/65 from-10% via-[#0a0014]/55 via-50% to-transparent",
    readTime: "4 min read",
    title: "Dark Mode Design Systems — Our Approach at DevOnionX",
    excerpt:
      "CSS variables, semantic tokens, and Figma strategies for building a robust dark-first design system.",
    author: "Nadia Islam",
    date: "Feb 22, 2026",
    tags: ["CSS Variables", "Figma", "Design Tokens", "Tailwind"],
    href: "/blog/dark-mode-design-system",
    image: allBlogImages[5].img,
  },
  {
    id: 9,
    category: "Frontend",
    categoryClass: "bg-[#10B981]",
    overlayClass:
      "bg-gradient-to-t from-[#10B981]/65 from-10% via-[#001209]/55 via-50% to-transparent",
    readTime: "5 min read",
    title: "GSAP Animations in Next.js — The Right Way",
    excerpt:
      "Server components, hydration conflicts, and ScrollTrigger — here's how we make GSAP work cleanly in App Router.",
    author: "Sumaiya Akter",
    date: "Mar 1, 2026",
    tags: ["GSAP", "Next.js", "Animation", "React"],
    href: "/blog/gsap-nextjs",
    image: allBlogImages[4].img,
  },
  {
    id: 10,
    category: "DevOps",
    categoryClass: "bg-[#06B6D4]",
    overlayClass:
      "bg-gradient-to-t from-[#06B6D4]/65 from-10% via-[#00080f]/55 via-50% to-transparent",
    readTime: "6 min read",
    title: "Monitoring Node.js Apps in Production With Prometheus and Grafana",
    excerpt:
      "Setting up metrics, dashboards, and alerting for Express apps — no Kubernetes required.",
    author: "Rafiq Hassan",
    date: "Mar 8, 2026",
    tags: ["Prometheus", "Grafana", "Node.js", "VPS"],
    href: "/blog/nodejs-monitoring",
    image: allBlogImages[3].img,
  },
  {
    id: 11,
    category: "AI Integration",
    categoryClass: "bg-[#FBBF24]",
    overlayClass:
      "bg-gradient-to-t from-[#FBBF24]/65 from-10% via-[#100800]/55 via-50% to-transparent",
    readTime: "6 min read",
    title: "Building an AI-Powered Dashboard for a B2B SaaS Client",
    excerpt:
      "From wireframe to live product — how we shipped an AI analytics feature in 3 weeks.",
    author: "Jhulon",
    date: "Mar 15, 2026",
    tags: ["AI", "SaaS", "Dashboard", "React"],
    href: "/blog/ai-dashboard-saas",
    image: allBlogImages[0].img,
  },
  {
    id: 12,
    category: "Backend",
    categoryClass: "bg-[#EF4444]",
    overlayClass:
      "bg-gradient-to-t from-[#EF4444]/65 from-10% via-[#0f0000]/55 via-50% to-transparent",
    readTime: "4 min read",
    title: "JWT vs Session Auth — Which One Should You Actually Use?",
    excerpt:
      "A practical breakdown with real tradeoffs — based on what we've seen break in production.",
    author: "Jhulon",
    date: "Mar 22, 2026",
    tags: ["Auth", "JWT", "Sessions", "Security"],
    href: "/blog/jwt-vs-session",
    image: allBlogImages[1].img,
  },
  {
    id: 13,
    category: "Case Study",
    categoryClass: "bg-[#F97316]",
    overlayClass:
      "bg-gradient-to-t from-[#F97316]/65 from-10% via-[#0f0500]/55 via-50% to-transparent",
    readTime: "9 min read",
    title: "How a CRM Dashboard Increased Client Retention by 40%",
    excerpt:
      "The UX decisions, data architecture, and frontend engineering behind a CRM that actually gets used.",
    author: "Jhulon",
    date: "Mar 29, 2026",
    tags: ["CRM", "Dashboard", "React", "MongoDB"],
    href: "/blog/crm-client-retention",
    image: allBlogImages[2].img,
  },
  {
    id: 14,
    category: "UI/UX Design",
    categoryClass: "bg-[#8B5CF6]",
    overlayClass:
      "bg-gradient-to-t from-[#8B5CF6]/65 from-10% via-[#0a0014]/55 via-50% to-transparent",
    readTime: "3 min read",
    title: "Micro-Interactions That Make Users Stay",
    excerpt:
      "Small animations, hover states, and feedback loops — how we use motion to reduce bounce rate.",
    author: "Nadia Islam",
    date: "Apr 5, 2026",
    tags: ["Motion", "UX", "CSS", "Framer Motion"],
    href: "/blog/micro-interactions",
    image: allBlogImages[5].img,
  },
  {
    id: 15,
    category: "Frontend",
    categoryClass: "bg-[#10B981]",
    overlayClass:
      "bg-gradient-to-t from-[#10B981]/65 from-10% via-[#001209]/55 via-50% to-transparent",
    readTime: "5 min read",
    title: "Tailwind CSS 4 — What Changed and How We Adapted",
    excerpt:
      "CSS-first config, new utilities, and breaking changes — our upgrade notes from a real project.",
    author: "Sumaiya Akter",
    date: "Apr 12, 2026",
    tags: ["Tailwind CSS", "CSS", "Next.js", "Frontend"],
    href: "/blog/tailwind-css-4",
    image: allBlogImages[4].img,
  },
  {
    id: 16,
    category: "DevOps",
    categoryClass: "bg-[#06B6D4]",
    overlayClass:
      "bg-gradient-to-t from-[#06B6D4]/65 from-10% via-[#00080f]/55 via-50% to-transparent",
    readTime: "7 min read",
    title: "VPS vs Vercel — Where Should You Actually Deploy?",
    excerpt:
      "Cost, control, cold starts, and scale — a real comparison based on our agency's production workloads.",
    author: "Rafiq Hassan",
    date: "Apr 19, 2026",
    tags: ["VPS", "Vercel", "Deployment", "DevOps"],
    href: "/blog/vps-vs-vercel",
    image: allBlogImages[3].img,
  },
  {
    id: 17,
    category: "AI Integration",
    categoryClass: "bg-[#FBBF24]",
    overlayClass:
      "bg-gradient-to-t from-[#FBBF24]/65 from-10% via-[#100800]/55 via-50% to-transparent",
    readTime: "5 min read",
    title: "Fine-Tuning vs RAG — Choosing the Right AI Architecture",
    excerpt:
      "When to fine-tune a model vs use retrieval-augmented generation — with real examples from client projects.",
    author: "Jhulon",
    date: "Apr 26, 2026",
    tags: ["RAG", "Fine-tuning", "LLM", "AI"],
    href: "/blog/finetuning-vs-rag",
    image: allBlogImages[0].img,
  },
  {
    id: 18,
    category: "Backend",
    categoryClass: "bg-[#EF4444]",
    overlayClass:
      "bg-gradient-to-t from-[#EF4444]/65 from-10% via-[#0f0000]/55 via-50% to-transparent",
    readTime: "6 min read",
    title: "WebSockets in Production — Scaling Beyond a Single Server",
    excerpt:
      "Redis pub/sub, sticky sessions, and load balancing strategies for real-time apps at scale.",
    author: "Jhulon",
    date: "May 3, 2026",
    tags: ["WebSockets", "Redis", "Node.js", "Scaling"],
    href: "/blog/websockets-production",
    image: allBlogImages[1].img,
  },
  {
    id: 19,
    category: "Case Study",
    categoryClass: "bg-[#F97316]",
    overlayClass:
      "bg-gradient-to-t from-[#F97316]/65 from-10% via-[#0f0500]/55 via-50% to-transparent",
    readTime: "10 min read",
    title: "Building a Multi-Tenant SaaS From Zero to First Paying Customer",
    excerpt:
      "Architecture decisions, pricing strategy, and the first 90 days of our SaaS product journey.",
    author: "Jhulon",
    date: "May 10, 2026",
    tags: ["SaaS", "Multi-tenant", "Next.js", "Stripe"],
    href: "/blog/multitenant-saas",
    image: allBlogImages[2].img,
  },
  {
    id: 20,
    category: "Frontend",
    categoryClass: "bg-[#10B981]",
    overlayClass:
      "bg-gradient-to-t from-[#10B981]/65 from-10% via-[#001209]/55 via-50% to-transparent",
    readTime: "4 min read",
    title: "React Server Components — When to Use Them and When Not To",
    excerpt:
      "Practical rules we follow at DevOnionX for deciding RSC vs Client Component — no hype, just usage patterns.",
    author: "Sumaiya Akter",
    date: "May 17, 2026",
    tags: ["RSC", "React", "Next.js", "Performance"],
    href: "/blog/react-server-components",
    image: allBlogImages[4].img,
  },
  {
    id: 21,
    category: "UI/UX Design",
    categoryClass: "bg-[#8B5CF6]",
    overlayClass:
      "bg-gradient-to-t from-[#8B5CF6]/65 from-10% via-[#0a0014]/55 via-50% to-transparent",
    readTime: "4 min read",
    title: "Typography Systems That Scale — Our Design Process",
    excerpt:
      "Fluid type scales, variable fonts, and CSS clamp — how we build type systems that work at every screen size.",
    author: "Nadia Islam",
    date: "May 24, 2026",
    tags: ["Typography", "CSS", "Figma", "Design System"],
    href: "/blog/typography-systems",
    image: allBlogImages[5].img,
  },
  {
    id: 22,
    category: "AI Integration",
    categoryClass: "bg-[#FBBF24]",
    overlayClass:
      "bg-gradient-to-t from-[#FBBF24]/65 from-10% via-[#100800]/55 via-50% to-transparent",
    readTime: "7 min read",
    title: "Building a Custom AI Chatbot for a Client's E-Commerce Store",
    excerpt:
      "Product recommendations, order tracking, and natural language search — all in one chatbot widget.",
    author: "Jhulon",
    date: "May 31, 2026",
    tags: ["AI Chatbot", "E-Commerce", "OpenAI", "React"],
    href: "/blog/ecommerce-ai-chatbot",
    image: allBlogImages[0].img,
  },
  {
    id: 23,
    category: "AI Integration",
    categoryClass: "bg-[#FBBF24]",
    overlayClass:
      "bg-gradient-to-t from-[#FBBF24]/65 from-10% via-[#100800]/55 via-50% to-transparent",
    readTime: "7 min read",
    title: "Building a Custom AI Chatbot for a Client's E-Commerce Store",
    excerpt:
      "Product recommendations, order tracking, and natural language search — all in one chatbot widget.",
    author: "Jhulon",
    date: "May 31, 2026",
    tags: ["AI Chatbot", "E-Commerce", "OpenAI", "React"],
    href: "/blog/ecommerce-ai-chatbot",
    image: allBlogImages[0].img,
  },
].map((blog, index) => ({
  ...blog,
  colSpan: colSpanPattern[index % 6],
}));

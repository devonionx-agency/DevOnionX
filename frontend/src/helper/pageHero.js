import { allPageHeroImg } from "./imageProvider/pageHeroImage";

const { workPage, servicePage, blogPage,aboutPage } = allPageHeroImg;
// workPageData.js page hero (helper file)

export const workPageHeroData = {
  buttonLabel: "Let's Talk",
  services: false,
  sectionText: "Work That Speaks for Itself",
  sectionColorText: "Speaks for Itself",
  sectionLabel: "Portfolio",
  heroDescription:
    "From bold startups to scaling businesses — we design and build digital products powered by modern tech and AI-driven thinking, solutions that perform under pressure, impress at first glance, and evolve as your business grows",

  waterfallPlates: [
    { label: ".ai", color: "#A855F7", glow: "#9333EA", isBase: true },
    { label: ".mongo", color: "#00ED64", glow: "#00C853", isBase: false },
    { label: ".express", color: "#C7C7C7", glow: "#999999", isBase: false },
    { label: ".react", color: "#61DAFB", glow: "#21C3F3", isBase: false },
    { label: ".node", color: "#74C43B", glow: "#5BA32E", isBase: false },
    { label: ".typescript", color: "#4B8EF1", glow: "#2F6FD4", isBase: false },
    { label: ".next", color: "#E2E2E2", glow: "#B0B0FF", isBase: false },
    { label: ".tailwind", color: "#06B6D4", glow: "#0891B2", isBase: false },
    { label: ".figma", color: "#FF7262", glow: "#F24E1E", isBase: false },
    { label: ".openai", color: "#19C37D", glow: "#0FA36A", isBase: false },
    { label: ".postgres", color: "#9B6BFA", glow: "#7C3AED", isBase: false },
    { label: ".docker", color: "#1D97E4", glow: "#0B74C0", isBase: false },
    { label: ".git", color: "#F64D27", glow: "#D93A14", isBase: false },
  ],
  heroPageImage: workPage[0].img,
};

// for services page hero

export const servicesPageHeroData = {
  buttonLabel: "Let's Talk",
  services: false,
  sectionLabel: "What We Do",
  sectionText: "We Don't Just Build. We Engineer.",
  sectionColorText: "We Engineer.",
  heroDescription:
    "Most agencies ship code. We ship outcomes. From AI-powered platforms to pixel-perfect interfaces — every solution we craft is engineered for performance, built for scale, and designed to make your business impossible to ignore.",

  waterfallPlates: [
    {
      label: "AI Integration",
      color: "#E040FB",
      glow: "#C000F0",
      isBase: true,
    },
    {
      label: "Web Development",
      color: "#00D4FF",
      glow: "#00A8CC",
      isBase: false,
    },
    { label: "UI/UX Design", color: "#FF6B6B", glow: "#E53E3E", isBase: false },
    {
      label: "SaaS Development",
      color: "#F5A623",
      glow: "#D4891A",
      isBase: false,
    },
    { label: "Backend APIs", color: "#69FF94", glow: "#38D968", isBase: false },
    { label: "E-Commerce", color: "#FF8FE8", glow: "#E060C8", isBase: false },
    {
      label: "Dashboard & CRM",
      color: "#5B8DEF",
      glow: "#3A6BE0",
      isBase: false,
    },
    { label: "Mobile Apps", color: "#FFD166", glow: "#F0B429", isBase: false },
    { label: "DevOps", color: "#43E8D8", glow: "#1EC8B8", isBase: false },
  ],
  heroPageImage: servicePage[0].img,
};

// for blog page hero
export const blogPageHeroData = {
  buttonLabel: "Let's Talk",
  services: false,
  sectionLabel: "Our Blog",
  sectionText: "Insights That Drive. Stories That Stick.",
  sectionColorText: "Stories That Stick.",
  heroDescription:
    "We don't just build for clients — we think out loud. Explore deep dives into AI, web engineering, design systems, and the real stories behind the products we ship. No fluff. Just sharp thinking from a team that lives and breathes digital.",

  waterfallPlates: [
    {
      label: "Tech Articles",
      color: "#00D4FF",
      glow: "#00A8CC",
      isBase: true,
    },
    {
      label: "Case Studies",
      color: "#E040FB",
      glow: "#C000F0",
      isBase: false,
    },
    {
      label: "AI & Innovation",
      color: "#69FF94",
      glow: "#38D968",
      isBase: false,
    },
    {
      label: "Design Thinking",
      color: "#FF6B6B",
      glow: "#E53E3E",
      isBase: false,
    },
    {
      label: "Dev Tutorials",
      color: "#F5A623",
      glow: "#D4891A",
      isBase: false,
    },
    {
      label: "Product Stories",
      color: "#FF8FE8",
      glow: "#E060C8",
      isBase: false,
    },
    {
      label: "Industry News",
      color: "#5B8DEF",
      glow: "#3A6BE0",
      isBase: false,
    },
    {
      label: "Behind The Build",
      color: "#FFD166",
      glow: "#F0B429",
      isBase: false,
    },
    {
      label: "Open Source",
      color: "#43E8D8",
      glow: "#1EC8B8",
      isBase: false,
    },
  ],
  heroPageImage: blogPage[0].img,
};

// for about page hero

export const aboutPageHeroData = {
  buttonLabel: "Let's Talk",
  services: false,
  sectionLabel: "About Us",
  sectionText: "Built Different. Wired for Results.",
  sectionColorText: "Wired for Results.",
  heroDescription:
    "DevOnionX isn't your typical agency. We're a team of obsessive builders, strategic thinkers, and relentless problem-solvers — united by one goal: making your business win online. Every pixel we push, every line we write, every system we architect is built with purpose. Not just to impress — but to perform.",

  waterfallPlates: [
    {
      label: "Our Story",
      color: "#E040FB",
      glow: "#C000F0",
      isBase: true,
    },
    {
      label: "Our Mission",
      color: "#00D4FF",
      glow: "#00A8CC",
      isBase: false,
    },
    {
      label: "The Team",
      color: "#69FF94",
      glow: "#38D968",
      isBase: false,
    },
    {
      label: "Client First",
      color: "#FF6B6B",
      glow: "#E53E3E",
      isBase: false,
    },
    {
      label: "Built Different",
      color: "#F5A623",
      glow: "#D4891A",
      isBase: false,
    },
    {
      label: "No Bullshit",
      color: "#FF8FE8",
      glow: "#E060C8",
      isBase: false,
    },
    {
      label: "50+ Projects",
      color: "#5B8DEF",
      glow: "#3A6BE0",
      isBase: false,
    },
    {
      label: "Global Clients",
      color: "#FFD166",
      glow: "#F0B429",
      isBase: false,
    },
    {
      label: "100% Remote",
      color: "#43E8D8",
      glow: "#1EC8B8",
      isBase: false,
    },
  ],
  heroPageImage: aboutPage[0].img,
  statsGrid :false
};

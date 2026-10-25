import { allPageHeroImg } from "./imageProvider/pageHeroImage";

const {
  workHeroImg,
  servicesHeroImg,
  insightHeroImg,
  aboutHeroImg,
  workPage,
  servicePage,
  blogPage,
  aboutPage,
} = allPageHeroImg;

// ==========================================
// 1. SERVICES PAGE HERO DATA
// ==========================================
export const servicesPageHeroData = {
  eyebrow: "Our Services",
  titleLines: [
    { text: "Turning Your Vision Into", accent: false },
    { text: "Digital Success", accent: true },
  ],
  sectionLabel: "Our Services",
  sectionText: "Turning Your Vision Into Digital Success",
  sectionColorText: "Digital Success",
  heroDescription:
    "We help ambitious businesses turn ideas into powerful digital products built to solve real problems, deliver exceptional experiences, and grow with your business.",
  primaryCta: {
    label: "Explore Our Services",
    href: "/services#services-list",
  },
  secondaryCta: {
    label: "View Our Work",
    href: "/work",
  },
  heroImage: servicesHeroImg,
  heroImageAlt: "DevOnionX Digital Services and Solutions Showcase",
  heroPageImage: servicePage[0]?.img || servicesHeroImg,
  breadcrumbOverrides: { services: "Services" },
};

// ==========================================
// 2. WORK / PORTFOLIO PAGE HERO DATA
// ==========================================
export const workPageHeroData = {
  eyebrow: "Our Portfolio",
  titleLines: [
    { text: "Work That Speaks For", accent: false },
    { text: "Real World Impact", accent: true },
  ],
  sectionLabel: "Portfolio",
  sectionText: "Work That Speaks for Itself",
  sectionColorText: "Speaks for Itself",
  heroDescription:
    "From bold startups to scaling businesses — we design and build digital products powered by modern tech and AI-driven thinking, solutions that perform under pressure, impress at first glance, and evolve as your business grows.",
  primaryCta: {
    label: "Explore Projects",
    href: "/work#work-showcase",
  },
  secondaryCta: {
    label: "Start a Project",
    href: "/contact",
  },
  heroImage: workHeroImg,
  heroImageAlt: "DevOnionX Featured Work and Case Studies Showcase",
  heroPageImage: workPage[0]?.img || workHeroImg,
  breadcrumbOverrides: { work: "Work" },
};

// ==========================================
// 3. INSIGHTS / BLOG PAGE HERO DATA
// ==========================================
export const blogPageHeroData = {
  eyebrow: "Insights & Updates",
  titleLines: [
    { text: "Insights That Drive.", accent: false },
    { text: "Stories That Stick", accent: true },
  ],
  sectionLabel: "Our Blog",
  sectionText: "Insights That Drive. Stories That Stick.",
  sectionColorText: "Stories That Stick.",
  heroDescription:
    "We don't just build for clients — we think out loud. Explore deep dives into AI, web engineering, design systems, and the real stories behind the products we ship. No fluff. Just sharp thinking from a team that lives and breathes digital.",
  primaryCta: {
    label: "Read Latest Articles",
    href: "/blog#latest-insights",
  },
  secondaryCta: {
    label: "Contact Our Team",
    href: "/contact",
  },
  heroImage: insightHeroImg,
  heroImageAlt: "DevOnionX Technical Articles and Engineering Insights",
  heroPageImage: blogPage[0]?.img || insightHeroImg,
  breadcrumbOverrides: { blog: "Insights" },
};

// ==========================================
// 4. ABOUT US PAGE HERO DATA
// ==========================================
export const aboutPageHeroData = {
  eyebrow: "About DevOnionX",
  titleLines: [
    { text: "Built Different.", accent: false },
    { text: "Wired for Results", accent: true },
  ],
  sectionLabel: "About Us",
  sectionText: "Built Different. Wired for Results.",
  sectionColorText: "Wired for Results.",
  heroDescription:
    "DevOnionX isn't your typical agency. We're a team of obsessive builders, strategic thinkers, and relentless problem-solvers — united by one goal: making your business win online. Every pixel we push, every line we write, every system we architect is built with purpose. Not just to impress — but to perform.",
  primaryCta: {
    label: "Our Story & Vision",
    href: "/about#about-story",
  },
  secondaryCta: {
    label: "Get In Touch",
    href: "/contact",
  },
  heroImage: aboutHeroImg,
  heroImageAlt: "DevOnionX Agency Culture and Team Showcase",
  heroPageImage: aboutPage[0]?.img || aboutHeroImg,
  breadcrumbOverrides: { about: "About" },
  statsGrid: false,
};


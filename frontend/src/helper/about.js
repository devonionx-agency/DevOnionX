/* ────────────────────────────────────────────────────────────
   Pillar Icons — used in AboutStory
──────────────────────────────────────────────────────────── */

const LightningIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const LayersIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const TrendingIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   Mission & Vision Icons — used in AboutMission
──────────────────────────────────────────────────────────── */

export const MissionIcon = () => (
  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const VisionIcon = () => (
  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   Value Icons — used in AboutMission values grid
──────────────────────────────────────────────────────────── */

export const FlameIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

export const ShieldIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const ZapIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const TargetIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

/* ────────────────────────────────────────────────────────────
   Story Section Data
──────────────────────────────────────────────────────────── */

export const PILLARS = [
  {
    number: "01",
    title: "Born From Frustration",
    body: "We started DevonionX because we were tired of agencies that over-promised and under-delivered. Bloated timelines, vague communication, mediocre output. We knew there was a better way.",
    icon: <LightningIcon />,
  },
  {
    number: "02",
    title: "Built on Craft",
    body: "Every line of code, every pixel, every interaction is intentional. We don't ship half-baked products. We obsess over the details so your users never have to think about them.",
    icon: <LayersIcon />,
  },
  {
    number: "03",
    title: "Driven by Results",
    body: "We don't measure success by deliverables — we measure it by impact on your business. More users, more revenue, more growth. That's the only metric that matters.",
    icon: <TrendingIcon />,
  },
];

export const STATS = [
  { label: "Client retention", value: "94%",  bar: 94  },
  { label: "On-time delivery", value: "100%", bar: 100 },
  { label: "Projects shipped", value: "15+",  bar: 75  },
];

/* ────────────────────────────────────────────────────────────
   Mission Section Data
──────────────────────────────────────────────────────────── */

export const VALUES = [
  {
    icon: <FlameIcon />,
    title: "Obsession Over Perfection",
    body: "We don't stop at good enough. Every detail — from micro-interactions to system architecture — gets our full attention.",
  },
  {
    icon: <ShieldIcon />,
    title: "Radical Transparency",
    body: "No hidden costs, no vague timelines. You know exactly what we're building, why, and when it ships.",
  },
  {
    icon: <ZapIcon />,
    title: "Speed Without Shortcuts",
    body: "We move fast — but never at the cost of quality. Clean code, solid architecture, zero technical debt.",
  },
  {
    icon: <TargetIcon />,
    title: "Impact First",
    body: "Every decision is measured against one question: does this move the needle for your business?",
  },
];

/* ────────────────────────────────────────────────────────────
   Team Section Data
──────────────────────────────────────────────────────────── */

export const TEAM = [
  {
    name: "Al Mahmud",
    role: "Frontend Engineer",
    bio: "Architects clean, scalable systems from database to UI. Obsessed with performance and shipping things that last.",
    image: "/images/about/mahmud.jpg",
    slug: "/team/al-mahmud",
    yearsOfExperience: 3,
    expertise: ["React", "Next.js", "Tailwind"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
  {
    name: "Jihad M.",
    role: "Frontend Engineer",
    bio: "Turns complex problems into intuitive interfaces. Every screen he designs feels inevitable.",
    image: "/images/about/jihad.png",
    slug: "/team/jihad-mahmud",
    yearsOfExperience: 2,
    expertise: ["React", "GSAP", "Figma"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
  {
    name: "Hamim A.",
    role: "Backend Developer",
    bio: "Builds APIs and infrastructure that scale silently. Rock-solid systems, zero drama.",
    image: "/images/about/hamim.jpg",
    slug: "/team/hamim-ahmed",
    yearsOfExperience: 3,
    expertise: ["Node.js", "PostgreSQL", "DevOps"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
  {
    name: "Nadil H.",
    role: "Full-Stack Developer",
    bio: "Brings designs to life with pixel-perfect precision. If it moves on screen, he made it feel right.",
    image: "/images/about/nadil.jpg",
    slug: "/team/nadil-hossain",
    yearsOfExperience: 2,
    expertise: ["React", "Node.js", "MongoDB"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
  {
    name: "Jhulon K.",
    role: "Frontend Engineer",
    bio: "Builds smooth, performant UIs that feel genuinely native. Fast, precise, always on time.",
    image: "/images/about/jhulon.jpg",
    slug: "/team/jhulon-kumar-roy",
    yearsOfExperience: 2,
    expertise: ["React", "TypeScript", "Tailwind"],
    socials: [
      { id: 1, platform: "LinkedIn", url: "https://linkedin.com/in/username" },
      { id: 2, platform: "GitHub",   url: "https://github.com/username" },
    ],
  },
];
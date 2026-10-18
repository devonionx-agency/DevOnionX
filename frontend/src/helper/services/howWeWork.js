// helpers/howWeWorkData.js
// HowWeWork section-er shob static data ekhane. Component-e kono JSX/data hardcode nai.

export const COLORS = {
  bg: "#FDF6F0",
  navy: "#0F1B2D",
  orange: "#FF5A1F",
  slate: "#6B7A99",
  peach: "#FDE9DC",
};

export const HEADER = {
  eyebrow: "How we work",
  title: "A Clear Path from Idea to Launch",
  subtitle:
    "An organized, transparent process keeps your project moving in the right direction.",
};

// Shob shape single SVG path (d) -- tai stroke-draw animation shob shape-e kaj kore.
export const SHAPES = {
  square: {
    width: 260,
    viewBox: "0 0 260 240",
    d: "M26 2 H234 A24 24 0 0 1 258 26 V214 A24 24 0 0 1 234 238 H26 A24 24 0 0 1 2 214 V26 A24 24 0 0 1 26 2 Z",
  },
  hexagon: {
    width: 280,
    viewBox: "0 0 280 240",
    d: "M62 3 H218 L277 120 L218 237 H62 L3 120 Z",
  },
  circle: {
    width: 250,
    viewBox: "0 0 250 240",
    d: "M3 120 A122 118 0 1 0 247 120 A122 118 0 1 0 3 120 Z",
  },
  notch: {
    width: 300,
    viewBox: "0 0 300 240",
    d: "M26 3 H228 Q252 3 252 27 V68 L296 118 L252 168 V213 Q252 237 228 237 H26 Q3 237 3 213 V27 Q3 3 26 3 Z",
  },
};

// icon = component-er ICONS map-er key
// motion = hover-e icon-er micro movement (GSAP vars)
// centerShift = notch shape-er visual center square part-e thakar jonno
export const STEPS = [
  {
    id: "discover",
    no: "01",
    title: "Discover",
    desc: "Understand business goals, audience, requirements, and project scope.",
    shape: "square",
    icon: "search",
    motion: { rotate: -10, scale: 1.06 },
  },
  {
    id: "plan",
    no: "02",
    title: "Plan",
    desc: "Define the solution, milestones, priorities, and project roadmap.",
    shape: "hexagon",
    icon: "plan",
    motion: { y: -3, scale: 1.04 },
  },
  {
    id: "build",
    no: "03",
    title: "Build",
    desc: "Develop the solution, integrate required features, and test across relevant devices and browsers.",
    shape: "circle",
    icon: "build",
    motion: { scale: 1.1 },
  },
  {
    id: "launch",
    no: "04",
    title: "Launch",
    desc: "Deploy the finished project, provide handover, and arrange any agreed ongoing support.",
    shape: "notch",
    icon: "launch",
    centerShift: 22,
    motion: { x: 4, y: -4, scale: 1.04 },
  },
];


import {
  Lightbulb,
  Layers3,
  TrendingUp,
  Flame,
  ShieldCheck,
  Zap,
  Target,
  CheckCircle2,
  Eye,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Who We Are / Story Section
   Used in AboutStory.jsx
───────────────────────────────────────────── */

export const PILLARS = [
  {
    number: "01",
    title: "Think Beyond Code",
    body: "We start by understanding your business, your users, and the problem you want to solve. Every solution begins with a clear purpose.",
    icon: Lightbulb,
    tag: "Strategy first",
  },
  {
    number: "02",
    title: "Build With Purpose",
    body: "We combine thoughtful design, modern technologies, and clean development practices to create digital experiences that work beautifully.",
    icon: Layers3,
    tag: "Quality driven",
  },
  {
    number: "03",
    title: "Create Room to Grow",
    body: "We build with performance, flexibility, and maintainability in mind, helping your digital product evolve alongside your business.",
    icon: TrendingUp,
    tag: "Growth focused",
  },
];

export const WHO_WE_ARE_STEPS = [
  {
    number: "01",
    label: "Understand",
    description: "Start with your goals and users.",
  },
  {
    number: "02",
    label: "Build",
    description: "Turn ideas into reliable solutions.",
  },
  {
    number: "03",
    label: "Grow",
    description: "Create room for what's next.",
  },
];

/*
 * Kept for compatibility with existing sections.
 * Replace these with verified agency metrics if you
 * display them publicly.
 */
export const STATS = [
  {
    label: "Client retention",
    value: "94%",
    bar: 94,
  },
  {
    label: "On-time delivery",
    value: "100%",
    bar: 100,
  },
  {
    label: "Projects shipped",
    value: "15+",
    bar: 75,
  },
];

/* ─────────────────────────────────────────────
   Mission & Vision Icons
   Used in AboutMission.jsx
───────────────────────────────────────────── */

export const MissionIcon = CheckCircle2;
export const VisionIcon = Eye;

/* ─────────────────────────────────────────────
   Value Icons
   Used in AboutMission.jsx
───────────────────────────────────────────── */

export const FlameIcon = Flame;
export const ShieldIcon = ShieldCheck;
export const ZapIcon = Zap;
export const TargetIcon = Target;

/* ─────────────────────────────────────────────
   Mission Section Data
───────────────────────────────────────────── */

export const VALUES = [
  {
    icon: FlameIcon,
    title: "Quality in Every Detail",
    body: "We care about the details that make a real difference, from thoughtful interfaces to maintainable code and reliable functionality.",
  },
  {
    icon: ShieldIcon,
    title: "Honest Collaboration",
    body: "We believe in clear communication, realistic expectations, and keeping you informed throughout the development process.",
  },
  {
    icon: ZapIcon,
    title: "Progress With Purpose",
    body: "We work efficiently without losing sight of quality, usability, or the long-term health of your product.",
  },
  {
    icon: TargetIcon,
    title: "Your Goals Come First",
    body: "We align technical decisions with your users' needs and business objectives to create meaningful digital solutions.",
  },
];

/* ─────────────────────────────────────────────
   Team Section Data
   Existing image paths and slugs preserved
───────────────────────────────────────────── */

export const TEAM = [
  {
    name: "Al Mahmud",
    role: "Frontend Engineer",
    bio: "Builds responsive, maintainable interfaces with a focus on usability, performance, and clean frontend architecture.",
    image: "/images/about/mahmud.jpg",
    slug: "/team/al-mahmud",
    yearsOfExperience: 3,
    expertise: ["React", "Next.js", "Tailwind CSS"],
    socials: [
      {
        id: 1,
        platform: "LinkedIn",
        url: "https://linkedin.com/in/username",
      },
      {
        id: 2,
        platform: "GitHub",
        url: "https://github.com/username",
      },
    ],
  },
  {
    name: "Jihad M.",
    role: "Frontend Engineer",
    bio: "Creates interactive, user-friendly web experiences with attention to visual detail, animation, and responsive design.",
    image: "/images/about/jihad.png",
    slug: "/team/jihad-mahmud",
    yearsOfExperience: 2,
    expertise: ["React", "GSAP", "Figma"],
    socials: [
      {
        id: 1,
        platform: "LinkedIn",
        url: "https://linkedin.com/in/username",
      },
      {
        id: 2,
        platform: "GitHub",
        url: "https://github.com/username",
      },
    ],
  },
  {
    name: "Hamim A.",
    role: "Backend Developer",
    bio: "Develops dependable APIs and backend services with an emphasis on data handling, system reliability, and maintainability.",
    image: "/images/about/hamim.jpg",
    slug: "/team/hamim-ahmed",
    yearsOfExperience: 3,
    expertise: ["Node.js", "PostgreSQL", "DevOps"],
    socials: [
      {
        id: 1,
        platform: "LinkedIn",
        url: "https://linkedin.com/in/username",
      },
      {
        id: 2,
        platform: "GitHub",
        url: "https://github.com/username",
      },
    ],
  },
  {
    name: "Nadil H.",
    role: "Full-Stack Developer",
    bio: "Connects frontend experiences with backend functionality to build cohesive, practical, and scalable web applications.",
    image: "/images/about/nadil.jpg",
    slug: "/team/nadil-hossain",
    yearsOfExperience: 2,
    expertise: ["React", "Node.js", "MongoDB"],
    socials: [
      {
        id: 1,
        platform: "LinkedIn",
        url: "https://linkedin.com/in/username",
      },
      {
        id: 2,
        platform: "GitHub",
        url: "https://github.com/username",
      },
    ],
  },
  {
    name: "Jhulon K.",
    role: "Frontend Engineer",
    bio: "Focuses on responsive, polished interfaces that deliver smooth interactions and consistent experiences across devices.",
    image: "/images/about/jhulon.jpg",
    slug: "/team/jhulon-kumar-roy",
    yearsOfExperience: 2,
    expertise: ["React", "TypeScript", "Tailwind CSS"],
    socials: [
      {
        id: 1,
        platform: "LinkedIn",
        url: "https://linkedin.com/in/username",
      },
      {
        id: 2,
        platform: "GitHub",
        url: "https://github.com/username",
      },
    ],
  },
];




import { Compass, Rocket } from "lucide-react";

export const MISSION_VISION = [
  {
    id: "mission",
    number: "01",
    eyebrow: "OUR MISSION",
    title: "Make every idea count.",
    description:
      "We help businesses turn uncertainty into clear digital direction. From the first sketch to the final line of code, we create useful products that solve real problems and make everyday work better.",
    principles: [
      "Strategy before shortcuts",
      "People before pixels",
      "Quality in every detail",
    ],
    closing: "Less complexity. More possibility.",
    icon: Compass,
    theme: "mission",
  },
  {
    id: "vision",
    number: "02",
    eyebrow: "OUR VISION",
    title: "Create what's next.",
    description:
      "We want to build a future where ambitious ideas have room to grow. By combining evolving technology with human-centred thinking, we help businesses stay relevant, adaptable, and ready for new opportunities.",
    principles: [
      "Explore new possibilities",
      "Build for lasting growth",
      "Move forward together",
    ],
    closing: "Tomorrow starts with what we build today.",
    icon: Rocket,
    theme: "vision",
  },
];



// Values



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
  Compass,
  Rocket,
  Award,
  Handshake,
  Users,
  Sparkles,
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
───────────────────────────────────────────── */

export const MissionIcon = CheckCircle2;
export const VisionIcon = Eye;

/* ─────────────────────────────────────────────
   Existing Value Icons
───────────────────────────────────────────── */

export const FlameIcon = Flame;
export const ShieldIcon = ShieldCheck;
export const ZapIcon = Zap;
export const TargetIcon = Target;

/* ─────────────────────────────────────────────
   Mission Section Data
   Existing exports preserved
───────────────────────────────────────────── */

export const VALUES = [
  {
    number: "01",
    title: "Innovation",
    description:
      "We embrace emerging technologies and creative thinking to build solutions that move businesses forward.",
    icon: Lightbulb,
    tag: "Think beyond",
    featured: true,
  },
  {
    number: "02",
    title: "Excellence",
    description:
      "Every line of code, design decision, and interaction reflects our commitment to quality.",
    icon: Award,
    tag: "Raise the standard",
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "Honest communication, transparency, and accountability form the foundation of every partnership.",
    icon: Handshake,
    tag: "Earn trust",
  },
  {
    number: "04",
    title: "Collaboration",
    description:
      "We work alongside our clients, share knowledge, and solve challenges together as one team.",
    icon: Users,
    tag: "Better together",
  },
  {
    number: "05",
    title: "Client Success",
    description:
      "Your growth is our measure of success. We build with real outcomes and long-term value in mind.",
    icon: TrendingUp,
    tag: "Your growth matters",
  },
  {
    number: "06",
    title: "Continuous Growth",
    description:
      "We keep learning, improving, and adapting to create solutions ready for what's next.",
    icon: Sparkles,
    tag: "Always evolving",
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

/* ─────────────────────────────────────────────
   Mission & Vision Section Data
   Used in AboutMissionVision.jsx
───────────────────────────────────────────── */

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

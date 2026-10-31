
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
  Code2,
  Workflow,
  HeartHandshake,
} from "lucide-react";

import {
  FiUser,
  FiUsers,
  FiGitBranch,
  FiClock,
} from "react-icons/fi";

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

/* ─────────────────────────────────────────────
   Statistics
───────────────────────────────────────────── */

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
   Values Section
   Used in AboutValues.jsx
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


// ============================================
// Meet Our Team: TEAM FEATURES
// ============================================

export const TEAM_FEATURES = [
  {
    id: 1,
    title: "Professional Developers",
    description:
      "We have professional software developers with expertise in 100+ technologies.",
    icon: FiUser,
    color: "#F9D5EA",
    iconColor: "#B94D8B",
  },
  {
    id: 2,
    title: "Dedicated Account Specialists",
    description:
      "Tailored solutions for every key account.",
    icon: FiUsers,
    color: "#D5EAFE",
    iconColor: "#438BC7",
  },
  {
    id: 3,
    title: "Flexible Strategy",
    description:
      "Innovative and flexible strategy suitable for any changing requirements.",
    icon: FiGitBranch,
    color: "#D8FBE9",
    iconColor: "#39A879",
  },
  {
    id: 4,
    title: "On-time Delivery",
    description:
      "Delivering ahead of schedule, every time.",
    icon: FiClock,
    color: "#E8DCFF",
    iconColor: "#8965CA",
  },
];

// ============================================
// Meet Our Team: TEAM MEMBERS
// ============================================

export const TEAM = [
  {
    number: "01",
    name: "Al Mahamud",
    role: "CEO & Co-Founder",
    image: "/images/about/mahmud01.png",
    cardColor: "#D3E8FF",
  },
  {
    number: "02",
    name: "Jhulon Kumar Ray",
    role: "CTO & Co-Founder",
    image: "/images/about/jhulon01.png",
    cardColor: "#E4D9FF",
  },
  {
    number: "03",
    name: "Hamim Siddik",
    role: "HR & Co-Founder",
    image: "/images/about/hamim01.png",
    cardColor: "#D7F6E7",
  },
  {
    number: "04",
    name: "Nadil Hossain",
    role: "COO & Co-Founder",
    image: "/images/about/nadil01.png",
    cardColor: "#FFE8D3",
  },
  {
    number: "05",
    name: "Jihad Mia",
    role: "Co-Founder",
    image: "/images/about/jihad01.png",
    cardColor: "#F9D9EC",
  },
];

// ----------------------------------------
// Meet Our Team end
// ----------------------------------------


/* ==========================================
   Mission & Vision Section
   Used in AboutMissionVision.jsx
   ==========================================*/

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

/* ─────────────────────────────────────────────
   Why Choose DevOnionX Section
   Used in AboutWhyChooseUs.jsx
───────────────────────────────────────────── */

export const ABOUT_WHY_STATS = [
  {
    value: "15+",
    label: "Projects Completed",
    detail: "Ideas turned into real products",
  },
  {
    value: "05",
    label: "Creative Developers",
    detail: "One team, shared vision",
  },
  {
    value: "100%",
    label: "Commitment",
    detail: "Quality in every detail",
  },
];

export const ABOUT_WHY_FEATURES = [
  {
    number: "01",
    title: "Thoughtful Engineering",
    description:
      "We build responsive, maintainable digital experiences with attention to performance, usability, and clean code.",
    tag: "Built with purpose",
    icon: Code2,
  },
  {
    number: "02",
    title: "A Clear Process",
    description:
      "From the first discussion to the final delivery, we keep communication clear and every step focused on your goals.",
    tag: "No guesswork",
    icon: Workflow,
  },
  {
    number: "03",
    title: "A Team That Cares",
    description:
      "We value long-term relationships, thoughtful collaboration, and helping your product move forward after launch.",
    tag: "Here for the journey",
    icon: HeartHandshake,
  },
];

export const ABOUT_WHY_HIGHLIGHT = {
  eyebrow: "THE DEVONIONX DIFFERENCE",
  title: "Small Team",
  accent: "Meaningful Impact.",
  description:
    "We bring design thinking, modern development, and genuine collaboration together to turn ambitious ideas into useful digital products.",
  closing: "Good work starts with understanding what matters to you.",
};



import {
  FiDollarSign,
  FiHeart,
  FiShoppingBag,
  FiBookOpen,
  FiSettings,
  FiTruck,
  FiBriefcase,
  FiZap,
  FiHome,
  FiGlobe,
} from "react-icons/fi";

// Industries Section Data
export const INDUSTRIES = [
  {
    title: "FinTech",
    description: "Smarter digital experiences for modern finance.",
    icon: FiDollarSign,
    wide: true,
  },
  {
    title: "Healthcare",
    description: "Connected solutions built around people.",
    icon: FiHeart,
    wide: false,
  },
  {
    title: "E-Commerce",
    description: "Digital storefronts designed to convert.",
    icon: FiShoppingBag,
    wide: false,
  },
  {
    title: "Education",
    description: "Better ways to learn, teach, and grow.",
    icon: FiBookOpen,
    wide: false,
  },
  {
    title: "Manufacturing",
    description: "Streamlined systems for complex operations.",
    icon: FiSettings,
    wide: false,
  },
  {
    title: "Logistics",
    description: "Simplifying movement, tracking, and delivery.",
    icon: FiTruck,
    wide: false,
  },
  {
    title: "Enterprise",
    description: "Scalable software for growing organizations.",
    icon: FiBriefcase,
    wide: false,
  },
  {
    title: "Startups",
    description: "From ambitious ideas to launch-ready products.",
    icon: FiZap,
    wide: true,
  },
  {
    title: "Real Estate",
    description: "Modern digital tools for property businesses.",
    icon: FiHome,
    wide: false,
  },
  {
    title: "Professional Services",
    description: "Digital experiences that build trust.",
    icon: FiGlobe,
    wide: false,
  },
];

export const INDUSTRIES_CONTENT = {
  label: "INDUSTRIES WE SERVE",
  title: "Different Industries. One Thoughtful Approach.",
  colorWord: "One Thoughtful Approach.",
  description:
    "We build digital solutions around the unique challenges, goals, and opportunities of every business.",
  closing:
    "Different challenges. Tailored solutions. A shared commitment to meaningful results.",
  footerLabel: "Built around your business",
};

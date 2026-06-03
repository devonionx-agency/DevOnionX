import { FiSearch, FiLayout, FiPenTool, FiCode, FiSend } from "react-icons/fi";
export const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We go deep into your business, goals, and constraints to understand what truly matters before a single line is written.",
    tags: ["Brief", "Audit", "Research"],
    icon: <FiSearch size={22} />,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Architecture decisions, tech stack, information design, and a sprint roadmap that keeps every stakeholder aligned.",
    tags: ["Architecture", "IA", "Roadmap"],
    icon: <FiLayout size={22} />,
  },
  {
    number: "03",
    title: "Design",
    description:
      "UI systems, motion language, and high-fidelity screens built for conversion — not just aesthetics.",
    tags: ["Design System", "Figma", "Motion"],
    icon: <FiPenTool size={22} />,
  },
  {
    number: "04",
    title: "Development",
    description:
      "Production-grade Next.js engineering — clean architecture, optimised performance, CI/CD, and full test coverage.",
    tags: ["Next.js", "API", "CI/CD"],
    icon: <FiCode size={22} />,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deploy, monitor, iterate. We hand off with full documentation and stay on as your growth partner.",
    tags: ["Deploy", "Analytics", "Support"],
    icon: <FiSend size={22} />,
  },
];

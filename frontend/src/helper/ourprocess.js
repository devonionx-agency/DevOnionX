import { FiSearch, FiLayout, FiPenTool, FiCode, FiSend } from "react-icons/fi";
export const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand the business, audience, goals, and technical requirements before making any decisions.",
    tags: ["Brief", "Audit", "Research"],
    icon: <FiSearch size={22} />,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Define the architecture, tech stack, and roadmap to ensure the project is scalable from day one.",
    tags: ["Architecture", "Tech Stack", "Roadmap"],
    icon: <FiLayout size={22} />,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Create intuitive user experiences and polished interfaces that balance usability and conversion.",
    tags: ["Design System", "Figma"],
    icon: <FiPenTool size={22} />,
  },
  {
    number: "04",
    title: "Development",
    description:
      "Build fast, scalable, and maintainable applications with clean code and production-ready architecture.",
    tags: ["Next.js", "API", "CI/CD"],
    icon: <FiCode size={22} />,
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deploy, monitor, and support the product after launch to ensure long-term reliability and growth.",
    tags: ["Deploy", "Monitoring", "Support"],
    icon: <FiSend size={22} />,
  },
];

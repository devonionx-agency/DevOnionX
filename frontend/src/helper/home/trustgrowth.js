import { FiLayers, FiMessageSquare, FiTarget, FiUsers } from "react-icons/fi";

// Trust & Growth section er sob data ekhane.
// "3+" ar "5" tumi je number dile oitai boshano hoyeche, bodlate hole shudhu ekhane bodlaio.
export const trustIntro = {
  eyebrow: "TRUST & GROWTH",
  title: "Built Around Your Business.",
  description:
    "Before we write any code, we learn how your business runs, who your users are, and what the product needs to do. Then we build around that.",
};

// badge: card er uporer daan dike choto label.
// Prothom duita te real number, baki duita te kono fake metric nai.
export const trustCards = [
  {
    id: "projects",
    icon: FiLayers,
    badge: "3+",
    title: "Projects delivered",
    description:
      "Websites and web applications built from real project requirements. Each one started with a clear scope, so everyone knew what was being built.",
  },
  {
    id: "team",
    icon: FiUsers,
    badge: "5 members",
    title: "One team, design to code",
    description:
      "Designers and developers work together from the start. Designers know what is practical to build, and developers see the thinking behind the design.",
  },
  {
    id: "conversion",
    icon: FiTarget,
    badge: "CRO",
    title: "Conversion-focused design",
    description:
      "We look at the path a visitor takes, from the first page to the final click, and keep it short and clear. Calls to action go where people expect them, and extra steps get cut.",
  },
  {
    id: "communication",
    icon: FiMessageSquare,
    badge: "How we work",
    title: "Clear communication",
    description:
      "You get regular progress updates, a clear idea of what comes next, and an early heads-up when something changes or goes wrong.",
  },
];

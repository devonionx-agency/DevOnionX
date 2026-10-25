import { FaAws, FaGithub, FaJira, FaSlack, FaWhatsapp } from "react-icons/fa";
import { BsFiletypeAi, BsMicrosoftTeams } from "react-icons/bs";
import {
  SiCloudflare,
  SiCypress,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGooglemeet,
  SiGreensock,
  SiJavascript,
  SiJest,
  SiLighthouse,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiSentry,
  SiTypescript,
  SiVercel,
  SiWebflow,
} from "react-icons/si";

// tools: icon, name (tooltip + screen reader), color (brand er nijosso color)
export const processSteps = [
  {
    id: "strategy",
    number: "01",
    title: "Strategy meeting",
    description:
      "We turn your vision into a clear strategy, analyze your competitors, and uncover what your users actually need. Every decision is guided by research and a clear understanding of your goals.",
    timeline: "Day 1-3",
    tools: [
      { name: "Google Meet", icon: SiGooglemeet, color: "#00832D" },
      { name: "Microsoft Teams", icon: BsMicrosoftTeams, color: "#6264A7" },
      { name: "WhatsApp", icon: FaWhatsapp, color: "#25D366" },
      { name: "Slack", icon: FaSlack, color: "#4A154B" },
    ],
    image: {
      src: "/images/process/step1.webp",
      alt: "Strategy session with project notes",
    },
  },
  {
    id: "design",
    number: "02",
    title: "UX/UI Design",
    description:
      "We create wireframes, intuitive UI designs, and interactive Figma prototypes so you can review the experience and approve the design before development begins.",
    timeline: "Week 1-2",
    tools: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Webflow", icon: SiWebflow, color: "#146EF5" },
      { name: "Adobe Illustrator", icon: BsFiletypeAi, color: "#FF9A00" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
      { name: "Framer", icon: SiFramer, color: "#0055FF" },
    ],
    image: { src: "/images/process/step2.webp", alt: "UX/UI design preview" },
  },
  {
    id: "development",
    number: "03",
    title: "Development",
    description:
      "We build tailored web solutions, SaaS platforms, ERP and CRM systems, and AI integrations that help businesses streamline operations and grow. Clear communication, regular updates, and reliable delivery from start to finish.",
    timeline: "Week 2-5",
    tools: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
    image: { src: "/images/process/step3.webp", alt: "Development workspace" },
  },
  {
    id: "testing",
    number: "04",
    title: "Testing & QA",
    description:
      "We test every part of your product to make sure it works as expected across devices, performs well, and delivers a smooth, reliable experience for your users.",
    timeline: "Week 5-6",
    tools: [
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
      { name: "Lighthouse", icon: SiLighthouse, color: "#F44B21" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
    image: { src: "/images/process/step4.webp", alt: "Testing and QA results" },
  },
  {
    id: "launch",
    number: "05",
    title: "Launch",
    description:
      "We launch your product, keep an eye on performance, and iterate fast so it holds up under real traffic and keeps growing after launch.",
    timeline: "Week 6-7",
    tools: [
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
    ],
    image: { src: "/images/process/step5.webp", alt: "Launch overview" },
  },
  {
    id: "support",
    number: "06",
    title: "Support & Improvement",
    description:
      "We keep your product running smoothly, fix issues when they arise, and make improvements as your business grows and your needs change.",
    timeline: "Ongoing",
    tools: [
      { name: "Sentry", icon: SiSentry, color: "#362D59" },
      { name: "Slack", icon: FaSlack, color: "#4A154B" },
      { name: "Jira", icon: FaJira, color: "#0052CC" },
    ],
    image: {
      src: "/images/process/step6.webp",
      alt: "Support and improvement dashboard",
    },
  },
];

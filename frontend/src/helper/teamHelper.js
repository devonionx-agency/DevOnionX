import { blogImages } from "./imageProvider/blogImage";

const {blogOne} =  blogImages

export const teamMembers = [
  {
    id: "tm-01",
    slug: "/team/jhulon-kumar",
    name: "Jhulon Kumar",
    role: "Full Stack Engineer",
    yearsOfExperience: 6,
    bio: "Builds fast, scalable web apps with a focus on clean architecture and DX.",
     image: blogOne,  
    expertise: ["React", "Node.js", "PostgreSQL", "Docker"],
    socials: [
      { id: "fb-01", platform: "Facebook", url: "https://facebook.com" },
      { id: "tw-01", platform: "Twitter", url: "https://twitter.com" },
      { id: "li-01", platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: "tm-02",
    slug: "/team/nadia-islam",
    name: "Nadia Islam",
    role: "UI / UX Designer",
    yearsOfExperience: 4,
    bio: "Crafts intuitive interfaces grounded in research and design systems thinking.",
     image: blogOne, 
    expertise: ["Figma", "Design Systems", "Framer", "User Research"],
    socials: [
      { id: "li-02", platform: "LinkedIn", url: "https://linkedin.com" },
      { id: "be-02", platform: "Behance", url: "https://behance.net" },
      { id: "tw-02", platform: "Twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "tm-03",
    slug: "/team/rafiq-hassan",
    name: "Rafiq Hassan",
    role: "DevOps Engineer",
    yearsOfExperience: 5,
    bio: "Keeps systems running smoothly with CI/CD pipelines and cloud infrastructure.",
     image: blogOne, 
    expertise: ["AWS", "Docker", "Kubernetes", "Terraform"],
    socials: [
      { id: "gh-03", platform: "GitHub", url: "https://github.com" },
      { id: "li-03", platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: "tm-04",
    slug: "/team/sumaiya-akter",
    name: "Sumaiya Akter",
    role: "Frontend Developer",
    yearsOfExperience: 3,
    bio: "Turns Figma designs into pixel-perfect, performant React components.",
     image: blogOne, 
    expertise: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    socials: [
      { id: "gh-04", platform: "GitHub", url: "https://github.com" },
      { id: "tw-04", platform: "Twitter", url: "https://twitter.com" },
      { id: "li-04", platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
];

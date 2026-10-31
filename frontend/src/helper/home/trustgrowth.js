// helper/home/trustgrowth.js
// Image path gula pore tumi nijer image diye replace korba.
// type: "image" | "stat"

export const trustCards = [
  // Column 1
  {
    id: "col-1",
    duration: 38, // seconds (choto hole druto)
    delay: 0,
    items: [
      {
        type: "image",
        src: "/images/trustGrowth/software-developer-working1.webp",
        alt: "Team member working on laptop",
        height: "h-[250px]",
      },
      {
        type: "stat",
        value: "2+ Years",
        label: "Average Developer Experience",
        bg: "bg-[#c4b0ff]",
        height: "h-[172px]",
      },
      {
        type: "image",
        src: "/images/trustGrowth/developer-professional-portrait2.webp",
        alt: "Developer smiling at work",
        height: "h-[250px]",
      },
    ],
  },
  // Column 2
  {
    id: "col-2",
    duration: 46,
    delay: 0,
    items: [
      {
        type: "stat",
        value: "3+",
        label: "Clients",
        bg: "bg-[#fdf6a3]",
        height: "h-[130px]",
      },
      {
        type: "image",
        src: "/images/trustGrowth/software-project-management3.webp",
        alt: "Project manager in office",
        height: "h-[256px]",
      },
      {
        type: "stat",
        value: "2k+",
        label: "Users Powered",
        bg: "bg-[#f9c6e0]",
        height: "h-[172px]",
      },
      {
        type: "image",
        src: "/images/trustGrowth/developer-pair-programming4.webp",
        alt: "Team collaboration",
        height: "h-[200px]",
      },
    ],
  },
  // Column 3
  {
    id: "col-3",
    duration: 42,
    delay: 0,
    items: [
      {
        type: "image",
        src: "/images/trustGrowth/software-team-collaboration5.webp",
        alt: "Developers collaborating at a desk",
        height: "h-[256px]",
      },
      {
        type: "stat",
        value: "10+",
        label: "Projects Delivered",
        bg: "bg-[#f9c6d4]",
        height: "h-[172px]",
      },
      {
        type: "image",
        src: "/images/trustGrowth/software-engineering-workspace6.webp",
        alt: "Office team",
        height: "h-[250px]",
      },
    ],
  },
];

// Nicher trust badge (Clutch, Google, Trustpilot, Shield) logo gula
export const trustBadges = [
  { src: "/images/trustGrowth/client2.png", alt: "Clutch" },
  { src: "/images/trustGrowth/client2.png", alt: "Google" },
  { src: "/images/trustGrowth/client3.png", alt: "Trustpilot" },
];

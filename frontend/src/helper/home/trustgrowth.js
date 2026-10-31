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
        src: "/images/home/trust/img-1.jpg",
        alt: "Team member working on laptop",
        height: "h-[250px]",
      },
      {
        type: "stat",
        value: "8+ Years",
        label: "Average Developer Experience",
        bg: "bg-[#c4b0ff]",
        height: "h-[172px]",
      },
      {
        type: "image",
        src: "/images/home/trust/img-2.jpg",
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
        value: "110+",
        label: "Global Clients",
        bg: "bg-[#fdf6a3]",
        height: "h-[130px]",
      },
      {
        type: "image",
        src: "/images/home/trust/img-3.jpg",
        alt: "Project manager in office",
        height: "h-[256px]",
      },
      {
        type: "stat",
        value: "4M+",
        label: "Users Powered",
        bg: "bg-[#f9c6e0]",
        height: "h-[172px]",
      },
      {
        type: "image",
        src: "/images/home/trust/img-4.jpg",
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
        src: "/images/home/trust/img-5.jpg",
        alt: "Developers collaborating at a desk",
        height: "h-[256px]",
      },
      {
        type: "stat",
        value: "370+",
        label: "Projects Delivered",
        bg: "bg-[#f9c6d4]",
        height: "h-[172px]",
      },
      {
        type: "image",
        src: "/images/home/trust/img-6.jpg",
        alt: "Office team",
        height: "h-[250px]",
      },
    ],
  },
];

// Nicher trust badge (Clutch, Google, Trustpilot, Shield) logo gula
export const trustBadges = [
  { src: "/images/home/trust/badge-clutch.png", alt: "Clutch" },
  { src: "/images/home/trust/badge-google.png", alt: "Google" },
  { src: "/images/home/trust/badge-trustpilot.png", alt: "Trustpilot" },
];
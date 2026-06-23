import { IoMdTime } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BiSolidSlideshow } from "react-icons/bi";
import { IoIosPerson } from "react-icons/io";
import { ImBriefcase } from "react-icons/im";
import { FaRegClock } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

export const allIcon = {
  timer: <IoMdTime />,
  upperArrow: <GoArrowUpRight />,
  serviceHeroCommonTech: [
    { id: 1, icon: <SiNextdotjs />, class: "text-[#fff]" },
    { id: 2, icon: <SiTypescript />, class: "text-[#3178C6]" },
    { id: 3, icon: <FaReact />, class: "text-[#61DAFB]" },
  ],
  live: <BiSolidSlideshow />,
  workHeroIconsArr: [
    { id: 1, icon: <IoIosPerson /> },
    { id: 2, icon: <ImBriefcase /> },
    { id: 3, icon: <FaRegClock /> },
    { id: 4, icon: <FaCalendarAlt /> },
  ],
};

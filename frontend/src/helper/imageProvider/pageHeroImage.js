import PageHeroImg from "../../../public/images/hero/code.jpg";
import WorkHeroWebp from "../../../public/images/hero/work-hero-1.webp";
import ServicesHeroWebp from "../../../public/images/hero/service-hero.webp";
import InsightHeroWebp from "../../../public/images/hero/insight-hero.webp";
import AboutHeroWebp from "../../../public/images/hero/about-banner.webp";

export const allPageHeroImg = {
  bgImage: PageHeroImg,
  pageHero: PageHeroImg,

  // WebP main hero images
  workHeroImg: WorkHeroWebp,
  servicesHeroImg: ServicesHeroWebp,
  insightHeroImg: InsightHeroWebp,
  aboutHeroImg: AboutHeroWebp,

  // Array formats for backward compatibility
  workPage: [{ id: 1, img: WorkHeroWebp, alt: "Work Page Hero Banner" }],
  servicePage: [{ id: 1, img: ServicesHeroWebp, alt: "Services Page Hero Banner" }],
  blogPage: [{ id: 1, img: InsightHeroWebp, alt: "Blog & Insights Page Hero Banner" }],
  aboutPage: [{ id: 1, img: AboutHeroWebp, alt: "About Page Hero Banner" }],
};


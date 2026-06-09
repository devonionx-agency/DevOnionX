import PageHeroImg from "../../../public/images/hero/code.jpg";
import WorkHeroImg from "../../../public/images/hero/work-banner.jpg";
import ServicesHeroImg from "../../../public/images/hero/services-banner.jpg";
import BlogHeroImg from "../../../public/images/hero/blog-banner.jpg";
import AboutHeroImg from "../../../public/images/hero/about-banner.jpg";

export const allPageHeroImg = {
  pageHero: PageHeroImg,
  // for work
  workPage: [{ id: 1, img: WorkHeroImg, alt: "work Page Hero Banner" }],
  servicePage: [
    { id: 1, img: ServicesHeroImg, alt: "services Page Hero Banner" },
  ],
  blogPage: [{ id: 1, img: BlogHeroImg, alt: "Blog Page Hero Banner" }],
  aboutPage: [{ id: 1, img: AboutHeroImg, alt: "About Page Hero Banner" }],
};

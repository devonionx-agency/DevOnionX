import PageHero from "@/components/common/PageHero";
import { aboutPageHeroData } from "@/helper/pageHero";

const About = () => {
  return (
    <>
      <PageHero  {...aboutPageHeroData}/>
    </>
  );
};

export default About;

import WorkDetilsHero from "@/components/sections/work/workDetils/WorkDetilsHero";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const projectName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${projectName} | Our Work`,
    description: `Explore the ${projectName} project by DevOnionX and discover our approach to building modern websites and software solutions.`,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${projectName} | DevOnionX`,
      description: `Discover the ${projectName} project in the DevOnionX portfolio.`,
      url: `/work/${slug}`,
      siteName: "DevOnionX",
      type: "website",
    },
  };
}

const WorkDetails = () => {
  return (
    <>
      <WorkDetilsHero />
    </>
  );
};

export default WorkDetails;

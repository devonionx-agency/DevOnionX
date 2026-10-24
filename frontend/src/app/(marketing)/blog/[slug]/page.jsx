import BlogDetailsHero from '@/components/sections/blog/blog-details/BlogDetailsHero'

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title,
    description: `Read ${title} on the DevOnionX blog for insights on web development, software, and technology.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${title} | DevOnionX Blog`,
      description: `Explore ${title} on the DevOnionX blog.`,
      url: `/blog/${slug}`,
      siteName: "DevOnionX",
      type: "article",
    },
  };
}

const BlogDetails = () => {
  return (
    <>
      <BlogDetailsHero />
    </>
  );
};

export default BlogDetails;

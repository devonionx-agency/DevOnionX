
export default function sitemap() {
  const baseUrl = "https://www.devonionx.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

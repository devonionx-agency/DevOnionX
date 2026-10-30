"use client";

import Container from "@/components/ui/Container";
import PageHero from "@/components/common/PageHero";
import { allPageHeroImg } from "@/helper/imageProvider/pageHeroImage";
import BlogCoverHero from "./BlogCoverHero";
import TableOfContents from "./TableOfContents";
import ArticleContent from "./ArticleContent";
import TagsAndShare from "./TagsAndShare";
import AuthorBio from "./AuthorBio";
import ProjectConsultationCTA from "./ProjectConsultationCTA";
import RelatedArticles from "./RelatedArticles";

/**
 * BlogDetailsLayout — Master Technical Editorial Layout
 */
export default function BlogDetailsLayout({
  post,
  relatedPosts = [],
}) {
  if (!post) return null;

  return (
    <div className="blog-details-page w-full min-h-screen selection:bg-[#F77118]/20 selection:text-[#17365D]">
      {/* ── 1. Dynamic Master PageHero with Post Cover Image & Fallback ── */}
      <PageHero
        title={post.title}
        description={post.subtitle || post.excerpt}
        eyebrow={post.category || "Engineering Insight"}
        bgImage={post.coverImage}
        fallbackImage={allPageHeroImg.insightHeroImg}
        heroImageAlt={post.title}
        breadcrumbOverrides={{
          blog: "Insights",
          [post.slug || "article"]:
            post.title?.length > 28 ? post.title.slice(0, 28) + "..." : post.title,
        }}
        primaryCta={{
          label: "Read Article",
          href: "#article-editorial-grid",
        }}
        secondaryCta={{
          label: "All Insights",
          href: "/blog",
        }}
      />

      <Container size="xl" className="py-8 lg:py-14">
        {/* Article Meta Bar (Author, Date, Read Time, Share Controls) */}
        <BlogCoverHero
          compactMetaOnly
          title={post.title}
          readTime={post.readTime}
          date={post.date}
          author={post.author}
        />

        {/* 2. Two-Column Editorial Layout */}
        <div id="article-editorial-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          {/* Main Article Body Column (8 cols) */}
          <div className="lg:col-span-8 min-w-0">
            {/* Article Content */}
            <ArticleContent
              dropLead={post.dropLead}
              sections={post.sections}
            />

            {/* Tags & Distribution Card */}
            <TagsAndShare
              tags={post.tags}
              title={post.title}
              slug={post.slug}
            />

            {/* Author Information Card */}
            <AuthorBio author={post.author} />
          </div>

          {/* Sticky Table of Contents Sidebar (4 cols) */}
          <div className="lg:col-span-4 min-w-0 relative h-full">
            <TableOfContents
              toc={post.toc}
              specifications={post.specifications}
              title={post.title}
            />
          </div>
        </div>

        {/* 3. Related Articles */}
        <RelatedArticles articles={relatedPosts} />

        {/* 4. Final Consultation CTA */}
        <ProjectConsultationCTA />
      </Container>
    </div>
  );
}

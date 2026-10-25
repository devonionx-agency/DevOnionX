import { blogImages } from "./imageProvider/blogImage";
import { blogData, featuredBlogData } from "./blog";

const { allBlogImages } = blogImages;

/**
 * Author profiles for DevOnionX engineering & design team
 */
export const blogAuthors = {
  jhulon: {
    name: "Jhulon Kumar",
    role: "Lead Full Stack Architect at DevOnionX",
    avatar: "/images/team/jhulon.jpg",
    bio: "Jhulon oversees distributed systems architecture, Next.js platform engineering, and high-throughput real-time APIs at DevOnionX. Over the last 8+ years, he has architected cloud backends powering platforms serving millions of concurrent requests with sub-20ms latency thresholds.",
    social: {
      twitter: "https://twitter.com/devonionx",
      linkedin: "https://linkedin.com/company/devonionx",
      github: "https://github.com/devonionx",
    },
    articlesCount: 14,
  },
  nadia: {
    name: "Nadia Islam",
    role: "Senior Product & UI/UX Designer at DevOnionX",
    avatar: "/images/team/nadia.jpg",
    bio: "Nadia leads design system architecture and accessible interface engineering at DevOnionX. Focusing on dark-first design languages, fluid typography scales, and WCAG 2.1 AA compliant micro-interactions for enterprise SaaS platforms.",
    social: {
      twitter: "https://twitter.com/devonionx",
      linkedin: "https://linkedin.com/company/devonionx",
      github: "https://github.com/devonionx",
    },
    articlesCount: 6,
  },
  rafiq: {
    name: "Rafiq Hassan",
    role: "DevOps & Cloud Infrastructure Lead at DevOnionX",
    avatar: "/images/team/rafiq.jpg",
    bio: "Rafiq specializes in container orchestration, zero-downtime CI/CD deployment pipelines, and high-resilience VPS architectures. Optimizing edge CDNs, monitoring production fleets, and hardening infrastructure security.",
    social: {
      twitter: "https://twitter.com/devonionx",
      linkedin: "https://linkedin.com/company/devonionx",
      github: "https://github.com/devonionx",
    },
    articlesCount: 5,
  },
  sumaiya: {
    name: "Sumaiya Akter",
    role: "Senior Frontend Platform Engineer at DevOnionX",
    avatar: "/images/team/sumaiya.jpg",
    bio: "Sumaiya focuses on React 19 internals, Next.js Server Components, GSAP motion choreography, and Core Web Vitals optimization. She architects modular component libraries that balance extreme performance with visual craft.",
    social: {
      twitter: "https://twitter.com/devonionx",
      linkedin: "https://linkedin.com/company/devonionx",
      github: "https://github.com/devonionx",
    },
    articlesCount: 8,
  },
};

/**
 * In-depth detailed blog posts with rich content, code snippets, TOC, callouts, and takeaways.
 */
export const detailedBlogPosts = {
  "real-time-chat-system": {
    slug: "real-time-chat-system",
    specId: "ARCH-SPEC // 049",
    overlayBadge: "DISTRIBUTED CLUSTER // v4.2",
    figcaption: "Fig 1.1 — Distributed Edge Routing and Redis Cluster Topology across Global Regions.",
    title: "Building Real-Time Distributed Systems: Architecture, Scale & Battle-Tested Lessons",
    subtitle:
      "An architectural deep dive into maximizing Next.js and Node.js in mission-critical environments. We examine WebSocket clustering, Redis pub/sub streams, and deterministic data hydration to sustain enterprise load without performance degradation.",
    dropLead:
      "When enterprise systems breach tens of thousands of concurrent requests per second, traditional monolithic hydration pipelines and single-node socket servers crack under operational load. In distributed systems, modern architecture hinges on decoupling stateful TCP listeners from asynchronous broadcast streams.",
    category: "Case Study & Architecture",
    categoryClass: "bg-[#F77118]",
    readTime: "8 min read",
    date: "Feb 28, 2026",
    coverImage: allBlogImages[2]?.img || blogImages.blogOne,
    coverAlt: "Distributed Real-time System Architecture Diagram",
    author: blogAuthors.jhulon,
    tags: [
      "Next.js-16",
      "WebSockets",
      "Redis-PubSub",
      "Node.js",
      "Distributed-Systems",
      "Performance",
    ],
    specifications: {
      framework: "Next.js 16.2 / Node.js 22",
      runtime: "V8 Isolates / Redis Sharded",
      hydration: "Selective Streaming",
    },
    toc: [
      { id: "section-1", title: "1. The Evolution of Concurrency & Edge Routing", level: 2 },
      { id: "section-2", title: "2. Edge Caching and Data Hydration Strategies", level: 2 },
      { id: "section-3", title: "3. Enterprise State Management at Scale", level: 2 },
      { id: "section-conclusion", title: "Conclusion & Engineering Takeaways", level: 2 },
      { id: "consultation", title: "Project Consultation", level: 2 },
    ],
    sections: [
      {
        id: "section-1",
        title: "1. The Evolution of Concurrency & Edge Routing",
        content: `The transition from legacy client-rendered React architectures to distributed edge execution represents a fundamental departure in how we manage compute boundaries. Historically, real-time web applications suffered from an all-or-nothing execution model: the server must assemble full message histories, send them over the wire, and then the browser must download heavy client bundles before connection handshakes can even initiate.

Under modern edge-routed deployments, work is decoupled across localized CDN and containerized worker layers. Initial HTTP shell paints resolve within sub-50ms TTFB thresholds, while real-time WebSocket listeners establish persistent multiplexed tunnels over high-speed backbone fabrics.`,
        callout: {
          type: "note",
          title: "Architectural Note:",
          text: "Decoupling stateful TCP listeners from message ingestion using Redis Streams transformed our real-time throughput from a fragile bottleneck into an effortlessly elastic backbone with zero dropped packets.",
        },
      },
      {
        id: "section-2",
        title: "2. Edge Caching and Data Hydration Strategies",
        content: `Scaling high-throughput web applications mandates fine-grained control over persistent data layers. By layering Next.js cache tags atop distributed edge caches, developers can orchestrate surgical mutations without triggering cluster-wide cache wipes.

Consider a high-volume collaboration platform: channel rosters update asynchronously while message streams alter on second-by-second cadences. A global cache purge creates an immediate stampede on the primary database cluster.`,
        codeSnippet: {
          filename: "cluster-socket-engine.ts",
          language: "typescript",
          code: `import { createServer } from "http";
import { Server } from "socket.io";
import { createClient } from "redis";
import { createAdapter } from "@socket.io/redis-adapter";

export async function bootstrapRealtimeCluster(port: number) {
  const httpServer = createServer();
  const io = new Server(httpServer, {
    cors: { origin: process.env.CLIENT_URL, credentials: true },
    pingInterval: 10000,
    pingTimeout: 5000,
    transports: ["websocket", "polling"],
  });

  // Dual Redis clients for Pub and Sub streams
  const pubClient = createClient({ url: process.env.REDIS_PUB_URL });
  const subClient = pubClient.duplicate();
  await Promise.all([pubClient.connect(), subClient.connect()]);

  // Attach cluster adapter for seamless cross-node fanout
  io.adapter(createAdapter(pubClient, subClient));

  io.on("connection", (socket) => {
    const userId = socket.handshake.auth.userId;
    socket.join(\`user:\${userId}\`);

    socket.on("channel:dispatch", async (payload) => {
      // Broadcast to room across all distributed instances
      socket.to(payload.channelId).emit("channel:message", {
        ...payload,
        timestamp: Date.now(),
      });
    });
  });

  httpServer.listen(port, () => {
    console.log(\`[DevOnionX Cluster] Socket worker listening on :\${port}\`);
  });
}`,
        },
        comparisonTable: {
          title: "Cache Invalidation & Real-Time Performance Matrix",
          headers: ["Strategy", "Mean TTFB", "Cache Hit Ratio", "DB Pressure", "Staleness Tolerance"],
          rows: [
            {
              strategy: "ISR (Timed)",
              ttfb: "~24ms",
              hitRatio: "99.1%",
              dbPressure: "Predictable",
              staleness: "Time Window (60s)",
            },
            {
              strategy: "On-Demand Tag Purge",
              ttfb: "~28ms",
              hitRatio: "98.4%",
              dbPressure: "Zero Baseline",
              staleness: "Zero (Deterministic)",
            },
            {
              strategy: "Stale-While-Revalidate",
              ttfb: "~32ms",
              hitRatio: "94.7%",
              dbPressure: "Bursty",
              staleness: "1-Request Delay",
            },
          ],
        },
      },
      {
        id: "section-3",
        title: "3. Enterprise State Management at Scale",
        content: `When scaling Next.js across large engineering organizations, common anti-patterns emerge around shared client state. Developers frequently wrap high-level components with heavy context providers, triggering unneeded sub-tree re-renders on arbitrary prop updates.`,
        highlights: [
          {
            title: "Push State Down to Leaf Nodes:",
            desc: "Confine interactive inputs (forms, sliders, interactive charts) into tightly isolated client islands. Never allow root layout elements to adopt indiscriminate 'use client' directives.",
          },
          {
            title: "Leverage URL Params as the Single Source of Truth:",
            desc: "Search queries, pagination indices, and filter states belong in the search params, unlocking native edge caching and clean deterministic sharing.",
          },
          {
            title: "Zustand or Jotai for Ephemeral Interaction:",
            desc: "Bypass bloated React Context for global UI tokens to avoid indiscriminate tree reconciliations across massive DOM trees.",
          },
        ],
        quote: {
          text: "Performance is not an optimization phase at the end of the sprint; it is an architectural contract enforced from the first commit.",
          author: "Jhulon Kumar, Lead Full Stack Architect",
        },
      },
      {
        id: "section-conclusion",
        title: "Conclusion & Engineering Takeaways",
        content: `Architecting robust applications in Next.js is fundamentally about understanding the spatial boundary between cloud edge nodes and browser execution runtimes. By enforcing strict separation of concerns, surgical cache tag revalidations, and minimizing hydrated bundle weight, your engineering organization can reliably scale to millions of active sessions with predictable, sub-second responses.`,
      },
    ],
  },

  "accessibility-design": {
    slug: "accessibility-design",
    specId: "DESIGN-SPEC // 082",
    overlayBadge: "DESIGN SYSTEM // v2.4",
    figcaption: "Fig 1.1 — Accessible Contrast Thresholds and Semantic Token Hierarchy.",
    title: "Designing for Accessibility Without Sacrificing Aesthetics",
    subtitle:
      "How we approach inclusive design at DevOnionX — balancing sleek dark modes, fluid typography, and visual appeal with strict WCAG 2.1 AA compliance.",
    dropLead:
      "A pervasive misconception in modern web design is that strict accessibility (WCAG AA/AAA) forces interfaces to look sterile, dated, or visually muted. At DevOnionX, we view accessibility as an architectural constraint that inspires sharper contrast hierarchies and more intentional motion design.",
    category: "UI/UX Design",
    categoryClass: "bg-[#8B5CF6]",
    readTime: "5 min read",
    date: "Jan 10, 2026",
    coverImage: allBlogImages[5]?.img || blogImages.blogOne,
    coverAlt: "Accessible Dark Mode Design System",
    author: blogAuthors.nadia,
    tags: ["Figma", "WCAG", "Design-System", "CSS-Tokens", "Inclusive-Design"],
    specifications: {
      framework: "Figma Tokens / Tailwind 4",
      runtime: "WCAG 2.1 AA Compliant",
      hydration: "Fluid CSS Clamp",
    },
    toc: [
      { id: "section-1", title: "1. The Myth: Accessible Means Boring", level: 2 },
      { id: "section-2", title: "2. Color Contrast in Dark Themes", level: 2 },
      { id: "section-3", title: "3. Crafting Beautiful Focus States", level: 2 },
      { id: "section-conclusion", title: "Conclusion & Engineering Takeaways", level: 2 },
      { id: "consultation", title: "Project Consultation", level: 2 },
    ],
    sections: [
      {
        id: "section-1",
        title: "1. The Myth: Accessible Means Boring",
        content: `A pervasive misconception in modern web design is that strict accessibility (WCAG AA/AAA) forces interfaces to look sterile, dated, or visually muted.

At DevOnionX, we view accessibility not as a restrictive checklist of compromises, but as an engineering constraint that inspires cleaner typography, sharper contrast hierarchies, and more intentional motion design.`,
        callout: {
          type: "note",
          title: "Contrast Tip:",
          text: "Never rely on color alone to convey error states or interactive status. Always combine color with iconography, borders, or textual hints.",
        },
      },
      {
        id: "section-2",
        title: "2. Color Contrast in Dark Themes",
        content: `Dark mode presents unique challenges. High-contrast pure white text (#FFFFFF) on pitch black (#000000) causes halation and eye fatigue for astigmatic users.

Instead, we employ deep charcoal tones (#0B0F17) layered with subtle surface elevations, paired with soft off-white text (#F1F5F9) and high-visibility accent indicators (#F77118) that exceed the 4.5:1 ratio for normal text and 3:1 for graphical elements.`,
        codeSnippet: {
          filename: "accessibility-tokens.css",
          language: "css",
          code: `/* DevOnionX Accessible Focus Utility */
:focus-visible {
  outline: 2px solid var(--color-brand, #f77118);
  outline-offset: 3px;
  border-radius: 6px;
  box-shadow: 0 0 0 4px rgba(247, 113, 24, 0.25);
  transition: outline-offset 0.15s ease, box-shadow 0.15s ease;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
        },
      },
      {
        id: "section-3",
        title: "3. Crafting Beautiful Focus States",
        content: `Default browser focus outlines are often hastily removed by developers using 'outline: none' without replacement. That breaks navigation for keyboard-only and screen reader users.

We craft custom 2px focus rings with dynamic offset and glow that match our brand aesthetic while providing an undeniable navigation guide.`,
        highlights: [
          {
            title: "Minimum 4.5:1 Contrast Ratio:",
            desc: "Strictly enforced for all body copy and 3:1 for interactive icons against dark canvas surfaces.",
          },
          {
            title: "Keyboard Tab Navigation:",
            desc: "Logical tab index and skip-to-content links tested across all responsive viewports.",
          },
          {
            title: "Screen Reader Support:",
            desc: "Full ARIA landmarks and live regions verified with NVDA and VoiceOver.",
          },
        ],
        quote: {
          text: "True inclusivity in digital design is when beauty and accessibility become completely indistinguishable.",
          author: "Nadia Islam, Senior Product Designer",
        },
      },
      {
        id: "section-conclusion",
        title: "Conclusion & Engineering Takeaways",
        content: `Creating accessible products is an enduring commitment to user respect. By establishing structured semantic tokens early, teams can ship visually stunning dark interfaces that everyone can navigate with confidence.`,
      },
    ],
  },
};

/**
 * Fallback generator for any blog in blogData that doesn't have an explicit detailed post.
 * Guarantees every single article card on the site has a rich, functional, gorgeous details page!
 */
function createFallbackArticle(blogItem) {
  const authorName =
    typeof blogItem.author === "string"
      ? blogItem.author
      : blogItem.author?.name || "DevOnionX Engineer";

  const authorProfile =
    Object.values(blogAuthors).find((a) =>
      a.name.toLowerCase().includes(authorName.toLowerCase())
    ) || {
      name: authorName,
      role: "Software Architect at DevOnionX",
      avatar: "/images/team/default.jpg",
      bio: "Engineers and creative problem solvers delivering high-impact digital solutions, custom software, and scalable web architectures at DevOnionX.",
      social: {
        twitter: "https://twitter.com/devonionx",
        linkedin: "https://linkedin.com/company/devonionx",
        github: "https://github.com/devonionx",
      },
      articlesCount: 4,
    };

  const slug =
    blogItem.href?.replace("/blog/", "") ||
    blogItem.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

  const specId = `SYS-SPEC // 0${(blogItem.id || 1) < 10 ? "0" + (blogItem.id || 1) : blogItem.id || 1}`;
  const overlayBadge = `${(blogItem.category || "ARCHITECTURE").toUpperCase()} // v3.0`;

  return {
    slug,
    specId,
    overlayBadge,
    figcaption: `Fig 1.1 — Technical overview and system design architecture for ${blogItem.title}.`,
    title: blogItem.title,
    subtitle:
      blogItem.excerpt ||
      "An in-depth exploration of architecture, engineering decisions, and strategic implementation patterns by DevOnionX.",
    dropLead: `When scaling modern digital platforms, engineering teams face significant architectural choices. In ${blogItem.title}, we examine the technical constraints and tradeoffs that determine performance under production load.`,
    category: blogItem.category || "Engineering",
    categoryClass: blogItem.categoryClass || "bg-[#F77118]",
    readTime: blogItem.readTime || "5 min read",
    date: blogItem.date || "2026",
    coverImage: blogItem.image || allBlogImages[0]?.img || blogImages.blogOne,
    coverAlt: blogItem.title,
    author: authorProfile,
    tags:
      blogItem.tags && blogItem.tags.length > 0
        ? blogItem.tags.map((t) => t.replace(/\s+/g, "-"))
        : ["DevOnionX", "Engineering", "Web-Development", "Tech-Insights"],
    specifications: {
      framework: "Next.js / TypeScript",
      runtime: "Edge / Distributed",
      hydration: "Selective Stream",
    },
    toc: [
      { id: "section-1", title: "1. Architectural Overview & Context", level: 2 },
      { id: "section-2", title: "2. Technical Implementation & Data Flow", level: 2 },
      { id: "section-3", title: "3. Production Benchmarks & Scalability", level: 2 },
      { id: "section-conclusion", title: "Conclusion & Engineering Takeaways", level: 2 },
      { id: "consultation", title: "Project Consultation", level: 2 },
    ],
    sections: [
      {
        id: "section-1",
        title: "1. Architectural Overview & Context",
        content: `${blogItem.excerpt}

At DevOnionX, our engineering philosophy revolves around solving practical technical challenges with high-performance, maintainable architectures. In this article, we break down the foundational patterns, trade-offs, and critical decisions that drove this work.`,
        callout: {
          type: "note",
          title: "Strategic Note:",
          text: `Focusing on ${blogItem.category} allows modern engineering teams to scale without sacrificing agility or code quality.`,
        },
      },
      {
        id: "section-2",
        title: "2. Technical Implementation & Data Flow",
        content: `When building software for scalable startups and enterprise clients, theoretical perfection must be balanced against real-world execution velocity.

Modern systems demand resilient state management, predictable data pipelines, and interfaces that feel instantaneous to the end user. We approached this problem by breaking down the complexity into modular, testable components.`,
        codeSnippet: {
          filename: "system-handler.config.ts",
          language: "typescript",
          code: `// DevOnionX Production Architecture Pattern
export const serviceConfig = {
  serviceName: "${slug}",
  category: "${blogItem.category}",
  concurrencyLimit: 5000,
  cacheTTL: 3600, // 1 hour edge cache
  retryStrategy: {
    maxAttempts: 3,
    backoffMs: 250,
  },
  metrics: {
    enabled: true,
    telemetrySampling: 0.1,
  },
};`,
        },
      },
      {
        id: "section-3",
        title: "3. Production Benchmarks & Scalability",
        content: `Rolling this solution out into active production workloads delivered immediate dividends. We observed significant improvements in stability, response latency, and team development velocity.`,
        highlights: [
          {
            title: "Optimized Runtime Efficiency:",
            desc: "Zero redundant data transfers across network hops, reducing client CPU load.",
          },
          {
            title: "Automated Resiliency:",
            desc: "Strict typing and automated testing coverage for mission-critical paths.",
          },
          {
            title: "Production Observability:",
            desc: "Structured logging and performance telemetry reporting real-time latencies.",
          },
        ],
        quote: {
          text: "True software craftsmanship is not about writing complex code; it is about making complex systems simple, maintainable, and reliable.",
          author: `${authorProfile.name}, DevOnionX`,
        },
      },
      {
        id: "section-conclusion",
        title: "Conclusion & Engineering Takeaways",
        content: `Whether you are modernizing a legacy system or architecting a greenfield product, applying these design principles ensures longevity, resilience, and sustainable growth.`,
      },
    ],
  };
}

/**
 * Fetch a single blog post by its slug.
 */
export function getBlogBySlug(slug) {
  if (!slug) return detailedBlogPosts["real-time-chat-system"];

  // 1. Direct match in rich detailed posts
  if (detailedBlogPosts[slug]) {
    return detailedBlogPosts[slug];
  }

  // 2. Check featuredBlogData
  const featuredSlug = featuredBlogData.href?.replace("/blog/", "");
  if (slug === featuredSlug || slug === "featured-1") {
    if (detailedBlogPosts[featuredSlug]) {
      return detailedBlogPosts[featuredSlug];
    }
    return createFallbackArticle(featuredBlogData);
  }

  // 3. Search blogData
  const matchedBlog = blogData.find((b) => {
    const itemSlug = b.href?.replace("/blog/", "");
    return itemSlug === slug || String(b.id) === slug;
  });

  if (matchedBlog) {
    return createFallbackArticle(matchedBlog);
  }

  // 4. Default fallback to real-time chat system
  return detailedBlogPosts["real-time-chat-system"];
}

/**
 * Fetch related blog posts, filtering out the current post slug.
 */
export function getRelatedBlogs(currentSlug, category = null, limit = 3) {
  const allArticles = [
    featuredBlogData,
    ...blogData,
  ];

  const filtered = allArticles.filter((article) => {
    const articleSlug = article.href?.replace("/blog/", "");
    return articleSlug !== currentSlug;
  });

  let related = [];
  if (category) {
    const sameCategory = filtered.filter(
      (a) => a.category?.toLowerCase() === category.toLowerCase()
    );
    related = [...sameCategory];
  }

  for (const article of filtered) {
    if (related.length >= limit) break;
    if (!related.some((r) => r.id === article.id)) {
      related.push(article);
    }
  }

  return related.slice(0, limit);
}

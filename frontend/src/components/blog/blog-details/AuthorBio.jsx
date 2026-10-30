"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

/**
 * AuthorBio — Author Information Card matching reference design system:
 * - 64x64 rounded-full avatar
 * - Author name & orange monospace role
 * - GitHub and LinkedIn monospace pill buttons
 * - Refined technical biography
 */
export default function AuthorBio({
  author,
  className = "",
}) {
  const authorName = typeof author === "string" ? author : author?.name || "DevOnionX Team";
  const authorRole = typeof author === "object" ? author?.role : "Principal Systems Architect at DevOnionX";
  const authorBio =
    typeof author === "object" && author?.bio
      ? author.bio
      : "Overseeing platform engineering, distributed system design, and high-throughput architectures at DevOnionX.";
  const authorInitial = authorName.charAt(0);
  const social = typeof author === "object" ? author?.social || {} : {};

  return (
    <section
      className={`blog-author-card p-6 sm:p-8 rounded-xl border relative my-10 ${className}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Avatar */}
        <div className="blog-author-avatar-bio w-16 h-16 rounded-full overflow-hidden border flex items-center justify-center font-bold text-xl shrink-0">
          {authorInitial}
        </div>

        {/* Content */}
        <div className="flex-grow space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="blog-author-name-bio text-xl sm:text-2xl font-semibold tracking-tight">
                {authorName}
              </h3>
              <p className="blog-author-role-bio text-xs sm:text-sm font-mono mt-0.5">
                {authorRole}
              </p>
            </div>

            {/* Social Pills */}
            <div className="flex items-center gap-2">
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-author-social px-3 py-1 rounded border text-xs sm:text-sm font-mono font-medium flex items-center gap-1.5 transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-author-social px-3 py-1 rounded border text-xs sm:text-sm font-mono font-medium flex items-center gap-1.5 transition-colors"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          <p className="blog-author-bio-text text-sm sm:text-base leading-relaxed">
            {authorBio}
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

/**
 * TagsAndShare — Compact editorial tags and distribution block matching reference
 */
export default function TagsAndShare({
  tags = [],
  title = "DevOnionX Blog Post",
  slug = "",
  className = "",
}) {
  const [copied, setCopied] = useState(false);

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://devonionx.com/blog/${slug}`;

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(`${title} — DevOnionX`);

  const shareLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`blog-tags-section pt-8 border-t space-y-6 ${className}`}>
      {/* Tags Row */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="blog-tags-label text-xs font-mono font-semibold mr-2 uppercase tracking-wider">
            Tags:
          </span>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="blog-tag px-3 py-1 rounded border text-xs font-mono font-medium transition-colors cursor-default"
            >
              #{tag.startsWith("#") ? tag.slice(1) : tag}
            </span>
          ))}
        </div>
      )}

      {/* Distribution Card */}
      <div className="blog-share-card flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg border">
        <span className="blog-share-label text-sm sm:text-base font-semibold">
          Distribute this architecture piece:
        </span>

        <div className="flex items-center gap-2">
          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            type="button"
            className="blog-share-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded border text-xs sm:text-sm font-mono font-medium transition-all active:scale-95"
            aria-label="Copy article link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#F77118]" />
                <span className="text-[#F77118]">Copied!</span>
              </>
            ) : (
              <>
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          {/* Social share icon buttons */}
          {shareLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${item.name}`}
                className="blog-share-btn p-2 rounded border transition-colors active:scale-95"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

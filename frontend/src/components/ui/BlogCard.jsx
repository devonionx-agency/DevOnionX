import { allIcon } from "@/helper/iconProvider";
import { blogImages } from "@/helper/imageProvider/blogImage";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({
  category = "Case Study",
  readTime = "5 min read",
  title = "How we built a real-time chat system",
  excerpt = "A deep dive into our architecture decisions, scaling challenges, and lessons learned from building a production-grade chat app.",
  author = "Jhulon",
  date = "Jan 3, 2026",
  tags = ["Node.js", "Socket.io", "Express.js", "MongoDB"],
  image = null,
  href = "/",
}) => {
  const { blogOne } = blogImages;
  const { timer } = allIcon;
  const blogImage = image || blogOne;

  return (
    <div className="relative w-full h-[420px] sm:h-[450px] overflow-hidden group rounded-xl z-0">
      <div className="absolute inset-0 bg-gradient-to-t from-[#FF5101]/60 from-13% via-black/40 via-40% to-transparent z-5" />
      <span className="z-10 absolute top-3 sm:top-4 left-3 sm:left-4 bg-red-500 text-white text-xs font-medium px-2.5 sm:px-3 py-1 rounded-full">
        {category}
      </span>
      <span className="z-10 absolute top-3 sm:top-4 right-3 sm:right-4 bg-black text-white text-xs font-medium px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-x-1.5">
        <span className="inline-block text-[14px]">{timer}</span>
        {readTime}
      </span>
      <Image
        src={blogImage}
        fill
        alt={title}
        className="object-cover group-hover:scale-[1.2] transition duration-500 ease-in-out"
      />
      {/* Bottom Content  for xs, sm, md, lg*/}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 space-y-2 sm:space-y-3 z-10 block xl:hidden">
        <div className="space-y-1">
          <p className="text-white text-sm sm:text-base font-medium">
            {category}
          </p>
          <h5 className="text-white headingSix !font-bold line-clamp-1">
            <Link href={href}>{title}</Link>
          </h5>
          <p className="line-clamp-2 text-white text-sm sm:text-base">
            {excerpt}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {tags.slice(0, 4).map((tag, index) => (
            <span
              key={index}
              className="text-center text-white text-[11px] sm:text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:py-1.5 truncate"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full overflow-hidden">
            <Image className="object-cover" src={blogImage} alt={author} fill />
          </div>
          <div className="space-y-[2px]">
            <p className="text-[13px] sm:text-[15px] text-white font-bold">
              {author}
            </p>
            <p className="text-xs text-white font-medium">{date}</p>
          </div>
        </div>
      </div>
      {/* Bottom Content  for xl 2xl*/}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 space-y-2 sm:space-y-3 z-10 hidden xl:block ">
        <div className="space-y-1">
          <p className="text-white text-sm sm:text-base font-medium">
            {category}
          </p>
          <h5 className="text-white headingSix !font-bold line-clamp-1">
            <Link href={href}>{title}</Link>
          </h5>
          <p className="line-clamp-2 text-white text-sm sm:text-base">
            {excerpt}
          </p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-2 items-center ">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full overflow-hidden">
              <Image
                className="object-cover"
                src={blogImage}
                alt={author}
                fill
              />
            </div>
            <div className="space-y-[2px] min-w-0">
              <p className="text-[13px] sm:text-[15px] text-white font-bold truncate">
                {author}
              </p>
              <p className="text-xs text-white font-medium">{date}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 shrink-0">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                key={index}
                className="text-center inline-block text-white text-[11px] sm:text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 sm:py-1.5 whitespace-nowrap "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
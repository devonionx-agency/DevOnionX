import Image from "next/image";
import Link from "next/link";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group">
      {/* ── Image area ── */}
      <div className="relative overflow-hidden w-full h-[420px]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* orange gradient overlay — slides in from right on hover */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#ff5101]/70 via-[#ff5101]/35 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

        {/* social links — right side, slides in on hover */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 md:gap-2 lg:gap-4 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10 pr-4 sm:pr-3 md:pr-2 lg:pr-5">
          {member.socials.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] hover:bg-black hover:text-white uppercase tracking-[0.06em] text-white border border-white hover:border-black transition duration-300 ease-in-out rounded-full py-1 px-2.5 whitespace-nowrap hover:scale-110"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>

      {/* ── Card footer ── */}
      <div className="py-5 px-6 space-y-3">
        {/* name + role */}
        <div>
          <Link href={member.slug ?? "#"}>
            <h5 className="headingFive font-bold text-white duration-500 ease-in-out group-hover:text-transparent group-hover:[background-image:linear-gradient(to_right,#FF5101,#ec4899,#8b5cf6)] group-hover:bg-clip-text">
              {member.name}
            </h5>
          </Link>
          <p className="text-white para-base font-medium">
            {member.role}
            {member.yearsOfExperience
              ? ` · ${member.yearsOfExperience} yrs`
              : ""}
          </p>
        </div>

        {/* bio */}
        {member.bio && (
          <p className="para-xs text-white font-normal">{member.bio}</p>
        )}

        {/* expertise pills */}
        {member.expertise?.length > 0 && (
          <div className="space-y-2">
            <p className="para-base text-white font-bold">Expertise</p>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill) => (
                <span
                  key={skill}
                  className="text-[13px] border border-white/20 text-white px-3 py-1.5 bg-white/20 rounded-full backdrop-blur-[20px]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Container from "@/components/ui/Container";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fff4ee] via-[#fafafc] to-[#fff1e8] py-16 lg:py-20">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />

      <Container size="hero">
        <div className="relative">
          {/* Top row: badge + heading + intro */}
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-3 rounded-full border border-orange-300 bg-white/60 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#1a1d29]">
                <span className="h-3 w-3 rounded-full bg-[#ff4f0f]" />
                About DevOnionX
              </span>

              <h2 className="text-4xl font-bold leading-[1.15] text-[#141824] sm:text-5xl lg:text-[56px]">
                Engineering Ideas Into{" "}
                <span className="text-[#ff4f0f]">Digital Experiences</span>
              </h2>
            </div>

            <div className="border-l-2 border-[#ff4f0f] pl-6 lg:mt-6">
              <p className="text-base leading-[1.9] text-slate-500 lg:text-[17px]">
                <span className="font-medium text-[#ff4f0f]">DevOnionX</span> is
                a forward-thinking software development agency helping ambitious
                businesses turn their ideas into high-performance digital
                products. We combine modern technologies, clean design, and
                engineering expertise to drive real business growth.
              </p>
            </div>
          </div>

          {/* Bottom row: image + content */}
          <div className="mt-12 grid items-center gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
            {/* Left image */}
            <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[398px]">
              {/* Image with custom rounded corners */}
              <div className="relative h-full w-full overflow-hidden rounded-tl-[10px] rounded-tr-[100px] rounded-br-[40px] rounded-bl-[40px] shadow-xl">
                <Image
                  src="/images/about/Team_Collaboration.webp"
                  alt="DevOnionX team working together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Pink half circle (flat bottom) */}
              <div className="absolute bottom-[63px] left-0 h-[50px] w-[98px] rounded-t-full bg-[#fbd5d9]" />

              {/* Orange half circle (flat top) */}
              <div className="absolute -left-[37px] bottom-[13px] h-[50px] w-[100px] rounded-b-full bg-[#ff4f0f]" />
            </div>

            {/* Right content */}
            <div>
              <h3 className="text-4xl font-bold leading-[1.15] text-[#141824] sm:text-[44px]">
                Your Technology Partner
                <br />
                for <span className="text-[#ff4f0f]">What&apos;s Next</span>
              </h3>

              <p className="mt-6 text-base leading-[1.9] text-slate-500 lg:text-[17px]">
                We blend creativity with cutting-edge technology to build
                scalable websites, innovative SaaS platforms, and intelligent
                digital solutions. Our goal is simple — to help you grow,
                innovate, and stay ahead in the digital world.
              </p>

              <a
                href="/about"
                className="group mt-8 inline-flex items-center gap-5"
              >
                <span className="border-b border-[#ff4f0f] pb-2 text-base font-semibold text-[#141824]">
                  Learn More About Us
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff4f0f] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight size={20} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;

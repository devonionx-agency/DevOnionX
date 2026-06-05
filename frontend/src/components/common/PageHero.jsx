import Image from "next/image";
import Container from "../ui/Container";
import { allPageHero } from "@/helper/imageProvider/pageHero";
import DirectionalButton from "../ui/Directionalbutton";
import { ArrowRight, Plus } from "lucide-react";

const PageHero = () => {
  const { pageHero } = allPageHero;
  return (
    <section className=" relative py-15">
      <Image
        src={pageHero}
        alt="pageHero"
        fill
        className="object-cover w-full h-auto z-0"
      />

      <div className="absolute inset-0 bg-black/70 z-5"></div>

      <Container>
        <div className="grid grid-cols-3 relative z-20">
          <div className=" col-span-2  space-y-6">
            <div>
              <h2 className="headingTwo text-white">Mobile App</h2>
              <h2 className="headingTwo bg-gradient-to-r from-[#FF5101] via-pink-500 to-violet-500 bg-clip-text text-transparent ">
                Development Services
              </h2>
            </div>
            <p className="para-lg text-white">
              While others struggle with fragmented development teams, endless
              revisions, and apps that barely work across devices,
              forward-thinking companies partner with AMELA Technology. We've
              spent years perfecting our mobile app development services for
              businesses that need to move fast and get it right the first time.
              Our proven process eliminates the guesswork, reduces
              time-to-market, and delivers apps that users actually want to keep
              on their phones.
            </p>

            <div>
              <DirectionalButton
                label="View Menu"
                borderColor="#ffffff"
                borderHoverColor="#FF5101"
                flairColor="#FF5101"
                shadowHover="0 0 18px 2px #9d717174"
                textColor="white"
                textHoverColor="#ffffff"
                size="lg"
                className="w-[300px] text-lg"
                textTypo={"font-medium"}
              />
            </div>
          </div>
          <div className="bg-sky-500">1</div>
        </div>
      </Container>
    </section>
  );
};

export default PageHero;

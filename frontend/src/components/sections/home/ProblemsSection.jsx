import Container from "@/components/ui/Container";
import ProblemCard from "@/components/ui/ProblemsCard";
import SectionHeader from "@/components/ui/SectionHeader";
import problemsArr from "@/helper/problemsArr";

const ProblemsSection = () => {
  return (
    <section className="section-padding bg-[#000]">
      <Container>
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
          <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
            <SectionHeader
              label="THE PROBLEM"
              text="Your Business Deserves More Than Just A Website."
              colorWord="More Than Just A Website."
              description="We help turn your digital presence into a trusted, conversion-focused growth engine."
            />
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 lg:gap-8">
            {problemsArr.map((p) => (
              <ProblemCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemsSection;

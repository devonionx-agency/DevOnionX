import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import FaqAccordion from "./faq/FaqAccordion";
import FaqStats from "./faq/FaqStats";

export default function FaqHome() {
  return (
    <section className="bg-[#02090F] py-24">
      <Container size="xl">
        <div className="text-center">
          <SectionHeader
            label="FAQ"
            text="Answers To Common Questions"
            colorWord="Questions"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          <FaqStats />
          <FaqAccordion />
        </div>
      </Container>
    </section>
  );
}
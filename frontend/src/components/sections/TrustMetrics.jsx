import { stats } from "@/helper/trustmetrics";
import SectionHeader from "../ui/SectionHeader";
import StatsGrid from "../ui/StatsGrid";
import Container from "../ui/Container";

export default function TrustMetrics() {
  return (
    <section className="relative overflow-hidden bg-[#02090F]  py-10 xl:py-[80px]">
      <SectionHeader
        label="TRUST & GROWTH"
        text="Built For Growth. Trusted For Results."
        colorWord="Trusted For Results."
      />
      <Container size="hero">
        <div className="pt-8 lg:pt-14">
          <StatsGrid items={stats} />
        </div>
      </Container>
    </section>
  );
}

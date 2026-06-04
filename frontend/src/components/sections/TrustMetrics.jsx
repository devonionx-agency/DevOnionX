import { stats } from "@/helper/trustmetrics";
import SectionHeader from "../ui/SectionHeader";
import StatsGrid from "../ui/StatsGrid";
import Container from "../ui/Container";

export default function TrustMetrics() {
  return (
    <section className="relative overflow-hidden bg-[#02090F]">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="TRUST & RESULTS"
          text="Trusted by Industry Leaders"
          colorWord="Industry Leaders"
        />
        <Container size="xl">
          <div className="mt-14">
            <StatsGrid items={stats} />
          </div>
        </Container>
      </div>
    </section>
  );
}

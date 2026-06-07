import { stats } from "@/helper/trustmetrics";
import SectionHeader from "../ui/SectionHeader";
import StatsGrid from "../ui/StatsGrid";
import Container from "../ui/Container";

export default function TrustMetrics() {
  return (
    <section className="relative overflow-hidden bg-[#02090F]">
        <SectionHeader
          label="TRUST & RESULTS"
          text="Trusted by Industry Leaders"
          colorWord="Industry Leaders"
        />
        <Container size="xl">
          <div className="pt-8 lg:pt-14">
            <StatsGrid items={stats} />
          </div>
        </Container>
    </section>
  );
}

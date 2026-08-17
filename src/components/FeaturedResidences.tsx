import { properties } from "@/lib/data";
import PropertyCard from "./PropertyCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FeaturedResidences() {
  return (
    <section id="residences" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Featured Residences"
          title="Handpicked homes across Nigeria"
          subtitle="A private selection from our portfolio of waterfront estates, penthouses and family homes. Full off-market list shared on request."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100}>
              <PropertyCard property={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a href="#contact" className="btn-outline-dark">
            Request the full portfolio
          </a>
        </Reveal>
      </div>
    </section>
  );
}

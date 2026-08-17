import { services } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { BuildingIcon, ConciergeIcon, KeyIcon, ScaleIcon } from "./icons";

const icons = [BuildingIcon, KeyIcon, ScaleIcon, ConciergeIcon];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-cream py-20 lg:py-28">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Our Services"
          title="Beyond buying and selling"
          subtitle="Most agencies close a sale and disappear. We stay -- managing, protecting and growing your Nigerian asset for years."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={service.title}
                delay={i * 90}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-deep text-gold-bright transition group-hover:bg-gold group-hover:text-green-deep">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

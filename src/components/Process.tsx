import { processSteps } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-ivory py-20 lg:py-28">
      <div className="container-lux">
        <SectionHeading
          eyebrow="How It Works"
          title="A white-glove path to closing"
          subtitle="From first call to key handover, one dedicated advisor and one lawyer guide you through every step -- in your language, on your schedule."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} className="relative">
              {i < processSteps.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-14 top-8 hidden h-px w-[calc(100%-3.5rem)] bg-gradient-to-r from-gold/60 to-gold/10 lg:block"
                />
              ) : null}

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green/30 font-display text-xl text-green-rich">
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

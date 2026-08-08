import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 border-t border-night/5 bg-white py-20 lg:py-28"
    >
      <div className="container-lux">
        <SectionHeading
          eyebrow="Client Stories"
          title="Trusted by buyers worldwide"
          subtitle="From first viewing to key handover — hear from clients who now call Nigeria home."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className="flex h-full flex-col rounded-2xl bg-ivory p-8"
            >
              <div aria-hidden className="font-serif text-5xl leading-none text-emerald">
                &ldquo;
              </div>
              <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-night/80">
                {t.quote}
              </blockquote>
              <footer className="mt-6 flex items-center gap-4 border-t border-night/5 pt-5">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-night font-serif text-sm text-emerald-light">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-night">{t.name}</p>
                  <p className="text-xs text-slate-muted">{t.role}</p>
                </div>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { investmentPoints } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const coastal =
  "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1400&q=80";
const skyline =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1000&q=80";

export default function InvestmentCase() {
  return (
    <section
      id="why-nigeria"
      className="relative scroll-mt-20 overflow-hidden bg-night py-20 text-white lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-emerald/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-night-soft blur-3xl" />

      <div className="container-lux relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Copy + points */}
        <div>
          <SectionHeading
            align="left"
            dark
            eyebrow="Why Invest in Nigeria"
            title="A market with rare depth"
            subtitle="Nigeria&apos;s prime property market is maturing fast — driven by diaspora demand, a young urbanising population and some of the continent&apos;s strongest yields."
          />

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {investmentPoints.map((point, i) => (
              <Reveal key={point.value} delay={i * 80}>
                <p className="font-serif text-lg leading-snug text-emerald-light">
                  {point.value}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {point.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image collage */}
        <div className="relative">
          <Reveal className="overflow-hidden rounded-2xl shadow-card">
            <Image
              src={coastal}
              alt="Aerial view of the Lagos coastline and Atlantic"
              width={1400}
              height={1000}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[16/11] w-full object-cover"
            />
          </Reveal>
          <Reveal
            delay={150}
            className="absolute -bottom-10 -left-6 hidden w-56 overflow-hidden rounded-xl border-4 border-night shadow-card sm:block lg:-left-10 lg:w-64"
          >
            <Image
              src={skyline}
              alt="Modern skyline of central Lagos at dusk"
              width={1000}
              height={800}
              sizes="256px"
              className="aspect-[4/3] w-full object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

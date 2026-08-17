import Image from "next/image";
import { stats } from "@/lib/data";
import { site } from "@/lib/site";
import { ArrowIcon } from "./icons";
import heroImage from "@/assets/sochi-hero.jpg"

/* Striking Nigerian luxury property -- Banana Island waterfront at golden hour */

const budgets = [
  "₦10m -- ₦50m",
  "₦50m -- ₦200m",
  "₦200m -- ₦400m",
  "₦400+",
  "Not sure yet",
];



const propertyTypes = ["Flat", "Penthouse", "Duplex", "Villa", "Investment portfolio"];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Full-floor penthouse living room with floor-to-ceiling windows over the Lagos lagoon at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep green gradient overlay -- rich, not washed out */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-deep/85 via-green-deep/55 to-green/20" />
        {/* Subtle Ankara pattern overlay */}
        <div className="pointer-events-none absolute inset-0 pattern-diamond text-gold opacity-[0.04]" />
      </div>

      {/* Content */}
      <div className="container-lux relative flex flex-1 flex-col justify-end pb-16 pt-40 lg:pb-20">
        <div className="max-w-3xl">
          

          <h1 className="text-4xl leading-[1.06] text-cream sm:text-6xl lg:text-7xl font-bold">
            Own a piece of
            <br />
            <span className="italic text-gold-bright">Sochi Luxury Homes</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
            Sochi Homes curates exceptional homes across Lagos, Abuja and Port
            Harcourt -- from Ikoyi penthouses to waterfront estates -- with full
            legal support for local and diaspora buyers.
          </p>

          {/* Quick enquiry bar */}
          <div className="mt-9 flex max-w-2xl flex-col gap-3 rounded-2xl bg-ivory/95 p-3 shadow-card ring-1 ring-green/10 sm:flex-row sm:items-center">
            <label className="sr-only" htmlFor="hero-budget">
              Budget
            </label>
            <select
              id="hero-budget"
              className="flex-1 rounded-xl border border-green/20 bg-cream/80 px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
              defaultValue=""
            >
              <option value="" disabled>
                Budget (NGN)
              </option>
              {budgets.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>

            <label className="sr-only" htmlFor="hero-type">
              Residence type
            </label>
            <select
              id="hero-type"
              className="flex-1 rounded-xl border border-green/20 bg-cream/80 px-4 py-3 text-sm font-medium text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
              defaultValue=""
            >
              <option value="" disabled>
                Residence type
              </option>
              {propertyTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <a href={site.cta.href} className="btn-gold flex-1 justify-center whitespace-nowrap">
              Book a Consultation
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>

          <a
            href="#residences"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cream/90 transition hover:text-gold-bright"
          >
            Explore residences
            <span aria-hidden>{">"}</span>
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-gold/15 pt-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl text-cream sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wideplus text-cream/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

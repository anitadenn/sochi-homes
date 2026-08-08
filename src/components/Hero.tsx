import Image from "next/image";
import { stats } from "@/lib/data";
import { site } from "@/lib/site";
import { ArrowIcon } from "./icons";

const heroImage =
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=80";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Luxury villa with pool overlooking the Black Sea coast at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-night/70 via-night/45 to-night/85" />
      </div>

      {/* Content */}
      <div className="container-lux relative flex flex-1 flex-col justify-end pb-16 pt-40 lg:pb-20">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-luxury text-gold-light">
            <span className="h-px w-10 bg-gold" />
            {site.tagline}
          </p>

          <h1 className="text-4xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            Own a piece of the
            <br />
            <span className="italic text-gold-light">Russian Riviera</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Sochi Homes curates the finest residences in Russia&apos;s premier
            resort city — from sea-view penthouses to private villas — with
            end-to-end legal support for international buyers.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={site.cta.href} className="btn-gold">
              {site.cta.label}
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a href="#residences" className="btn-outline">
              Explore Residences
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl text-gold-light sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wideplus text-white/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

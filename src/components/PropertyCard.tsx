import Image from "next/image";
import type { Property } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { AreaIcon, BathIcon, BedIcon, PinIcon } from "./icons";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition duration-500 hover:-translate-y-1.5 hover:shadow-card">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-night/45 to-transparent" />

        {/* Price */}
        <p className="absolute bottom-4 left-4 rounded-full bg-ivory/95 px-4 py-1.5 text-sm font-bold text-night shadow-soft">
          {formatPrice(property.price)}
        </p>

        {/* Tags */}
        {property.tags.length ? (
          <div className="absolute right-4 top-4 flex flex-col items-end gap-1.5">
            {property.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-night/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wideplus text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-night">{property.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wideplus text-emerald-dark">
          <PinIcon className="h-3.5 w-3.5" />
          {property.location}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-muted">
          {property.description}
        </p>

        <div className="mt-5 flex items-center gap-5 border-t border-night/5 pt-4 text-[13px] font-medium text-night/70">
          <span className="flex items-center gap-1.5">
            <BedIcon className="h-4 w-4 text-emerald-dark" />
            {property.beds} bd
          </span>
          <span className="flex items-center gap-1.5">
            <BathIcon className="h-4 w-4 text-emerald-dark" />
            {property.baths} ba
          </span>
          <span className="flex items-center gap-1.5">
            <AreaIcon className="h-4 w-4 text-emerald-dark" />
            {property.area}
          </span>
        </div>

        <a
          href="#contact"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-night transition hover:text-emerald-dark"
        >
          Request details
          <span aria-hidden className="text-emerald-dark">
            →
          </span>
        </a>
      </div>
    </article>
  );
}

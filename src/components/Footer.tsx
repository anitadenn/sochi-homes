import { site } from "@/lib/site";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="container-lux grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <p className="font-serif text-2xl tracking-tight">
            Sochi<span className="text-emerald-light">Homes</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            Boutique real estate for premium homes across Nigeria&apos;s prime
            cities. Licensed, regulated and trusted by buyers worldwide since
            2010.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-emerald-light hover:text-emerald-light"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href={site.emailHref}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-emerald-light hover:text-emerald-light"
            >
              <MailIcon className="h-4 w-4" />
            </a>
            <a
              href={site.phoneHref}
              aria-label="Call us"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-emerald-light hover:text-emerald-light"
            >
              <PhoneIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-luxury text-emerald-light">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-luxury text-emerald-light">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 flex-none text-emerald-light" />
              <span>{site.address.full}</span>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <PhoneIcon className="h-4 w-4 flex-none text-emerald-light" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <MailIcon className="h-4 w-4 flex-none text-emerald-light" />
                {site.email}
              </a>
            </li>
            <li className="text-white/40">{site.hours}</li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-luxury text-emerald-light">
            Visiting Nigeria?
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-white/55">
            Arrange a private viewing trip — we handle transfers, viewing
            schedule and local logistics for serious buyers.
          </p>
          <a href="#contact" className="btn-emerald mt-6">
            Plan a visit
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lux flex flex-col gap-3 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Properties shown are representative. Prices indicative in USD.</p>
        </div>
      </div>
    </footer>
  );
}

export const site = {
  name: "Sochi Homes",
  legalName: "Sochi Homes Real Estate Agency LLC",
  tagline: "Luxury Residences on the Black Sea Riviera",
  description:
    "Sochi Homes is a boutique real estate agency specialising in luxury residences across the Russian Riviera — sea-view apartments, ski chalets and private villas from Central Sochi to Krasnaya Polyana.",
  url: "https://sochi-homes.example.com",
  phone: "+7 (862) 260-00-00",
  phoneHref: "tel:+78622600000",
  whatsapp: "https://wa.me/78622600000",
  email: "hello@sochihomes.com",
  emailHref: "mailto:hello@sochihomes.com",
  address: {
    line1: "Kurortny Prospekt 47, Office 12",
    city: "Sochi 354000",
    country: "Russia",
    full: "Kurortny Prospekt 47, Office 12, Sochi 354000, Russia",
  },
  hours: "Mon–Sat · 09:00–20:00 MSK",
  nav: [
    { label: "Residences", href: "#residences" },
    { label: "Why Sochi", href: "#why-sochi" },
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    label: "Book a Consultation",
    href: "#contact",
  },
} as const;

export type Site = typeof site;

export const site = {
  name: "Sochi Homes",
  legalName: "Sochi Homes Real Estate Ltd.",
  tagline: "Prime Real Estate Across Nigeria",
  description:
    "Sochi Homes is a Nigerian real estate agency specialising in premium homes and investment property — from Lagos waterfront estates and Ikoyi penthouses to Maitama residences and Port Harcourt villas.",
  url: "https://sochi-homes.example.com",
  phone: "+234 (0) 803 555 0000",
  phoneHref: "tel:+2348035550000",
  whatsapp: "https://wa.me/2348035550000",
  email: "hello@sochihomes.com",
  emailHref: "mailto:hello@sochihomes.com",
  address: {
    line1: "14B Akin Adesola Street",
    city: "Victoria Island, Lagos",
    country: "Nigeria",
    full: "14B Akin Adesola Street, Victoria Island, Lagos, Nigeria",
  },
  hours: "Mon–Sat · 09:00–19:00 WAT",
  nav: [
    { label: "Residences", href: "#residences" },
    { label: "Why Nigeria", href: "#why-nigeria" },
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

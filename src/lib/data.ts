export interface Property {
  id: string;
  name: string;
  location: string;
  area: string; // living area, m²
  beds: number;
  baths: number;
  price: number; // USD
  image: string;
  alt: string;
  tags: string[];
  description: string;
  featured?: boolean;
}

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const properties: Property[] = [
  {
    id: "aurora-penthouse",
    name: "Aurora Penthouse",
    location: "Central Sochi · Sea Front",
    area: "240 m²",
    beds: 4,
    baths: 4,
    price: 1850000,
    image: img("photo-1600607687939-ce8a6c25118c"),
    alt: "Modern penthouse living room with floor-to-ceiling windows overlooking the Black Sea",
    tags: ["Sea View", "Ready to Move"],
    description:
      "A corner penthouse on the 21st floor with sweeping views of the Black Sea, a private terrace and concierge service.",
    featured: true,
  },
  {
    id: "rosa-khutor-chalet",
    name: "Rosa Khutor Ski Chalet",
    location: "Krasnaya Polyana · Rosa Khutor",
    area: "320 m²",
    beds: 5,
    baths: 5,
    price: 2400000,
    image: img("photo-1512917774080-9991f1c4c750"),
    alt: "Wood-and-stone alpine chalet with warm lighting in a ski resort",
    tags: ["Ski-in / Ski-out", "Exclusive"],
    description:
      "Ski-in, ski-out chalet with a private spa, heated outdoor terrace and five en-suite bedrooms on the mountain.",
    featured: true,
  },
  {
    id: "imeretinsky-sea-villa",
    name: "Imeretinsky Sea Villa",
    location: "Adler · Imeretinsky Resort",
    area: "380 m²",
    beds: 4,
    baths: 5,
    price: 3100000,
    image: img("photo-1613490493576-7fde63acd811"),
    alt: "Contemporary luxury villa with infinity pool at dusk",
    tags: ["New Build", "Private Pool"],
    description:
      "New-build villa minutes from the Olympic Park with a saltwater pool, landscaped gardens and beach access.",
  },
  {
    id: "gorky-gorod-residence",
    name: "Gorky Gorod Residence",
    location: "Krasnaya Polyana · Gorky Gorod",
    area: "165 m²",
    beds: 3,
    baths: 3,
    price: 1150000,
    image: img("photo-1600566753190-17f0baa2a6c3"),
    alt: "Bright modern apartment interior with mountain views",
    tags: ["Rental-Ready", "Mountain View"],
    description:
      "Turnkey residence in a managed resort complex with a proven short-let track record and strong winter occupancy.",
  },
  {
    id: "riviera-park-apartment",
    name: "Riviera Park Apartment",
    location: "Central Sochi · Riviera",
    area: "110 m²",
    beds: 2,
    baths: 2,
    price: 720000,
    image: img("photo-1616486338812-3dadae4b4ace"),
    alt: "Elegant living room with sea tones and designer furniture",
    tags: ["Sea View", "Investment"],
    description:
      "An elegant two-bedroom in a boutique building opposite Riviera Park, with rental yields among the city's best.",
  },
  {
    id: "dagomys-estate",
    name: "Dagomys Estate",
    location: "Dagomys · Private Coast",
    area: "520 m²",
    beds: 6,
    baths: 7,
    price: 4600000,
    image: img("photo-1613977257363-707ba9348227"),
    alt: "Grand villa interior with double-height ceilings and chandelier",
    tags: ["Exclusive", "Private Grounds"],
    description:
      "A gated estate on the quiet Dagomys coast with six bedrooms, an indoor pool, staff quarters and 1.2 ha of grounds.",
  },
];

export const stats = [
  { value: "15+", label: "Years in Sochi real estate" },
  { value: "$850M+", label: "In sales closed" },
  { value: "1,200+", label: "Clients served worldwide" },
  { value: "98%", label: "Client satisfaction" },
] as const;

export const guarantees = [
  {
    title: "Licensed & Regulated",
    text: "A member of the Russian Guild of Realtors with full legal accreditation to sell and manage property in Sochi.",
  },
  {
    title: "Full Due Diligence",
    text: "Every title deed, ownership chain and building permit verified by our in-house legal team before you commit.",
  },
  {
    title: "Off-Market Access",
    text: "Priority access to exclusive residences that never appear on portals — reserved for our private clients.",
  },
  {
    title: "English-Speaking Team",
    text: "International buyers work with a dedicated English-speaking advisor from first call to key handover.",
  },
];

export const investmentPoints = [
  {
    value: "Year-round destination",
    text: "Sochi pairs Black Sea summers with Krasnaya Polyana's world-class skiing — demand never has a low season.",
  },
  {
    value: "Olympic-grade infrastructure",
    text: "A new international airport, modern motorways and global hotel brands arrived with the 2014 Games.",
  },
  {
    value: "Rising rental demand",
    text: "Tourist arrivals grow year on year, driving healthy short-let yields in managed resort complexes.",
  },
  {
    value: "Entry from $250k",
    text: "From one-bedroom apartments to private estates — a market with rare depth for every investor profile.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    text: "We learn your goals, budget and timeline in a confidential consultation — in person, by phone or video call.",
  },
  {
    number: "02",
    title: "Private Viewings",
    text: "We curate a shortlist of off-market and market residences and arrange private tours — on-site or live video.",
  },
  {
    number: "03",
    title: "Legal & Purchase",
    text: "Our lawyers handle due diligence, negotiation and closing, with transparent fees and no hidden costs.",
  },
  {
    number: "04",
    title: "Handover & Beyond",
    text: "Keys, registration and utility setup are managed for you — plus optional rental management and concierge.",
  },
];

export const services = [
  {
    title: "Sales & Acquisitions",
    text: "Buying or selling luxury property in Sochi — we match the right residence to the right buyer and negotiate on your behalf.",
  },
  {
    title: "Property Management",
    text: "Short-let and long-let management with full reporting: bookings, cleaning, maintenance and remittance to your account.",
  },
  {
    title: "Legal & Due Diligence",
    text: "Title checks, purchase agreements and closing support from lawyers who specialise in foreign buyer transactions.",
  },
  {
    title: "Relocation & Concierge",
    text: "From airport pickup and school placement to interior design and staffing — everything it takes to feel at home.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They found us an off-market penthouse we could never have seen on our own. The due diligence was meticulous — we closed from London without a single trip.",
    name: "James Whitfield",
    role: "Property investor · London",
    initials: "JW",
  },
  {
    quote:
      "The management team runs our Gorky Gorod residence like a five-star hotel. Reporting is monthly, remittances are on time, and occupancy stayed above 80% last winter.",
    name: "Elena Petrova",
    role: "Entrepreneur · Moscow",
    initials: "EP",
  },
  {
    quote:
      "As a foreign buyer I expected bureaucracy. Their legal team handled everything — registration, taxes, the lot — and explained each step in plain English.",
    name: "Markus Weber",
    role: "Relocated executive · Munich",
    initials: "MW",
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

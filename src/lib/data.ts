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
    id: "banana-island-villa",
    name: "Banana Island Waterfront Villa",
    location: "Banana Island · Lagos",
    area: "620 m²",
    beds: 5,
    baths: 6,
    price: 420000000,
    image: img("photo-1613490493576-7fde63acd811"),
    alt: "Contemporary villa with a pool on the Banana Island waterfront at dusk",
    tags: ["Waterfront", "Gated Estate"],
    description:
      "A rare waterfront home on the lagoon with a private jetty, resort-style pool and 24-hour estate security.",
    featured: true,
  },
  {
    id: "ikoyi-sky-penthouse",
    name: "Ikoyi Sky Penthouse",
    location: "Ikoyi · Lagos",
    area: "410 m²",
    beds: 4,
    baths: 5,
    price: 719000000,
    image: img("photo-1600607687939-ce8a6c25118c"),
    alt: "Full-floor penthouse living room with floor-to-ceiling windows over the Lagos lagoon",
    tags: ["Penthouse", "Sea View"],
    description:
      "A full-floor penthouse in one of Ikoyi's newest towers, with panoramic lagoon views, smart-home automation and concierge.",
    featured: true,
  },
  {
    id: "lekki-beachfront-estate",
    name: "Lekki Beachfront Estate",
    location: "Lekki Phase 1 · Lagos",
    area: "540 m²",
    beds: 6,
    baths: 7,
    price: 260000000,
    image: img("photo-1512917774080-9991f1c4c750"),
    alt: "Modern family estate with warm lighting on a tree-lined Lekki road",
    tags: ["Beachfront", "New Build"],
    description:
      "Steps from the Atlantic on a tree-lined Lekki road — light-filled rooms, a private pool and staff quarters.",
  },
  {
    id: "maitama-diplomatic-residence",
    name: "Maitama Diplomatic Residence",
    location: "Maitama · Abuja",
    area: "480 m²",
    beds: 5,
    baths: 6,
    price: 400000000,
    image: img("photo-1613977257363-707ba9348227"),
    alt: "Grand villa interior with double-height ceilings in Abuja's diplomatic district",
    tags: ["Diplomatic Zone", "Ready to Move"],
    description:
      "A turnkey residence in Abuja's diplomatic district with generous gardens, servant quarters and gated security.",
  },
  {
    id: "katampe-smart-home",
    name: "Katampe Hills Smart Home",
    location: "Katampe District · Abuja",
    area: "310 m²",
    beds: 4,
    baths: 5,
    price: 110000000,
    image: img("photo-1600566753190-17f0baa2a6c3"),
    alt: "Bright modern smart-home interior with mountain district views",
    tags: ["Smart Home", "Investment"],
    description:
      "A modern terraced home in the capital's fastest-growing district, wired for smart living and strong tenant demand.",
  },
  {
    id: "gra-executive-villa",
    name: "GRA Executive Villa",
    location: "GRA Phase 3 · Port Harcourt",
    area: "430 m²",
    beds: 5,
    baths: 6,
    price: 98000000,
    image: img("photo-1616486338812-3dadae4b4ace"),
    alt: "Elegant executive villa living room with warm neutral tones",
    tags: ["GRA", "High Yield"],
    description:
      "An executive villa in Port Harcourt's premier GRA with a separate guest suite and a proven corporate rental history.",
  },
];

export const stats = [
  { value: "15+", label: "Years in Nigerian real estate" },
  { value: "₦20B+", label: "In sales closed" },
  { value: "1,200+", label: "Clients served worldwide" },
  { value: "98%", label: "Client satisfaction" },
] as const;

export const guarantees = [
  {
    title: "Registered & Regulated",
    text: "Fully registered with the Corporate Affairs Commission and compliant with LASRERA — licensed to sell and manage property in Nigeria.",
  },
  {
    title: "Verified Title & Documents",
    text: "Every Certificate of Occupancy, title search and governor's consent verified by our legal partners before you commit.",
  },
  {
    title: "Off-Market Access",
    text: "Priority access to exclusive homes that never appear on portals — reserved for our private clients.",
  },
  {
    title: "Diaspora & International Expertise",
    text: "Buying from abroad is seamless: live video viewings, digital paperwork and currency guidance for diaspora clients.",
  },
];

export const investmentPoints = [
  {
    value: "One of Africa's biggest economies",
    text: "Nigeria's growth engine is drawing global attention — and its prime property market is maturing with it.",
  },
  {
    value: "Diaspora demand, rising",
    text: "Nigerians abroad are investing home at record levels — buying quality homes for income, use and legacy.",
  },
  {
    value: "Strong rental yields",
    text: "Prime Lagos and Abuja addresses deliver some of the continent's strongest yields, with dollar-denominated leases in demand.",
  },
  {
    value: "Entry from $250k",
    text: "From smart two-bedrooms to waterfront estates — a market with rare depth for every investor profile.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    text: "We learn your goals, budget and timeline in a confidential consultation — in person, by phone or video.",
  },
  {
    number: "02",
    title: "Private Viewings",
    text: "We curate a shortlist of off-market and listed homes and arrange private tours — on-site or live video.",
  },
  {
    number: "03",
    title: "Legal & Purchase",
    text: "Our legal partners handle title verification, negotiation and closing — with transparent fees and no surprises.",
  },
  {
    number: "04",
    title: "Handover & Beyond",
    text: "Keys, registration and utility setup are managed for you — plus optional property management.",
  },
];

export const services = [
  {
    title: "Sales & Acquisitions",
    text: "Buying or selling premium property across Lagos, Abuja and Port Harcourt — we match the right home to the right buyer and negotiate for you.",
  },
  {
    title: "Property Management",
    text: "Short-let and long-let management with full reporting: bookings, maintenance and monthly remittance to your account.",
  },
  {
    title: "Legal & Due Diligence",
    text: "Title verification, purchase agreements and closing support from lawyers who specialise in Nigerian property law.",
  },
  {
    title: "Relocation & Concierge",
    text: "For returnees and relocating professionals — airport pickup, schools, interiors and staff, all handled.",
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
      "They found us an Ikoyi penthouse we could never have found on our own. The due diligence was meticulous — we closed from London without a single trip.",
    name: "James Whitfield",
    role: "Property investor · London",
    initials: "JW",
  },
  {
    quote:
      "The management team runs our Lekki beach house like a five-star hotel. Reporting is monthly, remittances arrive on time, and occupancy stayed strong all year.",
    name: "Adaeze Okafor",
    role: "Entrepreneur · Lagos",
    initials: "AO",
  },
  {
    quote:
      "As a foreign buyer I expected bureaucracy. Their legal team handled the C of O, registration and the lot — and explained each step in plain English.",
    name: "Markus Weber",
    role: "Relocated executive · Abuja",
    initials: "MW",
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

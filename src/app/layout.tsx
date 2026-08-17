import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Nigeria real estate",
    "luxury homes Lagos",
    "Lekki real estate",
    "Ikoyi apartments",
    "Abuja properties",
    "buy property in Nigeria",
    "Port Harcourt houses",
    "diaspora investment Nigeria",
    "Sochi Homes",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og.svg"],
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const agencySchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressCountry: site.address.country,
  },
  foundingDate: "2010",
  areaServed: {
    "@type": "Place",
    name: "Lagos, Abuja and Port Harcourt, Nigeria",
  },
  priceRange: "$$$",
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agencySchema) }}
        />
        {children}
      </body>
    </html>
  );
}

"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-night/5 bg-ivory/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-lux flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-night">
            Sochi<span className="text-emerald-dark">Homes</span>
          </span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-luxury text-emerald-dark sm:inline">
            Est. 2010
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-night/70 transition hover:text-night"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-night/80 transition hover:text-night"
          >
            <PhoneIcon className="h-4 w-4 text-emerald-dark" />
            {site.phone}
          </a>
          <a href={site.cta.href} className="btn-emerald">
            {site.cta.label}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-night/10 bg-ivory/80 text-night lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="fixed inset-0 top-20 z-40 bg-ivory lg:hidden">
          <nav className="container-lux flex flex-col gap-1 py-8">
            {site.nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-night/5 py-4 font-serif text-2xl text-night"
              >
                <span className="mr-3 text-xs tracking-luxury text-emerald-dark">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}
            <a
              href={site.cta.href}
              onClick={() => setOpen(false)}
              className="btn-emerald mt-8"
            >
              {site.cta.label}
            </a>
            <a
              href={site.phoneHref}
              className="mt-4 flex items-center gap-2 text-sm text-night/70"
            >
              <PhoneIcon className="h-4 w-4 text-emerald-dark" />
              {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { CheckIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const budgets = [
  "$250k – $750k",
  "$750k – $1.5M",
  "$1.5M – $3M",
  "$3M+",
  "Not sure yet",
];

const propertyTypes = [
  "Apartment",
  "Penthouse",
  "Villa",
  "Ski chalet",
  "Investment portfolio",
];

const nextSteps = [
  "We review your criteria and reply within 24 hours.",
  "You receive our exclusive off-market portfolio.",
  "We arrange private viewings — on-site or live video.",
  "A confidential, no-obligation consultation. Always.",
];

export default function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate submission — wire up to your CRM / email service.
    window.setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-ivory py-20 lg:py-28">
      <div className="container-lux grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* Left: pitch + contact */}
        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">Private Consultation</span>
          <h2 className="mt-4 text-3xl leading-tight text-night sm:text-4xl lg:text-[2.75rem]">
            Let&apos;s find your home in Nigeria
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-muted">
            Tell us what you&apos;re looking for and a senior advisor will get
            back to you within 24 hours with a hand-picked shortlist —
            including residences never listed publicly.
          </p>

          <ul className="mt-8 space-y-3">
            {nextSteps.map((step) => (
              <li
                key={step}
                className="flex items-start gap-3 text-sm text-night/75"
              >
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald/20 text-emerald-dark">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {step}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-night/5 pt-8">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-semibold text-night transition hover:text-emerald-dark"
            >
              <PhoneIcon className="h-4 w-4 text-emerald-dark" />
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center gap-2 text-sm font-semibold text-night transition hover:text-emerald-dark"
            >
              <MailIcon className="h-4 w-4 text-emerald-dark" />
              {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-night transition hover:text-emerald-dark"
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-dark" />
              WhatsApp us
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-3xl border border-night/5 bg-white p-7 shadow-soft sm:p-9">
          {status === "sent" ? (
            <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald/20 text-emerald-dark">
                <CheckIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-night">
                Thank you — request received
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-muted">
                A senior advisor will contact you within 24 hours with your
                private portfolio. Need us sooner? Call{" "}
                <a
                  href={site.phoneHref}
                  className="font-semibold text-emerald-dark"
                >
                  {site.phone}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="btn-outline-dark mt-8"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="label-lux">
                  Full name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="Jane Smith"
                  className="input-lux"
                />
              </div>
              <div>
                <label htmlFor="email" className="label-lux">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="jane@email.com"
                  className="input-lux"
                />
              </div>
              <div>
                <label htmlFor="phone" className="label-lux">
                  Phone / WhatsApp
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 555 000 0000"
                  className="input-lux"
                />
              </div>
              <div>
                <label htmlFor="country" className="label-lux">
                  Country of residence *
                </label>
                <input
                  id="country"
                  name="country"
                  required
                  type="text"
                  placeholder="United Kingdom"
                  className="input-lux"
                />
              </div>
              <div>
                <label htmlFor="budget" className="label-lux">
                  Budget (USD)
                </label>
                <select id="budget" name="budget" className="input-lux">
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="type" className="label-lux">
                  Residence type
                </label>
                <select id="type" name="type" className="input-lux">
                  {propertyTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label-lux">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your goals — timeline, preferred areas, must-haves…"
                  className="input-lux resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-emerald w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "sending"
                    ? "Sending…"
                    : "Book a Private Consultation"}
                </button>
                <p className="mt-4 text-center text-xs leading-relaxed text-slate-muted">
                  Your details are kept strictly confidential and never shared.
                  By submitting you agree to our privacy policy.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

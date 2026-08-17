import { guarantees } from "@/lib/data";
import Reveal from "./Reveal";
import { CheckIcon } from "./icons";

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-ivory">
      <div className="container-lux py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((g, i) => (
            <Reveal key={g.title} delay={i * 90} className="flex gap-4">
              <span className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-green/30 text-green-rich">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">{g.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {g.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

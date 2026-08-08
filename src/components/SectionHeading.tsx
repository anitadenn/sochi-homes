import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className={dark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
      <h2
        className={`text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-night"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`text-base leading-relaxed ${
            dark ? "text-white/60" : "text-slate-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

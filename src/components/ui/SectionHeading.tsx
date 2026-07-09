import Reveal from "@/components/motion/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={`mb-12 max-w-3xl md:mb-16 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <span className="glass inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

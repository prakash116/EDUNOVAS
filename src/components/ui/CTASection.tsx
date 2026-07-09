import Reveal from "@/components/motion/Reveal";
import GlowButton from "@/components/ui/GlowButton";

export default function CTASection({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="section">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-neon-cyan/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-neon-purple/25 blur-[100px]" />
          <h2 className="relative font-display text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-slate-400 md:text-lg">
            {subtitle}
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
            <GlowButton href={primaryHref}>{primaryLabel} →</GlowButton>
            {secondaryLabel && secondaryHref && (
              <GlowButton href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </GlowButton>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

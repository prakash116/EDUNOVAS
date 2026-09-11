import Image from "next/image";
import { LOGO_WALL } from "@/data/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const half = Math.ceil(LOGO_WALL.length / 2);
const ROWS = [LOGO_WALL.slice(0, half), LOGO_WALL.slice(half)];

function LogoTile({ name, src }: { name: string; src: string }) {
  return (
    <div
      className="relative h-16 w-36 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_12px_35px_-18px_rgba(34,211,238,0.45)] transition-shadow duration-300 hover:shadow-glow-cyan md:h-20 md:w-44"
      title={name}
    >
      <Image
        src={`${basePath}${src}`}
        alt={`${name} logo`}
        fill
        sizes="176px"
        className="object-contain p-3 mix-blend-multiply"
      />
    </div>
  );
}

function MarqueeRow({
  logos,
  reverse,
}: {
  logos: typeof LOGO_WALL;
  reverse?: boolean;
}) {
  const track = (ariaHidden: boolean) => (
    <div className="flex gap-4 pr-4" aria-hidden={ariaHidden || undefined}>
      {logos.map((logo) => (
        <LogoTile key={logo.name} {...logo} />
      ))}
    </div>
  );

  const animation = reverse
    ? "motion-safe:animate-marquee-reverse"
    : "motion-safe:animate-marquee";

  return (
    <div className="group flex overflow-hidden motion-reduce:overflow-x-auto motion-reduce:[scrollbar-width:none]">
      <div
        className={`flex w-max ${animation} group-hover:[animation-play-state:paused]`}
      >
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="section !py-10" aria-label="Mentors, advisors and partner institutions">
      <p className="mb-8 text-center text-sm text-slate-400">
        Mentors, advisors and partner institutions our students learn with
      </p>
      <div className="relative space-y-4">
        <MarqueeRow logos={ROWS[0]} />
        <MarqueeRow logos={ROWS[1]} reverse />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-void to-transparent md:w-32"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-void to-transparent md:w-32"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

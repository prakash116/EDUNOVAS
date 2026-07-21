import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-abyss/80">
      <div
        className="grid-bg pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-neon-cyan/10 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-neon-purple/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 md:py-20">
        <div className="glass mb-12 flex flex-col items-start justify-between gap-6 rounded-3xl border-neon-cyan/15 px-6 py-7 md:flex-row md:items-center md:px-9">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Start Building Today
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              Ready to turn ideas into real technology?
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple px-6 py-3.5 text-sm font-semibold text-white shadow-glow-purple transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-cyan"
          >
            Enquire Now
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_1fr] lg:gap-14">
          <div>
            <Link
              href="/"
              aria-label="EDUNOVAS home"
              className="inline-flex rounded-2xl bg-white px-3 py-2 shadow-[0_0_35px_-15px_rgba(34,211,238,0.75)] transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={`${basePath}/Logo/Edunovas Logo.jpeg`}
                alt="EDUNOVAS"
                width={1600}
                height={533}
                sizes="190px"
                className="h-12 w-[190px] object-contain"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              Hands-on education for robotics, artificial intelligence, cloud
              computing and hardware development—powered by real kits, expert
              mentors and industry-driven learning.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Robotics",
                "AI",
                "Cloud",
                "IoT",
                "Hardware",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Explore
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 lg:grid-cols-1">
              {NAV_LINKS.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-neon-cyan"
                  >
                    <ChevronRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Connect With Us
            </h3>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition-all hover:border-neon-cyan/30 hover:bg-white/[0.06]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neon-cyan/10 text-neon-cyan">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">
                    Email
                  </span>
                  <span className="block truncate text-sm text-slate-300 group-hover:text-white">
                    {SITE.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 transition-all hover:border-neon-purple/30 hover:bg-white/[0.06]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neon-purple/10 text-neon-purple">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">
                    Phone
                  </span>
                  <span className="block text-sm text-slate-300 group-hover:text-white">
                    {SITE.phone}
                  </span>
                </span>
              </a>

              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-3.5 text-sm font-medium text-emerald-300 transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10"
              >
                <span className="flex items-center gap-3">
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                </span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Learn · Build · Innovate · Lead</p>
        </div>
      </div>
    </footer>
  );
}

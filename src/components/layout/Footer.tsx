import Link from "next/link";
import { NAV_LINKS, SITE } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-abyss/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple">
                <span className="font-display text-lg font-bold text-white">N</span>
              </span>
              <span className="font-display text-lg font-bold text-white">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Next-generation EdTech for robotics, AI, cloud computing and
              hardware development. Learn by building — with real kits, real
              mentors and real career outcomes.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.slice(1, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-neon-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>{SITE.email}</li>
              <li>{SITE.phone}</li>
              <li>
                <Link
                  href="/contact"
                  className="text-neon-cyan transition-colors hover:text-white"
                >
                  Send an Enquiry →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Robotics · AI · Cloud · IoT · Hardware</p>
        </div>
      </div>
    </footer>
  );
}

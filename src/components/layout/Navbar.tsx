"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  House,
  Info,
  Landmark,
  Menu,
  MessageCircleMore,
  Presentation,
  X,
  type LucideIcon,
} from "lucide-react";
import { NAV_LINKS } from "@/data/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navIcons: Record<string, LucideIcon> = {
  "/": House,
  "/about": Info,
  "/programs": BookOpen,
  "/kits": Bot,
  "/workshops": Presentation,
  "/partnerships": Landmark,
  "/placements": BriefcaseBusiness,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5"
    >
      <nav
        className={`mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-white/15 bg-void/90 shadow-[0_18px_60px_-28px_rgba(34,211,238,0.45)] backdrop-blur-2xl"
            : "border-white/10 bg-void/55 shadow-[0_12px_40px_-28px_rgba(168,85,247,0.55)] backdrop-blur-xl"
        }`}
      >
        <Link
          href="/"
          aria-label="EDUNOVAS home"
          className="group flex shrink-0 items-center"
        >
          <span className="flex h-11 w-[136px] items-center overflow-hidden rounded-xl bg-white px-2.5 py-1.5 shadow-[0_0_30px_-12px_rgba(34,211,238,0.8)] transition-transform duration-300 group-hover:scale-[1.03] sm:w-[150px]">
            <Image
              src={`${basePath}/Logo/Edunovas Logo.jpeg`}
              alt="EDUNOVAS"
              width={1600}
              height={533}
              priority
              sizes="(min-width: 640px) 150px, 136px"
              className="h-full w-full object-contain"
            />
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            const Icon = navIcons[link.href];
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-[13px] font-medium transition-colors ${
                    active ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl border border-neon-cyan/20 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon className="relative h-3.5 w-3.5" aria-hidden="true" />
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="group hidden items-center gap-2 rounded-xl border border-neon-cyan/30 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple px-5 py-2.5 text-[13px] font-semibold text-white shadow-glow-purple transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-cyan lg:inline-flex"
        >
          <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
          Enquire Now
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition-colors hover:border-neon-cyan/30 hover:bg-white/[0.1] lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-void/95 shadow-[0_20px_60px_-30px_rgba(34,211,238,0.5)] backdrop-blur-2xl lg:hidden"
          >
            <ul className="space-y-1 p-3">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                const Icon = navIcons[link.href];
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "border border-neon-cyan/20 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 text-white"
                          : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple px-4 py-3 text-sm font-semibold text-white shadow-glow-purple"
                >
                  <MessageCircleMore className="h-4 w-4" aria-hidden="true" />
                  Enquire Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

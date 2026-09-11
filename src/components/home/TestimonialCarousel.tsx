"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const AUTOPLAY_DELAY = 7000;

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = TESTIMONIALS[activeIndex];

  const goTo = (index: number) =>
    setActiveIndex((index + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    if (paused) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(
      () => setActiveIndex((i) => (i + 1) % TESTIMONIALS.length),
      AUTOPLAY_DELAY
    );
    return () => window.clearInterval(interval);
  }, [activeIndex, paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="glass relative overflow-hidden p-8 md:p-12 lg:p-14">
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-neon-purple/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-neon-cyan/15 blur-3xl"
          aria-hidden="true"
        />

        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={active.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative grid gap-8 lg:grid-cols-[220px_1fr] lg:items-center lg:gap-14"
          >
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-neon-cyan via-neon-blue to-neon-purple p-[3px] shadow-glow-purple md:h-52 md:w-52">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-panel">
                  {active.photo ? (
                    <Image
                      src={`${basePath}${active.photo}`}
                      alt={`Portrait of ${active.name}`}
                      fill
                      sizes="208px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="flex h-full items-center justify-center font-display text-4xl font-bold text-white">
                      {initials(active.name)}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <span
                className="font-display text-6xl leading-none text-neon-purple"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="-mt-4 font-display text-xl font-medium leading-relaxed text-white md:text-2xl lg:min-h-[7rem] lg:text-[1.65rem]">
                {active.quote}
              </blockquote>
              <figcaption className="mt-6">
                <p className="text-base font-semibold text-white">
                  {active.name}
                </p>
                <p className="mt-1 text-sm text-neon-cyan">{active.role}</p>
              </figcaption>
            </div>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous testimonial"
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-glow-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-3" role="tablist" aria-label="Choose a testimonial">
          {TESTIMONIALS.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={testimonial.name}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Read ${testimonial.name}'s story`}
                onClick={() => goTo(index)}
                className={`relative h-12 w-12 overflow-hidden rounded-full border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan md:h-14 md:w-14 ${
                  isActive
                    ? "scale-110 border-neon-cyan opacity-100 shadow-glow-cyan"
                    : "border-white/15 opacity-50 hover:opacity-90"
                }`}
              >
                {testimonial.photo ? (
                  <Image
                    src={`${basePath}${testimonial.photo}`}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center bg-panel font-display text-sm font-bold text-white">
                    {initials(testimonial.name)}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next testimonial"
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-glow-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

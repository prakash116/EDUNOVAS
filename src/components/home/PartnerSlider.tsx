"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PartnerCard from "@/components/cards/PartnerCard";
import { PARTNERS } from "@/data/site";

const AUTOPLAY_DELAY = 3500;

export default function PartnerSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = useCallback((nextIndex: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const normalizedIndex =
      (nextIndex + PARTNERS.length) % PARTNERS.length;
    const slide = slider.children[normalizedIndex] as HTMLElement | undefined;
    if (!slide) return;

    slider.scrollTo({
      left: slide.offsetLeft - slider.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(normalizedIndex);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(
      () => goToSlide(activeIndex + 1),
      AUTOPLAY_DELAY
    );
    return () => window.clearInterval(interval);
  }, [activeIndex, goToSlide]);

  const syncActiveSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = Array.from(slider.children) as HTMLElement[];
    const sliderLeft = slider.scrollLeft + slider.offsetLeft;
    const closestSlide = slides.reduce((closest, slide, index) => {
      const distance = Math.abs(slide.offsetLeft - sliderLeft);
      return distance < closest.distance ? { index, distance } : closest;
    }, { index: 0, distance: Number.POSITIVE_INFINITY });

    setActiveIndex(closestSlide.index);
  };

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        onScroll={syncActiveSlide}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Company mentors, advisors, alumni and academic partners"
      >
        {PARTNERS.map((partner, index) => (
          <div
            key={`${partner.name}-${partner.relationship}`}
            className="min-w-[84%] snap-start sm:min-w-[46%] lg:min-w-[30%] xl:min-w-[22%]"
          >
            <PartnerCard {...partner} index={index} />
          </div>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-y-3 left-0 hidden w-16 bg-gradient-to-r from-void to-transparent sm:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-3 right-0 hidden w-16 bg-gradient-to-l from-void to-transparent sm:block"
        aria-hidden="true"
      />

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          aria-label="Show previous partner"
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-glow-cyan"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <p className="min-w-20 text-center text-xs font-semibold tracking-[0.18em] text-slate-500">
          <span className="text-neon-cyan">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>{" "}
          / {String(PARTNERS.length).padStart(2, "0")}
        </p>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          aria-label="Show next partner"
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-glow-cyan"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

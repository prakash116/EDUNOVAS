"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Horizontal scroll-snap carousel with autoplay, prev/next controls and a
 * position counter. Autoplay pauses on hover/focus and when the user prefers
 * reduced motion.
 */
export default function SnapCarousel<T>({
  items,
  renderItem,
  getKey,
  itemClassName,
  ariaLabel,
  autoplayDelay = 3500,
}: {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T, index: number) => string;
  itemClassName: string;
  ariaLabel: string;
  autoplayDelay?: number;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goToSlide = useCallback(
    (nextIndex: number) => {
      const slider = sliderRef.current;
      if (!slider || items.length === 0) return;

      const normalizedIndex = (nextIndex + items.length) % items.length;
      const slide = slider.children[normalizedIndex] as HTMLElement | undefined;
      if (!slide) return;

      slider.scrollTo({
        left: slide.offsetLeft - slider.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(normalizedIndex);
    },
    [items.length]
  );

  useEffect(() => {
    if (paused) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(
      () => goToSlide(activeIndex + 1),
      autoplayDelay
    );
    return () => window.clearInterval(interval);
  }, [activeIndex, autoplayDelay, goToSlide, paused]);

  const syncActiveSlide = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = Array.from(slider.children) as HTMLElement[];
    const sliderLeft = slider.scrollLeft + slider.offsetLeft;
    const closestSlide = slides.reduce(
      (closest, slide, index) => {
        const distance = Math.abs(slide.offsetLeft - sliderLeft);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    );

    setActiveIndex(closestSlide.index);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={sliderRef}
        onScroll={syncActiveSlide}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label={ariaLabel}
      >
        {items.map((item, index) => (
          <div
            key={getKey(item, index)}
            className={`snap-start ${itemClassName}`}
          >
            {renderItem(item, index)}
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
          aria-label="Show previous"
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-glow-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <p className="min-w-20 text-center text-xs font-semibold tracking-[0.18em] text-slate-500">
          <span className="text-neon-cyan">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>{" "}
          / {String(items.length).padStart(2, "0")}
        </p>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          aria-label="Show next"
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-glow-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

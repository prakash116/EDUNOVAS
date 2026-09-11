"use client";

import Image from "next/image";
import SnapCarousel from "@/components/ui/SnapCarousel";
import { CLASSROOM_PHOTOS } from "@/data/site";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ClassroomGallery() {
  return (
    <SnapCarousel
      items={CLASSROOM_PHOTOS}
      getKey={(photo) => photo.src}
      itemClassName="min-w-[88%] sm:min-w-[62%] lg:min-w-[44%]"
      ariaLabel="Photos from EDUNOVAS webinars, workshops and classrooms"
      autoplayDelay={4000}
      renderItem={(photo, index) => (
        <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-panel shadow-glass">
          <Image
            src={`${basePath}${photo.src}`}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 44vw, (min-width: 640px) 62vw, 88vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            priority={index < 2}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-void/80 via-void/10 to-transparent"
            aria-hidden="true"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium leading-snug text-white md:p-6">
            {photo.caption}
          </figcaption>
        </figure>
      )}
    />
  );
}

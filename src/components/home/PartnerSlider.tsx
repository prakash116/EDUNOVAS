"use client";

import PartnerCard from "@/components/cards/PartnerCard";
import SnapCarousel from "@/components/ui/SnapCarousel";
import { PARTNERS } from "@/data/site";

export default function PartnerSlider() {
  return (
    <SnapCarousel
      items={PARTNERS}
      getKey={(partner) => `${partner.name}-${partner.relationship}`}
      itemClassName="min-w-[84%] sm:min-w-[46%] lg:min-w-[30%] xl:min-w-[22%]"
      ariaLabel="Company mentors, advisors, alumni and academic partners"
      renderItem={(partner, index) => (
        <PartnerCard {...partner} index={index} />
      )}
    />
  );
}

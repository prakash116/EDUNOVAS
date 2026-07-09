import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import PartnerCard from "@/components/cards/PartnerCard";
import Reveal from "@/components/motion/Reveal";
import { PARTNERS } from "@/data/site";

export const metadata: Metadata = { title: "Partners & Collaborations" };

const SUPPORT_AREAS = [
  { icon: "🧑‍🏫", title: "Training", text: "Industry experts co-deliver programs, bringing real production experience into every cohort." },
  { icon: "🛠️", title: "Workshops", text: "Partners sponsor and co-host campus workshops, hackathons and technology showcases." },
  { icon: "💼", title: "Hiring", text: "Partner companies hire directly from our talent pool — interviews, internships and full-time roles." },
  { icon: "📁", title: "Live Projects", text: "Students work on real partner projects, building portfolios with genuine industry impact." },
  { icon: "🔭", title: "Technology Exposure", text: "Early access to tools, platforms and industry practices students won't find in textbooks." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners & Collaborations"
        title="An Ecosystem of"
        highlight="Industry Leaders"
        subtitle="Our partner network powers everything from curriculum to careers — companies that train with us, build with us and hire from us."
      />

      {/* Partner logos */}
      <section className="section !pt-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map((partner, i) => (
            <PartnerCard
              key={partner.name}
              name={partner.name}
              domain={partner.domain}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* How partners support */}
      <section className="section">
        <SectionHeading
          eyebrow="How Partners Power Us"
          title="Five Ways Our Partners Create Impact"
          subtitle="Partnership here isn't a logo on a page — it's active involvement in training, hiring and building."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 0.08}>
              <div className="glass glass-hover h-full p-7">
                <span className="text-3xl">{area.icon}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {area.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {area.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Become a Partner"
        subtitle="Join our ecosystem — sponsor workshops, access trained talent and shape next-gen engineering education."
        primaryLabel="Partner With Us"
        primaryHref="/contact"
        secondaryLabel="See Placement Outcomes"
        secondaryHref="/placements"
      />
    </>
  );
}

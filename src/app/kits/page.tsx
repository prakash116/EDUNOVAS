import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import ProductCard from "@/components/cards/ProductCard";
import Reveal from "@/components/motion/Reveal";
import { KITS } from "@/data/site";

export const metadata: Metadata = { title: "Robot Kits & Hardware Kits" };

const KIT_PERKS = [
  { icon: "📦", title: "Everything Included", text: "All components, cables and tools in one premium box." },
  { icon: "📘", title: "Guided Projects", text: "Step-by-step project books from first blink to full builds." },
  { icon: "💬", title: "Builder Support", text: "Community and mentor support whenever you're stuck." },
  { icon: "🎓", title: "Course Compatible", text: "Every kit pairs with a matching program and certificate." },
];

export default function KitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Robot Kits & Hardware"
        title="Premium Kits for"
        highlight="Hands-On Engineering"
        subtitle="From your first line-follower to vision-guided robotic arms — professional-grade robot kits and hardware development kits designed for learning by building."
      />

      <section className="section !pt-4">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {KITS.map((kit, i) => (
            <ProductCard key={kit.name} kit={kit} index={i} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="Why Our Kits"
          title="More Than a Box of Parts"
          subtitle="Every kit is a complete learning experience — hardware, curriculum and support included."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {KIT_PERKS.map((perk, i) => (
            <Reveal key={perk.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full p-6 text-center">
                <span className="text-3xl">{perk.icon}</span>
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{perk.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Bulk Orders for Colleges & Labs"
        subtitle="Special institutional pricing on kit bundles for classrooms, labs and workshops."
        primaryLabel="Request Bulk Quote"
        primaryHref="/contact"
        secondaryLabel="See College Plans"
        secondaryHref="/membership"
      />
    </>
  );
}

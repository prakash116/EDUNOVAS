import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import PricingCard from "@/components/cards/PricingCard";
import Reveal from "@/components/motion/Reveal";
import { PLANS } from "@/data/site";

export const metadata: Metadata = { title: "Membership Plans" };

const INCLUDED = [
  { icon: "🎓", label: "Course Access" },
  { icon: "🤖", label: "Kit Discounts" },
  { icon: "🛠️", label: "Workshop Access" },
  { icon: "🧑‍🏫", label: "Mentor Support" },
  { icon: "📁", label: "Project Guidance" },
  { icon: "📜", label: "Certificates" },
  { icon: "💼", label: "Placement Support" },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership Plans"
        title="One Membership,"
        highlight="Unlimited Building"
        subtitle="Choose the plan that fits your journey — from individual learners to entire institutions. Every plan unlocks courses, kits, mentors and career support."
      />

      <section className="section !pt-4">
        <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
          {INCLUDED.map((item) => (
            <span
              key={item.label}
              className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-slate-300"
            >
              <span>{item.icon}</span>
              {item.label}
            </span>
          ))}
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="FAQ"
          title="Membership, Answered"
        />
        <div className="mx-auto grid max-w-4xl gap-4">
          {[
            {
              q: "Can I switch plans anytime?",
              a: "Yes — upgrade instantly at any time; the difference is pro-rated to your billing cycle.",
            },
            {
              q: "Do kit discounts apply to all kits?",
              a: "Member discounts apply across the entire kit catalog, including advanced robotics kits.",
            },
            {
              q: "How does the College Plan work?",
              a: "One license covers your department or club — we handle onboarding, workshops and faculty support on campus.",
            },
            {
              q: "Is placement support guaranteed?",
              a: "Pro and institutional members get interview prep, portfolio reviews and direct referrals to our hiring partners.",
            },
          ].map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.06}>
              <div className="glass glass-hover p-6">
                <h3 className="font-display font-bold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Start Your Membership Today"
        subtitle="Join a community of builders with full access to courses, kits, mentors and placements."
        primaryLabel="Get Started"
        primaryHref="/contact"
        secondaryLabel="Compare Programs"
        secondaryHref="/programs"
      />
    </>
  );
}

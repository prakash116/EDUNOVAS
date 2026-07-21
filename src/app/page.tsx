import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import CourseCard from "@/components/cards/CourseCard";
import ProductCard from "@/components/cards/ProductCard";
import PartnerSlider from "@/components/home/PartnerSlider";
import Reveal from "@/components/motion/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import { COURSES, KITS } from "@/data/site";

export const metadata: Metadata = { title: "Home" };

const PILLARS = [
  {
    icon: "🤖",
    title: "Robotics & Automation",
    text: "Build real robots with hands-on kits — from line followers to vision-guided robotic arms.",
  },
  {
    icon: "🧠",
    title: "Artificial Intelligence",
    text: "Train neural networks, deploy computer vision and ship real AI projects that matter.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    text: "Master modern cloud platforms, DevOps pipelines and scalable infrastructure.",
  },
  {
    icon: "🔧",
    title: "Hardware Development",
    text: "PCB design, embedded firmware and product prototyping — idea to production.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />

      {/* Pillars */}
      <section className="section">
        <SectionHeading
          eyebrow="What We Teach"
          title="Four Pillars of Future Technology"
          subtitle="Practical, project-first learning tracks engineered for the skills industry actually hires for."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full p-7">
                <span className="text-3xl">{pillar.icon}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      <section className="section">
        <SectionHeading
          eyebrow="Programs"
          title="Industry-Ready Courses"
          subtitle="From beginner bootcamps to advanced engineering tracks — every program ships with real projects."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {COURSES.slice(0, 4).map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <GlowButton href="/programs" variant="ghost">
            View All Programs →
          </GlowButton>
        </Reveal>
      </section>

      {/* Featured kits */}
      <section className="section">
        <SectionHeading
          eyebrow="Hardware"
          title="Robot Kits Built for Builders"
          subtitle="Premium learning kits with everything you need — components, code and guided projects."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {KITS.slice(0, 3).map((kit, i) => (
            <ProductCard key={kit.name} kit={kit} index={i} />
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <GlowButton href="/kits" variant="ghost">
            Browse All Kits →
          </GlowButton>
        </Reveal>
      </section>

      {/* Partners strip */}
      <section className="section">
        <SectionHeading
          eyebrow="Ecosystem"
          title="Backed by Industry Partners"
          subtitle="Organizations that power our training, hiring, academic collaborations and real-world project pipelines."
        />
        <PartnerSlider />
      </section>

      <CTASection
        title="Ready to Build the Future?"
        subtitle="Join 1,000+ students learning robotics, AI and next-gen technology the hands-on way."
        primaryLabel="Explore Courses"
        primaryHref="/programs"
        secondaryLabel="Talk to Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import CourseCard from "@/components/cards/CourseCard";
import ProductCard from "@/components/cards/ProductCard";
import PartnerSlider from "@/components/home/PartnerSlider";
import Reveal from "@/components/motion/Reveal";
import GlowButton from "@/components/ui/GlowButton";
import { COURSES, KITS, ORGANIZATION_GROUPS } from "@/data/site";

export const metadata: Metadata = { title: "Home" };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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

      {/* Learning in action */}
      <section className="section !pb-8">
        <div className="glass grid overflow-hidden rounded-3xl lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="relative min-h-80 lg:min-h-[480px]">
            <Image
              src={`${basePath}/images/students-learning-robotics-ai.webp`}
              alt="University students learning robotics and artificial intelligence in an innovation lab"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-void/40"
              aria-hidden="true"
            />
          </Reveal>
          <Reveal className="flex flex-col justify-center p-8 md:p-12" delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
              Learning in Action
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
              Students Learn Robotics &amp; AI by Building
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              Learners program autonomous robots, integrate sensors and apply
              AI vision models in collaborative, mentor-led lab sessions.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Real Hardware", "AI Projects", "Expert Mentorship"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neon-cyan/20 bg-neon-cyan/[0.06] px-4 py-2 text-xs font-medium text-neon-cyan"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

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
          eyebrow="Our Ecosystem"
          title="Mentors, Advisors & Academic Partners"
          subtitle="Company mentors, expert advisors, alumni networks and partner colleges supporting practical learning and career outcomes."
        />
        <PartnerSlider />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ORGANIZATION_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.08}>
              <div className="glass h-full p-6 md:p-7">
                <h3 className="font-display text-xl font-bold text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.organizations.map((organization) => (
                    <span
                      key={organization.name}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300"
                    >
                      {organization.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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

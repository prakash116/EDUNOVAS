import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Reveal from "@/components/motion/Reveal";
import { TESTIMONIALS } from "@/data/site";

export const metadata: Metadata = { title: "Placements & Success" };

const SUPPORT = [
  { icon: "🧭", title: "Career Support", text: "Personal career roadmaps, resume engineering and role targeting with dedicated mentors." },
  { icon: "🎤", title: "Interview Preparation", text: "Mock technical interviews, HR rounds and company-specific preparation sprints." },
  { icon: "📁", title: "Project Portfolio Building", text: "Ship 3–5 real hardware and software projects that make your profile impossible to ignore." },
  { icon: "🧪", title: "Internship Support", text: "Internship placements with partner companies to build real industry experience early." },
  { icon: "🔗", title: "Industry Connections", text: "Career exposure supported by company mentors, expert advisors and an alumni network spanning leading institutions." },
  { icon: "📜", title: "Verified Certification", text: "Industry-recognized certificates that validate hands-on skills, not just attendance." },
];

export default function PlacementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Placements & Success"
        title="From Learner to"
        highlight="Hired Engineer"
        subtitle="1,000+ students trained with a 95% placement success rate. Our career engine turns hands-on skills into offers — through portfolios, interview prep and direct industry connections."
      />

      {/* Headline stats */}
      <section className="section !pt-4">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { value: "95%", label: "Placement Success Rate", note: "of career-track students placed" },
            { value: "1,000+", label: "Students Trained", note: "across campuses and cohorts" },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="glass glass-hover relative overflow-hidden p-10 text-center">
                <div className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full bg-neon-purple/20 blur-[80px]" />
                <p className="text-gradient font-display text-6xl font-bold">
                  {stat.value}
                </p>
                <p className="mt-3 font-display text-lg font-bold text-white">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Career support */}
      <section className="section">
        <SectionHeading
          eyebrow="Career Engine"
          title="End-to-End Placement Support"
          subtitle="Every career-track learner gets a complete pipeline from skills to offer letter."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SUPPORT.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="glass glass-hover h-full p-7">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <SectionHeading
          eyebrow="Success Stories"
          title="Students Who Built Their Way In"
          subtitle="Real outcomes from real builders across our robotics, AI, IoT and cloud programs."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} {...testimonial} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        title="Your Success Story Starts Here"
        subtitle="Join a program with built-in placement support and start building your portfolio today."
        primaryLabel="Explore Career Tracks"
        primaryHref="/programs"
        secondaryLabel="Talk to a Mentor"
        secondaryHref="/contact"
      />
    </>
  );
}

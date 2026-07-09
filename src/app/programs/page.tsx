import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CTASection from "@/components/ui/CTASection";
import CourseCard from "@/components/cards/CourseCard";
import Reveal from "@/components/motion/Reveal";
import { COURSES } from "@/data/site";

export const metadata: Metadata = { title: "Programs & Courses" };

export default function ProgramsPage() {
  const categories = Array.from(new Set(COURSES.map((c) => c.category)));

  return (
    <>
      <PageHero
        eyebrow="Programs & Courses"
        title="Master the Technologies"
        highlight="Shaping Tomorrow"
        subtitle="Robotics, AI, cloud computing, IoT, hardware development, automation, embedded systems and future technology — every program is project-driven and industry-aligned."
      />

      <section className="section !pt-4">
        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="glass rounded-full px-4 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-neon-cyan/40 hover:text-neon-cyan"
            >
              {category}
            </span>
          ))}
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {COURSES.map((course, i) => (
            <CourseCard key={course.title} course={course} index={i} />
          ))}
        </div>
      </section>

      <CTASection
        title="Not Sure Which Program Fits You?"
        subtitle="Talk to our mentors — we'll map your goals to the right learning track in one free session."
        primaryLabel="Get Free Guidance"
        primaryHref="/contact"
        secondaryLabel="View Membership Plans"
        secondaryHref="/membership"
      />
    </>
  );
}

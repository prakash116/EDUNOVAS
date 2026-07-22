import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Workshops & Training" };

const PAST_WORKSHOPS = [
  {
    college: "K.R. Mangalam University",
    topic: "Hands-On Robotics & Automation Workshop",
    detail:
      "Two-day intensive where students built and programmed autonomous robots from our starter kits — ending with a live robo-race showcase.",
    students: "200+ students",
  },
  {
    college: "Sharda University",
    topic: "AI & Computer Vision Bootcamp",
    detail:
      "Full-day AI vision workshop — students trained object-detection models and deployed them on real edge hardware.",
    students: "150+ students",
  },
];

const UPCOMING = [
  { title: "Drone Technology Workshop", when: "Coming Soon", tag: "New" },
  { title: "IoT Smart Campus Challenge", when: "Coming Soon", tag: "Hands-On" },
  { title: "Embedded Systems Masterclass", when: "Coming Soon", tag: "Advanced" },
];

const EXPERIENCE = [
  { icon: "🧑‍🎓", title: "Student Participation", text: "High-energy cohorts of 100–300 students per campus event." },
  { icon: "🔧", title: "Hands-On Training", text: "Every student builds on real hardware — no spectator seats." },
  { icon: "📜", title: "Certification", text: "Co-branded participation and merit certificates for every attendee." },
  { icon: "🏆", title: "Competitions", text: "Robo-races, hackathons and demo days that turn learning into wins." },
];

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshops & Training"
        title="Campus Workshops That Students"
        highlight="Never Forget"
        subtitle="We bring robots, AI hardware and expert trainers to your campus — delivering immersive, hands-on technology experiences from a single day to full semester programs."
      />

      {/* Past workshops */}
      <section className="section !pt-4">
        <SectionHeading
          eyebrow="Past Workshops"
          title="Proven on Real Campuses"
          subtitle="Successfully conducted hands-on workshops at K.R. Mangalam University and Sharda University."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {PAST_WORKSHOPS.map((workshop, i) => (
            <Reveal key={workshop.college} delay={i * 0.1}>
              <div className="glass glass-hover h-full overflow-hidden">
                {/* Gallery placeholder */}
                <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-neon-blue/20 via-neon-violet/20 to-neon-pink/20">
                  <span className="text-5xl">🎥</span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-void/80 px-3 py-1 text-[11px] font-semibold text-neon-cyan backdrop-blur">
                    Gallery Placeholder
                  </span>
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">
                    {workshop.college}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {workshop.topic}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {workshop.detail}
                  </p>
                  <p className="mt-4 inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                    👥 {workshop.students} participated
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className="section">
        <SectionHeading
          eyebrow="Upcoming Workshops"
          title="What's Coming Next"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {UPCOMING.map((event, i) => (
            <Reveal key={event.title} delay={i * 0.08}>
              <div className="glass glass-hover flex h-full flex-col p-6">
                <span className="self-start rounded-full bg-neon-purple/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neon-purple">
                  {event.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">📅 {event.when}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <SectionHeading
          eyebrow="The Experience"
          title="What a Workshop Looks Like"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full p-6 text-center">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 font-display text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Book a Workshop for Your College"
        subtitle="Bring hands-on robotics and AI training to your campus — we handle kits, trainers and certification."
        primaryLabel="Book a Workshop"
        primaryHref="/contact"
        secondaryLabel="View Partnership Options"
        secondaryHref="/partnerships"
      />
    </>
  );
}

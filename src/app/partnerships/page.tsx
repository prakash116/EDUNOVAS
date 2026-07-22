import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import Reveal from "@/components/motion/Reveal";
import { ACADEMIC_PARTNERS } from "@/data/site";

export const metadata: Metadata = { title: "College Partnerships" };

const BENEFITS = [
  { icon: "🎓", title: "Skill Development Programs", text: "Semester-aligned, credit-friendly technology tracks for your students." },
  { icon: "🔬", title: "Lab Setup", text: "Turnkey robotics, AI and IoT labs — hardware, curriculum and training included." },
  { icon: "🛠️", title: "Workshop Support", text: "Regular hands-on workshops, hackathons and demo days on your campus." },
  { icon: "🧑‍🏫", title: "Student Training", text: "Expert-led cohorts with kits, projects and certification for every student." },
  { icon: "💼", title: "Placement Assistance", text: "Direct access to our hiring partner network for your graduating students." },
  { icon: "🚀", title: "Innovation Programs", text: "Incubation support, project mentorship and innovation cell development." },
];

const STEPS = [
  { step: "01", title: "Discovery Call", text: "We understand your department goals, student strengths and infrastructure." },
  { step: "02", title: "Program Design", text: "A custom skill-development roadmap mapped to your academic calendar." },
  { step: "03", title: "MOU Signing", text: "A formal collaboration agreement covering training, labs and placements." },
  { step: "04", title: "Launch & Scale", text: "Workshops begin, labs go live and outcomes are tracked every semester." },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="College Partnerships"
        title="Academic Collaborations That"
        highlight="Transform Campuses"
        subtitle="We collaborate with Sharda University, K.R. Mangalam University and NGF College — bringing hands-on technology education, labs and placement pipelines directly into academia."
      />

      {/* MOU highlight */}
      <section className="section !pt-4">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 text-center md:p-14">
            <div className="pointer-events-none absolute -top-20 right-10 h-56 w-56 rounded-full bg-neon-cyan/15 blur-[90px]" />
            <span className="text-4xl">🤝</span>
            <h2 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
              3 Partner Colleges — and Growing
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">
              Our partner-college network supports skill development, lab
              infrastructure, workshops and student placement programs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {ACADEMIC_PARTNERS.map((partner) => (
                  <span
                    key={partner.name}
                    className="glass rounded-full px-5 py-2 text-sm font-medium text-slate-300"
                  >
                    {partner.name}
                  </span>
                ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Benefits */}
      <section className="section">
        <SectionHeading
          eyebrow="Partnership Benefits"
          title="What Your Institution Gets"
          subtitle="A complete technology-education ecosystem — delivered and maintained by our team."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 3) * 0.08}>
              <div className="glass glass-hover h-full p-7">
                <span className="text-3xl">{benefit.icon}</span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <SectionHeading
          eyebrow="How It Works"
          title="From First Call to Full Collaboration"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.1}>
              <div className="glass glass-hover h-full p-6">
                <span className="text-gradient font-display text-4xl font-bold">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Collaborate With Us"
        subtitle="Let's design a technology skill-development program for your institution — MOU to measurable outcomes."
        primaryLabel="Start a Collaboration"
        primaryHref="/contact"
        secondaryLabel="Book a Campus Workshop"
        secondaryHref="/workshops"
      />
    </>
  );
}

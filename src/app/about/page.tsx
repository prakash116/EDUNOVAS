import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import Reveal from "@/components/motion/Reveal";
import { STATS } from "@/data/site";

export const metadata: Metadata = { title: "About Us" };

const VALUES = [
  {
    icon: "🎯",
    title: "Our Mission",
    text: "To make world-class robotics, AI and next-gen technology education practical, affordable and accessible — turning every curious student into a confident builder.",
  },
  {
    icon: "🔭",
    title: "Our Vision",
    text: "A generation of engineers who don't just study technology — they create it. We envision every campus with a hands-on innovation lab powered by our kits and curriculum.",
  },
  {
    icon: "⚡",
    title: "Why We Started",
    text: "Classrooms were full of theory but empty of hardware. We started to close that gap — replacing slides with soldering irons, and exams with real, working machines.",
  },
  {
    icon: "🌍",
    title: "Our Impact",
    text: "1,000+ students trained, 95% placement success, collaborations with 3 colleges and a growing network of company mentors, advisors and alumni.",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Practical-First Training",
    text: "Every concept is taught through building. Students spend 70% of program time hands-on with hardware and code.",
  },
  {
    title: "Hands-On Kits",
    text: "Purpose-built robot and hardware kits ship with every program, so learning continues beyond the classroom.",
  },
  {
    title: "Industry-Focused Courses",
    text: "Curriculum designed with hiring partners — the skills we teach are the skills companies interview for.",
  },
  {
    title: "Career Growth Engine",
    text: "Portfolio projects, interview preparation, internships and placement support built into every learner journey.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A Next-Generation EdTech Company for"
        highlight="Hands-On Builders"
        subtitle="We are a next-generation EdTech platform focused on practical learning in robotics, artificial intelligence, cloud computing, IoT and new-age technologies — where students learn by building, not memorizing."
      />

      <section className="section !pt-4">
        <div className="grid gap-5 md:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full p-8">
                <span className="text-3xl">{value.icon}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-400">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeading
          eyebrow="What Makes Us Different"
          title="Built Around Real Skills, Real Careers"
          subtitle="Four commitments that shape every program, workshop and kit we ship."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="glass glass-hover h-full p-6">
                <span className="text-gradient font-display text-3xl font-bold">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">
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

      <section className="section !py-10">
        <Reveal>
          <div className="glass grid grid-cols-2 gap-6 rounded-3xl p-8 text-center md:grid-cols-4 md:p-12">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-gradient font-display text-3xl font-bold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection
        title="Learn It by Building It"
        subtitle="Explore our programs or bring hands-on technology training to your campus."
        primaryLabel="Explore Programs"
        primaryHref="/programs"
        secondaryLabel="Partner With Us"
        secondaryHref="/partnerships"
      />
    </>
  );
}

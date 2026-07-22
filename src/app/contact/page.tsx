import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/motion/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = { title: "Contact & Enquiry" };

const CHANNELS = [
  {
    icon: "📧",
    title: "Email Us",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Replies within 24 hours",
  },
  {
    icon: "📞",
    title: "Call Us",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    note: "Mon–Sat, 10 AM – 7 PM IST",
  },
  {
    icon: "📍",
    title: "Visit Us",
    value: "Innovation Hub, Tech Park",
    href: undefined,
    note: "Address placeholder",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact / Enquiry"
        title="Let's Build Something"
        highlight="Together"
        subtitle="Whether you want a robot kit, a course seat, a campus workshop or a full institutional partnership — tell us what you need and we'll take it from there."
      />

      <section className="section !pt-4">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact channels */}
          <div className="space-y-4 lg:col-span-2">
            {CHANNELS.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 0.08}>
                <a
                  href={channel.href}
                  aria-disabled={!channel.href}
                  className={`glass flex items-start gap-4 p-6 ${
                    channel.href ? "glass-hover" : "pointer-events-none"
                  }`}
                >
                  <span className="text-2xl">{channel.icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-white">
                      {channel.title}
                    </h3>
                    <p className="mt-1 text-sm text-neon-cyan">{channel.value}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{channel.note}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            {/* WhatsApp CTA */}
            <Reveal delay={0.24}>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-500/90 to-emerald-600/90 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-8px_rgba(16,185,129,0.6)]"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    💬 Chat on WhatsApp
                  </h3>
                  <p className="mt-1 text-sm text-emerald-100">
                    Fastest way to reach us — instant replies
                  </p>
                </div>
                <span className="text-2xl text-white transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="glass p-6">
                <h3 className="font-display font-bold text-white">
                  For Colleges &amp; Companies
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Looking for MOUs, lab setup, bulk kits or hiring partnerships?
                  Mention it in your enquiry — our partnerships team will
                  respond directly.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

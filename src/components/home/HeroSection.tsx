"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { SITE } from "@/data/site";

const RobotScene = dynamic(() => import("@/components/three/RobotScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <div className="h-40 w-40 animate-pulse-slow rounded-full bg-neon-violet/20 blur-2xl" />
    </div>
  ),
});

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-neon-violet/25 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-6">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-neon-cyan">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-cyan" />
              Next-Gen Technology Learning Platform
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl xl:text-6xl"
          >
            Build the Future with{" "}
            <span className="text-gradient">Robotics, AI</span> &amp; Next-Gen
            Technology Learning.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
          >
            Hands-on programs in robotics, artificial intelligence, cloud
            computing and hardware development — powered by real kits, expert
            mentors and industry-driven curriculum built for tomorrow&apos;s
            engineers.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <GlowButton href="/programs">Explore Courses →</GlowButton>
            <GlowButton href="/kits" variant="ghost">
              Buy Robot Kits
            </GlowButton>
            <GlowButton href="/partnerships" variant="secondary">
              Partner With Us
            </GlowButton>
          </motion.div>

          <motion.p variants={item} className="mt-8 text-sm text-slate-500">
            Trusted by <span className="text-slate-300">1,000+ students</span>,{" "}
            <span className="text-slate-300">3 partner colleges</span> and a{" "}
            <span className="text-slate-300">mentor network of 15+ organizations</span>
            {" "}— {SITE.name}.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative h-[380px] sm:h-[460px] lg:h-[560px]"
        >
          <RobotScene />
          <div className="pointer-events-none absolute inset-x-8 bottom-2 mx-auto h-10 max-w-sm rounded-full bg-neon-cyan/15 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

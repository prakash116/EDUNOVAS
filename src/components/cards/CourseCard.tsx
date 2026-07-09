"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Course } from "@/data/site";

export default function CourseCard({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass glass-hover group flex flex-col p-6"
    >
      <div
        className={`h-1 w-16 rounded-full bg-gradient-to-r ${course.accent}`}
      />
      <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
        {course.category}
      </span>
      <h3 className="mt-2 font-display text-xl font-bold text-white">
        {course.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
        {course.description}
      </p>

      <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
        <span className="glass rounded-full px-3 py-1">⏱ {course.duration}</span>
        <span className="glass rounded-full px-3 py-1">📈 {course.level}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {course.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <Link
        href="/contact"
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r ${course.accent} px-5 py-2.5 text-sm font-semibold text-white opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-glow-blue`}
      >
        View Program →
      </Link>
    </motion.article>
  );
}

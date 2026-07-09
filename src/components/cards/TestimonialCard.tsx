"use client";

import { motion } from "framer-motion";

export default function TestimonialCard({
  name,
  role,
  quote,
  index,
}: {
  name: string;
  role: string;
  quote: string;
  index: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass glass-hover flex flex-col p-7"
    >
      <span className="font-display text-4xl leading-none text-neon-purple">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 font-display text-sm font-bold text-white">
          {name.split(" ").map((n) => n[0]).join("")}
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-neon-cyan">{role}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Plan } from "@/data/site";

export default function PricingCard({
  plan,
  index,
}: {
  plan: Plan;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`glass relative flex flex-col p-7 ${
        plan.featured
          ? "border-neon-purple/50 shadow-glow-purple"
          : "glass-hover"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow-purple">
          Most Popular
        </span>
      )}

      <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
      <p className="mt-1.5 text-xs text-slate-500">{plan.audience}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-gradient font-display text-4xl font-bold">
          {plan.price}
        </span>
        <span className="text-sm text-slate-500">{plan.period}</span>
      </div>

      <ul className="mt-7 flex-1 space-y-3">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5 text-sm text-slate-300">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neon-cyan/15 text-[10px] text-neon-cyan">
              ✓
            </span>
            {benefit}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className={`mt-8 rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 hover:scale-[1.03] ${
          plan.featured
            ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-glow-purple"
            : "glass text-white hover:border-neon-cyan/40 hover:shadow-glow-cyan"
        }`}
      >
        {plan.price === "Custom" ? "Talk to Us" : "Get Started"}
      </Link>
    </motion.article>
  );
}

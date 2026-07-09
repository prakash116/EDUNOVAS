"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Kit } from "@/data/site";

export default function ProductCard({
  kit,
  index,
}: {
  kit: Kit;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass glass-hover group flex flex-col overflow-hidden"
    >
      {/* Image placeholder */}
      <div
        className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${kit.accent} bg-opacity-20`}
        style={{ opacity: 0.95 }}
      >
        <div className="absolute inset-0 bg-void/70" />
        <span className="relative text-5xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
          🤖
        </span>
        {kit.tag && (
          <span className="absolute right-3 top-3 rounded-full bg-void/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neon-cyan backdrop-blur">
            {kit.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-white">{kit.name}</h3>
        <ul className="mt-4 flex-1 space-y-2">
          {kit.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="mt-0.5 text-neon-cyan">✦</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-slate-500">
              Starting at
            </p>
            <p className="font-display text-2xl font-bold text-white">
              {kit.price}
            </p>
          </div>
          <Link
            href="/contact"
            className={`rounded-full bg-gradient-to-r ${kit.accent} px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-glow-cyan`}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

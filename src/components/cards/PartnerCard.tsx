"use client";

import { motion } from "framer-motion";

export default function PartnerCard({
  name,
  domain,
  index,
}: {
  name: string;
  domain: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="glass glass-hover group flex flex-col items-center justify-center px-6 py-10 text-center"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 font-display text-2xl font-bold text-white transition-all duration-300 group-hover:from-neon-cyan/40 group-hover:to-neon-purple/40 group-hover:shadow-glow-cyan">
        {name.charAt(0)}
      </span>
      <h3 className="mt-5 font-display text-lg font-bold text-white">{name}</h3>
      <p className="mt-1.5 text-xs uppercase tracking-widest text-slate-500">
        {domain}
      </p>
    </motion.div>
  );
}

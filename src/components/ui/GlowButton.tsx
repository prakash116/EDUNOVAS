"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const styles = {
  primary:
    "bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple text-white shadow-glow-blue",
  secondary:
    "glass text-white hover:border-neon-purple/50 hover:shadow-glow-purple",
  ghost:
    "border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-glow-cyan",
} as const;

export default function GlowButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Link
        href={href}
        className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-shadow duration-300 ${styles[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

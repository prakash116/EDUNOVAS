"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PartnerCard({
  name,
  domain,
  logo,
  index,
}: {
  name: string;
  domain: string;
  logo: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="glass glass-hover group flex h-full flex-col items-center justify-center p-5 text-center"
    >
      <div className="relative h-24 w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_12px_35px_-18px_rgba(34,211,238,0.55)] transition-shadow duration-300 group-hover:shadow-glow-cyan">
        <Image
          src={`${basePath}${logo}`}
          alt={`${name} logo`}
          fill
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
          className="object-contain p-3"
        />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-white">{name}</h3>
      <p className="mt-1.5 text-xs uppercase tracking-widest text-slate-500">
        {domain}
      </p>
    </motion.div>
  );
}

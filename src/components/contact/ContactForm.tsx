"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INTEREST_OPTIONS = [
  "Buy Robot Kit",
  "Join Course",
  "College Collaboration",
  "Workshop Booking",
  "Placement Partnership",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none backdrop-blur transition-all duration-300 focus:border-neon-cyan/60 focus:shadow-glow-cyan";

export default function ContactForm() {
  const [interest, setInterest] = useState(INTEREST_OPTIONS[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glass p-6 md:p-9">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center py-16 text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-neon-cyan/15 text-3xl shadow-glow-cyan">
              ✓
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold text-white">
              Enquiry Received!
            </h3>
            <p className="mt-3 max-w-sm text-sm text-slate-400">
              Thanks for reaching out. Our team will get back to you within 24
              hours. (Demo form — no data was sent.)
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 rounded-full border border-neon-cyan/40 px-6 py-2.5 text-sm font-semibold text-neon-cyan transition-all hover:bg-neon-cyan/10"
            >
              Send Another Enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                I&apos;m interested in
              </p>
              <div className="flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setInterest(option)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                      interest === option
                        ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-white shadow-glow-purple"
                        : "glass text-slate-400 hover:text-white"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <input required placeholder="Full Name" className={inputClass} />
              <input
                required
                type="email"
                placeholder="Email Address"
                className={inputClass}
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className={inputClass}
              />
              <select className={inputClass} defaultValue="Student">
                <option>Student</option>
                <option>College</option>
                <option>Company</option>
              </select>
            </div>

            <textarea
              rows={4}
              placeholder="Tell us more about what you're looking for..."
              className={inputClass}
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple py-3.5 font-display text-sm font-bold tracking-wide text-white shadow-glow-blue"
            >
              Submit Enquiry →
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS } from "@/data/site";

const REFUND_EMAIL = "edunovateam@gmail.com";

/** Turns the refund e-mail address inside an answer into a mailto link. */
function renderAnswer(answer: string) {
  const parts = answer.split(REFUND_EMAIL);
  if (parts.length === 1) return answer;
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={`mailto:${REFUND_EMAIL}`}
          className="font-semibold text-neon-cyan underline-offset-4 hover:underline"
        >
          {REFUND_EMAIL}
        </a>
      )}
    </span>
  ));
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div
            key={faq.question}
            className={`glass transition-colors duration-300 ${
              isOpen ? "border-neon-cyan/40 bg-white/[0.06]" : "hover:border-white/20"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
            >
              <span className="font-display text-base font-semibold text-white md:text-lg">
                {faq.question}
              </span>
              <Plus
                aria-hidden="true"
                className={`h-5 w-5 shrink-0 text-neon-cyan transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              id={panelId}
              role="region"
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-slate-400 md:text-base">
                  {renderAnswer(faq.answer)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

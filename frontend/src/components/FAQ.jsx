import { useState } from "react";
import { useReveal } from "../lib/useReveal";

const FAQS = [
  {
    q: "WHAT DOES IT COST?",
    a: "The residency is $120 per person for all 20 days — fully inclusive of stay, meals, co-working access, workshops, and curated dinners. Residents cover their own travel to Delhi NCR. Spots are merit-based.",
  },
  {
    q: "DO I NEED TO BE INCORPORATED?",
    a: "No. We care that you're shipping something, not your paperwork. Pre-incorporation builders are welcome if you're actively building.",
  },
  {
    q: "WHAT ARE THE DATES?",
    a: "The next cohort runs over 20 consecutive days. Exact dates are shared with shortlisted applicants. Plan to be fully present — no half-attendance.",
  },
  {
    q: "CAN CO-FOUNDERS APPLY TOGETHER?",
    a: "Yes, but each co-founder applies individually. Each gets evaluated on their own merit. We rarely accept full teams — diversity of company makes the house work.",
  },
  {
    q: "WHAT'S THE SELECTION PROCESS?",
    a: "Application → async video → 30 min founder call → reference checks. We're optimising for hungry, kind, ship-obsessed builders.",
  },
  {
    q: "WHO RUNS THE RESIDENCY?",
    a: "A team of repeat founders and operators. Curation is intentional, the network is hand-picked, and the bar stays high cohort over cohort.",
  },
];

export default function FAQ() {
  const ref = useReveal();
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 sm:py-32 px-5 sm:px-8"
      style={{ background: "#0d3b4f" }}
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="font-pixel text-[#d5f04e] text-xs">{">"}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e] tracking-widest">
            06 // FAQ
          </span>
        </div>

        <h2 className="reveal pixel-title text-[28px] sm:text-[40px] md:text-[56px] leading-[1.15] mb-12">
          QUESTIONS?<br />
          <span className="text-[#d5f04e]">WE HAVE ANSWERS.</span>
        </h2>

        <div className="reveal-stagger space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                data-testid={`faq-item-${i}`}
                className={`bg-[#082b3b] pixel-border-thin transition-all duration-300`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  data-testid={`faq-toggle-${i}`}
                  className="w-full text-left px-6 sm:px-7 py-5 sm:py-6 flex items-center justify-between gap-4 group"
                >
                  <span className="font-pixel text-[11px] sm:text-sm text-[#f0e8d2] group-hover:text-[#d5f04e] transition-colors">
                    {item.q}
                  </span>
                  <span
                    className={`font-pixel text-[#d5f04e] text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 sm:px-7 pb-6 border-t-2 border-[#d5f04e]/30 pt-5">
                    <p className="font-dot text-[#c9c0a8] text-lg sm:text-xl leading-snug">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

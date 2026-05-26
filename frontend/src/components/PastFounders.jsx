import { useReveal } from "../lib/useReveal";

const TESTIMONIALS = [
  {
    quote:
      "20 days at the house compressed what would've been 2 years of founder lessons. The honest feedback loops are unreal.",
    name: "ARJUN MEHTA",
    role: "FOUNDER · DEVTOOLS, YC W23",
  },
  {
    quote:
      "I shipped more in three weeks than I had in the previous quarter. Living with 14 other builders changes everything.",
    name: "PRIYA SHARMA",
    role: "FOUNDER · CONSUMER AI",
  },
  {
    quote:
      "Not a bootcamp. Not an accelerator. A house full of people who refuse to let you ship mediocre work. Closest thing I've felt to a co-founder, twelve times over.",
    name: "RAHUL VERMA",
    role: "REPEAT FOUNDER · FINTECH",
  },
  {
    quote:
      "The operator dinners alone were worth it. But the real magic was the 2 AM kitchen conversations.",
    name: "ANANYA RAO",
    role: "FOUNDER · CLIMATE TECH",
  },
];

const LOGOS = [
  "ATOM LABS",
  "PIXELFORGE",
  "NEONSTACK",
  "QUEST AI",
  "BOLT.IO",
  "RUNWAY",
  "BASECASE",
  "STARLINE",
];

export default function PastFounders() {
  const ref = useReveal();
  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
      style={{ background: "#082b3b" }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="font-pixel text-[#d5f04e] text-xs">{">"}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e] tracking-widest">
            05 // ALUMNI
          </span>
        </div>

        <h2 className="reveal pixel-title text-[28px] sm:text-[40px] md:text-[56px] leading-[1.15] mb-12 max-w-4xl">
          WORDS FROM<br />
          <span className="text-[#d5f04e]">PAST RESIDENTS.</span>
        </h2>

        <div className="reveal-stagger grid md:grid-cols-2 gap-5 mb-16">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-[#0d3b4f] p-7 sm:p-8 pixel-border-thin">
              <div className="font-pixel text-[#d5f04e] text-2xl mb-4">"</div>
              <p className="font-dot text-[#f0e8d2] text-lg sm:text-xl leading-snug mb-6">{t.quote}</p>
              <div className="border-t-2 border-[#d5f04e]/30 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#d5f04e] flex items-center justify-center font-pixel text-[#082b3b] text-xs">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-pixel text-[#f0e8d2] text-[10px]">{t.name}</div>
                  <div className="font-pixel text-[#c9c0a8] text-[9px] mt-1">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo marquee */}
      <div className="reveal">
        <p className="font-pixel text-[10px] text-[#c9c0a8] text-center mb-6 tracking-widest">
          BUILDING AT
        </p>
        <div className="relative overflow-hidden border-y-4 border-[#d5f04e] py-6 bg-[#0d3b4f]">
          <div className="marquee-track flex gap-12 whitespace-nowrap">
            {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (
              <span
                key={i}
                className="font-pixel text-[#f0e8d2] text-sm sm:text-base flex items-center gap-12"
              >
                {l}
                <span className="text-[#d5f04e]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useReveal } from "../lib/useReveal";

const INCLUDED = [
  { icon: "🏠", title: "STAY", desc: "Private bedroom in the villa for all 20 days" },
  { icon: "🍳", title: "MEALS", desc: "Chef-prepped breakfast, lunch & dinner daily" },
  { icon: "⚡", title: "WORKSPACE", desc: "24/7 co-working floor, fibre + backup power" },
  { icon: "🏊", title: "AMENITIES", desc: "Pool, gym, rooftop deck, call booths" },
  { icon: "🎤", title: "WORKSHOPS", desc: "Founder-led sessions on distro, fundraising, hiring" },
  { icon: "🍽️", title: "DINNERS", desc: "Curated operator & investor dinners" },
];

const SURPRISES = [
  "SURPRISE GUEST DROP-INS",
  "MIDNIGHT KITCHEN JAMS",
  "UNANNOUNCED FIELD TRIPS",
  "SECRET ROOFTOP SESSIONS",
];

export default function Pricing() {
  const ref = useReveal();
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
      style={{ background: "#082b3b" }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="font-pixel text-[#d5f04e] text-xs">{">"}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e] tracking-widest">
            05 // PRICING
          </span>
        </div>

        <h2 className="reveal pixel-title text-[28px] sm:text-[40px] md:text-[56px] leading-[1.15] mb-4 max-w-4xl">
          ONE FLAT FEE.<br />
          <span className="text-[#d5f04e]">NO HIDDEN COSTS.</span>
        </h2>
        <p className="reveal font-dot text-xl text-[#c9c0a8] max-w-2xl mb-14">
          Stay, food, workspace, workshops — everything you need for 20 days, covered.
        </p>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 mb-14">
          {/* Price card */}
          <div
            data-testid="price-card"
            className="reveal relative bg-[#0d3b4f] p-6 sm:p-10 pixel-border flex flex-col justify-between min-h-[360px] sm:min-h-[420px]"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-pixel text-[#082b3b] bg-[#d5f04e] px-2 py-1 text-[10px]">
                  P1
                </span>
                <span className="font-pixel text-[#f0e8d2] text-xs">RESIDENCY PASS</span>
              </div>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-pixel text-[#d5f04e] text-[48px] sm:text-[64px] leading-none">
                  $120
                </span>
                <span className="font-pixel text-[#c9c0a8] text-xs">/ PERSON</span>
              </div>
              <p className="font-pixel text-[10px] text-[#f0e8d2] tracking-widest mb-8">
                FULL 20-DAY RESIDENCY · ALL-INCLUSIVE
              </p>

              <div className="dot-divider mb-7" />

              <ul className="space-y-3">
                {[
                  "20 nights private stay",
                  "60 chef-prepped meals",
                  "24/7 co-working access",
                  "Pool, gym & wellness",
                  "All workshops & dinners",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3 font-dot text-[#f0e8d2] text-lg">
                    <span className="text-[#d5f04e]">✓</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-pixel text-[10px] text-[#c9c0a8] tracking-widest mt-8 leading-relaxed">
              ▸ TRAVEL TO DELHI NCR NOT INCLUDED.<br />
              ▸ ACCEPTANCE IS MERIT-BASED.
            </p>
          </div>

          {/* Whats included grid */}
          <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {INCLUDED.map((item) => (
              <div
                key={item.title}
                className="bg-[#0d3b4f] p-6 pixel-border-thin flex items-start gap-4 hover:translate-y-[-3px] transition-transform duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center text-2xl bg-[#082b3b] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-pixel text-[#d5f04e] text-[11px] mb-2 tracking-widest">
                    {item.title}
                  </h4>
                  <p className="font-dot text-[#f0e8d2] text-base sm:text-lg leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Surprises strip */}
        <div className="reveal relative bg-[#0d3b4f] p-7 sm:p-9 pixel-border-thin overflow-hidden">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🎁</span>
              <div>
                <p className="font-pixel text-[#d5f04e] text-[10px] tracking-widest mb-2">
                  + BONUS
                </p>
                <h3 className="font-pixel text-[#f0e8d2] text-sm sm:text-base leading-tight">
                  SURPRISES,<br />UNANNOUNCED.
                </h3>
              </div>
            </div>

            <div>
              <p className="font-dot text-[#f0e8d2] text-lg sm:text-xl leading-snug mb-5">
                We've planned plenty. We've also left room for the unexpected — drop-ins from
                founders you admire, late-night jams, surprise field trips. The best moments
                are never on the calendar.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {SURPRISES.map((s) => (
                  <span
                    key={s}
                    className="font-pixel text-[10px] text-[#082b3b] bg-[#d5f04e] px-3 py-2"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

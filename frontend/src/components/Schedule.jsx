import { useReveal } from "../lib/useReveal";
import ddLogoWhite from "../assets/logos/dd_logo_h_white.png";
import nodeopsLogo from "../assets/logos/Nodeops.png";

const PHASES = [
  {
    days: "DAY 01—05",
    title: "ARRIVAL & ALIGNMENT",
    items: [
      "Welcome dinner + house rules",
      "1:1 founder intros & problem statements",
      "Goal-setting for the residency",
      "First city run + Delhi tour",
    ],
  },
  {
    days: "DAY 06—12",
    title: "BUILD WEEK",
    items: [
      "Daily ship standups at 9AM",
      "Pair-programming & co-working blocks",
      "Workshops: distribution, fundraising, hiring",
      "Operator office hours",
    ],
  },
  {
    days: "DAY 13—17",
    title: "FEEDBACK GAUNTLET",
    items: [
      "Closed-door pitch reviews",
      "Customer interview sprints",
      "Investor dinners (curated)",
      "Live user testing sessions",
    ],
  },
  {
    days: "DAY 18—20",
    title: "SHIP & FAREWELL",
    items: [
      "Internal demo night",
      "Public showcase with the community",
      "Commitments for the next 90 days",
      "Farewell rooftop dinner",
    ],
  },
];

export default function Schedule() {
  const ref = useReveal();
  return (
    <section
      id="schedule"
      data-testid="schedule-section"
      className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
      style={{ background: "#0d3b4f" }}
    >
      {/* Decorative floating badges */}
      <div className="hidden lg:block absolute top-24 left-6 z-10 float-badge">
        <div className="pixel-border-thin px-4 py-3 flex items-center gap-3" style={{ background: "#082b3b" }}>
          <img src={ddLogoWhite} alt="Datadog" className="w-20 object-contain" />
          <div>
            <span className="font-pixel text-[8px] text-[#c9c0a8] block">CREDITS</span>
            <span className="font-pixel text-[10px] text-[#d5f04e]">Datadog</span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-48 right-6 z-10 float-badge-delayed">
        <div className="pixel-border-thin px-4 py-3 flex items-center gap-3" style={{ background: "#082b3b" }}>
          <img src={nodeopsLogo} alt="NodeOps" className="w-14 object-contain" />
          <div>
            <span className="font-pixel text-[8px] text-[#c9c0a8] block">DEPLOYMENT</span>
            <span className="font-pixel text-[10px] text-[#d5f04e]">NodeOps</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20" ref={ref}>
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="font-pixel text-[#d5f04e] text-xs">{">"}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e] tracking-widest">
            02 // THE 20 DAYS
          </span>
        </div>

        <h2 className="reveal pixel-title text-[28px] sm:text-[40px] md:text-[56px] leading-[1.15] mb-4 max-w-4xl">
          INSIDE THE<br />
          <span className="text-[#d5f04e]">RESIDENCY.</span>
        </h2>
        <p className="reveal font-dot text-xl text-[#c9c0a8] max-w-2xl mb-16">
          Four phases. Twenty days. One mission — ship something real.
        </p>

        <div className="reveal-stagger grid md:grid-cols-2 gap-6 lg:gap-8">
          {PHASES.map((p, i) => (
            <div
              key={p.days}
              data-testid={`schedule-phase-${i}`}
              className="relative bg-[#082b3b] p-7 sm:p-9 pixel-border-thin group hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#d5f04e] flex items-center justify-center font-pixel text-[#082b3b] text-[10px]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className="font-pixel text-[10px] text-[#d5f04e] tracking-widest">{p.days}</span>
              <h3 className="font-pixel text-[#f0e8d2] text-sm sm:text-base mt-3 mb-5">{p.title}</h3>
              <ul className="space-y-3">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-dot text-[#f0e8d2] text-lg">
                    <span className="text-[#d5f04e] mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

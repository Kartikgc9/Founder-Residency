import { useReveal } from "../lib/useReveal";

const PROFILES = [
  {
    title: "TECHNICAL FOUNDERS",
    items: ["Shipping or have shipped a product", "Comfortable in code", "Pre-seed or seed stage"],
  },
  {
    title: "REPEAT BUILDERS",
    items: ["Second-time or third-time founder", "Currently working on the next idea", "Hungry for sharper feedback"],
  },
  {
    title: "SOLO OPERATORS",
    items: ["Building solo, looking for tribe", "Bias toward shipping over decks", "Open to brutal honesty"],
  },
];

const NOT_FOR = [
  "Idea-only stage with no shipping habit",
  "Looking for a paid bootcamp",
  "Investor-tour shoppers",
];

export default function WhoShouldApply() {
  const ref = useReveal();
  return (
    <section
      id="founders"
      data-testid="who-section"
      className="relative py-24 sm:py-32 px-5 sm:px-8"
      style={{ background: "#0d3b4f" }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="font-pixel text-[#d5f04e] text-xs">{">"}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e] tracking-widest">
            04 // WHO IS THIS FOR
          </span>
        </div>

        <h2 className="reveal pixel-title text-[28px] sm:text-[40px] md:text-[56px] leading-[1.15] mb-12 max-w-4xl">
          ARE YOU<br />
          <span className="text-[#d5f04e]">PLAYER ONE?</span>
        </h2>

        <div className="reveal-stagger grid md:grid-cols-3 gap-5 mb-16">
          {PROFILES.map((p, i) => (
            <div key={p.title} className="bg-[#082b3b] p-7 pixel-border-thin">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-pixel text-[#082b3b] bg-[#d5f04e] px-2 py-1 text-[10px]">
                  P-{i + 1}
                </span>
                <h3 className="font-pixel text-[#f0e8d2] text-xs sm:text-sm">{p.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {p.items.map((it) => (
                  <li key={it} className="font-dot text-[#f0e8d2] text-lg flex gap-2.5">
                    <span className="text-[#d5f04e]">+</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal bg-[#082b3b] p-7 sm:p-10 pixel-border-thin">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-pixel text-[#0d3b4f] bg-[#ff6b35] px-2 py-1 text-[10px]">!</span>
            <h3 className="font-pixel text-[#f0e8d2] text-xs sm:text-sm">PROBABLY NOT FOR YOU IF</h3>
          </div>
          <ul className="grid sm:grid-cols-3 gap-4">
            {NOT_FOR.map((n) => (
              <li key={n} className="font-dot text-[#c9c0a8] text-lg flex gap-2.5">
                <span className="text-[#ff6b35]">×</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

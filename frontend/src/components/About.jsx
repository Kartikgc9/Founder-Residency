import { useReveal } from "../lib/useReveal";

export default function About() {
  const ref = useReveal();
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 sm:py-32 px-5 sm:px-8"
      style={{ background: "#082b3b" }}
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="font-pixel text-[#d5f04e] text-xs">{">"}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e] tracking-widest">
            01 // ABOUT
          </span>
        </div>

        <h2 className="reveal pixel-title text-[28px] sm:text-[40px] md:text-[56px] leading-[1.15] mb-12 max-w-4xl">
          A HOUSE OF<br />
          <span className="text-[#d5f04e]">BUILDERS.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="reveal">
            <p className="font-dot text-xl sm:text-2xl text-[#f0e8d2] leading-relaxed">
              Founders Residency is a <span className="text-[#d5f04e]">20-day live-in program</span> for
              15 ambitious early-stage founders. We pick one villa, fill it with hungry builders,
              and let proximity do what coffee chats cannot.
            </p>
            <p className="font-dot text-lg sm:text-xl text-[#c9c0a8] leading-relaxed mt-6">
              No demo days. No fluff. Just shipping, sparring, and the kind of conversations
              that happen at 2 AM over chai.
            </p>
          </div>

          <div className="reveal space-y-5">
            {[
              { k: "01", t: "LIVE TOGETHER", d: "20 days, one villa, 15 founders. Deep relationships, not shallow networking." },
              { k: "02", t: "BUILD IN PUBLIC", d: "Daily ship reviews. Brutal feedback. Real progress." },
              { k: "03", t: "OPERATOR ACCESS", d: "Curated dinners with operators, angels, and seasoned founders." },
            ].map((b) => (
              <div key={b.k} className="border-l-4 border-[#d5f04e] pl-5 py-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-pixel text-[#d5f04e] text-xs">{b.k}</span>
                  <span className="font-pixel text-[#f0e8d2] text-xs sm:text-sm">{b.t}</span>
                </div>
                <p className="font-dot text-[#c9c0a8] text-lg leading-snug">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

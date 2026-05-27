import { PixelDataDog, PixelNodeOps, PixelStar } from "./PixelArt";
import { useReveal } from "../lib/useReveal";

const PARTNERS = [
  {
    name: "Datadog",
    role: "CREDITS PARTNER",
    desc: "Cloud-scale monitoring and security platform powering our observability stack.",
    icon: PixelDataDog,
    color: "#7c3aed",
  },
  {
    name: "NodeOps",
    role: "DEPLOYMENT PARTNER",
    desc: "CreateOS by NodeOps — deploy AI-generated apps in seconds. No DevOps required.",
    icon: PixelNodeOps,
    color: "#0ea5e9",
  },
];

export default function Credits() {
  const ref = useReveal();
  return (
    <section
      id="credits"
      data-testid="credits-section"
      className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
      style={{ background: "#061f2c" }}
    >
      <PixelStar className="absolute top-16 right-12 star" size={10} />
      <PixelStar className="absolute bottom-16 left-12 star" size={8} />
      <PixelStar className="absolute top-1/2 left-1/4 star" size={6} />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="font-pixel text-[#d5f04e] text-xs">{">"}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e] tracking-widest">
            06 // CREDITS & PARTNERS
          </span>
        </div>

        <h2 className="reveal pixel-title text-[28px] sm:text-[40px] md:text-[56px] leading-[1.15] mb-6 max-w-4xl">
          POWERED BY{" "}
          <span className="text-[#d5f04e]">GREAT PARTNERS</span>
        </h2>

        <p className="reveal font-dot text-lg sm:text-xl text-[#c9c0a8] max-w-2xl mb-14">
          We collaborate with industry-leading platforms to make the residency
          seamless — from monitoring to deployment.
        </p>

        <div className="reveal-stagger grid md:grid-cols-2 gap-6 mb-16">
          {PARTNERS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="bg-[#082b3b] p-8 pixel-border-thin flex flex-col sm:flex-row items-start gap-6"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center pixel-border-thin shrink-0"
                  style={{ background: "#0d3b4f" }}
                >
                  <Icon className="w-10 h-10" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="font-pixel text-[10px] px-2 py-1"
                      style={{ background: p.color, color: "#061f2c" }}
                    >
                      {p.role}
                    </span>
                  </div>
                  <h3 className="font-pixel text-[#f0e8d2] text-sm sm:text-base">
                    {p.name}
                  </h3>
                  <p className="font-dot text-[#c9c0a8] text-lg leading-snug">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal text-center">
          <div className="inline-block pixel-border-thin px-8 py-5 bg-[#082b3b]">
            <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e]">
              ▸ MORE CREDITS PARTNERS IN THE PIPELINE
            </span>
            <span className="font-pixel text-[#d5f04e] text-xs blink ml-2">_</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { PixelRocket, PixelStar } from "./PixelArt";
import { useReveal } from "../lib/useReveal";

const LUMA_URL = "https://luma.com/rc82wk5k";

export default function Apply() {
  const ref = useReveal();
  return (
    <section
      id="apply"
      data-testid="apply-section"
      className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
      style={{ background: "#082b3b" }}
    >
      {/* decorative stars */}
      <PixelStar className="absolute top-12 left-10 star" size={12} />
      <PixelStar className="absolute top-32 right-16 star" size={10} />
      <PixelStar className="absolute bottom-20 left-20 star" size={14} />
      <PixelStar className="absolute bottom-40 right-32 star" size={8} />

      <div className="max-w-5xl mx-auto text-center relative z-10" ref={ref}>
        <div className="reveal flex justify-center mb-8">
          <PixelRocket className="w-14 sm:w-20" />
        </div>

        <p className="reveal font-pixel text-[10px] sm:text-xs text-[#d5f04e] tracking-widest mb-6">
          {">"} 07 // APPLY
        </p>

        <h2 className="reveal pixel-title text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] mb-8">
          20 DAYS<br />
          THAT CAN <span className="text-[#d5f04e]">CHANGE</span><br />
          EVERYTHING.
        </h2>

        <p className="reveal font-dot text-xl sm:text-2xl text-[#c9c0a8] max-w-2xl mx-auto mb-12">
          Applications are reviewed on a rolling basis. The bar is high, the seats are 15, and
          the next cohort fills fast.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-5 items-center justify-center">
          <a
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="apply-cta-btn"
            className="pixel-btn !text-sm !py-5 !px-8"
          >
            APPLY ON LUMA ▸
          </a>
          <a
            href="mailto:residency@example.com"
            data-testid="apply-contact-btn"
            className="pixel-btn-outline !text-xs !py-4 !px-6"
          >
            CONTACT US
          </a>
        </div>

        <div className="reveal mt-16 inline-block bg-[#0d3b4f] px-6 py-4 pixel-border-thin">
          <span className="font-pixel text-[10px] text-[#f0e8d2]">
            <span className="text-[#d5f04e]">▸</span> 15 SEATS · 20 DAYS · ONE HOUSE
          </span>
        </div>
      </div>
    </section>
  );
}

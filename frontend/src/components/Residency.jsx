import { useReveal } from "../lib/useReveal";
import villaNight from "../assets/images/villa-night.jpeg";
import commonLounge from "../assets/images/common-lounge.jpeg";
import poolRecharge from "../assets/images/pool-recharge.jpeg";

const IMAGES = [
  {
    src: villaNight,
    label: "THE VILLA / NIGHT",
    caption: "Three-storey villa lit up after hours. Where late-night sprints happen.",
  },
  {
    src: commonLounge,
    label: "COMMON LOUNGE",
    caption: "Open lounge with workstations, leather seating, and a glass staircase.",
  },
  {
    src: poolRecharge,
    label: "POOL / RECHARGE",
    caption: "Outdoor pool with hill views. Resets, not retreats.",
  },
];

const AMENITIES = [
  "Private bedroom per founder",
  "Co-working floor with 24/7 access",
  "High-speed fibre + backup power",
  "Outdoor pool & lounge",
  "Rooftop dining & sunset deck",
  "Chef-prepped meals × 3 daily",
  "Gym & wellness corner",
  "Soundproofed call booths",
];

export default function Residency() {
  const ref = useReveal();
  return (
    <section
      id="residency"
      data-testid="residency-section"
      className="relative py-24 sm:py-32 px-5 sm:px-8"
      style={{ background: "#082b3b" }}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="reveal flex items-center gap-3 mb-8">
          <span className="font-pixel text-[#d5f04e] text-xs">{">"}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e] tracking-widest">
            03 // THE HOUSE
          </span>
        </div>

        <div className="reveal grid md:grid-cols-[1fr_auto] gap-6 items-end mb-14">
          <h2 className="pixel-title text-[28px] sm:text-[40px] md:text-[56px] leading-[1.15] max-w-3xl">
            THE<br />
            <span className="text-[#d5f04e]">RESIDENCY.</span>
          </h2>
          <p className="font-dot text-xl text-[#c9c0a8] max-w-md">
            A private villa in Delhi NCR. Designed for builders, optimised for serendipity.
          </p>
        </div>

        {/* Big image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-14">
          <ImageTile data={IMAGES[0]} className="lg:col-span-8 lg:row-span-2 aspect-[16/10]" />
          <ImageTile data={IMAGES[1]} className="lg:col-span-4 aspect-[4/3]" />
          <ImageTile data={IMAGES[2]} className="lg:col-span-4 aspect-[4/3]" />
        </div>

        {/* Amenities */}
        <div className="reveal-stagger grid grid-cols-2 md:grid-cols-4 gap-4">
          {AMENITIES.map((a) => (
            <div key={a} className="bg-[#0d3b4f] p-5 pixel-border-thin">
              <p className="font-dot text-[#f0e8d2] text-lg leading-tight">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageTile({ data, className = "" }) {
  return (
    <div
      data-testid={`property-image-${data.label.toLowerCase().replace(/\s+/g, "-")}`}
      className={`relative overflow-hidden pixel-border-thin group ${className}`}
    >
      <img
        src={data.src}
        alt={data.label}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ imageRendering: "auto", filter: "saturate(1.05) contrast(1.02)" }}
      />
      {/* dither / tint overlay */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply"
        style={{
          background:
            "linear-gradient(to top, rgba(8,43,59,0.75) 0%, rgba(8,43,59,0.15) 45%, rgba(8,43,59,0.05) 100%)",
        }}
      />
      {/* tiny noise/pixel grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(213,240,78,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(213,240,78,0.04) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <div className="inline-block bg-[#d5f04e] px-3 py-1 mb-2">
          <span className="font-pixel text-[9px] sm:text-[10px] text-[#082b3b]">{data.label}</span>
        </div>
        <p className="font-dot text-[#f0e8d2] text-base sm:text-lg leading-tight max-w-md">
          {data.caption}
        </p>
      </div>
    </div>
  );
}

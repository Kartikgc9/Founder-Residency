import { PixelIndiaGate, PixelQutub, PixelBuilding, PixelMoon, PixelCloud, PixelStar } from "./PixelArt";
import { useEffect, useState } from "react";
import ddIcon from "../assets/logos/dd_icon_rgb.png";
import nodeopsLogo from "../assets/logos/Nodeops.png";

const LUMA_URL = "https://luma.com/rc82wk5k";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen pt-28 pb-16 sm:pb-24 px-5 sm:px-8 overflow-hidden grain"
      style={{ background: "#0d3b4f" }}
    >
      {/* twinkling stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 28 }).map((_, i) => {
          const top = (i * 37) % 80 + 4;
          const left = (i * 53) % 96 + 2;
          const delay = (i * 0.17) % 2.4;
          return (
            <div
              key={i}
              className="star absolute"
              style={{ top: `${top}%`, left: `${left}%`, animationDelay: `${delay}s` }}
            >
              <PixelStar size={i % 3 === 0 ? 10 : 6} />
            </div>
          );
        })}
      </div>

      {/* clouds */}
      <PixelCloud className="absolute top-[18%] left-[8%] w-20 opacity-70" />
      <PixelCloud className="absolute top-[26%] right-[12%] w-16 opacity-60" />
      <PixelCloud className="absolute top-[34%] left-[42%] w-12 opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* eyebrow */}
        <div
          className={`flex items-center gap-3 mb-7 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          <span className="font-pixel text-[#d5f04e] text-xs">{">"}</span>
          <span className="font-pixel text-[10px] sm:text-xs text-[#f0e8d2] tracking-widest">
            FIRST TIME IN DELHI NCR
          </span>
          <span className="font-pixel text-[#d5f04e] text-xs blink">_</span>
        </div>

        {/* Main pixel title */}
        <div
          className={`relative transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="pixel-title text-[34px] xs:text-[44px] sm:text-[72px] md:text-[110px] lg:text-[148px] leading-[1.05]">
            FOUNDERS
          </h1>
          <div className="flex flex-wrap items-end gap-4 mt-2">
            <h1 className="pixel-title-lime text-[34px] xs:text-[44px] sm:text-[72px] md:text-[110px] lg:text-[148px] leading-[1.05]">
              RESIDENCY
            </h1>
            {/* Pixel A logo */}
            <div className="hidden md:block">
              <svg viewBox="0 0 60 80" className="w-16 md:w-24 lg:w-28" shapeRendering="crispEdges">
                {[
                  "....11....",
                  "....11....",
                  "...1111...",
                  "...1111...",
                  "..111111..",
                  "..11..11..",
                  ".1111111..",
                  ".1111111..",
                  "11....11..",
                  "11....11..",
                ].map((row, y) =>
                  [...row].map((c, x) =>
                    c === "1" ? <rect key={`${x}-${y}`} x={x * 6} y={y * 8} width={6} height={8} fill="#d5f04e" /> : null
                  )
                )}
              </svg>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div
          className={`mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-5 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {["BUILD", "NETWORK", "COLLABORATE", "GROW"].map((w, i) => (
            <div key={w} className="flex items-center gap-3 sm:gap-5">
              <span className="font-pixel text-[#f0e8d2] text-[11px] sm:text-sm md:text-base">{w}</span>
              {i < 3 && <span className="w-2 h-2 bg-[#d5f04e]" />}
            </div>
          ))}
        </div>

        {/* Stats grid + skyline */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
          <div
            className={`space-y-5 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <StatLine icon="📅" label="20 DAYS" />
            <div className="dot-divider max-w-md" />
            <StatLine icon="👥" label="15 FOUNDERS" />
            <div className="dot-divider max-w-md" />
            <StatLine icon="📍" label="DELHI NCR" />
            <div className="dot-divider max-w-md" />
            <StatLine icon="🚀" label="BUILDING THE FUTURE, TOGETHER." />

            <div className="pt-8 flex flex-col sm:flex-row gap-4 items-start">
              <a
                href={LUMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-apply-btn"
                className="pixel-btn"
              >
                APPLY ON LUMA ▸
              </a>
              <a href="#about" data-testid="hero-learn-btn" className="pixel-btn-outline">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* skyline */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative w-full max-w-md flex items-end justify-center">
              <PixelMoon className="absolute -top-8 right-6 w-8 sm:w-12" />
              <div className="flex items-end gap-[2px] sm:gap-1 overflow-x-auto pb-1">
                <PixelBuilding className="w-8 sm:w-14" />
                <PixelBuilding tall className="w-8 sm:w-14" />
                <PixelIndiaGate className="w-20 sm:w-36" />
                <PixelQutub className="w-12 sm:w-20" />
                <PixelBuilding className="w-8 sm:w-14" />
                <PixelBuilding tall className="w-8 sm:w-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating partner badges */}
      <div className="hidden lg:block absolute top-32 right-6 z-20 float-badge">
        <div className="pixel-border-thin px-4 py-3 flex items-center gap-3" style={{ background: "#082b3b" }}>
          <img src={ddIcon} alt="Datadog" className="w-7 h-7 object-contain" />
          <div>
            <span className="font-pixel text-[8px] text-[#c9c0a8] block">CREDITS</span>
            <span className="font-pixel text-[10px] text-[#d5f04e]">Datadog</span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute top-52 right-6 z-20 float-badge-delayed">
        <div className="pixel-border-thin px-4 py-3 flex items-center gap-3" style={{ background: "#082b3b" }}>
          <img src={nodeopsLogo} alt="NodeOps" className="w-14 object-contain" />
          <div>
            <span className="font-pixel text-[8px] text-[#c9c0a8] block">DEPLOYMENT</span>
            <span className="font-pixel text-[10px] text-[#d5f04e]">NodeOps</span>
          </div>
        </div>
      </div>

      {/* Bottom tagline ribbon */}
        <div
          className={`mt-16 sm:mt-24 inline-block transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="pixel-border-thin px-6 py-4 inline-flex items-center gap-3 bg-[#082b3b]">
            <span className="font-pixel text-[10px] sm:text-xs text-[#d5f04e]">
              20 DAYS THAT CAN CHANGE EVERYTHING.
            </span>
            <span className="font-pixel text-[#d5f04e] text-xs blink">▸</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatLine({ icon, label }) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-2xl pixel-border-thin bg-[#082b3b]">
        {icon}
      </div>
      <span className="font-pixel text-[#f0e8d2] text-[11px] sm:text-sm">{label}</span>
    </div>
  );
}

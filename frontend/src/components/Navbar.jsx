import { useState, useEffect } from "react";

const LUMA_URL = "https://luma.com/rc82wk5k";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "ABOUT" },
    { href: "#schedule", label: "SCHEDULE" },
    { href: "#residency", label: "HOUSE" },
    { href: "#founders", label: "FOUNDERS" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md bg-[#082b3b]/85" : "py-5 bg-transparent"
      }`}
      style={{
        borderBottom: scrolled ? "2px solid #d5f04e" : "2px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" data-testid="logo" className="flex items-center gap-3">
          <span className="font-pixel text-[#d5f04e] text-base sm:text-lg leading-none">A</span>
          <span className="font-pixel text-[#f0e8d2] text-[9px] sm:text-[11px] leading-tight">
            FOUNDERS<br/>RESIDENCY
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="font-pixel text-[10px] text-[#f0e8d2] hover:text-[#d5f04e] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#d5f04e] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <a
          href={LUMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-apply-btn"
          className="pixel-btn !py-3 !px-4 !text-[10px]"
        >
          APPLY ▸
        </a>
      </div>
    </header>
  );
}

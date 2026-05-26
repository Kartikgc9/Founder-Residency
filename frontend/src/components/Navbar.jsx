import { useState, useEffect } from "react";

const LUMA_URL = "https://luma.com/rc82wk5k";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
          <span className="font-pixel text-[#f0e8d2] text-[10px] sm:text-[11px] leading-tight">
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

        <div className="flex items-center gap-3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-[#f0e8d2] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#f0e8d2] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-[#f0e8d2] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>

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
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#061f2c]/98 backdrop-blur-md transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <nav className="flex flex-col items-center gap-8 pt-16 pb-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-pixel text-lg text-[#f0e8d2] hover:text-[#d5f04e] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="pixel-btn !py-4 !px-8 !text-sm mt-4 md:hidden"
          >
            APPLY ON LUMA ▸
          </a>
        </nav>
      </div>
    </header>
  );
}

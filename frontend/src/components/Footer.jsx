const LUMA_URL = "https://luma.com/rc82wk5k";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative py-14 px-5 sm:px-8 border-t-4 border-[#d5f04e]"
      style={{ background: "#061f2c" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-pixel text-[#d5f04e] text-2xl">A</span>
              <span className="font-pixel text-[#f0e8d2] text-[11px]">
                FOUNDERS<br/>RESIDENCY
              </span>
            </div>
            <p className="font-dot text-[#c9c0a8] text-lg leading-snug max-w-xs">
              A 20-day live-in program for ambitious early-stage founders. Delhi NCR.
            </p>
          </div>

          <div>
            <p className="font-pixel text-[10px] text-[#d5f04e] mb-4 tracking-widest">EXPLORE</p>
            <ul className="space-y-2">
              {[
                { l: "About", h: "#about" },
                { l: "Schedule", h: "#schedule" },
                { l: "The House", h: "#residency" },
                { l: "Founders", h: "#founders" },
                { l: "FAQ", h: "#faq" },
              ].map((i) => (
                <li key={i.l}>
                  <a
                    href={i.h}
                    className="font-dot text-[#f0e8d2] text-lg hover:text-[#d5f04e] transition-colors"
                  >
                    ▸ {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-pixel text-[10px] text-[#d5f04e] mb-4 tracking-widest">CONNECT</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={LUMA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-luma"
                  className="font-dot text-[#f0e8d2] text-lg hover:text-[#d5f04e] transition-colors"
                >
                  ▸ Apply on Luma
                </a>
              </li>
              <li>
                <a
                  href="mailto:residency@example.com"
                  className="font-dot text-[#f0e8d2] text-lg hover:text-[#d5f04e] transition-colors"
                >
                  ▸ residency@example.com
                </a>
              </li>
              <li>
                <a href="#" className="font-dot text-[#f0e8d2] text-lg hover:text-[#d5f04e] transition-colors">
                  ▸ Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="font-dot text-[#f0e8d2] text-lg hover:text-[#d5f04e] transition-colors">
                  ▸ Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-[#d5f04e]/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-pixel text-[10px] text-[#c9c0a8]">
            © {new Date().getFullYear()} FOUNDERS RESIDENCY
          </p>
          <p className="font-pixel text-[10px] text-[#d5f04e] blink">
            ▸ PRESS START TO BEGIN
          </p>
        </div>
      </div>
    </footer>
  );
}

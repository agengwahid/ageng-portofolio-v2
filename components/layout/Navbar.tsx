"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", url: "#Home" },
  { name: "About", url: "#About" },
  { name: "Portfolio", url: "#Portofolio" },
  { name: "Contact", url: "#Contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scrollspy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const id = NAV_ITEMS[i].url.replace("#", "");
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(NAV_ITEMS[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none flex justify-center px-4">
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 py-1.5 px-2 sm:px-2.5 rounded-full relative bg-[#0a0c0f]/80 backdrop-blur-md border border-white/12 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300"
        >
          {/* Nav Items */}
          <div className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.name;
              const isHovered = hoveredTab === item.name;

              return (
                <a
                  key={item.name}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.name);
                    const el = document.querySelector(item.url);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`relative cursor-pointer text-xs md:text-sm font-medium px-3.5 py-1.5 md:px-4.5 md:py-1.5 rounded-full transition-colors duration-200 select-none ${
                    isActive
                      ? "text-zinc-950 font-semibold"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {/* Formal High-Contrast Active Pill (No Cobalt Blue Glow) */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full -z-10 bg-stone-100 shadow-sm"
                      transition={{ type: "spring", stiffness: 360, damping: 34 }}
                    />
                  )}

                  {/* Hover background pill */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 rounded-full -z-10 bg-white/10"
                      />
                    )}
                  </AnimatePresence>

                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="hidden sm:block h-4 w-px bg-white/15 mx-0.5" />

          {/* Quick Action: CV Download */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full text-stone-100 hover:text-zinc-950 bg-white/10 hover:bg-stone-100 border border-white/15 transition-colors duration-200"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-1.5 rounded-full text-zinc-200 hover:text-white bg-white/5 border border-white/10 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#0a0c0f]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 px-2 mb-2">
                Navigasi
              </p>
              {NAV_ITEMS.map((item) => {
                const isActive = activeTab === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    onClick={() => {
                      setActiveTab(item.name);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between border transition ${
                      isActive
                        ? "text-zinc-950 bg-stone-100 border-stone-100 font-semibold"
                        : "text-zinc-300 hover:text-white bg-white/5 border-white/10"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-zinc-950 bg-stone-100 hover:bg-white transition"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

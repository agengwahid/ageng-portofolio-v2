"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  const [isBlinking, setIsBlinking] = useState(false);

  // Mascot eye blinking animation loop
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 3000);
    return () => clearInterval(blinkInterval);
  }, []);

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
      <header className="fixed top-3 md:top-5 left-0 right-0 z-50 pointer-events-none flex justify-center px-4">
        <nav
          aria-label="Main Navigation"
          className="pointer-events-auto flex items-center gap-1.5 sm:gap-2.5 py-1.5 px-2.5 sm:px-3 rounded-full relative bg-slate-950/60 backdrop-blur-md border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_24px_rgba(0,0,0,0.4)] transition-all duration-300"
        >
          {/* Brand Avatar */}
          <a
            href="#Home"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("Home");
              document.querySelector("#Home")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 pl-1 pr-1.5 py-1 rounded-full group cursor-pointer"
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20 group-hover:border-sky-400 transition-colors">
              <Image
                src="/images/ageng-graduation.jpg"
                alt="Ageng"
                fill
                sizes="28px"
                className="object-cover object-top"
              />
            </div>
            <span className="hidden sm:inline-block text-xs font-bold text-white tracking-wide group-hover:text-sky-300 transition-colors">
              Ageng
            </span>
          </a>

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
                  className={`relative cursor-pointer text-xs md:text-sm font-semibold px-3.5 py-1.5 md:px-5 md:py-2 rounded-full transition-colors duration-200 select-none ${
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]"
                  }`}
                >
                  {/* Active Sliding Pill with Smooth Spring Physics */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full -z-10 bg-[#0284c7] shadow-[0_6px_16px_rgba(2,132,199,0.35)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  {/* Hover background pill */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 rounded-full -z-10 bg-white/10"
                      />
                    )}
                  </AnimatePresence>

                  {/* Mascot Character on top of the active tab */}
                  {isActive && (
                    <motion.div
                      layoutId="anime-mascot"
                      className="absolute -top-11 left-1/2 -translate-x-1/2 pointer-events-none"
                      style={{ filter: "drop-shadow(0 3px 6px rgba(0, 0, 0, 0.4))" }}
                      transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    >
                      <div className="relative w-11 h-11">
                        {/* Mascot Head */}
                        <motion.div
                          className="absolute w-9 h-9 bg-white rounded-full left-1/2 -translate-x-1/2"
                          animate={{ y: [0, -2.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {/* Left Eye */}
                          <motion.div
                            className="absolute w-2 h-2 bg-black rounded-full"
                            style={{ left: "25%", top: "38%" }}
                            animate={{ scaleY: isBlinking ? 0.2 : 1 }}
                            transition={{ duration: 0.15 }}
                          />
                          {/* Right Eye */}
                          <motion.div
                            className="absolute w-2 h-2 bg-black rounded-full"
                            style={{ right: "25%", top: "38%" }}
                            animate={{ scaleY: isBlinking ? 0.2 : 1 }}
                            transition={{ duration: 0.15 }}
                          />
                          {/* Pink Cheeks */}
                          <div
                            className="absolute w-2 h-1.5 bg-pink-300 rounded-full opacity-70"
                            style={{ left: "14%", top: "54%" }}
                          />
                          <div
                            className="absolute w-2 h-1.5 bg-pink-300 rounded-full opacity-70"
                            style={{ right: "14%", top: "54%" }}
                          />
                          {/* Mouth */}
                          <div
                            className="absolute w-3 h-1.5 border-b-2 border-black rounded-full"
                            style={{ left: "34%", top: "58%" }}
                          />
                        </motion.div>

                        {/* Mascot Lower Stand */}
                        <motion.div
                          className="absolute -bottom-0.5 left-1/2 w-3.5 h-3.5 -translate-x-1/2"
                          animate={{ y: [0, 1.5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="w-full h-full bg-white rotate-45 transform origin-center rounded-xs" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}

                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Quick Action: CV Download */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full text-white/90 hover:text-white bg-white/10 hover:bg-[#0284c7] border border-white/15 transition-all duration-200"
          >
            <span>CV</span>
            <Download className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-1.5 rounded-full text-white/80 hover:text-white bg-white/5 border border-white/10"
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
            className="fixed inset-0 z-40 bg-[#07090e]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8"
          >
            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold px-2 mb-2">
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
                        ? "text-white bg-[#0284c7] border-sky-400/50 shadow-lg shadow-sky-950/60"
                        : "text-zinc-300 hover:text-white bg-white/[0.03] border-white/10"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </a>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-lg shadow-sky-950/60 transition"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV / Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

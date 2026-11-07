"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X, Terminal } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
      >
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-2 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-[#0b0f1d]/90 backdrop-blur-xl border-slate-700/60 shadow-[0_8px_32px_rgba(0,0,0,0.45)] shadow-cyan-950/20"
              : "bg-[#0b0f1d]/75 backdrop-blur-lg border-slate-800/80 shadow-lg"
          }`}
        >
          {/* Logo / Avatar */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 px-2 py-1 rounded-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-cyan-500/40 group-hover:border-cyan-400 transition">
              <Image
                src="/images/profile.jpg"
                alt="Muhammad Ageng"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-semibold text-white tracking-wide group-hover:text-cyan-300 transition">
                Ageng Wahid
              </span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-tighter">
                Backend & Cloud
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-slate-900/40 rounded-full border border-slate-800/50">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold bg-gradient-to-r from-cyan-500/30 to-blue-600/30 border border-cyan-500/40 shadow-sm shadow-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Action Button: Download CV */}
          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-cyan-950/80 hover:text-cyan-300 border border-slate-700/70 hover:border-cyan-500/50 transition-all duration-200 shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-full text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-cyan-400" />
              ) : (
                <Menu className="w-4 h-4 text-slate-300" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#05070e]/85 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8 animate-in fade-in duration-200"
        >
          <div className="flex flex-col gap-2">
            <p className="text-[11px] font-mono uppercase tracking-wider text-cyan-400/80 px-4 mb-2">
              Menu Navigasi
            </p>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between border transition ${
                    isActive
                      ? "text-cyan-300 bg-cyan-950/40 border-cyan-500/40"
                      : "text-slate-300 hover:text-white bg-slate-900/40 border-slate-800/60"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-950/40 transition"
            >
              <Download className="w-4 h-4" />
              <span>Download CV / Resume (PDF)</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Status: Open to Opportunities</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


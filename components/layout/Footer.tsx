"use client";

import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#04060b] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-sm font-bold text-white tracking-wide">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Muhammad Ageng Zayem Wahid</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Backend Engineer & Cloud Native Practitioner · Yogyakarta, ID
          </p>
        </div>

        <div className="text-xs text-slate-400 font-mono text-center flex items-center gap-1.5">
          <span>Designed for ultra-performance & zero latency</span>
          <span>·</span>
          <span>Next.js 15 & Tailwind CSS</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-[11px] text-slate-500 font-mono">
        © 2026 Muhammad Ageng Zayem Wahid. All rights reserved.
      </div>
    </footer>
  );
}

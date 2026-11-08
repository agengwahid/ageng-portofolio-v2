"use client";

import { ArrowUp, Terminal, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#02050c] py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-sm font-bold text-white tracking-wide">
            <Terminal className="w-4 h-4 text-[#2c67ed]" />
            <span>Muhammad Ageng Zayem Wahid</span>
          </div>
          <p className="text-xs text-zinc-400 font-mono">
            Backend Engineer & Cloud Native Practitioner · Yogyakarta, ID
          </p>
        </div>

        <div className="text-xs text-zinc-500 font-mono text-center flex items-center gap-2">
          <span>High Performance & Zero Lag</span>
          <span>·</span>
          <span className="text-[#2c67ed]">Designed with Precision</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-zinc-300 hover:text-white bg-white/5 hover:bg-[#2c67ed] border border-white/10 transition-all duration-200 cursor-pointer shadow-sm"
        >
          <span>Kembali ke Atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-zinc-500 font-mono">
        © 2026 Muhammad Ageng Zayem Wahid. All rights reserved.
      </div>
    </footer>
  );
}

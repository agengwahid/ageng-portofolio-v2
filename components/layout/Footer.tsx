"use client";

import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 w-full bg-[#030712] text-zinc-400 py-12 px-4 sm:px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
        {/* Left: Branding & Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-white font-bold text-sm tracking-wide">
            Muhammad Ageng Zayem Wahid, S.Kom
          </p>
          <p className="text-zinc-500">
            © 2026 Ageng Wahid. Dibuat dengan presisi arsitektur Next.js & Tailwind CSS.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/agengwahid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-white transition"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/agengwahid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-white transition"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com/agengwahid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="hover:text-white transition"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top Pill */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-white transition shadow-sm cursor-pointer"
        >
          <span>Kembali ke Atas</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#2c67ed]" />
        </button>
      </div>
    </footer>
  );
}

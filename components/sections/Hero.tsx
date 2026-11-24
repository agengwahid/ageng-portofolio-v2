"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Ensure scroll position resets to top on every reload so dahan is always visible
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      if (!window.location.hash || window.location.hash === "#Home") {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  // Track scroll progress through the 225vh section (identical to Eka Wahyu)
  // Note: Using "0vh start" safely disables Framer Motion's experimental WAAPI ViewTimeline
  // acceleration which suffers from a progress: 1 calculation bug on page load in Chromium/Brave.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0vh start", "end end"],
  });

  // LAYER 5: Dahan di Pinggir (Forest Canopy - hutan.webp)
  // Branches open outward (scale 1x -> 2.3x) framing the screen continuously throughout Home,
  // moving in tandem with parallax, and only fading out at the transition into About (0.75 -> 0.95).
  const canopyScale = useTransform(scrollYProgress, [0, 0.75], [1, 2.3]);
  const canopyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "-14%"]);
  const canopyOpacity = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1, 0]);

  // LAYER 3: Title & Hero Content (High z-index so it stays 100% visible and crisp)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.03]);
  const titleY = useTransform(scrollYProgress, [0, 0.85], [0, -110]);

  // LAYER 1: Deep Sky & Stars Background (img10.svg)
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  // LAYER 2: Distant Snowy Mountain Peaks (img20.svg)
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const mountainScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // LAYER 4 & 4b: Ground Mountain Ridge (img30.svg) & Ageng Transparent Cutout
  // Both move in unison with ground parallax
  const ridgeY = useTransform(scrollYProgress, [0, 1], ["0%", "-48%"]);
  const ridgeScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={containerRef}
      id="Home"
      className="parallax relative w-full h-[225vh] bg-[#030712]"
    >
      {/* Sticky Viewport (h-screen sticky top-0) */}
      <div className="parallax__visuals sticky top-0 w-full h-screen overflow-hidden select-none">
        
        {/* LAYER 1: Deep Sky & Moon (Clean sky without duplicate mountain) */}
        <motion.div
          style={{ y: skyY, transformOrigin: "center bottom" }}
          className="absolute inset-0 w-full h-full will-change-transform z-[0]"
        >
          <img
            src="/images/sky.webp"
            alt="Deep Night Sky and Moon"
            className="w-full h-full object-cover object-[center_15%] select-none pointer-events-none"
          />
        </motion.div>

        {/* LAYER 2: Distant Snowy Mountain Peaks (Single authentic mountain anchored to bottom-0) */}
        <motion.div
          style={{
            y: mountainY,
            scale: mountainScale,
            transformOrigin: "center bottom",
          }}
          className="absolute inset-x-0 bottom-0 h-[75%] sm:h-[82%] md:h-[88%] will-change-transform z-[10] pointer-events-none"
        >
          <img
            src="/img20.svg"
            alt="Snowy Mountain Peaks"
            className="w-full h-full object-cover object-[center_bottom] select-none pointer-events-none"
          />
        </motion.div>

        {/* LAYER 3a: Giant 3D Display Title (Positioned BEHIND Ageng for cinematic spatial depth) */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            y: titleY,
            transformOrigin: "center center",
          }}
          className="absolute inset-x-0 top-[9%] sm:top-[10%] md:top-[12%] flex flex-col items-center justify-start z-[18] px-4 pointer-events-none"
        >
          <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
            {/* Display Title (Bold layout identical to Eka Wahyu, no hero badges) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white uppercase leading-[1.02] drop-shadow-[0_6px_28px_rgba(0,0,0,0.95)] select-none">
              <span className="block">WELCOME TO MY</span>
              <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent mt-0.5">
                PORTOFOLIO
              </span>
            </h1>
          </div>
        </motion.div>

        {/* LAYER 4: Ground Mountain Ridge (img30.svg) */}
        <motion.div
          style={{
            y: ridgeY,
            scale: ridgeScale,
            transformOrigin: "center bottom",
          }}
          className="absolute inset-x-0 bottom-0 h-[44%] sm:h-[50%] md:h-[54%] will-change-transform z-[20] pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Image
              src="/img30.svg"
              alt="Mountain Ground Ridge"
              fill
              priority
              className="object-cover object-[center_top]"
            />
          </div>
          {/* Solid base to seal any valley gaps */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-[#030712] pointer-events-none" />
          <div className="absolute inset-x-0 top-full h-[50vh] bg-[#030712] pointer-events-none" />
        </motion.div>

        {/* LAYER 4b: Ageng's Real Transparent Cutout (Using user's uploaded official graduation photo) */}
        <motion.div
          style={{
            y: ridgeY,
            scale: ridgeScale,
            transformOrigin: "center bottom",
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[25] pointer-events-none"
        >
          <div className="relative drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]">
            <img
              src="/images/ageng-hero.png"
              alt="Muhammad Ageng Zayem Wahid - Wisuda Cutout"
              className="w-[170px] sm:w-[200px] md:w-[230px] lg:w-[260px] h-auto object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* LAYER 3b: Subtitle & Action Buttons (Clean typography, NO badges in Hero) */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            y: titleY,
            transformOrigin: "center center",
          }}
          className="absolute inset-x-0 bottom-6 sm:bottom-10 md:bottom-12 flex flex-col items-center justify-end z-[32] px-4 pointer-events-auto"
        >
          <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center space-y-3">
            {/* Clean Typography */}
            <div className="space-y-1 text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Muhammad Ageng Zayem Wahid
              </p>
              <p className="text-xs sm:text-sm text-zinc-200 font-mono leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] max-w-xl mx-auto">
                Backend Engineer & Cloud Native Practitioner · Bangkit Academy 2024 Google Cloud Graduate · Sarjana Informatika UAD (IPK 3.91 / 4.00 · 3.5 Tahun)
              </p>
            </div>

            {/* Action Buttons (Clean authentic developer blue, no purple slop) */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-3.5 z-40">
              <a
                href="#Portofolio"
                className="px-6 py-3 rounded-xl font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg shadow-[#2563eb]/30 hover:shadow-[#2563eb]/50 transition-[transform,background-color] duration-200 hover:scale-[1.03] active:scale-95 flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Jelajahi Portofolio</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-md transition-[transform,background-color] duration-200 hover:scale-[1.03] active:scale-95 flex items-center gap-2 text-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#38bdf8]" />
                <span>Unduh Resume (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* LAYER 5: Forest Canopy / Dahan di Pinggir (hutan.webp) */}
        {/* Opens outward like parting branches framing the view, persistent across Home */}
        <motion.div
          style={{
            scale: canopyScale,
            y: canopyY,
            opacity: canopyOpacity,
            transformOrigin: "center 40%",
          }}
          className="absolute inset-0 w-full h-full will-change-transform z-[38] pointer-events-none"
        >
          <img
            src="/images/hutan.webp"
            alt="Dahan dan Ranting Hutan Frame"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-bottom pointer-events-none select-none"
          />
        </motion.div>

        {/* Bottom Fade Transition into About (Placed cleanly at z-[15] behind Ageng and text) */}
        <div className="parallax__fade absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-[15]" />
      </div>
    </section>
  );
}

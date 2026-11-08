"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress through the 225vh section (identical to Eka Wahyu)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // LAYER 5: Dahan di Pinggir (Forest Canopy - hutan.webp)
  // "kalau di scrol kebuka atau bergerak": scales outward 1x -> 3.2x and fades out smoothly (progress 0 to 0.25)
  // This creates the exact "dahan kebuka" camera-dolly opening effect.
  const canopyScale = useTransform(scrollYProgress, [0, 0.25], [1, 3.2]);
  const canopyOpacity = useTransform(scrollYProgress, [0, 0.18, 0.25], [1, 0.65, 0]);

  // LAYER 3: Title & Hero Content (High z-index so it stays 100% visible and crisp)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.72, 0.9], [1, 1, 0]);
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
        
        {/* LAYER 1: Deep Sky & Stars Background */}
        <motion.div
          style={{ y: skyY, transformOrigin: "center bottom" }}
          className="absolute inset-0 w-full h-full will-change-transform z-[0]"
        >
          <Image
            src="/img10.svg"
            alt="Sky and Stars"
            fill
            priority
            className="object-cover object-[center_20%]"
          />
        </motion.div>

        {/* LAYER 2: Distant Snowy Mountain Peaks */}
        <motion.div
          style={{
            y: mountainY,
            scale: mountainScale,
            transformOrigin: "center bottom",
          }}
          className="absolute inset-x-0 bottom-[14%] sm:bottom-[12%] h-[60%] sm:h-[70%] will-change-transform z-[10] pointer-events-none"
        >
          <Image
            src="/img20.svg"
            alt="Mountain Peaks"
            fill
            priority
            className="object-cover object-[center_50%]"
          />
        </motion.div>

        {/* Ambient Blue Accent Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] md:w-[850px] h-[380px] bg-gradient-to-b from-[#2c67ed]/20 via-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none z-[15]" />

        {/* LAYER 3a: Giant 3D Display Title (Positioned BEHIND Ageng for cinematic spatial depth) */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            y: titleY,
            transformOrigin: "center center",
          }}
          className="absolute inset-x-0 top-[8%] sm:top-[9%] md:top-[10%] flex flex-col items-center justify-start z-[18] px-4 pointer-events-none"
        >
          <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center space-y-2">
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-xs font-mono text-zinc-200 shadow-xl shadow-black/40 mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">OPEN TO BACKEND & CLOUD OPPORTUNITIES</span>
            </div>

            {/* Display Title (Identical bold layout to Eka Wahyu) */}
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
          className="absolute inset-x-0 bottom-0 h-[38%] sm:h-[44%] md:h-[48%] will-change-transform z-[20] pointer-events-none"
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
          <div className="absolute inset-x-0 top-full h-[50vh] bg-[#030712] pointer-events-none" />
        </motion.div>

        {/* LAYER 4b: Ageng's Real Transparent Cutout (Standing in center, between Title and Subtitle) */}
        <motion.div
          style={{
            y: ridgeY,
            scale: ridgeScale,
            transformOrigin: "center bottom",
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[25] pointer-events-none flex flex-col items-center"
        >
          {/* Subtle Backlight Glow for Clean Integration into Mountain Landscape */}
          <div className="absolute inset-x-6 top-16 bottom-8 bg-[#2c67ed]/25 rounded-full blur-2xl -z-10" />

          <div className="relative drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]">
            <img
              src="/images/ageng-cutout.png"
              alt="Muhammad Ageng Zayem Wahid - Cumlaude Cutout"
              className="w-[185px] sm:w-[215px] md:w-[250px] lg:w-[280px] h-auto object-contain object-bottom"
            />
          </div>

          {/* Floating Distinction Badge beside Ageng */}
          <div className="mt-[-14px] px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] sm:text-xs shadow-2xl flex items-center gap-1.5 z-10">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>S.Kom · IPK 3.91 (Cumlaude Fast-Track)</span>
          </div>
        </motion.div>

        {/* LAYER 3b: Subtitle & Action Buttons (Hovering in foreground for 100% legibility & clickability) */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            y: titleY,
            transformOrigin: "center center",
          }}
          className="absolute inset-x-0 top-[52%] sm:top-[50%] md:top-[48%] flex flex-col items-center justify-start z-[32] px-4 pointer-events-auto"
        >
          <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center space-y-2">
            {/* Subtitle & Bio Hook with subtle glass pill for ultra-sharp reading */}
            <div className="px-5 py-2.5 rounded-2xl bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-2xl space-y-1">
              <p className="text-lg sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
                Muhammad Ageng Zayem Wahid
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed drop-shadow">
                Backend Engineer & Cloud Native Practitioner · Bangkit Academy 2024 Google Cloud Graduate · Sarjana Informatika UAD (IPK 3.91 / 4.00 · 3.5 Tahun)
              </p>
            </div>

            {/* Action Buttons (Matches Eka Wahyu #2c67ed styling) */}
            <div className="pt-1.5 flex flex-wrap items-center justify-center gap-3.5 z-40">
              <a
                href="#Portofolio"
                className="px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] text-white shadow-lg shadow-[#2c67ed]/35 hover:shadow-[#2c67ed]/55 transition-[transform,background-color] duration-200 hover:scale-[1.03] active:scale-95 flex items-center gap-2 text-sm cursor-pointer"
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
                <Download className="w-4 h-4 text-[#2c67ed]" />
                <span>Unduh Resume (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* LAYER 5: Forest Canopy / Dahan di Pinggir (hutan.webp) */}
        {/* When user scrolls, canopy scales outward 1x -> 3.2x and fades away, opening up like branches parting */}
        <motion.div
          style={{
            scale: canopyScale,
            opacity: canopyOpacity,
            transformOrigin: "center 45%",
          }}
          className="absolute inset-0 w-full h-full will-change-transform z-[38] pointer-events-none"
        >
          <Image
            src="/images/hutan.webp"
            alt="Dahan dan Ranting Hutan Frame"
            fill
            priority
            className="w-full h-full object-cover object-bottom"
          />
        </motion.div>

        {/* Bottom Fade Transition into About */}
        <div className="parallax__fade absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent pointer-events-none z-[45]" />
      </div>
    </section>
  );
}

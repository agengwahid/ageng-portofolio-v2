"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll progress through the 225vh section (matches Eka Wahyu exact height)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // LAYER 5: Forest Canopy / Ranting di Pinggir (hutan.svg)
  // Zooms outward from 1x to 4.6x and fades to 0 as user scrolls (0 to 0.22)
  // This recreates the exact "ranting di pinggir terbuka saat di-scroll" animation
  const canopyScale = useTransform(scrollYProgress, [0, 0.22], [1, 4.6]);
  const canopyOpacity = useTransform(scrollYProgress, [0, 0.16, 0.22], [1, 0.5, 0]);

  // LAYER 3: Title & Hero Content
  // Readable at start, moves up with parallax, fades smoothly before About section
  const titleOpacity = useTransform(scrollYProgress, [0, 0.72, 0.9], [1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.04]);
  const titleY = useTransform(scrollYProgress, [0, 0.85], [0, -110]);

  // LAYER 1: Deep Sky & Stars (img10.svg)
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // LAYER 2: Mountain Peaks (img20.svg)
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"]);
  const mountainScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // LAYER 4: Ground Ridge Silhouette (img30.svg - pure mountain ridge, no profile photo)
  const ridgeY = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
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
            alt="Sky and Moon"
            fill
            priority
            className="object-cover object-[center_22%]"
          />
        </motion.div>

        {/* LAYER 2: Distant Mountain Peaks */}
        <motion.div
          style={{
            y: mountainY,
            scale: mountainScale,
            transformOrigin: "center bottom",
          }}
          className="absolute inset-0 w-full h-full will-change-transform z-[10]"
        >
          <Image
            src="/img20.svg"
            alt="Mountain Peaks"
            fill
            priority
            className="object-cover object-[center_52%]"
          />
          <div className="absolute inset-x-0 top-full h-[40vh] bg-[#030712] pointer-events-none" />
        </motion.div>

        {/* Ambient Blue Accent Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] md:w-[850px] h-[380px] bg-gradient-to-b from-[#2c67ed]/20 via-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none z-[15]" />

        {/* LAYER 3: Hero Cinematic Typography & Information (NO PROFILE PHOTO) */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            y: titleY,
            transformOrigin: "center center",
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-[20] px-4 pointer-events-auto"
        >
          <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center space-y-4 sm:space-y-5 -translate-y-4 sm:-translate-y-8">
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/15 text-xs font-mono text-zinc-200 shadow-lg shadow-black/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">OPEN TO BACKEND & CLOUD OPPORTUNITIES</span>
            </div>

            {/* Display Title (Identical bold layout to Eka Wahyu) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-[0_6px_28px_rgba(0,0,0,0.9)] select-none">
              <span className="block">WELCOME TO MY</span>
              <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent mt-1">
                PORTOFOLIO
              </span>
            </h1>

            {/* Subtitle & Bio Hook */}
            <div className="max-w-2xl space-y-1.5 pt-1">
              <p className="text-lg sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
                Muhammad Ageng Zayem Wahid
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed drop-shadow">
                Backend Engineer & Cloud Native Practitioner · Bangkit Academy 2024 Google Cloud Graduate · Sarjana Informatika UAD (IPK 3.91 / 4.00 · 3.5 Tahun)
              </p>
            </div>

            {/* Action Buttons (Matches Eka Wahyu #2c67ed styling) */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5 z-30">
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

        {/* LAYER 4: Ground Ridge Silhouette (Clean mountain ridge, no profile photo) */}
        <motion.div
          style={{
            y: ridgeY,
            scale: ridgeScale,
            transformOrigin: "center bottom",
          }}
          className="absolute inset-0 w-full h-full will-change-transform z-[30] pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Image
              src="/img30.svg"
              alt="Mountain Ground Ridge"
              fill
              priority
              className="object-cover object-[center_32%]"
            />
          </div>
          <div className="absolute inset-x-0 top-full h-[68vh] bg-[#030712] pointer-events-none" />
        </motion.div>

        {/* LAYER 5: Forest Canopy / Ranting di Pinggir (hutan.svg) */}
        {/* Opens up outward like branches parting as user scrolls */}
        <motion.div
          style={{
            scale: canopyScale,
            opacity: canopyOpacity,
            transformOrigin: "center 42%",
          }}
          className="absolute inset-0 w-full h-full will-change-transform z-[40] pointer-events-none"
        >
          <Image
            src="/hutan.svg"
            alt="Forest Canopy Frame"
            fill
            priority
            className="object-cover object-bottom"
          />
        </motion.div>

        {/* Bottom Fade Transition into About */}
        <div className="parallax__fade absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none z-[45]" />
      </div>
    </section>
  );
}

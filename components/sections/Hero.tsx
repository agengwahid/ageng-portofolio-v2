"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Ensure scroll position resets to top on every reload when landing on Home
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      if (!window.location.hash || window.location.hash === "#Home") {
        window.scrollTo(0, 0);
      }
    }
  }, []);

  // Track scroll progress through the 225vh section
  // Using "0vh start" disables WAAPI ViewTimeline bug on initial load in Chromium/Brave
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0vh start", "end end"],
  });

  // LAYER 5: Forest Canopy (hutan.webp) - opens outward on scroll
  const canopyScale = useTransform(scrollYProgress, [0, 0.75], [1, 2.3]);
  const canopyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "-14%"]);
  const canopyOpacity = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1, 0]);

  // LAYER 3: Title & Hero Content
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.03]);
  const titleY = useTransform(scrollYProgress, [0, 0.85], [0, -100]);

  // LAYER 1: Night Sky
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // LAYER 2: Mountain Peaks
  const mountainY = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);
  const mountainScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  // LAYER 4 & 4b: Ground Ridge & Portrait Cutout
  const ridgeY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const ridgeScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section
      ref={containerRef}
      id="Home"
      className="parallax relative w-full h-[225vh] bg-[#0a0c0f]"
    >
      {/* Sticky Viewport */}
      <div className="parallax__visuals sticky top-0 w-full h-screen overflow-hidden select-none">

        {/* LAYER 1: Deep Dusk Sky & Moon */}
        <motion.div
          style={{ y: skyY, transformOrigin: "center bottom" }}
          className="absolute inset-x-0 top-0 h-[115%] will-change-transform z-[0]"
        >
          <img
            src="/images/sky.webp"
            alt="Langit Malam dan Cahaya Bulan"
            className="w-full h-full object-cover object-top select-none pointer-events-none"
          />
        </motion.div>

        {/* LAYER 2: Distant Snowy Mountain Peaks (Full height overlap, seals sky horizon seam across desktop & mobile) */}
        <motion.div
          style={{
            y: mountainY,
            scale: mountainScale,
            transformOrigin: "center bottom",
          }}
          className="absolute inset-x-0 top-[-6%] sm:top-0 h-[118%] sm:h-[115%] will-change-transform z-[10] pointer-events-none"
        >
          <img
            src="/img20.svg"
            alt="Pegunungan Salju"
            className="w-full h-full object-cover object-[center_65%] sm:object-bottom select-none pointer-events-none"
          />
          <div className="absolute inset-x-0 top-full h-[50vh] bg-[#0a0c0f] pointer-events-none" />
        </motion.div>

        {/* LAYER 3a: Clean Two-Line Headline centered inside the clear sky archway */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            y: titleY,
            transformOrigin: "center center",
          }}
          className="absolute inset-x-0 top-[13%] sm:top-[14%] md:top-[14%] flex flex-col items-center justify-start z-[33] px-4 pointer-events-none"
        >
          <div className="w-full max-w-xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-stone-100 uppercase leading-[1.06] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] select-none">
              <span className="block">WELCOME TO MY</span>
              <span className="block text-stone-300 mt-0.5">PORTFOLIO</span>
            </h1>
          </div>
        </motion.div>

        {/* LAYER 4: Ground Mountain Ridge (Lowered horizon so snowy peak frames shoulders cleanly) */}
        <motion.div
          style={{
            y: ridgeY,
            scale: ridgeScale,
            transformOrigin: "center bottom",
          }}
          className="absolute inset-x-0 bottom-[-16%] sm:bottom-[-24%] h-[115%] will-change-transform z-[20] pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Image
              src="/img30.svg"
              alt="Siluet Punggung Tanah"
              fill
              priority
              unoptimized
              className="object-cover object-[center_78%] sm:object-bottom"
            />
          </div>
          <div className="absolute inset-x-0 top-full h-[60vh] bg-[#0a0c0f] pointer-events-none" />
        </motion.div>

        {/* LAYER 4b: Ageng's Real Transparent Cutout (Viewport-proportional prominent Hero scale) */}
        <motion.div
          style={{
            y: ridgeY,
            scale: ridgeScale,
            transformOrigin: "center bottom",
          }}
          className="absolute bottom-[20%] sm:bottom-[2%] md:bottom-[2%] left-1/2 -translate-x-1/2 z-[25] pointer-events-none"
        >
          <div className="relative drop-shadow-[0_18px_38px_rgba(0,0,0,0.9)]">
            <img
              src="/images/ageng-hero.png"
              alt="Muhammad Ageng Zayem Wahid"
              className="h-[46vh] sm:h-[58vh] md:h-[62vh] lg:h-[65vh] w-auto max-w-none object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* LAYER 5: Forest Canopy / Dahan Hutan (frames edges, opens on scroll) */}
        <motion.div
          style={{
            scale: canopyScale,
            y: canopyY,
            opacity: canopyOpacity,
            transformOrigin: "center 40%",
          }}
          className="absolute inset-0 w-full h-full will-change-transform z-[30] pointer-events-none"
        >
          <img
            src="/images/hutan.webp"
            alt="Bingkai Dahan dan Ranting Hutan"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-center pointer-events-none select-none"
          />
        </motion.div>

        {/* Subtle bottom scrim for high text contrast over dark ground/gown */}
        <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#0a0c0f] via-[#0a0c0f]/80 to-transparent pointer-events-none z-[32]" />

        {/* LAYER 3b: Formal Identity & Action Buttons (Clear of top canopy and lower robe/sash) */}
        <motion.div
          style={{
            opacity: titleOpacity,
            scale: titleScale,
            y: titleY,
            transformOrigin: "center center",
          }}
          className="absolute inset-x-0 bottom-5 sm:bottom-[5%] md:bottom-[6%] flex flex-col items-center justify-end z-[36] px-4 pointer-events-auto"
        >
          <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center space-y-3">
            <div className="space-y-1.5 text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-100 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                Muhammad Ageng Zayem Wahid
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-xl mx-auto">
                Backend &amp; Web Developer · Alumni Bangkit Academy Cloud Computing 2024 · S1 Informatika UAD (IPK 3.91)
              </p>
            </div>

            {/* Formal Monochrome Action Buttons */}
            <div className="pt-1 flex flex-wrap items-center justify-center gap-3 z-40">
              <a
                href="#Portofolio"
                className="px-6 py-2.5 rounded-full font-semibold bg-stone-100 hover:bg-white text-zinc-950 shadow-lg transition-[transform,background-color] duration-200 hover:scale-[1.02] active:scale-95 flex items-center gap-2 text-sm cursor-pointer"
              >
                <span>Jelajahi Portofolio</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full font-medium bg-zinc-900/85 hover:bg-zinc-800 border border-white/20 text-stone-100 backdrop-blur-md transition-[transform,background-color] duration-200 hover:scale-[1.02] active:scale-95 flex items-center gap-2 text-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-stone-300" />
                <span>Unduh Resume (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

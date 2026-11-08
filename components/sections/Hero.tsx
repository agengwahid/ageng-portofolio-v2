"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, CheckCircle2, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative w-full min-h-[110vh] lg:min-h-[120vh] bg-[#030712] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28"
    >
      {/* LAYER 1: Deep Sky & Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/img10.svg"
          alt="Sky and Stars"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
      </div>

      {/* LAYER 2: Distant Mountains */}
      <div className="absolute inset-x-0 bottom-[18%] sm:bottom-[15%] h-[55%] sm:h-[65%] z-10 pointer-events-none opacity-85">
        <Image
          src="/img20.svg"
          alt="Mountain Peaks"
          fill
          priority
          className="object-cover object-[center_50%]"
        />
      </div>

      {/* Ambient Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] md:w-[750px] h-[350px] bg-gradient-to-b from-[#2c67ed]/25 via-blue-600/10 to-transparent rounded-full blur-[110px] pointer-events-none z-10" />

      {/* LAYER 3: Central Cinematic Typography */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center flex-1 my-auto pt-10 sm:pt-16 pb-20">
        {/* Status Beacon */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono text-zinc-200 mb-6 shadow-lg shadow-black/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">OPEN TO BACKEND & CLOUD OPPORTUNITIES</span>
        </motion.div>

        {/* Display Title (Identical bold layout to Eka Wahyu) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="space-y-1 sm:space-y-2 select-none"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            <span className="block">WELCOME TO MY</span>
            <span className="block bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              PORTOFOLIO
            </span>
          </h1>
        </motion.div>

        {/* Subtitle & Bio Hook */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-2xl space-y-2"
        >
          <p className="text-base sm:text-xl font-bold text-white tracking-wide">
            Muhammad Ageng Zayem Wahid
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed">
            Backend Engineer & Cloud Native Practitioner · Bangkit Academy 2024 Google Cloud Graduate · Sarjana Informatika UAD (IPK 3.91 / 4.00 · 3.5 Tahun)
          </p>
        </motion.div>

        {/* Action Buttons (Matches Eka Wahyu #2c67ed styling & hover effect) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a
            href="#Portofolio"
            className="px-6 py-3 rounded-xl font-semibold bg-[#2c67ed] hover:bg-[#1d4ed8] text-white shadow-lg shadow-[#2c67ed]/30 hover:shadow-[#2c67ed]/50 transition-[transform,background-color] duration-200 hover:scale-[1.03] active:scale-95 flex items-center gap-2 text-sm"
          >
            <span>Jelajahi Portofolio</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-md transition-[transform,background-color] duration-200 hover:scale-[1.03] active:scale-95 flex items-center gap-2 text-sm"
          >
            <Download className="w-4 h-4 text-[#2c67ed]" />
            <span>Unduh Resume (PDF)</span>
          </a>
        </motion.div>
      </div>

      {/* LAYER 4: Ground Silhouette Ridge */}
      <div className="absolute inset-x-0 bottom-0 h-[38%] sm:h-[46%] z-30 pointer-events-none opacity-90">
        <Image
          src="/img30.svg"
          alt="Ground Ridge Silhouette"
          fill
          priority
          className="object-cover object-[center_35%]"
        />
      </div>

      {/* LAYER 5: Forest Canopy Frame */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <Image
          src="/hutan.svg"
          alt="Forest Canopy Frame"
          fill
          priority
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* LAYER 6: Bottom Fade to #030712 */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none z-50" />
    </section>
  );
}

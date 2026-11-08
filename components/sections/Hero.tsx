"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative w-full min-h-[115vh] lg:min-h-[125vh] bg-[#030712] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28"
    >
      {/* LAYER 1: Deep Sky & Stars Background (Eka Wahyu exact asset) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/img10.svg"
          alt="Sky and Stars"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
      </div>

      {/* LAYER 2: Distant Mountains (Eka Wahyu exact asset) */}
      <div className="absolute inset-x-0 bottom-[18%] sm:bottom-[15%] h-[55%] sm:h-[65%] z-10 pointer-events-none opacity-85">
        <Image
          src="/img20.svg"
          alt="Mountain Peaks"
          fill
          priority
          className="object-cover object-[center_50%]"
        />
      </div>

      {/* Ambient Blue Accent Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] md:w-[750px] h-[350px] bg-gradient-to-b from-[#2c67ed]/25 via-blue-600/10 to-transparent rounded-full blur-[110px] pointer-events-none z-10" />

      {/* LAYER 3: Cinematic Hero Content & Real Graduation Portrait */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-start flex-1 my-auto pt-6 sm:pt-10 pb-16">
        {/* Status Beacon */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono text-zinc-200 mb-5 shadow-lg shadow-black/20"
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
          className="space-y-1 select-none"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-white uppercase leading-[1.02] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
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
          className="mt-4 max-w-2xl space-y-1.5"
        >
          <p className="text-lg sm:text-2xl font-bold text-white tracking-wide drop-shadow-md">
            Muhammad Ageng Zayem Wahid
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 font-mono leading-relaxed drop-shadow">
            Backend Engineer & Cloud Native Practitioner · Bangkit Academy 2024 Google Cloud Graduate · Sarjana Informatika UAD (IPK 3.91 / 4.00 · 3.5 Tahun)
          </p>
        </motion.div>

        {/* Action Buttons (Matches Eka Wahyu #2c67ed styling & hover effect) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3.5 z-30"
        >
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
        </motion.div>

        {/* Ageng's Real Graduation Photo Hero Cutout/Figure */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative mt-8 sm:mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md h-[340px] sm:h-[400px] md:h-[440px] z-20 flex items-end justify-center"
        >
          {/* Subtle Halo Rim behind Ageng */}
          <div className="absolute inset-x-8 top-12 bottom-6 bg-gradient-to-t from-[#2c67ed]/30 via-sky-500/15 to-transparent rounded-full blur-2xl -z-10" />

          <div className="relative w-full h-full">
            <Image
              src="/images/ageng-graduation.jpg"
              alt="Muhammad Ageng Zayem Wahid - Sarjana Informatika Cumlaude"
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]"
              style={{
                maskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
                WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%, black 100%)",
              }}
              sizes="(max-width: 640px) 300px, 420px"
            />
          </div>

          {/* Prestigious Title Pill floating next to Ageng */}
          <div className="absolute bottom-6 right-2 sm:right-6 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-1.5 text-[11px] font-mono text-white">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>S.Kom · IPK 3.91 (Cumlaude)</span>
          </div>
        </motion.div>
      </div>

      {/* LAYER 4: Forest Edge Overlay (Eka Wahyu exact asset) */}
      <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 z-30 pointer-events-none">
        <Image
          src="/hutan.svg"
          alt="Pine Forest Edge"
          fill
          priority
          className="object-cover object-bottom opacity-95"
        />
      </div>

      {/* LAYER 5: Parallax Bottom Fade Transition into About */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none z-35" />
    </section>
  );
}

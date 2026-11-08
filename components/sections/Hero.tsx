"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowDown, Download, CheckCircle2, GraduationCap, Cloud, MapPin, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#07090e] overflow-hidden flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12"
    >
      {/* Precision Starry & Mountain SVG Backdrop (Framed cleanly without blocking text) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/img10.svg"
          alt="Night Sky Background"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-transparent pointer-events-none z-10" />

      {/* Main 2-Column Responsive Layout */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Personal Narrative, Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Status Badge */}
          <BlurFade delay={0.05}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">OPEN TO BACKEND & CLOUD ROLES</span>
            </div>
          </BlurFade>

          {/* Headline (Crisp, High-Precision Typography) */}
          <BlurFade delay={0.12}>
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono text-sky-400 uppercase tracking-widest font-semibold">
                Software Engineer · Cloud Native Practitioner
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Architecting{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  Resilient Backends
                </span>{" "}
                & Scalable Cloud Systems.
              </h1>
            </div>
          </BlurFade>

          {/* Description */}
          <BlurFade delay={0.2}>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              Halo, saya <span className="text-white font-semibold">Muhammad Ageng Zayem Wahid, S.Kom.</span> — 
              Sarjana Informatika Universitas Ahmad Dahlan (<span className="text-sky-300 font-medium">IPK 3.91 / 4.00 · Fast-Track 3.5 Tahun Cumlaude</span>) 
              dan Alumnus <span className="text-sky-300 font-medium">Bangkit Academy 2024 Google Cloud Cohort</span>. 
              Berfokus pada perancangan REST API berkinerja tinggi, database relasional ternormalisasi, dan deployment kontainer Docker pada Google Cloud Platform.
            </p>
          </BlurFade>

          {/* Action Buttons (Magic UI ShimmerButton + Glass Button) */}
          <BlurFade delay={0.28}>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a href="#Portofolio">
                <ShimmerButton
                  shimmerColor="#38bdf8"
                  background="rgba(2, 132, 199, 0.9)"
                  className="shadow-lg shadow-sky-950/50 text-sm py-3 px-6"
                >
                  <span className="flex items-center gap-2">
                    <span>Jelajahi Portofolio</span>
                    <ArrowDown className="w-4 h-4" />
                  </span>
                </ShimmerButton>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-[14px] text-sm font-semibold text-zinc-200 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer min-h-[46px]"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Unduh Resume (PDF)</span>
              </a>
            </div>
          </BlurFade>

          {/* Quick Verified Credentials Row */}
          <BlurFade delay={0.35}>
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bangkit 2024 Google Cloud</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IPK 3.91 / 4.00 Cumlaude</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2 Tahun Asisten Lab IF</span>
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Right Column: Ageng's Real Graduation Portrait in Architectural Card Frame */}
        <div className="lg:col-span-5 relative flex justify-center">
          <BlurFade delay={0.18}>
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-white/[0.03] border border-white/10 p-3 sm:p-4 backdrop-blur-xl soft-card-shadow group">
              {/* Image Container with Real Graduation Photo */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/10">
                <Image
                  src="/images/ageng-graduation.jpg"
                  alt="Muhammad Ageng Zayem Wahid, S.Kom. - Wisuda Cumlaude"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />

                {/* Floating Badge 1: Academic Honor */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-xs font-mono text-white shadow-lg">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-bold">IPK 3.91 · Cumlaude</span>
                </div>

                {/* Floating Badge 2: Google Cloud */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-[11px] font-mono text-sky-300 shadow-lg">
                  <Cloud className="w-3.5 h-3.5 text-sky-400" />
                  <span>Bangkit 2024</span>
                </div>

                {/* Bottom Profile Caption */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Ready for Impact
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-sky-400" />
                      Yogyakarta, ID
                    </span>
                  </div>
                  <p className="text-sm font-bold text-white tracking-tight">
                    Muhammad Ageng Zayem Wahid, S.Kom.
                  </p>
                  <p className="text-xs text-zinc-400 font-mono">
                    Backend Architecture & Cloud Deployments
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

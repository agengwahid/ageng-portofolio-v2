"use client";

import Image from "next/image";
import { Download, Award, GraduationCap, Terminal, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/experience";

export default function About() {
  return (
    <section
      id="About"
      className="relative z-10 w-full bg-[#030712] text-white px-4 sm:px-6 lg:px-12 py-20 md:py-28"
    >
      {/* Top subtle fade from Hero */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#030712] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header (Matches Eka Wahyu exact typography scale) */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2563eb] uppercase tracking-widest font-semibold">
            <span>//</span>
            <span>TENTANG SAYA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
            Arsitektur Sistem Tangguh, Cloud Otomatis, & Rekayasa Backend Berkinerja Tinggi
          </h2>
        </div>

        {/* Two Column Grid: Profile & Timeline */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait Card & Bio (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Real Graduation Portrait Card with Floating Badges */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900/60 border border-white/10 p-4 soft-card-shadow">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black/40">
                <Image
                  src="/images/ageng-graduation.jpg"
                  alt="Muhammad Ageng Zayem Wahid"
                  fill
                  priority
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Bottom dark vignette */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Floating Badge 1: Cumlaude */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/30 text-amber-300 font-mono text-[11px] font-bold shadow-lg flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>IPK 3.91 (Cumlaude)</span>
                </div>

                {/* Floating Badge 2: Fast-Track */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-semibold shadow-lg flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                  <span>Fast-Track 3.5 Tahun</span>
                </div>

                {/* Floating Badge 3: Bangkit Top Graduate */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-[#2563eb]/90 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-bold shadow-lg flex items-center gap-1">
                  <span>Bangkit 2024</span>
                </div>
              </div>

              {/* Quick Bio Info */}
              <div className="mt-5 space-y-3 px-1">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-white font-bold">Muhammad Ageng Zayem Wahid</span>
                  <span className="text-[#2563eb]">S.Kom</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  Lulusan Sarjana Informatika Universitas Ahmad Dahlan dengan predikat Cumlaude. Mengkhususkan diri pada rekayasa backend, perancangan RESTful API berskala, deployment container microservices, dan orkestrasi cloud Google Cloud Platform.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 rounded-xl font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] transition-[transform,background-color] duration-200 hover:scale-[1.02] active:scale-98 flex items-center justify-center gap-2 text-white text-sm shadow-md shadow-[#2563eb]/30 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh Resume Lengkap (PDF)</span>
                </a>
              </div>
            </div>

            {/* Core Competencies Quick Summary */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-zinc-400 text-[11px]">CLOUD STACK</div>
                <div className="text-white font-semibold">GCP, Docker, CI/CD</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-zinc-400 text-[11px]">BACKEND CORE</div>
                <div className="text-white font-semibold">Go, Node.js, Express</div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education Timeline (7 Cols - Matches Eka Wahyu exact layout) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-[#2563eb]" />
                <span>Pengalaman & Jejak Rekam</span>
              </h3>
              <span className="text-xs font-mono text-zinc-400">2021 – Sekarang</span>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-8">
              {/* Vertical Connector Line (Matches Eka Wahyu exact coordinate & width) */}
              <div className="absolute left-[17px] top-6 bottom-4 w-[2px] bg-white/15 z-0" />

              {experiences.map((exp, idx) => {
                // Color badges matching Eka Wahyu's distinct icon boxes
                const getBoxStyle = (index: number) => {
                  switch (index % 4) {
                    case 0:
                      return "bg-blue-500/15 border-blue-500/30 text-blue-400";
                    case 1:
                      return "bg-purple-500/15 border-purple-500/30 text-purple-400";
                    case 2:
                      return "bg-amber-500/15 border-amber-500/30 text-amber-400";
                    default:
                      return "bg-sky-500/15 border-sky-500/30 text-sky-400";
                  }
                };

                return (
                  <div key={idx} className="relative z-10 space-y-3">
                    {/* Header Row */}
                    <div className="flex items-start gap-3.5">
                      {/* Left Icon Pill on Connector Line */}
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 font-mono font-bold text-xs shadow-md ${getBoxStyle(
                          idx
                        )}`}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {exp.role}
                          </h4>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-[#2563eb] font-medium">
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Card Body */}
                    <div className="ml-13.5 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2563eb]/50 transition-colors duration-200 space-y-3">
                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 pt-1">
                        {exp.description.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-1" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-[11px] font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Transition to Light Portofolio Section */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#fafafa] via-[#030712]/80 to-transparent pointer-events-none" />
    </section>
  );
}

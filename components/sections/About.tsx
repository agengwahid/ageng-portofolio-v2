"use client";

import Image from "next/image";
import { Download, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/experience";

export default function About() {
  return (
    <section
      id="About"
      className="relative z-10 w-full bg-[#0a0c0f] text-stone-100 px-4 sm:px-6 lg:px-12 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <p className="text-sm font-medium text-zinc-400">
            Tentang &amp; Rekam Jejak
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-stone-100 max-w-4xl leading-[1.12]">
            Rekayasa Backend, Aplikasi Web, &amp; Administrasi Infrastruktur Cloud
          </h2>
        </div>

        {/* Two Column Grid: Profile & Timeline */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait Card & Bio (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#12161c] border border-white/10 p-4">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950">
                <Image
                  src="/images/ageng-about.jpg"
                  alt="Muhammad Ageng Zayem Wahid"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Bottom neutral scrim for portrait captions */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0c0f]/90 via-[#0a0c0f]/45 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0a0c0f]/85 backdrop-blur-sm border border-white/15 text-stone-100 text-xs font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-stone-300" />
                    <span>IPK 3.91 / 4.00 · 3.5 Tahun</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-zinc-950 text-xs font-semibold">
                    Bangkit 2024
                  </span>
                </div>
              </div>

              {/* Bio Info */}
              <div className="mt-5 space-y-2.5 px-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white font-semibold">Muhammad Ageng Zayem Wahid</span>
                  <span className="text-zinc-400 font-medium">S.Kom</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Lulusan S1 Informatika Universitas Ahmad Dahlan (2022–2026) yang menyelesaikan studi dalam 3,5 tahun dengan IPK 3,91/4,00. Berfokus pada pengembangan backend, RESTful API, Google Cloud Platform, Docker, serta administrasi server Linux.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 rounded-xl font-semibold bg-stone-100 hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2 text-zinc-950 text-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh Resume Lengkap (PDF)</span>
                </a>
              </div>
            </div>

            {/* Core Competencies Summary */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-[#12161c] border border-white/10 space-y-1">
                <div className="text-zinc-400 font-medium">Infrastruktur &amp; Cloud</div>
                <div className="text-stone-100 font-semibold">Linux, Docker, GCP, Nginx</div>
              </div>
              <div className="p-4 rounded-xl bg-[#12161c] border border-white/10 space-y-1">
                <div className="text-zinc-400 font-medium">Backend &amp; Database</div>
                <div className="text-stone-100 font-semibold">Laravel, PostgreSQL, Node.js, Redis</div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Education Timeline (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-100 tracking-tight flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-zinc-400" />
                <span>Pengalaman &amp; Pendidikan</span>
              </h3>
              <span className="text-xs text-zinc-400 tabular-nums">2022 – Sekarang</span>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-8">
              {/* Vertical Connector Line */}
              <div className="absolute left-[7px] sm:left-[9px] top-3 bottom-4 w-px bg-white/15 z-0" />

              {experiences.map((exp, idx) => (
                <div key={idx} className="relative z-10 space-y-3">
                  {/* Minimalist Timeline Node */}
                  <span className="absolute -left-6 sm:-left-8 top-2 w-3.5 h-3.5 rounded-full bg-stone-200 ring-4 ring-[#0a0c0f]" />

                  {/* Header Row */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-stone-100 tracking-tight">
                        {exp.role}
                      </h4>
                      <span className="text-xs px-3 py-0.5 rounded-full bg-white/[0.06] border border-white/12 text-zinc-300 tabular-nums">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-300 font-medium">
                      {exp.organization} <span className="text-zinc-500">· {exp.location}</span>
                    </p>
                  </div>

                  {/* Timeline Card Body */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#12161c] border border-white/10 hover:border-white/25 transition-colors duration-200 space-y-3.5">
                    <div className="space-y-2">
                      {exp.description.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-sm text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Clean Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-zinc-300 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

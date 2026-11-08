"use client";

import Image from "next/image";
import { experiences } from "@/data/experience";
import BlurFade from "@/components/magicui/blur-fade";
import { Cloud, GraduationCap, Users, Server, ShieldCheck, Download, ExternalLink, Cpu } from "lucide-react";

export default function About() {
  return (
    <section
      id="About"
      className="relative z-10 w-full bg-[#07090e] text-white px-4 sm:px-6 lg:px-12 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        <BlurFade delay={0.05}>
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest font-semibold">
              <span>//</span>
              <span>TENTANG SAYA & LATAR BELAKANG</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Dedikasi pada Rekayasa{" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Backend & Cloud Systems
              </span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
              Menjembatani logika sistem berkecepatan tinggi dengan infrastruktur komputasi cloud yang terukur dan teruji.
            </p>
          </div>
        </BlurFade>

        {/* 2-Column Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Profile Card with Real Graduation Photo */}
          <div className="lg:col-span-5 space-y-6">
            <BlurFade delay={0.15}>
              <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 backdrop-blur-md soft-card-shadow overflow-hidden group">
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 mb-5">
                  <Image
                    src="/images/ageng-graduation.jpg"
                    alt="Muhammad Ageng Zayem Wahid, S.Kom."
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                    <div className="text-base font-bold text-white">
                      Muhammad Ageng Zayem Wahid, S.Kom.
                    </div>
                    <div className="text-xs text-sky-400 font-mono mt-0.5 font-medium">
                      Backend Engineer & Cloud Practitioner · UAD Cumlaude
                    </div>
                  </div>
                </div>

                {/* Quick Academic & Cohort Stats */}
                <div className="grid grid-cols-2 gap-2.5 text-center font-mono">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-zinc-400 block text-[10px] uppercase tracking-wider">
                      LULUS KULIAH
                    </span>
                    <span className="text-white font-bold text-sm">3.5 Tahun (Fast-Track)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-zinc-400 block text-[10px] uppercase tracking-wider">
                      IPK AKHIR
                    </span>
                    <span className="text-sky-400 font-bold text-sm">3.91 / 4.00 (Cumlaude)</span>
                  </div>
                </div>

                {/* Action Button */}
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full px-6 py-3 rounded-xl font-semibold bg-[#0284c7] hover:bg-[#0369a1] transition-[transform,background-color] duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 text-white text-sm shadow-lg shadow-sky-950/60"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh CV / Resume Lengkap</span>
                </a>
              </div>
            </BlurFade>

            {/* Core Engineering Pillars */}
            <BlurFade delay={0.25}>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Prinsip Rekayasa Perangkat Lunak
                </h3>
                <ul className="space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    <span><strong>High-Throughput REST APIs:</strong> Skalabilitas endpoint backend Node.js & Laravel dengan penanganan error terstandar.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    <span><strong>Relational Integrity:</strong> Skema database MySQL & PostgreSQL ternormalisasi untuk efisiensi index query sub-detik.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    <span><strong>Cloud Containerization:</strong> Kontainerisasi Docker dan otomatisasi deployment di Google Cloud Run.</span>
                  </li>
                </ul>
              </div>
            </BlurFade>
          </div>

          {/* Right Column: Narrative & Experience Timeline */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio Narrative Card */}
            <BlurFade delay={0.2}>
              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-4 text-zinc-300 text-sm leading-relaxed">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Server className="w-5 h-5 text-sky-400" />
                  Latar Belakang & Spesialisasi
                </h3>
                <p>
                  Saya adalah Sarjana Informatika dari Universitas Ahmad Dahlan yang menyelesaikan studi dalam tempo 3.5 tahun dengan predikat kelulusan <strong>IPK 3.91 (Cumlaude)</strong>. Berfokus pada perancangan arsitektur perangkat lunak sisi server yang tangguh dan scalable.
                </p>
                <p>
                  Dalam program <strong>Bangkit Academy 2024 Google Cloud Cohort</strong>, saya memimpin pengembangan arsitektur cloud backend untuk proyek <em>DermaScan</em>, menghubungkan pipeline inferensi Computer Vision dengan microservices Google Cloud Run dan Cloud Storage.
                </p>
                <p>
                  Selain itu, selama dua tahun saya dipercaya menjadi <strong>Asisten Dosen Laboratorium Komputer</strong>, memfasilitasi praktikum ratusan mahasiswa untuk mata kuliah Algoritma & Pemrograman Dasar (C++), Logika Informatika, dan Sistem Operasi (Linux).
                </p>
              </div>
            </BlurFade>

            {/* Experience & Education Timeline */}
            <BlurFade delay={0.3}>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-sky-400" />
                  Pengalaman & Pendidikan
                </h3>

                <div className="relative pl-6 space-y-6 before:absolute before:left-[17px] before:top-3 before:bottom-3 before:w-[2px] before:bg-white/15">
                  {experiences.map((item, idx) => {
                    const getIconColor = (type: string) => {
                      if (type === "Training") return "bg-sky-500/15 border-sky-500/30 text-sky-400";
                      if (type === "Work & TA") return "bg-emerald-500/15 border-emerald-500/30 text-emerald-400";
                      return "bg-amber-500/15 border-amber-500/30 text-amber-400";
                    };

                    const getIconComponent = (type: string) => {
                      if (type === "Training") return Cloud;
                      if (type === "Work & TA") return Users;
                      return GraduationCap;
                    };

                    const IconComp = getIconComponent(item.type);

                    return (
                      <div
                        key={idx}
                        className="relative p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-500/50 transition-colors duration-200"
                      >
                        {/* Timeline Icon Node */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-xl border p-1 flex items-center justify-center shrink-0 ${getIconColor(item.type)}`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base font-bold text-white truncate">
                              {item.role}
                            </h4>
                            <p className="text-xs text-zinc-400 truncate">
                              {item.organization} · {item.location}
                            </p>
                          </div>
                          <span className="shrink-0 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                            {item.period}
                          </span>
                        </div>

                        <ul className="space-y-1.5 text-xs text-zinc-300 list-disc list-inside">
                          {item.description.map((desc, dIdx) => (
                            <li key={dIdx} className="leading-relaxed">
                              {desc}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-3.5 flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-zinc-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}

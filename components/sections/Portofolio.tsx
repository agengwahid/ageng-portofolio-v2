"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { certificates, Certificate } from "@/data/certificates";
import { skillCategories } from "@/data/skills";
import ProjectModal from "@/components/ui/ProjectModal";
import CertificateModal from "@/components/ui/CertificateModal";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { useLanguage } from "@/components/providers/LanguageProvider";
import {
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Check,
  Award,
  Calendar,
  Maximize2,
  Server,
  Cloud,
  Code,
  GraduationCap,
} from "lucide-react";

export default function Portofolio() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "skills">("projects");
  const [projectCategory, setProjectCategory] = useState<string>("all");
  const [certCategory, setCertCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleCloseProject = useCallback(() => setSelectedProject(null), []);
  const handleCloseCert = useCallback(() => setSelectedCert(null), []);

  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    projectCategory === "all"
      ? projects
      : projectCategory === "team"
      ? projects.filter((p) => p.projectType === "team")
      : projectCategory === "solo"
      ? projects.filter((p) => p.projectType === "solo")
      : projects.filter((p) => p.category === projectCategory);

  const filteredCerts =
    certCategory === "all"
      ? certificates
      : certificates.filter((c) => c.category === certCategory);

  const tabs = [
    { key: "projects", label: "Projects" },
    { key: "certificates", label: "Certificates" },
    { key: "skills", label: "Tech Stack & Awards" },
  ] as const;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -460 : 460;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="Portofolio"
      className="relative z-10 w-full bg-gradient-to-b from-[#e4e4e7] via-[#f1f1f3] to-[#dcdce0] text-zinc-900 px-4 sm:px-6 lg:px-12 py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle silver-white architectural radial depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.75)_0%,_transparent_65%)] pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-sm font-medium text-zinc-500">
            {lang === "en" ? "Portfolio & Credentials" : "Portofolio & Kredensial"}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            {lang === "en" ? "Projects & Certifications" : "Proyek & Sertifikasi"}
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto">
            {lang === "en"
              ? "A curated collection of team collaborations and independent engineering projects, professional certifications, and core technologies."
              : "Kumpulan proyek kolaborasi tim maupun proyek mandiri, daftar sertifikasi kompetensi, serta teknologi yang digunakan."}
          </p>
        </div>

        {/* Capsule Tab Bar (Formal Charcoal Ink Active State) */}
        <div className="flex justify-center">
          <div className="relative flex rounded-2xl w-full max-w-2xl mx-auto bg-white p-1.5 soft-tabbar-shadow border border-zinc-200/80">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isActive ? "text-white" : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-portfolio-tab"
                      className="absolute inset-0 rounded-xl bg-zinc-950 shadow-sm z-0"
                      transition={{ type: "spring", stiffness: 360, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB CONTENT */}
        <AnimatePresence mode="wait">
          {/* TAB 1: PROJECTS */}
          {activeTab === "projects" && (
            <motion.div
              key="tab-projects"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Category Filter Pills (Clean text labels without emojis) */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { key: "all", label: lang === "en" ? "All Projects" : "Semua Proyek" },
                  { key: "team", label: lang === "en" ? "Team Projects" : "Proyek Tim" },
                  { key: "solo", label: lang === "en" ? "Solo Projects" : "Proyek Mandiri" },
                  { key: "backend", label: "Backend & Cloud" },
                  { key: "fullstack", label: "Full-Stack Web" },
                  { key: "tools", label: lang === "en" ? "Tools & Utilities" : "Tools & Utilitas" },
                ].map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setProjectCategory(f.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                      projectCategory === f.key
                        ? "bg-zinc-950 text-white border border-zinc-950"
                        : "bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Horizontal Carousel Slider */}
              <div className="relative group/carousel">
                {/* Left Navigation Arrow */}
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Previous Projects"
                  className="hidden lg:flex absolute -left-5 xl:-left-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full items-center justify-center text-white bg-zinc-950 hover:bg-zinc-800 shadow-lg transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label="Next Projects"
                  className="hidden lg:flex absolute -right-5 xl:-right-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full items-center justify-center text-white bg-zinc-950 hover:bg-zinc-800 shadow-lg transition-[transform,background-color] duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Scrollable Track */}
                <div
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 px-1 sm:px-2 snap-x snap-mandatory"
                >
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="w-[310px] sm:w-[380px] md:w-[430px] lg:w-[460px] flex-shrink-0 snap-start flex flex-col justify-between rounded-2xl bg-white p-4 sm:p-5 soft-card-shadow transition-all duration-300 border border-zinc-200/80 group"
                    >
                      <div>
                        {/* Image Preview Box */}
                        <div className="relative overflow-hidden rounded-xl bg-zinc-950 h-52 flex items-center justify-center group/img">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            unoptimized
                            className="object-contain p-4 group-hover/img:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 310px, 460px"
                          />

                          {/* Top Left Category Label */}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-900/90 text-stone-100 border border-white/10">
                              {lang === "en" ? (project.rankBadgeEn ?? project.rankBadge) : project.rankBadge}
                            </span>
                          </div>

                          {/* Top Right Collaboration Type (Formal Monochrome) */}
                          <div className="absolute top-3 right-3 z-10">
                            <span
                              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                                project.projectType === "team"
                                  ? "bg-zinc-800 text-stone-100 border border-white/15"
                                  : "bg-stone-100 text-zinc-950"
                              }`}
                            >
                              {project.projectType === "team"
                                ? lang === "en" ? "Team" : "Tim"
                                : lang === "en" ? "Solo" : "Mandiri"}
                            </span>
                          </div>

                          {/* Hover Action Overlay */}
                          <button
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="absolute inset-0 bg-black/55 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 z-[2] flex items-center justify-center cursor-pointer"
                          >
                            <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-semibold text-xs bg-zinc-900/90 border border-white/20 shadow-md">
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>{lang === "en" ? "View Details" : "Lihat Detail"}</span>
                            </span>
                          </button>
                        </div>

                        {/* Card Content */}
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between text-xs font-medium">
                            <span className="text-zinc-800">{lang === "en" ? (project.roleEn ?? project.role) : project.role}</span>
                            <span className="text-zinc-500 tabular-nums">{(lang === "en" ? (project.periodEn ?? project.period) : project.period).split("·")[0]}</span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-zinc-950 leading-snug">
                            {project.title}
                          </h3>

                          <p className="text-sm text-zinc-600 line-clamp-3 leading-relaxed">
                            {lang === "en" ? (project.descriptionEn ?? project.description) : project.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-1.5 pt-2 border-t border-zinc-100">
                            {(lang === "en" ? (project.highlightsEn ?? project.highlights) : project.highlights).slice(0, 2).map((h, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-zinc-600">
                                <Check className="w-3.5 h-3.5 text-zinc-800 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{h}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.tech.slice(0, 4).map((t, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg text-xs bg-zinc-100 text-zinc-700 font-medium"
                              >
                                {t}
                              </span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className="px-2.5 py-1 rounded-lg text-xs bg-zinc-100 text-zinc-500">
                                +{project.tech.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-100">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 transition-colors duration-200 text-xs sm:text-sm cursor-pointer"
                        >
                          <span>{lang === "en" ? "View Details" : "Lihat Detail"}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`GitHub repo for ${project.title}`}
                              className="p-2.5 rounded-xl text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 transition"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Live demo for ${project.title}`}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white bg-zinc-950 hover:bg-zinc-800 transition-colors duration-200 text-xs sm:text-sm"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: CERTIFICATES */}
          {activeTab === "certificates" && (
            <motion.div
              key="tab-certificates"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Certificate Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { key: "all", label: lang === "en" ? "All Credentials" : "Semua Kredensial" },
                  { key: "Google & Bangkit", label: "Google Cloud & Bangkit" },
                  { key: "Dicoding", label: "Dicoding Professional" },
                  { key: "Akademik & Organisasi", label: lang === "en" ? "Academic & Organization" : "Akademik & Organisasi" },
                ].map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setCertCategory(cat.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                      certCategory === cat.key
                        ? "bg-zinc-950 text-white border border-zinc-950"
                        : "bg-white text-zinc-600 hover:text-zinc-950 border border-zinc-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Certificates Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCerts.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="rounded-2xl bg-white p-4 soft-card-shadow flex flex-col justify-between border border-zinc-200/80 group"
                  >
                    <div>
                      <div
                        onClick={() => setSelectedCert(cert)}
                        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 cursor-pointer group/cert border border-zinc-200/60"
                      >
                        <Image
                          src={cert.image}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover/cert:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-semibold text-xs bg-zinc-900/90">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>{lang === "en" ? "Zoom" : "Perbesar"}</span>
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-xs text-zinc-500">
                          <span className="text-zinc-800 font-semibold">{cert.issuer.split("·")[0]}</span>
                          <span className="flex items-center gap-1 tabular-nums">
                            <Calendar className="w-3 h-3" />
                            {cert.date}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-zinc-950 leading-snug">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <div className="pt-3 mt-4 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-xs text-zinc-500">
                        {cert.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 transition cursor-pointer"
                      >
                        <span>{lang === "en" ? "View Certificate" : "Lihat Sertifikat"}</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: TECH STACK & AWARDS (NO PERCENTAGES, CLEAN MATRIX) */}
          {activeTab === "skills" && (
            <motion.div
              key="tab-skills"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-12"
            >
              {/* Awards & Distinctions */}
              <div className="space-y-5">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-zinc-700" />
                  <span>{lang === "en" ? "Achievements & Academic Honors" : "Prestasi & Penghargaan Akademik"}</span>
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="p-6 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-medium text-zinc-500">
                      {lang === "en" ? "Academic · 2022 – 2026" : "Akademik · 2022 – 2026"}
                    </div>
                    <h4 className="text-base font-bold text-zinc-950">
                      {lang === "en" ? "Bachelor of Informatics (S.Kom)" : "Sarjana Informatika (S.Kom)"}
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {lang === "en"
                        ? "Graduated in 3.5 years from Universitas Ahmad Dahlan with a 3.91 / 4.00 cumulative GPA."
                        : "Lulus dalam waktu 3,5 tahun dari Universitas Ahmad Dahlan dengan Indeks Prestasi Kumulatif 3,91 dari skala 4,00."}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 flex items-center justify-center">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-medium text-zinc-500">MSIB Kemendikbudristek · 2024</div>
                    <h4 className="text-base font-bold text-zinc-950">Bangkit Academy Cloud Computing</h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {lang === "en"
                        ? "Completed Bangkit Academy Cloud Computing cohort, building the DermaScan capstone backend on Node.js and GCP."
                        : "Lulus program studi independen Bangkit Academy jalur Cloud Computing dengan proyek capstone DermaScan menggunakan Node.js dan GCP."}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 flex items-center justify-center">
                      <Server className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-medium text-zinc-500">
                      {lang === "en" ? "Laboratory & Organization · 2023 – 2025" : "Laboratorium & Organisasi · 2023 – 2025"}
                    </div>
                    <h4 className="text-base font-bold text-zinc-950">
                      {lang === "en" ? "Practicum Assistant & HMIF UAD" : "Asisten Praktikum & HMIF UAD"}
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {lang === "en"
                        ? "Lab practicum assistant for Programming Fundamentals, Algorithms, Informatics Logic, and Operating Systems, plus HMIF Science & Tech staff (2023–2024)."
                        : "Asisten praktikum mata kuliah Dasar Pemrograman, Algoritma Pemrograman, Logika Informatika, dan Sistem Operasi serta Staf Departemen Iptek HMIF (2023–2024)."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Structured Tech Stack Matrix (Zero Percentages, Zero Progress Bars) */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2.5">
                  <Code className="w-5 h-5 text-zinc-700" />
                  <span>{lang === "en" ? "Technologies & Infrastructure" : "Teknologi & Infrastruktur yang Dikuasai"}</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories.map((category, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 space-y-5"
                    >
                      <div className="flex items-start justify-between border-b border-zinc-100 pb-3.5 gap-3">
                        <div>
                          <h4 className="text-base font-bold text-zinc-950 flex items-center gap-2">
                            <Server className="w-4 h-4 text-zinc-700 shrink-0" />
                            <span>{lang === "en" ? category.titleEn : category.title}</span>
                          </h4>
                          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                            {lang === "en" ? category.descriptionEn : category.description}
                          </p>
                        </div>
                        <span className="text-xs text-zinc-400 shrink-0 tabular-nums">
                          {category.skills.length} item
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3.5 py-2 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs sm:text-sm font-medium text-zinc-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals rendered via Portal to document.body */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
      />
      <CertificateModal
        certificate={selectedCert}
        onClose={handleCloseCert}
      />
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { certificates, Certificate } from "@/data/certificates";
import { skillCategories } from "@/data/skills";
import ProjectModal from "@/components/ui/ProjectModal";
import CertificateModal from "@/components/ui/CertificateModal";
import { GithubIcon } from "@/components/ui/BrandIcons";
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
  Database,
  Code,
  GraduationCap,
} from "lucide-react";

export default function Portofolio() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "skills">("projects");
  const [projectCategory, setProjectCategory] = useState<string>("all");
  const [certCategory, setCertCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    projectCategory === "all"
      ? projects
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

  const getPercentage = (level: "Advanced" | "Proficient" | "Familiar") => {
    switch (level) {
      case "Advanced":
        return 95;
      case "Proficient":
        return 85;
      case "Familiar":
        return 75;
    }
  };

  return (
    <section
      id="Portofolio"
      className="relative z-10 w-full bg-[#fafafa] text-zinc-900 px-4 sm:px-6 lg:px-12 py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2563eb] uppercase tracking-widest font-semibold">
            <span>//</span>
            <span>PORTFOLIO & KREDENSIAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Karya Rekayasa & Sertifikasi
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Eksplorasi proyek riil, bukti kompetensi resmi Google Cloud, serta arsitektur sistem yang telah saya bangun.
          </p>
        </div>

        {/* The Iconic Capsule Tab Bar (Matches Eka Wahyu exact layout & #2563eb active indicator) */}
        <div className="flex justify-center">
          <div className="relative flex rounded-2xl w-full max-w-2xl mx-auto bg-white p-2 soft-tabbar-shadow border border-zinc-200/80">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex-1 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isActive ? "text-white" : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-portfolio-tab"
                      className="absolute inset-0 rounded-xl bg-[#2563eb] shadow-[0_6px_16px_rgba(37,99,235,0.32)] z-0"
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB CONTENT WITH SMOOTH TRANSITION */}
        <AnimatePresence mode="wait">
          {/* TAB 1: PROJECTS (CAROUSEL SLIDER) */}
          {activeTab === "projects" && (
            <motion.div
              key="tab-projects"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { key: "all", label: "Semua Proyek" },
                  { key: "backend", label: "Backend & Cloud" },
                  { key: "fullstack", label: "Full-Stack Web" },
                  { key: "tools", label: "Tools & Utilitas" },
                ].map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setProjectCategory(f.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                      projectCategory === f.key
                        ? "bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/30 border border-[#2563eb]"
                        : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 shadow-xs"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Horizontal Carousel Slider with Left & Right Circular Arrow Buttons */}
              <div className="relative group/carousel">
                {/* Left Navigation Arrow */}
                <button
                  type="button"
                  onClick={() => scroll("left")}
                  aria-label="Previous Projects"
                  className="hidden lg:flex absolute -left-5 xl:-left-7 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-lg shadow-[#2563eb]/40 transition-[transform,background-color] duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  type="button"
                  onClick={() => scroll("right")}
                  aria-label="Next Projects"
                  className="hidden lg:flex absolute -right-5 xl:-right-7 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-lg shadow-[#2563eb]/40 transition-[transform,background-color] duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Scrollable Track with Snapping */}
                <div
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-6 pt-2 px-1 sm:px-2 snap-x snap-mandatory"
                >
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="w-[310px] sm:w-[380px] md:w-[430px] lg:w-[460px] flex-shrink-0 snap-start flex flex-col justify-between rounded-2xl bg-white p-4 sm:p-5 soft-card-shadow hover:-translate-y-1.5 transition-all duration-300 border border-zinc-200/70 group"
                    >
                      <div>
                        {/* Image Preview Box with Hover Overlay */}
                        <div className="relative overflow-hidden rounded-xl bg-zinc-950 h-52 flex items-center justify-center group/img">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain p-4 group-hover/img:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 310px, 460px"
                          />

                          {/* Top Rank Badge */}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider bg-[#2563eb] text-white shadow-sm">
                              {project.rankBadge}
                            </span>
                          </div>

                          {/* Hover action overlay (Eka Wahyu style) */}
                          <div
                            onClick={() => setSelectedProject(project)}
                            className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-[2] flex items-center justify-center cursor-pointer"
                          >
                            <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-white font-semibold text-xs bg-white/20 backdrop-blur-md border border-white/30 shadow-md">
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>Lihat Selengkapnya</span>
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="mt-4 space-y-3">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span className="text-[#2563eb] font-mono">{project.role}</span>
                            <span className="text-zinc-500 font-mono">{project.period.split("·")[0]}</span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-[#2563eb] transition-colors leading-snug">
                            {project.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-zinc-600 line-clamp-3 leading-relaxed font-sans">
                            {project.description}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-1.5 pt-2 border-t border-zinc-100">
                            {project.highlights.slice(0, 2).map((h, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-zinc-600">
                                <Check className="w-3.5 h-3.5 text-[#2563eb] shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{h}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tech Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.tech.slice(0, 4).map((t, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-100 text-zinc-700 font-medium"
                              >
                                {t}
                              </span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-zinc-100 text-zinc-500">
                                +{project.tech.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Card Footer Actions (Matches Eka Wahyu exact buttons) */}
                      <div className="flex items-center justify-between pt-4 mt-4 border-t border-zinc-100">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 transition-colors duration-200 text-xs sm:text-sm cursor-pointer"
                        >
                          <span>Lihat Detail</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`GitHub repo for ${project.title}`}
                              className="p-2.5 rounded-xl text-zinc-600 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 transition"
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
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-sm transition-[transform,background-color] duration-200 hover:scale-[1.03] active:scale-95 text-xs sm:text-sm"
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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Certificate Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {[
                  { key: "all", label: "Semua Kredensial" },
                  { key: "Google & Bangkit", label: "Google Cloud & Bangkit" },
                  { key: "Dicoding", label: "Dicoding Professional" },
                  { key: "Akademik & Organisasi", label: "Akademik & Organisasi" },
                ].map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setCertCategory(cat.key)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                      certCategory === cat.key
                        ? "bg-[#2563eb] text-white shadow-md shadow-[#2563eb]/30 border border-[#2563eb]"
                        : "bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200/80 shadow-xs"
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
                    className="rounded-2xl bg-white p-4 soft-card-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border border-zinc-200/70 group"
                  >
                    <div>
                      {/* High-Resolution Certificate Scan Preview */}
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
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-semibold text-xs bg-white/20 backdrop-blur-md">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>Perbesar</span>
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                          <span className="text-[#2563eb] font-semibold">{cert.issuer.split("·")[0]}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {cert.date}
                          </span>
                        </div>

                        <h3 className="text-base font-bold text-zinc-900 group-hover:text-[#2563eb] transition-colors leading-snug">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <div className="pt-3 mt-4 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-zinc-400">
                        {cert.category}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedCert(cert)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#2563eb] bg-blue-50 hover:bg-blue-100 transition cursor-pointer"
                      >
                        <span>Lihat Sertifikat</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* TAB 3: TECH STACK & AWARDS */}
          {activeTab === "skills" && (
            <motion.div
              key="tab-skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Prestigious Awards & Academic Distinctions */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#2563eb]" />
                  <span>Prestasi & Penghargaan Terverifikasi</span>
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className="p-5 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono text-amber-600 font-semibold">AKADEMIK · S1 INFORMATIKA</div>
                    <h4 className="text-base font-bold text-zinc-900">Sarjana Komputer Cumlaude</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                      Lulusan tercepat fast-track 3.5 tahun dari Universitas Ahmad Dahlan dengan Indeks Prestasi Kumulatif 3.91 dari skala 4.00.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#2563eb] flex items-center justify-center font-bold">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono text-[#2563eb] font-semibold">GOOGLE & KEMENDIKBUDRISTEK</div>
                    <h4 className="text-base font-bold text-zinc-900">Bangkit Academy 2024 Distinction</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                      Lulusan jalur Google Cloud Computing dengan predikat Top Graduate dan berhasil merilis capstone project DermaScan ke Google Cloud Run.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-600 flex items-center justify-center font-bold">
                      <Server className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-mono text-purple-600 font-semibold">LEADERSHIP & PEDAGOGI</div>
                    <h4 className="text-base font-bold text-zinc-900">2 Tahun Teaching Assistant</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                      Membimbing lebih dari 200 mahasiswa dalam 4 semester berturut-turut pada praktikum Pemrograman Dasar & Logika Informatika.
                    </p>
                  </div>
                </div>
              </div>

              {/* Categorized Tech Stack */}
              <div className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2">
                  <Code className="w-5 h-5 text-[#2563eb]" />
                  <span>Teknologi & Infrastruktur yang Dikuasai</span>
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories.map((category, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 space-y-5"
                    >
                      <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                        <div>
                          <h4 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                            <Server className="w-4 h-4 text-[#2563eb]" />
                            <span>{category.title}</span>
                          </h4>
                          <p className="text-xs text-zinc-500 mt-0.5 font-sans">
                            {category.description}
                          </p>
                        </div>
                        <span className="text-xs font-mono text-zinc-400 shrink-0">
                          {category.skills.length} Stack
                        </span>
                      </div>

                      <div className="space-y-3.5">
                        {category.skills.map((skill, sIdx) => {
                          const pct = getPercentage(skill.level);
                          return (
                            <div key={sIdx} className="space-y-1.5">
                              <div className="flex items-center justify-between text-xs font-mono">
                                <span className="font-bold text-zinc-800">{skill.name}</span>
                                <span className="text-[#2563eb] font-semibold">{skill.level} ({pct}%)</span>
                              </div>
                              <div className="w-full h-2 rounded-full bg-zinc-100 overflow-hidden">
                                <div
                                  className="h-full bg-[#2563eb] rounded-full transition-all duration-700"
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}

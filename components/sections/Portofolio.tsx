"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { certificates, Certificate } from "@/data/certificates";
import { skillCategories } from "@/data/skills";
import ProjectModal from "@/components/ui/ProjectModal";
import CertificateModal from "@/components/ui/CertificateModal";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { ExternalLink, ChevronRight, Check, Award, Calendar, Maximize2, Server, Cloud, Database, Code, Cpu } from "lucide-react";

export default function Portofolio() {
  const [activeTab, setActiveTab] = useState<"projects" | "certificates" | "skills">("projects");
  const [projectCategory, setProjectCategory] = useState<string>("all");
  const [certCategory, setCertCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredProjects = projectCategory === "all"
    ? projects
    : projects.filter((p) => p.category === projectCategory);

  const filteredCerts = certCategory === "all"
    ? certificates
    : certificates.filter((c) => c.category === certCategory);

  const tabs = [
    { key: "projects", label: "Projects" },
    { key: "certificates", label: "Certificates" },
    { key: "skills", label: "Tech Stack" },
  ] as const;

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0: return Server;
      case 1: return Cloud;
      case 2: return Database;
      default: return Code;
    }
  };

  return (
    <section
      id="Portofolio"
      className="relative z-10 w-full bg-[#030712] text-white px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2c67ed] uppercase tracking-widest font-semibold">
            <span>//</span>
            <span>PORTFOLIO & KREDENSIAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Karya Rekayasa & Sertifikasi
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Eksplorasi proyek riil, bukti kompetensi resmi Google Cloud, serta arsitektur sistem yang telah saya bangun.
          </p>
        </div>

        {/* The Iconic Capsule Tab Bar (Matches Eka Wahyu exact layout and active pill animation) */}
        <div className="flex justify-center">
          <div className="relative flex rounded-2xl w-full max-w-md bg-white/5 border border-white/10 p-1.5 backdrop-blur-md soft-tabbar-shadow">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-portfolio-tab"
                      className="absolute inset-0 rounded-xl -z-10 bg-[#2c67ed] shadow-[0_6px_16px_rgba(44,103,237,0.32)]"
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: PROJECTS */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {/* Filter Pills */}
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
                      ? "bg-[#2c67ed] text-white shadow-md shadow-[#2c67ed]/30 border border-[#2c67ed]"
                      : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-white/5 border border-white/10 hover:border-[#2c67ed]/60 soft-card-shadow flex flex-col justify-between overflow-hidden group transition-all duration-300"
                >
                  <div>
                    {/* Graphic Preview */}
                    <div className="relative w-full h-48 bg-[#070b16] border-b border-white/10 overflow-hidden flex items-center justify-center p-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider bg-[#2c67ed]/90 text-white shadow-sm">
                          {project.rankBadge}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 sm:p-6 space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span className="text-[#2c67ed] font-semibold">{project.role}</span>
                        <span>{project.period.split("·")[0]}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-white/10">
                        {project.highlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                            <Check className="w-3.5 h-3.5 text-[#2c67ed] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tech.slice(0, 4).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-zinc-400">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="p-5 pt-0 flex items-center justify-between border-t border-white/10 mt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-[#2c67ed] hover:text-blue-300 font-semibold transition cursor-pointer py-2"
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
                          className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition"
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
                          className="p-2 rounded-xl text-white bg-[#2c67ed] hover:bg-[#1d4ed8] transition shadow-md shadow-[#2c67ed]/30"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 2: CERTIFICATES */}
        {activeTab === "certificates" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {/* Filter Pills */}
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
                      ? "bg-[#2c67ed] text-white shadow-md shadow-[#2c67ed]/30 border border-[#2c67ed]"
                      : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Certificates Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCerts.map((cert, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCert(cert)}
                  className="group rounded-2xl bg-white/5 border border-white/10 hover:border-[#2c67ed]/60 p-4 soft-card-shadow transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/10 mb-4">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/90 text-white text-xs font-mono border border-white/20">
                          <Maximize2 className="w-3.5 h-3.5 text-[#2c67ed]" />
                          <span>Pratinjau Kredensial</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#2c67ed]">
                        <Award className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{cert.category}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="truncate max-w-[65%]">{cert.issuer}</span>
                    <span className="flex items-center gap-1 shrink-0 text-zinc-500">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 3: TECH STACK */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {skillCategories.map((cat, idx) => {
              const IconComponent = getCategoryIcon(idx);
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#2c67ed]/50 transition-all duration-300 soft-card-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-[#2c67ed]/15 border border-[#2c67ed]/30 text-[#2c67ed]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-zinc-400">{cat.description}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {cat.skills.map((skill, sIdx) => {
                        const isAdvanced = skill.level === "Advanced";
                        return (
                          <div
                            key={sIdx}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-2 border transition-colors ${
                              isAdvanced
                                ? "bg-white/10 text-white border-white/20 hover:border-[#2c67ed]"
                                : "bg-white/5 text-zinc-300 border-white/10"
                            }`}
                          >
                            <span className="font-medium">{skill.name}</span>
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold ${
                                isAdvanced
                                  ? "bg-[#2c67ed]/20 text-[#2c67ed] border border-[#2c67ed]/30"
                                  : "bg-white/10 text-zinc-400"
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Production Grade</span>
                    <span className="text-[#2c67ed] flex items-center gap-1 font-semibold">
                      <Cpu className="w-3 h-3" />
                      High Performance
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>

      {/* Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
}

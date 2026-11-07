"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import ProjectModal from "@/components/ui/ProjectModal";
import { ExternalLink, ChevronRight, Check } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "backend" | "fullstack" | "tools">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const filters = [
    { key: "all", label: "Semua Proyek" },
    { key: "backend", label: "Backend & Cloud" },
    { key: "fullstack", label: "Full-Stack Web" },
    { key: "tools", label: "Tools & Utilitas" },
  ] as const;

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
            <span>03</span>
            <span>{"//"}</span>
            <span>PORTFOLIO STUDI KASUS & ARSITEKTUR</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Proyek Rekayasa & Implementasi Sistem
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Sistem produksi riil: arsitektur REST API machine learning pada GCP, sistem informasi enterprise pertambangan, dan portal akademik berbasis database relasional.
          </p>
        </div>

        <a
          href="https://github.com/agengwahid"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start md:self-auto px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 transition-all shadow-sm"
        >
          <GithubIcon className="w-4 h-4" />
          <span>REPOSITORI GITHUB</span>
          <span>↗</span>
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => {
          const isActive = activeFilter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-cyan-950 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-950"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl glass-card border border-slate-800/80 flex flex-col justify-between overflow-hidden group hover:border-cyan-500/50 transition-all duration-300"
          >
            <div>
              {/* Graphic / Preview Container */}
              <div className="relative w-full h-48 bg-[#070b16] border-b border-slate-800/80 overflow-hidden flex items-center justify-center p-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 shadow-sm">
                    {project.rankBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-cyan-400 font-semibold">{project.role}</span>
                  <span>{project.period.split("·")[0]}</span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technical Highlights list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/80 text-slate-300 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Card Actions */}
            <div className="p-5 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-4">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-medium transition cursor-pointer py-2"
              >
                <span>Lihat Studi Kasus</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repo for ${project.title}`}
                    className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition"
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
                    className="p-2 rounded-lg text-cyan-400 hover:text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

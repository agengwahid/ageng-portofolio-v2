"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { X, ExternalLink, CheckCircle2, BarChart2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-slate-700/80 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-500/40">
              {project.rankBadge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.period}
            </span>
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-cyan-400">{project.role}</p>
        </div>

        {/* Image Preview Container */}
        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Full Overview */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Deskripsi & Arsitektur Sistem
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* Metrics if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4" />
              Metrik Performa & Hasil
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">{m.label}</div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Architectural Highlights */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Pencapaian Teknis Utama
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Teknologi yang Digunakan
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-800"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition shadow-md shadow-cyan-950/40"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

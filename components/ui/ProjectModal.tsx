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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#090d16] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-sky-950/80 text-sky-400 border border-sky-500/30">
              {project.rankBadge}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              {project.period}
            </span>
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-sky-400 font-semibold">{project.role}</p>
        </div>

        {/* Image Preview Container */}
        <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden bg-zinc-950 border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* Full Overview */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
            Deskripsi & Arsitektur Sistem
          </h4>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* Metrics if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
              <BarChart2 className="w-4 h-4" />
              Metrik Performa & Hasil
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[11px] text-zinc-400 font-mono">{m.label}</div>
                  <div className="text-base sm:text-lg font-bold text-white mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Architectural Highlights */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
            Pencapaian Teknis Utama
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
            Teknologi yang Digunakan
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-zinc-200 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition"
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
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] transition shadow-md shadow-sky-950/60"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

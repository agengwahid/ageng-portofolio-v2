"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Project } from "@/data/projects";
import { X, ExternalLink, CheckCircle2, BarChart2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const isOpen = Boolean(project);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-3xl rounded-2xl bg-[#111418] text-stone-100 border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar with Sticky Close Button so user is never stuck scrolled down */}
          <div className="sticky top-0 z-20 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 px-6 pt-5 pb-3 sm:px-8 sm:pt-6 sm:pb-4 bg-[#111418]/95 backdrop-blur-md border-b border-white/10 rounded-t-2xl flex items-start justify-between gap-4">
            <div className="space-y-1.5 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-white/10 text-stone-100 border border-white/10">
                  {project.rankBadge}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                    project.projectType === "team"
                      ? "bg-zinc-800 text-stone-200 border border-white/15"
                      : "bg-stone-100 text-zinc-950"
                  }`}
                >
                  {project.projectType === "team" ? "Proyek Tim" : "Proyek Mandiri"}
                </span>
                <span className="text-xs text-zinc-400">
                  {project.period}
                </span>
              </div>

              <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium">{project.role}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="shrink-0 p-2 rounded-xl text-zinc-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Preview Container */}
          <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-zinc-950 border border-white/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              unoptimized
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Full Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Deskripsi &amp; Arsitektur Sistem
            </h4>
            <p className="text-sm text-zinc-200 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Metrics if available */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4" />
                <span>Metrik Performa &amp; Hasil</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="text-xs text-zinc-400">{m.label}</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5 tabular-nums">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Architectural Highlights */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Pencapaian Teknis Utama
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              {project.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Teknologi yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs bg-white/[0.05] text-zinc-200 border border-white/10"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 bg-stone-100 hover:bg-white transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 bg-stone-100 hover:bg-white transition cursor-pointer"
            >
              Tutup Detail
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

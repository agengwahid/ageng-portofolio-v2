"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Certificate } from "@/data/certificates";
import { X, Award, Calendar } from "lucide-react";

interface CertificateModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl glass-panel border border-slate-700/80 p-5 sm:p-7 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate preview"
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 pr-10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <Award className="w-4 h-4" />
            <span>{cert.category}</span>
          </div>
          <h3 id="cert-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {cert.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span>{cert.issuer}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {cert.date}
            </span>
          </div>
        </div>

        {/* Certificate Image Frame */}
        <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-xs font-mono text-emerald-400">
            ✓ Dokumen Kredensial Terverifikasi
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
          >
            Tutup Preview
          </button>
        </div>
      </div>
    </div>
  );
}

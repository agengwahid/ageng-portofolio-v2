"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Certificate } from "@/data/certificates";
import { X, Award, Calendar } from "lucide-react";

interface CertificateModalProps {
  certificate?: Certificate | null;
  cert?: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, cert, onClose }: CertificateModalProps) {
  const activeCert = certificate || cert;
  const isOpen = Boolean(activeCert);

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

  if (!activeCert || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-title"
      className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-4xl rounded-2xl bg-[#111418] text-stone-100 border border-white/15 p-5 sm:p-7 shadow-2xl space-y-5 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-20 -mx-5 -mt-5 sm:-mx-7 sm:-mt-7 px-5 pt-5 pb-3 sm:px-7 sm:pt-6 sm:pb-4 bg-[#111418]/95 backdrop-blur-md border-b border-white/10 rounded-t-2xl flex items-start justify-between gap-4">
            <div className="space-y-1.5 min-w-0">
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <Award className="w-4 h-4 text-stone-200" />
                <span>{activeCert.category}</span>
              </div>
              <h3 id="cert-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {activeCert.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <span>{activeCert.issuer}</span>
                <span>·</span>
                <span className="flex items-center gap-1 tabular-nums">
                  <Calendar className="w-3.5 h-3.5" />
                  {activeCert.date}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate preview"
              className="shrink-0 p-2 rounded-xl text-zinc-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Image Frame */}
          <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-xl overflow-hidden bg-zinc-950 border border-white/10">
            <Image
              src={activeCert.image}
              alt={activeCert.title}
              fill
              className="object-contain p-2"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-zinc-400">
              Dokumen kredensial terverifikasi resmi
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 bg-stone-100 hover:bg-white transition cursor-pointer"
            >
              Tutup Preview
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

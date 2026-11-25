"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { useLanguage, Lang } from "@/components/providers/LanguageProvider";

interface ResumeOption {
  langCode: Lang;
  href: string;
  downloadName: string;
  badge: string;
  titleId: string;
  titleEn: string;
  subtitleId: string;
  subtitleEn: string;
  metaId: string;
  metaEn: string;
}

const RESUME_OPTIONS: ResumeOption[] = [
  {
    langCode: "id",
    href: "/cv-id.pdf",
    downloadName: "CV-Muhammad-Ageng-Zayem-Wahid-ID.pdf",
    badge: "ID",
    titleId: "CV Bahasa Indonesia",
    titleEn: "Indonesian Resume (CV)",
    subtitleId:
      "Ringkasan profil, pendidikan, pengalaman kerja, proyek, sertifikasi, dan keahlian dalam Bahasa Indonesia.",
    subtitleEn:
      "Profile summary, education, work experience, projects, certifications, and skills in Indonesian.",
    metaId: "2 Halaman · A4 PDF",
    metaEn: "2 Pages · A4 PDF",
  },
  {
    langCode: "en",
    href: "/cv-en.pdf",
    downloadName: "CV-Muhammad-Ageng-Zayem-Wahid-EN.pdf",
    badge: "EN",
    titleId: "CV Bahasa Inggris (English)",
    titleEn: "English Resume (CV)",
    subtitleId:
      "Format ATS berbahasa Inggris mencakup riwayat kerja, proyek rekayasa, sertifikasi, dan stack teknis.",
    subtitleEn:
      "ATS-formatted English resume covering work experience, engineering projects, certifications, and technical stack.",
    metaId: "2 Halaman · A4 PDF",
    metaEn: "2 Pages · A4 PDF",
  },
];

interface ResumeModalContextValue {
  openResumeModal: () => void;
  closeResumeModal: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextValue>({
  openResumeModal: () => {},
  closeResumeModal: () => {},
});

/**
 * Provides global trigger state for the bilingual CV / Resume download dialog.
 */
export function ResumeModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openResumeModal = useCallback(() => setIsOpen(true), []);
  const closeResumeModal = useCallback(() => setIsOpen(false), []);

  return (
    <ResumeModalContext.Provider value={{ openResumeModal, closeResumeModal }}>
      {children}
      {isOpen && <ResumeSelectorDialog onClose={closeResumeModal} />}
    </ResumeModalContext.Provider>
  );
}

/**
 * Returns handlers to open or close the CV language selection dialog.
 */
export function useResumeModal() {
  return useContext(ResumeModalContext);
}

function ResumeSelectorDialog({ onClose }: { onClose: () => void }) {
  const { lang } = useLanguage();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          className="relative w-full max-w-xl rounded-2xl bg-[#111418] text-stone-100 border border-white/15 p-5 sm:p-7 shadow-2xl space-y-5 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                <FileText className="w-4 h-4 text-stone-300" />
                <span>Curriculum Vitae · PDF</span>
              </div>
              <h3
                id="resume-modal-title"
                className="text-xl sm:text-2xl font-bold text-white tracking-tight"
              >
                {lang === "en" ? "Select Resume Language" : "Pilih Bahasa CV"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                {lang === "en"
                  ? "Choose your preferred CV edition to view in browser or download as PDF."
                  : "Pilih versi CV yang ingin Anda lihat di browser atau unduh sebagai PDF."}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={lang === "en" ? "Close resume dialog" : "Tutup dialog CV"}
              className="shrink-0 p-2 rounded-xl text-zinc-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Language Edition Cards */}
          <div className="grid gap-3.5">
            {RESUME_OPTIONS.map((opt) => {
              const isSiteLang = opt.langCode === lang;
              const title = lang === "en" ? opt.titleEn : opt.titleId;
              const subtitle = lang === "en" ? opt.subtitleEn : opt.subtitleId;
              const meta = lang === "en" ? opt.metaEn : opt.metaId;

              return (
                <div
                  key={opt.langCode}
                  className={`rounded-xl p-4 sm:p-5 border transition ${
                    isSiteLang
                      ? "bg-white/[0.06] border-white/25"
                      : "bg-white/[0.03] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-stone-100 text-zinc-950">
                          {opt.badge}
                        </span>
                        <h4 className="text-base font-bold text-white">
                          {title}
                        </h4>
                        {isSiteLang && (
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-zinc-300 border border-white/10">
                            {lang === "en" ? "Current UI" : "Bahasa Aktif"}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {subtitle}
                      </p>
                      <p className="text-[11px] text-zinc-400 font-medium">
                        {meta}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 mt-4 pt-3.5 border-t border-white/10">
                    <a
                      href={opt.href}
                      download={opt.downloadName}
                      onClick={onClose}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-stone-100 hover:bg-white text-zinc-950 transition"
                    >
                      <Download className="w-4 h-4" />
                      <span>{lang === "en" ? "Download PDF" : "Unduh PDF"}</span>
                    </a>

                    <a
                      href={opt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/15 text-stone-100 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{lang === "en" ? "Preview" : "Lihat PDF"}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

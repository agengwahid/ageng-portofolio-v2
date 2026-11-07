"use client";

import { useState } from "react";
import Image from "next/image";
import { certificates, Certificate } from "@/data/certificates";
import CertificateModal from "@/components/ui/CertificateModal";
import { Award, Calendar, Maximize2 } from "lucide-react";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const categories = [
    { key: "all", label: "Semua Kredensial" },
    { key: "Google & Bangkit", label: "Google Cloud & Bangkit" },
    { key: "Dicoding", label: "Dicoding Professional" },
    { key: "Akademik & Organisasi", label: "Akademik & Organisasi" },
  ];

  const filtered = activeCategory === "all"
    ? certificates
    : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
          <span>04</span>
          <span>{"//"}</span>
          <span>SERTIFIKASI & PENGHARGAAN RESMI</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Sertifikasi Terverifikasi
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Bukti kompetensi formal dalam rekayasa cloud, backend development, dan prestasi akademik.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-cyan-950 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-950"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Certificates Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="group rounded-2xl glass-card border border-slate-800/80 hover:border-cyan-500/50 p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-cyan-300 text-xs font-mono border border-cyan-500/40">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Pratinjau Kredensial</span>
                  </div>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                  <Award className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{cert.category}</span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="truncate max-w-[65%]">{cert.issuer}</span>
              <span className="flex items-center gap-1 shrink-0 text-slate-500">
                <Calendar className="w-3 h-3" />
                {cert.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}

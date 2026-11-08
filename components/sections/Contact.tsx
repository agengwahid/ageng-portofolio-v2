"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Copy, Check, ExternalLink, MessageSquare, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/ui/BrandIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("agngwahid123@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 900);
  };

  return (
    <section
      id="Contact"
      className="relative z-10 w-full bg-[#fafafa] text-zinc-900 px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-zinc-200/80"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#2c67ed] uppercase tracking-widest font-semibold">
            <span>//</span>
            <span>HUBUNGI SAYA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Mari Berkolaborasi & Terhubung
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto">
            Terbuka untuk peluang karir Full-Time Backend / Cloud Engineer, proyek rekayasa sistem, atau diskusi teknis.
          </p>
        </div>

        {/* Two Column Grid: Contact Cards & Message Form */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Profile Snapshot Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 soft-card-shadow border border-zinc-200/80 space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#2c67ed]/50 shadow-md">
                  <Image
                    src="/images/ageng-graduation.jpg"
                    alt="Muhammad Ageng Zayem Wahid"
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900">
                    Muhammad Ageng Zayem Wahid
                  </h3>
                  <p className="text-xs text-[#2c67ed] font-mono font-semibold">
                    Backend & Cloud Native Practitioner
                  </p>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    S.Kom · Universitas Ahmad Dahlan
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center gap-2.5 text-xs text-emerald-800 font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                </span>
                <span>Aktif mencari peluang kerja Full-Time & Remote</span>
              </div>

              {/* Email Copy Card (Exact Eka Wahyu blue pill style) */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-500 font-semibold uppercase tracking-wider">
                  Email Langsung
                </span>
                <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-[#2c67ed] shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-zinc-900 font-bold truncate">
                      agngwahid123@gmail.com
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-xl bg-white hover:bg-zinc-100 border border-blue-200 text-[#2c67ed] transition shadow-xs cursor-pointer shrink-0"
                    aria-label="Salin alamat email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-600 font-mono text-right pr-1">
                    ✓ Alamat email berhasil disalin!
                  </p>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-xs font-mono text-zinc-600 pt-2 border-t border-zinc-100">
                <MapPin className="w-4 h-4 text-[#2c67ed]" />
                <span>Yogyakarta / Sleman, Indonesia · UTC+7</span>
              </div>
            </div>

            {/* Social Network Cards (Matches Eka Wahyu clickable cards) */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-500 font-semibold uppercase tracking-wider pl-1">
                Kanal Profesional
              </span>

              <a
                href="https://linkedin.com/in/agengwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 hover:border-[#2c67ed]/60 transition group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#2c67ed] group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#2c67ed] transition-colors leading-snug">
                      LinkedIn
                    </h4>
                    <p className="text-xs text-zinc-500 font-mono">
                      linkedin.com/in/agengwahid
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-[#2c67ed] transition-colors" />
              </a>

              <a
                href="https://github.com/agengwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 hover:border-[#2c67ed]/60 transition group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-900 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#2c67ed] transition-colors leading-snug">
                      GitHub
                    </h4>
                    <p className="text-xs text-zinc-500 font-mono">
                      github.com/agengwahid
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-[#2c67ed] transition-colors" />
              </a>

              <a
                href="https://instagram.com/agengwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 hover:border-[#2c67ed]/60 transition group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-pink-50 text-pink-600 group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 group-hover:text-[#2c67ed] transition-colors leading-snug">
                      Instagram
                    </h4>
                    <p className="text-xs text-zinc-500 font-mono">
                      @agengwahid
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-[#2c67ed] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="flex flex-col bg-white rounded-3xl p-6 py-8 sm:p-10 soft-card-shadow border border-zinc-200/80 space-y-6">
              <div className="pb-4 border-b border-zinc-100">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#2c67ed]" />
                  <span>Kirim Pesan Langsung</span>
                </h3>
                <p className="text-xs text-zinc-500 font-sans mt-1">
                  Pesan Anda akan langsung terkirim ke email pribadi saya. Saya akan merespon dalam waktu 1x24 jam.
                </p>
              </div>

              {submitSuccess && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda kembali.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-zinc-700">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-zinc-100/80 border border-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-[#2c67ed] focus:ring-2 focus:ring-[#2c67ed]/20 transition-colors duration-200 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-zinc-700">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@perusahaan.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-zinc-100/80 border border-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-[#2c67ed] focus:ring-2 focus:ring-[#2c67ed]/20 transition-colors duration-200 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-zinc-700">
                    Subjek / Perihal
                  </label>
                  <input
                    type="text"
                    placeholder="Tawaran Posisi Backend Engineer / Kolaborasi Proyek"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-zinc-100/80 border border-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-[#2c67ed] focus:ring-2 focus:ring-[#2c67ed]/20 transition-colors duration-200 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-zinc-700">
                    Pesan Detail *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Ceritakan tentang proyek, posisi, atau pertanyaan Anda..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-zinc-100/80 border border-transparent text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-[#2c67ed] focus:ring-2 focus:ring-[#2c67ed]/20 transition-colors duration-200 resize-none min-h-[120px] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-[#2c67ed] hover:bg-[#1d4ed8] rounded-xl font-semibold text-white shadow-md shadow-[#2c67ed]/30 transition-[transform,background-color] duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Mengirim Pesan...</span>
                    </div>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

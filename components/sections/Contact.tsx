"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Send, Copy, Check, ExternalLink, MessageSquare } from "lucide-react";
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
      className="relative z-10 w-full bg-gradient-to-b from-[#dcdce0] via-[#e4e4e7] to-[#d4d4d8] text-zinc-900 px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-zinc-300/80 overflow-hidden"
    >
      {/* Subtle top tonal highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.55)_0%,_transparent_60%)] pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-sm font-medium text-zinc-500">
            Hubungi Saya
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Kolaborasi &amp; Kesempatan Kerja
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
            <div className="bg-white rounded-2xl p-6 sm:p-7 soft-card-shadow border border-zinc-200/80 space-y-5">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-zinc-200">
                  <Image
                    src="/images/ageng-about.jpg"
                    alt="Muhammad Ageng Zayem Wahid"
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-950">
                    Muhammad Ageng Zayem Wahid
                  </h3>
                  <p className="text-xs text-zinc-700 font-medium">
                    Backend &amp; Web Developer
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    S.Kom · Universitas Ahmad Dahlan (2022–2026)
                  </p>
                </div>
              </div>

              {/* Quiet Availability Line */}
              <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center gap-2.5 text-xs text-zinc-700 font-medium">
                <span className="h-2 w-2 rounded-full bg-emerald-600 shrink-0" />
                <span>Tersedia untuk peluang Full-Time &amp; Remote</span>
              </div>

              {/* Email Copy Card */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-zinc-500">
                  Email Langsung
                </span>
                <div className="p-3.5 rounded-xl bg-zinc-100/80 border border-zinc-200/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-zinc-700 shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-zinc-900 font-semibold truncate">
                      agngwahid123@gmail.com
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-800 transition cursor-pointer shrink-0"
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
                  <p className="text-xs text-zinc-600 text-right pr-1">
                    Alamat email disalin.
                  </p>
                )}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-xs text-zinc-600 pt-2 border-t border-zinc-100">
                <MapPin className="w-4 h-4 text-zinc-700" />
                <span>Yogyakarta, Indonesia · UTC+7</span>
              </div>
            </div>

            {/* Social Network Cards */}
            <div className="space-y-3">
              <span className="text-xs font-medium text-zinc-500 pl-1 block">
                Kanal Profesional
              </span>

              <a
                href="https://linkedin.com/in/ageng14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 hover:border-zinc-400 transition group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-900">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 leading-snug">
                      LinkedIn
                    </h4>
                    <p className="text-xs text-zinc-500">
                      linkedin.com/in/ageng14
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </a>

              <a
                href="https://github.com/agengwahid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 hover:border-zinc-400 transition group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-900">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 leading-snug">
                      GitHub
                    </h4>
                    <p className="text-xs text-zinc-500">
                      github.com/agengwahid
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </a>

              <a
                href="https://instagram.com/__wahid14"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white soft-card-shadow border border-zinc-200/80 hover:border-zinc-400 transition group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-900">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950 leading-snug">
                      Instagram
                    </h4>
                    <p className="text-xs text-zinc-500">
                      @__wahid14
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="flex flex-col bg-white rounded-2xl p-6 py-8 sm:p-10 soft-card-shadow border border-zinc-200/80 space-y-6">
              <div className="pb-4 border-b border-zinc-100">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-zinc-700" />
                  <span>Kirim Pesan Langsung</span>
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Pesan Anda akan langsung diteruskan ke alamat email saya untuk ditindaklanjuti.
                </p>
              </div>

              {submitSuccess && (
                <div className="p-4 rounded-xl bg-zinc-100 border border-zinc-300 text-zinc-900 text-sm flex items-center gap-2">
                  <Check className="w-5 h-5 text-zinc-900 shrink-0" />
                  <span>Terima kasih! Pesan Anda telah tercatat. Saya akan segera menghubungi Anda kembali.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-700">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-zinc-100/80 border border-zinc-200/80 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 transition-colors duration-200 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-700">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@perusahaan.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-zinc-100/80 border border-zinc-200/80 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 transition-colors duration-200 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-700">
                    Subjek / Perihal
                  </label>
                  <input
                    type="text"
                    placeholder="Tawaran Posisi Backend Engineer / Kolaborasi Proyek"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full p-3.5 rounded-xl bg-zinc-100/80 border border-zinc-200/80 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 transition-colors duration-200 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-700">
                    Pesan Detail *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Ceritakan tentang proyek, posisi, atau pertanyaan Anda..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-zinc-100/80 border border-zinc-200/80 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:bg-white focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 transition-colors duration-200 resize-none min-h-[120px] text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-zinc-950 hover:bg-zinc-800 rounded-xl font-semibold text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer text-sm"
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

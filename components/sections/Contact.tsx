"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { Mail, MapPin, Copy, Check, Send, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/BrandIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const email = "agngwahid123@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject || "Collaboration with Ageng"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="Contact"
      className="relative z-10 w-full bg-[#07090e] text-white px-4 sm:px-6 lg:px-12 py-20 md:py-28 border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Section Header */}
        <BlurFade delay={0.05}>
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest font-semibold">
              <span>//</span>
              <span>HUBUNGI SAYA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Mari Membangun Sistem Bersama
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-sans">
              Terbuka untuk diskusi arsitektur backend, posisi engineering, maupun proyek kolaborasi teknologi.
            </p>
          </div>
        </BlurFade>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Social Links & Copy Email */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Copy Email Card */}
            <BlurFade delay={0.15}>
              <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 soft-card-shadow backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Email Utama
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Fast Response</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-3 truncate">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="text-sm font-mono text-zinc-200 select-all truncate">
                      {email}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/10 hover:bg-[#0284c7] text-zinc-300 hover:text-white transition cursor-pointer shrink-0"
                    title="Salin email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-zinc-400" />
                    )}
                  </button>
                </div>

                {copied && (
                  <p className="text-xs font-mono text-emerald-400">
                    ✓ Alamat email berhasil disalin ke clipboard!
                  </p>
                )}
              </div>
            </BlurFade>

            {/* Social Grid */}
            <BlurFade delay={0.22}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://linkedin.com/in/ageng14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-500/60 flex flex-col items-center justify-center gap-2 text-center group transition hover:-translate-y-1 soft-card-shadow"
                >
                  <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">ageng14</span>
                </a>

                <a
                  href="https://github.com/agengwahid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-500/60 flex flex-col items-center justify-center gap-2 text-center group transition hover:-translate-y-1 soft-card-shadow"
                >
                  <div className="p-2.5 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                    GitHub
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">agengwahid</span>
                </a>

                <a
                  href="https://instagram.com/__wahid14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-500/60 flex flex-col items-center justify-center gap-2 text-center group transition hover:-translate-y-1 soft-card-shadow"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 group-hover:scale-110 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    Instagram
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">__wahid14</span>
                </a>
              </div>
            </BlurFade>

            {/* Location Notice */}
            <BlurFade delay={0.28}>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 text-xs text-zinc-300 font-mono">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Berbasis di Yogyakarta, Indonesia · Terbuka untuk Remote, Hybrid, maupun Relokasi.</span>
              </div>
            </BlurFade>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.2}>
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 soft-card-shadow backdrop-blur-md space-y-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Kirim Pesan / Tawaran Kerja Sama</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-zinc-300">
                      Nama Anda / Organisasi *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe / Perusahaan"
                      className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-zinc-300">
                      Email Kontak *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-zinc-300">
                    Subjek
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Diskusi Posisi Backend / Peluang Cloud"
                    className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-zinc-300">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Ceritakan gambaran sistem, role backend/cloud, atau topik diskusi Anda..."
                    className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/40 transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-lg shadow-sky-950/60 transition-[transform,background-color] duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>
              </form>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}

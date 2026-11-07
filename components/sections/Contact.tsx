"use client";

import { useState } from "react";
import { Mail, MapPin, Copy, Check, Send, Terminal } from "lucide-react";
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
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
          <span>05</span>
          <span>{"//"}</span>
          <span>HUBUNGI SAYA</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Mari Membangun Sistem Bersama
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Terbuka untuk posisi Backend Engineer, Cloud Practitioner, proyek konsultasi arsitektur sistem, maupun diskusi teknis.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Direct Links & Copy Box */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Copy Email Card */}
          <div className="p-6 rounded-2xl glass-card border border-slate-800/90 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-slate-400">Email Utama</span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Fast Response</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2.5 truncate">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-sm font-mono text-slate-200 select-all truncate">
                  {email}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer shrink-0"
                title="Salin email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400" />
                )}
              </button>
            </div>

            {copied && (
              <p className="text-xs font-mono text-emerald-400">
                ✓ Alamat email disalin ke clipboard!
              </p>
            )}
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="https://linkedin.com/in/ageng14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass-card border border-slate-800/80 hover:border-cyan-500/50 flex flex-col items-center justify-center gap-2 text-center group transition"
            >
              <div className="p-2.5 rounded-lg bg-blue-950/60 text-blue-400 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-200 group-hover:text-cyan-300">LinkedIn</span>
              <span className="text-[10px] font-mono text-slate-500">ageng14</span>
            </a>

            <a
              href="https://github.com/agengwahid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass-card border border-slate-800/80 hover:border-cyan-500/50 flex flex-col items-center justify-center gap-2 text-center group transition"
            >
              <div className="p-2.5 rounded-lg bg-slate-800 text-slate-200 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-200 group-hover:text-cyan-300">GitHub</span>
              <span className="text-[10px] font-mono text-slate-500">agengwahid</span>
            </a>

            <a
              href="https://instagram.com/__wahid14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass-card border border-slate-800/80 hover:border-cyan-500/50 flex flex-col items-center justify-center gap-2 text-center group transition"
            >
              <div className="p-2.5 rounded-lg bg-pink-950/60 text-pink-400 group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium text-slate-200 group-hover:text-cyan-300">Instagram</span>
              <span className="text-[10px] font-mono text-slate-500">__wahid14</span>
            </a>
          </div>

          {/* Location & Availability Note */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300 font-mono">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Berbasis di Yogyakarta, Indonesia · Terbuka untuk Remote, Hybrid, maupun Relokasi.</span>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-800/90 space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Terminal className="w-4 h-4" />
              <span>Kirim Pesan / Tawaran Kolaborasi</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono text-slate-300">
                  Nama Anda / Perusahaan *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. John Doe / Tech Company"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono text-slate-300">
                  Email Anda *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                Subjek Pesan
              </label>
              <input
                id="subject"
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                placeholder="e.g. Diskusi Posisi Backend / Peluang Proyek"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono text-slate-300">
                Pesan / Keterangan Kebutuhan *
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tuliskan gambaran proyek, role pekerjaan, atau topik yang ingin didiskusikan..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-950/50 transition-all cursor-pointer min-h-[46px]"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesan Sekarang</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

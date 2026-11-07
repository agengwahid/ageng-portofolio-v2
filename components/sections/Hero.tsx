import Image from "next/image";
import { ArrowRight, Download, Terminal, MapPin, GraduationCap, Cloud, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 md:pt-44 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]"
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headlines & Call to Action */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm shadow-emerald-950/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE FOR BACKEND & CLOUD ROLES</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <p className="text-xs sm:text-sm font-mono text-cyan-400 tracking-wider uppercase font-semibold">
              Software Engineer · Cloud Native Practitioner
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Architecting{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                Resilient Backends
              </span>{" "}
              & Cloud-Native Systems.
            </h1>
          </div>

          {/* Bio Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Halo, saya <span className="text-white font-medium">Muhammad Ageng Zayem Wahid</span>. 
            Lulusan S1 Informatika Universitas Ahmad Dahlan (<span className="text-cyan-300 font-medium">IPK 3.91/4.00 · 3.5 Tahun</span>) 
            dan Alumnus <span className="text-cyan-300 font-medium">Bangkit Academy 2024 Google Cloud Cohort</span>. 
            Berfokus pada perancangan API berkecepatan tinggi, database relasional ternormalisasi, 
            dan otomasi deployment kontainer di Google Cloud Platform.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all duration-200 group min-h-[46px]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/70 hover:bg-slate-800/90 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 shadow-sm transition-all duration-200 min-h-[46px]"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-colors min-h-[46px]"
            >
              <span>Contact Me</span>
              <span className="font-mono text-cyan-400">→</span>
            </a>
          </div>

          {/* Verified Badges Row */}
          <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bangkit 2024 Graduate</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>GPA 3.91 / 4.00</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>2 Years CS Lab TA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Telemetry Card */}
        <div className="lg:col-span-5 relative">
          {/* Subtle Glow behind the card */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-xl opacity-60" />

          <div className="relative rounded-2xl glass-card overflow-hidden shadow-2xl border border-slate-700/60">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>ageng@engineer-node:~$</span>
              </div>
              <div className="w-12 text-right">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-xs text-slate-300 space-y-3 bg-[#070b16]/95">
              <div className="text-slate-400">
                <span className="text-cyan-400">ageng@engineer</span>:<span className="text-blue-400">~</span>$ whoami
              </div>
              <div className="pl-3 border-l-2 border-cyan-500/40 text-slate-200">
                <p className="font-semibold text-white">Muhammad Ageng Zayem Wahid</p>
                <p className="text-cyan-300">Backend & Cloud Engineer</p>
              </div>

              <div className="text-slate-400 pt-1">
                <span className="text-cyan-400">ageng@engineer</span>:<span className="text-blue-400">~</span>$ telemetry --system
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] flex items-center gap-1">
                    <GraduationCap className="w-3 h-3 text-cyan-400" />
                    ACADEMICS
                  </div>
                  <div className="text-slate-100 font-semibold mt-1">IPK 3.91 / 4.00</div>
                  <div className="text-slate-400 text-[10px]">UAD · 3.5 Tahun</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] flex items-center gap-1">
                    <Cloud className="w-3 h-3 text-cyan-400" />
                    CLOUD COHORT
                  </div>
                  <div className="text-slate-100 font-semibold mt-1">Bangkit 2024</div>
                  <div className="text-slate-400 text-[10px]">Google Cloud Track</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    BASE LOCATION
                  </div>
                  <div className="text-slate-100 font-semibold mt-1">Yogyakarta, ID</div>
                  <div className="text-slate-400 text-[10px]">Remote / On-site</div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px]">CORE ARCHITECTURE</div>
                  <div className="text-emerald-400 font-semibold mt-1">REST · Cloud Run</div>
                  <div className="text-slate-400 text-[10px]">Docker & Relational DB</div>
                </div>
              </div>

              <div className="text-slate-400 pt-1">
                <span className="text-cyan-400">ageng@engineer</span>:<span className="text-blue-400">~</span>$ active-stack
              </div>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {["Node.js", "Express", "Laravel", "Docker", "GCP", "PostgreSQL", "MySQL", "TypeScript"].map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-cyan-300 border border-slate-700/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


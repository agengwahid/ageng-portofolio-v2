import Image from "next/image";
import { experiences } from "@/data/experience";
import { Server, Cloud, Code2, Cpu, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
          <span>01</span>
          <span>{"//"}</span>
          <span>PROFIL & LATAR BELAKANG TEKNIS</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Tentang Saya & Rekayasa Sistem
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Fokus pada arsitektur perangkat lunak yang andal, scalable, dan efisien dalam konsumsi sumber daya komputasi.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Photo & Core Principles */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative rounded-2xl glass-card p-4 sm:p-5 border border-slate-800/90 overflow-hidden group">
            <div className="relative aspect-4/5 w-full rounded-xl overflow-hidden border border-slate-700/60 shadow-2xl">
              <Image
                src="/images/profile.jpg"
                alt="Muhammad Ageng Zayem Wahid"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-800">
                <div className="text-sm font-semibold text-white">Muhammad Ageng Zayem Wahid, S.Kom.</div>
                <div className="text-xs text-cyan-300 font-mono">Backend & Cloud Engineer · UAD Alumnus</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">LULUS KULIAH</span>
                <span className="text-white font-bold">3.5 Tahun</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 block text-[10px]">INDEKS PRESTASI</span>
                <span className="text-cyan-400 font-bold">3.91 / 4.00</span>
              </div>
            </div>
          </div>

          {/* Engineering Pillars */}
          <div className="p-5 rounded-2xl glass-card border border-slate-800/80 space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Pilar Rekayasa Perangkat Lunak
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>API Resilience:</strong> Desain RESTful API dengan struktur payload teruji, rate-limiting, dan penanganan error fail-safe.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Normalized Schemas:</strong> Normalisasi database relasional MySQL & PostgreSQL demi integritas data dan sub-second index query.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Cloud-Native Deployment:</strong> Containerization Docker dan deployment auto-scaled di Google Cloud Run.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Experience Timeline */}
        <div className="lg:col-span-7 space-y-8">
          {/* Bio Paragraphs */}
          <div className="p-6 rounded-2xl glass-card border border-slate-800/80 space-y-4 text-slate-300 text-sm leading-relaxed">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-cyan-400" />
              Dedikasi pada Keandalan Sistem & Arsitektur Cloud
            </h3>
            <p>
              Saya merupakan Sarjana Informatika dari Universitas Ahmad Dahlan yang menyelesaikan studi fast-track dalam waktu 3.5 tahun dengan predikat kelulusan IPK 3.91. Ketertarikan mendalam saya pada infrastruktur backend dan cloud computing mengantarkan saya terpilih dalam cohort <strong>Bangkit Academy 2024 Google Cloud Track</strong>.
            </p>
            <p>
              Selama menempuh pendidikan, saya dipercaya menjadi <strong>Asisten Dosen Laboratorium Komputer</strong> selama dua tahun untuk mendampingi ratusan mahasiswa pada mata kuliah Pemrograman Dasar (C++), Logika Informatika, dan Sistem Operasi (Linux). Pengalaman ini menajamkan kemampuan komunikasi teknis, problem solving algoritmis, dan budaya review kode yang presisi.
            </p>
            <p>
              Di dunia industri nyata, saya telah merancang dan mengimplementasikan sistem informasi enterprise, seperti sistem manajemen hauling dan logistik pertambangan (SJP), portal akademik SMK Negeri 1 Lebong, serta sistem backend inference Machine Learning pada Google Cloud Platform.
            </p>
          </div>

          {/* Timeline of Experience */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Cloud className="w-5 h-5 text-cyan-400" />
              Rekam Jejak & Pengalaman
            </h3>

            <div className="space-y-4">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl glass-card border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                      {item.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white">{item.role}</h4>
                  <div className="text-xs text-slate-400 font-medium mb-3">
                    {item.organization} · {item.location}
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-cyan-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, Cloud, Users, ShieldCheck } from "lucide-react";

export default function BentoStats() {
  const stats = [
    {
      icon: Award,
      title: "Academic Honor",
      metric: "IPK 3.91 / 4.00",
      subtitle: "Lulus Tepat Waktu (3.5 Tahun Fast-Track)",
      description: "Sarjana Informatika Universitas Ahmad Dahlan dengan predikat kelulusan cumlaude.",
      color: "from-amber-500/20 to-orange-600/20",
      accent: "text-amber-400",
      border: "hover:border-amber-500/40",
    },
    {
      icon: Cloud,
      title: "Cloud Computing Alumnus",
      metric: "Bangkit 2024",
      subtitle: "Google, GoTo, Traveloka Cohort",
      description: "Spesialisasi arsitektur cloud terdistribusi, GCP Cloud Run, Cloud Storage, dan integrasi model ML.",
      color: "from-cyan-500/20 to-blue-600/20",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/40",
    },
    {
      icon: Users,
      title: "Teaching Assistant",
      metric: "2 Tahun Lab IF",
      subtitle: "200+ Mahasiswa Terbimbing",
      description: "Membimbing praktikum Pemrograman Dasar (C++), Logika Informatika, dan Sistem Operasi (Linux).",
      color: "from-emerald-500/20 to-teal-600/20",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/40",
    },
    {
      icon: ShieldCheck,
      title: "Verified Credentials",
      metric: "17+ Sertifikat",
      subtitle: "Software & Cloud Systems",
      description: "Sertifikasi keahlian terverifikasi dari Dicoding Indonesia, Google Cloud, dan Kampus Merdeka.",
      color: "from-indigo-500/20 to-purple-600/20",
      accent: "text-indigo-400",
      border: "hover:border-indigo-500/40",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className={`relative p-5 sm:p-6 rounded-2xl glass-card border border-slate-800/80 transition-all duration-300 group overflow-hidden ${item.border}`}
            >
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${item.color} blur-2xl opacity-40 group-hover:opacity-70 transition-opacity`}
              />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  {item.title}
                </span>
                <div className={`p-2 rounded-xl bg-slate-900/90 border border-slate-800 ${item.accent}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>

              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                {item.metric}
              </div>

              <div className={`text-xs font-semibold mb-2 ${item.accent}`}>
                {item.subtitle}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}


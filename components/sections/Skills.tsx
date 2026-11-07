import { skillCategories } from "@/data/skills";
import { Server, Cloud, Database, Code, Cpu } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Server;
      case 1:
        return Cloud;
      case 2:
        return Database;
      default:
        return Code;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
          <span>02</span>
          <span>{"//"}</span>
          <span>KEAHLIAN TEKNOLOGI & TOOLING</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Tech Stack & Infrastruktur
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Rangkaian teknologi yang rutin saya gunakan dalam mendesain, menguji, dan mendeploy aplikasi tingkat produksi.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, idx) => {
          const IconComponent = getCategoryIcon(idx);
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-card border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400">{cat.description}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => {
                    const isAdvanced = skill.level === "Advanced";
                    return (
                      <div
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-2 border transition-colors ${
                          isAdvanced
                            ? "bg-slate-900/90 text-cyan-200 border-cyan-500/40 hover:border-cyan-400"
                            : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <span className="font-medium">{skill.name}</span>
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider font-semibold ${
                            isAdvanced
                              ? "bg-cyan-950 text-cyan-400 border border-cyan-500/30"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Production Standard</span>
                <span className="text-cyan-500/80 flex items-center gap-1">
                  <Cpu className="w-3 h-3" />
                  High Performance
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


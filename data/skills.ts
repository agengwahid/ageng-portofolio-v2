export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Advanced" | "Proficient" | "Familiar";
    badgeColor?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Engineering & Architecture",
    description: "Merancang API tangguh, fail-safe services, dan skema database teroptimasi.",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "PHP", level: "Advanced" },
      { name: "Laravel", level: "Advanced" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Clean Architecture & OOP", level: "Proficient" },
      { name: "Authentication & RBAC", level: "Advanced" },
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Provisioning workload kontainer, microservices, dan deployment otomatis.",
    skills: [
      { name: "Google Cloud (GCP)", level: "Advanced" },
      { name: "GCP Cloud Run", level: "Advanced" },
      { name: "GCP Cloud Storage", level: "Advanced" },
      { name: "Docker & Containerization", level: "Proficient" },
      { name: "Linux / Bash Scripting", level: "Proficient" },
      { name: "Git & GitHub CI/CD", level: "Advanced" },
      { name: "Firebase Platform", level: "Proficient" },
    ],
  },
  {
    title: "Databases & Storage Engines",
    description: "Normalisasi data, optimasi index query, dan integrasi storage terdistribusi.",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Google Firestore (NoSQL)", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "SQLite", level: "Proficient" },
      { name: "Query Indexing & Tuning", level: "Proficient" },
    ],
  },
  {
    title: "Languages & Modern Web",
    description: "Pengembangan full-stack dengan ekosistem JavaScript/TypeScript dan styling modern.",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "PHP", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "Next.js", level: "Proficient" },
      { name: "React", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "C++", level: "Familiar" },
    ],
  },
];

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
    title: "Server Administration, DevOps & Cloud",
    description: "Administrasi server Linux, provisioning container Docker, web server Nginx, dan arsitektur cloud GCP.",
    skills: [
      { name: "Linux Server Administration", level: "Advanced" },
      { name: "Docker & Containerization", level: "Advanced" },
      { name: "Nginx & Reverse Proxy", level: "Advanced" },
      { name: "Git & GitHub CI/CD", level: "Advanced" },
      { name: "Server Security & Firewall (UFW)", level: "Proficient" },
      { name: "Google Cloud Platform (GCP)", level: "Advanced" },
      { name: "GCP Cloud Run & Storage", level: "Advanced" },
      { name: "Bash Scripting & Cron Jobs", level: "Proficient" },
    ],
  },
  {
    title: "Backend Engineering & API Architecture",
    description: "Merancang arsitektur API berskala tinggi, microservices, dan logic backend yang tangguh.",
    skills: [
      { name: "PHP & Laravel Framework", level: "Advanced" },
      { name: "Node.js & Express.js", level: "Advanced" },
      { name: "RESTful API Design & Best Practices", level: "Advanced" },
      { name: "Redis (In-Memory Cache & Queues)", level: "Proficient" },
      { name: "Authentication & RBAC (JWT/Sanctum)", level: "Advanced" },
      { name: "Clean Architecture & OOP", level: "Proficient" },
      { name: "Go / Golang (Microservices)", level: "Familiar" },
    ],
  },
  {
    title: "Databases, Caching & Data Modeling",
    description: "Normalisasi skema relasional, optimasi index query, dan integrasi storage terdistribusi.",
    skills: [
      { name: "MySQL & Relational Modeling", level: "Advanced" },
      { name: "Redis Caching & Key-Value Store", level: "Proficient" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "Google Firestore (NoSQL)", level: "Proficient" },
      { name: "Query Indexing & Performance Tuning", level: "Advanced" },
      { name: "SQLite", level: "Proficient" },
      { name: "Database Migrations & Seeding", level: "Advanced" },
    ],
  },
  {
    title: "Languages & Modern Web Engineering",
    description: "Pengembangan full-stack modern dengan ekosistem TypeScript/JavaScript, CSS modern, dan client-side tooling.",
    skills: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "PHP", level: "Advanced" },
      { name: "Next.js & React", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Client-Side WASM & Web Workers", level: "Proficient" },
      { name: "Python", level: "Proficient" },
      { name: "HTML5 / Responsive Design", level: "Advanced" },
    ],
  },
];

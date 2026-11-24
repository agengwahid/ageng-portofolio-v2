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
    description: "Administrasi server Linux, container Docker, web server Nginx, Git workflow, dan Google Cloud Platform.",
    skills: [
      { name: "Linux Server Administration", level: "Proficient" },
      { name: "Docker", level: "Proficient" },
      { name: "Nginx", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Server Security & Firewall (UFW)", level: "Proficient" },
      { name: "Google Cloud Platform (GCP)", level: "Proficient" },
      { name: "Cloud Run & Cloud Storage", level: "Proficient" },
      { name: "Bash Scripting & Cron Jobs", level: "Proficient" },
    ],
  },
  {
    title: "Backend Engineering & API",
    description: "Pengembangan aplikasi server-side, perancangan RESTful API, autentikasi, dan caching.",
    skills: [
      { name: "PHP & Laravel", level: "Advanced" },
      { name: "Node.js & Express.js", level: "Proficient" },
      { name: "RESTful API", level: "Advanced" },
      { name: "Redis", level: "Proficient" },
      { name: "Authentication & RBAC", level: "Proficient" },
      { name: "MVC & Clean Code", level: "Proficient" },
    ],
  },
  {
    title: "Databases & Data Management",
    description: "Perancangan skema basis data relasional maupun NoSQL dan pengelolaan query aplikasi.",
    skills: [
      { name: "MySQL", level: "Advanced" },
      { name: "Redis Key-Value Store", level: "Proficient" },
      { name: "PostgreSQL", level: "Familiar" },
      { name: "Google Firestore (NoSQL)", level: "Proficient" },
      { name: "Query Optimization", level: "Proficient" },
      { name: "Database Migrations & Seeding", level: "Advanced" },
    ],
  },
  {
    title: "Languages & Web Frontend",
    description: "Bahasa pemrograman dan teknologi web modern untuk membangun antarmuka aplikasi.",
    skills: [
      { name: "PHP", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
      { name: "Next.js & React", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 & CSS3", level: "Advanced" },
      { name: "C++ (Lab Teaching)", level: "Proficient" },
    ],
  },
];

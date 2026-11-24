export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Server Administration, DevOps & Cloud",
    description: "Administrasi server Linux, container Docker, web server Nginx, Git workflow, dan Google Cloud Platform.",
    skills: [
      "Linux Server Administration",
      "Docker",
      "Nginx",
      "Git & GitHub",
      "Server Security & Firewall (UFW)",
      "Google Cloud Platform (GCP)",
      "Cloud Run & Cloud Storage",
      "Bash Scripting & Shell",
    ],
  },
  {
    title: "Backend Engineering & CMS",
    description: "Pengembangan aplikasi server-side, perancangan RESTful API, autentikasi, caching, serta custom theme CMS.",
    skills: [
      "PHP & Laravel",
      "WordPress (Custom Theme)",
      "Node.js & Express.js",
      "RESTful API",
      "Redis",
      "Inertia.js",
      "Authentication & RBAC",
      "Pest PHP Testing",
    ],
  },
  {
    title: "Databases & Data Management",
    description: "Perancangan skema basis data relasional maupun NoSQL dan pengelolaan query aplikasi.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis Key-Value Store",
      "SQLite",
      "Google Firestore (NoSQL)",
      "Query Optimization",
      "Database Migrations & Seeding",
    ],
  },
  {
    title: "Languages & Web Frontend",
    description: "Bahasa pemrograman dan teknologi web untuk membangun antarmuka aplikasi.",
    skills: [
      "PHP",
      "JavaScript",
      "TypeScript",
      "Vue 3",
      "Blade Template",
      "Next.js & React",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "C++",
    ],
  },
];

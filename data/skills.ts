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
      "Bash Scripting & Cron Jobs",
    ],
  },
  {
    title: "Backend Engineering & API",
    description: "Pengembangan aplikasi server-side, perancangan RESTful API, autentikasi, dan caching.",
    skills: [
      "PHP & Laravel",
      "Node.js & Express.js",
      "RESTful API",
      "Redis",
      "Authentication & RBAC",
      "MVC Architecture",
    ],
  },
  {
    title: "Databases & Data Management",
    description: "Perancangan skema basis data relasional maupun NoSQL dan pengelolaan query aplikasi.",
    skills: [
      "MySQL",
      "Redis Key-Value Store",
      "PostgreSQL",
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
      "Next.js & React",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "C++",
    ],
  },
];

export interface SkillCategory {
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Server Administration, DevOps & Cloud",
    titleEn: "Server Administration, DevOps & Cloud",
    description: "Administrasi server Linux, container Docker, web server Nginx, Git workflow, dan Google Cloud Platform.",
    descriptionEn: "Linux server administration, Docker containers, Nginx reverse proxy, Git workflows, and Google Cloud Platform.",
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
    titleEn: "Backend Engineering & CMS",
    description: "Pengembangan aplikasi server-side, perancangan RESTful API, autentikasi, caching, serta custom theme CMS.",
    descriptionEn: "Server-side application engineering, RESTful APIs, authentication, Redis caching, and custom CMS theming.",
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
    titleEn: "Databases & Data Management",
    description: "Perancangan skema basis data relasional maupun NoSQL dan pengelolaan query aplikasi.",
    descriptionEn: "Relational & NoSQL schema design, query optimization, migrations, and key-value stores.",
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
    titleEn: "Languages & Web Frontend",
    description: "Bahasa pemrograman dan teknologi web untuk membangun antarmuka aplikasi.",
    descriptionEn: "Core languages and modern frontend ecosystems for responsive web interfaces.",
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

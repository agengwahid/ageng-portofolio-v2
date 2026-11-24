export interface ExperienceItem {
  period: string;
  periodEn?: string;
  role: string;
  roleEn?: string;
  organization: string;
  organizationEn?: string;
  location: string;
  type: "Work & TA" | "Education" | "Training" | "Internship";
  description: string[];
  descriptionEn?: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "Sep 2026 – Sekarang",
    periodEn: "Sep 2026 – Present",
    role: "Software Engineer Intern",
    roleEn: "Software Engineer Intern",
    organization: "PT SELAMAT JAYA PERSADA · Magang",
    organizationEn: "PT SELAMAT JAYA PERSADA · Internship",
    location: "Bengkulu, Indonesia · Onsite",
    type: "Internship",
    description: [
      "Mengembangkan dan memelihara sistem informasi operasional internal bersama tim, termasuk General Affairs & Information System (GAIS) berbasis Laravel, PostgreSQL, dan Docker.",
      "Mengelola website company profile perusahaan (Compro) menggunakan WordPress custom theme berbasis Docker serta menyiapkan pengembangan migrasi ke Laravel.",
      "Menangani konfigurasi container Docker, caching Redis, version control Git, serta administrasi server Linux dan Nginx.",
    ],
    descriptionEn: [
      "Developed and maintained internal operational web systems with the engineering team, including the General Affairs & Asset Management System (GAIS) backed by Laravel, PostgreSQL, and Docker.",
      "Managed the corporate company profile website built with a custom WordPress theme in Docker containers and contributed to ongoing architecture migration toward Laravel.",
      "Handled Docker configurations, Redis caching, Git workflows, and Linux VPS / Nginx reverse proxy administration.",
    ],
    skills: ["Laravel", "PostgreSQL", "Docker", "WordPress", "Redis", "Linux Server", "Nginx", "Git"],
  },
  {
    period: "Jul 2026 – Sep 2026",
    periodEn: "Jul 2026 – Sep 2026",
    role: "Mentor",
    roleEn: "Programming Mentor (Freelance)",
    organization: "Global Solusi Edukasi · Pekerja Lepas",
    organizationEn: "Global Solusi Edukasi · Freelance",
    location: "D.I. Yogyakarta, Indonesia · Onsite",
    type: "Work & TA",
    description: [
      "Mengajar dan membimbing siswa dalam dasar coding dan teknologi secara interaktif.",
      "Membantu siswa meningkatkan pemahaman konsep pemrograman, problem solving, serta minat terhadap bidang teknologi.",
    ],
    descriptionEn: [
      "Taught and mentored students interactively in foundational programming and technology concepts.",
      "Guided learners in strengthening logical problem solving and building lasting interest in software development.",
    ],
    skills: ["Teaching", "Mentoring", "Problem Solving", "Programming Basics"],
  },
  {
    period: "2024",
    role: "Cloud Computing Cohort (MBKM – MSIB)",
    roleEn: "Cloud Computing Cohort (MBKM – MSIB)",
    organization: "Bangkit Academy led by Google, GoTo, Traveloka",
    location: "Remote / Hybrid",
    type: "Training",
    description: [
      "Menyelesaikan program Studi Independen Bersertifikat (MSIB) jalur Cloud Computing dengan fokus pada layanan Google Cloud Platform (GCP).",
      "Mempelajari pengembangan backend menggunakan Node.js, Express.js, perancangan RESTful API, pengelolaan database, dan deployment aplikasi di cloud.",
      "Berkolaborasi dalam tim proyek capstone DermaScan untuk membangun backend API dan mengintegrasikannya dengan model Machine Learning serta layanan cloud.",
    ],
    descriptionEn: [
      "Completed Indonesia's Independent Campus (MBKM) Cloud Computing track specializing in Google Cloud Platform (GCP).",
      "Trained in backend development using Node.js and Express.js, RESTful API design, databases, and cloud application deployment.",
      "Collaborated on the DermaScan capstone project, building backend APIs integrated with ML inference and cloud services.",
    ],
    skills: ["Google Cloud Platform", "Node.js", "Express.js", "RESTful API", "Cloud Run", "Database"],
  },
  {
    period: "2023 – 2025",
    role: "Asisten Praktikum Laboratorium Informatika",
    roleEn: "Teaching Assistant — Informatics Laboratory",
    organization: "Universitas Ahmad Dahlan",
    organizationEn: "Ahmad Dahlan University",
    location: "Yogyakarta, Indonesia",
    type: "Work & TA",
    description: [
      "Membantu pelaksanaan sesi praktikum pada mata kuliah Dasar Pemrograman, Algoritma Pemrograman, Logika Informatika, dan Sistem Operasi.",
      "Membimbing mahasiswa dalam menyelesaikan latihan dan soal pemrograman serta memberikan dukungan teknis selama sesi praktikum berlangsung.",
      "Melakukan evaluasi dan penilaian tugas praktikum mingguan mahasiswa.",
    ],
    descriptionEn: [
      "Assisted laboratory sessions across Introduction to Programming, Programming Algorithms, Informatics Logic, and Operating Systems.",
      "Guided students in solving programming problems, provided technical support during lab sessions, and evaluated assignments.",
    ],
    skills: ["Algorithms", "Intro to Programming", "Informatics Logic", "Operating Systems", "C++", "Linux"],
  },
  {
    period: "2023 – 2024",
    role: "Staff Departemen Ilmu Pengetahuan & Teknologi (IPTEK)",
    roleEn: "Staff of Science & Technology Department — HMIF & Informatics Week SC",
    organization: "Himpunan Mahasiswa Informatika (HMIF) UAD",
    organizationEn: "Informatics Student Association (HMIF UAD)",
    location: "Yogyakarta, Indonesia",
    type: "Work & TA",
    description: [
      "Berkolaborasi dalam merencanakan dan menyelenggarakan program akademik serta kegiatan teknologi untuk pengembangan wawasan teknis mahasiswa.",
      "Berperan sebagai Steering Committee pada kegiatan Informatics Week Universitas Ahmad Dahlan (2024) dalam koordinasi panitia dan jadwal acara.",
    ],
    descriptionEn: [
      "Collaborated in organizing academic and technology student programs to support technical skill growth.",
      "Served as Steering Committee for Informatics Week 2024, coordinating multiple committees and event schedules.",
    ],
    skills: ["Teamwork", "Event Coordination", "Communication"],
  },
  {
    period: "2022 – 2026",
    role: "S1 Informatika (S.Kom)",
    roleEn: "Bachelor of Informatics (S.Kom)",
    organization: "Universitas Ahmad Dahlan",
    organizationEn: "Ahmad Dahlan University (UAD)",
    location: "Yogyakarta, Indonesia",
    type: "Education",
    description: [
      "Menyelesaikan studi Sarjana Informatika dalam 3,5 tahun dengan Indeks Prestasi Kumulatif (IPK) 3,91 / 4,00.",
      "Berfokus pada pengembangan aplikasi web, rekayasa backend, basis data relasional maupun NoSQL, dan komputasi awan.",
    ],
    descriptionEn: [
      "Graduated with a Bachelor of Informatics degree completed in 3.5 years with a GPA of 3.91 / 4.00.",
      "Focused on web application development, backend engineering, relational & NoSQL databases, and cloud computing.",
    ],
    skills: ["Backend Development", "Web Development", "PostgreSQL", "MySQL", "Cloud Computing", "Git"],
  },
];

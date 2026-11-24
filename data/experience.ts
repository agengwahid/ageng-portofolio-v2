export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "Work & TA" | "Education" | "Training" | "Internship";
  description: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "Sep 2026 – Sekarang",
    role: "Software Engineer Intern",
    organization: "PT SELAMAT JAYA PERSADA · Magang",
    location: "Bengkulu, Indonesia · Di lokasi",
    type: "Internship",
    description: [
      "Mengembangkan dan memelihara sistem informasi operasional internal bersama tim, termasuk General Affairs & Information System (GAIS) berbasis Laravel, PostgreSQL, dan Docker.",
      "Mengelola website company profile perusahaan (Compro) menggunakan WordPress custom theme berbasis Docker serta menyiapkan pengembangan migrasi ke Laravel.",
      "Menangani konfigurasi container Docker, caching Redis, version control Git, serta administrasi server Linux dan Nginx.",
    ],
    skills: ["Laravel", "PostgreSQL", "Docker", "WordPress", "Redis", "Linux Server", "Nginx", "Git"],
  },
  {
    period: "Jul 2026 – Sep 2026",
    role: "Mentor",
    organization: "Global Solusi Edukasi · Pekerja Lepas",
    location: "Daerah Istimewa Yogyakarta, Indonesia · Di lokasi",
    type: "Work & TA",
    description: [
      "Mengajar dan membimbing siswa dalam dasar coding dan teknologi secara interaktif.",
      "Membantu siswa meningkatkan pemahaman konsep pemrograman, problem solving, serta minat terhadap bidang teknologi.",
    ],
    skills: ["Teaching", "Mentoring", "Problem Solving", "Dasar Pemrograman"],
  },
  {
    period: "2024",
    role: "Cloud Computing Cohort (MBKM – MSIB)",
    organization: "Bangkit Academy led by Google, GoTo, Traveloka",
    location: "Remote / Hybrid",
    type: "Training",
    description: [
      "Menyelesaikan program Studi Independen Bersertifikat (MSIB) jalur Cloud Computing dengan fokus pada layanan Google Cloud Platform (GCP).",
      "Mempelajari pengembangan backend menggunakan Node.js, Express.js, perancangan RESTful API, pengelolaan database, dan deployment aplikasi di cloud.",
      "Berkolaborasi dalam tim proyek capstone DermaScan untuk membangun backend API dan mengintegrasikannya dengan model Machine Learning serta layanan cloud.",
    ],
    skills: ["Google Cloud Platform", "Node.js", "Express.js", "RESTful API", "Cloud Run", "Database"],
  },
  {
    period: "2023 – 2025",
    role: "Asisten Praktikum Laboratorium Informatika",
    organization: "Universitas Ahmad Dahlan",
    location: "Yogyakarta, Indonesia",
    type: "Work & TA",
    description: [
      "Membantu pelaksanaan sesi praktikum pada mata kuliah Dasar Pemrograman, Algoritma Pemrograman, Logika Informatika, dan Sistem Operasi.",
      "Membimbing mahasiswa dalam menyelesaikan latihan dan soal pemrograman serta memberikan dukungan teknis selama sesi praktikum berlangsung.",
      "Melakukan evaluasi dan penilaian tugas praktikum mingguan mahasiswa.",
    ],
    skills: ["Algoritma Pemrograman", "Dasar Pemrograman", "Logika Informatika", "Sistem Operasi", "C++", "Linux"],
  },
  {
    period: "2023 – 2024",
    role: "Staff Departemen Ilmu Pengetahuan & Teknologi (IPTEK)",
    organization: "Himpunan Mahasiswa Informatika (HMIF) UAD",
    location: "Yogyakarta, Indonesia",
    type: "Work & TA",
    description: [
      "Berkolaborasi dalam merencanakan dan menyelenggarakan program akademik serta kegiatan teknologi untuk pengembangan wawasan teknis mahasiswa.",
      "Berperan sebagai Steering Committee pada kegiatan Informatics Week Universitas Ahmad Dahlan (2024) dalam koordinasi panitia dan jadwal acara.",
    ],
    skills: ["Teamwork", "Manajemen Acara", "Koordinasi Tim", "Komunikasi"],
  },
  {
    period: "2022 – 2026",
    role: "S1 Informatika (S.Kom)",
    organization: "Universitas Ahmad Dahlan",
    location: "Yogyakarta, Indonesia",
    type: "Education",
    description: [
      "Menyelesaikan studi Sarjana Informatika dalam 3,5 tahun dengan Indeks Prestasi Kumulatif (IPK) 3,91 / 4,00.",
      "Berfokus pada pengembangan aplikasi web, rekayasa backend, basis data relasional maupun NoSQL, dan komputasi awan.",
    ],
    skills: ["Backend Development", "Web Development", "PostgreSQL", "MySQL", "Cloud Computing", "Git"],
  },
];

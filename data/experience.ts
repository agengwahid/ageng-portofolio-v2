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
    period: "Sep 2024 – Sekarang",
    role: "Software Engineer Intern",
    organization: "PT SELAMAT JAYA PERSADA",
    location: "Bengkulu, Indonesia · Di lokasi",
    type: "Internship",
    description: [
      "Mengembangkan dan memelihara sistem informasi operasional pertambangan skala industri, termasuk General Affairs & Information System (GAIS) dan sistem penimbangan hauling dump truck.",
      "Merancang skema database relasional MySQL, query indexing teroptimasi, serta RESTful API untuk pencatatan mutasi aset, maintenance, dan verifikasi label QR Code.",
      "Membangun portal profil korporat resmi berbasis Laravel dan Tailwind CSS dengan content management system (CMS) dan optimasi SEO teknis.",
      "Melakukan deployment dan konfigurasi server Linux (Ubuntu VPS) dengan web server Nginx reverse proxy dan SSL/TLS Let's Encrypt.",
    ],
    skills: ["Software Engineering", "Laravel", "PHP", "MySQL", "REST APIs", "Docker", "Linux Server", "Nginx"],
  },
  {
    period: "Jul 2024 – Sep 2024",
    role: "Mentor Pemrograman",
    organization: "Global Solusi Edukasi",
    location: "D.I. Yogyakarta, Indonesia · Di lokasi",
    type: "Work & TA",
    description: [
      "Mengajar dan membimbing siswa dalam dasar coding dan teknologi secara interaktif, serta membantu meningkatkan pemahaman konsep, problem solving, dan minat terhadap pemrograman.",
      "Menyusun modul pembelajaran terstruktur mencakup dasar logika komputasi, algoritma dasar, struktur data, dan pengenalan web development.",
      "Mendampingi sesi praktek langsung pembuatan proyek coding siswa dan memberikan evaluasi feedback konstruktif berkala.",
    ],
    skills: ["Teaching", "Mentoring", "Problem Solving", "Dasar Pemrograman", "Logika & Algoritma", "Komunikasi Teknis"],
  },
  {
    period: "Feb 2024 – Agu 2024",
    role: "Cloud Computing Cohort",
    organization: "Bangkit Academy led by Google, GoTo, Traveloka",
    location: "Remote / Hybrid",
    type: "Training",
    description: [
      "Menyelesaikan kurikulum intensif arsitektur cloud, deployment container, dan backend engineering Google Cloud Platform (GCP).",
      "Memimpin perancangan backend REST API dan deployment cloud untuk proyek capstone DermaScan dengan Google Cloud Run dan Cloud Storage.",
      "Lulus dengan sertifikasi resmi Google Cloud Engineer dan predikat Top Graduate cohort 2024.",
    ],
    skills: ["Google Cloud Platform", "Cloud Run", "Docker", "Node.js", "Express.js", "Cloud Storage", "Firestore"],
  },
  {
    period: "Sep 2022 – Feb 2024",
    role: "Asisten Dosen / Praktikum Laboratorium Komputer",
    organization: "Program Studi Informatika, Universitas Ahmad Dahlan",
    location: "Yogyakarta, Indonesia",
    type: "Work & TA",
    description: [
      "Membimbing dan mengevaluasi praktikum 200+ mahasiswa pada mata kuliah Pemrograman Dasar, Logika Informatika, dan Sistem Operasi.",
      "Menyusun modul praktikum, problem set algoritma, dan mengelola code review tugas mingguan mahasiswa.",
      "Membantu dosen pengampu dalam pengawasan ujian praktikum dan standarisasi kriteria penilaian.",
    ],
    skills: ["Algorithm Design", "C++", "Linux", "Logic & Discrete Math", "Mentorship", "Code Review"],
  },
  {
    period: "2021 – 2024",
    role: "S1 Informatika (Sarjana Komputer)",
    organization: "Universitas Ahmad Dahlan",
    location: "Yogyakarta, Indonesia",
    type: "Education",
    description: [
      "Lulus Tepat Waktu (Fast Track 3.5 Tahun) dengan Indeks Prestasi Kumulatif (IPK) 3.91 dari skala 4.00 (Predikat Cumlaude).",
      "Fokus riset dan skripsi pada Rekayasa Perangkat Lunak, Arsitektur Backend, dan Sistem Cloud Terdistribusi.",
      "Aktif sebagai staf Divisi Iptek Himpunan Mahasiswa Informatika (HMIF) periode 2023/2024.",
    ],
    skills: ["Software Engineering", "Database Systems", "Cloud Computing", "Computer Networks", "Data Structures"],
  },
];

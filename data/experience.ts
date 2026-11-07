export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "Work & TA" | "Education" | "Training";
  description: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    period: "Feb 2024 - Agu 2024",
    role: "Cloud Computing Cohort",
    organization: "Bangkit Academy led by Google, GoTo, Traveloka",
    location: "Remote / Hybrid",
    type: "Training",
    description: [
      "Menyelesaikan kurikulum intensif arsitektur cloud, deployment container, dan backend engineering Google Cloud Platform (GCP).",
      "Memimpin perancangan backend REST API dan deployment cloud untuk proyek capstone DermaScan dengan Google Cloud Run dan Cloud Storage.",
      "Lulus dengan sertifikasi resmi Google Cloud Engineer dan capaian akademik terbaik.",
    ],
    skills: ["Google Cloud Platform", "Cloud Run", "Docker", "Node.js", "REST APIs", "Machine Learning Deployment"],
  },
  {
    period: "Sep 2022 - Feb 2024",
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
    period: "2021 - 2024",
    role: "S1 Informatika (Sarjana Komputer)",
    organization: "Universitas Ahmad Dahlan",
    location: "Yogyakarta, Indonesia",
    type: "Education",
    description: [
      "Lulus Tepat Waktu (Fast Track 3.5 Tahun) dengan Indeks Prestasi Kumulatif (IPK) 3.91 dari skala 4.00.",
      "Fokus riset dan skripsi pada Rekayasa Perangkat Lunak, Arsitektur Backend, dan Sistem Cloud Terdistribusi.",
      "Aktif sebagai staf Divisi Iptek Himpunan Mahasiswa Informatika (HMIF) periode 2023/2024.",
    ],
    skills: ["Software Engineering", "Database Systems", "Cloud Computing", "Computer Networks", "Data Structures"],
  },
];

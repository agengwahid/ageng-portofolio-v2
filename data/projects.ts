export interface Project {
  id: string;
  title: string;
  codename: string;
  category: "backend" | "fullstack" | "tools";
  rankBadge: string;
  period: string;
  role: string;
  description: string;
  fullOverview: string;
  image: string;
  tech: string[];
  featured: boolean;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "dermascan",
    title: "DermaScan: ML-Assisted Skin Diagnosis Platform",
    codename: "HEALTHCARE_CLOUD_ML",
    category: "backend",
    rankBadge: "CAPSTONE · CLOUD NATIVE",
    period: "2024 · Bangkit Academy Capstone",
    role: "Backend & Cloud Engineer Lead",
    featured: true,
    description:
      "Arsitektur backend scalable dan RESTful API inference machine learning untuk aplikasi deteksi penyakit kulit secara real-time pada Google Cloud Platform (GCP).",
    fullOverview:
      "DermaScan adalah proyek capstone Bangkit Academy 2024 yang mengintegrasikan model deep learning Computer Vision dengan sistem backend cloud-native. Sistem ini mengolah gambar citra kulit yang diunggah pengguna mobile, memvalidasi payload, melakukan pre-processing dan inferensi model TensorFlow secara asinkron, serta mengembalikan diagnosa klinis awal dalam waktu sub-detik.",
    highlights: [
      "Merancang endpoint RESTful API berkinerja tinggi menggunakan Node.js & Express untuk inferensi model ML",
      "Deploy dan orkestrasi container backend menggunakan Google Cloud Run dengan auto-scaling otomatis",
      "Manajemen penyimpanan data citra pengguna menggunakan Google Cloud Storage dengan bucket IAM policy ketat",
      "Integrasi Firestore NoSQL Database untuk sinkronisasi histori diagnosa pengguna mobile",
    ],
    metrics: [
      { label: "Latency Inferensi", value: "< 850ms" },
      { label: "Cloud Uptime", value: "99.9%" },
      { label: "Auto-Scale", value: "0 to N Instances" },
    ],
    image: "/projects/dermascan.svg",
    tech: ["Node.js", "Express.js", "Google Cloud Run", "Cloud Storage", "Firestore", "Docker", "TensorFlow"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "gengs-fintrack",
    title: "Gengs Fintrack: Personal Finance & Analytics",
    codename: "FINTECH_ANALYTICS",
    category: "fullstack",
    rankBadge: "PRODUCTION READY",
    period: "2025 · Modern Web App",
    role: "Full-Stack Web Architect",
    featured: true,
    description:
      "Platform manajemen finansial pribadi modern dengan dashboard analitik pengeluaran interaktif, budgeting target, cash flow telemetry, dan visualisasi grafik real-time.",
    fullOverview:
      "Gengs Fintrack dibangun untuk menjawab kebutuhan pelacakan keuangan yang cepat, aman, dan intuitif. Menggunakan arsitektur Next.js modern dengan visualisasi data interaktif, categorisasi transaksi multi-tier, budgeting rules 50/30/20, serta ekspor laporan keuangan format spreadsheet.",
    highlights: [
      "Interactive telemetry dashboard dengan analisis cash-flow bulanan dan perbandingan budget real-time",
      "Arsitektur komponen modular berbasis React & TypeScript dengan optimasi rendering re-render minimal",
      "Filter transaksi multi-kategori dinamis, pencarian instan, dan kalkulator inflasi/tabungan",
      "Dukungan penyimpanan lokal terenkripsi dan ekspor CSV / PDF laporan pengeluaran",
    ],
    metrics: [
      { label: "Bundle Size", value: "< 90 KB" },
      { label: "FPS Chart Render", value: "60 FPS" },
      { label: "Lighthouse Score", value: "99/100" },
    ],
    image: "/projects/portfolio.svg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Lucide React", "Web Storage API"],
    githubUrl: "https://github.com/agengwahid/gengs-fintrack",
  },
  {
    id: "smkn1-lebong",
    title: "Student Grade Management Portal",
    codename: "ACADEMIC_ENTERPRISE",
    category: "fullstack",
    rankBadge: "ENTERPRISE · IN-USE",
    period: "2026 · SMK Negeri 1 Lebong",
    role: "Full-Stack Developer",
    featured: true,
    description:
      "Sistem informasi akademik terpadu untuk pengelolaan nilai, absensi, dan rapor digital siswa SMK Negeri 1 Lebong dengan role-based authentication ketat.",
    fullOverview:
      "Menggantikan sistem input spreadsheet manual yang rentan inkonsistensi data menjadi sistem enterprise terpusat. Dilengkapi permission gates berlapis untuk Kepala Sekolah, Guru Mata Pelajaran, Wali Kelas, dan Staf Tata Usaha, kalkulasi bobot nilai otomatis, serta cetak rapor digital instan.",
    highlights: [
      "Role-Based Access Control (RBAC) granular dengan audit log perubahan nilai siswa",
      "Skema database relasional MySQL ternormalisasi dengan query indexing untuk laporan sub-detik",
      "Modul rekapitulasi nilai dinamis berdasarkan kurikulum nasional dengan generator rekapitulasi Excel/PDF",
      "UI intuitif dan responsif dibangun dengan Blade templating dan Tailwind CSS",
    ],
    metrics: [
      { label: "Pengguna Aktif", value: "50+ Guru & Staf" },
      { label: "Data Siswa Terkelola", value: "1,000+ Record" },
      { label: "Waktu Rekap", value: "90% Lebih Cepat" },
    ],
    image: "/projects/grades.svg",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "RBAC"],
    githubUrl: "https://github.com/agengwahid/sistem-nilai-smkn1-lebong",
  },
  {
    id: "sjp-mining",
    title: "SJP Mining Operations & Asset Management Suite",
    codename: "ENTERPRISE_MINING_ERP",
    category: "backend",
    rankBadge: "ENTERPRISE SUITE",
    period: "2025 · Industrial System",
    role: "Backend & Systems Developer",
    featured: true,
    description:
      "Ekosistem sistem informasi operasional pertambangan mencakup pelacakan hauling armada, inventaris aset GAIS, absensi fingerprint terintegrasi, dan administrasi surat dinas.",
    fullOverview:
      "Rangkaian platform ERP terintegrasi untuk mendukung aktivitas operasional tambang berskala industri. Terdiri dari modul Hauling SJP (pencatatan tonase muatan armada dump truck), GAIS (General Affairs & Information System pelacakan siklus hidup aset berat), serta sistem absensi dan persuratan resmi.",
    highlights: [
      "REST API sinkronisasi data ritase hauling secara real-time antar pos penimbangan dan kantor operasional",
      "State machine pelacakan pergerakan dan status maintenance aset tambang (GAIS)",
      "Database relasional teroptimasi untuk query historis volume angkut ratusan armada per hari",
      "Sistem pengarsipan dan penomoran surat otomatis dengan validasi anti-duplikasi",
    ],
    metrics: [
      { label: "Modul Terintegrasi", value: "4 Sub-Sistem" },
      { label: "Data Ritase Harian", value: "Ratusan Truk" },
      { label: "Akurasi Aset", value: "100% Tercatat" },
    ],
    image: "/projects/kost.svg",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Database Optimization", "Linux Server"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "kost-panjie",
    title: "Kost Panjie Resident & Occupancy Platform",
    codename: "PROPERTY_ERP",
    category: "fullstack",
    rankBadge: "CLIENT PRODUCTION",
    period: "2024 · Client Project",
    role: "Web Application Developer",
    featured: false,
    description:
      "Aplikasi manajemen hunian kos untuk monitoring kamar occupied/vacant, buku kas bulanan, dan invoice sewa digital pemilik properti.",
    fullOverview:
      "Solusi digital untuk manajemen properti sewa kamar. Memudahkan pengelola memantau jatuh tempo pembayaran sewa, mendata riwayat penghuni, serta membuat laporan neraca keuangan bulanan yang rapi.",
    highlights: [
      "Visualisasi status kamar interaktif (Tersedia, Terisi, Masa Tenggang)",
      "Skema database relasional mencegah selisih pencatatan tagihan dan pembayaran ganda",
      "Dashboard admin ramah perangkat seluler untuk kemudahan monitoring lapangan",
    ],
    image: "/projects/kost.svg",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/agengwahid/Kost-Profile-Quantum",
  },
  {
    id: "pdf-app",
    title: "Fast & Offline Local PDF Utility Suite",
    codename: "CLIENT_SIDE_UTILITY",
    category: "tools",
    rankBadge: "OPEN SOURCE",
    period: "2025 · Utility App",
    role: "Frontend & Performance Engineer",
    featured: false,
    description:
      "Aplikasi manipulasi dan optimasi berkas PDF yang berjalan 100% secara lokal di browser client tanpa pengiriman dokumen ke server eksternal demi privasi maksimal.",
    fullOverview:
      "Tool utilitas dokumen PDF instan dengan fokus utama pada privasi dan kecepatan. Memproses operasi penggabungan (merge), pemisahan (split), kompresi, dan konversi secara offline memanfaatkan Web Workers dan WebAssembly.",
    highlights: [
      "100% offline & client-side processing: dokumen pengguna tidak pernah menyentuh internet/server luar",
      "Zero latency network overhead dengan performa eksekusi instan di memori peramban",
      "Antarmuka minimalis, drag-and-drop intuitif, dan bebas iklan",
    ],
    image: "/projects/portfolio.svg",
    tech: ["TypeScript", "Web API", "Tailwind CSS", "PDF-Lib", "Client-Side WASM"],
    githubUrl: "https://github.com/agengwahid/pdf-app",
  },
];

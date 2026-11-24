export interface Project {
  id: string;
  title: string;
  codename: string;
  category: "backend" | "fullstack" | "tools";
  projectType: "team" | "solo"; // "team" = Kolaborasi Tim, "solo" = Proyek Mandiri
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
    id: "gais",
    title: "GAIS: General Affairs & Asset Management System",
    codename: "ENTERPRISE_ASSET_ERP",
    category: "backend",
    projectType: "team",
    rankBadge: "TIM · ENTERPRISE ASSET",
    period: "2024 - 2025 · Tim PT SJP",
    role: "Backend & Database Engineer (Tim)",
    featured: true,
    description:
      "Sistem enterprise terintegrasi untuk pelacakan siklus hidup ratusan aset berat operasional pertambangan, pencatatan mutasi, histori maintenance, dan audit label QR-code.",
    fullOverview:
      "GAIS (General Affairs & Information System) dikembangkan bersama tim developer untuk menjawab tantangan tata kelola aset fisik di lingkungan operasional tambang berskala besar. Sistem ini mengotomasi siklus pengadaan, penempatan, riwayat servis berkala, pencatatan kondisi fisik unit, hingga pelacakan lokasi berbasis QR code scanning untuk mencegah kehilangan dan duplikasi aset inventaris.",
    highlights: [
      "Berkolaborasi dalam tim untuk merancang skema database relasional multi-entitas MySQL teroptimasi dengan index tuning",
      "Membangun REST API berkecepatan tinggi untuk modul mutasi aset, log pergantian sparepart, dan tracking status perbaikan",
      "Mengintegrasikan generator dan scanner label QR Code untuk verifikasi fisik aset secara instan di lapangan",
      "Menerapkan Role-Based Access Control (RBAC) granular dengan audit trail riwayat modifikasi data yang tidak dapat dimanipulasi",
      "Menyediakan modul otomasi rekapitulasi inventaris format Excel dan PDF terstandarisasi untuk divisi General Affairs",
    ],
    metrics: [
      { label: "Aset Terkelola", value: "500+ Aset" },
      { label: "Waktu Pencarian", value: "< 200ms" },
      { label: "Akurasi Audit", value: "100% Tercatat" },
    ],
    image: "/projects/gais.svg",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Docker", "Linux Server", "Redis", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "compro",
    title: "Corporate Mining Portal & Web Profile",
    codename: "CORP_PORTAL_CMS",
    category: "fullstack",
    projectType: "team",
    rankBadge: "TIM · COMPANY PROFILE",
    period: "2024 · Tim Web SJP",
    role: "Fullstack Web Developer (Tim)",
    featured: true,
    description:
      "Website profil korporat pertambangan modern dengan Content Management System (CMS), showcase keunggulan armada, profil operasi, serta portal karir & kontak terproteksi.",
    fullOverview:
      "Platform portal publik dan profil korporat resmi yang dirancang bersama tim untuk memperkuat kredibilitas perusahaan tambang di mata klien dan mitra industri. Dilengkapi antarmuka interaktif, performa muat sub-detik, modul publikasi rilis pers/berita berkala melalui panel admin khusus, serta formulir kemitraan bisnis dengan proteksi anti-spam.",
    highlights: [
      "Mengembangkan arsitektur backend dinamis berbasis Laravel untuk pengelolaan konten profil, galeri armada, dan lowongan karir",
      "Optimasi Search Engine Optimization (SEO) teknis dan Core Web Vitals untuk mencapai skor performa tinggi pada Google PageSpeed",
      "Menerapkan sanitasi input dan proteksi formulir kontak menggunakan rate-limiting dan CSRF protection ketat",
      "Setup deployment otomatis pada server Linux (Ubuntu VPS) dengan web server Nginx reverse proxy dan SSL/TLS Let's Encrypt",
    ],
    metrics: [
      { label: "PageSpeed Score", value: "98/100" },
      { label: "First Contentful Paint", value: "< 1.1s" },
      { label: "Server Uptime", value: "99.9%" },
    ],
    image: "/projects/compro.svg",
    tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Nginx", "Linux", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "gengs-fintrack",
    title: "Gengs Fintrack: Personal Finance & Analytics",
    codename: "FINTECH_ANALYTICS",
    category: "fullstack",
    projectType: "solo",
    rankBadge: "INDIVIDU · PERSONAL FINANCE",
    period: "2025 · Proyek Mandiri",
    role: "Full-Stack Web Architect (Individu)",
    featured: true,
    description:
      "Platform analitik finansial pribadi dengan dashboard interaktif, budgeting target 50/30/20, visualisasi cash-flow real-time, dan sistem penyimpanan lokal terenkripsi.",
    fullOverview:
      "Gengs Fintrack dibangun secara mandiri untuk menjawab kebutuhan pelacakan keuangan harian yang gesit, aman, dan tanpa ketergantungan server pihak ketiga. Menggunakan arsitektur Next.js modern dengan visualisasi data interaktif, kategorisasi transaksi multi-tier, budgeting rules 50/30/20, serta ekspor laporan keuangan format spreadsheet.",
    highlights: [
      "Interactive telemetry dashboard dengan visualisasi cash-flow bulanan dan perbandingan budget real-time",
      "Arsitektur komponen modular berbasis React & TypeScript dengan optimasi rendering re-render minimal",
      "Filter transaksi multi-kategori dinamis, pencarian instan, dan kalkulator inflasi/tabungan",
      "Penyimpanan lokal terenkripsi dan ekspor CSV / PDF laporan pengeluaran tanpa ketergantungan server luar",
    ],
    metrics: [
      { label: "Bundle Size", value: "< 90 KB" },
      { label: "FPS Chart Render", value: "60 FPS" },
      { label: "Lighthouse Score", value: "99/100" },
    ],
    image: "/projects/fintrack.svg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Lucide React", "Web Storage API", "Git"],
    githubUrl: "https://github.com/agengwahid/gengs-fintrack",
  },
  {
    id: "pdf-app",
    title: "Fast & Offline Local PDF Utility Suite",
    codename: "CLIENT_SIDE_UTILITY",
    category: "tools",
    projectType: "solo",
    rankBadge: "INDIVIDU · OPEN SOURCE",
    period: "2025 · Proyek Mandiri",
    role: "Frontend & Performance Engineer (Individu)",
    featured: true,
    description:
      "Aplikasi manipulasi dan kompresi berkas PDF yang berjalan 100% secara lokal di browser client tanpa pengiriman dokumen ke server eksternal demi privasi maksimal.",
    fullOverview:
      "Tool utilitas dokumen PDF instan dengan fokus utama pada privasi dan kecepatan. Memproses operasi penggabungan (merge), pemisahan (split), kompresi ukuran berkas, dan konversi secara offline memanfaatkan Web Workers dan WebAssembly tanpa mengorbankan kualitas dokumen.",
    highlights: [
      "100% offline & client-side processing: dokumen pengguna tidak pernah menyentuh internet atau server luar demi keamanan data",
      "Manipulasi PDF instan: kompresi ukuran, merge dokumen ganda, split halaman, dan rotasi dalam hitungan detik",
      "Zero latency network overhead dengan performa eksekusi instan di memori peramban via WebAssembly",
      "Antarmuka minimalis, drag-and-drop intuitif, dan responsif di perangkat mobile maupun desktop",
    ],
    metrics: [
      { label: "Latensi Server", value: "0ms (Offline)" },
      { label: "Rasio Kompresi", value: "Hingga 70%" },
      { label: "Privasi Data", value: "100% di Client" },
    ],
    image: "/projects/pdf-app.svg",
    tech: ["TypeScript", "Web API", "Tailwind CSS", "PDF-Lib", "Client-Side WASM", "Web Workers", "Git"],
    githubUrl: "https://github.com/agengwahid/pdf-app",
  },
  {
    id: "dermascan",
    title: "DermaScan: ML-Assisted Skin Diagnosis Platform",
    codename: "HEALTHCARE_CLOUD_ML",
    category: "backend",
    projectType: "team",
    rankBadge: "TIM · CLOUD NATIVE CAPSTONE",
    period: "2024 · Bangkit Capstone Team",
    role: "Backend & Cloud Engineer Lead (Tim)",
    featured: true,
    description:
      "Arsitektur backend scalable dan RESTful API inference machine learning untuk aplikasi deteksi penyakit kulit secara real-time pada Google Cloud Platform (GCP).",
    fullOverview:
      "DermaScan adalah proyek capstone Bangkit Academy 2024 yang dikerjakan bersama tim lintas bidang (Cloud, Machine Learning, Mobile). Sistem ini mengolah gambar citra kulit yang diunggah pengguna mobile, memvalidasi payload, melakukan pre-processing dan inferensi model deep learning secara asinkron, serta mengembalikan diagnosa klinis awal dalam waktu sub-detik.",
    highlights: [
      "Merancang endpoint RESTful API berkinerja tinggi menggunakan Node.js & Express untuk inferensi model ML",
      "Deploy dan orkestrasi container backend menggunakan Google Cloud Run dengan auto-scaling otomatis (0 to N instances)",
      "Manajemen penyimpanan data citra pengguna menggunakan Google Cloud Storage dengan bucket IAM policy ketat",
      "Integrasi Firestore NoSQL Database untuk sinkronisasi histori diagnosa pengguna mobile",
    ],
    metrics: [
      { label: "Latency Inferensi", value: "< 850ms" },
      { label: "Cloud Uptime", value: "99.9%" },
      { label: "Auto-Scale", value: "0 to N Instances" },
    ],
    image: "/projects/dermascan.svg",
    tech: ["Node.js", "Express.js", "Google Cloud Run", "Cloud Storage", "Firestore", "Docker", "TensorFlow", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "smkn1-lebong",
    title: "Student Grade & Academic Management Portal",
    codename: "ACADEMIC_ENTERPRISE",
    category: "fullstack",
    projectType: "solo",
    rankBadge: "INDIVIDU · ENTERPRISE",
    period: "2024 · SMKN 1 Lebong",
    role: "Full-Stack Developer (Individu)",
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
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "RBAC", "Linux", "Git"],
    githubUrl: "https://github.com/agengwahid/sistem-nilai-smkn1-lebong",
  },
  {
    id: "sjp-hauling",
    title: "SJP Hauling Operations & Fleet Logistics Suite",
    codename: "ENTERPRISE_MINING_ERP",
    category: "backend",
    projectType: "team",
    rankBadge: "TIM · INDUSTRIAL LOGISTICS",
    period: "2024 - 2025 · Tim Operasional SJP",
    role: "Backend & Systems Developer (Tim)",
    featured: false,
    description:
      "Sistem operasional penimbangan dan ritase armada dump truck tambang batubara dengan sinkronisasi data real-time antar pos timbang dan kantor pusat.",
    fullOverview:
      "Sistem informasi operasional hauling terintegrasi untuk mendukung aktivitas penimbangan muatan armada dump truck tambang. Mencakup pencatatan tonase bruto, tara, netto, verifikasi surat jalan pengemudi, kalkulasi ritase harian, serta pencegahan selisih timbangan secara real-time.",
    highlights: [
      "REST API sinkronisasi data ritase hauling secara real-time antar pos timbangan lapangan dan server pusat",
      "Database relasional MySQL teroptimasi untuk query historis volume angkut ratusan armada per hari",
      "Sistem pengarsipan dan penomoran surat jalan otomatis dengan validasi anti-duplikasi nomor ritase",
      "Monitoring performa server Linux produksi dengan Nginx dan cron jobs pembersihan cache berkala",
    ],
    metrics: [
      { label: "Ritase Harian", value: "Ratusan Truk" },
      { label: "Waktu Input Timbang", value: "< 5 Detik" },
      { label: "Akurasi Tonase", value: "99.98%" },
    ],
    image: "/projects/kost.svg",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Database Optimization", "Linux Server", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "kost-panjie",
    title: "Kost Panjie Resident & Occupancy Platform",
    codename: "PROPERTY_ERP",
    category: "fullstack",
    projectType: "solo",
    rankBadge: "INDIVIDU · CLIENT PRODUCTION",
    period: "2024 · Proyek Mandiri",
    role: "Web Application Developer (Individu)",
    featured: false,
    description:
      "Aplikasi manajemen hunian kamar kos untuk monitoring kamar occupied/vacant, buku kas bulanan, dan invoice sewa digital pemilik properti.",
    fullOverview:
      "Solusi digital untuk manajemen properti sewa kamar. Memudahkan pengelola memantau jatuh tempo pembayaran sewa, mendata riwayat penghuni, serta membuat laporan neraca keuangan bulanan yang rapi.",
    highlights: [
      "Visualisasi status kamar interaktif (Tersedia, Terisi, Masa Tenggang)",
      "Skema database relasional mencegah selisih pencatatan tagihan dan pembayaran ganda",
      "Dashboard admin ramah perangkat seluler untuk kemudahan monitoring lapangan",
    ],
    metrics: [
      { label: "Manajemen Unit", value: "100% Digital" },
      { label: "Invoice Otomatis", value: "PDF Billing" },
    ],
    image: "/projects/kost.svg",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript", "Git"],
    githubUrl: "https://github.com/agengwahid/Kost-Profile-Quantum",
  },
];

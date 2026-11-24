export interface Project {
  id: string;
  title: string;
  codename: string;
  category: "backend" | "fullstack" | "tools";
  projectType: "team" | "solo";
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
    codename: "GAIS_ASSET",
    category: "backend",
    projectType: "team",
    rankBadge: "Tim · Asset System",
    period: "2026 · Tim PT SJP",
    role: "Backend & Database Developer (Tim)",
    featured: true,
    description:
      "Sistem informasi divisi General Affairs untuk pencatatan aset operasional, riwayat mutasi barang, catatan pemeliharaan, serta pelabelan QR Code.",
    fullOverview:
      "GAIS (General Affairs & Information System) dikerjakan bersama tim untuk membantu pencatatan dan pemantauan aset operasional perusahaan secara terpusat, mulai dari pendataan unit, riwayat perbaikan, hingga verifikasi aset melalui label QR Code.",
    highlights: [
      "Berkolaborasi bersama tim dalam merancang struktur tabel database MySQL untuk modul aset, mutasi, dan maintenance",
      "Membangun endpoint backend dan logika bisnis menggunakan Laravel untuk pencatatan transaksi aset",
      "Mengimplementasikan fitur generate dan pemindaian label QR Code guna mempermudah pengecekan aset",
      "Menyiapkan rekap data inventaris dalam format laporan yang terstruktur",
    ],
    image: "/projects/gais.svg",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Docker", "Redis", "Linux Server", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "compro",
    title: "Company Profile & Portal Informasi PT SJP (Compro)",
    codename: "CORP_PORTAL",
    category: "fullstack",
    projectType: "team",
    rankBadge: "Tim · Company Profile",
    period: "2026 · Tim PT SJP",
    role: "Fullstack Web Developer (Tim)",
    featured: true,
    description:
      "Website profil resmi perusahaan beserta panel pengelolaan konten untuk menampilkan profil layanan, dokumentasi operasional, berita, dan informasi kontak.",
    fullOverview:
      "Website Company Profile (Compro) dikembangkan bersama tim sebagai wajah digital resmi perusahaan agar mitra dan pengunjung dapat memperoleh informasi profil perusahaan, layanan, serta kontak resmi secara jelas.",
    highlights: [
      "Mengembangkan halaman profil dinamis dan panel admin CMS berbasis Laravel dan MySQL",
      "Menerapkan tampilan antarmuka responsif menggunakan Tailwind CSS dan JavaScript",
      "Membantu deployment dan konfigurasi web server pada server Linux (Nginx)",
    ],
    image: "/projects/compro.svg",
    tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript", "Nginx", "Linux", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "gengs-fintrack",
    title: "Gengs Fintrack: Personal Finance Tracker",
    codename: "FINTRACK_WEB",
    category: "fullstack",
    projectType: "solo",
    rankBadge: "Mandiri · Web App",
    period: "2025 · Proyek Mandiri",
    role: "Web Developer (Mandiri)",
    featured: true,
    description:
      "Aplikasi web pencatatan keuangan pribadi untuk memantau pemasukan, pengeluaran per kategori, perencanaan anggaran, dan ringkasan arus kas.",
    fullOverview:
      "Gengs Fintrack dibangun secara mandiri sebagai alat bantu pencatatan keuangan pribadi agar pengguna dapat mencatat transaksi harian, mengelompokkan pengeluaran, dan melihat ringkasan budget secara rapi langsung melalui browser.",
    highlights: [
      "Menyusun antarmuka dashboard dan visualisasi grafik cash-flow dengan Next.js dan TypeScript",
      "Menyediakan pencatatan transaksi masuk/keluar, filter kategori, dan perencanaan anggaran",
      "Mendukung penyimpanan lokal browser dan ekspor laporan transaksi",
    ],
    image: "/projects/fintrack.svg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Web Storage API", "Git"],
    githubUrl: "https://github.com/agengwahid/gengs-fintrack",
  },
  {
    id: "pdf-app",
    title: "Aplikasi Utilitas & Kompresi PDF Lokal",
    codename: "PDF_UTILITY",
    category: "tools",
    projectType: "solo",
    rankBadge: "Mandiri · Web Tool",
    period: "2025 · Proyek Mandiri",
    role: "Web Developer (Mandiri)",
    featured: true,
    description:
      "Aplikasi utilitas PDF berbasis browser untuk melakukan kompresi ukuran file, menggabungkan (merge), dan memisahkan halaman PDF secara lokal.",
    fullOverview:
      "Aplikasi ini dibuat secara mandiri agar pengelolaan file PDF sehari-hari seperti mengecilkan ukuran dokumen, menggabungkan berkas, atau memisahkan halaman dapat diproses langsung di browser perangkat pengguna tanpa perlu mengunggah dokumen ke server luar.",
    highlights: [
      "Seluruh pemrosesan berkas PDF berjalan di sisi klien (browser) untuk menjaga privasi dokumen",
      "Mendukung kompresi ukuran berkas PDF, penggabungan dokumen, dan pemisahan halaman",
      "Antarmuka ringkas dengan dukungan drag-and-drop yang mudah digunakan",
    ],
    image: "/projects/pdf-app.svg",
    tech: ["TypeScript", "Web API", "Tailwind CSS", "PDF-Lib", "Client-Side WASM", "Git"],
    githubUrl: "https://github.com/agengwahid/pdf-app",
  },
  {
    id: "dermascan",
    title: "DermaScan: Bangkit Academy Capstone Project",
    codename: "CAPSTONE_CLOUD",
    category: "backend",
    projectType: "team",
    rankBadge: "Tim · Bangkit Capstone",
    period: "2024 · Bangkit Capstone Team",
    role: "Backend Developer (Tim)",
    featured: true,
    description:
      "Backend RESTful API menggunakan Node.js dan layanan Google Cloud Platform untuk mendukung aplikasi deteksi kondisi kulit berbasis Machine Learning.",
    fullOverview:
      "DermaScan merupakan proyek capstone program Bangkit Academy 2024 yang dikerjakan secara kolaboratif antar anggota tim. Peran saya berfokus pada pengembangan backend RESTful API dengan Node.js dan mengintegrasikannya dengan layanan Google Cloud Platform, model Machine Learning, serta database.",
    highlights: [
      "Mengembangkan RESTful API menggunakan Node.js dan Express.js untuk kebutuhan aplikasi mobile",
      "Mengintegrasikan layanan backend dengan layanan Google Cloud Platform dan model Machine Learning",
      "Menghubungkan backend dengan penyimpanan database agar alur prediksi dan riwayat pengguna berjalan baik",
    ],
    image: "/projects/dermascan.svg",
    tech: ["Node.js", "Express.js", "Google Cloud Platform", "Cloud Run", "Cloud Storage", "Firestore", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "smkn1-lebong",
    title: "Student Grade Management System – SMKN 1 Lebong",
    codename: "ACADEMIC_SYSTEM",
    category: "fullstack",
    projectType: "solo",
    rankBadge: "Mandiri · Academic System",
    period: "2026 · SMK Negeri 1 Lebong",
    role: "Fullstack Developer (Mandiri)",
    featured: true,
    description:
      "Sistem pengelolaan nilai siswa berbasis web menggunakan Laravel, PHP, dan MySQL dengan fitur autentikasi, data siswa, input nilai, dan dashboard pemantauan.",
    fullOverview:
      "Sistem ini dibangun untuk membantu sekolah mengelola data akademik siswa secara terstruktur, menggantikan pencatatan terpisah dengan sistem terpusat yang memiliki kontrol akses sesuai peran pengguna, input nilai siswa, serta dashboard pemantauan.",
    highlights: [
      "Merancang dan membangun aplikasi fullstack menggunakan Laravel, PHP, dan MySQL",
      "Mengimplementasikan fitur autentikasi serta pembagian hak akses pengguna",
      "Menyediakan modul manajemen data siswa, input nilai mata pelajaran, dan dashboard pemantauan",
    ],
    image: "/projects/grades.svg",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Git"],
    githubUrl: "https://github.com/agengwahid/sistem-nilai-smkn1-lebong",
  },
  {
    id: "sjp-hauling",
    title: "Sistem Pencatatan Hauling & Logistik SJP",
    codename: "HAULING_OPS",
    category: "backend",
    projectType: "team",
    rankBadge: "Tim · Operations",
    period: "2026 · Tim PT SJP",
    role: "Backend & Systems Developer (Tim)",
    featured: false,
    description:
      "Sistem pencatatan operasional pengangkutan armada dump truck dan rekap data penimbangan muatan antar pos operasional perusahaan.",
    fullOverview:
      "Sistem operasional yang dikerjakan dalam tim untuk mendata transaksi penimbangan muatan, pencatatan surat jalan, serta rekapitulasi ritase harian armada agar pelaporan operasional lebih rapi.",
    highlights: [
      "Mengembangkan modul pencatatan data timbangan dan surat jalan armada berbasis Laravel & MySQL",
      "Menyusun relasi database serta API sinkronisasi data operasional",
      "Membantu pemeliharaan sistem serta konfigurasi server Linux",
    ],
    image: "/projects/kost.svg",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Linux Server", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "kost-panjie",
    title: "Kost Panjie Management & Profile Website",
    codename: "PROPERTY_WEB",
    category: "fullstack",
    projectType: "solo",
    rankBadge: "Mandiri · Web App",
    period: "2024 · Proyek Mandiri",
    role: "Web Developer (Mandiri)",
    featured: false,
    description:
      "Website pengelolaan kos dan profil hunian berbasis PHP, HTML, CSS, dan JavaScript untuk pendataan penghuni, informasi kamar, dan administrasi kos.",
    fullOverview:
      "Dibangun untuk memudahkan pemilik kos menampilkan informasi ketersediaan kamar secara publik sekaligus mengelola data penghuni dan pencatatan administrasi kos secara lebih praktis.",
    highlights: [
      "Membangun fitur pengelolaan data penghuni kos dan status informasi kamar",
      "Mengimplementasikan pencatatan data administrasi operasional kos berbasis PHP dan MySQL",
      "Menyediakan halaman profil publik kos yang mudah diakses melalui perangkat desktop maupun seluler",
    ],
    image: "/projects/kost.svg",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
    githubUrl: "https://github.com/agengwahid/Kost-Profile-Quantum",
  },
];

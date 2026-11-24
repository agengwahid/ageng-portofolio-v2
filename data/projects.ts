export interface Project {
  id: string;
  title: string;
  codename: string;
  category: "backend" | "fullstack" | "tools";
  projectType: "team" | "solo";
  rankBadge: string;
  rankBadgeEn?: string;
  period: string;
  periodEn?: string;
  role: string;
  roleEn?: string;
  description: string;
  descriptionEn?: string;
  fullOverview: string;
  fullOverviewEn?: string;
  image: string;
  tech: string[];
  featured: boolean;
  highlights: string[];
  highlightsEn?: string[];
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
    rankBadgeEn: "Team · Asset System",
    period: "2026 · Tim PT SJP",
    periodEn: "2026 · PT SJP Team",
    role: "Backend & Database Developer (Tim)",
    roleEn: "Backend & Database Developer (Team)",
    featured: true,
    description:
      "Sistem informasi divisi General Affairs berbasis PostgreSQL dan Docker untuk pencatatan aset operasional, riwayat mutasi barang, pemeliharaan, serta pelabelan QR Code.",
    descriptionEn:
      "General Affairs & Asset Management system backed by PostgreSQL and Docker for tracking operational assets, transfers, maintenance logs, and QR Code verification.",
    fullOverview:
      "GAIS (General Affairs & Information System) dikembangkan bersama tim menggunakan database PostgreSQL dan deployment container Docker. Sistem ini membantu pendataan aset operasional perusahaan secara terpusat, pencatatan mutasi, riwayat perbaikan, serta verifikasi label QR Code.",
    fullOverviewEn:
      "GAIS was built collaboratively with the team using PostgreSQL and Docker containerization to centralize operational asset inventories, transfer histories, maintenance schedules, and QR Code verification.",
    highlights: [
      "Berkolaborasi dalam tim merancang skema database relasional PostgreSQL untuk modul aset, mutasi, dan maintenance",
      "Membangun endpoint backend dan logika aplikasi menggunakan Laravel dan PHP",
      "Mengonfigurasi environment containerisasi Docker serta caching Redis pada server Linux",
      "Mengintegrasikan pembuatan dan pemindaian label QR Code untuk pengecekan fisik aset",
    ],
    highlightsEn: [
      "Collaborated on designing PostgreSQL relational schemas for asset records, mutations, and maintenance tracking",
      "Developed backend endpoints and business workflows using Laravel and PHP",
      "Configured Dockerized environments and Redis caching on Linux servers",
      "Integrated QR Code generation and scanning for field asset verification",
    ],
    image: "/projects/gais.svg",
    tech: ["Laravel", "PHP", "PostgreSQL", "Docker", "Redis", "REST API", "Linux Server", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "compro",
    title: "Company Profile & Portal Informasi PT SJP (Compro)",
    codename: "CORP_PORTAL",
    category: "fullstack",
    projectType: "team",
    rankBadge: "Tim · Company Profile",
    rankBadgeEn: "Team · Company Profile",
    period: "2026 · Tim PT SJP",
    periodEn: "2026 · PT SJP Team",
    role: "Web Developer (Tim)",
    roleEn: "Web Developer (Team)",
    featured: true,
    description:
      "Website profil resmi perusahaan yang berjalan dengan WordPress custom theme di dalam Docker, sekaligus dalam tahap pengembangan migrasi arsitektur ke Laravel.",
    descriptionEn:
      "Corporate profile portal running a custom WordPress theme in Docker containers, with ongoing architecture migration development toward Laravel.",
    fullOverview:
      "Website Company Profile (Compro) dikembangkan bersama tim sebagai portal informasi publik resmi perusahaan. Saat ini berjalan menggunakan WordPress Custom Theme di atas container Docker, serta sedang dirancang dan dikembangkan proses migrasinya menuju framework Laravel.",
    fullOverviewEn:
      "Corporate website portal maintained with the team as the company's official web presence. Runs on a custom WordPress theme inside Docker containers while undergoing incremental migration development toward Laravel.",
    highlights: [
      "Mengembangkan dan mengelola WordPress custom theme sesuai identitas visual perusahaan",
      "Menjalankan dan memelihara lingkungan aplikasi di dalam container Docker dengan reverse proxy Nginx",
      "Mengembangkan rencana serta modul migrasi bertahap dari WordPress menuju aplikasi berbasis Laravel",
    ],
    highlightsEn: [
      "Built and maintained a custom WordPress theme tailored to corporate visual guidelines",
      "Operated containerized deployments using Docker and Nginx reverse proxy",
      "Designed and developed gradual migration modules from WordPress to Laravel",
    ],
    image: "/projects/compro.svg",
    tech: ["WordPress", "Custom Theme", "PHP", "Docker", "Laravel (Migrasi)", "Nginx", "Linux", "Git"],
    githubUrl: "https://github.com/agengwahid",
  },
  {
    id: "gengs-fintrack",
    title: "FinTrack — Smart Personal Financial Tracker",
    codename: "FINTRACK_WEB",
    category: "fullstack",
    projectType: "solo",
    rankBadge: "Mandiri · Live PWA",
    rankBadgeEn: "Solo · Live PWA",
    period: "2026 · Proyek Mandiri",
    periodEn: "2026 · Personal Project",
    role: "Fullstack Web Developer (Mandiri)",
    roleEn: "Fullstack Web Developer (Solo)",
    featured: true,
    description:
      "Aplikasi pelacak keuangan harian (PWA) berbasis Laravel, PostgreSQL, Inertia.js, dan Vue 3 dengan fitur sinkronisasi otomatis Google Sheets dan Google OAuth.",
    descriptionEn:
      "Personal financial tracking PWA built with Laravel 11, PostgreSQL, Inertia.js v2, and Vue 3 featuring automated two-way Google Sheets sync and Google OAuth.",
    fullOverview:
      "FinTrack dibangun menggunakan Laravel 11, PostgreSQL, Inertia.js v2, dan Vue 3 sebagai aplikasi manajemen keuangan harian yang juga mendukung instalasi sebagai Progressive Web App (PWA). Dilengkapi login Google OAuth, pengelompokan transaksi, perencanaan anggaran bulanan, dan sinkronisasi 2 arah ke Google Spreadsheet pribadi.",
    fullOverviewEn:
      "Built with Laravel 11, PostgreSQL, Inertia.js v2, and Vue 3, FinTrack is an installable Progressive Web App for daily cashflow tracking featuring Google OAuth login, monthly budgeting, two-way Google Sheets sync via background queues, and AES-256 encrypted credentials.",
    highlights: [
      "Membangun backend MVC dengan Laravel 11, PHP 8.3, Eloquent ORM, Queue Jobs, dan database PostgreSQL",
      "Merancang antarmuka SPA reaktif memakai Vue 3 Composition API, Inertia.js v2, Tailwind CSS, dan Chart.js",
      "Mengintegrasikan Google OAuth (Laravel Socialite) dan sinkronisasi 2 arah Google Sheets API dengan kredensial terenkripsi AES-256",
      "Menulis pengujian otomatis menggunakan Pest PHP untuk memastikan keandalan alur transaksi dan isolasi data multi-user (UUID)",
    ],
    highlightsEn: [
      "Built Laravel 11 MVC backend with PHP 8.3, PostgreSQL, Eloquent ORM, and background Queue Jobs",
      "Crafted reactive SPA UI with Vue 3 Composition API, Inertia.js v2, Tailwind CSS, and Chart.js",
      "Integrated Google OAuth (Socialite) and two-way Google Sheets API sync with AES-256 credential encryption",
      "Authored Pest PHP automated tests ensuring transactional reliability and UUID-isolated multi-user access",
    ],
    image: "/projects/fintrack.jpg",
    tech: ["Laravel", "PHP", "PostgreSQL", "Vue 3", "Inertia.js", "Tailwind CSS", "Google Sheets API", "Pest PHP"],
    liveUrl: "https://fintrack.nilaismkn1lebong.my.id/",
    githubUrl: "https://github.com/agengwahid/gengs-fintrack",
  },
  {
    id: "pdf-app",
    title: "PDF Studio — Offline & Local PDF Utility Suite",
    codename: "PDF_STUDIO",
    category: "tools",
    projectType: "solo",
    rankBadge: "Mandiri · Web Utility",
    rankBadgeEn: "Solo · Web Utility",
    period: "2026 · Proyek Mandiri",
    periodEn: "2026 · Personal Project",
    role: "Fullstack Web Developer (Mandiri)",
    roleEn: "Fullstack Web Developer (Solo)",
    featured: true,
    description:
      "Aplikasi utilitas manipulasi PDF lokal berbasis Laravel 13, PostgreSQL, Vue 3, dan Inertia.js menggunakan Ghostscript, Poppler, dan LibreOffice headless tanpa upload ke cloud luar.",
    descriptionEn:
      "Offline local PDF utility suite powered by Laravel 13, PostgreSQL, Vue 3, Inertia.js, Ghostscript, Poppler, and LibreOffice headless without third-party cloud uploads.",
    fullOverview:
      "PDF Studio berjalan secara lokal/offline menggunakan Laravel 13, PostgreSQL, Vue 3 + Inertia.js, dan Tailwind CSS 4. Menggabungkan engine Ghostscript 10, Poppler, FPDI, dan LibreOffice headless untuk melakukan merge, compress (Low/Medium/High DPI), split per halaman, rotate/reorder halaman, hingga konversi Word ke PDF dengan pencatatan riwayat di PostgreSQL.",
    fullOverviewEn:
      "PDF Studio processes documents locally using Laravel 13, PostgreSQL, Vue 3 + Inertia.js, and Tailwind CSS 4. Combines Ghostscript 10, Poppler, FPDI, and LibreOffice headless to merge, compress, split, reorder/rotate pages, and convert Word documents to PDF with local history persisted in PostgreSQL.",
    highlights: [
      "Membangun backend Laravel 13 dan database PostgreSQL untuk mencatat riwayat pemrosesan dokumen lokal",
      "Mengintegrasikan Ghostscript, Poppler (pdftoppm/pdfinfo), FPDI, serta LibreOffice 24 headless untuk konversi Word ke PDF",
      "Merancang antarmuka interaktif berbasis Vue 3, Inertia.js, dan Tailwind CSS 4 untuk merge, split, compress, dan penataan ulang halaman PDF",
    ],
    highlightsEn: [
      "Built Laravel 13 backend with PostgreSQL storage for local processing history",
      "Integrated Ghostscript, Poppler, FPDI, and LibreOffice 24 headless for offline Word-to-PDF conversion",
      "Designed interactive Vue 3 + Inertia.js UI for merging, splitting, compressing, and rotating PDF pages",
    ],
    image: "/projects/pdf-app.svg",
    tech: ["Laravel 13", "PHP 8.3", "PostgreSQL", "Vue 3", "Inertia.js", "Tailwind CSS", "Ghostscript", "Git"],
    githubUrl: "https://github.com/agengwahid/pdf-app",
  },
  {
    id: "kost-management-system",
    title: "Senopati Residence — Kost Profile & Management System",
    codename: "KOST_LARAVEL12",
    category: "fullstack",
    projectType: "solo",
    rankBadge: "Mandiri · Web App",
    rankBadgeEn: "Solo · Web App",
    period: "2026 · Proyek Mandiri",
    periodEn: "2026 · Personal Project",
    role: "Fullstack Web Developer (Mandiri)",
    roleEn: "Fullstack Web Developer (Solo)",
    featured: true,
    description:
      "Platform profil dan manajemen operasional kost berbasis Laravel 12, Blade, dan Tailwind CSS v4 dengan kalkulator estimasi sewa, reservasi survey WhatsApp, serta panel admin.",
    descriptionEn:
      "Kost property profile and management platform built on Laravel 12, Blade, and Tailwind CSS v4 with rent estimator, WhatsApp survey booking, and admin dashboard.",
    fullOverview:
      "Platform web profil hunian dan manajemen operasional kost berbasis Laravel 12, Blade Templating Engine, Vite 7, dan Tailwind CSS v4. Menyediakan katalog kamar interaktif, kalkulator estimasi biaya sewa, pengajuan jadwal survey ke database dengan konfirmasi WhatsApp, serta dashboard pengelola untuk CRUD unit dan status survey.",
    fullOverviewEn:
      "Property showcase and boarding house operations platform built with Laravel 12, Blade, Vite 7, and Tailwind CSS v4. Features room catalog filtering, tiered rent estimation calculator, WhatsApp survey scheduling, and authenticated admin management.",
    highlights: [
      "Membangun aplikasi fullstack dengan Laravel 12, Blade, Vite 7, dan Tailwind CSS v4",
      "Mengimplementasikan katalog kamar dinamis, kalkulator estimasi biaya sewa, serta integrasi pengajuan survey WhatsApp",
      "Membuat area pengelola terproteksi autentikasi untuk manajemen unit kamar, galeri foto, dan pembaruan status survey",
    ],
    highlightsEn: [
      "Built fullstack platform using Laravel 12, Blade templating, Vite 7, and Tailwind CSS v4",
      "Implemented room catalog filters, rent estimator calculator, and WhatsApp survey booking integration",
      "Built authenticated admin panel for room CRUD, occupancy toggles, gallery, and survey status tracking",
    ],
    image: "/projects/kost.svg",
    tech: ["Laravel 12", "PHP 8.3", "Blade", "Tailwind CSS v4", "Vite", "SQLite / PostgreSQL", "Git"],
    githubUrl: "https://github.com/agengwahid/kost-management-system",
  },
  {
    id: "dermascan",
    title: "DermaScan: Bangkit Academy Capstone Project",
    codename: "CAPSTONE_CLOUD",
    category: "backend",
    projectType: "team",
    rankBadge: "Tim · Bangkit Capstone",
    rankBadgeEn: "Team · Bangkit Capstone",
    period: "2024 · Bangkit Capstone Team",
    periodEn: "2024 · Bangkit Capstone Team",
    role: "Backend Developer (Tim)",
    roleEn: "Backend Developer (Team)",
    featured: true,
    description:
      "Backend RESTful API menggunakan Node.js dan layanan Google Cloud Platform untuk mendukung aplikasi deteksi kondisi kulit berbasis Machine Learning.",
    descriptionEn:
      "Backend RESTful API using Node.js and Google Cloud Platform services supporting an ML-assisted skin condition detection application.",
    fullOverview:
      "DermaScan merupakan proyek capstone program Bangkit Academy 2024 yang dikerjakan secara kolaboratif antar anggota tim. Peran saya berfokus pada pengembangan backend RESTful API dengan Node.js dan mengintegrasikannya dengan layanan Google Cloud Platform, model Machine Learning, serta database.",
    fullOverviewEn:
      "Bangkit Academy 2024 collaborative capstone project. Focused on developing Node.js RESTful APIs integrated with Google Cloud Platform, machine learning inference services, and database storage.",
    highlights: [
      "Mengembangkan RESTful API menggunakan Node.js dan Express.js untuk kebutuhan aplikasi mobile",
      "Mengintegrasikan layanan backend dengan layanan Google Cloud Platform dan model Machine Learning",
      "Menghubungkan backend dengan penyimpanan database agar alur prediksi dan riwayat pengguna berjalan baik",
    ],
    highlightsEn: [
      "Built RESTful APIs using Node.js and Express.js for mobile client integration",
      "Connected backend endpoints with Google Cloud Platform and machine learning inference services",
      "Integrated database storage to persist user scans and prediction histories",
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
    rankBadgeEn: "Solo · Academic System",
    period: "2026 · SMK Negeri 1 Lebong",
    periodEn: "2026 · SMK Negeri 1 Lebong",
    role: "Fullstack Developer (Mandiri)",
    roleEn: "Fullstack Developer (Solo)",
    featured: true,
    description:
      "Sistem pengelolaan nilai siswa berbasis web menggunakan Laravel, Blade, dan MySQL dengan fitur autentikasi, data siswa, input nilai, dan dashboard pemantauan.",
    descriptionEn:
      "Student grade management web system built with Laravel, Blade, and MySQL featuring authentication, student records, grade input, and monitoring dashboard.",
    fullOverview:
      "Sistem ini dibangun untuk membantu sekolah mengelola data akademik siswa secara terstruktur menggunakan Laravel dan database relasional, dilengkapi autentikasi pengguna, pengelolaan data siswa, input nilai, serta dashboard pemantauan.",
    fullOverviewEn:
      "Developed to centralize student academic records using Laravel and MySQL, featuring role authentication, student management, teacher grade input workflows, and monitoring dashboards.",
    highlights: [
      "Merancang dan membangun aplikasi fullstack menggunakan Laravel, PHP, Blade, dan MySQL",
      "Mengimplementasikan fitur autentikasi serta pembagian hak akses pengguna",
      "Menyediakan modul manajemen data siswa, input nilai mata pelajaran, dan dashboard pemantauan",
    ],
    highlightsEn: [
      "Designed and built fullstack application with Laravel, PHP, Blade, and MySQL",
      "Implemented authentication and role-based permission management",
      "Delivered student management, grade entry, and academic monitoring dashboards",
    ],
    image: "/projects/grades.svg",
    tech: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind CSS", "Vite", "Git"],
    githubUrl: "https://github.com/agengwahid/sistem-nilai-smkn1-lebong",
  },
  {
    id: "base-linux",
    title: "Base Linux: Arch & Ubuntu Post-Install Setup Scripts",
    codename: "LINUX_DOTS_SH",
    category: "tools",
    projectType: "solo",
    rankBadge: "Mandiri · Shell Automation",
    rankBadgeEn: "Solo · Shell Automation",
    period: "2026 · Open Source",
    periodEn: "2026 · Open Source",
    role: "Linux Systems Enthusiast (Mandiri)",
    roleEn: "Author (Solo)",
    featured: false,
    description:
      "Kumpulan shell script untuk mengotomatisasi instalasi dan konfigurasi environment kerja developer pada Arch Linux dan turunan Ubuntu/Debian.",
    descriptionEn:
      "Modular bash scripts automating base installation and developer workstation setup across Arch Linux and Ubuntu/Debian systems.",
    fullOverview:
      "Repositori bash script yang terbagi ke dalam modul arch-base (setup dasar Arch Linux & environment) serta ubuntu-base (instalasi tool development, Zsh, dan aplikasi produktivitas) setelah clean install.",
    fullOverviewEn:
      "Repository split into arch-base (Arch Linux base system setup) and ubuntu-base (developer packages, Zsh, and productivity setup) for post-install workstation provisioning.",
    highlights: [
      "Menyediakan modul arch-base dan ubuntu-base untuk otomasi provisioning paket sistem Linux",
      "Mempercepat setup environment pengembangan setelah proses clean install",
    ],
    highlightsEn: [
      "Provides modular arch-base and ubuntu-base scripts for Linux setup automation",
      "Streamlines developer environment provisioning after clean OS installs",
    ],
    image: "/projects/portfolio.svg",
    tech: ["Shell / Bash", "Arch Linux", "Ubuntu / Debian", "Git", "CLI Tooling"],
    githubUrl: "https://github.com/agengwahid/base-linux",
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: "Google & Bangkit" | "Dicoding" | "Akademik & Organisasi";
  credentialUrl?: string;
  highlight?: boolean;
}

export const certificates: Certificate[] = [
  {
    title: "Bangkit Academy 2024: Cloud Computing (Full Graduate)",
    issuer: "Bangkit Academy · Led by Google, GoTo, Traveloka",
    date: "Jan 2025",
    image: "/certificates/bangkit.jpg",
    category: "Google & Bangkit",
    highlight: true,
  },
  {
    title: "Menjadi Google Cloud Engineer",
    issuer: "Dicoding Indonesia (Google Cloud Authorized Partner)",
    date: "Nov 2024",
    image: "/certificates/dicoding_gce.jpg",
    category: "Google & Bangkit",
    highlight: true,
  },
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    date: "Nov 2024",
    image: "/certificates/dicoding_backend.jpg",
    category: "Google & Bangkit",
    highlight: true,
  },
  {
    title: "Belajar Penerapan Machine Learning dengan Google Cloud",
    issuer: "Dicoding Indonesia",
    date: "Des 2024",
    image: "/certificates/dicoding_ml.jpg",
    category: "Google & Bangkit",
    highlight: true,
  },
  {
    title: "Studi Independen Bersertifikat Angkatan 7",
    issuer: "Kemendikbudristek & Yayasan Dicoding Indonesia",
    date: "2024",
    image: "/certificates/sib_dicoding.jpg",
    category: "Google & Bangkit",
    highlight: true,
  },
  {
    title: "Lulusan Tepat Waktu: S1 Informatika (IPK 3.91 / 4.00)",
    issuer: "Universitas Ahmad Dahlan",
    date: "Mei 2026",
    image: "/certificates/lulus_tepat_waktu.jpg",
    category: "Akademik & Organisasi",
    highlight: true,
  },
  {
    title: "Asisten Praktikum: Dasar Pemrograman",
    issuer: "Laboratorium Komputer S1 Informatika UAD",
    date: "Feb 2024",
    image: "/certificates/asisten_dasar.jpg",
    category: "Akademik & Organisasi",
  },
  {
    title: "Asisten Praktikum: Logika Informatika",
    issuer: "Laboratorium Komputer S1 Informatika UAD",
    date: "Sep 2023",
    image: "/certificates/asisten_logika.jpg",
    category: "Akademik & Organisasi",
  },
  {
    title: "Staff Departemen Ilmu Pengetahuan dan Teknologi: HMIF",
    issuer: "Himpunan Mahasiswa Informatika (HMIF) UAD",
    date: "2023 - 2024",
    image: "/certificates/hmif_staff.jpg",
    category: "Akademik & Organisasi",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Okt 2024",
    image: "/certificates/dicoding_js.jpg",
    category: "Dicoding",
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024",
    image: "/certificates/dicoding_git.jpg",
    category: "Dicoding",
  },
  {
    title: "Belajar Dasar AI (Artificial Intelligence)",
    issuer: "Dicoding Indonesia",
    date: "Nov 2024",
    image: "/certificates/dicoding_ai.jpg",
    category: "Dicoding",
  },
  {
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024",
    image: "/certificates/dicoding_logika.jpg",
    category: "Dicoding",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Sep 2024",
    image: "/certificates/dicoding_webdasar.jpg",
    category: "Dicoding",
  },
];


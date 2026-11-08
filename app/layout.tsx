import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ageng Zayem Wahid | Backend Engineer & Cloud Native Practitioner",
  description:
    "Official developer portfolio of Muhammad Ageng Zayem Wahid. S1 Informatika UAD (IPK 3.91, 3.5 Tahun Fast-Track), Bangkit Academy 2024 Google Cloud Graduate. Specializing in high-throughput REST APIs, normalized relational databases, and containerized cloud deployments.",
  keywords: [
    "Muhammad Ageng Zayem Wahid",
    "Ageng Wahid",
    "Backend Engineer",
    "Cloud Engineer",
    "Google Cloud Platform",
    "Node.js",
    "Laravel",
    "Docker",
    "Portfolio Developer",
    "Informatika UAD",
  ],
  authors: [{ name: "Muhammad Ageng Zayem Wahid", url: "https://github.com/agengwahid" }],
  creator: "Muhammad Ageng Zayem Wahid",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://porto-ageng.vercel.app",
    title: "Muhammad Ageng Zayem Wahid | Backend Engineer & Cloud Native Practitioner",
    description:
      "Portofolio resmi Muhammad Ageng Zayem Wahid — Backend & Cloud Engineer. Lulusan UAD IPK 3.91 (Fast-Track 3.5 Tahun) dan Alumnus Bangkit Academy 2024 Google Cloud Cohort.",
    siteName: "Ageng Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ageng Zayem Wahid | Backend & Cloud Engineer",
    description:
      "Backend Engineer & Cloud Native Practitioner. UAD Informatics (GPA 3.91) · Bangkit 2024 Google Cloud.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="preload" href="/images/hutan.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/sky.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/ageng-hero.png" as="image" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#05070e] text-slate-100">
        {children}
      </body>
    </html>
  );
}

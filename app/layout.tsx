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
  title: "Muhammad Ageng Zayem Wahid | Backend & Web Developer",
  description:
    "Official portfolio of Muhammad Ageng Zayem Wahid. S1 Informatika Universitas Ahmad Dahlan (2022–2026, IPK 3.91/4.00, 3.5 tahun) and Bangkit Academy 2024 Cloud Computing graduate.",
  keywords: [
    "Muhammad Ageng Zayem Wahid",
    "Ageng Wahid",
    "Backend Developer",
    "Web Developer",
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
    title: "Muhammad Ageng Zayem Wahid | Backend & Web Developer",
    description:
      "Portofolio resmi Muhammad Ageng Zayem Wahid — Backend & Web Developer. Lulusan S1 Informatika UAD (2022–2026, IPK 3.91/4.00) dan Alumnus Bangkit Academy 2024 Cloud Computing.",
    siteName: "Ageng Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ageng Zayem Wahid | Backend & Web Developer",
    description:
      "Backend & Web Developer · S1 Informatika UAD (2022–2026, IPK 3.91) · Bangkit 2024 Cloud Computing.",
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
      <body className="min-h-full flex flex-col font-sans bg-[#0a0c0f] text-stone-100">
        {children}
      </body>
    </html>
  );
}

"use client";

import { LanguageProvider } from "@/components/providers/LanguageProvider";
import Navbar from "@/components/layout/Navbar";
import AmbientBackground from "@/components/layout/AmbientBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portofolio from "@/components/sections/Portofolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0c0f] text-zinc-100 flex flex-col selection:bg-stone-200 selection:text-zinc-950 relative overflow-x-clip font-sans">

        {/* Ambient Gradient Glow Background */}
        <AmbientBackground />

        {/* Floating Capsule Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main id="main-content" className="flex-1 relative z-10">
          <Hero />
          <About />
          <Portofolio />
          <Contact />
        </main>

        {/* Minimal Sleek Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

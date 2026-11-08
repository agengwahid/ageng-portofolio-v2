"use client";

import { useState } from "react";
import WelcomeScreen from "@/components/layout/WelcomeScreen";
import Navbar from "@/components/layout/Navbar";
import AmbientBackground from "@/components/layout/AmbientBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portofolio from "@/components/sections/Portofolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100 flex flex-col selection:bg-[#2c67ed]/40 selection:text-white relative overflow-x-hidden font-sans">
      {/* Intro Welcome Screen (Matches Eka Wahyu) */}
      {!welcomeComplete && (
        <WelcomeScreen onComplete={() => setWelcomeComplete(true)} />
      )}

      {/* GPU Accelerated Ambient Topography Glow */}
      <AmbientBackground />

      {/* Floating Capsule Navbar with Active Pill & Animated Mascot */}
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
  );
}

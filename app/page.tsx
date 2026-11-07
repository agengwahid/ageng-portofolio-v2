import Navbar from "@/components/layout/Navbar";
import AmbientBackground from "@/components/layout/AmbientBackground";
import Hero from "@/components/sections/Hero";
import BentoStats from "@/components/sections/BentoStats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05070e] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* GPU Accelerated Ambient Background */}
      <AmbientBackground />

      {/* Floating Pill Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-1 relative z-10">
        <Hero />
        <BentoStats />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Sleek Minimal Footer */}
      <Footer />
    </div>
  );
}

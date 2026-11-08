"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 4;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsFinished(true);
    onComplete();
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-[#07090e] flex flex-col items-center justify-center px-4 cursor-pointer select-none"
          onClick={handleSkip}
        >
          {/* Subtle Ambient Reflection (No Purple) */}
          <div className="absolute w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full bg-gradient-to-tr from-sky-500/15 via-blue-700/10 to-transparent blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-6"
          >
            {/* Minimal Monogram / Avatar Pulse */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-lg shadow-black/40">
                <span className="text-xl font-black text-white tracking-widest font-mono">
                  AW
                </span>
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#0284c7] border-2 border-[#07090e] animate-pulse" />
            </div>

            {/* Typography */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold">
                Welcome to My Portfolio
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Muhammad Ageng Zayem Wahid
              </h2>
              <p className="text-xs text-zinc-400 font-mono">
                Backend Engineer & Cloud Native Practitioner
              </p>
            </div>

            {/* Glowing Loading Bar */}
            <div className="w-full space-y-2 pt-2">
              <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-[#0284c7] shadow-[0_0_15px_rgba(2,132,199,0.8)] transition-all duration-75 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 px-0.5">
                <span>INITIALIZING SYSTEM</span>
                <span className="text-white font-semibold">{progress}%</span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors pt-2 font-mono">
              Klik di mana saja untuk lewati →
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

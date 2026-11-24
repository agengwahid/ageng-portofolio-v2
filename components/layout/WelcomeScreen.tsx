"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(() => {
    if (typeof window !== "undefined") {
      return Boolean(sessionStorage.getItem("portfolio_welcomed"));
    }
    return false;
  });

  useEffect(() => {
    if (isFinished) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (typeof window !== "undefined") {
              sessionStorage.setItem("portfolio_welcomed", "true");
            }
            setIsFinished(true);
            onComplete();
          }, 350);
          return 100;
        }
        return prev + 5;
      });
    }, 22);

    return () => clearInterval(timer);
  }, [isFinished, onComplete]);

  const handleSkip = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("portfolio_welcomed", "true");
    }
    setIsFinished(true);
    onComplete();
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-[#0a0c0f] flex flex-col items-center justify-center px-4 cursor-pointer select-none"
          onClick={handleSkip}
        >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-6"
          >
            {/* Minimal Monogram */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center">
                <span className="text-xl font-black text-white tracking-widest font-mono">
                  AW
                </span>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-1.5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
                Muhammad Ageng Zayem Wahid
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Portfolio & Engineering Archive
              </h2>
              <p className="text-xs text-zinc-400">
                Backend Engineer & Cloud Native Practitioner
              </p>
            </div>

            {/* Clean Progress Bar */}
            <div className="w-full space-y-2 pt-2">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-stone-100 transition-all duration-75 ease-out rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 px-0.5 tabular-nums">
                <span>Memuat antarmuka</span>
                <span className="text-stone-200 font-medium">{progress}%</span>
              </div>
            </div>

            <p className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors pt-2">
              Klik di mana saja untuk lewati →
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

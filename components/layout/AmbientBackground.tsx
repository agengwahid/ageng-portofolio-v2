export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
    >
      {/* Subtle Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-25" />

      {/* Radial Gradient Ambient Mesh (GPU accelerated CSS only) */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[650px] md:w-[900px] h-[550px] md:h-[650px] bg-gradient-to-b from-cyan-600/15 via-blue-700/10 to-transparent rounded-full blur-[120px] animate-glow-slow" />
      <div className="absolute top-[40%] -left-[10%] w-[450px] md:w-[600px] h-[450px] md:h-[600px] bg-gradient-to-tr from-emerald-600/10 via-teal-700/10 to-transparent rounded-full blur-[130px] animate-glow-delay" />
      <div className="absolute top-[75%] -right-[10%] w-[450px] md:w-[650px] h-[450px] md:h-[650px] bg-gradient-to-tl from-indigo-600/15 via-cyan-900/10 to-transparent rounded-full blur-[140px] animate-glow-slow" />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05070e_90%)] opacity-85" />
    </div>
  );
}


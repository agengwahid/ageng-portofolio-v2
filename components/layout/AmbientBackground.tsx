export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#07090e]"
    >
      {/* Precision Technical Dot Grid */}
      <div className="absolute inset-0 technical-grid opacity-35" />

      {/* Subtle Sky/Cyan Ambient Reflections (Pure Anti-Slop, No Purple) */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[650px] md:w-[950px] h-[500px] bg-gradient-to-b from-sky-500/12 via-blue-600/8 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-[40%] -left-[10%] w-[450px] md:w-[650px] h-[450px] bg-gradient-to-tr from-emerald-500/8 via-cyan-600/6 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-[70%] -right-[10%] w-[500px] md:w-[700px] h-[500px] bg-gradient-to-tl from-sky-600/10 via-blue-900/8 to-transparent rounded-full blur-[150px]" />

      {/* Vignette Edge Shading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#07090e_90%)] opacity-85" />
    </div>
  );
}

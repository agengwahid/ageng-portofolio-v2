export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#030712]"
    >
      {/* Subtle Topographic Radial Glows */}
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[550px] md:h-[700px] bg-gradient-to-b from-[#2c67ed]/15 via-blue-900/10 to-transparent rounded-full blur-[140px] animate-ambient-glow" />
      <div className="absolute top-[45%] -left-[10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-gradient-to-tr from-[#1d4ed8]/12 via-indigo-900/10 to-transparent rounded-full blur-[150px]" />
      <div className="absolute top-[75%] -right-[10%] w-[500px] md:w-[750px] h-[500px] md:h-[750px] bg-gradient-to-tl from-[#2c67ed]/15 via-blue-950/10 to-transparent rounded-full blur-[150px] animate-ambient-glow" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_95%)] opacity-90" />
    </div>
  );
}

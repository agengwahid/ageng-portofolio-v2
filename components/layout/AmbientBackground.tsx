export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#030712]"
    >
      {/* Subtle Sky/Cyan Ambient Reflections matching Eka Wahyu */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[650px] md:w-[950px] h-[500px] bg-gradient-to-b from-[#2c67ed]/15 via-blue-600/8 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-[40%] -left-[10%] w-[450px] md:w-[650px] h-[450px] bg-gradient-to-tr from-blue-500/10 via-cyan-600/6 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-[70%] -right-[10%] w-[500px] md:w-[700px] h-[500px] bg-gradient-to-tl from-[#2c67ed]/12 via-blue-900/8 to-transparent rounded-full blur-[150px]" />

      {/* Vignette Edge Shading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_90%)] opacity-85" />
    </div>
  );
}

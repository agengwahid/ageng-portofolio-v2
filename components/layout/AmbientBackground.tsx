export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#030712]"
    >
      {/* Clean Subtle Ambient Lighting (Natural deep blue/slate tones, no AI-slop purple) */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[650px] md:w-[950px] h-[500px] bg-gradient-to-b from-blue-600/6 via-slate-800/4 to-transparent rounded-full blur-[160px]" />
      <div className="absolute top-[40%] -left-[10%] w-[450px] md:w-[650px] h-[450px] bg-gradient-to-tr from-sky-600/5 via-slate-900/4 to-transparent rounded-full blur-[160px]" />
      <div className="absolute top-[70%] -right-[10%] w-[500px] md:w-[700px] h-[500px] bg-gradient-to-tl from-blue-700/5 via-slate-900/4 to-transparent rounded-full blur-[160px]" />

      {/* Vignette Edge Shading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_90%)] opacity-85" />
    </div>
  );
}

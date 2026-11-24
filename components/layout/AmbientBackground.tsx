export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-gradient-to-b from-[#0a0c0f] via-[#16191f] to-[#0d1015]"
    >
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[520px] bg-gradient-to-b from-zinc-600/12 via-zinc-700/6 to-transparent rounded-full blur-[140px]" />
    </div>
  );
}

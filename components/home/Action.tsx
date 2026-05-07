export default function Action() {

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-3xl w-full py-20 flex flex-col items-center text-center">

        {/* Top badge */}
        <div className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-1.5 text-[11px] font-bold  uppercase text-foreground mb-7 bg-white/3">
          <div className="w-2 h-2 rounded-full bg-[#e8a020] shrink-0" />
         See it in action
        </div>

        {/* Heading */}
        <h2 className="font-extrabold text-5xl leading-[1.1] text-foreground mb-5 font-sans">
          See how BarberzLink works in<br />
          <span className="text-[#f5a623]">56 seconds</span>
        </h2>

        {/* Sub-badge */}
        <div className="inline-flex items-center gap-2 border border-[#3a3a3a] rounded-full px-4 py-[6px] text-xs text-[#aaa] mb-4 bg-white/[0.03]">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="#888" strokeWidth="1.2" />
            <path d="M6.5 3.5v3l2 1.5" stroke="#888" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          56-second video
        </div>

        {/* Description */}
        <p className="text-[#888] text-[15px] leading-relaxed max-w-lg mb-9">
          This 56-second video is a quick walkthrough of the platform — it
          shows how the product works, not how long hiring takes.
        </p>

        {/* Video Card */}
        <video
  src="/video.mp4" autoPlay muted loop playsInline controls className="w-full aspect-video object-cover block rounded-2xl border-2 border-amber-400"
/>

      </div>
    </section>
  );
}
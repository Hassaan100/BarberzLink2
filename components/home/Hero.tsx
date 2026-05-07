import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { FiPlay, FiShield, FiVideo, FiAward } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[linear-gradient(to_right,var(--hero-bg-from),var(--hero-bg-via),var(--hero-bg-to))]  flex items-center px-8 md:px-16 py-16">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

       
        <div className="flex-1 max-w-xl">

         
          <div className="inline-flex items-center gap-2 border border-yellow-600/50 rounded-full px-4 py-1.5 mb-8">
            <span className="text-yellow-500 text-xs font-semibold tracking-widest uppercase">
              Barbers · Bookings · Style
            </span>
          </div>

        
          <h1 className="text-5xl md:text-[53px] font-black leading-tight mb-6">
            <span className="text-foreground">Resumes say it.</span>
            <br />
            <span className="text-yellow-500"> BarberzLink shows it.
</span>
          </h1>
          <p className="text-foreground text-xl leading-relaxed mb-8 max-w-lg">
            The mobile app where you see ID-verified profiles, intro videos, and proof of skill
            before the interview. Vetano helps businesses hire faster for jobs and gigs across
            restaurants, trades, retail, automotive, haircare, and more.
          </p>
          <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase mb-4">
            Download the Vetano App — Free
          </p>
          <div className="flex items-center gap-3 mb-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-background text-foreground rounded-xl px-4 py-2.5 hover:bg-background transition-colors"
            >
              <SiAppstore size={22} />
              <div className="leading-tight">
                <p className="text-[9px] opacity-60">Download on the</p>
                <p className="text-[13px] font-bold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-background text-foreground rounded-xl px-4 py-2.5 hover:bg-background transition-colors"
            >
              <SiGoogleplay size={20} />
              <div className="leading-tight">
                <p className="text-[9px] opacity-60">GET IT ON</p>
                <p className="text-[13px] font-bold">Google Play</p>
              </div>
            </a>
          </div>

         
          <p className="text-foreground text-md mb-6">
            Post jobs, review talent, and connect with candidates inside the BarberzLink mobile app.
          </p>
          <p className="text-[#a3a3a3] text-sm mb-8">iPhone & Android · Free to download</p>

       
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-yellow-500/50 text-foreground rounded-full px-5 py-2.5 hover:border-yellow-400 transition-colors mb-10"
          >
            <FiPlay size={16} className="text-yellow-500 bg-[#18140d]!" />
            <span className="text-sm font-medium">Watch the 56-second tour</span>
          </a>
          <div className="flex items-center gap-6 text-foreground text-sm">
            <span className="flex items-center gap-1.5">
              <FiShield size={14} className="text-yellow-500/70" /> ID-Verified
            </span>
            <span className="flex items-center gap-1.5">
              <FiVideo size={14} className="text-yellow-500/70" /> Intro Videos
            </span>
            <span className="flex items-center gap-1.5">
              <FiAward size={14} className="text-yellow-500/70" /> Proof of Skill
            </span>
          </div>
        </div>

        
        <div className="flex-1 flex justify-center items-center relative">

          
          <div className="absolute top-0 right-4 flex items-center gap-2 bg-label border border-span rounded-full px-3 py-1.5 z-10">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-yellow-500 text-xs font-semibold tracking-widest uppercase">App Preview</span>
          </div>

        
          <div className="relative w-[280px] h-[580px] bg-[#111] rounded-[45px] border-4 border-[#333] shadow-2xl overflow-hidden">
    
          </div>
        </div>

      </div>
    </section>
  );
}
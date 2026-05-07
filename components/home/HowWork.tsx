"use client"
import { useState } from "react";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";







const barberSteps = [
  {
    num: "01",
    title: "Post the Job",
    desc: "Create your job in the Vetano app and pick the skills you want candidates to show on video.",
    icon: <PiSuitcaseSimpleBold/>,
   
  },
  {
    num: "02",
    title: "Share Your Link",
    desc: "Drop your Vetano job link or QR anywhere you already post — Indeed, Craigslist, Facebook, your website, flyers, social.",
       icon: <IoShareSocialSharp/>,

   
  },
  {
    num: "03",
    title: "Review Proof",
    desc: "Watch intro videos and proof-of-skill videos from ID-verified applicants. Real people, real skills — before the interview.",
       icon: <FaPlayCircle/>,

  
  },
  {
    num: "04",
    title: "Hire with Proof",
    desc: "Choose with confidence. Real skills. Real proof. No more resume guesswork.",
       icon: <IoShieldCheckmark/>,

  
  },
];

const barberShopSteps = [
  {
    num: "01",
    title: "Build Your Profile",
    desc: "Create your Vetano profile, add your skills, and record a short intro video that showcases who you are.",
    icon: <IoMdVideocam/>,
   
  },
  {
    num: "02",
    title: "Record Skill Videos",
    desc: "Film short videos proving your skills. Show employers exactly what you can do — before they even call you.",
    icon:<IoMdVideocam/>,
  
  },
  {
    num: "03",
    title: "Apply to Jobs",
    desc: "Browse jobs that match your skills and apply instantly — your video profile does the talking for you.",
    icon: <MdOutlineSearch/>,
   
  },
  {
    num: "04",
    title: "Get Hired Faster",
    desc: "Stand out from the crowd. Employers see your real skills first — get interviews faster and land the job you deserve.",
    icon: <IoCheckmarkCircleOutline/>,
  
  },
];

function StepCard({ step }) {
  return (
    <div className=" bg-background border border-[#222] rounded-2xl  flex flex-col hover:-translate-y-1 hover:border-[#333] transition-all duration-200 p-3  z-5">
      <div className="relative">
        <img src="https://vetano.com/assets/post-job-BlPbTb9p.png" alt="" className="rounded-2xl" />
        <div className="absolute top-[-20] right-[-15] w-[40px] h-[40px] rounded-full border-[1.5px] border-[#f5a623] text-[#f5a623] text-[12px] font-bold  flex items-center justify-center bg-[#0d0d0d] z-50 ">
          {step.num}
        </div>
        </div>
      
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div className=" flex  justify-start items-center gap-5" >
        <div className="w-10 h-10 rounded-[9px] bg-[rgba(245,166,35,0.12)] border border-[rgba(245,166,35,0.25)] flex items-center justify-center mb-2.5 shrink-0 ">
          {step.icon}
        </div>
        <div className="text-[20px] font-bold text-foreground mb-1.5">
          {step.title}
        </div>
        </div>
        <div className="text-[15px] text-foreground leading-relaxed text-start">
          {step.desc}
        </div>
      </div>
    </div>
  );
}

export default function HowWorks() {
  const [tab, setTab] = useState("barber");
  const steps = tab === "barber" ? barberSteps : barberShopSteps;

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-5 py-16">
      <div className="max-w-7xl w-full flex flex-col items-center text-center ">
        <div className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-1.5 text-[11px] font-bold uppercase text-foreground mb-7 bg-white/5">
          <div className="w-2 h-2 rounded-full bg-[#e8a020] shrink-0" />
          HOW IT WORKS
        </div>

        {/* Heading */}
        <h2 className=" text-[clamp(36px,5.5vw,62px)] font-extrabold leading-[1.08] text-foreground mb-4">
          From Skills to <span className="text-amber-400">Success</span>
        </h2>
        <p className="text-[16px] text-[#777] mb-9 max-w-125 leading-relaxed">
          A simple process that puts real abilities front and center.
        </p>

        {/* Tabs */}
        <div className="inline-flex bg-[rgba(255,255,255,0.06)] border border-[#2a2a2a] rounded-full p-1.25 gap-1 mb-12">
          {["barber", " barber-Shop"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-7 py-2 rounded-full text-[14px] font-medium transition-all duration-200 border-none cursor-pointer  ${
                tab === t
                  ? "bg-amber-400 text-[#0d0d0d] font-semibold"
                  : "bg-transparent text-foreground hover:text-foreground hover:bg-white/6"
              }`}
            >
              {t === "barber" ? "Barberz" : "Barberz Shop"}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-4 w-full max-[800px]:grid-cols-2 max-[480px]:grid-cols-1 ">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

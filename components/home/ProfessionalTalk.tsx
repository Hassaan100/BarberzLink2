"use client";
import { FaScissors } from "react-icons/fa6";


const professions = [
  {
    name: "BARBER ",
    icon: <FaScissors />,

    professionalItems: [
      '"Build Your Profile"',
      '"Record Skill Videos"',
      '"Get Hired Faster"',
    ],
  },
  {
    name: "BARBERSHOP ",
    icon: <FaScissors />,

    professionalItems: [
      '"Post Your Opening"',
      '"Review Skill Videos"',
      '"Hire with Confidence"',
    ],
  },
  {
    name: "BARBERSCHOOL ",
    icon: <FaScissors />
,
    professionalItems: [
      '"Create School Profile"',
      '"Share Student Work"',
      '"Connect with Talent"',
    ],
  },
  {
    name: "EVENT_ORGANIZER",
    icon: <FaScissors />
,
    professionalItems: [
      '"Post Your Event Need"',
      '"Browse Verified Talent"',
      '"Book with Proof"',
    ],
  },
  {
    name: "BUSINESS_RESOURCE ",
    icon: <FaScissors />
,
    professionalItems: [
      '"List Your Resource"',
      '"Reach the Right Shops"',
      '"Grow Your Network"',
    ],
  },
  {
    name: "PRODUCT_ADVERTISER",
    icon: <FaScissors />
,
    professionalItems: [
      '"Create Your Listing"',
      '"Target Barbers Directly"',
      '"Track Engagement"',
    ],
  },
];

function ProfessionCol({ prof }: { prof: typeof professions[0] }) {
  return (
    <div className="flex flex-col bg-black p-5 rounded-2xl border-[1px] border-[#666457]">
      {/* Column Header */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <div className="w-8.5 h-8.5 rounded-[9px] bg-[rgba(245,166,35,0.13)] border border-[rgba(245,166,35,0.28)] flex items-center justify-center flex-shrink-0 text-amber-400">
          {prof.icon}
        </div>
        <span className=" text-[16px] font-bold text-white">{prof.name}</span>
      </div>

      {/* Resume Card */}
      <div className="bg-[#ffff] rounded-xl px-[18px] py-4 mb-2.5">
        <div className="flex items-center gap-1.5 mb-3">
          {/* <ResumeIcon /> */}
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#999]">Resume Says</span>
        </div>
        <div className="flex flex-col gap-[7px]">
          {prof.professionalItems.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[#bbb] text-[13px] mt-[1px] flex-shrink-0">—</span>
              <span className="text-[12.5px] text-[#555] italic leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default function ProfessionalTalk() {
  return (
    <section     className=" grid-bg min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <div className="max-w-275 w-full flex flex-col items-center text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-1.5 text-[11px] font-bold uppercase text-foreground mb-7 bg-white/5">
                  <div className="w-2 h-2 rounded-full bg-[#e8a020] shrink-0" />

        
          SEE THE DIFFERENCE
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.1] text-foreground mb-3.5">
          Professional talks. <span className="text-amber-400">Vetano shows.</span>
        </h2>
        <p className="text-[15px] text-foreground mb-12 max-w-[480px] leading-relaxed">
          Words on paper versus proof on video — the choice is clear.
        </p>

        {/* 3 Columns */}
        <div className="grid grid-cols-3 gap-5 w-full max-[700px]:grid-cols-1">
          {professions.map((prof, i) => (
            <ProfessionCol key={i} prof={prof} />
          ))}
        </div>

       

      </div>
    </section>
  );
}
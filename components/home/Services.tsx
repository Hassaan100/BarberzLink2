"use client"

import  { useState } from "react";

// REACT ICONS
import {
  FaCut,
  FaCalendarCheck,
  FaUsers,
  FaStore,
  FaMobileAlt,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

// FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion";

export default function BarberzLinkSection() {
  // ALL CONTENT DATA
  const sections = [
    {
      id: 1,

      title: "Online Barber Booking",
      subtitle: "Let clients book anytime",

      icon: <FaCalendarCheck />,

      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1400&auto=format&fit=crop",

      stat1: "24/7",
      stat1Text: "Online Booking",

      stat2: "40%",
      stat2Text: "Less No-Shows",

      description:
        "Allow customers to book barber appointments online anytime without phone calls or waiting.",

      tags: [
        "Haircuts",
        "Beard Trim",
        "Skin Fade",
        "Hot Towel",
        "Kids Cut",
      ],

      buttonText: "Start Booking Now",
    },

    {
      id: 2,

      title: "Barber Team Management",
      subtitle: "Manage your entire shop easily",

      icon: <FaUsers />,

      image:
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1400&auto=format&fit=crop",

      stat1: "100%",
      stat1Text: "Team Visibility",

      stat2: "60%",
      stat2Text: "Better Scheduling",

      description:
        "Manage barber schedules, appointments, staff availability, and daily workflow from one dashboard.",

      tags: [
        "Barber Schedule",
        "Staff Access",
        "Appointments",
        "Availability",
      ],

      buttonText: "Manage Your Team",
    },

    {
      id: 3,

      title: "Grow Your Barber Brand",
      subtitle: "Build your barber business online",

      icon: <FaChartLine />,

      image:
        "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1400&auto=format&fit=crop",

      stat1: "3X",
      stat1Text: "More Visibility",

      stat2: "50%",
      stat2Text: "More Returning Clients",

      description:
        "Promote your barber shop online, attract new clients, and increase repeat bookings.",

      tags: [
        "Marketing",
        "Client Growth",
        "Reviews",
        "Brand Building",
      ],

      buttonText: "Grow Your Shop",
    },

    {
      id: 4,

      title: "Mobile Barber Experience",
      subtitle: "Run your business from your phone",

      icon: <FaMobileAlt />,

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",

      stat1: "Anytime",
      stat1Text: "Mobile Access",

      stat2: "24/7",
      stat2Text: "Booking Updates",

      description:
        "Check appointments, manage bookings, and stay connected with clients directly from mobile.",

      tags: [
        "Mobile Booking",
        "Notifications",
        "Calendar",
        "Easy Access",
      ],

      buttonText: "Use Mobile Features",
    },

    {
      id: 5,

      title: "Modern Barber Shop",
      subtitle: "Create a professional experience",

      icon: <FaStore />,

      image:
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1400&auto=format&fit=crop",

      stat1: "90%",
      stat1Text: "Better Experience",

      stat2: "2X",
      stat2Text: "Faster Service",

      description:
        "Give customers a smooth modern experience with online booking, reminders, and organized scheduling.",

      tags: [
        "Client Experience",
        "Modern Shop",
        "Digital Booking",
        "Automation",
      ],

      buttonText: "Upgrade Your Shop",
    },

    {
      id: 6,

      title: "Professional Barber Network",
      subtitle: "Connect with the barber community",

      icon: <FaCut />,

      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1400&auto=format&fit=crop",

      stat1: "Nationwide",
      stat1Text: "Barber Network",

      stat2: "Unlimited",
      stat2Text: "Opportunities",

      description:
        "Connect with barbers, discover opportunities, and grow your career in the barber industry.",

      tags: [
        "Community",
        "Networking",
        "Career Growth",
        "Barber Events",
      ],

      buttonText: "Join BarberzLink",
    },
  ];


  const [activeSection, setActiveSection] = useState(sections[0]);

  return (
    <section id="services" className="scroll-mt-20 bg-background text-white py-20 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 border border-[#333] rounded-full px-5 py-1.5 text-[11px] font-bold  uppercase text-foreground mb-7 bg-white/3">
          <div className="w-2 h-2 rounded-full bg-[#e8a020] shrink-0" />
         Hire Smarter in Your Industry

        </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
            <span className="text-amber-400">Modern Barber</span>{" "}
            Solutions For Every Shop
          </h2>

          <p className="text-foreground max-w-3xl mx-auto mt-6 text-lg">
            Manage bookings, grow your barber brand, connect with clients,
            organize your team, and build a modern barber experience with
            BarberzLink.
          </p>
        </motion.div>

            {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* LEFT SIDE MENU */}
          <div className="space-y-4">
            {sections.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveSection(item)}
                className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300
                
                ${
                  activeSection.id === item.id
                    ? "bg-yellow-500 text-black border-amber-400"
                    : "bg-zinc-900 border-zinc-800 hover:border-amber-400"
                }
                `}
              >
                <div className="flex items-center justify-between">
                  {/* LEFT CONTENT */}
                  <div className="flex gap-4">
                    {/* ICON */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl
                      
                      ${
                        activeSection.id === item.id
                          ? "bg-black/10"
                          : "bg-yellow-500/10 text-yellow-500"
                      }
                      `}
                    >
                      {item.icon}
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>

                      <p
                        className={`text-sm mt-1
                        
                        ${
                          activeSection.id === item.id
                            ? "text-black/70"
                            : "text-gray-400"
                        }
                        `}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* ARROW */}
                  <FaArrowRight />
                </div>
              </motion.div>
            ))}
          </div>

              {/* RIGHT CONTENT CARD */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden"
              >
                    {/* IMAGE AREA */}
                <div className="relative h-[330px] overflow-hidden">
                  <img
                    src={activeSection.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  {/* DARK OVERLAY */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* STATS */}
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-black/80 backdrop-blur-md p-5 rounded-2xl"
                    >
                      <h3 className="text-amber-400 text-4xl font-bold">
                        {activeSection.stat1}
                      </h3>

                      <p className="text-gray-300 text-sm mt-1">
                        {activeSection.stat1Text}
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-black/80 backdrop-blur-md p-5 rounded-2xl"
                    >
                      <h3 className="text-amber-400 text-4xl font-bold">
                        {activeSection.stat2}
                      </h3>

                      <p className="text-gray-300 text-sm mt-1">
                        {activeSection.stat2Text}
                      </p>
                    </motion.div>
                  </div>
                </div>

                    {/* BOTTOM CONTENT */}
                <div className="p-8">
                  {/* TITLE AREA */}
                  <div className="flex gap-4 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 text-amber-400 flex items-center justify-center text-2xl">
                      {activeSection.icon}
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold">
                        {activeSection.title}
                      </h2>

                      <p className="text-gray-400 mt-3 leading-relaxed">
                        {activeSection.description}
                      </p>
                    </div>
                  </div>

                  {/* TAGS */}
                  <div className="mt-8">
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <FaUsers />
                      <span>Popular Features</span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {activeSection.tags.map((tag, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="bg-zinc-800 px-4 py-2 rounded-full text-sm"
                        >
                          {tag}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 bg-amber-400  text-black font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all"
                  >
                    {activeSection.buttonText}
                    <FaArrowRight />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

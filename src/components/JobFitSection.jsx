'use client';

import React from "react";
import { motion } from "framer-motion";
import { Check, Globe2, Users, RefreshCw } from "lucide-react";
import assets from '../assets/assets'; // Same assets as HiringPlatformSection

// Floating animation
const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function JobFitSection() {
  const values = [
    {
      icon: <Check className="w-5 h-5" />,
      title: "Customer First",
      text: "We prioritize our clients’ needs, providing personalized service and support at every step.",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "Innovation",
      text: "Constantly evolving to stay at the forefront of industry trends and advancements.",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Integrity",
      text: "Transparency and honesty are at the core of everything we do.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Collaboration",
      text: "We believe that teamwork and strong partnerships yield the best results.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 bg-white overflow-hidden">
      
      {/* LEFT: Map + Floating Stats & Avatars (Mirror of HiringPlatform Right Side) */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* World Map - SAME IMAGE as HiringPlatformSection */}
        <img
          src={assets.map}
          alt="World Map"
          className="w-[90%] md:w-[80%] object-contain opacity-90"
        />

        {/* Floating Stat 1 */}
        <motion.div
          className="absolute top-[15%] left-[20%] bg-white shadow-lg rounded-xl px-5 py-3 flex items-start gap-2"
          animate={floatAnimation}
        >
          <Globe2 className="text-teal-600 w-6 h-6 mt-1" />
          <div>
            <p className="text-lg font-bold text-gray-800">198+</p>
            <span className="text-sm text-gray-500">Countries</span>
          </div>
        </motion.div>

        {/* Floating Stat 2 */}
        <motion.div
          className="absolute bottom-[20%] left-[35%] bg-white shadow-lg rounded-xl px-5 py-3 flex items-start gap-2"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.5 } }}
        >
          <Users className="text-teal-600 w-6 h-6 mt-1" />
          <div>
            <p className="text-lg font-bold text-gray-800">1 million+</p>
            <span className="text-sm text-gray-500">Candidates</span>
          </div>
        </motion.div>

        {/* Floating Stat 3 */}
        <motion.div
          className="absolute top-[45%] right-[25%] bg-white shadow-lg rounded-xl px-5 py-3 flex items-start gap-2"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
        >
          <RefreshCw className="text-teal-600 w-6 h-6 mt-1" />
          <div>
            <p className="text-lg font-bold text-gray-800">350k</p>
            <span className="text-sm text-gray-500">Job Search Success</span>
          </div>
        </motion.div>

        {/* Floating Avatars */}
        <motion.img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="User"
          className="absolute top-[10%] left-[45%] w-10 h-10 rounded-full border-4 border-white shadow-md"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.3 } }}
        />
        <motion.img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="absolute bottom-[15%] right-[40%] w-10 h-10 rounded-full border-4 border-white shadow-md"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.8 } }}
        />
        <motion.img
          src="https://randomuser.me/api/portraits/women/12.jpg"
          alt="User"
          className="absolute top-[55%] left-[30%] w-10 h-10 rounded-full border-4 border-white shadow-md"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1.2 } }}
        />
        <motion.img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="User"
          className="absolute top-[30%] right-[15%] w-10 h-10 rounded-full border-4 border-white shadow-md"
          animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.7 } }}
        />
      </div>

      {/* RIGHT: Text Content */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Get the job that’s right for you
        </h2>
        <p className="text-gray-600 max-w-lg">
          Our mission is to create value by combining expertise, innovation, and integrity, fostering long-term relationships with our clients, partners, and employees.
        </p>

        <div className="space-y-4">
          {values.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}:</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
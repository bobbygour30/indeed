import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import assets from "../assets/assets";

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Banner = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between bg-[#f7f7fc] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-5 sm:space-y-6 max-w-xl w-full mt-10 lg:mt-0 lg:pr-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 leading-tight">
          Find The Job That <br className="hidden sm:block" /> Fits Your Life
        </h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Indeed is one of the largest job search platforms, helping job seekers find
          opportunities across various industries. It allows users to upload resumes,
          search for jobs by location, salary, and job type, and apply directly.
          Employers can post job listings and review candidate applications.
        </p>

        {/* SEARCH BAR - FULLY RESPONSIVE */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-xl shadow-md w-full max-w-xl overflow-hidden mt-6 gap-0">
          {/* Icon + Input Container */}
          <div className="flex items-center flex-1 min-w-0">
            <div className="pl-3 sm:pl-4">
              <Search className="text-gray-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            </div>
            <input
              type="text"
              placeholder="Job title, keywords or company"
              className="flex-1 py-3 sm:py-4 px-2 sm:px-4 outline-none text-gray-700 text-sm sm:text-base w-full min-w-0 truncate"
            />
          </div>

          {/* Button */}
          <button className="bg-[#008563] hover:bg-[#006f52] text-white font-semibold px-4 py-3 sm:px-8 sm:py-4 w-full sm:w-auto transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
            Find Jobs
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE SECTION - (unchanged, already fixed) */}
      <div className="relative flex-1 flex justify-center items-center w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
        <motion.img
          src={assets.person}
          alt="Job seeker"
          className="relative z-10 w-[70%] sm:w-[75%] md:w-[80%] lg:w-[75%] xl:w-[70%] max-w-md object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.img
          src={assets.icon3}
          alt="Like"
          className="absolute top-8 left-4 sm:top-10 sm:left-8 lg:top-12 lg:left-10 w-8 h-8 sm:w-10 sm:h-10"
          animate={floatAnimation}
        />
        <motion.img
          src={assets.icon2}
          alt="Share"
          className="absolute bottom-12 left-8 sm:bottom-16 sm:left-12 lg:bottom-20 lg:left-16 w-8 h-8 sm:w-10 sm:h-10"
          animate={{ ...floatAnimation, delay: 0.5 }}
        />
        <motion.img
          src={assets.icon1}
          alt="Link"
          className="absolute top-1/3 right-4 sm:right-8 lg:top-1/3 lg:right-12 w-8 h-8 sm:w-10 sm:h-10"
          animate={{ ...floatAnimation, delay: 1 }}
        />

        <motion.div
          className="absolute top-12 sm:top-16 lg:top-20 right-0 sm:right-4 lg:right-0 bg-white shadow-lg rounded-2xl px-4 sm:px-5 py-2 sm:py-3 flex items-center gap-2 sm:gap-3"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">25M+</h3>
            <p className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">Jobs Available</p>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-4 sm:left-8 lg:left-12 bg-white shadow-lg rounded-2xl px-4 sm:px-5 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 z-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="Candidate"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">480+</h3>
            <p className="text-gray-600 text-xs sm:text-sm">Happy Candidates</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
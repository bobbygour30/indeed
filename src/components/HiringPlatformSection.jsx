'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe2, Users, RefreshCw } from 'lucide-react';
import assets from '../assets/assets';

const companies = ['Amazon', 'Google', 'Walmart', 'Deloitte', 'Google', 'Deloitte'];

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export default function HiringPlatformSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 bg-white overflow-hidden">
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Your end–to–end <br /> hiring platform
        </h2>
        <p className="text-gray-600 max-w-lg">
          Indeed partners with many major companies globally to list job openings. 
          Some notable companies that frequently post jobs on Indeed include:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 mt-4">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="text-teal-600 w-5 h-5" />
              <span className="text-gray-800 font-medium">{company}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative w-full md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
        {/* WORLD MAP BACKGROUND */}
        <img
          src={assets.map}
          alt="World Map"
          className="w-[90%] md:w-[80%] object-contain opacity-90"
        />

        {/* FLOATING ICONS */}
        <motion.div
          className="absolute top-[20%] left-[55%] bg-white shadow-lg rounded-xl px-5 py-3 flex flex-col items-start"
          animate={floatAnimation}
        >
          <Globe2 className="text-teal-600 w-6 h-6 mb-1" />
          <p className="text-lg font-semibold text-gray-800">198+</p>
          <span className="text-sm text-gray-500">Countries</span>
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] left-[30%] bg-white shadow-lg rounded-xl px-5 py-3 flex flex-col items-start"
          animate={{ y: [0, -12, 0], transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <Users className="text-teal-600 w-6 h-6 mb-1" />
          <p className="text-lg font-semibold text-gray-800">1 million+</p>
          <span className="text-sm text-gray-500">Candidates</span>
        </motion.div>

        <motion.div
          className="absolute top-[45%] right-[20%] bg-white shadow-lg rounded-xl px-5 py-3 flex flex-col items-start"
          animate={{ y: [0, -18, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <RefreshCw className="text-teal-600 w-6 h-6 mb-1" />
          <p className="text-lg font-semibold text-gray-800">350k</p>
          <span className="text-sm text-gray-500">Job Search Success</span>
        </motion.div>

        {/* Floating Avatars */}
        <motion.img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="Avatar"
          className="absolute top-[10%] right-[30%] w-10 h-10 rounded-full border-4 border-white shadow-md"
          animate={{ y: [0, -15, 0], transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' } }}
        />
        <motion.img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Avatar"
          className="absolute bottom-[10%] left-[25%] w-10 h-10 rounded-full border-4 border-white shadow-md"
          animate={{ y: [0, -10, 0], transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } }}
        />
        <motion.img
          src="https://randomuser.me/api/portraits/women/12.jpg"
          alt="Avatar"
          className="absolute top-[50%] left-[50%] w-10 h-10 rounded-full border-4 border-white shadow-md"
          animate={{ y: [0, -20, 0], transition: { duration: 3.7, repeat: Infinity, ease: 'easeInOut' } }}
        />
      </div>
    </section>
  );
}

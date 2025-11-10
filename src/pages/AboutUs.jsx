'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HowItWorks from "../components/HowItWorks";
import JobFitSection from "../components/JobFitSection";
import TestimonialsSection from "../components/TestimonialsSection";
import JobOpportunitiesCTA from "../components/JobOpportunitiesCTA.jsx";
import assets from "../assets/assets.js";

// Floating animation for icons
const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Smooth counter hook (pure JS)
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const startTime = useRef(null);
  const animationFrame = useRef(null);

  useEffect(() => {
    const startValue = 0;
    const easeOutQuart = (t) => 1 - (--t) * t * t * t;

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.floor(startValue + (target - startValue) * eased);

      setCount(current);

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animate);
      }
    };

    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [target, duration]);

  return count;
}

export default function AboutUs() {
  // Counter values
  const jobsAvailable = useCounter(25000000, 2500);
  const newJobs = useCounter(177000, 2000);
  const companies = useCounter(298000, 2000);
  const candidates = useCounter(5000000, 2500);

  // Format large numbers
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M+";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K+";
    }
    return num + "+";
  };

  return (
    <div className="w-full">
      {/* === ABOUT US SECTION === */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between bg-white px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden">
        
        {/* LEFT: Image + Floating Elements */}
        <div className="relative flex-1 flex justify-center items-center w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          
          {/* Main Person */}
          <motion.img
            src={assets.person}
            alt="Happy professional"
            className="relative z-10 w-[70%] sm:w-[75%] md:w-[80%] lg:w-[70%] xl:w-[65%] max-w-md object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Floating Icon 1 - Heart (Like) */}
          <motion.div
            className="absolute top-8 left-4 sm:top-10 sm:left-8 lg:top-12 lg:left-12 w-10 h-10 sm:w-12 sm:h-12"
            animate={floatAnimation}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </motion.div>

          {/* Floating Icon 2 - Share */}
          <motion.div
            className="absolute bottom-12 left-8 sm:bottom-16 sm:left-12 lg:bottom-20 lg:left-16 w-10 h-10 sm:w-12 sm:h-12"
            animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.6 } }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m.684 2.684c.175.404.175.808.175 1.316 0 .508 0 .912-.175 1.316m-.684-2.684c-.175-.404-.175-.808-.175-1.316 0-.508 0-.912.175-1.316m-1.368 2.684c-.35-.35-.35-.913-.35-1.334 0-.42 0-.984.35-1.334m1.368 2.684c.35.35.35.913.35 1.334 0 .42 0 .984-.35 1.334" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l6-6m0 0l-6-6m6 6H9" />
              </svg>
            </div>
          </motion.div>

          {/* Floating Icon 3 - Link */}
          <motion.div
            className="absolute top-1/3 right-4 sm:right-8 lg:top-1/3 lg:right-12 w-10 h-10 sm:w-12 sm:h-12"
            animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1.2 } }}
          >
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
          </motion.div>

          {/* Stats Bubble 1 */}
          <motion.div
            className="absolute top-12 sm:top-16 lg:top-20 right-0 sm:right-4 lg:right-0 bg-white shadow-xl rounded-3xl px-5 sm:px-6 py-3 sm:py-4 flex items-center gap-3 z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">25M+</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium whitespace-nowrap">Jobs Available</p>
            </div>
          </motion.div>

          {/* Stats Bubble 2 */}
          <motion.div
            className="absolute bottom-16 sm:bottom-20 lg:bottom-24 left-4 sm:left-8 lg:left-12 bg-white shadow-xl rounded-3xl px-5 sm:px-6 py-3 sm:py-4 flex items-center gap-3 z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="Candidate"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">480+</h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">Happpy Candidates</p>
            </div>
          </motion.div>

          {/* Orange Wave */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-400 to-transparent opacity-20 rounded-t-full"></div>
        </div>

        {/* RIGHT: Text */}
        <div className="flex-1 space-y-6 lg:space-y-8 max-w-2xl w-full mt-12 lg:mt-0 lg:pl-8 xl:pl-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About Us
          </h1>
          
          <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              At Indeed we are dedicated to empowering businesses and individuals with innovative solutions tailored to their specific needs. Established in 2000, we have rapidly grown into a trusted provider of Job. Our team of passionate professionals works tirelessly to deliver high-quality, customer-focused services that exceed expectations.
            </p>
            <p>
              We specialize in <strong>[mention key services/products]</strong>, ensuring our clients stay ahead in an ever-changing market. With a focus on continuous improvement and cutting-edge technology, we provide scalable solutions that drive success.
            </p>
            <p>
              Our mission is to create value by combining expertise, innovation, and integrity, fostering long-term relationships with our clients, partners, and employees.
            </p>
          </div>
        </div>
      </section>

      {/* === STATS SECTION === */}
      <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 overflow-hidden">
        
        {/* Dotted Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23999' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Title + Icons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between mb-12 sm:mb-16 max-w-6xl mx-auto">
          <motion.div 
            className="flex items-center space-x-3 mb-4 sm:mb-0 text-center sm:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              animate={floatAnimation}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                The numbers don&apos;t lie
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                About 800+ new jobs everyday
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="w-4 h-4 sm:w-6 sm:h-6 bg-orange-400 rounded-full shadow-lg"
              animate={floatAnimation}
              style={{ animationDelay: "0.3s" }}
            />
            <motion.div 
              className="w-8 h-8 sm:w-10 sm:h-10"
              animate={floatAnimation}
              style={{ animationDelay: "0.6s" }}
            >
              <svg className="w-full h-full text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11 15.5L17 9.5l-1-1-5 5-3-3-1 1 4 4z" />
                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { count: jobsAvailable, label: "Jobs Available", suffix: "M+" },
            { count: newJobs, label: "New Jobs This Week!", suffix: "K+" },
            { count: companies, label: "Companies Hiring", suffix: "K+" },
            { count: candidates, label: "Candidates", suffix: "M+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 w-full sm:flex-1 text-center border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {formatNumber(stat.count)}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <HowItWorks />
      <JobFitSection/>
      <TestimonialsSection />
      <JobOpportunitiesCTA />
    </div>
  );
}
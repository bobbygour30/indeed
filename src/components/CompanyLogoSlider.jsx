'use client';

import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets"; // Your logo images

// Replace these with your actual logo paths
const logos = [
  "https://indeedplateform.com/images/partners/page-logo-5.png",
  "https://indeedplateform.com/images/partners/page-logo-6.png",
  "https://indeedplateform.com/images/partners/page-logo-7.png",
  "https://indeedplateform.com/images/partners/page-logo-1.png",
  "https://indeedplateform.com/images/partners/page-logo-3.png",
  "https://indeedplateform.com/images/partners/page-logo-2.png",
  "https://indeedplateform.com/images/partners/page-logo-4.png",
];

export default function CompanyLogoSlider() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-gray-800 font-semibold text-lg md:text-xl mb-10">
        Used By 10,000+ Companies Around The World
      </h2>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 md:gap-16 items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={logo}
                alt={`Company logo ${index % logos.length + 1}`}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
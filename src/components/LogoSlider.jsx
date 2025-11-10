import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";

const logos = [
  assets.logo0,
  assets.logo1,
  assets.logo2,
  assets.logo3,
  assets.logo4,
  assets.logo5,
];

const LogoSlider = () => {
  return (
    <section className="bg-[#103B42] py-10 md:py-14 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-white font-semibold text-lg md:text-xl mb-10">
        Over 100,000 Recruiters Use Indeed To Modernize Their Hiring
      </h2>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 25, // adjust speed here (lower = faster)
          }}
        >
          {/* duplicate logo set twice for seamless scrolling */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="w-32 md:w-40 opacity-60 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSlider;

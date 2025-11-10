'use client';

import React from "react";

export default function JobOpportunitiesCTA() {
  return (
    <section className="relative bg-gradient-to-br from-green-500 to-emerald-600 py-16 md:py-24 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Left Wave */}
        <div className="absolute left-0 top-0 w-64 h-64 md:w-96 md:h-96 bg-green-400 opacity-20 rounded-full blur-3xl -translate-x-32 translate-y-16"></div>
        {/* Right Circle */}
        <div className="absolute right-0 bottom-0 w-32 h-32 md:w-48 md:h-48 bg-orange-400 opacity-30 rounded-full blur-3xl translate-x-16 translate-y-16"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
        
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Job Opportunities Are Always Open
        </h1>

        {/* Subtext */}
        <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto">
          Aenean porta, eros lacus congue lorem, sit amet mollis magna velit ac erat.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          
          {/* Green Check Icon */}
          <div className="w-10 h-10 md:w-12 md:h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Search Job Button */}
          <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-sm md:text-base">
            Search Job
          </button>

          {/* Find Candidates Button */}
          <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-sm md:text-base">
            Find Candidates
          </button>
        </div>
      </div>
    </section>
  );
}
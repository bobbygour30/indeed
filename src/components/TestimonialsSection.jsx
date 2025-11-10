'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Indeed made my job search incredibly easy and smooth. I found my dream role with a great company and salary package. The process was transparent, quick, and professional.",
      name: "Heema",
      role: "QA Tester at Accenture",
      rating: 5,
    },
    {
      text: "The experience with Indeed was fantastic. I got placed in a top company within two weeks, and the entire application journey felt effortless and well-organized.",
      name: "Prakash Roy",
      role: "Head of Marketing at IBM",
      rating: 4,
    },
    {
      text: "Indeed helped me land a perfect role as a Data Architect. The interface, guidance, and opportunities provided are top-notch and truly reliable.",
      name: "Aman Singh",
      role: "Data Architect at TCS",
      rating: 5,
    },
    {
      text: "Using Indeed was a great experience. I found exactly what I was looking for, and the process from application to joining was incredibly seamless and smooth.",
      name: "Rohit Sharma",
      role: "Software Engineer at Infosys",
      rating: 4,
    },
    {
      text: "Indeed connected me with the right companies effortlessly. The whole process was simple, and I found my ideal position much faster than expected.",
      name: "Sneha Patel",
      role: "HR Specialist at Deloitte",
      rating: 5,
    },
    {
      text: "My experience with Indeed was excellent. I discovered multiple opportunities, and their platform helped me make the right career move easily.",
      name: "Arjun Mehta",
      role: "Project Manager at Wipro",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive: cards per view
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  // Update cards per view on resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll with dynamic step
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + cardsPerView) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cardsPerView, testimonials.length]);

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < cardsPerView; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  // Navigation dots (one per "page")
  const totalPages = Math.ceil(testimonials.length / cardsPerView);
  const getPageIndex = () => Math.floor(currentIndex / cardsPerView);

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          What Our Clients Are Saying
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Real stories from real professionals finding success
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className={`grid gap-4 sm:gap-6 grid-cols-1 
              ${cardsPerView >= 2 ? 'sm:grid-cols-2' : ''} 
              ${cardsPerView >= 3 ? 'lg:grid-cols-3' : ''}`}
          >
            {getVisibleTestimonials().map((t, i) => (
              <motion.div
                key={`${currentIndex}-${i}`}
                layout
                className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl shadow-md p-6 sm:p-8 flex flex-col justify-between min-h-[280px] sm:min-h-[320px]"
              >
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5 line-clamp-5 sm:line-clamp-6">
                  “{t.text}”
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base sm:text-lg">{t.name}</h4>
                  <p className="text-teal-600 font-medium text-xs sm:text-sm mb-1">{t.role}</p>
                  <div className="flex text-yellow-400 text-sm sm:text-base">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar
                        key={index}
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          index < t.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerView)}
              className={`transition-all duration-300 rounded-full ${
                getPageIndex() === index
                  ? 'bg-teal-600 w-8 sm:w-10 h-2 sm:h-3'
                  : 'bg-gray-300 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
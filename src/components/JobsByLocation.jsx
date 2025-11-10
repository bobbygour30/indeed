'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const locations = [
  { name: 'Canada', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
  { name: 'United States', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80' },
  { name: 'United Kingdom', image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80' },
  { name: 'India', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80' },
  { name: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80' },
  { name: 'Germany', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Sf-3-_NM2IAoaPwIy-n6WtOxB51_KZdTpw&s' },
  { name: 'Australia', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/93/a7/be/sydney-opera-house.jpg?w=500&h=500&s=1' },
  { name: 'Singapore', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80' },
];

export default function JobsByLocation() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-12 bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Jobs by Location</h2>
          <p className="text-gray-600 mt-2">Find your favourite jobs and get the benefits of yourself</p>
        </div>

        <Link
          to="/jobs"
          className="flex items-center gap-2 text-teal-700 font-medium mt-4 md:mt-0 hover:text-teal-900 transition-colors"
        >
          All Locations <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {locations.map((loc, index) => (
          <Link to="/jobs" key={index}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/50 transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-xl font-semibold">{loc.name}</h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

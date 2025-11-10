'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MapPin } from 'lucide-react';
import assets from '../assets/assets';

export default function IndeedFooter() {
  return (
    <footer className="bg-[#fafaf8] text-gray-700 pt-12 pb-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
        
        {/* Column 1 - Logo + Contact */}
        <div className="flex flex-col">
          <img
            src={assets.logo}
            alt="Indeed Logo"
            className="w-24 sm:w-28 mb-5"
          />
          <p className="text-xs sm:text-sm text-gray-500">Need help? 24/7</p>
          <p className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
            support@indeedplateform.com
          </p>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            Job Searching Just Got Easy. Use Jobtex to run a hiring site and earn money in the process!
          </p>
          <p className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm">
            <MapPin className="w-4 h-4 mt-0.5 text-teal-600 flex-shrink-0" />
            <span>
              The Skyview 10, Hitech City Main Rd, Silpa Gram Craft Village,<br className="hidden sm:block" />
              Madhapur, Rai Durg, Hyderabad, Telangana 500081
            </span>
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">Quick Links</h3>
          <ul className="space-y-1.5 text-gray-600 text-sm">
            {['Job Packages', 'Post New Job', 'Jobs Listing', 'Candidates', 'Employers', 'Terms of Use'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-teal-700 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - For Candidates */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg">For Candidates</h3>
          <ul className="space-y-1.5 text-gray-600 text-sm">
            {['User Dashboard', 'CV Packages', 'About us', 'Contact us'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-teal-700 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Social + App Download */}
        <div className="flex flex-col items-center sm:items-start lg:items-start">
          <h3 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg text-center sm:text-left w-full">
            Follow Us:
          </h3>
          <div className="flex gap-2 sm:gap-3 mb-5 flex-wrap justify-center sm:justify-start">
            {[
              { icon: <FaFacebookF size={16} />, link: '#' },
              { icon: <FaLinkedinIn size={16} />, link: '#' },
              { icon: <FaTwitter size={16} />, link: '#' },
              { icon: <FaPinterestP size={16} />, link: '#' },
              { icon: <FaInstagram size={16} />, link: '#' },
              { icon: <FaYoutube size={16} />, link: '#' },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="bg-white border border-gray-200 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-teal-600 transition-all duration-300"
                aria-label={`Social ${i}`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <h3 className="font-semibold text-gray-900 mb-3 text-base sm:text-lg text-center sm:text-left w-full">
            Download App
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start">
            <a href="#" className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-32 sm:w-36 h-auto"
              />
            </a>
            <a href="#" className="block">
              <img
                src={assets.appStore}
                alt="App Store"
                className="w-32 sm:w-36 h-auto"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Bottom Links */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center text-gray-500 gap-3">
        <p>©2025 Indeed. All Rights Reserved.</p>
        <div className="flex flex-wrap gap-3 sm:gap-5 justify-center">
          <a href="#" className="hover:text-teal-600 transition-colors">Terms Of Services</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal-600 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
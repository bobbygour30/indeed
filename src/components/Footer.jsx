'use client';
import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { MapPin } from 'lucide-react';
import assets from '../assets/assets';

export default function IndeedFooter() {
  return (
    <footer className="bg-[#fafaf8] text-gray-700 px-6 sm:px-10 pt-16 pb-5 w-full">
      {/* ---------- TOP SECTION ---------- */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-wrap justify-between gap-12 lg:gap-20 xl:gap-36">
        {/* ---------- COLUMN 1 ---------- */}
       <div className="flex flex-col max-w-[350px] flex-1 min-w-[250px]">
  <img src={assets.logo} alt="Indeed Logo" className="w-50 mb-7" />

  <p className="text-sm text-gray-500 mb-1 sm:ml-6">Need help? 24/7</p>
  <p className="text-base font-semibold text-gray-900 mb-5 sm:ml-6">
    support@indeedplanet.com
  </p>

  <p className="text-[15px] leading-relaxed text-[#555] mb-5 max-w-[310px] sm:w-56">
    Job Searching Just Got Easy. Use Jobtex to run a hiring site and earn
    money in the process!
  </p>

  <div className="flex items-start gap-2 mt-1 max-w-[320px] sm:w-56">
    {/* <MapPin className="w-4 h-4 mt-[3px] text-teal-600 flex-shrink-0" /> */}
    <span className="text-[14px] text-[#333] leading-[1.65]">
      ⚲ The Skyview 10, Hitech City Main Rd, Silpa Gram Craft Village,
      Madhapur, Rai Durg, Hyderabad, Telangana 500081
    </span>
  </div>
</div>


        {/* ---------- COLUMN 2 ---------- */}
        <div className="flex flex-col min-w-[150px]">
          <h3 className="font-normal text-gray-900 mb-4 text-base">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-600 text-[15px]">
            {[
              'Job Packages',
              'Post New Job',
              'Jobs Listing',
              'Candidates',
              'Employers',
              'Terms of Use',
            ].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-teal-700 transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- COLUMN 3 ---------- */}
        <div className="flex flex-col min-w-[150px]">
          <h3 className="font-normal text-gray-900 mb-4 text-base">
            For Candidates
          </h3>
          <ul className="space-y-3 text-gray-600 text-[15px]">
            {['User Dashboard', 'CV Packages', 'About us', 'Contact us'].map(
              (link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-teal-700 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* ---------- COLUMN 4 ---------- */}
        <div className="flex flex-col items-start md:items-center flex-1 min-w-[250px]">
          <div className="flex items-center justify-center">
            <h3 className="font-normal text-gray-900 mb-7 text-sm">
              Follow Us:
            </h3>
            <div className="flex flex-wrap gap-4 mb-7">
              {[FaFacebookF, FaLinkedinIn, FaTwitter, FaPinterestP, FaInstagram, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="bg-white border border-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-gray-700 hover:text-white hover:bg-teal-600 transition-all"
                  >
                    <Icon size={17} />
                  </a>
                )
              )}
            </div>
          </div>

          <h3 className="font-normal text-gray-900 mb-4 text-base">
            Download App
          </h3>
          <div className="flex flex-col gap-2 items-start md:items-center">
            <a href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                className="w-40"
                alt="Google Play"
              />
            </a>
            <a href="#">
              <img src={assets.appStore} className="w-40" alt="App Store" />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- BOTTOM SECTION ---------- */}
      <div className="border-t border-gray-200 mt-16 pt-6 flex flex-col sm:flex-row justify-between items-center text-black text-[14px] gap-4">
        <p>©2025 Indeed. All Rights Reserved.</p>
        <div className="flex flex-wrap gap-7 justify-center">
          <a href="#" className="hover:text-teal-600 transition-colors">
            Terms Of Services
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-teal-600 transition-colors">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

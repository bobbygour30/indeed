"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpenDesktop, setIsDropdownOpenDesktop] = useState(false);
  const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close dropdown on outside click (desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpenDesktop(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hover behavior (desktop)
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpenDesktop(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(
      () => setIsDropdownOpenDesktop(false),
      200
    );
  };

  // Mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) setIsDropdownOpenMobile(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpenMobile(false);
  };

  const toggleDropdownMobile = () =>
    setIsDropdownOpenMobile((prev) => !prev);

  const closeAndNavigate = (to) => {
    closeMobileMenu();
    setTimeout(() => navigate(to), 150);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="relative bg-white shadow-sm z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link to="/">
          <img className="w-20 sm:w-24" src={assets.logo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-black font-medium text-[17px]">
          <NavItem
            label="Home"
            to="/"
            onClick={closeMobileMenu}
            active={isActive("/")}
          />

          <li
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1 cursor-pointer group">
              Recruitment Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className={`transition-transform duration-200 ${
                  isDropdownOpenDesktop ? "rotate-180" : ""
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592c.86 0 1.319 1.013.753 1.658l-4.796 5.482a1 1 0 0 1-1.506 0z" />
              </svg>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#008080] group-hover:w-full transition-all duration-300"></span>
            </div>

            {/* Desktop Dropdown */}
            <ul
              className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                isDropdownOpenDesktop
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <DropdownItem
                label="Interview Id Service"
                to="/password-protected"
                onClick={closeMobileMenu}
              />
              <DropdownItem
                label="Recruiter Connection"
                to="/recruiter-connection"
                onClick={closeMobileMenu}
              />
              <DropdownItem
                label="Top Management"
                to="/top-management"
                onClick={closeMobileMenu}
              />
            </ul>
          </li>

          <NavItem
            label="Registration"
            to="/payment-details"
            onClick={closeMobileMenu}
            active={isActive("/payment-details")}
          />
          <NavItem
            label="About Us"
            to="/about-us"
            onClick={closeMobileMenu}
            active={isActive("/about-us")}
          />
          <NavItem
            label="Job Code"
            to="/job-code"
            onClick={closeMobileMenu}
            active={isActive("/job-code")}
          />
          <NavItem
            label="Contact Us"
            to="/contact"
            onClick={closeMobileMenu}
            active={isActive("/contact")}
          />
        </ul>

        {/* Desktop Registration Button */}
        <Link
          to="/payment-details"
          className="hidden lg:block border border-[#008080] px-5 py-2 rounded-md text-[17px] font-semibold hover:bg-[#008080] hover:text-white transition duration-300"
        >
          Registration
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <img src={assets.logo} alt="Indeed Logo" className="w-28" />
          <button onClick={closeMobileMenu} aria-label="Close menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Menu Content */}
        <div className="overflow-y-auto h-full pb-6">
          <ul className="flex flex-col text-black font-medium text-[17px]">
            <MobileNavItem
              label="Home"
              to="/"
              onNavigate={closeAndNavigate}
              active={isActive("/")}
            />

            {/* Recruitment Dropdown */}
            <li className="border-b border-gray-100">
              <button
                onClick={toggleDropdownMobile}
                className="w-full px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span
                  className={isDropdownOpenMobile ? "text-[#008080]" : ""}
                >
                  Recruitment Services
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className={`transition-transform duration-200 ${
                    isDropdownOpenMobile ? "rotate-180 text-[#008080]" : ""
                  }`}
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592c.86 0 1.319 1.013.753 1.658l-4.796 5.482a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>

              <ul
                className={`bg-gray-50 transition-all duration-300 overflow-hidden ${
                  isDropdownOpenMobile ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <MobileDropdownItem
                  label="Interview Id Service"
                  to="/password-protected"
                  onNavigate={closeAndNavigate}
                />
                <MobileDropdownItem
                  label="Recruiter Connection"
                  to="/recruiter-connection"
                  onNavigate={closeAndNavigate}
                />
                <MobileDropdownItem
                  label="Top Management"
                  to="/top-management"
                  onNavigate={closeAndNavigate}
                />
              </ul>
            </li>

            <MobileNavItem
              label="Registration"
              to="/payment-details"
              onNavigate={closeAndNavigate}
              active={isActive("/payment-details")}
            />
            <MobileNavItem
              label="About Us"
              to="/about-us"
              onNavigate={closeAndNavigate}
              active={isActive("/about-us")}
            />
            <MobileNavItem
              label="Job Code"
              to="/job-code"
              onNavigate={closeAndNavigate}
              active={isActive("/job-code")}
            />
            <MobileNavItem
              label="Contact Us"
              to="/contact"
              onNavigate={closeAndNavigate}
              active={isActive("/contact")}
            />

            {/* Registration Button */}
            <li className="px-6 py-3">
              <button
                onClick={() => closeAndNavigate("/payment-details")}
                className="block w-full text-center border border-[#008080] px-5 py-2 rounded-md text-[17px] font-semibold hover:bg-[#008080] hover:text-white transition duration-300"
              >
                Registration
              </button>
            </li>

            {/* Contact + Social inside scrollable content */}
            <li className="px-6 pt-4 pb-6 text-center border-t">
              <p className="text-sm text-gray-500 mb-1">Need help? 24/7</p>
              <p className="text-sm font-medium text-black mb-4">
                support@indeedplateform.com
              </p>
              <div className="flex justify-center space-x-4 text-gray-600 text-lg">
                <FaFacebookF className="hover:text-[#008080] cursor-pointer" />
                <FaLinkedinIn className="hover:text-[#008080] cursor-pointer" />
                <FaTwitter className="hover:text-[#008080] cursor-pointer" />
                <FaPinterestP className="hover:text-[#008080] cursor-pointer" />
                <FaInstagram className="hover:text-[#008080] cursor-pointer" />
                <FaYoutube className="hover:text-[#008080] cursor-pointer" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Helper Components
const NavItem = ({ label, to, onClick, active }) => (
  <li className="relative group cursor-pointer" onClick={onClick}>
    <Link to={to} className={`block ${active ? "text-[#008080]" : ""}`}>
      {label}
    </Link>
    <span
      className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#008080] transition-all duration-300 ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  </li>
);

const DropdownItem = ({ label, to, onClick }) => (
  <li
    className="px-4 py-3 text-[15px] text-gray-800 hover:bg-[#008080] hover:text-white transition-colors"
    onClick={onClick}
  >
    <Link to={to} className="block w-full h-full">
      {label}
    </Link>
  </li>
);

const MobileNavItem = ({ label, to, onNavigate, active }) => {
  const handleClick = () => onNavigate(to);
  return (
    <li
      className={`px-6 py-3 border-b border-gray-100 hover:bg-gray-50 transition ${
        active ? "text-[#008080] font-semibold" : ""
      }`}
    >
      <button onClick={handleClick} className="block w-full text-left">
        {label}
      </button>
    </li>
  );
};

const MobileDropdownItem = ({ label, to, onNavigate }) => {
  const handleClick = () => onNavigate(to);
  return (
    <li
      onClick={handleClick}
      className="px-8 py-2 text-[15px] text-gray-700 hover:bg-[#008080] hover:text-white transition cursor-pointer"
    >
      {label}
    </li>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import assets from "../assets/assets";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hover handlers with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  // Mobile toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDropdownMobile = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Helper to check active link
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="relative bg-white shadow-sm z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img className="w-20 sm:w-24" src={assets.logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-black font-medium text-[17px]">
          <NavItem label="Home" to="/" onClick={closeMobileMenu} active={isActive("/")} />
          
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
                className={`bi bi-caret-down-fill transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592c.86 0 1.319 1.013.753 1.658l-4.796 5.482a1 1 0 0 1-1.506 0z" />
              </svg>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#008080] group-hover:w-full transition-all duration-300"></span>
            </div>

            {/* Dropdown Menu */}
            <ul
              className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                isDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
              style={{ minWidth: "200px" }}
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

          <NavItem label="Registration" to="/payment-details" onClick={closeMobileMenu} active={isActive("/payment-details")} />
          <NavItem label="About Us" to="/about-us" onClick={closeMobileMenu} active={isActive("/about-us")} />
          
          {/* FIXED: Job Code active state */}
          <NavItem 
            label="Job Code" 
            to="/job-code" 
            onClick={closeMobileMenu} 
            active={isActive("/job-code")} 
          />

          <NavItem label="Contact Us" to="/contact" onClick={closeMobileMenu} active={isActive("/contact")} />
        </ul>

        {/* Registration Button - Desktop */}
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col text-black font-medium text-[17px] py-2">
          <MobileNavItem label="Home" to="/" onClick={closeMobileMenu} active={isActive("/")} />
          
          {/* Recruitment Services with Mobile Dropdown */}
          <li className="border-b border-gray-100">
            <button
              onClick={toggleDropdownMobile}
              className="w-full px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition"
            >
              <span>Recruitment Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className={`bi bi-caret-down-fill transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592c.86 0 1.319 1.013.753 1.658l-4.796 5.482a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
            {isDropdownOpen && (
              <ul className="bg-gray-50">
                <MobileDropdownItem
                  label="Interview Id Service"
                  to="/password-protected"
                  onClick={closeMobileMenu}
                />
                <MobileDropdownItem
                  label="Recruiter Connection"
                  to="/recruiter-connection"
                  onClick={closeMobileMenu}
                />
                <MobileDropdownItem
                  label="Top Management"
                  to="/top-management"
                  onClick={closeMobileMenu}
                />
              </ul>
            )}
          </li>

          <MobileNavItem label="Registration" to="/payment-details" onClick={closeMobileMenu} active={isActive("/payment-details")} />
          <MobileNavItem label="About Us" to="/about-us" onClick={closeMobileMenu} active={isActive("/about-us")} />
          
          {/* FIXED: Job Code active state in mobile */}
          <MobileNavItem 
            label="Job Code" 
            to="/job-code" 
            onClick={closeMobileMenu} 
            active={isActive("/job-code")} 
          />

          <MobileNavItem label="Contact Us" to="/contact" onClick={closeMobileMenu} active={isActive("/contact")} />
          
          {/* Registration Button - Mobile */}
          <li className="px-6 py-3">
            <Link
              to="/payment-details"
              onClick={closeMobileMenu}
              className="block w-full text-center border border-[#008080] px-5 py-2 rounded-md text-[17px] font-semibold hover:bg-[#008080] hover:text-white transition duration-300"
            >
              Registration
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Reusable Nav Item for Desktop
const NavItem = ({ label, to, onClick, active }) => (
  <li className="relative group cursor-pointer" onClick={onClick}>
    <Link
      to={to}
      className={`block ${active ? "text-[#008080]" : ""}`}
    >
      {label}
    </Link>
    <span
      className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#008080] transition-all duration-300 ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    ></span>
  </li>
);

// Dropdown Item
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

// Reusable Nav Item for Mobile (Improved for navigation)
const MobileNavItem = ({ label, to, onClick, active }) => (
  <li
    className={`px-6 py-3 border-b border-gray-100 hover:bg-gray-50 transition ${
      active ? "text-[#008080] font-semibold" : ""
    }`}
  >
    <Link
      to={to}
      onClick={onClick}
      className="block w-full"
    >
      {label}
    </Link>
  </li>
);

// Mobile Dropdown Item
const MobileDropdownItem = ({ label, to, onClick }) => (
  <li
    onClick={onClick}
    className="px-8 py-2 text-[15px] text-gray-700 hover:bg-[#008080] hover:text-white transition cursor-pointer"
  >
    <Link to={to} className="block w-full h-full">
      {label}
    </Link>
  </li>
);

export default Navbar;
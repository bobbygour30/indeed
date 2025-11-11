'use client';

import React, { useState } from 'react';
import assets from '../assets/assets'; // Make sure this path is correct

export default function JobCode() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const UPI_ID = 'indeed583640@oksbi';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && contact) {
      setShowQR(true);
    }
  };

  // QR SCREEN — Full page feel
  if (showQR) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-10 max-w-sm w-full text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Scan to Pay</h2>

          <img
            src={assets.qr}
            alt="UPI QR Code"
            className="mx-auto mb-6 w-64 h-64 rounded-lg"
          />

          <p className="text-lg font-medium text-gray-700">UPI ID:</p>
          <p className="text-xl font-mono break-all mt-1 mb-6">{UPI_ID}</p>

          <button
            onClick={() => setShowQR(false)}
            className="text-green-600 hover:text-green-700 font-medium text-lg"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  // FORM SCREEN
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <span>Home</span>
              <span>•</span>
              <span className="text-gray-900 font-medium">Job Code</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 leading-tight">
              PLEASE ENTER YOUR<br />DETAILS HERE!
            </h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                  Enter Your Name<sup className="text-red-500">*</sup>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                  Enter Your Email ID<sup className="text-red-500">*</sup>
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Id"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                  required
                />
              </div>

              {/* Contact Number Field */}
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-gray-900 mb-1">
                  Enter Your Contact Number<sup className="text-red-500">*</sup>
                </label>
                <input
                  id="contact"
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Enter Contact Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                  required
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Remember me
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-lg"
              >
                Make Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
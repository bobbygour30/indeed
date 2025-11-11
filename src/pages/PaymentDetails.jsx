'use client';

import React, { useState } from 'react';
import assets from '../assets/assets';
import { Eye, EyeOff } from 'lucide-react';

export default function PaymentDetailsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [currentStep, setCurrentStep] = useState('form'); // 'form', 'password', 'qr'
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const UPI_ID = 'indeed583640@oksbi';
  const CORRECT_PASSWORD = '2010';

  // Handle form submission → go to password screen
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && email && contact) {
      setCurrentStep('password');
      setPassword(''); // Reset password field
    }
  };

  // Handle password submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setCurrentStep('qr');
    } else {
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  // Reset to form
  const handleBack = () => {
    setCurrentStep('form');
    setPassword('');
  };

  // === STEP 1: FORM ===
  if (currentStep === 'form') {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        {/* Navigation */}
        <nav className="bg-white shadow-sm mb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2 text-gray-600 text-sm">
                <span>Home</span>
                <span>•</span>
                <span className="text-gray-900 font-medium">Registration</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 leading-tight">
              PLEASE ENTER YOUR<br />DETAILS HERE!
            </h1>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <input
                type="email"
                placeholder="Enter Your Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <input
                type="tel"
                placeholder="Enter Contact Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg text-lg transition"
              >
                Make Payment
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // === STEP 2: PASSWORD SCREEN ===
  if (currentStep === 'password') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">
              This content is password protected. To view it please enter your password below:
            </h1>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password<sup className="text-red-500">*</sup>
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
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

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition"
                >
                  Enter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // === STEP 3: QR CODE SCREEN ===
  if (currentStep === 'qr') {
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
            onClick={handleBack}
            className="text-green-600 hover:text-green-700 font-medium text-lg"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return null;
}
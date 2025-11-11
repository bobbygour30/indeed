'use client';

import React, { useState } from 'react';
import assets from '../assets/assets';

export default function PaymentDetailsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [showQR, setShowQR] = useState(false);

  const UPI_ID = 'indeed583640@oksbi';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && contact) {
      setShowQR(true);
    }
  };

  // If QR is shown → full-screen page-like view
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
            ← Back
          </button>
        </div>
      </div>
    );
  }

  // Otherwise → show the form
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

          <form onSubmit={handleSubmit} className="space-y-6">
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
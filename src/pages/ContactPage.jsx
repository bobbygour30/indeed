import React from "react";
import {
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">

      {/* Full-Width Background Image */}
      <div className="w-full">
        <div
          className="w-full h-[55vh] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://indeedplateform.com/images/review/singlejob.jpg')",
          }}
        />
      </div>

      {/* Overlapping Content Section - Centered */}
      <div className="w-full max-w-7xl mx-auto px-4 -mt-20 md:-mt-32 relative z-10">
        <div className="flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden">

          {/* Left Info Section */}
          <div className="w-full md:w-1/3 bg-teal-600 px-6 py-10 text-white">
            <div className="mb-8 flex items-start">
              <Mail className="w-7 h-7 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-lg">Email</h2>
                <p className="break-all text-sm">support@indeedplateform.com</p>
              </div>
            </div>

            <div className="mb-8 flex items-start">
              <MapPin className="w-7 h-7 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-semibold text-lg">Address</h2>
                <p className="text-sm leading-relaxed">
                  The Skyview 10, Hitech City<br />
                  Main Rd, Silpa Gram Craft Village, Madhapur,<br />
                  Rai Durg, Hyderabad, Telangana 500081
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              {[Facebook, Linkedin, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-teal-500 hover:bg-teal-400 transition-colors rounded-full w-10 h-10 flex items-center justify-center"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full md:w-2/3 bg-white p-6 md:p-10">
            <form className="max-w-xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex-1 border border-gray-300 rounded-md py-3 px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="flex-1 border border-gray-300 rounded-md py-3 px-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md py-3 px-4 mb-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />

              <textarea
                rows="5"
                placeholder="Your questions..."
                className="w-full border border-gray-300 rounded-md py-3 px-4 mb-6 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
              ></textarea>

              <button className="w-full bg-teal-600 text-white font-semibold py-3 rounded-md hover:bg-teal-700 transition duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Recruiting Section - Centered */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-12 text-left md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Recruiting?</h2>
        <p className="text-gray-600 mb-6 max-w-3xl text-base">
          Advertise your jobs to millions of monthly users and search 15.3 million CVs in our database.
        </p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white rounded-md font-semibold px-6 py-3 transition duration-200">
          Start Recruiting Now
        </button>
      </div>

    </div>
  );
};

export default ContactPage;
import React from "react";
import { MapPin, CalendarDays, DollarSign, Star } from "lucide-react";

const jobCategories = [
  "All Jobs",
  "IT & Networking",
  "Data Science",
  "Sales & Marketing",
  "Other",
];

const jobs = [
  {
    id: 1,
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    company: "Rockstar Games New York",
    title: "Project Manager",
    location: "398 Manhattan Ave",
    date: "2 days ago",
    tags: ["Full-time", "Remote"],
    salary: "₹83,000 – ₹110,000 /year",
    daysLeft: "22 days left to apply",
    rating: 4,
  },
  {
    id: 2,
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    company: "Rockstar Games New York",
    title: "Senior UI/UX Designer",
    location: "398 Manhattan Ave",
    date: "2 days ago",
    tags: ["Temporary", "Remote"],
    salary: "₹83,000 – ₹110,000 /year",
    daysLeft: "22 days left to apply",
    rating: 4,
  },
  {
    id: 3,
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",
    company: "Rockstar Games New York",
    title: "Full Stack Development",
    location: "398 Manhattan Ave",
    date: "2 days ago",
    tags: ["Temporary", "Remote"],
    salary: "₹83,000 – ₹110,000 /year",
    daysLeft: "22 days left to apply",
    rating: 4,
  },
  {
    id: 4,
    logo: "https://cdn-icons-png.flaticon.com/512/889/889140.png",
    company: "Rockstar Games New York",
    title: "Senior DevOps Engineer",
    location: "398 Manhattan Ave",
    date: "2 days ago",
    tags: ["Contract", "Remote"],
    salary: "₹83,000 – ₹110,000 /year",
    daysLeft: "22 days left to apply",
    rating: 4,
  },
  {
    id: 5,
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    company: "Rockstar Games New York",
    title: "Project Manager",
    location: "398 Manhattan Ave",
    date: "1 day ago",
    tags: ["Full-time", "Hybrid"],
    salary: "₹90,000 – ₹120,000 /year",
    daysLeft: "18 days left to apply",
    rating: 5,
  },
  {
    id: 6,
    logo: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    company: "Rockstar Games New York",
    title: "Social Media Marketing",
    location: "398 Manhattan Ave",
    date: "3 days ago",
    tags: ["Part-time", "Remote"],
    salary: "₹60,000 – ₹95,000 /year",
    daysLeft: "20 days left to apply",
    rating: 4,
  },
];

const FeaturedJobs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Featured Jobs
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Find the right career opportunity for you
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-10">
        {jobCategories.map((cat, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
              index === 0
                ? "bg-green-700 text-white shadow-md"
                : "bg-white hover:bg-gray-100 border-gray-200 text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Row */}
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <img
                    src={job.logo}
                    alt={job.title}
                    className="w-14 h-14 rounded-md object-contain"
                  />
                  <div>
                    <h3 className="text-green-700 font-semibold text-sm">
                      {job.company}
                    </h3>
                    <h2 className="font-bold text-xl flex items-center gap-2">
                      {job.title}
                      <span className="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5 rounded-full">
                        ⚡
                      </span>
                    </h2>
                    <div className="flex items-center gap-4 text-gray-500 text-sm mt-1 flex-wrap">
                      <span className="flex items-center gap-1">
                        <MapPin size={15} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarDays size={15} /> {job.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Favorite Button */}
                <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">
                  <span className="text-gray-400 text-lg">♡</span>
                </button>
              </div>

              {/* Tags */}
              <div className="flex gap-3 mt-5 flex-wrap">
                {job.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <hr className="my-5" />

              {/* Salary and Timeline */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2 font-medium text-gray-700">
                  <DollarSign size={16} /> {job.salary}
                </div>
                <span className="text-gray-500 text-sm">{job.daysLeft}</span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < job.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill={i < job.rating ? "#facc15" : "none"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition-all duration-300">
          See More Jobs
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;

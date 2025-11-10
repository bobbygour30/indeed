import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { title: "Human Resource" },
  { title: "Project Manager", active: true },
  { title: "Delivery Driver" },
  { title: "Accounting" },
  { title: "Customer Service" },
  { title: "Data Science" },
  { title: "Engineering" },
  { title: "IT & Networking" },
  { title: "Sales & Marketing" },
  { title: "Writing" },
];

const CategorySection = () => {
  return (
    <section className="bg-white py-14 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Browse by category
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Recruitment Made Easy in 100 seconds
          </p>
        </div>

        <Link
          to="/jobs"
          className="flex items-center gap-2 text-green-700 hover:text-green-800 font-medium mt-4 md:mt-0 transition"
        >
          All Categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        {categories.map((cat, index) => (
          <Link
            to="/jobs"
            key={index}
            className={`rounded-md p-6 md:p-8 cursor-pointer transition-all duration-300 border 
              ${
                cat.active
                  ? "bg-[#0C3A3F] text-white shadow-lg"
                  : "bg-[#F8F8F8] hover:bg-[#EAEAEA] text-gray-900"
              }`}
          >
            <h3
              className={`font-semibold text-lg md:text-xl mb-3 ${
                cat.active ? "text-white" : "text-gray-900"
              }`}
            >
              {cat.title}
            </h3>

            <div
              className={`flex items-center gap-2 text-sm font-medium ${
                cat.active ? "text-white" : "text-green-700 hover:text-green-800"
              }`}
            >
              Explore Jobs <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

'use client';

import React from "react";

export default function HowItWorks() {
  const features = [
    {
      title: "Free Resume Assessments",
      icon: (
        <svg className="w-10 h-10 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
          <path d="M9 13h6v2H9zm0 3h6v2H9z"/>
        </svg>
      ),
      color: "bg-blue-100",
      text: "Indeed Provides A Free Resume Assessment Service Designed To Help Job Seekers Improve Their Resumes. Once You Upload Your Resume, Indeed Offers Personalized Feedback, Identifying Key Strengths And Suggested Improvements In Areas Like Formatting, Relevant Skills, And Overall Clarity. This Feedback Ensures That Your Resume Is Optimized For Better Visibility And Alignment With Job Postings, Increasing Your Chances Of Catching Employers' Attention And Securing More Interviews. It's An Easy Way To Enhance Your Resume For More Effective Job Search Results.",
      link: "Start Now"
    },
    {
      title: "Job Fit Scoring",
      icon: (
        <svg className="w-10 h-10 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
          <path d="M11 15.5L17 9.5l-1-1-5 5-3-3-1 1 4 4z"/>
        </svg>
      ),
      color: "bg-orange-100",
      text: "Indeed's Job Fit Scoring Helps Job Seekers Find The Right Opportunities By Analyzing Both Their Resume And Job Descriptions. It Assesses How Well Your Skills, Experience, And Qualifications Align With The Requirements Of The Position And Provides You With A Personalized Fit Score. This Score Makes It Easier To Identify The Jobs That Best Match Your Profile, Saving You Time And Improving Your Job Search Efficiency. With This Feature, You Can Focus On Applying To Roles Where You're More Likely To Succeed.",
      link: "Start Now"
    },
    {
      title: "Help Every Step Of The Way",
      icon: (
        <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z"/>
          <path d="M11 7h2v2h-2zm0 4h2v6h-2z"/>
        </svg>
      ),
      color: "bg-purple-100",
      text: "Indeed Supports Job Seekers At Every Step Of The Job Search Process, From Finding The Right Opportunities With Personalized Job Recommendations To Offering Free Resume Assessments. Indeed Helps You Optimize Your Application Materials. Job Fit Scoring Ensures You're Applying To Roles That Match Your Skills, And Helpful Resources Like Career Advice And Interview Tips Guide You Along The Way. Whether You're Exploring New Opportunities Or Seeking Career Growth, Indeed Provides Tools And Support To Make Your Job Search Journey More Successful.",
      link: "Start Now"
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            How it work?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Pellentesque quis lectus sagittis, gravida erat id, placerat tellus.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Circle */}
              <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mb-6 shadow-md`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {feature.text}
              </p>

              {/* CTA Link */}
              <a
                href="#"
                className="text-green-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
              >
                {feature.link}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import { FEATURED_JOBS, JobOpening } from "../../lib/constants";
import { Card } from "../ui/Card";
import { MapPin, Briefcase, DollarSign, ArrowRight } from "lucide-react";

export const FeaturedJobsSection = () => {
  const [activeTab, setActiveTab] = useState<"All" | "IT" | "Non-IT">("All");

  const filteredJobs = FEATURED_JOBS.filter((job) => {
    if (activeTab === "All") return true;
    return job.category === activeTab;
  });

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="featured-jobs" className="bg-transparent py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
            Careers Overseas
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Featured Global Job Openings
          </h3>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
            Explore hot vacancies from top global employers. We provide direct placement and work visa support for IT and Non-IT roles.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-full border border-gray-200 shadow-sm flex gap-1">
            {(["All", "IT", "Non-IT"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:text-primary hover:bg-primary-light/30"
                }`}
              >
                {tab === "All" ? "All Jobs" : tab === "IT" ? "IT Jobs" : "Non-IT Jobs"}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredJobs.map((job, index) => (
            <Card
              key={job.id}
              delay={index * 0.05}
              className="flex flex-col h-full bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group rounded-2xl p-6"
            >
              {/* Category Badge & Company */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {job.company}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    job.category === "IT"
                      ? "bg-blue-50 text-blue-600 border border-blue-100"
                      : "bg-orange-50 text-orange-600 border border-orange-100"
                  }`}
                >
                  {job.category === "IT" ? "IT Job" : "Non-IT Job"}
                </span>
              </div>

              {/* Job Title */}
              <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-4 group-hover:text-primary transition-colors duration-300">
                {job.title}
              </h4>

              {/* Job Details */}
              <div className="space-y-2.5 mb-5 flex-grow">
                <div className="flex items-center gap-2.5 text-xs md:text-sm font-medium text-gray-500">
                  <MapPin className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs md:text-sm font-medium text-gray-500">
                  <Briefcase className="h-4 w-4 text-gray-400 shrink-0" />
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs md:text-sm font-bold text-emerald-600">
                  <DollarSign className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>{job.salaryRange}</span>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 border-t border-gray-100 pt-4 mb-6">
                {job.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="bg-gray-50 text-gray-600 text-[10px] md:text-xs font-semibold px-2 py-1 rounded-md border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Apply Now CTA */}
              <button
                onClick={() => handleScrollTo("counselling-form")}
                className="w-full py-3 bg-gray-50 text-gray-700 hover:bg-primary hover:text-white rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Apply Now / Enquire</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

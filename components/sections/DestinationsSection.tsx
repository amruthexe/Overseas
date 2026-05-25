"use client";

import React from "react";
import Image from "next/image";
import { DESTINATIONS } from "../../lib/constants";
import { Card } from "../ui/Card";
import { GraduationCap, Award, Compass } from "lucide-react";
import { Button } from "../ui/Button";

export const DestinationsSection = () => {
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
    <section id="destinations" className="bg-accent-gray py-16 md:py-24 border-y border-border-gray/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
            Study Destinations
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Top Global Study Hubs
          </h3>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
            Unlock premium education across prestigious countries. Learn about active university hubs, trending course streams, and visa parameters.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DESTINATIONS.map((dest, index) => (
            <Card
              key={dest.id}
              delay={index * 0.06}
              hoverEffect={false} // We will do custom hover scales to manage the full-image layout perfectly
              className="flex flex-col h-full overflow-hidden p-0 border border-border-gray/80 bg-white group hover:shadow-premium-hover transition-all duration-300 hover:border-primary/20"
            >
              {/* Country Image Frame */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={dest.image}
                  alt={`Scenic vista representing higher education in ${dest.country}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Floating Visa Success Rate */}
                <div className="absolute top-4 right-4 bg-emerald-600/95 backdrop-blur-sm text-white text-xxs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Award className="h-3 w-3" />
                  <span>{dest.visaSuccess} Visa Success</span>
                </div>

                {/* Country Name Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold tracking-tight">
                    {dest.country}
                  </h4>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-5">
                
                {/* Statistics Row */}
                <div className="flex justify-between items-center gap-4 bg-accent-gray/60 p-3 rounded-xl border border-border-gray/30">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                    <span>{dest.universitiesCount}+ Universities</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <Compass className="h-4 w-4 text-primary shrink-0" />
                    <span>Intakes: Fall & Spring</span>
                  </div>
                </div>

                {/* Trending Courses */}
                <div className="space-y-1.5">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Popular Programs
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.popularCourses.map((course) => (
                      <span
                        key={course}
                        className="bg-gray-100 hover:bg-primary-light hover:text-primary transition-colors text-xxs font-bold text-gray-600 px-2.5 py-1 rounded-md"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Actions */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full justify-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300"
                  onClick={() => handleScrollTo("counselling-form")}
                >
                  <span>Explore Courses</span>
                  <span>&rarr;</span>
                </Button>

              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

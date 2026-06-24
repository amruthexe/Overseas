"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "../../lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      transition: { duration: 0.3 }
    })
  };

  return (
    <section id="testimonials" className="bg-transparent py-16 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
            Student Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Hear From Our Successful Global Alumni
          </h3>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
            Over 5,000+ students have landed at their dream universities. Here is what they say about their admissions journey.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-accent-gray border border-border-gray/70 p-6 md:p-12 rounded-3xl shadow-premium min-h-[380px] sm:min-h-[320px] md:min-h-[280px] flex items-center">
          
          {/* Decorative Giant Quote Icon */}
          <div className="absolute top-6 right-8 text-primary/5 select-none pointer-events-none">
            <Quote className="h-28 w-28 rotate-180" />
          </div>

          <div className="w-full relative z-10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Student Details Column */}
                <div className="md:col-span-4 flex flex-col items-center text-center space-y-2">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 leading-none">
                    {current.name}
                  </h4>
                  <span className="inline-block bg-primary/10 text-primary text-xxs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">
                    Study in {current.country}
                  </span>
                </div>

                {/* Testimonial Review Column */}
                <div className="md:col-span-8 space-y-4">
                  {/* Star Rating */}
                  <div className="flex gap-1 justify-center md:justify-start">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-450" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-semibold italic text-center md:text-left">
                    &ldquo;{current.review}&rdquo;
                  </p>

                  {/* Placement Info */}
                  <div className="text-center md:text-left text-xs font-bold text-gray-400">
                    <span className="text-gray-700">{current.course}</span> &ndash; {current.university}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          {/* Chevron Navigation */}
          <div className="flex gap-2 mx-auto sm:mx-0">
            <button
              onClick={slidePrev}
              type="button"
              className="p-3 bg-white hover:bg-primary hover:text-white border border-border-gray hover:border-primary text-gray-600 rounded-full transition-all shadow-subtle cursor-pointer focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={slideNext}
              type="button"
              className="p-3 bg-white hover:bg-primary hover:text-white border border-border-gray hover:border-primary text-gray-600 rounded-full transition-all shadow-subtle cursor-pointer focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Jump Dots */}
          <div className="hidden sm:flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                type="button"
                className={`h-2.5 rounded-full transition-all cursor-pointer focus:outline-none ${
                  activeIndex === i ? "w-6 bg-primary" : "w-2.5 bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

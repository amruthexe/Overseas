"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Globe2,
  BadgeCheck,
  X,
} from "lucide-react";

const FAMOUS_UNIVERSITIES = [
  {
    name: "Harvard University",
    country: "United States",
    logo: "🇺🇸",
  },
  {
    name: "Stanford University",
    country: "United States",
    logo: "🇺🇸",
  },
  {
    name: "Massachusetts Institute of Technology",
    country: "United States",
    logo: "🇺🇸",
  },
  {
    name: "University of Oxford",
    country: "United Kingdom",
    logo: "🇬🇧",
  },
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    logo: "🇬🇧",
  },
  {
    name: "Imperial College London",
    country: "United Kingdom",
    logo: "🇬🇧",
  },
  {
    name: "University of Toronto",
    country: "Canada",
    logo: "🇨🇦",
  },
  {
    name: "University of British Columbia",
    country: "Canada",
    logo: "🇨🇦",
  },
  {
    name: "McGill University",
    country: "Canada",
    logo: "🇨🇦",
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    logo: "🇦🇺",
  },
  {
    name: "Australian National University",
    country: "Australia",
    logo: "🇦🇺",
  },
  {
    name: "University of Sydney",
    country: "Australia",
    logo: "🇦🇺",
  },
  {
    name: "Technical University of Munich",
    country: "Germany",
    logo: "🇩🇪",
  },
  {
    name: "LMU Munich",
    country: "Germany",
    logo: "🇩🇪",
  },
  {
    name: "RWTH Aachen University",
    country: "Germany",
    logo: "🇩🇪",
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    logo: "🇸🇬",
  },
  {
    name: "Nanyang Technological University",
    country: "Singapore",
    logo: "🇸🇬",
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    logo: "🇨🇭",
  },
  {
    name: "University of Amsterdam",
    country: "Netherlands",
    logo: "🇳🇱",
  },
  {
    name: "Trinity College Dublin",
    country: "Ireland",
    logo: "🇮🇪",
  },
];

export const HeroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
    <section className="relative overflow-hidden bg-white pt-24 pb-20">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-100/60 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-50 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* TEXT CONTENT */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-red-200 bg-red-50 text-red-600 text-sm font-semibold shadow-sm"
          >
            <BadgeCheck className="w-4 h-4" />
            Trusted Overseas Education Consultancy
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-black"
          >
            Study Abroad &
            <br />
            <span className="text-red-600">
              Build Your Global Future
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            Get admission into top global universities with expert visa
            guidance, personalised counselling, scholarships support, and
            complete overseas education assistance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={() => handleScrollTo("counselling-form")} className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-xl shadow-red-200">
              Free Counselling
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsPopupOpen(true)}
              className="border border-gray-300 hover:border-red-300 hover:bg-red-50 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-gray-800"
            >
              Explore Universities
            </button>
          </motion.div>
        </div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mt-20"
        >
          <div className="relative overflow-hidden rounded-[40px] border border-white/40 shadow-2xl bg-white">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/hero.png"
                alt="Study Abroad"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {[
            { title: "98%", subtitle: "Visa Success" },
            { title: "5000+", subtitle: "Students Assisted" },
            { title: "15+", subtitle: "Countries" },
            { title: "Top Ranked", subtitle: "Universities" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-lg shadow-black/5"
            >
              <h3 className="text-3xl font-black text-red-600">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-600 font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SIDEBAR MODAL */}
      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 180,
              }}
              className="
                relative ml-auto
                h-full w-full
                sm:max-w-xl
                lg:max-w-2xl
                bg-white
                shadow-2xl
                border-l border-gray-200
                overflow-hidden
                flex flex-col
              "
            >
              {/* Header */}
              <div className="sticky top-0 z-20 bg-white border-b border-gray-100 px-5 md:px-8 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-50 rounded-2xl text-red-600">
                      <Globe2 className="w-6 h-6" />
                    </div>

                    <div>
                      <h2 className="text-xl md:text-2xl font-black text-gray-900">
                        Top Global Universities
                      </h2>

                      <p className="text-sm text-gray-500">
                        Partnered and elite institutions
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto px-5 md:px-8 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FAMOUS_UNIVERSITIES.map((uni, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="
                        group
                        flex items-start gap-4
                        p-4
                        rounded-2xl
                        border border-gray-100
                        hover:border-red-200
                        hover:bg-red-50/40
                        transition-all duration-300
                      "
                    >
                      <div
                        className="
                          w-14 h-14
                          rounded-2xl
                          bg-gray-50
                          flex items-center justify-center
                          text-2xl
                          shrink-0
                        "
                      >
                        {uni.logo}
                      </div>

                      <div className="min-w-0">
                        <h4
                          className="
                            font-bold text-gray-900
                            leading-snug
                            group-hover:text-red-600
                            transition-colors
                          "
                        >
                          {uni.name}
                        </h4>

                        <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-500">
                          <GraduationCap className="w-4 h-4 text-red-500" />
                          {uni.country}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-100 p-5 md:p-6">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-sm text-gray-500 text-center sm:text-left">
                    Want to explore courses, fees, and deadlines?
                  </p>

                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="
                      w-full sm:w-auto
                      bg-red-600 hover:bg-red-700
                      text-white
                      px-6 py-3
                      rounded-xl
                      font-semibold
                      transition-all
                      shadow-lg shadow-red-100
                    "
                  >
                    Speak to an Expert
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
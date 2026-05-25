"use client";

import React from "react";
import { TRUSTED_UNIVERSITIES } from "../../lib/constants";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const TrustedUniversities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="bg-accent-gray py-12 md:py-16 border-y border-border-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 max-w-xl mx-auto space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
            Trusted Partners
          </h2>
          <p className="text-xl md:text-2xl font-extrabold text-gray-800 tracking-tight">
            Unlock Admission into Global Ivy Leagues & Top-Tier Research Hubs
          </p>
        </div>

        {/* University Plates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {TRUSTED_UNIVERSITIES.map((uni) => (
            <motion.div
              key={uni.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
                borderColor: "rgba(220, 38, 38, 0.2)"
              }}
              className="bg-white border border-border-gray/75 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default relative overflow-hidden"
            >
              {/* Soft decorative background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Academic Cap Icon */}
              <GraduationCap className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors duration-300 mb-2" />
              
              {/* Short Logo Name */}
              <h3 className="font-extrabold text-gray-850 group-hover:text-primary transition-colors duration-300 text-sm md:text-base leading-tight">
                {uni.logoText}
              </h3>
              
              {/* Region Tag */}
              <span className="text-xxs text-gray-400 group-hover:text-gray-500 font-bold uppercase tracking-wider mt-1">
                {uni.country}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Trust Stat */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 font-semibold italic">
            * Direct tie-ups and recognition with over 1200+ universities worldwide.
          </p>
        </div>

      </div>
    </section>
  );
};

"use client";

import React from "react";
import { TRUSTED_UNIVERSITIES } from "../../lib/constants";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

export const TrustedUniversities = () => {
  return (
    <section className="bg-transparent py-12 md:py-16 border-y border-border-gray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
            Trusted Partners
          </h2>

          <p className="text-xl md:text-3xl font-extrabold text-gray-800 mt-2">
            Unlock Admission into Global Ivy Leagues &
            Top-Tier Research Hubs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {TRUSTED_UNIVERSITIES.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.04,
              }}
              className="group relative bg-white rounded-3xl border border-gray-200 p-6 text-center overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Animated Flag */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-3 flex justify-center"
              >
                <ReactCountryFlag
                  countryCode={uni.countryCode}
                  svg
                  style={{
                    width: "3rem",
                    height: "3rem",
                  }}
                />
              </motion.div>

              {/* University Name */}
              <h3 className="font-extrabold text-gray-900 text-sm md:text-base tracking-wide group-hover:text-primary transition-colors">
                {uni.logoText}
              </h3>

              {/* Country */}
              <p className="mt-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
                {uni.country}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 italic">
            * Direct tie-ups and recognition with over 1200+ universities worldwide.
          </p>
        </div>

      </div>
    </section>
  );
};
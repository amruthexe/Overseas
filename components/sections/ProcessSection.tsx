"use client";

import React from "react";
import { PROCESS_STEPS } from "../../lib/constants";
import { motion } from "framer-motion";

export const ProcessSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="process" className="bg-accent-gray py-16 md:py-24 border-y border-border-gray/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
            Our Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Your 5-Step Pathway to Global Education
          </h3>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
            We simplify the daunting task of studying abroad. Check out our structured workflow designed to get you accepted stress-free.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) - hidden on mobile */}
        <div className="hidden lg:block relative mb-10 pt-4">
          
          {/* Horizontal Connecting Line */}
          <div className="absolute top-16 left-[10%] right-[10%] h-[3px] bg-border-gray -z-0">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary via-red-500 to-red-400"
            />
          </div>

          {/* Timeline Nodes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-5 gap-6 relative z-10"
          >
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle Node with Number */}
                  <div className="relative mb-5 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white border-4 border-border-gray text-gray-400 group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-premium flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    {/* Floating Step Number */}
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  {/* Text Details */}
                  <h4 className="text-base font-extrabold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-[200px] font-medium">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* Mobile & Tablet Timeline (Vertical Stack) - hidden on desktop */}
        <div className="lg:hidden relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-[31px] top-4 bottom-4 w-[3px] bg-border-gray -z-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary via-red-500 to-red-400"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-8"
          >
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  className="flex gap-6 relative z-10 group"
                >
                  {/* Step Node */}
                  <div className="relative shrink-0">
                    <div className="h-16 w-16 rounded-full bg-white border-4 border-border-gray text-gray-400 group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-premium flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    {/* Floating Step Number */}
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="bg-white border border-border-gray/70 p-5 rounded-2xl shadow-subtle group-hover:border-primary/20 transition-all duration-300 flex-grow">
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

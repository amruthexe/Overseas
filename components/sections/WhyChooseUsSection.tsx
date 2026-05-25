"use client";

import React from "react";
import Image from "next/image";
import { WHY_CHOOSE_US } from "../../lib/constants";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const WhyChooseUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="why-choose-us" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Main Visual Image */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-premium border-4 border-white z-10 bg-gray-50">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
                alt="Professional career advisor mentoring an eager student about study abroad plans"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Decorative Crimson Circles and Grids */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/5 rounded-2xl rotate-12 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-red-100 rounded-full blur-2xl -z-10 opacity-70"></div>
            
            {/* Overlapping Badge: Best Agency */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute bottom-10 -right-4 bg-white border border-border-gray p-3 rounded-2xl shadow-premium flex items-center gap-2.5 z-20 pointer-events-auto"
            >
              <div className="p-2 bg-primary text-white rounded-xl">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-gray-900 leading-none">100% Verified</h4>
                <p className="text-xxs text-gray-400 font-bold mt-0.5">Accredited Agency</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Values Checklist */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Text */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary text-center lg:text-left">
                Why Choose Us
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight text-center lg:text-left leading-tight">
                Empowering Your Global Dreams with Complete Trust
              </h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium text-center lg:text-left">
                We believe global education should be accessible, transparent, and seamless. Here is why thousands of international students rely on our counseling network.
              </p>
            </div>

            {/* Values Timeline/Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="space-y-5"
            >
              {WHY_CHOOSE_US.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-accent-gray border border-transparent hover:border-border-gray/50 transition-all duration-300 group"
                  >
                    {/* Icon container */}
                    <div className="p-3 bg-primary-light text-primary rounded-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 h-fit">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Descriptive Text */}
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

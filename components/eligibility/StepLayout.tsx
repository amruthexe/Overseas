"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const StepLayout: React.FC<StepLayoutProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6 w-full"
    >
      {/* Step Header Title & Subtitle */}
      <div className="space-y-2 text-center sm:text-left select-none">
        <h2 className="text-2xl sm:text-3xl font-black text-navy-dark tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base text-gray-500 font-semibold leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Form Content Rounded Card */}
      <div className="bg-white border border-border-gray/80 p-6 sm:p-8 rounded-2xl shadow-premium">
        {children}
      </div>
    </motion.div>
  );
};

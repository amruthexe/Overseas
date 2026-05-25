"use client";

import React from "react";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glass?: boolean;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  glass = false,
  className = "",
  delay = 0,
  ...props
}) => {
  const baseClasses = "rounded-2xl border border-border-gray bg-white p-6 shadow-premium transition-all duration-300";
  const glassClasses = "backdrop-blur-md bg-white/70 border border-white/30 shadow-glass transition-all duration-300";
  
  const hoverClasses = hoverEffect 
    ? "hover:-translate-y-1.5 hover:shadow-premium-hover hover:border-primary/20" 
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={`${glass ? glassClasses : baseClasses} ${hoverClasses} ${className}`}
      {...props as any}
    >
      {children}
    </motion.div>
  );
};

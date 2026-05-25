"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyle = 
    "inline-flex items-center justify-center font-semibold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer text-center";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg shadow-primary/20",
    secondary: "bg-primary-light text-primary hover:bg-primary/10 border border-primary/10",
    outline: "bg-transparent text-gray-800 border border-border-gray hover:bg-accent-gray hover:border-gray-400",
    ghost: "bg-transparent text-gray-700 hover:bg-accent-gray",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props as any}
    >
      {children}
    </motion.button>
  );
};

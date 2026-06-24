"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Globe, PhoneCall } from "lucide-react";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "services" },
    { name: "Jobs", href: "featured-jobs" },
    { name: "Destinations", href: "destinations" },
    { name: "Why Choose Us", href: "why-choose-us" },
    { name: "Process", href: "process" },
    { name: "Testimonials", href: "testimonials" },
    { name: "FAQs", href: "faq" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <>
      {/* Premium Announcement Bar */}
      <div className="bg-gradient-to-r from-primary via-red-650 to-orange-650 text-white text-[10px] sm:text-xs font-bold py-2.5 px-4 text-center tracking-wide flex items-center justify-center gap-2 relative z-50 shadow-inner">
        <span className="inline-block bg-white/25 rounded px-2 py-0.5 text-[9px] uppercase font-extrabold animate-pulse shadow-sm">Intakes Open</span>
        <span>USA, UK, Canada, Europe, Singapore & Dubai Admissions Open for 2026/2027</span>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-border-gray shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] py-3"
            : "bg-white/80 backdrop-blur-sm border-border-gray/30 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 cursor-pointer group focus:outline-none"
            >
              <div className="bg-gradient-to-br from-primary to-red-600 p-2.5 rounded-2xl text-white shadow-md shadow-primary/20 transition-all duration-350 group-hover:scale-105 group-hover:rotate-6">
                <Globe className="h-5.5 w-5.5" />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-gray-900">
                Bhavitha <span className="text-primary bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">Overseas</span>
              </span>
            </button>
 
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="relative py-2 text-gray-650 hover:text-primary font-bold text-sm transition-colors cursor-pointer focus:outline-none after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full hover:after:left-0 after:transition-all after:duration-300"
                >
                  {link.name}
                </button>
              ))}
            </nav>
 
            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                className="shadow-md shadow-primary/10 relative overflow-hidden"
                onClick={() => handleScrollTo("counselling-form")}
              >
                Free Counselling
              </Button>
            </div>
 
            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-700 p-2.5 rounded-xl hover:bg-gray-100 cursor-pointer border border-transparent hover:border-gray-200/50 transition-all focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5.5 w-5.5 animate-draw" /> : <Menu className="h-5.5 w-5.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu - inside header wrapper for perfect relative positioning */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border-gray shadow-xl overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4 bg-white/95 backdrop-blur-md max-h-[calc(100vh-80px)] overflow-y-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleScrollTo(link.href)}
                    className="block w-full text-left px-4 py-3 rounded-2xl text-base font-extrabold text-gray-700 hover:text-primary hover:bg-primary-light/30 transition-all cursor-pointer focus:outline-none"
                  >
                    {link.name}
                  </button>
                ))}
                
                <div className="border-t border-border-gray/50 pt-5 mt-2 space-y-4">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full shadow-lg"
                    onClick={() => handleScrollTo("counselling-form")}
                  >
                    Free Counselling
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Sticky Phone Action Button on the Right */}
      <a
        href="tel:+919052580275"
        className="fixed right-6 bottom-8 z-50 flex items-center flex-row-reverse group cursor-pointer focus:outline-none"
        aria-label="Call Us"
      >
        <div className="relative w-14 h-14 bg-gradient-to-tr from-primary to-red-600 rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-110 group">
          {/* Pulsing outline visual rings */}
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping pointer-events-none" style={{ animationDuration: "2s" }} />
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping pointer-events-none" style={{ animationDuration: "3s" }} />
          
          <PhoneCall className="h-6 w-6 animate-pulse" />
        </div>
        
        {/* Hover slide tooltip */}
        <span className="absolute right-16 bg-white border border-gray-200 text-gray-900 text-xs font-black px-3.5 py-2 rounded-2xl shadow-xl opacity-0 translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border-r-4 border-r-primary">
          Call Support: +91 90525 80275
        </span>
      </a>
    </>
  );
};

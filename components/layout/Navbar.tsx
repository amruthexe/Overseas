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
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-border-gray shadow-sm py-3"
            : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 cursor-pointer group focus:outline-none"
            >
              <div className="bg-primary p-2 rounded-xl text-white transition-transform group-hover:scale-105">
                <Globe className="h-6 w-6" />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                Bhavitha Overseas<span className="text-primary">.</span>
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="text-gray-600 hover:text-primary font-medium text-sm transition-colors cursor-pointer focus:outline-none"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors mr-2"
              >
                <PhoneCall className="h-4 w-4 text-primary" />
                <span>+91 9052580275</span>
              </a>
              <Button
                variant="primary"
                size="sm"
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
                className="text-gray-700 p-2 rounded-lg hover:bg-accent-gray cursor-pointer focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-[65px] z-40 bg-white border-b border-border-gray shadow-lg max-h-[calc(100vh-65px)] overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-primary hover:bg-primary-light/50 transition-all cursor-pointer focus:outline-none"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="border-t border-border-gray pt-4 mt-2 space-y-4 px-4">
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-3 text-base font-semibold text-gray-700"
                >
                  <PhoneCall className="h-5 w-5 text-primary" />
                  <span>+91 9052580275</span>
                </a>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => handleScrollTo("counselling-form")}
                >
                  Free Counselling
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

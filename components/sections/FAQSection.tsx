"use client";

import React, { useState } from "react";
import { FAQS } from "../../lib/constants";
import { Accordion } from "../ui/Accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

type CategoryFilter = "all" | "admission" | "visa" | "scholarship";

export const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const categories = [
    { label: "All Questions", value: "all" as CategoryFilter },
    { label: "Admissions", value: "admission" as CategoryFilter },
    { label: "Student Visa", value: "visa" as CategoryFilter },
    { label: "Scholarships", value: "scholarship" as CategoryFilter }
  ];

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  return (
    <section id="faq" className="bg-transparent py-16 md:py-24 border-y border-border-gray/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto space-y-3">
          <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
            Have Questions?
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
            Find immediate answers regarding eligibility parameters, document preparation, block balance structures, and coaching schedules.
          </p>
        </div>

        {/* Dynamic Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-border-gray/50 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              type="button"
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all cursor-pointer focus:outline-none ${
                activeCategory === cat.value
                  ? "bg-primary text-white shadow-md shadow-primary/10"
                  : "bg-white text-gray-600 border border-border-gray hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Component */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Accordion items={filteredFaqs} />
        </motion.div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-10 space-y-3 bg-white p-6 rounded-2xl border border-border-gray/60 shadow-subtle max-w-xl mx-auto">
          <h4 className="text-sm md:text-base font-bold text-gray-800">
            Still have queries not answered here?
          </h4>
          <p className="text-xs text-gray-500 font-medium">
            Do not worry. Our direct hotlines are open, or you can register for our upcoming live webinars.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("counselling-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover focus:outline-none cursor-pointer"
          >
            <span>Speak to a Consultant Now</span>
            <span>&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
};

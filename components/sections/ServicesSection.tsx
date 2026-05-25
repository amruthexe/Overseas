"use client";

import React from "react";
import { SERVICES } from "../../lib/constants";
import { Card } from "../ui/Card";
import { Check } from "lucide-react";

export const ServicesSection = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-primary">
            Our Offerings
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Comprehensive End-to-End Overseas Services
          </h3>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-medium">
            We handle everything from academic screening to global boarding. Partner with experts who streamline your admission journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                delay={index * 0.05}
                className="flex flex-col h-full group"
              >
                {/* Icon Wrapper */}
                <div className="bg-gray-50 text-gray-600 group-hover:bg-primary-light group-hover:text-primary p-3 rounded-2xl w-fit mb-5 transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-sm text-gray-500 mb-5 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Benefits Bullet List */}
                <ul className="space-y-2 border-t border-border-gray/60 pt-4 mb-6">
                  {service.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                      <div className="bg-emerald-50 text-emerald-600 p-0.5 rounded-full shrink-0">
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Enquire Now CTA link */}
                <button
                  onClick={() => handleScrollTo("counselling-form")}
                  className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-primary hover:text-primary-hover group/link w-fit cursor-pointer focus:outline-none"
                >
                  <span>Enquire Now</span>
                  <span className="transition-transform group-hover/link:translate-x-0.5">&rarr;</span>
                </button>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

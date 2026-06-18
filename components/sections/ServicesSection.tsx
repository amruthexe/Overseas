
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
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="services"
      className="bg-transparent py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Our Services
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Complete Overseas Education Solutions
          </h2>

          <p className="text-base md:text-lg text-gray-500 leading-relaxed">
            From career counselling to visa approvals, we provide personalized
            guidance at every stage of your international education journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.id}
                delay={index * 0.08}
                className="
                  relative
                  overflow-hidden
                  flex flex-col
                  h-full
                  bg-white
                  border
                  border-gray-100
                  rounded-3xl
                  hover:border-primary/20
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                  group
                "
              >
                {/* Top Gradient Line */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Large Background Number */}
                <div className="absolute top-4 right-5 text-6xl font-black text-gray-100 group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="
                    bg-gradient-to-br
                    from-primary/10
                    to-primary/5
                    text-primary
                    p-4
                    rounded-2xl
                    w-fit
                    mb-6
                    group-hover:scale-110
                    group-hover:rotate-3
                    transition-all
                    duration-500
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 border-t border-gray-100 pt-5 mb-7">
                  {service.benefits.map((benefit, bIndex) => (
                    <li
                      key={bIndex}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mt-0.5 shrink-0">
                        <Check className="h-3 w-3" />
                      </div>

                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => handleScrollTo("counselling-form")}
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    bg-primary
                    text-white
                    text-sm
                    font-semibold
                    hover:scale-105
                    hover:shadow-lg
                    transition-all
                    duration-300
                  "
                >
                  Enquire Now
                  <span>→</span>
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};


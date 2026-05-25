"use client";

import React, { useEffect, useRef } from "react";
import { SUCCESS_STATS } from "../../lib/constants";
import { motion, animate, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix: string;
}

const Counter = ({ value, suffix }: CounterProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView || !elementRef.current) return;

    const node = elementRef.current;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(curr) {
        node.textContent = Math.floor(curr).toString();
      }
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-2">
      <span ref={elementRef}>0</span>
      <span>{suffix}</span>
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-red-800 py-16 md:py-24 text-white">
      {/* Visual background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-40 z-0"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {SUCCESS_STATS.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center flex flex-col items-center justify-between"
            >
              {/* Dynamic Animated Counter */}
              <Counter value={stat.value} suffix={stat.suffix} />

              {/* Stat Name */}
              <h4 className="text-sm sm:text-base font-extrabold text-white/90 tracking-wide uppercase">
                {stat.label}
              </h4>
              
              {/* Short explanation */}
              <p className="text-xs text-red-100/70 max-w-[200px] mt-1.5 leading-relaxed font-semibold">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

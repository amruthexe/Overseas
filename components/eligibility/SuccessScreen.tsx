"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, PhoneCall, FileSpreadsheet, ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";

interface SuccessScreenProps {
  onReset: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ onReset }) => {
  const steps = [
    {
      icon: FileSpreadsheet,
      title: "Profile Feasibility Evaluation",
      desc: "Our senior German visa specialists will evaluate your degree, career timeline, and state demands."
    },
    {
      icon: Calendar,
      title: "Counselling Slot Locked",
      desc: "Your requested consultation session is registered. We will secure your dedicated country advisor."
    },
    {
      icon: PhoneCall,
      title: "Personal Advisor Call",
      desc: "Look out for a voice or video call within the next 24 business hours. Have your transcripts ready!"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="max-w-xl mx-auto text-center py-8 px-4"
    >
      {/* Animated Success Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.15, stiffness: 200, damping: 12 }}
        className="mx-auto mb-6 bg-accent-orange-light text-accent-orange p-5 rounded-full w-fit shadow-subtle border border-accent-orange/10"
      >
        <CheckCircle2 className="h-16 w-16" />
      </motion.div>

      {/* Main Header Statements */}
      <div className="space-y-3 mb-8">
        <h1 className="text-3xl font-black text-navy-dark tracking-tight leading-tight">
          Consultation Request Submitted!
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-semibold max-w-md mx-auto">
          Your free Germany Visa Eligibility Check has been registered. Our specialists will contact you shortly.
        </p>
      </div>

      {/* Structured Next Steps Checklist */}
      <div className="bg-white border border-border-gray/70 p-6 md:p-8 rounded-2xl shadow-premium text-left space-y-6 mb-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-accent-orange">
          What happens next?
        </h3>
        
        <div className="space-y-5">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex gap-4">
                <div className="p-2.5 bg-navy-dark/5 text-navy-dark rounded-xl h-fit shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-extrabold text-navy-dark">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Redirect Options buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          variant="outline"
          size="md"
          onClick={onReset}
          className="flex items-center justify-center gap-2"
        >
          <span>Fill Another Form</span>
        </Button>
        <Button
          variant="primary"
          size="md"
          className="bg-navy-dark hover:bg-navy-dark-hover shadow-navy-hover flex items-center justify-center gap-2"
          onClick={() => window.location.href = "/"}
        >
          <ArrowLeft className="h-4.5 w-4.5" />
          <span>Back to Homepage</span>
        </Button>
      </div>

    </motion.div>
  );
};

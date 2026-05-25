import React from "react";
import { Award, Clock, ShieldCheck } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const totalSteps = 5;
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-border-gray shadow-sm py-4 w-full select-none">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Top Badges & Trust Metrics Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3.5 text-xxs font-bold text-gray-500">
          {/* Left Title */}
          <div className="flex items-center gap-1.5 text-navy-dark text-xs sm:text-xxs">
            <div className="bg-navy-dark p-1 rounded-md text-white">
              <ShieldCheck className="h-3.5 w-3.5" />
            </div>
            <span>Free Germany Visa Eligibility Check</span>
          </div>

          {/* Right Trust Stats */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-1">
              <Award className="h-3.5 w-3.5 text-accent-orange" />
              <span>Trusted since 1999</span>
            </div>
            <span className="text-gray-300 font-normal">|</span>
            <div>100K+ Successful Applicants</div>
            <span className="text-gray-300 font-normal">|</span>
            <div className="flex items-center gap-1 text-accent-orange">
              <Clock className="h-3.5 w-3.5" />
              <span>Takes 60 seconds</span>
            </div>
          </div>
        </div>

        {/* Dynamic Progress Bar & Step Text */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-grow bg-gray-150 h-3 rounded-full overflow-hidden">
            <div
              style={{ width: `${percentage}%` }}
              className="h-full bg-gradient-to-r from-navy-dark via-navy-dark to-accent-orange transition-all duration-500 ease-out rounded-full"
            />
          </div>
          <div className="shrink-0 text-xs font-black text-navy-dark whitespace-nowrap bg-gray-100 px-3 py-1 rounded-full border border-border-gray/30">
            Step {currentStep} of {totalSteps} ({percentage}%)
          </div>
        </div>

      </div>
    </div>
  );
};

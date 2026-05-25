import React from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

interface StepButtonsProps {
  onBack?: () => void;
  isLastStep?: boolean;
  isSubmitting?: boolean;
  continueText?: string;
}

export const StepButtons: React.FC<StepButtonsProps> = ({
  onBack,
  isLastStep = false,
  isSubmitting = false,
  continueText = "Continue",
}) => {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-border-gray/70 p-4 z-40 sm:static sm:bg-transparent sm:border-0 sm:p-0 sm:z-0 sm:mt-8 flex items-center justify-between gap-4 w-full select-none">
      
      {/* Back/Previous Button */}
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="flex items-center gap-2 justify-center px-5 py-3.5 rounded-xl border border-gray-300 bg-white hover:bg-gray-150 text-gray-700 text-sm font-extrabold transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200 shrink-0 w-[110px] md:w-[120px]"
        >
          <ArrowLeft className="h-4.5 w-4.5" />
          <span>Back</span>
        </button>
      ) : (
        /* Invisible spacer for horizontal alignment */
        <div className="w-[110px] md:w-[120px] hidden sm:block" />
      )}

      {/* Continue/Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`flex items-center gap-2 justify-center px-8 py-3.5 rounded-xl text-white text-sm md:text-base font-extrabold transition-all duration-200 cursor-pointer shadow-md focus:outline-none focus:ring-2 w-full sm:w-auto shrink-0 ${
          isLastStep
            ? "bg-accent-orange hover:bg-orange-600 focus:ring-accent-orange/50 shadow-accent-orange/10"
            : "bg-navy-dark hover:bg-navy-dark-hover focus:ring-navy-dark/50 shadow-navy-hover"
        } ${isSubmitting ? "opacity-80 cursor-wait" : ""}`}
      >
        <span>
          {isSubmitting 
            ? "Booking Slot..." 
            : isLastStep 
              ? "Book My Free Call" 
              : continueText}
        </span>
        {isSubmitting ? (
          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
        ) : isLastStep ? (
          <Check className="h-4.5 w-4.5 shrink-0" strokeWidth={3} />
        ) : (
          <ArrowRight className="h-4.5 w-4.5 shrink-0" />
        )}
      </button>
      
    </div>
  );
};

import React from "react";
import { Check } from "lucide-react";

interface OptionCardProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const OptionCard: React.FC<OptionCardProps> = ({
  selected,
  onClick,
  title,
  description,
  icon: Icon,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all duration-200 cursor-pointer select-none w-full outline-none focus:ring-2 focus:ring-accent-orange/20 ${
        selected
          ? "border-accent-orange bg-accent-orange-light/10 text-navy-dark ring-1 ring-accent-orange shadow-premium-hover"
          : "border-border-gray bg-white text-gray-700 hover:border-gray-400 hover:bg-accent-gray/50 hover:shadow-subtle"
      }`}
    >
      {/* Top right corner checklist indicator */}
      <div
        className={`absolute top-3.5 right-3.5 h-5 w-5 rounded-full border flex items-center justify-center transition-all ${
          selected
            ? "bg-accent-orange border-accent-orange text-white scale-100"
            : "border-gray-300 bg-white text-transparent scale-90"
        }`}
      >
        <Check className="h-3 w-3" strokeWidth={3} />
      </div>

      {/* Decorative Icon */}
      {Icon && (
        <div
          className={`p-3 rounded-xl mb-3.5 transition-colors ${
            selected ? "bg-accent-orange/10 text-accent-orange" : "bg-accent-gray text-gray-500"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
      )}

      {/* Title */}
      <span className="text-sm md:text-base font-extrabold leading-tight block">
        {title}
      </span>
      
      {/* Description */}
      {description && (
        <span className="text-xxs md:text-xs text-gray-400 font-bold mt-1.5 leading-tight block">
          {description}
        </span>
      )}
    </button>
  );
};

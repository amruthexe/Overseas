import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AlertCircle, ChevronDown } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  register: UseFormRegisterReturn;
  options: Option[];
  icon?: React.ComponentType<{ className?: string }>;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  error,
  register,
  options,
  icon: Icon,
  placeholder = "Select option...",
  ...props
}) => {
  return (
    <div className="space-y-1.5 w-full">
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider select-none">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Icon className="h-4.5 w-4.5" />
          </div>
        )}
        <select
          defaultValue=""
          className={`w-full bg-white border text-gray-800 rounded-xl text-sm font-medium transition-all focus:outline-none focus:ring-1 appearance-none cursor-pointer ${
            Icon ? "pl-11 pr-10 py-3.5" : "px-4 pr-10 py-3.5"
          } ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/10"
              : "border-border-gray focus:border-navy-dark focus:ring-navy-dark"
          }`}
          {...register}
          {...props}
        >
          <option value="" disabled className="text-gray-400">
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
          <ChevronDown className="h-4.5 w-4.5" />
        </div>
      </div>
      {error && (
        <p className="text-xxs text-red-500 font-bold flex items-center gap-1 mt-1 animate-fadeIn">
          <AlertCircle className="h-3 w-3 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

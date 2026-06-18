"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Clock, 
  Globe, 
  Check, 
  AlertCircle, 
  ChevronDown, 
  Volume2, 
  Calendar, 
  PhoneCall, 
  FileSpreadsheet, 
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Award
} from "lucide-react";

import { Button } from "../ui/Button";
import { GermanyEligibilityLead } from "@/types/eligibility";
import { 
  step1Schema, 
  step2Schema, 
  step3Schema, 
  step4Schema, 
  step5Schema 
} from "@/lib/eligibility-schema";

// Inline OptionCard styled with the primary RED branding theme
interface RedOptionCardProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const RedOptionCard: React.FC<RedOptionCardProps> = ({
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
      className={`relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer select-none w-full outline-none focus:ring-2 focus:ring-primary/20 ${
        selected
          ? "border-primary bg-primary/5 text-gray-900 ring-1 ring-primary shadow-subtle"
          : "border-border-gray bg-white text-gray-700 hover:border-gray-400 hover:bg-accent-gray/50"
      }`}
    >
      <div
        className={`absolute top-2.5 right-2.5 h-4.5 w-4.5 rounded-full border flex items-center justify-center transition-all ${
          selected
            ? "bg-primary border-primary text-white scale-100"
            : "border-gray-300 bg-white text-transparent scale-90"
        }`}
      >
        <Check className="h-2.5 w-2.5" strokeWidth={3} />
      </div>

      {Icon && (
        <div
          className={`p-2 sm:p-2.5 rounded-lg mb-1.5 sm:mb-2 transition-colors ${
            selected ? "bg-primary/10 text-primary" : "bg-accent-gray text-gray-500"
          }`}
        >
          <Icon className="h-4.5 w-4.5" />
        </div>
      )}

      <span className="text-xs md:text-sm font-extrabold leading-tight block">
        {title}
      </span>
      {description && (
        <span className="text-xxs text-gray-400 font-bold mt-1 leading-tight block">
          {description}
        </span>
      )}
    </button>
  );
};

// Inline FormInput styled with RED branding theme
interface RedFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  register: any;
  icon?: React.ComponentType<{ className?: string }>;
}

const RedFormInput: React.FC<RedFormInputProps> = ({
  label,
  error,
  register,
  icon: Icon,
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <div className="space-y-1 w-full text-left">
      <label className="block text-xxs font-bold text-gray-550 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Icon className="h-4 w-4" />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full bg-white border text-gray-800 rounded-xl text-sm font-medium transition-all focus:outline-none focus:ring-1 ${
            Icon ? "pl-10 pr-4 py-2.5" : "px-4 py-2.5"
          } ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-border-gray focus:border-primary focus:ring-primary"
          }`}
          {...register}
          {...props}
        />
      </div>
      {error && (
        <p className="text-xxs text-red-500 font-bold flex items-center gap-1 mt-1">
          <AlertCircle className="h-3 w-3 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

// Inline FormSelect styled with RED branding theme
interface RedFormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  register: any;
  options: { label: string; value: string }[];
  icon?: React.ComponentType<{ className?: string }>;
  placeholder?: string;
}

const RedFormSelect: React.FC<RedFormSelectProps> = ({
  label,
  error,
  register,
  options,
  icon: Icon,
  placeholder = "Select option...",
  ...props
}) => {
  return (
    <div className="space-y-1 w-full text-left">
      <label className="block text-xxs font-bold text-gray-550 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Icon className="h-4 w-4" />
          </div>
        )}
        <select
          defaultValue=""
          className={`w-full bg-white border text-gray-800 rounded-xl text-sm font-medium transition-all focus:outline-none focus:ring-1 appearance-none cursor-pointer ${
            Icon ? "pl-10 pr-9 py-2.5" : "px-4 pr-9 py-2.5"
          } ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-border-gray focus:border-primary focus:ring-primary"
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
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      {error && (
        <p className="text-xxs text-red-500 font-bold flex items-center gap-1 mt-1">
          <AlertCircle className="h-3 w-3 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export const CounsellingCTASection = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
    reset
  } = useForm<GermanyEligibilityLead>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: undefined,
      education: undefined,
      experience: undefined,
      state: "",
      designation: undefined,
      speaksEnglish: undefined,
      budget: undefined,
      interestedCountry: "Germany",
      preferredVisa: undefined,
      hasPassport: undefined,
      ieltsScore: undefined,
      moveTimeline: undefined,
      migrationService: undefined,
      reasonForMoving: undefined,
      consultationSlot: undefined,
      preferredLanguage: undefined,
      consultationMode: undefined,
    }
  });

  const formValues = watch();

  const handleContinue = () => {
    const values = getValues();
    let currentSchema;

    switch (step) {
      case 1:
        currentSchema = step1Schema;
        break;
      case 2:
        currentSchema = step2Schema;
        break;
      case 3:
        currentSchema = step3Schema;
        break;
      case 4:
        currentSchema = step4Schema;
        break;
      default:
        return;
    }

    const result = currentSchema.safeParse(values);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof GermanyEligibilityLead;
        setError(fieldName, {
          type: "validation",
          message: issue.message
        });
      });
      return;
    }

    const currentFields = Object.keys(currentSchema.shape) as Array<keyof GermanyEligibilityLead>;
    currentFields.forEach((field) => clearErrors(field));
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: GermanyEligibilityLead) => {
    const result = step5Schema.safeParse(data);

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof GermanyEligibilityLead;
        setError(fieldName, {
          type: "validation",
          message: issue.message
        });
      });
      return;
    }

    setApiError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Submission failed.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
    setStep(1);
    setIsSubmitted(false);
    setApiError(null);
  };

  // Reusable dropdown options
  const ageOptions = [
    { label: "18-24", value: "18-24" },
    { label: "25-30", value: "25-30" },
    { label: "31-40", value: "31-40" },
    { label: "40+", value: "40+" }
  ];

  const educationOptions = [
    { label: "10th", value: "10th" },
    { label: "Intermediate", value: "Intermediate" },
    { label: "Diploma", value: "Diploma" },
    { label: "Bachelor's", value: "Bachelor's" },
    { label: "Master's", value: "Master's" },
    { label: "PhD", value: "PhD" }
  ];

  const experienceOptions = [
    { label: "Fresher", value: "Fresher" },
    { label: "1-2 years", value: "1-2 years" },
    { label: "3-5 years", value: "3-5 years" },
    { label: "5-10 years", value: "5-10 years" },
    { label: "10+ years", value: "10+" }
  ];

  const stateOptions = [
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Telangana", value: "Telangana" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Delhi", value: "Delhi" },
    { label: "Kerala", value: "Kerala" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "West Bengal", value: "West Bengal" },
    { label: "Other", value: "Other" }
  ];

  const designationOptions = [
    { label: "Software Engineer", value: "Software Engineer" },
    { label: "Cybersecurity Analyst", value: "Cybersecurity Analyst" },
    { label: "Data Analyst", value: "Data Analyst" },
    { label: "Mechanical Engineer", value: "Mechanical Engineer" },
    { label: "Nurse", value: "Nurse" },
    { label: "Accountant", value: "Accountant" },
    { label: "Other", value: "Other" }
  ];

  const languageOptions = [
    { label: "English", value: "English" },
    { label: "Hindi", value: "Hindi" },
    { label: "Telugu", value: "Telugu" },
    { label: "Tamil", value: "Tamil" },
    { label: "Kannada", value: "Kannada" },
    { label: "Malayalam", value: "Malayalam" },
    { label: "Marathi", value: "Marathi" },
    { label: "Bengali", value: "Bengali" },
    { label: "Gujarati", value: "Gujarati" }
  ];

  const percentage = Math.round((step / 5) * 100);

  return (
    <section id="counselling-form" className="bg-transparent py-16 md:py-24 border-t border-border-gray/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-primary/5 text-primary rounded-full text-xs font-bold border border-primary/10 shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Takes 60 seconds</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Free Germany Visa Eligibility Check
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-semibold leading-relaxed">
            Trusted since 1999 &bull; Over 100K+ successful applicants. Lock in your consultation path today.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white border border-border-gray rounded-3xl overflow-hidden shadow-premium">
          
          {/* Progress Tracker bar - hidden on Success Screen */}
          {!isSubmitted && (
            <div className="bg-gray-50 border-b border-border-gray px-4 sm:px-6 py-4 flex items-center justify-between gap-3 sm:gap-4 select-none">
              <div className="flex-grow bg-gray-200 h-2 rounded-full overflow-hidden">
                <div
                  style={{ width: `${percentage}%` }}
                  className="h-full bg-primary transition-all duration-300 rounded-full"
                />
              </div>
              <div className="shrink-0 text-[10px] sm:text-xs font-black text-gray-700 bg-white border border-border-gray/60 px-2.5 py-1 rounded-full">
                Step {step} of 5 ({percentage}%)
              </div>
            </div>
          )}

          {/* Form Area */}
          <div className="p-4 sm:p-6 md:p-10 text-center sm:text-left">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Step 1: Basics details */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4 md:space-y-5"
                    >
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-800">Let&apos;s start with the basics</h3>
                        <p className="text-xs text-gray-500 font-medium">We&apos;ll use these to schedule your free Germany counselling call.</p>
                      </div>
                      
                      <RedFormInput
                        label="Full Name *"
                        placeholder="John Doe"
                        icon={User}
                        register={register("fullName")}
                        error={errors.fullName?.message}
                      />
                      <RedFormInput
                        label="Email Address *"
                        placeholder="johndoe@email.com"
                        type="email"
                        icon={Mail}
                        register={register("email")}
                        error={errors.email?.message}
                      />
                      <RedFormInput
                        label="Phone Number *"
                        placeholder="+91 98765 43210"
                        icon={Phone}
                        register={register("phone")}
                        error={errors.phone?.message}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <RedFormSelect
                          label="Your Age *"
                          options={ageOptions}
                          icon={Clock}
                          register={register("age")}
                          error={errors.age?.message}
                        />
                        <RedFormSelect
                          label="Highest Education *"
                          options={educationOptions}
                          icon={GraduationCap}
                          register={register("education")}
                          error={errors.education?.message}
                        />
                        <RedFormSelect
                          label="Years of Experience *"
                          options={experienceOptions}
                          icon={Briefcase}
                          register={register("experience")}
                          error={errors.experience?.message}
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex justify-end pt-4 border-t border-border-gray/60">
                        <Button
                          variant="primary"
                          size="md"
                          type="button"
                          onClick={handleContinue}
                          className="flex items-center gap-1 justify-center w-full sm:w-auto"
                        >
                          <span>Continue</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Role, Location & Budget */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5 md:space-y-6"
                    >
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-800">Location, role & budget</h3>
                        <p className="text-xs text-gray-500 font-medium">Select your current geography, professional title, and migration capital.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <RedFormSelect
                          label="Select State *"
                          options={stateOptions}
                          icon={MapPin}
                          register={register("state")}
                          error={errors.state?.message}
                        />
                        <RedFormSelect
                          label="Current Designation *"
                          options={designationOptions}
                          icon={Briefcase}
                          register={register("designation")}
                          error={errors.designation?.message}
                        />
                      </div>

                      {/* English fluency toggle */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Do you speak English? *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <RedOptionCard
                            title="Yes"
                            selected={formValues.speaksEnglish === "Yes"}
                            onClick={() => {
                              setValue("speaksEnglish", "Yes");
                              clearErrors("speaksEnglish");
                            }}
                            icon={Volume2}
                          />
                          <RedOptionCard
                            title="No"
                            selected={formValues.speaksEnglish === "No"}
                            onClick={() => {
                              setValue("speaksEnglish", "No");
                              clearErrors("speaksEnglish");
                            }}
                            icon={Volume2}
                          />
                        </div>
                        {errors.speaksEnglish && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.speaksEnglish.message}
                          </p>
                        )}
                      </div>

                      {/* Budget options */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Your Visa Budget *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <RedOptionCard
                            title="₹55K - ₹1L"
                            selected={formValues.budget === "₹55K - ₹1L"}
                            onClick={() => {
                              setValue("budget", "₹55K - ₹1L");
                              clearErrors("budget");
                            }}
                          />
                          <RedOptionCard
                            title="₹1L - ₹2L"
                            selected={formValues.budget === "₹1L - ₹2L"}
                            onClick={() => {
                              setValue("budget", "₹1L - ₹2L");
                              clearErrors("budget");
                            }}
                          />
                          <RedOptionCard
                            title="Above ₹2L"
                            selected={formValues.budget === "Above ₹2L"}
                            onClick={() => {
                              setValue("budget", "Above ₹2L");
                              clearErrors("budget");
                            }}
                          />
                        </div>
                        {errors.budget && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.budget.message}
                          </p>
                        )}
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex justify-between items-center pt-4 border-t border-border-gray/60 gap-4">
                        <Button
                          variant="outline"
                          size="md"
                          type="button"
                          onClick={handleBack}
                          className="flex items-center gap-1.5 w-1/2 sm:w-auto justify-center"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </Button>
                        <Button
                          variant="primary"
                          size="md"
                          type="button"
                          onClick={handleContinue}
                          className="flex items-center gap-1.5 w-1/2 sm:w-auto justify-center"
                        >
                          <span>Continue</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Immigration Interest */}
                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5 md:space-y-6"
                    >
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-800">Immigration Interest</h3>
                        <p className="text-xs text-gray-500 font-medium">Specify the destination country, preferred visa category, and score ranges.</p>
                      </div>

                      {/* Country choice */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Which country are you interested in?
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {(["Germany", "Canada", "Australia", "UK"] as const).map((country) => (
                            <RedOptionCard
                              key={country}
                              title={country}
                              selected={formValues.interestedCountry === country}
                              onClick={() => {
                                setValue("interestedCountry", country);
                                clearErrors("interestedCountry");
                              }}
                            />
                          ))}
                        </div>
                        {errors.interestedCountry && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.interestedCountry.message}
                          </p>
                        )}
                      </div>

                      {/* Preferred Visa */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Preferred Visa Type
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                          {(["Job Seeker Visa", "PR", "Student Visa", "Work Visa"] as const).map((visa) => (
                            <RedOptionCard
                              key={visa}
                              title={visa}
                              selected={formValues.preferredVisa === visa}
                              onClick={() => {
                                setValue("preferredVisa", visa);
                                clearErrors("preferredVisa");
                              }}
                            />
                          ))}
                        </div>
                        {errors.preferredVisa && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.preferredVisa.message}
                          </p>
                        )}
                      </div>

                      {/* Passport ownership */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Do you have a passport?
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <RedOptionCard
                            title="Yes"
                            selected={formValues.hasPassport === "Yes"}
                            onClick={() => {
                              setValue("hasPassport", "Yes");
                              clearErrors("hasPassport");
                            }}
                          />
                          <RedOptionCard
                            title="No"
                            selected={formValues.hasPassport === "No"}
                            onClick={() => {
                              setValue("hasPassport", "No");
                              clearErrors("hasPassport");
                            }}
                          />
                        </div>
                        {errors.hasPassport && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.hasPassport.message}
                          </p>
                        )}
                      </div>

                      {/* IELTS Score */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          IELTS Score
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {(["Not Attempted", "5-6", "6-7", "7+"] as const).map((score) => (
                            <RedOptionCard
                              key={score}
                              title={score}
                              selected={formValues.ieltsScore === score}
                              onClick={() => {
                                setValue("ieltsScore", score);
                                clearErrors("ieltsScore");
                              }}
                            />
                          ))}
                        </div>
                        {errors.ieltsScore && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.ieltsScore.message}
                          </p>
                        )}
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex justify-between items-center pt-4 border-t border-border-gray/60 gap-4">
                        <Button
                          variant="outline"
                          size="md"
                          type="button"
                          onClick={handleBack}
                          className="flex items-center gap-1.5 w-1/2 sm:w-auto justify-center"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </Button>
                        <Button
                          variant="primary"
                          size="md"
                          type="button"
                          onClick={handleContinue}
                          className="flex items-center gap-1.5 w-1/2 sm:w-auto justify-center"
                        >
                          <span>Continue</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Goals & Timeline */}
                  {step === 4 && (
                    <motion.div
                      key="step-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5 md:space-y-6"
                    >
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-800">Goals & Timeline</h3>
                        <p className="text-xs text-gray-500 font-medium">Specify how soon you target to relocate and your primary motivation.</p>
                      </div>

                      {/* How soon? */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          How soon do you want to move? *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {(["Within 30 days", "Within 3 months", "Within 6 months"] as const).map((timeline) => (
                            <RedOptionCard
                              key={timeline}
                              title={timeline}
                              selected={formValues.moveTimeline === timeline}
                              onClick={() => {
                                setValue("moveTimeline", timeline);
                                clearErrors("moveTimeline");
                              }}
                            />
                          ))}
                        </div>
                        {errors.moveTimeline && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.moveTimeline.message}
                          </p>
                        )}
                      </div>

                      {/* Looking for? */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          What are you looking for? *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {(["Full migration service", "Eligibility check only", "Still researching"] as const).map((srv) => (
                            <RedOptionCard
                              key={srv}
                              title={srv}
                              selected={formValues.migrationService === srv}
                              onClick={() => {
                                setValue("migrationService", srv);
                                clearErrors("migrationService");
                              }}
                            />
                          ))}
                        </div>
                        {errors.migrationService && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.migrationService.message}
                          </p>
                        )}
                      </div>

                      {/* Main Reason? */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Main reason for moving *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {(["Career & salary", "Settlement", "Children's future", "Quality of life"] as const).map((reason) => (
                            <RedOptionCard
                              key={reason}
                              title={reason}
                              selected={formValues.reasonForMoving === reason}
                              onClick={() => {
                                setValue("reasonForMoving", reason);
                                clearErrors("reasonForMoving");
                              }}
                            />
                          ))}
                        </div>
                        {errors.reasonForMoving && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.reasonForMoving.message}
                          </p>
                        )}
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex justify-between items-center pt-4 border-t border-border-gray/60 gap-4">
                        <Button
                          variant="outline"
                          size="md"
                          type="button"
                          onClick={handleBack}
                          className="flex items-center gap-1.5 w-1/2 sm:w-auto justify-center"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </Button>
                        <Button
                          variant="primary"
                          size="md"
                          type="button"
                          onClick={handleContinue}
                          className="flex items-center gap-1.5 w-1/2 sm:w-auto justify-center"
                        >
                          <span>Continue</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Call Booking details */}
                  {step === 5 && (
                    <motion.div
                      key="step-5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5 md:space-y-6"
                    >
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-gray-800">Lock in your free counselling slot</h3>
                        <p className="text-xs text-gray-500 font-medium">Select your preferred slot calendar, language support, and call channel.</p>
                      </div>

                      {/* Consultation Slot selection */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          When can you take a 30-min call? *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {(["Today", "Tomorrow", "This week", "Next week"] as const).map((slot) => (
                            <RedOptionCard
                              key={slot}
                              title={slot}
                              selected={formValues.consultationSlot === slot}
                              onClick={() => {
                                setValue("consultationSlot", slot);
                                clearErrors("consultationSlot");
                              }}
                            />
                          ))}
                        </div>
                        {errors.consultationSlot && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.consultationSlot.message}
                          </p>
                        )}
                      </div>

                      {/* Language Selection */}
                      <RedFormSelect
                        label="Preferred Language *"
                        placeholder="Select language option..."
                        options={languageOptions}
                        icon={Globe}
                        register={register("preferredLanguage")}
                        error={errors.preferredLanguage?.message}
                      />

                      {/* Mode of Consultation */}
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Mode of Consultation *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {(["Phone", "Video", "In-person"] as const).map((mode) => (
                            <RedOptionCard
                              key={mode}
                              title={mode}
                              selected={formValues.consultationMode === mode}
                              onClick={() => {
                                setValue("consultationMode", mode);
                                clearErrors("consultationMode");
                              }}
                            />
                          ))}
                        </div>
                        {errors.consultationMode && (
                          <p className="text-xxs text-red-500 font-bold mt-1">
                            {errors.consultationMode.message}
                          </p>
                        )}
                      </div>

                      {/* API Error alerts */}
                      {apiError && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-xl border border-red-200 text-xs font-bold text-left flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 shrink-0" />
                          <span>{apiError}</span>
                        </div>
                      )}

                      {/* Final Navigation Buttons */}
                      <div className="flex justify-between items-center pt-4 border-t border-border-gray/60 gap-4">
                        <Button
                          variant="outline"
                          size="md"
                          type="button"
                          onClick={handleBack}
                          disabled={isSubmitting}
                          className="flex items-center gap-1.5 w-1/2 sm:w-auto justify-center"
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span>Back</span>
                        </Button>
                        <Button
                          variant="primary"
                          size="md"
                          type="submit"
                          disabled={isSubmitting}
                          className="flex items-center gap-1.5 shadow-md shadow-primary/20 cursor-pointer justify-center w-1/2 sm:w-auto"
                        >
                          <span>{isSubmitting ? "Booking My Call..." : "Book My Free Call"}</span>
                          {isSubmitting ? (
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                          ) : (
                            <Check className="h-4 w-4 shrink-0" strokeWidth={3} />
                          )}
                        </Button>
                      </div>
                    </motion.div>
                  )}

                </form>
              ) : (
                // Success screen inside the Homepage CTA box
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className="text-center py-6 space-y-6"
                >
                  <div className="mx-auto bg-primary/10 text-primary p-4.5 rounded-full w-fit shadow-subtle border border-primary/15 animate-bounce">
                    <Check className="h-10 w-10 animate-draw" strokeWidth={3.5} />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">
                      Counselling Request Booked!
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold max-w-sm mx-auto leading-relaxed">
                      Your free Germany Visa Eligibility assessment has been successfully submitted. Our dedicated advisor will reach out shortly.
                    </p>
                  </div>

                  {/* Visual checklist on success */}
                  <div className="bg-accent-gray border border-border-gray/70 p-5 rounded-2xl max-w-md mx-auto text-left space-y-4">
                    <h4 className="text-xxs font-bold uppercase tracking-wider text-primary">
                      Next Step Process Outline:
                    </h4>
                    <div className="space-y-3 text-xs font-semibold text-gray-600">
                      <div className="flex gap-2.5 items-center">
                        <FileSpreadsheet className="h-4 w-4 text-primary shrink-0" />
                        <span>Profile Evaluation Checklist prepared</span>
                      </div>
                      <div className="flex gap-2.5 items-center">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <span>Dedicated German visa slot locked</span>
                      </div>
                      <div className="flex gap-2.5 items-center">
                        <PhoneCall className="h-4 w-4 text-primary shrink-0" />
                        <span>Look out for a direct callback in 24 hours</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="mx-auto block"
                  >
                    Submit Another Profile
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

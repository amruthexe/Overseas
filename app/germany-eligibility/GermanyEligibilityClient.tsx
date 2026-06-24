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
  Compass, 
  Award, 
  Clock, 
  MessageSquare, 
  Calendar, 
  Volume2,
  Globe
} from "lucide-react";

import { ProgressBar } from "@/components/eligibility/ProgressBar";
import { StepLayout } from "@/components/eligibility/StepLayout";
import { FormInput } from "@/components/eligibility/FormInput";
import { FormSelect } from "@/components/eligibility/FormSelect";
import { OptionCard } from "@/components/eligibility/OptionCard";
import { StepButtons } from "@/components/eligibility/StepButtons";
import { SuccessScreen } from "@/components/eligibility/SuccessScreen";

import { GermanyEligibilityLead } from "@/types/eligibility";
import { 
  step1Schema, 
  step2Schema, 
  step3Schema, 
  step4Schema, 
  step5Schema 
} from "@/lib/eligibility-schema";

export default function GermanyEligibilityClient() {
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
      interestedCountry: undefined,
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

  const handleContinue = async () => {
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
      
      window.scrollTo({ top: 120, behavior: "smooth" });
      return;
    }

    const currentFields = Object.keys(currentSchema.shape) as Array<keyof GermanyEligibilityLead>;
    currentFields.forEach((field) => clearErrors(field));
    setStep((prev) => prev + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
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
        throw new Error(resData.error || "Failed to submit eligibility check details.");
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "An unexpected error occurred. Please try again.");
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

  const ageOptions = [
    { label: "18 - 24 Years", value: "18-24" },
    { label: "25 - 30 Years", value: "25-30" },
    { label: "31 - 40 Years", value: "31-40" },
    { label: "40+ Years", value: "40+" }
  ];

  const educationOptions = [
    { label: "10th Grade / Secondary School", value: "10th" },
    { label: "Intermediate / 12th Grade", value: "Intermediate" },
    { label: "Technical Diploma", value: "Diploma" },
    { label: "Bachelor's Degree", value: "Bachelor's" },
    { label: "Master's Degree", value: "Master's" },
    { label: "PhD / Doctorate", value: "PhD" }
  ];

  const experienceOptions = [
    { label: "Fresher / No Work Experience", value: "Fresher" },
    { label: "1 - 2 Years", value: "1-2 years" },
    { label: "3 - 5 Years", value: "3-5 years" },
    { label: "5 - 10 Years", value: "5-10 years" },
    { label: "10+ Years", value: "10+" }
  ];

  const stateOptions = [
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Assam", value: "Assam" },
    { label: "Bihar", value: "Bihar" },
    { label: "Chhattisgarh", value: "Chhattisgarh" },
    { label: "Goa", value: "Goa" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Haryana", value: "Haryana" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Kerala", value: "Kerala" },
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Manipur", value: "Manipur" },
    { label: "Meghalaya", value: "Meghalaya" },
    { label: "Mizoram", value: "Mizoram" },
    { label: "Nagaland", value: "Nagaland" },
    { label: "Odisha", value: "Odisha" },
    { label: "Punjab", value: "Punjab" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Sikkim", value: "Sikkim" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Telangana", value: "Telangana" },
    { label: "Tripura", value: "Tripura" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "West Bengal", value: "West Bengal" },
    { label: "Andaman & Nicobar Islands", value: "Andaman & Nicobar Islands" },
    { label: "Chandigarh", value: "Chandigarh" },
    { label: "Dadra & Nagar Haveli and Daman & Diu", value: "Dadra & Nagar Haveli and Daman & Diu" },
    { label: "Delhi", value: "Delhi" },
    { label: "Jammu & Kashmir", value: "Jammu & Kashmir" },
    { label: "Ladakh", value: "Ladakh" },
    { label: "Lakshadweep", value: "Lakshadweep" },
    { label: "Puducherry", value: "Puducherry" },
  ];

  const designationOptions = [
    { label: "Software Engineer / IT Professional", value: "Software Engineer" },
    { label: "Cybersecurity Analyst", value: "Cybersecurity Analyst" },
    { label: "Data Analyst / Scientist", value: "Data Analyst" },
    { label: "Mechanical Engineer", value: "Mechanical Engineer" },
    { label: "Nurse / Healthcare Professional", value: "Nurse" },
    { label: "Accountant / Finance Professional", value: "Accountant" },
    { label: "Other Profile", value: "Other" }
  ];

  const countryOptions = [
    { label: "United States", value: "USA" },
    { label: "United Kingdom", value: "United Kingdom" },
    { label: "Canada", value: "Canada" },
    { label: "Australia", value: "Australia" },
    { label: "Germany", value: "Germany" },
    { label: "Ireland", value: "Ireland" },
    { label: "France", value: "France" },
    { label: "Netherlands", value: "Netherlands" },
    { label: "Singapore", value: "Singapore" },
    { label: "Malaysia", value: "Malaysia" },
    { label: "Russia", value: "Russia" },
    { label: "Dubai (UAE)", value: "Dubai (UAE)" },
    { label: "Latvia", value: "Latvia" },
    { label: "Poland", value: "Poland" },
    { label: "Ukraine", value: "Ukraine" },
    { label: "Slovakia", value: "Slovakia" }
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {!isSubmitted && <ProgressBar currentStep={step} />}

      <main className="flex-grow max-w-3xl mx-auto px-4 py-8 md:py-12 w-full flex items-center justify-center pb-28 sm:pb-12">
        <div className="w-full">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Step 1: Your Details */}
                {step === 1 && (
                  <StepLayout
                    key="step-1"
                    title="Let's start with the basics"
                    subtitle="We'll use these to schedule your free study abroad counselling call."
                  >
                    <div className="space-y-4 md:space-y-5">
                      <FormInput
                        label="Full Name *"
                        placeholder="Enter your legal full name"
                        icon={User}
                        register={register("fullName")}
                        error={errors.fullName?.message}
                      />
                      <FormInput
                        label="Email Address *"
                        placeholder="name@example.com"
                        type="email"
                        icon={Mail}
                        register={register("email")}
                        error={errors.email?.message}
                      />
                      <FormInput
                        label="Phone Number *"
                        placeholder="e.g. +91 98765 43210"
                        type="tel"
                        icon={Phone}
                        register={register("phone")}
                        error={errors.phone?.message}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormSelect
                          label="Your Age *"
                          placeholder="Select Age Bracket"
                          options={ageOptions}
                          icon={Clock}
                          register={register("age")}
                          error={errors.age?.message}
                        />
                        <FormSelect
                          label="Highest Education *"
                          placeholder="Select Degree"
                          options={educationOptions}
                          icon={GraduationCap}
                          register={register("education")}
                          error={errors.education?.message}
                        />
                        <FormSelect
                          label="Years of Experience *"
                          placeholder="Select Tenure"
                          options={experienceOptions}
                          icon={Briefcase}
                          register={register("experience")}
                          error={errors.experience?.message}
                        />
                      </div>

                      <StepButtons 
                        continueText="Continue" 
                        onBack={undefined}
                      />
                    </div>
                  </StepLayout>
                )}

                {/* Step 2: Location, Role & Budget */}
                {step === 2 && (
                  <StepLayout
                    key="step-2"
                    title="Location, role & budget"
                    subtitle="Specify where you reside, your target sector, and expected visa capital."
                  >
                    <div className="space-y-5 md:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormSelect
                          label="Select Indian State *"
                          placeholder="Choose State"
                          options={stateOptions}
                          icon={MapPin}
                          register={register("state")}
                          error={errors.state?.message}
                        />
                        <FormSelect
                          label="Current Designation *"
                          placeholder="Choose Profession"
                          options={designationOptions}
                          icon={Briefcase}
                          register={register("designation")}
                          error={errors.designation?.message}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Do you speak English? *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <OptionCard
                            title="Yes"
                            selected={formValues.speaksEnglish === "Yes"}
                            onClick={() => {
                              setValue("speaksEnglish", "Yes");
                              clearErrors("speaksEnglish");
                            }}
                            icon={Volume2}
                          />
                          <OptionCard
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

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Your Visa Budget *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <OptionCard
                            title="₹55K - ₹1L"
                            description="Initial assessment budget"
                            selected={formValues.budget === "₹55K - ₹1L"}
                            onClick={() => {
                              setValue("budget", "₹55K - ₹1L");
                              clearErrors("budget");
                            }}
                          />
                          <OptionCard
                            title="₹1L - ₹2L"
                            description="Standard consulting fees"
                            selected={formValues.budget === "₹1L - ₹2L"}
                            onClick={() => {
                              setValue("budget", "₹1L - ₹2L");
                              clearErrors("budget");
                            }}
                          />
                          <OptionCard
                            title="Above ₹2L"
                            description="Premium migration suite"
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

                      <StepButtons continueText="Continue" onBack={handleBack} />
                    </div>
                  </StepLayout>
                )}

                {/* Step 3: Immigration Interest */}
                {step === 3 && (
                  <StepLayout
                    key="step-3"
                    title="Immigration Interests"
                    subtitle="Specify the visa scopes and profiles you are interested in."
                  >
                    <div className="space-y-5 md:space-y-6">
                      
                      <FormSelect
                        label="Which country are you interested in? *"
                        placeholder="Select destination country..."
                        options={countryOptions}
                        icon={Globe}
                        register={register("interestedCountry")}
                        error={errors.interestedCountry?.message}
                      />

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Preferred Visa Type *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {(["Job Seeker Visa", "PR", "Student Visa", "Work Visa"] as const).map((visa) => (
                            <OptionCard
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

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Do you have a passport? *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <OptionCard
                            title="Yes"
                            selected={formValues.hasPassport === "Yes"}
                            onClick={() => {
                              setValue("hasPassport", "Yes");
                              clearErrors("hasPassport");
                            }}
                          />
                          <OptionCard
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

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          IELTS Score Status *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {(["Not Attempted", "5-6", "6-7", "7+"] as const).map((score) => (
                            <OptionCard
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

                      <StepButtons continueText="Continue" onBack={handleBack} />
                    </div>
                  </StepLayout>
                )}

                {/* Step 4: Goals & Timeline */}
                {step === 4 && (
                  <StepLayout
                    key="step-4"
                    title="Goals & Timeline"
                    subtitle="Share how soon you intend to relocate and your primary motivation."
                  >
                    <div className="space-y-5 md:space-y-6">
                      
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          How soon do you want to move? *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {(["Within 30 days", "Within 3 months", "Within 6 months"] as const).map((timeline) => (
                            <OptionCard
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

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          What are you looking for? *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {(["Full migration service", "Eligibility check only", "Still researching"] as const).map((srv) => (
                            <OptionCard
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

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Main reason for moving *
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          {(["Career & salary", "Settlement", "Children's future", "Quality of life"] as const).map((reason) => (
                            <OptionCard
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

                      <StepButtons continueText="Continue" onBack={handleBack} />
                    </div>
                  </StepLayout>
                )}

                {/* Step 5: Book Your Free Call */}
                {step === 5 && (
                  <StepLayout
                    key="step-5"
                    title="Lock in your free counselling slot"
                    subtitle="Register your preferred schedule, languages, and interaction mode."
                  >
                    <div className="space-y-5 md:space-y-6">
                      
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          When can you take a 30-min call? *
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {(["Today", "Tomorrow", "This week", "Next week"] as const).map((slot) => (
                            <OptionCard
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

                      <FormSelect
                        label="Preferred Language *"
                        placeholder="Choose language you are comfortable in"
                        options={languageOptions}
                        icon={Globe}
                        register={register("preferredLanguage")}
                        error={errors.preferredLanguage?.message}
                      />

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                          Mode of Consultation *
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {(["Phone", "Video", "In-person"] as const).map((mode) => (
                            <OptionCard
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

                      {apiError && (
                        <div className="bg-red-50 text-red-650 p-4 rounded-xl border border-red-200 text-sm font-semibold flex items-center gap-2">
                          <span>{apiError}</span>
                        </div>
                      )}

                      <StepButtons 
                        continueText="Book My Free Call" 
                        onBack={handleBack} 
                        isLastStep={true}
                        isSubmitting={isSubmitting}
                      />
                    </div>
                  </StepLayout>
                )}

              </form>
            ) : (
              <SuccessScreen onReset={handleReset} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

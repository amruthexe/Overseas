import { z } from "zod";

// Step 1: Basics Schema
export const step1Schema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters long")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[0-9\s-]{10,15}$/, "Please enter a valid phone number (10-15 digits)"),
  age: z.enum(["18-24", "25-30", "31-40", "40+"] as const, {
    message: "Please select your age group",
  }),
  education: z.enum(["10th", "Intermediate", "Diploma", "Bachelor's", "Master's", "PhD"] as const, {
    message: "Please select highest education level",
  }),
  experience: z.enum(["Fresher", "1-2 years", "3-5 years", "5-10 years", "10+"] as const, {
    message: "Please select years of experience",
  }),
});

// Step 2: Location, Role & Budget Schema
export const step2Schema = z.object({
  state: z.string().min(1, "Please select your state"),
  designation: z.enum(
    ["Software Engineer", "Cybersecurity Analyst", "Data Analyst", "Mechanical Engineer", "Nurse", "Accountant", "Other"] as const,
    { 
      message: "Please select your designation",
    }
  ),
  speaksEnglish: z.enum(["Yes", "No"] as const, {
    message: "Please specify if you speak English",
  }),
  budget: z.enum(["₹55K - ₹1L", "₹1L - ₹2L", "Above ₹2L"] as const, {
    message: "Please select a budget range",
  }),
});

// Step 3: Immigration Interest Schema
export const step3Schema = z.object({
  interestedCountry: z.enum([
    "USA",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "Ireland",
    "France",
    "Netherlands",
    "Singapore",
    "Malaysia",
    "Russia",
    "Dubai (UAE)",
    "Latvia",
    "Poland",
    "Ukraine",
    "Slovakia"
  ] as const, {
    message: "Please select a country of interest",
  }),
  preferredVisa: z.enum(["Job Seeker Visa", "PR", "Student Visa", "Work Visa"] as const, {
    message: "Please select preferred visa type",
  }),
  hasPassport: z.enum(["Yes", "No"] as const, {
    message: "Please specify if you have a passport",
  }),
  ieltsScore: z.enum(["Not Attempted", "5-6", "6-7", "7+"] as const, {
    message: "Please select your IELTS score status",
  }),
});

// Step 4: Goals & Timeline Schema
export const step4Schema = z.object({
  moveTimeline: z.enum(["Within 30 days", "Within 3 months", "Within 6 months"] as const, {
    message: "Please select your target move timeline",
  }),
  migrationService: z.enum(["Full migration service", "Eligibility check only", "Still researching"] as const, {
    message: "Please specify what service you are looking for",
  }),
  reasonForMoving: z.enum(["Career & salary", "Settlement", "Children's future", "Quality of life"] as const, {
    message: "Please specify your main reason for moving",
  }),
});

// Step 5: Book Your Free Call Schema
export const step5Schema = z.object({
  consultationSlot: z.enum(["Today", "Tomorrow", "This week", "Next week"] as const, {
    message: "Please select a consultation day slot",
  }),
  preferredLanguage: z.enum(
    ["English", "Hindi", "Telugu", "Tamil", "Kannada", "Malayalam", "Marathi", "Bengali", "Gujarati"] as const,
    { 
      message: "Please select your preferred language",
    }
  ),
  consultationMode: z.enum(["Phone", "Video", "In-person"] as const, {
    message: "Please select your preferred consultation mode",
  }),
});

// Combined Schema representing the full lead validation
export const germanyEligibilitySchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
  ...step4Schema.shape,
  ...step5Schema.shape,
});
export type GermanyEligibilitySchemaType = z.infer<typeof germanyEligibilitySchema>;
export type Step1SchemaType = z.infer<typeof step1Schema>;
export type Step2SchemaType = z.infer<typeof step2Schema>;
export type Step3SchemaType = z.infer<typeof step3Schema>;
export type Step4SchemaType = z.infer<typeof step4Schema>;
export type Step5SchemaType = z.infer<typeof step5Schema>;

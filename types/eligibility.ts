export type AgeGroup = "18-24" | "25-30" | "31-40" | "40+";
export type EducationLevel = "10th" | "Intermediate" | "Diploma" | "Bachelor's" | "Master's" | "PhD";
export type ExperienceLevel = "Fresher" | "1-2 years" | "3-5 years" | "5-10 years" | "10+";

export type ProfessionalDesignation = 
  | "Software Engineer" 
  | "Cybersecurity Analyst" 
  | "Data Analyst" 
  | "Mechanical Engineer" 
  | "Nurse" 
  | "Accountant" 
  | "Other";

export type VisaBudget = "₹55K - ₹1L" | "₹1L - ₹2L" | "Above ₹2L";

export type CountryChoice = "Germany" | "Canada" | "Australia" | "UK";
export type VisaType = "Job Seeker Visa" | "PR" | "Student Visa" | "Work Visa";

export type IELTSScoreRange = "Not Attempted" | "5-6" | "6-7" | "7+";

export type RelocationTimeline = "Within 30 days" | "Within 3 months" | "Within 6 months";
export type ServiceNeed = "Full migration service" | "Eligibility check only" | "Still researching";
export type RelocationReason = "Career & salary" | "Settlement" | "Children's future" | "Quality of life";

export type CallSlot = "Today" | "Tomorrow" | "This week" | "Next week";
export type LanguagePreference = 
  | "English" 
  | "Hindi" 
  | "Telugu" 
  | "Tamil" 
  | "Kannada" 
  | "Malayalam" 
  | "Marathi" 
  | "Bengali" 
  | "Gujarati";

export type ConsultationMode = "Phone" | "Video" | "In-person";

export interface GermanyEligibilityLead {
  // Step 1: Your Details
  fullName: string;
  email: string;
  phone: string;
  age: AgeGroup;
  education: EducationLevel;
  experience: ExperienceLevel;

  // Step 2: Location, Role & Budget
  state: string;
  designation: ProfessionalDesignation;
  speaksEnglish: "Yes" | "No";
  budget: VisaBudget;

  // Step 3: Immigration Interest
  interestedCountry: CountryChoice;
  preferredVisa: VisaType;
  hasPassport: "Yes" | "No";
  ieltsScore: IELTSScoreRange;

  // Step 4: Goals & Timeline
  moveTimeline: RelocationTimeline;
  migrationService: ServiceNeed;
  reasonForMoving: RelocationReason;

  // Step 5: Book Your Free Call
  consultationSlot: CallSlot;
  preferredLanguage: LanguagePreference;
  consultationMode: ConsultationMode;
}

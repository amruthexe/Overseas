import {
  GraduationCap,
  FileText,
  Award,
  Compass,
  Briefcase,
  FileCheck,
  CheckCircle,
  Clock,
  Send,
  UserCheck,
  ShieldCheck,
  Code
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any; // Lucide icon component
  benefits: string[];
}

export interface Destination {
  id: string;
  country: string;
  code: string;
  universitiesCount: number;
  image: string;
  popularCourses: string[];
  visaSuccess: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: any;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  university: string;
  course: string;
  rating: number;
  review: string;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "visa" | "admission" | "scholarship";
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const SUCCESS_STATS: Stat[] = [
  {
    id: "students",
    value: 5000,
    suffix: "+",
    label: "Students Assisted",
    description: "Successfully placed in global institutions"
  },
  {
    id: "universities",
    value: 1200,
    suffix: "+",
    label: "Partner Universities",
    description: "Direct tie-ups across the globe"
  },
  {
    id: "countries",
    value: 15,
    suffix: "+",
    label: "Destinations Available",
    description: "Top-tier educational hubs"
  },
  {
    id: "visa-success",
    value: 98,
    suffix: "%",
    label: "Visa Success Rate",
    description: "Industry-leading approval rates"
  }
];



export const SERVICES: Service[] = [
  {
    id: "admissions",
    title: "Study Abroad Admissions",
    description: "End-to-end guidance through the complex application process of top global universities.",
    icon: GraduationCap,
    benefits: ["Profile evaluation", "University shortlisting", "Application review", "Offer letter tracking"]
  },
  {
    id: "visa",
    title: "Visa Assistance",
    description: "Hassle-free student visa documentation, financial profiling, and mock interview preparations.",
    icon: FileCheck,
    benefits: ["Document checklisting", "Financial planning guidance", "Visa slot booking", "Mock interviews"]
  },
  {
    id: "it-jobs",
    title: "IT Jobs",
    description: "Direct placement assistance and career guidance for software developers, system architects, and tech professionals globally.",
    icon: Code,
    benefits: ["Global tech job listings", "Technical interview prep", "Resume & LinkedIn optimization", "Sponsorship & visa support"]
  },
  {
    id: "non-it-jobs",
    title: "Non-IT Jobs",
    description: "Placement opportunities and support for professionals in engineering, healthcare, management, hospitality, and other non-technical domains.",
    icon: Briefcase,
    benefits: ["Global sector opportunities", "Domain mock interviews", "Credential evaluations", "Direct employer hiring events"]
  },
  {
    id: "counselling",
    title: "Career Counselling",
    description: "Identify your true potential and align your interests with high-growth global career paths.",
    icon: Compass,
    benefits: ["Psychometric evaluations", "Global job market analysis", "Post-study work visa updates", "Alumni network access"]
  },
  {
  id: "application-support",
  title: "Application Assistance",
  description: "Build strong applications that maximize your chances of admission to top universities.",
  icon: FileText,
  benefits: [
    "Application review",
    "Document preparation",
    "SOP & LOR guidance",
    "Application tracking support"
  ]
}
];

export const DESTINATIONS: Destination[] = [
  {
    id: "usa",
    country: "USA",
    code: "US",
    universitiesCount: 400,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
    popularCourses: ["Computer Science", "Data Science", "MBA", "Finance"],
    visaSuccess: "96%"
  },
  {
    id: "uk",
    country: "United Kingdom",
    code: "UK",
    universitiesCount: 150,
    image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=600&q=80",
    popularCourses: ["Business Analytics", "Law", "Medicine", "Engineering"],
    visaSuccess: "98%"
  },
  {
    id: "canada",
    country: "Canada",
    code: "CA",
    universitiesCount: 90,
    image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80",
    popularCourses: ["IT & Software", "Biotechnology", "Business Admin", "HRM"],
    visaSuccess: "97%"
  },
  {
    id: "australia",
    country: "Australia",
    code: "AU",
    universitiesCount: 40,
    image: "/Australia.jpg",
    popularCourses: ["Accounting", "Healthcare", "Data Analytics", "Engineering"],
    visaSuccess: "95%"
  },
  {
    id: "germany",
    country: "Germany",
    code: "DE",
    universitiesCount: 120,
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    popularCourses: ["Mechanical Engg", "Automotive", "AI", "Physics"],
    visaSuccess: "98%"
  },
  {
    id: "ireland",
    country: "Ireland",
    code: "IE",
    universitiesCount: 30,
    image: "https://hblimg.mmtcdn.com/content/hubble/img/maingalleryimgs/mmt/activities/t_trp/m_Dublin_1_l_667_1000.jpg?im=Resize=(320,228)",
    popularCourses: ["Software Engineering", "Cloud Computing", "Pharmaceuticals", "Finance"],
    visaSuccess: "99%"
  },
  {
    id: "singapore",
    country: "Singapore",
    code: "SG",
    universitiesCount: 10,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80",
    popularCourses: ["Computer Science", "Business Admin", "Finance", "Engineering"],
    visaSuccess: "97%"
  },
  {
    id: "malaysia",
    country: "Malaysia",
    code: "MY",
    universitiesCount: 25,
    image: "/malaysia.jpg",
    popularCourses: ["Information Technology", "Business Management", "Engineering"],
    visaSuccess: "96%"
  },
  {
    id: "russia",
    country: "Russia",
    code: "RU",
    universitiesCount: 80,
    image: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?auto=format&fit=crop&w=600&q=80",
    popularCourses: ["Medicine (MBBS)", "Aeronautical Engg", "Computer Science"],
    visaSuccess: "94%"
  },
  {
    id: "dubai",
    country: "Dubai (UAE)",
    code: "AE",
    universitiesCount: 30,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    popularCourses: ["Hospitality Management", "Business Admin", "Civil Engineering"],
    visaSuccess: "98%"
  },
  {
    id: "latvia",
    country: "Latvia",
    code: "LV",
    universitiesCount: 15,
    image: "/Latvia.jpg",
    popularCourses: ["Medicine", "Computer Systems", "Aviation Management"],
    visaSuccess: "95%"
  },
  {
    id: "poland",
    country: "Poland",
    code: "PL",
    universitiesCount: 45,
    image: "/Poland.jpeg",
    popularCourses: ["Medicine", "Engineering", "Data Science", "Business"],
    visaSuccess: "96%"
  },
  {
    id: "ukraine",
    country: "Ukraine",
    code: "UA",
    universitiesCount: 35,
    image: "https://images.unsplash.com/photo-1561542320-9a18cd340469?auto=format&fit=crop&w=600&q=80",
    popularCourses: ["Medicine (MBBS)", "Software Engineering", "Business"],
    visaSuccess: "92%"
  },
  {
    id: "slovakia",
    country: "Slovakia",
    code: "SK",
    universitiesCount: 20,
    image: "/Slovakia.jpg",
    popularCourses: ["Automotive Engg", "Computer Science", "Management"],
    visaSuccess: "95%"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Counsellors",
    description: "Get guided by industry veterans who have successfully placed thousands of students in world-renowned universities.",
    icon: UserCheck
  },
  {
    title: "High Visa Success Rate",
    description: "Our immaculate documentation and intensive mock sessions ensure a 98% student visa approval rate.",
    icon: ShieldCheck
  },
  {
    title: "Personalized Mentorship",
    description: "No two students are the same. We curate a completely tailored roadmap specific to your scores, budget, and long-term career goals.",
    icon: CheckCircle
  },
  {
    title: "Affordable & Transparent Services",
    description: "Premium global education consulting shouldn't cost a fortune. Experience complete pricing transparency with no hidden charges.",
    icon: Clock
  },
  {
    title: "End-to-End Guidance",
    description: "From shortlisting universities to drafting essays, securing education loans, visa filings, and post-landing accommodation support.",
    icon: Send
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Free Consultation",
    description: "Sit down with our career experts to review your academic scores, budget constraints, and career interests to chart your initial path.",
    icon: UserCheck
  },
  {
    step: 2,
    title: "University Selection",
    description: "Receive a tailored list of 'Ambitious, Target, and Safe' universities that perfectly align with your aspirations and profile.",
    icon: Compass
  },
  {
    step: 3,
    title: "Application Process",
    description: "We edit your SOPs/LORs to absolute perfection and professionally submit and track your applications to ensure quick offer letters.",
    icon: FileText
  },
  {
    step: 4,
    title: "Visa Filing",
    description: "Our visa specialists guide you step-by-step through fee payments, financial structuring, document upload, and intensive mock interviews.",
    icon: ShieldCheck
  },
  {
    step: 5,
    title: "Fly Abroad",
    description: "Attend our comprehensive pre-departure briefings. Get connected with peer networks, and secure accommodation and airport pickup.",
    icon: GraduationCap
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Aarav Sharma",
    country: "USA",
    university: "Stanford University",
    course: "M.S. in Computer Science",
    rating: 5,
    review: "Bhavitha Overseas Overseas completely transformed my study abroad dream. Their SOP guidance was phenomenal, helping me highlight my project work perfectly. Getting into Stanford was a combined effort, and their visa support was the icing on the cake!",
    image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-2",
    name: "Sneha Patel",
    country: "United Kingdom",
    university: "Imperial College London",
    course: "M.Sc. in Biotechnology",
    rating: 5,
    review: "The entire team was incredibly supportive throughout my university selection process. They did not just suggest generic universities but matched me with the exact professors and labs in the UK. Truly an end-to-end service!",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-3",
    name: "Rahul Nair",
    country: "Canada",
    university: "University of Toronto",
    course: "MBA in Finance",
    rating: 5,
    review: "I was extremely anxious about my visa because of a 2-year career gap. The expert counsellors at Bhavitha Overseas structured my statement of purpose so well that my visa was approved in less than 3 weeks without any queries. Highly recommended!",
    image: "https://images.unsplash.com/photo-1618018352910-72bdafdc7258?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "test-4",
    name: "Priya Das",
    country: "Germany",
    university: "TU Munich",
    course: "M.Sc. in Automotive Engineering",
    rating: 5,
    review: "German public universities require meticulous documentation and strict deadlines. Bhavitha Overseas was on top of everything. They kept me updated on Unit-Assist status and helped me secure DAAD scholarships. Exceptional experience!",
    image: "https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "When should I start the application process for studying abroad?",
    answer: "It is highly recommended to start your study abroad application process at least 8 to 12 months before the intake date. This gives you sufficient time to prepare for language proficiency exams (like IELTS or TOEFL), shortlist universities, write highly polished SOPs, secure LORs, and apply for student visas.",
    category: "admission"
  },
  {
    id: "faq-2",
    question: "What is the minimum score required in IELTS for top-tier universities?",
    answer: "Generally, top-tier global universities require an overall IELTS band score of 6.5 or 7.0, with no individual section score below 6.0. However, some competitive courses or Ivy League universities may require a score of 7.5. We offer specialized IELTS coaching to help you hit these high scores easily.",
    category: "admission"
  },
  {
    id: "faq-3",
    question: "How do I secure an education loan, and what documents are required?",
    answer: "We have direct tie-ups with leading nationalized banks, private banks, and NBFCs. Our financial counsellors help you structure your application, obtain loan pre-approvals, secure collateral-free loans, and prepare necessary documents including offer letters, financial guarantor forms, and academic records.",
    category: "visa"
  },
  {
    id: "faq-4",
    question: "What are the common reasons for student visa rejections, and how can I avoid them?",
    answer: "The most common reasons are incomplete documentation, failure to prove sufficient funds, unclear post-study intent, or poor performance in the visa interview. Bhavitha Overseas Overseas helps you bypass these by offering rigorous profile evaluation, flawless bank balance structuring, and conducting multiple realistic visa mocks.",
    category: "visa"
  },
  {
    id: "faq-5",
    question: "Are there fully-funded scholarships available for international students?",
    answer: "Yes, many countries and universities offer merit-based fully-funded scholarships that cover tuition fees, health insurance, and monthly living stipends (e.g., Fulbright in the USA, Chevening in the UK, and DAAD in Germany). We map your academic profile to these grants and assist with the special scholarship essays.",
    category: "scholarship"
  },
  {
    id: "faq-6",
    question: "Am I allowed to work part-time while studying abroad?",
    answer: "Yes! In major study destinations like the USA, UK, Canada, Australia, and Germany, international students are generally allowed to work up to 20 hours per week during active semesters and full-time (40 hours per week) during semester breaks. This helps cover a major portion of your day-to-day living expenses.",
    category: "scholarship"
  }
];

export const TRUSTED_UNIVERSITIES = [
  {
    name: "United States",
    logoText: "USA",
    country: "United States",
    countryCode: "US",
  },
  {
    name: "United Kingdom",
    logoText: "ENGLAND",
    country: "United Kingdom",
    countryCode: "GB",
  },
  {
    name: "Germany",
    logoText: "GERMANY",
    country: "Germany",
    countryCode: "DE",
  },
  {
    name: "Ireland",
    logoText: "IRELAND",
    country: "Ireland",
    countryCode: "IE",
  },
  {
    name: "Canada",
    logoText: "CANADA",
    country: "Canada",
    countryCode: "CA",
  },
  {
    name: "Australia",
    logoText: "AUSTRALIA",
    country: "Australia",
    countryCode: "AU",
  },
  {
  name: "France",
  logoText: "FRANCE",
  country: "France",
  countryCode: "FR",
},
{
  name: "Netherlands",
  logoText: "NETHERLANDS",
  country: "Netherlands",
  countryCode: "NL",
},
{
  name: "Singapore",
  logoText: "SINGAPORE",
  country: "Singapore",
  countryCode: "SG",
},
{
  name: "Malaysia",
  logoText: "MALAYSIA",
  country: "Malaysia",
  countryCode: "MY",
},
{
  name: "Russia",
  logoText: "RUSSIA",
  country: "Russia",
  countryCode: "RU",
},
{
  name: "Dubai",
  logoText: "DUBAI",
  country: "Dubai (UAE)",
  countryCode: "AE",
},
{
  name: "Latvia",
  logoText: "LATVIA",
  country: "Latvia",
  countryCode: "LV",
},
{
  name: "Poland",
  logoText: "POLAND",
  country: "Poland",
  countryCode: "PL",
},
{
  name: "Ukraine",
  logoText: "UKRAINE",
  country: "Ukraine",
  countryCode: "UA",
},
{
  name: "Slovakia",
  logoText: "SLOVAKIA",
  country: "Slovakia",
  countryCode: "SK",
},
];

export interface JobOpening {
  id: string;
  title: string;
  category: "IT" | "Non-IT";
  location: string;
  company: string;
  salaryRange: string;
  experience: string;
  tags: string[];
}

export const FEATURED_JOBS: JobOpening[] = [
  {
    id: "job-1",
    title: "Software Engineer (Full-Stack)",
    category: "IT",
    location: "Munich, Germany",
    company: "Apex Tech Solutions",
    salaryRange: "€65,000 - €85,000 / year",
    experience: "2-5 years",
    tags: ["React", "Node.js", "TypeScript", "Visa Sponsorship"]
  },
  {
    id: "job-2",
    title: "Data Scientist",
    category: "IT",
    location: "Dublin, Ireland",
    company: "Innova Analytics",
    salaryRange: "€70,000 - €90,000 / year",
    experience: "3+ years",
    tags: ["Python", "Machine Learning", "SQL", "Sponsorship Available"]
  },
  {
    id: "job-3",
    title: "Mechanical Design Engineer",
    category: "Non-IT",
    location: "Stuttgart, Germany",
    company: "AutoWerk Industry",
    salaryRange: "€55,000 - €75,000 / year",
    experience: "2+ years",
    tags: ["CAD/SolidWorks", "Automotive", "German B1 Pref."]
  },
  {
    id: "job-4",
    title: "Registered Nurse (Healthcare)",
    category: "Non-IT",
    location: "London, United Kingdom",
    company: "NHS Trust Partner",
    salaryRange: "£32,000 - £45,000 / year",
    experience: "1+ years",
    tags: ["NHS Registration", "Nursing Degree", "Visa Provided"]
  },
  {
    id: "job-5",
    title: "Cloud Devops Engineer",
    category: "IT",
    location: "Berlin, Germany",
    company: "CloudScale Systems",
    salaryRange: "€75,000 - €95,000 / year",
    experience: "4+ years",
    tags: ["AWS/Azure", "Kubernetes", "CI/CD", "English Speaking"]
  },
  {
    id: "job-6",
    title: "Project Manager (Construction/Engineering)",
    category: "Non-IT",
    location: "Toronto, Canada",
    company: "Vertex Builders",
    salaryRange: "CAD 80,000 - 105,000 / year",
    experience: "5+ years",
    tags: ["PMP", "Civil Engineering", "LMIA Available"]
  }
];
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedUniversities } from "@/components/sections/TrustedUniversities";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedJobsSection } from "@/components/sections/FeaturedJobsSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CounsellingCTASection } from "@/components/sections/CounsellingCTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "Bhavitha Overseas Overseas | Premium Study Abroad & Student Visa Consultants",
  description: 
    "Embark on your global education journey with Bhavitha Overseas Overseas. We offer specialized study abroad counseling, student visa assistance, certified IELTS coaching, SOP/LOR drafting guidance, and merit-based scholarship maps for 1200+ partner universities across USA, UK, Canada, Australia, Germany, and Ireland.",
  keywords: [
    "study abroad consultant",
    "overseas education consultancy",
    "student visa assistance",
    "IELTS coaching classes",
    "SOP LOR writing guidance",
    "study in USA Canada UK Germany",
    "scholarship support international students",
    "Bhavitha Overseas Overseas"
  ],
  authors: [{ name: "Bhavitha Overseas Overseas team" }],
  openGraph: {
    title: "Bhavitha Overseas Overseas | Premium Study Abroad Consultants",
    description: 
      "Secure admissions at Ivy Leagues and top-tier global research hubs. Learn about course intakes, visa applications, and scholarship pathways with our experienced consultants.",
    type: "website",
    locale: "en_US",
    siteName: "Bhavitha Overseas Overseas"
  }
};

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden z-0">
      {/* Global Red Smoke / Glow Background Effects */}
      <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-red-500/8 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "12s" }} />
      <div className="absolute top-[38%] right-[-15%] w-[550px] h-[550px] bg-primary/8 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "10s" }} />
      <div className="absolute top-[55%] left-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "9s" }} />
      <div className="absolute top-[70%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[155px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "11s" }} />
      <div className="absolute top-[85%] left-[-15%] w-[500px] h-[500px] bg-red-500/8 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "13s" }} />
      <div className="absolute bottom-[2%] right-[5%] w-[450px] h-[450px] bg-primary/10 rounded-full blur-[125px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "7s" }} />

      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Structured Single Page Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        
        <TrustedUniversities />
        
        <ServicesSection />
        
        <FeaturedJobsSection />
        
        <DestinationsSection />
        
        <WhyChooseUsSection />
        
        <ProcessSection />
        
        <TestimonialsSection />
        
        <StatsSection />
        
        <CounsellingCTASection />
        
        <FAQSection />
      </main>

      {/* Corporate footer details */}
      <Footer />
    </div>
  );
}

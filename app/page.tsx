import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedUniversities } from "@/components/sections/TrustedUniversities";
import { ServicesSection } from "@/components/sections/ServicesSection";
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
    <div className="flex flex-col min-h-screen">
      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Structured Single Page Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        
        <TrustedUniversities />
        
        <ServicesSection />
        
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

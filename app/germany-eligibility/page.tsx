import React from "react";
import type { Metadata } from "next";
import GermanyEligibilityClient from "./GermanyEligibilityClient";

export const metadata: Metadata = {
  title: "Free Germany & Global Student Visa Eligibility Check | Bhavitha Overseas",
  description: "Check your study abroad and student visa eligibility in 60 seconds. Get a quick profile evaluation for global universities across USA, UK, Canada, Australia, Germany, Latvia, Poland, and Slovakia.",
  keywords: [
    "study abroad eligibility check",
    "student visa eligibility calculator",
    "Germany visa eligibility check",
    "Bhavitha Overseas",
    "overseas education consultants Bapatla"
  ],
  openGraph: {
    title: "Free Study Abroad & Student Visa Eligibility Check | Bhavitha Overseas",
    description: "Check your study abroad and student visa eligibility in 60 seconds. Get a quick profile evaluation for global universities across USA, UK, Canada, Australia, Germany, Latvia, Poland, and Slovakia.",
    type: "website",
  }
};

export default function GermanyEligibilityPage() {
  return <GermanyEligibilityClient />;
}

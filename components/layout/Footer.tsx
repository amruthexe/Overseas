"use client";

import React, { useState } from "react";
import { 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Clock 
} from "lucide-react";
import { Button } from "../ui/Button";

// Custom inline SVG components for social icons to ensure 100% build compatibility
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.54a29 29 0 0 0 .46 5.12 2.78 2.78 0 0 0 1.95 1.96C5.12 19.12 12 19.12 12 19.12s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.12 29 29 0 0 0-.46-5.12z"></path>
    <polygon points="9.75 15.02 15.5 11.54 9.75 8.06 9.75 15.02"></polygon>
  </svg>
);


export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const socialLinks = [
    { icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
    { icon: TwitterIcon, href: "https://twitter.com", label: "Twitter" },
    { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" }
  ];


  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      {/* Top Newsletter & Brand Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-gray-850">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Logo & Pitch */}
          <div className="space-y-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 cursor-pointer text-left focus:outline-none"
            >
              <div className="bg-primary p-2 rounded-xl text-white">
                <Globe className="h-6 w-6" />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Bhavitha <span className="text-primary"> Overseas</span>
              </span>
            </button>
            <p className="text-sm text-gray-400 max-w-md">
              Empowering students since 2012 to cross borders and secure world-class education at leading global institutions.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base md:text-lg font-semibold text-white">
              Stay Updated with Latest Study Abroad News & Intakes
            </h4>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border border-gray-700 text-white rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full sm:max-w-md"
              />
              <Button 
                variant="primary" 
                size="sm" 
                type="submit"
                className="whitespace-nowrap flex items-center gap-2 rounded-full cursor-pointer py-3"
              >
                <span>{subscribed ? "Subscribed!" : "Subscribe"}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("why-choose-us")} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("process")} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  Our Process
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("testimonials")} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  Student Success
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("faq")} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  FAQ Accordion
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  University Admissions
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  Visa Assistance
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  IELTS Coaching
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  SOP & Documentation
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("services")} className="hover:text-primary transition-colors cursor-pointer focus:outline-none">
                  Scholarship Guidance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Get In Touch</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>102 Broadway Chambers, Suite 4B, New York, NY 10007</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+18001234567" className="hover:text-white transition-colors">
                  +1 800 123 4567
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:info@Bhavitha Overseasoverseas.com" className="hover:text-white transition-colors break-all">
                  info@bhavithaoverseasoverseas.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours & Socials */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm">Office Hours</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex gap-2.5 items-center">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Clock className="h-4 w-4 text-transparent shrink-0" />
                <span>Saturday: 10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Clock className="h-4 w-4 text-transparent shrink-0" />
                <span className="text-red-500">Sunday: Closed</span>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="pt-2">
              <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright bar */}
      <div className="bg-gray-950 py-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Bhavitha Overseas Overseas Education Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

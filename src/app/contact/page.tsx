"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown, Send } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What documents are required for company registration in Nepal?",
    answer: "Generally, you need the citizenship copies of the shareholders, a signed power of attorney, proposed company names, objectives, and the signed Memorandum of Association (MoA) and Articles of Association (AoA). For foreign-owned companies, additional FDI approvals from FITTA/IBN are required.",
  },
  {
    question: "How long does it take to register a private limited company?",
    answer: "For a local Nepalese company, registration at the Office of the Company Registrar (OCR) typically takes 5 to 7 business days once all documents are drafted and submitted. Foreign-invested companies take longer due to the preliminary FDI approval process (usually 3 to 4 weeks).",
  },
  {
    question: "What is the minimum investment required for foreign investors (FDI) in Nepal?",
    answer: "Currently, the Government of Nepal has revised the minimum threshold for Foreign Direct Investment (FDI) to NPR 20 Million (approximately USD 150,000) per investor, with certain exceptions for specific sectors.",
  },
  {
    question: "Do you offer legal retainer services for corporate businesses?",
    answer: "Yes, we provide comprehensive monthly and annual legal retainer packages for startups, corporations, and NGOs. Our retainer services include contract drafting, board meeting advisory, OCR compliance, and ongoing regulatory counsel.",
  },
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Header */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 bg-[radial-gradient(circle_at_50%_120%,rgba(181,148,104,0.03)_0%,transparent_50%)]">
        <FadeIn className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block">Connect With Us</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight">Contact Our Offices</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Schedule a private consultation or send us an inquiry. Our legal advocates are prepared to assist you.
          </p>
        </FadeIn>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info (Left) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">Inquiries</span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">Get in touch</h2>
                <p className="text-slate-500 mt-4 leading-relaxed text-sm md:text-base">
                  Whether you require corporate setup, FDI representation, or litigation support, our team provides swift and confidential responses.
                </p>
              </div>

              <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <StaggerItem>
                  <div className="flex gap-4.5 bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm">
                    <div className="bg-white border border-slate-200 p-3 rounded-xl text-secondary h-fit shrink-0 shadow-sm">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm tracking-wider uppercase text-secondary/90">Office Address</h3>
                      <p className="text-slate-500 text-sm mt-1">Maitidevi, Kathmandu<br />Bagmati Province, Nepal</p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4.5 bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm">
                    <div className="bg-white border border-slate-200 p-3 rounded-xl text-secondary h-fit shrink-0 shadow-sm">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm tracking-wider uppercase text-secondary/90">Telephone</h3>
                      <p className="text-slate-500 text-sm mt-1">+977 1-4200000<br />+977 9800000000 (WhatsApp)</p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4.5 bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm">
                    <div className="bg-white border border-slate-200 p-3 rounded-xl text-secondary h-fit shrink-0 shadow-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm tracking-wider uppercase text-secondary/90">Email Channels</h3>
                      <p className="text-slate-500 text-sm mt-1">contact@yuktilegalservices.com<br />consult@yuktilegalservices.com</p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex gap-4.5 bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm">
                    <div className="bg-white border border-slate-200 p-3 rounded-xl text-secondary h-fit shrink-0 shadow-sm">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm tracking-wider uppercase text-secondary/90">Business Hours</h3>
                      <p className="text-slate-500 text-sm mt-1">Sunday - Friday: 9:00 AM - 6:00 PM<br />Saturday: Closed (Emergency only)</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Consultation Request Form (Right) */}
            <div className="lg:col-span-7">
              <SpotlightCard className="p-8 md:p-10 border-slate-200/60">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Request Consultation</h3>
                <p className="text-slate-500 text-sm mb-8">All inquiries are processed under strict client-attorney confidentiality.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Floating Input: Full Name */}
                    <div className="relative">
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="block px-4 pb-3 pt-5 w-full text-sm text-slate-900 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-0 focus:border-secondary transition-all peer" 
                        placeholder=" " 
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] px-2 bg-white peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4.5 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5"
                      >
                        Full Name
                      </label>
                    </div>

                    {/* Floating Input: Phone */}
                    <div className="relative">
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="block px-4 pb-3 pt-5 w-full text-sm text-slate-900 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-0 focus:border-secondary transition-all peer" 
                        placeholder=" " 
                      />
                      <label 
                        htmlFor="phone" 
                        className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] px-2 bg-white peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4.5 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5"
                      >
                        Phone Number
                      </label>
                    </div>
                  </div>

                  {/* Floating Input: Email */}
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="block px-4 pb-3 pt-5 w-full text-sm text-slate-900 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-0 focus:border-secondary transition-all peer" 
                      placeholder=" " 
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] px-2 bg-white peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4.5 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Dropdown Selection */}
                  <div className="space-y-2">
                    <label htmlFor="issue" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Practice Area of Interest</label>
                    <select 
                      id="issue" 
                      className="w-full h-12.5 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:border-secondary"
                    >
                      <option>Corporate Advisory & M&A</option>
                      <option>Company Registration & OCR Compliance</option>
                      <option>Foreign Direct Investment (FDI)</option>
                      <option>Property & Land Due Diligence</option>
                      <option>Family Law & Wealth Management</option>
                      <option>Commercial Civil Litigation</option>
                    </select>
                  </div>

                  {/* Floating Textarea: Message */}
                  <div className="relative">
                    <textarea 
                      id="message" 
                      required
                      rows={4}
                      className="block px-4 pb-3 pt-5 w-full text-sm text-slate-900 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-0 focus:border-secondary transition-all peer min-h-[120px]" 
                      placeholder=" " 
                    />
                    <label 
                      htmlFor="message" 
                      className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] px-2 bg-white peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:top-4.5 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5"
                    >
                      Brief case description...
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full h-12.5 bg-gradient-to-r from-secondary to-amber-400 text-white font-bold rounded-full hover:shadow-xl hover:shadow-secondary/15 hover:scale-101 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-4 w-4" /> Submit Consultation Request
                  </button>

                  {/* Success Banner */}
                  <AnimatePresence>
                    {formSubmitted && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm text-center font-medium shadow-sm"
                      >
                        Thank you. Your consultation request has been received. Our advocates will contact you within 12 hours.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </SpotlightCard>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="mt-32 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">FAQ</span>
              <h2 className="text-3xl font-serif font-bold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="border-t border-slate-200">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stylized Map Representation */}
      <section className="h-[400px] w-full bg-slate-50 border-t border-slate-200 relative flex items-center justify-center overflow-hidden">
        {/* Abstract futuristic grid representing location */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,13,22,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,13,22,0.01)_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
        
        <div className="absolute w-[300px] h-[300px] pointer-events-none filter blur-3xl"
             style={{ background: "radial-gradient(circle, rgba(181,148,104,0.03) 0%, rgba(0,0,0,0) 70%)" }} />
        
        <div className="relative text-center space-y-4 z-10 p-6 glass-panel border-slate-200 rounded-2xl max-w-md shadow-md">
          <MapPin className="h-8 w-8 text-secondary mx-auto animate-bounce" />
          <h3 className="text-xl font-serif font-bold text-slate-900">Kathmandu Office</h3>
          <p className="text-slate-555 text-sm leading-relaxed">
            Maitidevi (Opposite Kathmandu Model College), Kathmandu, Nepal.<br />
            Secure underground parking is available for clients.
          </p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-xs font-bold text-secondary hover:underline tracking-wider uppercase pt-2"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-serif font-semibold text-base md:text-lg text-slate-900 hover:text-secondary transition-colors py-2"
      >
        <span className="pr-4">{question}</span>
        <ChevronDown className={`h-5 w-5 text-secondary shrink-0 transition-transform duration-350 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-slate-550 text-sm leading-relaxed pt-2 pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

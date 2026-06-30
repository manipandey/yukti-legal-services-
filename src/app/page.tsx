"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scale, Briefcase, Globe, Users, Landmark, Gavel, Award, ShieldCheck, Zap } from "lucide-react";
import { FadeIn, SlideInLeft, StaggerContainer, StaggerItem, ScrollReveal } from "@/components/ui/MotionWrapper";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Counter } from "@/components/ui/Counter";
import { Magnetic } from "@/components/ui/Magnetic";
import { motion } from "framer-motion";

const partners = [
  " Chaudhary Group ", " OCR Nepal ", " Ncell Axiata ", " Investment Board Nepal ", 
  " Nepal Investment Bank ", " Daraz Nepal ", " Civil Bank ", " NIMB Ace Capital "
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground relative overflow-hidden">
      {/* Self-contained CSS for marquee, shifting gradients, and ambient animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .bg-shifting-mesh {
          background: linear-gradient(-45deg, rgba(255, 255, 255, 1), rgba(181, 148, 104, 0.04), rgba(30, 41, 59, 0.02), rgba(181, 148, 104, 0.06), rgba(255, 255, 255, 1));
          background-size: 400% 400%;
          animation: gradient-shift 18s ease infinite;
        }
      `}} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 lg:py-28 overflow-hidden border-b border-slate-100 bg-shifting-mesh">
        {/* Subtle SVG Grid Overlay - dark lines for light theme */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,13,22,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,13,22,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          {/* Tagline Badge */}
          <FadeIn delay={0.1} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-white border border-secondary/30 text-xs font-semibold tracking-wide text-secondary uppercase shadow-sm">
              <Scale className="h-3.5 w-3.5" /> Premier Legal Advisory in Nepal
            </span>
          </FadeIn>

          {/* Cinematic Mixed Typography Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-8 max-w-5xl leading-[1.15] text-slate-900">
            <FadeIn delay={0.2}>
              Strategic <span className="font-sans font-extralight italic text-gradient-gold">legal counsel</span> for <span className="font-sans font-extralight italic text-gradient-gold">complex</span> business landscapes
            </FadeIn>
          </h1>

          {/* Subtext */}
          <FadeIn delay={0.4} className="max-w-2xl">
            <p className="text-base sm:text-lg md:text-xl text-slate-550 mb-12 leading-relaxed">
              Professional, result-oriented, and ethical legal representation at the highest level. Navigating corporate law, company registration, foreign investments, and civil litigation in Nepal.
            </p>
          </FadeIn>

          {/* Magnetic CTAs */}
          <FadeIn delay={0.5} className="flex flex-col sm:flex-row gap-4.5 z-20">
            <Magnetic>
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-secondary to-amber-400 px-8 text-sm font-semibold text-white shadow-lg shadow-secondary/15 hover:shadow-secondary/30 hover:scale-103 transition-all duration-300 cursor-pointer"
              >
                Book Confidential Consultation
              </Link>
            </Magnetic>
            <Magnetic>
              <Link 
                href="/practice-areas" 
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/70 backdrop-blur-md px-8 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-350 transition-all duration-300 cursor-pointer"
              >
                Explore Practice Areas
              </Link>
            </Magnetic>
          </FadeIn>

          {/* Scroll Down Indicator */}
          <FadeIn delay={0.7} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-xs text-slate-400">
            <span>Scroll to explore</span>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-slate-300 flex justify-center pt-1"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Marquee Section */}
      <section className="py-12 bg-slate-50/50 border-b border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-6 text-center">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Trusted by clients registered at OCR & IBN</p>
        </div>
        <div className="w-full overflow-hidden relative flex">
          {/* Gradient masks to fade out sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-16 whitespace-nowrap shrink-0 animate-marquee py-2">
            {[...partners, ...partners].map((partner, index) => (
              <span key={index} className="text-lg md:text-xl font-serif font-semibold text-slate-400 tracking-wider hover:text-secondary transition-colors duration-300">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-radial-gradient(circle, rgba(181,148,104,0.02) 0%, rgba(0,0,0,0) 70%) pointer-events-none filter blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">Comprehensive legal solutions</h2>
            </div>
            <p className="text-slate-505 max-w-md leading-relaxed">
              Highly specialized legal services tailored to corporate enterprises, startups, and high-net-worth individuals in Nepal.
            </p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5">
            <ServiceCard 
              icon={<Briefcase className="h-6 w-6 text-secondary" />}
              title="Corporate Law & M&A"
              description="Structuring transactions, compliance audits, joint ventures, and advisory for multinational enterprises."
              href="/practice-areas/corporate-law"
            />
            <ServiceCard 
              icon={<Scale className="h-6 w-6 text-secondary" />}
              title="Company Registration"
              description="End-to-end OCR registration, corporate governance, post-registration licensing, and tax registrations."
              href="/practice-areas/company-registration"
            />
            <ServiceCard 
              icon={<Globe className="h-6 w-6 text-secondary" />}
              title="Foreign Investment (FDI)"
              description="Advising on foreign investments, obtaining approvals from FITTA/IBN, and navigating capital repatriation."
              href="/practice-areas/foreign-investment"
            />
            <ServiceCard 
              icon={<Landmark className="h-6 w-6 text-secondary" />}
              title="Property & Land Law"
              description="Due diligence on land ownership, title verification, lease agreements, and high-value real estate transactions."
              href="/practice-areas/property-law"
            />
            <ServiceCard 
              icon={<Users className="h-6 w-6 text-secondary" />}
              title="Family Law & Wealth"
              description="Comprehensive wealth planning, estate management, property division, and confidential family dispute resolution."
              href="/practice-areas/family-law"
            />
            <ServiceCard 
              icon={<Gavel className="h-6 w-6 text-secondary" />}
              title="Commercial Litigation"
              description="Aggressive and result-oriented representation in commercial arbitrations and civil disputes before Nepalese courts."
              href="/practice-areas/civil-litigation"
            />
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <StaggerItem className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold">
                <Counter value={15} suffix="+" />
              </div>
              <p className="text-xs tracking-widest text-slate-500 uppercase font-semibold">Years of Excellence</p>
            </StaggerItem>
            <StaggerItem className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold">
                <Counter value={500} suffix="+" />
              </div>
              <p className="text-xs tracking-widest text-slate-500 uppercase font-semibold">Corporate Clients</p>
            </StaggerItem>
            <StaggerItem className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold">
                <Counter value={98} suffix="%" />
              </div>
              <p className="text-xs tracking-widest text-slate-500 uppercase font-semibold">Litigation Success Rate</p>
            </StaggerItem>
            <StaggerItem className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold">
                <Counter value={20} suffix="+" />
              </div>
              <p className="text-xs tracking-widest text-slate-500 uppercase font-semibold">Expert Advocates</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-radial-gradient(circle, rgba(181,148,104,0.02) 0%, rgba(0,0,0,0) 70%) pointer-events-none filter blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <SlideInLeft className="space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">Our Standards</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Why clients trust our representation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="mt-1 bg-slate-55 border border-slate-200/80 p-3 rounded-xl h-fit text-secondary group-hover:border-secondary/40 transition-all duration-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">Unrivaled Track Record</h3>
                    <p className="text-sm text-slate-505 leading-relaxed">Recognized as one of the leading boutique law firms in Nepal, handling major FDI and corporate registrations.</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="mt-1 bg-slate-55 border border-slate-200/80 p-3 rounded-xl h-fit text-secondary group-hover:border-secondary/40 transition-all duration-300">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">Ethical & Compliant</h3>
                    <p className="text-sm text-slate-550 leading-relaxed">Absolute adherence to transparency, regulatory compliance, and confidentiality. Your data and interests are safe.</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="mt-1 bg-slate-55 border border-slate-200/80 p-3 rounded-xl h-fit text-secondary group-hover:border-secondary/40 transition-all duration-300">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">Result-Driven Counsel</h3>
                    <p className="text-sm text-slate-550 leading-relaxed">We deliver practical and commercial solutions to legal hurdles, rather than just abstract legal opinions.</p>
                  </div>
                </div>
              </div>
            </SlideInLeft>

            <ScrollReveal className="relative group">
              {/* Glowing background borders around image */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-secondary to-amber-200 opacity-15 blur-md group-hover:opacity-25 transition duration-500" />
              
              <div className="relative rounded-2xl h-[450px] w-full overflow-hidden shadow-xl bg-slate-50 border border-slate-200/55">
                <Image 
                  src="/team_photo.png" 
                  alt="Our Professional Legal Team" 
                  fill 
                  className="object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass-panel border border-slate-200/80">
                  <p className="text-sm font-semibold text-slate-900 mb-1">Yukti Legal Services Board</p>
                  <p className="text-xs text-secondary font-semibold">Experienced Advocates & Registered Consultants</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 border-t border-slate-150 bg-slate-50/50 overflow-hidden">
        {/* Subtle grid in background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,13,22,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,13,22,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-radial-gradient(circle, rgba(181,148,104,0.03) 0%, rgba(0,0,0,0) 70%) pointer-events-none filter blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Initiate your legal partnership today
            </h2>
            <p className="text-slate-550 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              Schedule a private consultation with our advocates to discuss your business establishment or litigation requirements.
            </p>
            <div className="pt-4">
              <Magnetic>
                <Link 
                  href="/contact" 
                  className="inline-flex h-12.5 items-center justify-center rounded-full bg-gradient-to-r from-secondary to-amber-400 px-9 text-sm font-semibold text-white shadow-lg shadow-secondary/10 hover:shadow-secondary/25 hover:scale-103 transition-all duration-300 cursor-pointer"
                >
                  Request Case Evaluation
                </Link>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <StaggerItem>
      <SpotlightCard className="h-full flex flex-col justify-between group">
        <div>
          {/* Animated Glow on Icon */}
          <div className="mb-6 inline-flex bg-slate-50 border border-slate-200/60 p-3.5 rounded-xl text-secondary transform transition-all duration-500 group-hover:scale-110 group-hover:border-secondary/20">
            {icon}
          </div>
          <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors duration-300">{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>
        </div>
        <Link 
          href={href} 
          className="inline-flex items-center text-sm font-semibold text-secondary hover:text-amber-555 transition-colors group/link mt-auto"
        >
          Detailed services <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1.5" />
        </Link>
      </SpotlightCard>
    </StaggerItem>
  );
}

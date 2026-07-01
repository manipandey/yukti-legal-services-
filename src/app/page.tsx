"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scale, Briefcase, Globe, Users, Landmark, Gavel, Award, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
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
      {styleBlock}

      {/* Hero Section - Full bleed image overlay */}
      <section className="relative min-h-[92vh] flex items-center justify-center py-20 lg:py-28 overflow-hidden bg-[#050b14] z-10 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/office_interior.png"
            alt="Noble boardroom courtroom background"
            fill
            priority
            className="object-cover opacity-20 filter blur-[1px]"
          />
          {/* Rich navy-slate gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b121f]/50 via-[#060a13]/85 to-[#060a13]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#060a13_90%)]" />
        </div>

        {/* Subtle decorative grid overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          {/* Tagline Badge */}
          <FadeIn delay={0.15} className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider text-primary uppercase">
              STRATEGIC LEGAL SUPPORT
            </span>
          </FadeIn>

          {/* Cinematic Mixed Typography Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white mb-6 max-w-4xl leading-[1.12]">
            Trusted legal guidance.<br />Exceptional results.
          </h1>

          {/* Subtext */}
          <FadeIn delay={0.4} className="max-w-2xl">
            <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 leading-relaxed font-light font-sans">
              At Yukti Legal, we deliver clear advice and strong representation, whether you are resolving a commercial dispute or navigating a complex business transaction in Nepal.
            </p>
          </FadeIn>

          {/* Magnetic CTAs */}
          <FadeIn delay={0.5} className="flex flex-col sm:flex-row gap-4.5 z-20">
            <Magnetic>
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold text-[#0b121f] hover:bg-primary/90 transition-all duration-300 cursor-pointer shadow-lg shadow-primary/10"
              >
                Book a Call &rarr;
              </Link>
            </Magnetic>
            <Magnetic>
              <Link 
                href="/practice-areas" 
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                Our Services &rarr;
              </Link>
            </Magnetic>
          </FadeIn>
        </div>
      </section>

      {/* Trust Marquee Section */}
      <section className="py-12 bg-white/40 dark:bg-slate-950/20 border-b border-slate-200/50 dark:border-slate-805/40 overflow-hidden relative z-10">
        <div className="container mx-auto px-4 mb-5 text-center">
          <p className="text-[10px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">Trusted by clients registered at OCR & IBN</p>
        </div>
        <div className="w-full overflow-hidden relative flex">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-16 whitespace-nowrap shrink-0 animate-marquee py-2">
            {[...partners, ...partners].map((partner, index) => (
              <span key={index} className="text-base md:text-lg font-serif text-slate-400 dark:text-slate-500 tracking-wider hover:text-primary transition-colors duration-300">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (Custom Cards Grid) */}
      <section className="py-24 lg:py-32 relative z-10 bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 relative">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">SERVICES</span>
              <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground leading-tight">Our legal expertise</h2>
            </div>
            <Link
              href="/practice-areas"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-[#0b121f] hover:bg-primary/90 transition-all duration-300 cursor-pointer shadow-sm"
            >
              All Services &rarr;
            </Link>
          </div>

          {/* Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Business Law */}
            <StaggerItem>
              <div className="flex flex-col h-full bg-white/70 dark:bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/40 group hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <Image
                    src="/office_interior.png"
                    alt="Business Law"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      Business Law
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-2">
                      Supporting your business with clear legal advice on company registration, compliance audits, joint ventures, and FDI operations.
                    </p>
                  </div>
                  <Link 
                    href="/practice-areas/corporate-law" 
                    className="inline-flex items-center text-sm font-bold text-primary hover:underline transition-colors mt-4"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            </StaggerItem>

            {/* Card 2: Litigation Law */}
            <StaggerItem>
              <div className="flex flex-col h-full bg-white/70 dark:bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/40 group hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <Image
                    src="/team_photo.png"
                    alt="Litigation Law"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      Litigation Law
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-2">
                      Strategic representation in complex civil, criminal, and commercial disputes, inside and outside Nepalese courtrooms.
                    </p>
                  </div>
                  <Link 
                    href="/practice-areas/civil-litigation" 
                    className="inline-flex items-center text-sm font-bold text-primary hover:underline transition-colors mt-4"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            </StaggerItem>

            {/* Card 3: Family Law */}
            <StaggerItem>
              <div className="flex flex-col h-full bg-white/70 dark:bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/40 group hover:shadow-xl transition-all duration-300">
                <div className="relative w-full h-52 overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <Image
                    src="/office_interior.png"
                    alt="Family Law"
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105 saturate-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>
                <div className="p-7 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      Family & Wealth Law
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-2">
                      Legal support in divorce, inheritance, asset protection, estate division, and custody matters handled with discretion.
                    </p>
                  </div>
                  <Link 
                    href="/practice-areas/family-law" 
                    className="inline-flex items-center text-sm font-bold text-primary hover:underline transition-colors mt-4"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 bg-white/40 dark:bg-slate-950/20 border-y border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <StaggerItem className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-semibold text-primary">
                <Counter value={15} suffix="+" />
              </div>
              <p className="text-xs tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">Years of Excellence</p>
            </StaggerItem>
            <StaggerItem className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-semibold text-primary">
                <Counter value={500} suffix="+" />
              </div>
              <p className="text-xs tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">Corporate Clients</p>
            </StaggerItem>
            <StaggerItem className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-semibold text-primary">
                <Counter value={98} suffix="%" />
              </div>
              <p className="text-xs tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">Litigation Success Rate</p>
            </StaggerItem>
            <StaggerItem className="space-y-2">
              <div className="text-4xl md:text-5xl font-serif font-semibold text-primary">
                <Counter value={20} suffix="+" />
              </div>
              <p className="text-xs tracking-widest text-slate-500 dark:text-slate-400 uppercase font-semibold">Expert Advocates</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 lg:py-32 relative bg-background/50">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-radial-gradient(circle, rgba(203, 164, 95, 0.02) 0%, rgba(0,0,0,0) 70%) pointer-events-none filter blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <SlideInLeft className="space-y-8">
              <div>
                <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-3">Our Standards</span>
                <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground mb-6">Why clients trust our representation</h2>
              </div>
              
              <div className="space-y-6 font-light">
                <div className="flex gap-4 group">
                  <div className="mt-1 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 p-3 rounded-xl h-fit text-primary group-hover:border-primary/40 transition-all duration-300 shadow-xs">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5 font-sans">Unrivaled Track Record</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Recognized as one of the leading boutique law firms in Nepal, handling major FDI and corporate registrations.</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="mt-1 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 p-3 rounded-xl h-fit text-primary group-hover:border-primary/40 transition-all duration-300 shadow-xs">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5 font-sans">Ethical & Compliant</h3>
                    <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed">Absolute adherence to transparency, regulatory compliance, and confidentiality. Your data and interests are safe.</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="mt-1 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 p-3 rounded-xl h-fit text-primary group-hover:border-primary/40 transition-all duration-300 shadow-xs">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5 font-sans">Result-Driven Counsel</h3>
                    <p className="text-sm text-slate-655 dark:text-slate-350 leading-relaxed">We deliver practical and commercial solutions to legal hurdles, rather than just abstract legal opinions.</p>
                  </div>
                </div>
              </div>
            </SlideInLeft>

            <ScrollReveal className="relative group">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] opacity-15 blur-md group-hover:opacity-25 transition duration-500" />
              
              <div className="relative rounded-2xl h-[450px] w-full overflow-hidden shadow-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/45">
                <Image 
                  src="/team_photo.png" 
                  alt="Our Professional Legal Team" 
                  fill 
                  className="object-cover transform transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass-panel border border-slate-200/50 dark:border-slate-800/40">
                  <p className="text-sm font-semibold text-foreground mb-1 font-sans">Yukti Legal Services Board</p>
                  <p className="text-xs text-primary font-semibold font-sans">Experienced Advocates & Registered Consultants</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 border-t border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-slate-950/20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(9,13,22,0.008)_1px,transparent_1px),linear-gradient(to_bottom,rgba(9,13,22,0.008)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.004)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.004)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-foreground leading-tight">
              Initiate your legal partnership today
            </h2>
            <p className="text-slate-600 dark:text-slate-350 text-base md:text-lg leading-relaxed max-w-xl mx-auto font-light font-sans">
              Schedule a private consultation with our advocates to discuss your business establishment or litigation requirements.
            </p>
            <div className="pt-4">
              <Magnetic>
                <Link 
                  href="/contact" 
                  className="inline-flex h-12.5 items-center justify-center rounded-full bg-primary px-9 text-sm font-bold text-[#0b121f] hover:bg-primary/95 hover:scale-103 transition-all duration-300 cursor-pointer shadow-md"
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

const styleBlock = (
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
  `}} />
);



"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, Award, Briefcase, Loader2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface Lawyer {
  id: string;
  name: string;
  position: string;
  experience: string;
  qualifications: string;
  specialization: string;
  image_url: string;
}

export default function LawyersPage() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLawyers() {
      try {
        const response = await fetch("/api/lawyers");
        if (response.ok) {
          const data = await response.json();
          setLawyers(data);
        }
      } catch (e) {
        console.error("Failed to load lawyers:", e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLawyers();
  }, []);

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden pt-20">
      {/* Header */}
      <section className="relative py-24 md:py-32 border-b border-slate-200/50 dark:border-slate-800/40 bg-[radial-gradient(circle_at_50%_120%,rgba(154,120,62,0.03)_0%,transparent_50%)]">
        <FadeIn className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block">Our Panel</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">Our Lawyers</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-655 dark:text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Meet our team of highly qualified advocates and legal consultants, dedicated to delivering result-oriented advocacy.
          </p>
        </FadeIn>
      </section>

      {/* Lawyers Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lawyers.map((lawyer) => {
                // Extract initials for the avatar placeholder
                const initials = lawyer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("");

                return (
                  <StaggerItem key={lawyer.id}>
                    <SpotlightCard className="h-full flex flex-col justify-between group p-6">
                      <div>
                        {/* Avatar Area */}
                        <div className="relative w-full h-72 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 overflow-hidden mb-6 flex items-center justify-center group-hover:border-secondary/35 transition-colors duration-500 shadow-sm">
                          {/* Premium Light Gradient Background Silhouette */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 dark:from-slate-900 via-slate-50 dark:via-slate-950 to-slate-200/40 dark:to-slate-900/40 flex items-center justify-center">
                            <span className="text-6xl font-serif font-bold text-gradient-gold opacity-45 select-none tracking-wider">
                              {initials}
                            </span>
                          </div>
                          {/* Glow effect inside avatar */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 dark:from-black/20 via-transparent to-transparent opacity-20" />
                          
                          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/60 dark:border-slate-800 backdrop-blur-sm text-slate-600 dark:text-slate-300 shadow-sm">
                              {lawyer.experience} Experience
                            </span>
                          </div>
                        </div>

                        {/* Info Area */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-secondary transition-colors duration-300">
                              {lawyer.name}
                            </h3>
                            <p className="text-sm font-semibold text-secondary mt-1 tracking-wider uppercase">
                              {lawyer.position}
                            </p>
                          </div>

                          <div className="space-y-2.5 pt-2 text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-3">
                              <Award className="h-4 w-4 text-secondary shrink-0" />
                              <span><strong>Qualifications:</strong> {lawyer.qualifications}</span>
                            </div>
                            <div className="flex items-start gap-3">
                              <Briefcase className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                              <span><strong>Specialization:</strong> {lawyer.specialization}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Panel */}
                      <div className="flex items-center justify-between pt-6 mt-8 border-t border-slate-200/50 dark:border-slate-800/40">
                        <div className="flex gap-3">
                          <a
                            href={`mailto:contact@yuktilegalservices.com?subject=Inquiry for ${lawyer.name}`}
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-455 hover:text-secondary hover:border-secondary/40 hover:scale-105 transition-all duration-300 shadow-sm"
                            title={`Email ${lawyer.name}`}
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                          <a
                            href="tel:+97714200000"
                            className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-455 hover:text-secondary hover:border-secondary/40 hover:scale-105 transition-all duration-300 shadow-sm"
                            title={`Call Office`}
                          >
                            <Phone className="h-4 w-4" />
                          </a>
                        </div>
                        
                        <a
                          href="/contact"
                          className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-foreground transition-colors duration-300 uppercase tracking-wider"
                        >
                          Book Consultation
                        </a>
                      </div>
                    </SpotlightCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          )}
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, Scale, Briefcase, Globe, Users, Landmark, Gavel } from "lucide-react";
import { mockServices } from "@/lib/mockData";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

// Map icon names from mockData to Lucide components
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Briefcase":
      return <Briefcase className="h-6 w-6" />;
    case "Building":
      return <Scale className="h-6 w-6" />;
    case "Globe":
      return <Globe className="h-6 w-6" />;
    case "Landmark":
      return <Landmark className="h-6 w-6" />;
    case "Users":
      return <Users className="h-6 w-6" />;
    case "Gavel":
      return <Gavel className="h-6 w-6" />;
    default:
      return <Scale className="h-6 w-6" />;
  }
};

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Header */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 bg-[radial-gradient(circle_at_50%_120%,rgba(181,148,104,0.03)_0%,transparent_50%)]">
        <FadeIn className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight">Practice Areas</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-555 max-w-2xl mx-auto leading-relaxed">
            Tailored, result-oriented legal advisory and litigation representation for corporate entities and private clients in Nepal.
          </p>
        </FadeIn>
      </section>

      {/* Grid Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <StaggerItem key={service.id}>
                <SpotlightCard className="h-full flex flex-col justify-between group p-8">
                  <div>
                    {/* Icon container */}
                    <div className="mb-6 inline-flex bg-slate-50 border border-slate-200/60 p-3.5 rounded-xl text-secondary transform transition-all duration-500 group-hover:scale-110 group-hover:border-secondary/25 shadow-sm">
                      {getIcon(service.icon)}
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <Link 
                    href={`/practice-areas/${service.slug}`} 
                    className="inline-flex items-center text-sm font-semibold text-secondary hover:text-amber-555 transition-colors group/link mt-auto"
                  >
                    Learn more <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1.5" />
                  </Link>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import { CheckCircle, Calendar, Award, Briefcase } from "lucide-react";
import { FadeIn, SlideInLeft, StaggerContainer, StaggerItem, ScrollReveal } from "@/components/ui/MotionWrapper";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const timelineEvents = [
  {
    year: "2012",
    title: "Foundation",
    description: "Established as a boutique legal consultancy in Kathmandu, focusing on civil litigation and corporate disputes.",
    icon: <Calendar className="h-5 w-5 text-secondary" />,
  },
  {
    year: "2016",
    title: "FDI Expansion",
    description: "Formed a specialized Foreign Direct Investment (FDI) advisory division, securing approvals for multinational brands.",
    icon: <GlobeIcon className="h-5 w-5 text-secondary" />,
  },
  {
    year: "2020",
    title: "Full-Service Law Firm",
    description: "Licensed as a full-service law firm, integrating property due diligence and intellectual property advisory.",
    icon: <Briefcase className="h-5 w-5 text-secondary" />,
  },
  {
    year: "2024",
    title: "Digital Integration",
    description: "Launched modern legal compliance portals for corporate retainers, streamlining cross-border transactions.",
    icon: <Award className="h-5 w-5 text-secondary" />,
  },
];

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Header */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 bg-[radial-gradient(circle_at_50%_120%,rgba(30, 64, 175, 0.03)_0%,transparent_50%)]">
        <FadeIn className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block">Who We Are</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight">About Our Firm</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-555 max-w-2xl mx-auto leading-relaxed">
            Redefining legal representation in Nepal with absolute integrity, commercial acumen, and a client-centric philosophy.
          </p>
        </FadeIn>
      </section>

      {/* Main Story Content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <SlideInLeft className="space-y-6">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block">Our Heritage</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Shaping legal solutions since 2012</h2>
              <div className="space-y-4 text-slate-500 leading-relaxed text-sm md:text-base">
                <p>
                  Yukti Legal Services was founded with a clear vision: to establish a modern, sophisticated legal practice in Nepal capable of navigating the complex regulatory environments faced by local and international businesses.
                </p>
                <p>
                  &quot;Yukti&quot; (meaning strategy, reasoning, or solution) represents our core philosophy. We believe that legal counsel should be proactive, strategic, and aligned with our clients&apos; commercial realities. We do not just analyze legal hurdles; we provide actionable pathways through them.
                </p>
                <p>
                  Today, our team consists of highly experienced advocates, corporate solicitors, and regulatory advisors with deep expertise in foreign investments, company registration, and complex commercial litigations.
                </p>
              </div>
            </SlideInLeft>
            
            <ScrollReveal className="relative group">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-secondary to-amber-200 opacity-15 blur-md group-hover:opacity-25 transition duration-500" />
              <div className="relative rounded-2xl h-[420px] w-full overflow-hidden shadow-xl bg-slate-50 border border-slate-200/55">
                <Image 
                  src="/office_interior.png" 
                  alt="Yukti Legal Services Office" 
                  fill 
                  className="object-cover transform transition-transform duration-1000 group-hover:scale-103" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          {/* Mission / Vision / Values */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6.5 mb-32">
            <StaggerItem>
              <SpotlightCard className="h-full space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-3">Our Mission</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  To deliver exceptional, commercially-aware, and ethically-uncompromising legal services that secure our clients&apos; interests and foster sustainable business growth in Nepal.
                </p>
              </SpotlightCard>
            </StaggerItem>
            
            <StaggerItem>
              <SpotlightCard className="h-full space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-3">Our Vision</h3>
                <p className="text-slate-555 text-sm leading-relaxed">
                  To be the leading and most trusted law firm in Nepal, recognized for our unwavering commitment to justice and client success.
                </p>
              </SpotlightCard>
            </StaggerItem>
            
            <StaggerItem>
              <SpotlightCard className="h-full space-y-4">
                <h3 className="text-xl font-bold text-slate-900 font-serif border-b border-slate-100 pb-3">Our Values</h3>
                <ul className="space-y-3.5 text-slate-500 text-sm">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                    <span>Absolute Confidentiality</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                    <span>Integrity & Ethical Practice</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                    <span>Commercial Strategy (&quot;Yukti&quot;)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                    <span>Excellence in Execution</span>
                  </li>
                </ul>
              </SpotlightCard>
            </StaggerItem>
          </StaggerContainer>

          {/* Timeline Section */}
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-3">Our Progress</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Firm Milestones</h2>
            </div>

            <div className="relative border-l border-slate-200 ml-4 md:ml-32 py-4 space-y-12">
              {timelineEvents.map((event, index) => (
                <ScrollReveal key={index} className="relative pl-8 md:pl-12 group">
                  {/* Timeline bullet */}
                  <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-secondary transition-colors duration-300 z-10 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Year badge - positioned left on desktop */}
                  <div className="md:absolute md:-left-32 md:top-1.5 md:w-24 text-left md:text-right text-lg font-serif font-bold text-secondary">
                    {event.year}
                  </div>

                  <div className="bg-slate-50/50 border border-slate-200/60 p-6 rounded-2xl backdrop-blur-md max-w-xl group-hover:border-slate-300 transition-colors shadow-sm">
                    <div className="flex items-center gap-2.5 mb-2 text-slate-900 font-bold">
                      {event.icon}
                      <h3 className="text-lg">{event.title}</h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

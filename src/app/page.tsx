import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scale, Briefcase, Globe, Users, Landmark, Gavel } from "lucide-react";
import { FadeIn, SlideInLeft, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-primary text-white py-24 md:py-32 lg:py-48 overflow-hidden">
        <Image src="/hero_bg.png" alt="Yukti Legal Services" fill className="object-cover opacity-30 mix-blend-overlay pointer-events-none" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent pointer-events-none" />
        <FadeIn className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 max-w-4xl">
            Trusted Legal Solutions in <span className="text-secondary">Nepal</span>
          </h1>
          <p className="text-lg md:text-xl max-w-[800px] text-primary-foreground/80 mb-10 leading-relaxed">
            Professional, result-oriented, and ethical legal representation for businesses and individuals. From company registration to complex civil litigation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90"
            >
              Book Consultation
            </Link>
            <Link 
              href="/practice-areas" 
              className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/20 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground/10"
            >
              Our Practice Areas
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Practice Areas Overview */}
      <section className="w-full py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">Practice Areas</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Comprehensive legal services tailored to meet the dynamic needs of our clients in Nepal.
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            <ServiceCard 
              icon={<Briefcase className="h-10 w-10 text-secondary" />}
              title="Corporate Law"
              description="Expert legal guidance for corporations, startups, and enterprises."
              href="/practice-areas/corporate-law"
            />
            <ServiceCard 
              icon={<Scale className="h-10 w-10 text-secondary" />}
              title="Company Registration"
              description="Seamless and fully compliant company registration services at the OCR."
              href="/practice-areas/company-registration"
            />
            <ServiceCard 
              icon={<Globe className="h-10 w-10 text-secondary" />}
              title="Foreign Investment"
              description="Advising foreign investors on FDI regulations and approvals."
              href="/practice-areas/foreign-investment"
            />
            <ServiceCard 
              icon={<Landmark className="h-10 w-10 text-secondary" />}
              title="Property & Land Law"
              description="Handling property disputes and real estate transactions securely."
              href="/practice-areas/property-law"
            />
            <ServiceCard 
              icon={<Users className="h-10 w-10 text-secondary" />}
              title="Family Law & Divorce"
              description="Sensitive and confidential representation for family disputes."
              href="/practice-areas/family-law"
            />
            <ServiceCard 
              icon={<Gavel className="h-10 w-10 text-secondary" />}
              title="Civil Litigation"
              description="Strong representation in civil disputes in Nepalese courts."
              href="/practice-areas/civil-litigation"
            />
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Why Choose Our Firm?</h2>
              <StaggerContainer className="space-y-6">
                <StaggerItem className="flex gap-4">
                  <div className="mt-1 bg-secondary/10 p-3 rounded-full h-fit group-hover:bg-secondary/20 transition-colors">
                    <Scale className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Unmatched Expertise</h3>
                    <p className="text-muted-foreground">Decades of combined experience in navigating the complex legal landscape of Nepal.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <div className="mt-1 bg-secondary/10 p-3 rounded-full h-fit group-hover:bg-secondary/20 transition-colors">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
                    <p className="text-muted-foreground">We prioritize your goals, offering tailored and practical legal solutions.</p>
                  </div>
                </StaggerItem>
                <StaggerItem className="flex gap-4">
                  <div className="mt-1 bg-secondary/10 p-3 rounded-full h-fit group-hover:bg-secondary/20 transition-colors">
                    <ArrowRight className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Results Driven</h3>
                    <p className="text-muted-foreground">A proven track record of successful litigations and corporate closures.</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </SlideInLeft>
            <FadeIn delay={0.2} className="rounded-2xl h-[400px] w-full flex items-center justify-center overflow-hidden relative shadow-2xl hover:shadow-3xl transition-all group">
              <Image src="/team_photo.png" alt="Our Professional Legal Team" fill className="object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg-pattern.svg')] opacity-5 animate-pulse" />
        <FadeIn className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">Need Legal Assistance?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-primary-foreground/80">
            Contact us today for a confidential consultation. Our experts are ready to provide the guidance you need.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-transform hover:scale-105 hover:bg-secondary/90"
          >
            Get Free Case Evaluation
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <StaggerItem className="group relative overflow-hidden rounded-xl border bg-background p-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-secondary duration-500">
      <div className="mb-4 inline-block transform transition-transform group-hover:scale-125 group-hover:rotate-12 group-hover:text-secondary duration-500 origin-bottom-left">{icon}</div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link href={href} className="inline-flex items-center text-sm font-medium text-primary group-hover:text-secondary">
        Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </StaggerItem>
  );
}

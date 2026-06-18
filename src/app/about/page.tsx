import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { FadeIn, SlideInLeft, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";

export const metadata = {
  title: "About Us | Yukti Legal Services",
  description: "Learn more about Yukti Legal Services, our mission, vision, and the experienced team of lawyers serving clients across Nepal.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-white py-16 md:py-24 overflow-hidden">
        <FadeIn className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">About Our Firm</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Dedicated to providing excellence in legal services with integrity, professionalism, and a client-first approach.
          </p>
        </FadeIn>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <SlideInLeft>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Established with a vision to redefine legal services in Nepal, our firm has grown into one of the most trusted legal institutions in the country. We understand the complexities of the Nepalese legal system and are uniquely positioned to guide both domestic and international clients.
                </p>
                <p>
                  Our team consists of highly experienced advocates, legal advisors, and consultants who specialize in Corporate Law, Foreign Direct Investment (FDI), Civil Litigation, and more.
                </p>
              </div>
            </SlideInLeft>
            <FadeIn delay={0.2} className="rounded-2xl h-[400px] flex items-center justify-center shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
              <Image src="/office_interior.png" alt="Yukti Legal Services Office" fill className="object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-24">
            <StaggerItem className="bg-background border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">To deliver high-quality, reliable, and cost-effective legal solutions that empower our clients to achieve their goals.</p>
            </StaggerItem>
            <StaggerItem className="bg-background border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">To be the leading and most trusted law firm in Nepal, recognized for our unwavering commitment to justice and client success.</p>
            </StaggerItem>
            <StaggerItem className="bg-background border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow hover:-translate-y-1 duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Values</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-secondary" /> Integrity & Ethics</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-secondary" /> Excellence</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-secondary" /> Client-Centricity</li>
                <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-secondary" /> Confidentiality</li>
              </ul>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}

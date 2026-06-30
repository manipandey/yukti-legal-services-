import { mockServices } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Phone, Mail, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import { FadeIn, SlideInLeft, ScrollReveal } from "@/components/ui/MotionWrapper";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const service = mockServices.find((s) => s.slug === slug);
  
  if (!service) return { title: "Not Found" };

  return {
    title: `${service.title} | Yukti Legal Services`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = mockServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Header */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 bg-[radial-gradient(circle_at_50%_120%,rgba(13, 148, 136, 0.03)_0%,transparent_50%)]">
        <FadeIn className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <Link href="/practice-areas" className="text-xs font-bold tracking-widest text-secondary hover:text-blue-500 transition-colors uppercase">
            &larr; Back to Practice Areas
          </Link>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight pt-2">{service.title}</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-555 max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </FadeIn>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column (Main Article) */}
            <div className="lg:col-span-8 space-y-12">
              <SlideInLeft className="space-y-6">
                <h2 className="text-3xl font-serif font-bold text-slate-900">Overview</h2>
                <div className="text-slate-600 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    Our {service.title} practice is designed to provide comprehensive legal support and strategic advice to our clients in Nepal. We understand the nuances of the local legal framework and provide solutions that are both practical and effective.
                  </p>
                  <p>
                    Whether you are a domestic entity, a growing startup, or an international investor, our team of specialized advocates ensures that your interests are protected and your objectives are met efficiently. We assist with drafting, regulatory representation, compliance filings, and dispute resolution.
                  </p>
                </div>
              </SlideInLeft>

              <ScrollReveal className="space-y-6">
                <h2 className="text-2xl font-serif font-bold text-slate-900">Key Benefits</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3.5 bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Expert guidance from experienced advocates in Nepal</span>
                  </li>
                  <li className="flex items-start gap-3.5 bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Tailored strategies aligned with your commercial goals</span>
                  </li>
                  <li className="flex items-start gap-3.5 bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">End-to-end support for OCR and regulatory compliance</span>
                  </li>
                  <li className="flex items-start gap-3.5 bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl shadow-sm">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Absolute confidentiality and ethical representation</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>

            {/* Right Column (Sidebar CTA) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <SpotlightCard className="p-8 border-slate-200/60 space-y-6">
                <div className="space-y-2">
                  <ShieldCheck className="h-8 w-8 text-secondary" />
                  <h3 className="text-xl font-serif font-bold text-slate-900">Need Advisory?</h3>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Schedule a private consultation regarding {service.title} with our specialized lawyers.
                  </p>
                </div>

                <div className="pt-2">
                  <Link 
                    href="/contact" 
                    className="flex w-full h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#064e3b] via-[#0d9488] to-[#34d399] text-xs font-bold text-white shadow-md hover:scale-103 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <p className="text-xs text-slate-550">Or contact our corporate desk:</p>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-secondary" />
                      <span>+977 1-4200000</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-secondary" />
                      <span>consult@yuktilegalservices.com</span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

import { mockServices } from "@/lib/mockData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
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
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">{service.title}</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Our {service.title} practice is designed to provide comprehensive legal support and strategic advice to our clients in Nepal. We understand the nuances of the local legal framework and provide solutions that are both practical and effective.
                  </p>
                  <p>
                    Whether you are a domestic entity or a foreign investor, our team of specialized lawyers ensures that your interests are protected and your objectives are met efficiently.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                    <span>Expert guidance from experienced professionals</span>
                  </li>
                  <li className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                    <span>Tailored strategies for your specific needs</span>
                  </li>
                  <li className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                    <span>End-to-end legal support and representation</span>
                  </li>
                  <li className="flex items-start gap-3 bg-muted/50 p-4 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                    <span>Strict confidentiality and ethical standards</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div>
              <div className="bg-primary text-white p-8 rounded-xl sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Need Help with {service.title}?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Schedule a consultation with our specialized lawyers today to discuss your legal needs.
                </p>
                <Link 
                  href="/contact" 
                  className="flex w-full h-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors"
                >
                  Book Consultation
                </Link>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/80 mb-2">Or call us directly:</p>
                  <p className="font-bold text-lg">+977 1-4200000</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

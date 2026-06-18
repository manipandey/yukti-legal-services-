import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockServices } from "@/lib/mockData";

export const metadata = {
  title: "Practice Areas | Yukti Legal Services",
  description: "Explore our comprehensive legal services including Corporate Law, Company Registration, Property Law, and more in Nepal.",
};

export default function PracticeAreasPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Practice Areas</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive legal services tailored to meet the dynamic needs of our clients in Nepal.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => (
              <div key={service.id} className="group flex flex-col bg-background rounded-lg border shadow-sm p-8 hover:shadow-md transition-all hover:border-secondary">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                <Link 
                  href={`/practice-areas/${service.slug}`} 
                  className="inline-flex items-center text-sm font-medium text-primary group-hover:text-secondary mt-auto"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

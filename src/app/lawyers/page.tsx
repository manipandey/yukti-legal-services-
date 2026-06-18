import { mockLawyers } from "@/lib/mockData";
import { Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Our Lawyers | Yukti Legal Services",
  description: "Meet our team of experienced and dedicated lawyers ready to represent you in Nepal.",
};

export default function LawyersPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Lawyers</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Experienced professionals dedicated to your success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockLawyers.map((lawyer) => (
              <div key={lawyer.id} className="bg-background rounded-lg border shadow-sm overflow-hidden flex flex-col group">
                <div className="h-64 bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    [Image: {lawyer.name}]
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{lawyer.name}</h3>
                  <p className="text-secondary font-medium mb-4">{lawyer.position}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-6 flex-1">
                    <p><strong>Experience:</strong> {lawyer.experience}</p>
                    <p><strong>Qualifications:</strong> {lawyer.qualifications}</p>
                    <p><strong>Specialization:</strong> {lawyer.specialization}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t">
                    <a href="#" className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
                    <a href="#" className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors">
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

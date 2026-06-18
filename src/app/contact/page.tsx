import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Yukti Legal Services",
  description: "Get in touch with Yukti Legal Services for professional legal consultation and assistance.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We are here to help you with your legal needs. Reach out to schedule a consultation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Whether you have a question about our services, need legal advice, or want to schedule a consultation, our team is ready to answer all your questions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office Address</h3>
                    <p className="text-muted-foreground">Maitidevi<br />Bagmati Province, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone Number</h3>
                    <p className="text-muted-foreground">+977 1-4200000<br />+977 9800000000 (WhatsApp)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Address</h3>
                    <p className="text-muted-foreground">contact@yuktilegalservices.com<br />consult@yuktilegalservices.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Working Hours</h3>
                    <p className="text-muted-foreground">Sun - Fri: 9:00 AM - 6:00 PM<br />Saturday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background rounded-lg border shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <input id="name" type="text" className="w-full h-10 px-3 rounded-md border bg-background" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                    <input id="phone" type="tel" className="w-full h-10 px-3 rounded-md border bg-background" placeholder="+977 98..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input id="email" type="email" className="w-full h-10 px-3 rounded-md border bg-background" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="issue" className="text-sm font-medium">Legal Issue</label>
                  <select id="issue" className="w-full h-10 px-3 rounded-md border bg-background">
                    <option>Corporate Law</option>
                    <option>Company Registration</option>
                    <option>Property Law</option>
                    <option>Family Law</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" className="w-full p-3 rounded-md border bg-background min-h-[120px]" placeholder="Briefly describe your situation..." />
                </div>
                <button type="submit" className="w-full h-12 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-[400px] w-full bg-muted relative">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          [Google Maps Embed]
        </div>
      </section>
    </div>
  );
}

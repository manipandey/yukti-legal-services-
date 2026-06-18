import Link from "next/link";
import { Globe, Link as LinkIcon, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Yukti Legal <span className="text-secondary">Services</span></h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Providing trusted, professional, and result-oriented legal services across Nepal. Your success is our commitment.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <LinkIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-lg border-b border-primary-foreground/20 pb-2 inline-block">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/practice-areas/corporate-law" className="hover:text-secondary transition-colors">Corporate Law</Link></li>
              <li><Link href="/practice-areas/company-registration" className="hover:text-secondary transition-colors">Company Registration</Link></li>
              <li><Link href="/practice-areas/foreign-investment" className="hover:text-secondary transition-colors">Foreign Investment</Link></li>
              <li><Link href="/practice-areas/property-law" className="hover:text-secondary transition-colors">Property Law</Link></li>
              <li><Link href="/practice-areas/family-law" className="hover:text-secondary transition-colors">Family Law</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg border-b border-primary-foreground/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/lawyers" className="hover:text-secondary transition-colors">Our Lawyers</Link></li>
              <li><Link href="/blog" className="hover:text-secondary transition-colors">Legal Insights</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg border-b border-primary-foreground/20 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>Maitidevi, Bagmati Province, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <span>+977 1-4200000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <span>contact@yuktilegalservices.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Yukti Legal Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

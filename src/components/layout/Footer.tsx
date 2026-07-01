import Link from "next/link";
import { Globe, Link as LinkIcon, MessageCircle, MapPin, Phone, Mail, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Ambient background glow */}
      <div 
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none filter blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(13, 148, 136, 0.04) 0%, rgba(0,0,0,0) 70%)" }}
      />
      <div 
        className="absolute top-0 left-10 w-[300px] h-[300px] pointer-events-none filter blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(30, 41, 59, 0.15) 0%, rgba(0,0,0,0) 70%)" }}
      />

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Yukti Legal <span className="text-gradient-blue">Services</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing trusted, professional, and result-oriented legal services across Nepal. We blend traditional excellence with modern strategy to protect your interests.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-805 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary/40 hover:scale-115 transition-all duration-300"
              >
                <Globe className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-850 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary/40 hover:scale-115 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-805 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary/40 hover:scale-115 transition-all duration-300"
              >
                <LinkIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-semibold text-white text-base tracking-wider uppercase text-xs text-secondary/80">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/practice-areas/corporate-law" className="hover:text-white transition-colors duration-300">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/company-registration" className="hover:text-white transition-colors duration-300">
                  Company Registration
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/foreign-investment" className="hover:text-white transition-colors duration-300">
                  Foreign Investment
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/property-law" className="hover:text-white transition-colors duration-300">
                  Property Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/family-law" className="hover:text-white transition-colors duration-300">
                  Family Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-semibold text-white text-base tracking-wider uppercase text-xs text-secondary/80">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/lawyers" className="hover:text-white transition-colors duration-300">
                  Our Lawyers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors duration-300">
                  Legal Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact Info */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-white text-base tracking-wider uppercase text-xs text-secondary/80">
                Newsletter
              </h4>
              <p className="text-xs text-slate-400">
                Subscribe to receive our latest legal updates and insights.
              </p>
              <form className="flex gap-2 mt-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 h-10 px-4 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-secondary/40 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#064e3b] via-[#0d9488] to-[#34d399] flex items-center justify-center text-white hover:scale-105 transition-all duration-300"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4 text-slate-950" />
                </button>
              </form>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="font-semibold text-white text-xs tracking-wider uppercase text-secondary/80">
                Contact Info
              </h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <span>Maitidevi, Bagmati Province, Nepal</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-secondary shrink-0" />
                  <span>+977 1-4200000</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-secondary shrink-0" />
                  <span>contact@yuktilegalservices.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Yukti Legal Services. All rights reserved. Registered Law Firm in Nepal.</p>
          <Link href="/login" className="hover:text-secondary hover:underline transition-colors duration-300 font-semibold uppercase tracking-wider text-[10px]">
            Admin Access
          </Link>
        </div>
      </div>
    </footer>
  );
}

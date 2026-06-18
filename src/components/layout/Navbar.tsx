import Link from "next/link";
import { Menu, Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary tracking-tight">Yukti Legal <span className="text-secondary">Services</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">Home</Link>
          <Link href="/about" className="transition-colors hover:text-primary">About Us</Link>
          <Link href="/practice-areas" className="transition-colors hover:text-primary">Practice Areas</Link>
          <Link href="/lawyers" className="transition-colors hover:text-primary">Our Lawyers</Link>
          <Link href="/blog" className="transition-colors hover:text-primary">Legal Insights</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Phone className="h-4 w-4 text-secondary" />
            <span>+977 1-4200000</span>
          </div>
          <Link 
            href="/contact" 
            className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Book Consultation
          </Link>
          <button className="md:hidden p-2 text-foreground">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

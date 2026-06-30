"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Lawyers", href: "/lawyers" },
  { label: "Legal Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#064e3b] via-[#0d9488] to-[#34d399] z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-350 ${
          isScrolled
            ? "bg-[#f4f6f4]/85 backdrop-blur-md border-b border-slate-200/50 py-4 shadow-sm"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-secondary">
              Yukti Legal <span className="text-gradient-blue">Services</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Magnetic key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative px-2.5 py-2 text-sm font-medium transition-colors hover:text-foreground duration-300 block ${
                      isActive ? "text-foreground font-semibold" : "text-slate-555"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-gradient-to-r from-[#064e3b] via-[#0d9488] to-[#34d399]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </Magnetic>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-700 bg-white border border-slate-200/50 px-4 py-2 rounded-full shadow-xs">
              <Phone className="h-4 w-4 text-secondary animate-pulse" />
              <span>+977 1-4200000</span>
            </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#064e3b] via-[#0d9488] to-[#34d399] px-6 text-sm font-semibold text-white shadow-md shadow-secondary/10 hover:shadow-secondary/25 hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-foreground transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#f4f6f4] border-b border-slate-200 p-6 flex flex-col gap-4 md:hidden z-50 shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 border-b border-slate-200/50 ${
                  pathname === item.href ? "text-secondary font-bold" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-slate-755">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+977 1-4200000</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#064e3b] via-[#0d9488] to-[#34d399] text-sm font-semibold text-white"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}

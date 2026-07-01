"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X, Sun, Moon } from "lucide-react";
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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
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
    
    // Check local storage for theme
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--gradient-1)] via-[var(--gradient-2)] to-[var(--gradient-3)] z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${
          pathname !== "/"
            ? "bg-[#0b121f] border-b border-white/5 py-4 shadow-md"
            : isScrolled
              ? "bg-[#0b121f]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-md"
              : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-primary">
              Yukti Legal <span className="text-primary font-serif font-semibold italic">Services</span>
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
                    className={`relative px-2.5 py-2 text-sm font-medium transition-colors hover:text-white duration-300 block ${
                      isActive ? "text-white font-semibold" : "text-white/70"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-primary"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </Magnetic>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-white/90 bg-white/5 border border-white/10 px-4 py-2 rounded-full shadow-xs">
              <Phone className="h-4 w-4 text-primary animate-pulse" />
              <span>+977 1-4200000</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer animate-fade-in"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="h-4.5 w-4.5 text-primary" />
              ) : (
                <Sun className="h-4.5 w-4.5 text-primary" />
              )}
            </button>

            <Link
              href="/contact"
              className="hidden md:inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-[#0b121f] shadow-md shadow-primary/10 hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
            >
              Book a Call
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors cursor-pointer"
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
            className="absolute top-full left-0 right-0 bg-[#0b121f] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden z-50 shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 border-b border-white/5 ${
                  pathname === item.href ? "text-primary font-bold" : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>+977 1-4200000</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-primary text-sm font-bold text-[#0b121f] shadow-md"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}



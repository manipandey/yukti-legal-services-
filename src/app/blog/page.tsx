"use client";

import Link from "next/link";
import { mockBlogs } from "@/lib/mockData";
import { Calendar, Search, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden">
      {/* Header */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 bg-[radial-gradient(circle_at_50%_120%,rgba(181,148,104,0.03)_0%,transparent_50%)]">
        <FadeIn className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block">Legal Insights</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 tracking-tight">Our Publications</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-555 max-w-2xl mx-auto leading-relaxed">
            Stay informed with the latest corporate legal updates, FDI guidelines, and legal analyses from our advocates.
          </p>
        </FadeIn>
      </section>

      {/* Main Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Main Blog List (Left) */}
            <div className="lg:col-span-8">
              <StaggerContainer className="space-y-8">
                {mockBlogs.map((blog) => (
                  <StaggerItem key={blog.id}>
                    <SpotlightCard className="p-8 group border-slate-200/60 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs text-slate-500 mb-5">
                        <span className="bg-slate-50 border border-slate-200 text-secondary px-3.5 py-1 rounded-full font-semibold uppercase tracking-wider shadow-xs">
                          {blog.category}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4.5 w-4.5 text-secondary" />
                          <span>{new Date(blog.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                        </div>
                      </div>

                      <Link href={`/blog/${blog.slug}`}>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4 hover:text-secondary transition-colors duration-300 leading-tight">
                          {blog.title}
                        </h2>
                      </Link>
                      
                      <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        {blog.seo_meta}
                      </p>
                      
                      <Link 
                        href={`/blog/${blog.slug}`} 
                        className="inline-flex items-center text-sm font-semibold text-secondary hover:text-amber-555 transition-colors group/link"
                      >
                        Read full analysis <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1.5" />
                      </Link>
                    </SpotlightCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Sidebar (Right) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Search Widget */}
              <div className="bg-slate-50/50 border border-slate-200/60 p-7 rounded-2xl backdrop-blur-md shadow-sm">
                <h3 className="text-base font-serif font-bold text-slate-900 mb-4.5 pb-2 border-b border-slate-200">Search Articles</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search publications..." 
                    className="w-full h-11 pl-4 pr-10 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-colors"
                  />
                  <Search className="absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-slate-50/50 border border-slate-200/60 p-7 rounded-2xl backdrop-blur-md shadow-sm">
                <h3 className="text-base font-serif font-bold text-slate-900 mb-4.5 pb-2 border-b border-slate-200">Legal Categories</h3>
                <ul className="space-y-3.5 text-sm text-slate-600">
                  <li>
                    <Link href="#" className="hover:text-secondary transition-colors duration-300 flex items-center justify-between">
                      <span>Business & Corporate Law</span>
                      <span className="text-xs text-slate-400 font-mono">(12)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-secondary transition-colors duration-300 flex items-center justify-between">
                      <span>Company Registration</span>
                      <span className="text-xs text-slate-400 font-mono">(8)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-secondary transition-colors duration-300 flex items-center justify-between">
                      <span>Foreign Direct Investment</span>
                      <span className="text-xs text-slate-400 font-mono">(5)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-secondary transition-colors duration-300 flex items-center justify-between">
                      <span>Real Estate & Land Law</span>
                      <span className="text-xs text-slate-400 font-mono">(9)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-secondary transition-colors duration-300 flex items-center justify-between">
                      <span>Wealth & Family Law</span>
                      <span className="text-xs text-slate-400 font-mono">(4)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

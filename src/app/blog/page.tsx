"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Search, ArrowRight, Loader2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/MotionWrapper";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  category: string;
  author_id: string;
  seo_title: string;
  seo_meta: string;
  published_at: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs");
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        }
      } catch (e) {
        console.error("Failed to load blogs:", e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.seo_meta.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group blogs by category counts
  const categoryCounts = blogs.reduce((acc: { [key: string]: number }, b) => {
    acc[b.category] = (acc[b.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden pt-20">
      {/* Header */}
      <section className="relative py-24 md:py-32 border-b border-slate-200/50 dark:border-slate-800/40 bg-[radial-gradient(circle_at_50%_120%,rgba(154,120,62,0.03)_0%,transparent_50%)]">
        <FadeIn className="container mx-auto px-4 md:px-6 text-center space-y-4">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block">Legal Insights</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground tracking-tight">Our Publications</h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-655 dark:text-slate-350 max-w-2xl mx-auto leading-relaxed">
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
              {isLoading ? (
                <div className="flex justify-center items-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : filteredBlogs.length === 0 ? (
                <div className="text-center py-20 text-slate-500">
                  No articles found matching your criteria.
                </div>
              ) : (
                <StaggerContainer className="space-y-8">
                  {filteredBlogs.map((blog) => (
                    <StaggerItem key={blog.id}>
                      <SpotlightCard className="group">
                        <div className="p-8">
                          <div className="flex flex-col md:flex-row md:items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-5">
                            <span className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 text-secondary px-3.5 py-1 rounded-full font-semibold uppercase tracking-wider shadow-xs">
                              {blog.category}
                            </span>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4.5 w-4.5 text-secondary" />
                              <span>
                                {new Date(blog.published_at).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </span>
                            </div>
                          </div>

                          <Link href={`/blog/${blog.slug}`}>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 hover:text-secondary transition-colors duration-300 leading-tight">
                              {blog.title}
                            </h2>
                          </Link>
                          
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-light">
                            {blog.seo_meta}
                          </p>
                          
                          <Link 
                            href={`/blog/${blog.slug}`} 
                            className="inline-flex items-center text-sm font-semibold text-secondary hover:underline transition-colors group/link"
                          >
                            Read full analysis <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1.5" />
                          </Link>
                        </div>
                      </SpotlightCard>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}
            </div>

            {/* Sidebar (Right) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Search Widget */}
              <div className="bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800 p-7 rounded-2xl backdrop-blur-md shadow-sm">
                <h3 className="text-base font-serif font-bold text-foreground mb-4.5 pb-2 border-b border-slate-200 dark:border-slate-800">Search Articles</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search publications..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-11 pl-4 pr-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-sm text-foreground placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-secondary transition-colors"
                  />
                  <Search className="absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800 p-7 rounded-2xl backdrop-blur-md shadow-sm">
                <h3 className="text-base font-serif font-bold text-foreground mb-4.5 pb-2 border-b border-slate-200 dark:border-slate-800">Legal Categories</h3>
                {isLoading ? (
                  <div className="flex justify-center items-center py-4">
                    <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
                  </div>
                ) : Object.keys(categoryCounts).length === 0 ? (
                  <p className="text-xs text-slate-500">No categories found.</p>
                ) : (
                  <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-350">
                    {Object.entries(categoryCounts).map(([cat, count]) => (
                      <li key={cat}>
                        <button
                          onClick={() => setSearchQuery(cat)}
                          className="hover:text-secondary transition-colors duration-300 flex items-center justify-between w-full text-left"
                        >
                          <span>{cat}</span>
                          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">({count})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

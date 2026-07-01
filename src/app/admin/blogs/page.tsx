"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus, Search, Calendar, User, Trash2, FileText, AlertCircle, X } from "lucide-react";

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

interface Lawyer {
  id: string;
  name: string;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("Company Registration");
  const [authorId, setAuthorId] = useState("");
  const [content, setContent] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [seoMeta, setSeoMeta] = useState("");

  async function loadData() {
    try {
      const [blogsRes, lawyersRes] = await Promise.all([
        fetch("/api/blogs"),
        fetch("/api/lawyers"),
      ]);
      if (blogsRes.ok && lawyersRes.ok) {
        const blogsData = await blogsRes.json();
        const lawyersData = await lawyersRes.json();
        setBlogs(blogsData);
        setLawyers(lawyersData);
        if (lawyersData.length > 0) {
          setAuthorId(lawyersData[0].id);
        }
      }
    } catch (e) {
      console.error("Failed to load CMS data:", e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    // Auto-generate slug from title
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "")
    );
  };

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      title,
      slug,
      category,
      author_id: authorId,
      content,
      seo_title: seoTitle || title,
      seo_meta: seoMeta || title,
    };

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const newBlog = await response.json();
        setBlogs((prev) => [newBlog, ...prev]);
        setIsAddOpen(false);
        // Reset form
        setTitle("");
        setSlug("");
        setContent("");
        setSeoTitle("");
        setSeoMeta("");
      }
    } catch (error) {
      console.error("Failed to create blog:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this publication?")) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setBlogs((prev) => prev.filter((b) => b.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  const filteredBlogs = blogs.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manage Publications</h1>
          <p className="text-sm text-slate-505">Write, update, and manage legal insights and posts.</p>
        </div>
        <button
          onClick={() => setIsAddOpen(true)}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-[#0b121f] hover:bg-primary/90 transition-all duration-300 gap-2 cursor-pointer"
        >
          <Plus className="h-4.5 w-4.5" /> Write Publication
        </button>
      </div>

      {/* Toolbar Search */}
      <div className="relative">
        <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
        <input
          type="text"
          placeholder="Search by publication title or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-11 pl-11 pr-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-foreground focus:outline-none focus:border-primary"
        />
      </div>

      {/* List Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex flex-col items-center justify-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-slate-500">Loading publications...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="p-16 text-center text-slate-500">
            <AlertCircle className="h-10 w-10 text-slate-350 mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">No Publications Found</h3>
            <p className="text-sm">Click 'Write Publication' to create your first legal update.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-foreground">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">Title</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Author</th>
                  <th className="px-6 py-4 font-semibold">Published Date</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredBlogs.map((b) => {
                  const author = lawyers.find((l) => l.id === b.author_id);
                  return (
                    <tr key={b.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">
                        <div>
                          {b.title}
                          <p className="text-xs font-normal text-slate-400 mt-0.5">slug: {b.slug}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300 font-semibold">
                          {b.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <User className="h-4 w-4 text-primary shrink-0" />
                          <span>{author ? author.name : "System Agent"}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-slate-400 shrink-0" />
                          <span>{new Date(b.published_at).toLocaleDateString("en-US")}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDelete(b.id)}
                          className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                          title="Delete Publication"
                        >
                          <Trash2 className="h-4.5 w-4.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Write Publication Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-foreground">Write Legal Publication</h3>
              <button onClick={() => setIsAddOpen(false)} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                <X className="h-5 w-5 text-slate-400" />
              </button>
            </div>
            
            <form onSubmit={handleAddBlog} className="p-6 overflow-y-auto space-y-4 flex-1">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
                    placeholder="Enter article title"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Slug</label>
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
                    placeholder="article-url-slug"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-foreground focus:outline-none focus:border-primary"
                  >
                    <option value="Company Registration">Company Registration</option>
                    <option value="Foreign Investment">Foreign Investment</option>
                    <option value="Corporate Compliance">Corporate Compliance</option>
                    <option value="Property Law">Property Law</option>
                    <option value="Family Law">Family Law</option>
                    <option value="Litigation Insights">Litigation Insights</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Author</label>
                  <select
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-foreground focus:outline-none focus:border-primary"
                  >
                    {lawyers.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Seo Metadata (Excerpt)</label>
                <input
                  type="text"
                  value={seoMeta}
                  onChange={(e) => setSeoMeta(e.target.value)}
                  className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
                  placeholder="Enter a brief excerpt for SEO and cards summary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Article Content (HTML supported)</label>
                <textarea
                  required
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary min-h-[150px]"
                  placeholder="<p>Write your detailed legal publication here...</p>"
                />
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="h-11 px-5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 text-sm font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 px-5 rounded-lg bg-primary text-[#0b121f] text-sm font-bold hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  Publish Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

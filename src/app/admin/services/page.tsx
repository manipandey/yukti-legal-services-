"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus, Search, Trash2, Landmark, Briefcase, AlertCircle, X } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
}

export default function AdminServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [icon, setIcon] = useState("Briefcase");

  async function loadServices() {
    try {
      const response = await fetch("/api/services");
      if (response.ok) {
        const data = await response.json();
        setServices(data);
      }
    } catch (e) {
      console.error("Failed to load services:", e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadServices();
  }, []);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "")
    );
  };

  const handleAddService = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      title,
      description,
      slug,
      icon,
    };

    try {
      const response = await fetch("/api/services", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const newRecord = await response.json();
        setServices((prev) => [...prev, newRecord]);
        setIsAddOpen(false);
        // Reset form
        setTitle("");
        setDescription("");
        setSlug("");
        setIcon("Briefcase");
      }
    } catch (error) {
      console.error("Failed to add service:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this practice area?")) return;

    try {
      const response = await fetch(`/api/services/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setServices((prev) => prev.filter((s) => s.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  const filteredServices = services.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manage Practice Areas</h1>
          <p className="text-sm text-slate-505">Create, update, or remove legal service domains.</p>
        </div>
        <button
          onClick={() => setIsAddOpen(true)}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-[#0b121f] hover:bg-primary/90 transition-all duration-300 gap-2 cursor-pointer"
        >
          <Plus className="h-4.5 w-4.5" /> Add Service Area
        </button>
      </div>

      {/* Toolbar Search */}
      <div className="relative">
        <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
        <input
          type="text"
          placeholder="Search by practice area title..."
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
            <p className="text-sm text-slate-500">Loading service areas...</p>
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="p-16 text-center text-slate-500">
            <AlertCircle className="h-10 w-10 text-slate-355 mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">No Practice Areas Found</h3>
            <p className="text-sm">Click 'Add Service Area' to configure a new practice offer.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-foreground">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">Service Title</th>
                  <th className="px-6 py-4 font-semibold">Description</th>
                  <th className="px-6 py-4 font-semibold">URL Route Slug</th>
                  <th className="px-6 py-4 font-semibold">Icon Visual</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredServices.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">
                      {s.title}
                    </td>
                    <td className="px-6 py-4 text-slate-650 dark:text-slate-300 max-w-sm truncate">
                      {s.description}
                    </td>
                    <td className="px-6 py-4 font-mono text-slate-500 text-xs">
                      /practice-areas/{s.slug}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        <Briefcase className="h-3.5 w-3.5 text-primary" />
                        {s.icon}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(s.id)}
                        className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                        title="Delete Service"
                      >
                        <Trash2 className="h-4.5 w-4.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Service Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl w-full max-w-xl flex flex-col">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-foreground">Add New Practice Area</h3>
              <button onClick={() => setIsAddOpen(false)} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                <X className="h-5 w-5 text-slate-400" />
              </button>
            </div>
            
            <form onSubmit={handleAddService} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Service Title</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
                    placeholder="e.g. Intellectual Property"
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
                    placeholder="intellectual-property"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Lucide Icon Name</label>
                <select
                  value={icon}
                  onChange={(e) => setIcon(e.target.value)}
                  className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="Briefcase">Briefcase (Corporate/Advisory)</option>
                  <option value="Building">Building (Real Estate/Leases)</option>
                  <option value="Globe">Globe (FDI/International)</option>
                  <option value="Landmark">Landmark (Regulatory/Land)</option>
                  <option value="Users">Users (Family/Wealth)</option>
                  <option value="Gavel">Gavel (Litigation/Disputes)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Short Description</label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary min-h-[100px]"
                  placeholder="Provide a summary description of the legal service..."
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
                  Register Service Area
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

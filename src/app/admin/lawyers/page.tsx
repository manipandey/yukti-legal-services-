"use client";

import { useEffect, useState } from "react";
import { Loader2, Plus, Search, User, Trash2, Award, Briefcase, AlertCircle, X } from "lucide-react";

interface Lawyer {
  id: string;
  name: string;
  position: string;
  experience: string;
  qualifications: string;
  specialization: string;
  image_url: string;
}

export default function AdminLawyersPage() {
  const [lawyers, setLawyers] = useState<Lawyer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [imageUrl, setImageUrl] = useState("/placeholder-lawyer.jpg");

  async function loadLawyers() {
    try {
      const response = await fetch("/api/lawyers");
      if (response.ok) {
        const data = await response.json();
        setLawyers(data);
      }
    } catch (e) {
      console.error("Failed to load lawyers:", e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadLawyers();
  }, []);

  const handleAddLawyer = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      name,
      position,
      experience,
      qualifications,
      specialization,
      image_url: imageUrl,
    };

    try {
      const response = await fetch("/api/lawyers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const newRecord = await response.json();
        setLawyers((prev) => [...prev, newRecord]);
        setIsAddOpen(false);
        // Reset form
        setName("");
        setPosition("");
        setExperience("");
        setQualifications("");
        setSpecialization("");
      }
    } catch (error) {
      console.error("Failed to add lawyer:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove this lawyer from the panel?")) return;

    try {
      const response = await fetch(`/api/lawyers/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setLawyers((prev) => prev.filter((l) => l.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete lawyer:", error);
    }
  };

  const filteredLawyers = lawyers.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manage Lawyers Panel</h1>
          <p className="text-sm text-slate-505">Add, edit, or remove legal advocates and consultants.</p>
        </div>
        <button
          onClick={() => setIsAddOpen(true)}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-[#0b121f] hover:bg-primary/90 transition-all duration-300 gap-2 cursor-pointer"
        >
          <Plus className="h-4.5 w-4.5" /> Add Lawyer
        </button>
      </div>

      {/* Toolbar Search */}
      <div className="relative">
        <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
        <input
          type="text"
          placeholder="Search by advocate name or specialization..."
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
            <p className="text-sm text-slate-500">Loading lawyers panel...</p>
          </div>
        ) : filteredLawyers.length === 0 ? (
          <div className="p-16 text-center text-slate-500">
            <AlertCircle className="h-10 w-10 text-slate-355 mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">No Lawyers Found</h3>
            <p className="text-sm">Click 'Add Lawyer' to register a new legal panelist.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-foreground">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-semibold">Advocate Name</th>
                  <th className="px-6 py-4 font-semibold">Position</th>
                  <th className="px-6 py-4 font-semibold">Qualifications</th>
                  <th className="px-6 py-4 font-semibold">Experience</th>
                  <th className="px-6 py-4 font-semibold">Specialization</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredLawyers.map((l) => {
                  const initials = l.name.split(" ").map((n) => n[0]).join("");
                  return (
                    <tr key={l.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-300">
                            {initials}
                          </div>
                          <span>{l.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                        {l.position}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <Award className="h-4 w-4 text-primary shrink-0" />
                          <span>{l.qualifications}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-mono">
                        {l.experience}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4 text-slate-400 shrink-0" />
                          <span>{l.specialization}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDelete(l.id)}
                          className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors cursor-pointer"
                          title="Remove Lawyer"
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

      {/* Add Lawyer Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl w-full max-w-xl flex flex-col">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-foreground">Add Advocate Panel Member</h3>
              <button onClick={() => setIsAddOpen(false)} className="p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer">
                <X className="h-5 w-5 text-slate-400" />
              </button>
            </div>
            
            <form onSubmit={handleAddLawyer} className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
                    placeholder="Advocate Name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Position / Role</label>
                  <input
                    type="text"
                    required
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
                    placeholder="e.g. Advocate / Senior Partner"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Qualifications</label>
                  <input
                    type="text"
                    required
                    value={qualifications}
                    onChange={(e) => setQualifications(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
                    placeholder="e.g. LL.M. / LL.B."
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Experience</label>
                  <input
                    type="text"
                    required
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
                    placeholder="e.g. 10+ Years / 5 Years"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Specialization (Comma separated)</label>
                <input
                  type="text"
                  required
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
                  placeholder="e.g. Corporate Law, FDI compliance"
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
                  Register Advocate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

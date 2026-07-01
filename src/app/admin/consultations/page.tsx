"use client";

import { useEffect, useState } from "react";
import { Loader2, Search, Filter, Mail, Phone, Calendar, CheckSquare, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

interface Consultation {
  id: string;
  name: string;
  phone: string;
  email: string;
  issue: string;
  message: string;
  status: "Pending" | "Contacted";
  created_at: string;
}

export default function AdminConsultationsPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Pending" | "Contacted">("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  async function loadConsultations() {
    try {
      const response = await fetch("/api/consultations");
      if (response.ok) {
        const data = await response.json();
        setConsultations(data);
      }
    } catch (error) {
      console.error("Failed to load consultations:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadConsultations();
  }, []);

  const toggleStatus = async (id: string, currentStatus: "Pending" | "Contacted") => {
    setUpdatingId(id);
    const newStatus = currentStatus === "Pending" ? "Contacted" : "Pending";
    
    try {
      const response = await fetch(`/api/consultations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        const updatedRecord = await response.json();
        setConsultations((prev) =>
          prev.map((c) => (c.id === id ? updatedRecord : c))
        );
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      setUpdatingId(null);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Filter list based on search and status select
  const filteredConsultations = consultations.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery) ||
      c.issue.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesStatus = statusFilter === "All" ? true : c.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Consultation Inquiries</h1>
          <p className="text-sm text-slate-500">Manage, review, and follow up on client legal consultation requests.</p>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 h-4.5 w-4.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, email, phone, or issue..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-transparent text-sm text-foreground focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4.5 w-4.5 text-slate-400" />
          <select
            value={statusFilter}
            onChange={(e: any) => setStatusFilter(e.target.value)}
            className="h-11 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm text-foreground focus:outline-none focus:border-primary cursor-pointer"
          >
            <option value="All">All Inquiries</option>
            <option value="Pending">Pending</option>
            <option value="Contacted">Contacted</option>
          </select>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs overflow-hidden">
        {isLoading ? (
          <div className="p-16 flex flex-col items-center justify-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm text-slate-500">Loading inquiries database...</p>
          </div>
        ) : filteredConsultations.length === 0 ? (
          <div className="p-16 text-center text-slate-500 dark:text-slate-400">
            <AlertCircle className="h-10 w-10 text-slate-350 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-1">No Inquiries Found</h3>
            <p className="text-sm">Try broadening your search keywords or selection filters.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-foreground">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 font-semibold w-10"></th>
                  <th className="px-6 py-4 font-semibold">Client Name</th>
                  <th className="px-6 py-4 font-semibold">Contact Channels</th>
                  <th className="px-6 py-4 font-semibold">Area of Inquiry</th>
                  <th className="px-6 py-4 font-semibold">Inquiry Date</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredConsultations.map((c) => {
                  const isExpanded = expandedId === c.id;
                  const isUpdating = updatingId === c.id;
                  
                  return (
                    <div key={c.id} className="table-row-group">
                      {/* Standard Table Row */}
                      <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-950/25 transition-colors cursor-pointer" onClick={() => toggleExpand(c.id)}>
                        <td className="px-6 py-4 text-center">
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-slate-400" />
                          )}
                        </td>
                        <td className="px-6 py-4 font-semibold text-foreground">
                          {c.name}
                        </td>
                        <td className="px-6 py-4 space-y-1">
                          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                            <Mail className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span>{c.email}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                            <Phone className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span>{c.phone}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                          {c.issue}
                        </td>
                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                            <span>{new Date(c.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold ${
                            c.status === "Pending" 
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-450" 
                              : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-450"
                          }`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => toggleStatus(c.id, c.status)}
                            disabled={isUpdating}
                            className={`inline-flex items-center gap-1.5 h-8.5 px-3 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer ${
                              c.status === "Pending"
                                ? "bg-primary text-[#0b121f] hover:bg-primary/90"
                                : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {isUpdating ? (
                              <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            ) : (
                              <CheckSquare className="h-3.5 w-3.5" />
                            )}
                            {c.status === "Pending" ? "Mark Contacted" : "Revert Pending"}
                          </button>
                        </td>
                      </tr>
                      
                      {/* Expanded Details Row */}
                      {isExpanded && (
                        <tr className="bg-slate-50/50 dark:bg-slate-950/10">
                          <td colSpan={7} className="px-12 py-5 border-t border-b border-slate-100 dark:border-slate-850">
                            <div className="space-y-2">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Brief Case Description / Message</h4>
                              <p className="text-sm text-slate-750 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 p-4 rounded-xl font-light whitespace-pre-wrap">
                                {c.message || "No description provided."}
                              </p>
                            </div>
                          </td>
                        </tr>
                      )}
                    </div>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

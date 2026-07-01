"use client";

import { useEffect, useState } from "react";
import { mockBlogs, mockLawyers, mockServices } from "@/lib/mockData";
import { FileText, Users, Briefcase, MessageSquare, Loader2 } from "lucide-react";
import Link from "next/link";

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

export default function AdminDashboardPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
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
    loadData();
  }, []);

  const pendingCount = consultations.filter((c) => c.status === "Pending").length;
  const recentConsultations = consultations.slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded-full">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-450 font-medium">Total Blogs</p>
            <h3 className="text-2xl font-bold text-foreground">{mockBlogs.length}</h3>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-primary rounded-full">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-450 font-medium">Pending Consultations</p>
            <h3 className="text-2xl font-bold text-foreground">
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin text-slate-400" />
              ) : (
                pendingCount
              )}
            </h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-950/20 text-green-600 dark:text-emerald-400 rounded-full">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-450 font-medium">Active Lawyers</p>
            <h3 className="text-2xl font-bold text-foreground">{mockLawyers.length}</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs flex items-center gap-4">
          <div className="p-4 bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 rounded-full">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-450 font-medium">Services Offered</p>
            <h3 className="text-2xl font-bold text-foreground">{mockServices.length}</h3>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-foreground">Recent Consultation Requests</h3>
          <Link 
            href="/admin/consultations" 
            className="text-xs font-semibold text-primary hover:underline"
          >
            View All &rarr;
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-12 flex justify-center items-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : recentConsultations.length === 0 ? (
            <div className="p-12 text-center text-slate-500 dark:text-slate-400">
              No consultation requests found.
            </div>
          ) : (
            <table className="w-full text-sm text-left text-foreground">
              <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-3 font-semibold">Name</th>
                  <th className="px-6 py-3 font-semibold">Email</th>
                  <th className="px-6 py-3 font-semibold">Phone</th>
                  <th className="px-6 py-3 font-semibold">Issue</th>
                  <th className="px-6 py-3 font-semibold">Date</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {recentConsultations.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-950/20">
                    <td className="px-6 py-4 font-semibold text-foreground">{c.name}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{c.email}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{c.phone}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{c.issue}</td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                      {new Date(c.created_at).toLocaleDateString("en-US")}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${
                        c.status === "Pending" 
                          ? "bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-450" 
                          : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-450"
                      }`}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

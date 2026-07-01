"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LayoutDashboard, FileText, Users, Briefcase, MessageSquare, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/login");
      router.refresh();
    } catch (e) {
      console.error("Sign out failed:", e);
    }
  };

  const getLinkClass = (path: string) => {
    const base = "flex items-center gap-3 px-4 py-3 rounded-md transition-colors ";
    if (pathname === path) {
      return base + "bg-secondary text-[#060a13] font-semibold";
    }
    return base + "hover:bg-primary-foreground/10 text-white/80 hover:text-white";
  };

  return (
    <div className="flex h-screen bg-[#050b14]/5">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a1324] border-r border-slate-800 hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <span className="text-lg font-serif font-bold text-white tracking-wider uppercase">
            Yukti <span className="text-secondary font-sans font-semibold">Admin</span>
          </span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/admin" className={getLinkClass("/admin")}>
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/admin/blogs" className={getLinkClass("/admin/blogs")}>
            <FileText className="h-5 w-5" />
            Manage Blogs
          </Link>
          <Link href="/admin/consultations" className={getLinkClass("/admin/consultations")}>
            <MessageSquare className="h-5 w-5" />
            Consultations
          </Link>
          <Link href="/admin/lawyers" className={getLinkClass("/admin/lawyers")}>
            <Users className="h-5 w-5" />
            Lawyers
          </Link>
          <Link href="/admin/services" className={getLinkClass("/admin/services")}>
            <Briefcase className="h-5 w-5" />
            Services
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-md hover:bg-red-950/30 border border-transparent hover:border-red-900/30 text-red-400 transition-all duration-300 cursor-pointer text-sm font-semibold"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white dark:bg-slate-905 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6">
          <h2 className="text-lg font-serif font-bold text-foreground">
            {pathname === "/admin" && "Dashboard Overview"}
            {pathname === "/admin/blogs" && "Manage Publications"}
            {pathname === "/admin/consultations" && "Consultation Inquiries"}
            {pathname === "/admin/lawyers" && "Manage Lawyers Panel"}
            {pathname === "/admin/services" && "Manage Practice Areas"}
          </h2>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Admin User</span>
            <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500">
              <User className="h-5 w-5" />
            </div>
          </div>
        </header>
        
        <div className="flex-1 overflow-auto p-6 bg-slate-50/50 dark:bg-slate-950/20">
          {children}
        </div>
      </main>
    </div>
  );
}

function User(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

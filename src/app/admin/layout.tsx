import Link from "next/link";
import { LayoutDashboard, FileText, Users, Briefcase, MessageSquare, LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-primary-foreground/10">
          <span className="text-xl font-bold tracking-tight">Admin <span className="text-secondary">Panel</span></span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-md bg-secondary/10 text-secondary transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/admin/blogs" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors">
            <FileText className="h-5 w-5" />
            Manage Blogs
          </Link>
          <Link href="/admin/consultations" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors">
            <MessageSquare className="h-5 w-5" />
            Consultations
          </Link>
          <Link href="/admin/lawyers" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors">
            <Users className="h-5 w-5" />
            Lawyers
          </Link>
          <Link href="/admin/services" className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-primary-foreground/10 transition-colors">
            <Briefcase className="h-5 w-5" />
            Services
          </Link>
        </nav>
        <div className="p-4 border-t border-primary-foreground/10">
          <button className="flex w-full items-center gap-3 px-4 py-3 rounded-md hover:bg-red-500/20 text-red-200 transition-colors">
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Admin User</span>
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

// Quick placeholder for User icon since we didn't import it at the top
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

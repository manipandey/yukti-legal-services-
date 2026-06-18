import { mockBlogs, mockLawyers, mockServices } from "@/lib/mockData";
import { FileText, Users, Briefcase, MessageSquare } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-50 text-blue-600 rounded-full">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Total Blogs</p>
            <h3 className="text-2xl font-bold">{mockBlogs.length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border shadow-sm flex items-center gap-4">
          <div className="p-4 bg-green-50 text-green-600 rounded-full">
            <MessageSquare className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">New Consultations</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border shadow-sm flex items-center gap-4">
          <div className="p-4 bg-purple-50 text-purple-600 rounded-full">
            <Users className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Active Lawyers</p>
            <h3 className="text-2xl font-bold">{mockLawyers.length}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border shadow-sm flex items-center gap-4">
          <div className="p-4 bg-orange-50 text-orange-600 rounded-full">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">Services Offered</p>
            <h3 className="text-2xl font-bold">{mockServices.length}</h3>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold">Recent Consultation Requests</h3>
        </div>
        <div className="p-0">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Email</th>
                <th className="px-6 py-3 font-medium">Issue</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-muted/30">
                <td className="px-6 py-4 font-medium">Rahul Shrestha</td>
                <td className="px-6 py-4">rahul@example.com</td>
                <td className="px-6 py-4">Company Registration</td>
                <td className="px-6 py-4">2024-03-15</td>
                <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Pending</span></td>
              </tr>
              <tr className="hover:bg-muted/30">
                <td className="px-6 py-4 font-medium">Priya Thapa</td>
                <td className="px-6 py-4">priya@example.com</td>
                <td className="px-6 py-4">Property Dispute</td>
                <td className="px-6 py-4">2024-03-14</td>
                <td className="px-6 py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Contacted</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

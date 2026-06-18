import Link from "next/link";
import { mockBlogs } from "@/lib/mockData";
import { Calendar, User } from "lucide-react";

export const metadata = {
  title: "Legal Insights | Yukti Legal Services",
  description: "Read the latest legal insights, news, and guides on Nepalese Law from our experts.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Legal Insights</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Stay updated with the latest legal news, expert opinions, and comprehensive guides.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Blog List */}
            <div className="lg:col-span-2 space-y-8">
              {mockBlogs.map((blog) => (
                <article key={blog.id} className="bg-background border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-medium">
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(blog.published_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${blog.slug}`}>
                      <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">{blog.title}</h2>
                    </Link>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {blog.seo_meta}
                    </p>
                    <Link href={`/blog/${blog.slug}`} className="inline-flex items-center font-medium text-primary hover:text-secondary">
                      Read full article
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-muted/50 p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 border-b pb-2">Search</h3>
                <input type="text" placeholder="Search articles..." className="w-full h-10 px-3 rounded-md border bg-background" />
              </div>
              <div className="bg-muted/50 p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4 border-b pb-2">Categories</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Business Law Nepal</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Company Registration</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Foreign Investment</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Property Law</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Family Law</Link></li>
                  <li><Link href="#" className="text-muted-foreground hover:text-primary">Legal Updates</Link></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

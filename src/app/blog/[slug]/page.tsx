import { getBlogs, getLawyers } from "@/lib/db";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/MotionWrapper";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug);
  
  if (!blog) return { title: "Not Found" };

  return {
    title: `${blog.seo_title} | Yukti Legal Services`,
    description: blog.seo_meta,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const lawyers = await getLawyers();
  const author = lawyers.find((l) => l.id === blog.author_id);

  return (
    <div className="flex flex-col w-full bg-background text-foreground overflow-hidden pt-20">
      {/* Header */}
      <section className="relative py-24 md:py-32 border-b border-slate-100 bg-[radial-gradient(circle_at_50%_120%,rgba(30, 64, 175, 0.03)_0%,transparent_50%)]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-6">
          <Link href="/blog" className="inline-flex items-center text-xs font-bold tracking-widest text-secondary hover:text-blue-550 transition-colors uppercase">
            <ArrowLeft className="mr-1.5 h-3.5 w-3.5" /> Back to Insights
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-505">
            <span className="bg-slate-50 border border-slate-200 text-secondary px-3.5 py-1 rounded-full font-semibold uppercase tracking-wider shadow-xs">
              {blog.category}
            </span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-secondary" />
              <span>{new Date(blog.published_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
            {author && (
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-secondary" />
                <span>By {author.name}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-tight pt-2">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
          <FadeIn delay={0.2} className="bg-slate-50/40 border border-slate-200/60 p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-sm">
            {/* Highly customized nested child selectors for styling dynamic HTML on light background */}
            <div 
              className="text-slate-650 leading-relaxed text-base md:text-lg space-y-6
                [&>p]:text-slate-600 [&>p]:leading-relaxed
                [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-10 [&>h2]:mb-4
                [&>h3]:text-xl [&>h3]:font-serif [&>h3]:font-bold [&>h3]:text-slate-900 [&>h3]:mt-8 [&>h3]:mb-3
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:my-4
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:my-4
                [&>li]:text-slate-600
                [&>strong]:text-slate-900 [&>strong]:font-semibold
                [&>a]:text-secondary [&>a]:underline hover:[&>a]:text-blue-600"
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

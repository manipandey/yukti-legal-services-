import { mockBlogs, mockLawyers } from "@/lib/mockData";
import { notFound } from "next/navigation";
import { Calendar, User } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const blog = mockBlogs.find((b) => b.slug === slug);
  
  if (!blog) return { title: "Not Found" };

  return {
    title: `${blog.seo_title} | Yukti Legal Services`,
    description: blog.seo_meta,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = mockBlogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const author = mockLawyers.find((l) => l.id === blog.author_id);

  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex items-center gap-4 text-sm text-primary-foreground/80 mb-6">
            <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full font-medium">
              {blog.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blog.published_at).toLocaleDateString()}</span>
            </div>
            {author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{author.name}</span>
              </div>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 leading-tight">
            {blog.title}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </div>
      </section>
    </div>
  );
}

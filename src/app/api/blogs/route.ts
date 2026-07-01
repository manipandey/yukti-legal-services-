import { NextResponse } from "next/server";
import { getBlogs, createBlog } from "@/lib/db";
import { z } from "zod";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  author_id: z.string().min(1, "Author is required"),
  seo_title: z.string().optional().default(""),
  seo_meta: z.string().optional().default(""),
});

export async function GET() {
  try {
    const data = await getBlogs();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = blogSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.format() },
        { status: 400 }
      );
    }
    
    const record = await createBlog(result.data);
    return NextResponse.json(record, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}

import { MetadataRoute } from 'next'
import { mockBlogs, mockServices } from '@/lib/mockData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nepallawfirm.com'

  // Static routes
  const routes = [
    '',
    '/about',
    '/practice-areas',
    '/lawyers',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic routes for practice areas
  const serviceRoutes = mockServices.map((service) => ({
    url: `${baseUrl}/practice-areas/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic routes for blogs
  const blogRoutes = mockBlogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.published_at),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...routes, ...serviceRoutes, ...blogRoutes]
}

import { fetchBlogs } from "@/lib/blogs";
import { SERVICE_SLUGS } from "@/lib/services";
import { SITE_URL, STATIC_ROUTES } from "@/lib/siteConfig";

export default async function sitemap() {
  const blogs = await fetchBlogs();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries = SERVICE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const blogEntries = blogs.map((blog) => ({
    url: `${SITE_URL}/blogdetails/${blog.id}`,
    lastModified: blog.created_at ? new Date(blog.created_at) : new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}

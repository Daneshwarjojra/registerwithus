import { API_BASE_URL } from "@/lib/api";

function toPlainText(html = "") {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export async function fetchBlogs() {
  if (!API_BASE_URL) return [];

  try {
    const response = await fetch(`${API_BASE_URL}/api/blogs`, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return [];
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return [];
    const data = await response.json();
    if (!data?.success || !Array.isArray(data.blogs)) return [];
    return data.blogs;
  } catch (error) {
    console.warn("Failed to fetch blogs:", error.message);
    return [];
  }
}

export async function getBlogPageData(id) {
  const blogs = await fetchBlogs();
  const blog = blogs.find((item) => String(item.id) === String(id)) || null;
  if (!blog) {
    return { blog: null, relatedPosts: [], recentPosts: [] };
  }

  const relatedPosts = blogs
    .filter(
      (item) =>
        item.category_name === blog.category_name && String(item.id) !== String(id)
    )
    .slice(0, 5);

  const recentPosts = blogs
    .filter((item) => String(item.id) !== String(id))
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);

  return { blog, relatedPosts, recentPosts };
}

export function getBlogDescription(blog, limit = 155) {
  if (!blog) return "";
  return toPlainText(blog.blogDescription).slice(0, limit);
}

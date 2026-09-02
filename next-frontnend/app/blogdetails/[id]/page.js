import { notFound } from "next/navigation";
import Blogdetails from "@/components/Blogs/Blogdetails";
import JsonLd from "@/components/Common/JsonLd";
import { API_BASE_URL } from "@/lib/api";
import { fetchBlogs, getBlogDescription, getBlogPageData } from "@/lib/blogs";
import { buildMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/structuredData";

export const revalidate = 3600;

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.map((blog) => ({ id: String(blog.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { blog } = await getBlogPageData(id);

  if (!blog) {
    return buildMetadata({
      title: "Blog Details",
      description:
        "Read our detailed blog articles to gain expert insights, business strategies, and the latest updates on company registration, compliance, and legal services in India.",
      path: `/blogdetails/${id}`,
      noIndex: true,
    });
  }

  const description =
    getBlogDescription(blog) ||
    `Read ${blog.title} for expert insights on business registration, compliance, and legal services in India.`;

  return buildMetadata({
    title: blog.title,
    description,
    path: `/blogdetails/${id}`,
    image: blog.image ? `${API_BASE_URL}${blog.image}` : undefined,
    type: "article",
  });
}

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  const { blog, relatedPosts, recentPosts } = await getBlogPageData(id);

  if (!blog) notFound();

  const description = getBlogDescription(blog);

  return (
    <>
      <JsonLd data={articleSchema(blog, description)} />
      <Blogdetails blog={blog} relatedPosts={relatedPosts} recentPosts={recentPosts} />
    </>
  );
}

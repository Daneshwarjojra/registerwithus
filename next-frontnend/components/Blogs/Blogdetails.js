import Link from "next/link";
import { API_BASE_URL } from "@/lib/api";
import "./Blogdetails.css";

function formatDate(value, month = "long") {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month,
    year: "numeric",
  });
}

function PostList({ posts, emptyText }) {
  if (!posts?.length) {
    return <p className="text-muted small">{emptyText}</p>;
  }

  return posts.map((post) => (
    <div className="related-post d-flex mb-3" key={post.id}>
      <img
        src={`${API_BASE_URL}${post.image}`}
        className="me-3 rounded"
        alt={post.title}
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />
      <div className="info">
        <Link href={`/blogdetails/${post.id}`} className="fw-semibold d-block text-dark">
          {post.title}
        </Link>
        <span className="text-muted">{formatDate(post.created_at, "short")}</span>
      </div>
    </div>
  ));
}

export default function Blogdetails({ blog, relatedPosts = [], recentPosts = [] }) {
  return (
    <section>
      <div className="container py-5 mt-5">
        <h1 className="fw-bold">{blog.title}</h1>
        <p className="date">{formatDate(blog.created_at)}</p>
        <div className="row">
          <div className="col-lg-8">
            {blog.image ? (
              <img
                src={`${API_BASE_URL}${blog.image}`}
                className="img-fluid blog-img mb-4"
                alt={blog.title}
              />
            ) : null}
            <article dangerouslySetInnerHTML={{ __html: blog.blogDescription }} />
            <div className="mt-4">
              <strong>Category:</strong> {blog.category_name}
            </div>
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0">
            <h2 className="h5 fw-bold mb-3">Related Posts</h2>
            <PostList posts={relatedPosts} emptyText="No related posts found." />
            <h2 className="h5 fw-bold mt-4 mb-3">Recent Posts</h2>
            <PostList posts={recentPosts} emptyText="No recent posts found." />
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { API_BASE_URL } from "@/lib/api";
import { fetchJson } from "@/lib/clientApi";
import Link from "next/link";
import './Blogmain.css';
function Blogmain() {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        // ✅ Fetch blogs
        fetchJson("/api/blogs")
            .then(data => {
                if (data.success && Array.isArray(data.blogs)) {
                    setBlogs(data.blogs);
                }
                if (data.success && Array.isArray(data.categories)) {
                    setCategories(data.categories);
                }
            })
            .catch(() => {});
    }, []);
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <section className="services-section py-5">
            <div className="container">
                <div className="text-center mb-4">
                    <div>
                        <h2 className="fw-bold theme-color">Blogs And Theories</h2>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <div className="search-container w-100" style={{ maxWidth: "400px" }}>
                        <span className="icon"><i className="fa fa-search"></i></span>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row g-4">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={`${API_BASE_URL}${blog.image}`}
                                        className="card-img-top"
                                        alt={blog.title}
                                    />
                                    <div className="card-body">
                                        <div className="category mb-1">{blog.category_name}</div>
                                        <h5 className="card-title">
                                            <Link href={`/blogdetails/${blog.id}`} className="text-decoration-none text-dark">
                                                {blog.title}
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="card-footer bg-white border-0 d-flex align-items-center">
                                        <img src="https://i.pravatar.cc/32?img=10" alt="Author" className="author-img me-2" />
                                        <small>
                                            Register With Us • {new Date(blog.created_at).toLocaleDateString('en-GB', {
                                                day: '2-digit',
                                                month: 'long',
                                                year: 'numeric'
                                            })}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-blogs-container text-center my-5">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/7486/7486817.png"
                                alt="No blogs"
                                style={{ width: '120px', opacity: 0.6 }}
                            />
                            <h4 className="mt-4 text-secondary fw-semibold">No Blogs Found</h4>
                            <p className="text-muted">Try adjusting your search or check back later.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
export default Blogmain;
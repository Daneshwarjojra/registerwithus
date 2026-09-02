'use client';

import './Error404.css';
import Link from "next/link";
function Error404() {
  return (
    <section className="error-404 d-flex flex-column justify-content-center align-items-center text-center">
      <div className="error-image mb-4">
      </div>
      <h1 className="display-1 fw-bold mb-3">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4">The page you're looking for does not exist or has been moved.</p>
      <Link href="/" className="btn btn-primary btn-lg error-btn">
        <i className="fa-solid fa-house me-2"></i>Go Back Home
      </Link>
    </section>
  );
}
export default Error404;

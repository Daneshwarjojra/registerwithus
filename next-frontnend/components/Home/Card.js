'use client';

import './Card.css';
function Card() {
  return (
    <section className="about-us-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src="/img/consultant3.jpeg"
              alt="About Us"
              className="about-us-image img-fluid"
            />
          </div>
          {/* Right Side Content */}
          <div className="col-lg-6 about-us-content">
            <h2 className="about-us-heading mb-3">
              About Us
            </h2>
            <p className="about-us-description">
              Register With Us is India's go-to legal-tech hub for entrepreneurs, startups, and SMEs looking to set up and scale their businesses completely online. We cut the clutter, no repetitive office visits, no surprise or hidden charges, just simple registration and compliance handled by
              experts.
            </p>
            <a href="/about" className="btn about-us-btn mt-4">
              Learn More <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Card;

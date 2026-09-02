'use client';

import React from 'react';
// import './Bloghead.css';
function TermConditionsHead() {
    return (
        <section className="about-section mt-5">
            <div className="about-overlay">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        {/* Left Side Content */}
                        <div className="col-lg-7 text-white about-hero-content">
                            <h1 className="fw-bold mb-3">Term & Conditions</h1>
                            <p className="fs-5">
                                We thank you and appreciate your service or product purchase with us on our Website www.registerwithus.in
                                (hereinafter referred to as “Register With Us” or “RWU”).
                                Please read this policy and RWU terms and conditions carefully as they provide important information and guidelines about your rights and obligations as our customer with respect to any purchase or service we provide to you.
                            </p>
                            <a href="#" className="btn cta-btn-glass">
                                <i className="fa-solid fa-phone me-2"></i>Call Now <i className="fa-solid fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                        {/* Right Side Form */}
                        <div className="col-lg-5">
                            <div className="styled-form-containers">
                                <p className='text-white' >Submit your details to get an instant <span className='text-theme' >All-inclusive</span> Quote to your email and a <span className='text-theme' >FREE</span> Expert Consultation</p>
                                <form>
                                    <input type="text" className="form-control custom-inputs mb-3" placeholder="Your Name" required />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text custom-addons">+91</span>
                                        <input type="tel" className="form-control custom-inputs" placeholder="Mobile Number" required />
                                    </div>
                                    <input type="email" className="form-control custom-inputs mb-3" placeholder="Email" required />
                                    <textarea className="form-control custom-inputs mb-3" placeholder="Message" rows="3" required></textarea>
                                    <button type="submit" className="btn btn-gradients w-100 fw-bold">Send Message →</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default TermConditionsHead;

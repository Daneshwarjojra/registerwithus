'use client';

import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import './Abouthero.css';
function Abouthero() {
    const form = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.current) return;
        const formData = {
            user_name: form.current.user_name.value.trim(),
            user_phone: form.current.user_phone.value.trim(),
            user_email: form.current.user_email.value.trim(),
            message: form.current.message.value.trim(),
            form_type: "Quick Contact"
        };
        try {
            const response = await fetch("/api/submit", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (result.success) {
                Swal.fire({
                    icon: 'success',
                    title: '✅ Form Submitted Successfully!',
                    text: 'We will connect with you soon.'
                });
                form.current.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: '❌ Form Submission Failed!',
                    text: 'Under Maintenance. Please try again later.'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: '❌ Server Error!',
                text: 'Something went wrong. Please try again later.'
            });
        }
    };
    const scrollToFooter = (e) => {
        e.preventDefault();
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="about-section">
            <div className="about-overlay">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        {/* Left Side Content */}
                        <div className="col-lg-7 text-white about-hero-content">
                            <h1 className="hero-title">
                                About <span className="highlight-yellow">Register With Us</span>
                            </h1>
                            <p className="fs-5 mt-3">
                                <span className='fw-bold'>Register With Us</span> is India’s go-to legal-tech hub for entrepreneurs, startups, and SMEs looking to set up and scale their businesses completely online. We cut the clutter, no repetitive office visits, no surprise or hidden charges, just simple registration and compliance handled by experts.
                            </p>
                            <a href="#" className="btn cta-btn-glass">
                                <i className="fa-solid fa-phone me-2"></i>Call Now <i className="fa-solid fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                        {/* Right Side Form */}
                        <div className="col-lg-5">
                            <div className="styled-form-containers">
                                <p className='text-white'>
                                    Submit your details to get an instant <span className=''>All-inclusive</span> Quote to your email and a <span className=''>FREE</span> Expert Consultation
                                </p>
                                <form ref={form} onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="user_name"
                                        maxLength="50"
                                        onInput={(e) => {
                                            e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                                        }}
                                        className="form-control custom-inputs mb-3"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text custom-addons">+91</span>
                                        <input
                                            type="tel"
                                            name="user_phone"
                                            maxLength="10"
                                            onInput={(e) => {
                                                e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                            }}
                                            className="form-control custom-inputs"
                                            placeholder="Mobile Number"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="email"
                                        name="user_email"
                                        className="form-control custom-inputs mb-3"
                                        placeholder="Email"
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        className="form-control custom-inputs mb-3"
                                        placeholder="Message"
                                        rows="3"
                                        required
                                    ></textarea>
                                    <button type="submit" className="btn btn-gradients w-100 fw-bold">
                                        Register Now →
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Abouthero;

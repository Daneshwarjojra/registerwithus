'use client';

import React, { useState } from "react";
import "./Contactus.css";
function Contactus() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState("");
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg("Sending...");
    try {
      const payload = { ...formData, form_type: "ContactUs" };
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setResponseMsg("Message sent successfully ✅");
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
      } else {
        setResponseMsg("Failed to send message ❌");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setResponseMsg("Something went wrong ❌");
    }
  };
  return (
    <section>
      <div className="container py-5">
        <div className="text-center py-3">
          <p className="cont-text">
            Our team is available to answer your questions about our services.
            Feel free to ask your question, and we will contact you as soon as
            possible.
          </p>
        </div>
        <div className="mb-5">
          <div className="row g-4 d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 form-section border">
              <h2 className="mb-3 fw-bold">Get in touch</h2>
              <p>
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="user_name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.user_name}
                    onChange={handleChange}
                    pattern="^[A-Za-z\s]+$"
                    title="Only alphabets and spaces are allowed"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="user_email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-3">
                      <label htmlFor="user_phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="user_phone"
                        className="form-control"
                        placeholder="Enter your number"
                        value={formData.user_phone}
                        onChange={handleChange}
                        pattern="^[0-9+]{1,13}$"
                        title="Only digits and + allowed, max 13 characters"
                        maxLength="13"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="form-control"
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
                {responseMsg && (
                  <p className="mt-2 text-center">{responseMsg}</p>
                )}
              </form>
            </div>
            <div className="col-lg-6 col-md-6 map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6823.8387529554575!2d77.0721488423675!3d28.45433598584143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e4978a13e3%3A0xb150cb3ee50752ef!2sBlock%20C%2C%20Sushant%20lok%2C%20Phase%201!5e1!3m2!1sen!2sin!4v1758010904098!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-center py-4">
          <div className="row justify-content-center g-4">
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
              <div className="icon-circle mb-2">
                <i className="fas fa-user fs-2"></i>
              </div>
              <a className="text-decoration-none" href="tel:+919643981247">
                <div className="info-text mt-2">+919643981247</div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
              <div className="icon-circle mb-2">
                <i className="fas fa-envelope fs-2"></i>
              </div>
              <a
                className="text-decoration-none"
                href="mailto:info@registerwithus.in"
              >
                <div className="info-text mt-2">info@registerwithus.in</div>
              </a>
            </div>
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
              <div className="icon-circle mb-2">
                <i className="fas fa-map-marker-alt fs-2"></i>
              </div>
              <div className="info-text mt-2">944, Block-c, Sushant Lok Phase-1, Gurgaon, Gurgaon, Sadar Bazar, Haryana, India, 122001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contactus;
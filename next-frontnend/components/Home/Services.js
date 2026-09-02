'use client';

import React, { useState } from 'react';
import './Services.css';
function Services() {
  const [modalTitle, setModalTitle] = useState("");
  const services = [
    "Share Transfers",
    "Share Transmission",
    "Share Allotments",
    "Equity / Debt Raising",
    "Annual Fillings",
  ];
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
    <section className="services-section py-5">
      <div className="container">
        <h2 className="section-title d-block mb-3 about-us-heading"><span>Our Services</span></h2>
        <h5 className='text-center py-3' >Your one-stop AU-in-One Business Compliance Platform, from company setup to tax filings, we handle it all. As a leading Government Registration Service Provider for Business, we
          ensure you stay compliant, certified, and growth-ready.</h5>
        <div className="row g-4">
          {/* Business Registration */}
          <div className="col-md-6 col-lg-3">
            <div className="modern-card text-center">
              <div className="icon-wrapper mb-3">
                <i className="fas fa-scale-balanced"></i>
              </div>
              <h5 className="service-title mb-3">Business Registration</h5>
              <ul className="animated-list">
                <li className="list-item" ><a href="/sole-proprietorship-registration-online" className='text-decoration-none text-black' >Solo Proprietorship</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item" ><a href="/partnership-firm-registration-online" className='text-decoration-none text-black' >Partnership</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" ><a href="/llp-registration-services-online" className='text-decoration-none text-black' >LLP Registration</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" ><a href="/private-limited-company-registration-online" className='text-decoration-none text-black' >Private Limited Company</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra" ><a href="/public-limited-company-registration-online" className='text-decoration-none text-black' >Public Limited Company</a> <i className="fas fa-chevron-right"></i></li>
              </ul>
            </div>
          </div>
          {/* Trade Licenses */}
          <div className="col-md-6 col-lg-3">
            <div className="modern-card text-center">
              <div className="icon-wrapper mb-3">
                <i className="fas fa-file-circle-check"></i>
              </div>
              <h5 className="service-title mb-3">Trade Licenses</h5>
              <ul className="animated-list">
                <li className="list-item"><a href="/business-pan-card-registration-india" className='text-decoration-none text-black' >PAN</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item"><a href="/gst-registration-india" className='text-decoration-none text-black' >GST</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/import-export-code-registration-online" className='text-decoration-none text-black' >IEC</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/udyam-msme-registration-online" className='text-decoration-none text-black' >MSME</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/apeda-registration-india" className='text-decoration-none text-black' >APEDA Registration</a> <i className="fas fa-chevron-right"></i></li>
              </ul>
            </div>
          </div>
          {/* Company Compliances */}
          <div className="col-md-6 col-lg-3">
            <div className="modern-card text-center">
              <div className="icon-wrapper mb-3">
                <i className="fas fa-shield-halved"></i>
              </div>
              <h5 className="service-title mb-3">Company Compliances</h5>
              <ul className="animated-list">
                <li className="list-item">
  <a
    href="#"
    className="text-decoration-none text-black"
    data-enquiry-modal="true"
    data-title="Share Transfers"
    onClick={(e) => {
      e.preventDefault();
      setModalTitle("Share Transfers"); // ✅ fixed
    }}
  >
    Share Transfers
  </a>
  <i className="fas fa-chevron-right"></i>
</li>
<li className="list-item">
  <a
    href="#"
    className="text-decoration-none text-black"
    data-enquiry-modal="true"
    data-title="Share Transmission"
    onClick={(e) => {
      e.preventDefault();
      setModalTitle("Share Transmission");
    }}
  >
    Share Transmission
  </a>
  <i className="fas fa-chevron-right"></i>
</li>
<li className="list-item extra">
  <a
    href="#"
    className="text-decoration-none text-black"
    data-enquiry-modal="true"
    data-title="Share Allotments"
    onClick={(e) => {
      e.preventDefault();
      setModalTitle("Share Allotments");
    }}
  >
    Share Allotments
  </a>
  <i className="fas fa-chevron-right"></i>
</li>
<li className="list-item extra">
  <a
    href="#"
    className="text-decoration-none text-black"
    data-enquiry-modal="true"
    data-title="Equity / Debt Raising"
    onClick={(e) => {
      e.preventDefault();
      setModalTitle("Equity / Debt Raising");
    }}
  >
    Equity / Debt Raising
  </a>
  <i className="fas fa-chevron-right"></i>
</li>
<li className="list-item extra">
  <a
    href="#"
    className="text-decoration-none text-black"
    data-enquiry-modal="true"
    data-title="Annual Filings"
    onClick={(e) => {
      e.preventDefault();
      setModalTitle("Annual Filings");
    }}
  >
    Annual Fillings
  </a>
  <i className="fas fa-chevron-right"></i>
</li>
              </ul>
            </div>
          </div>
          {/* Tax Fillings */}
          <div className="col-md-6 col-lg-3">
            <div className="modern-card text-center">
              <div className="icon-wrapper mb-3">
                <i className="fas fa-award"></i>
              </div>
              <h5 className="service-title mb-3">Tax Fillings</h5>
              <ul className="animated-list">
                <li className="list-item"><a href="/individual-itr-fillings-online-registration" className='text-decoration-none text-black' >Individual ITR Filings</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item"><a href="/corporate-itr-fillings-online-registration" className='text-decoration-none text-black' >Corporate ITR Filings</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/gst-returns-online-registration" className='text-decoration-none text-black' >GST returns</a> <i className="fas fa-chevron-right"></i></li>
                <li className="list-item extra"><a href="/tds-filings-online-registration" className='text-decoration-none text-black' >TDS Filings</a> <i className="fas fa-chevron-right"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;

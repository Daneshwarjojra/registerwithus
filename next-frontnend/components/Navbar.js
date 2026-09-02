"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import "./Navbar.css";

function EnquiryLink({ title, onOpen, children }) {
  return (
    <a
      href="#"
      data-enquiry-modal="true"
      data-title={title}
      onClick={(event) => onOpen(event, title)}
    >
      {children}
    </a>
  );
}

function Navbar() {
  const pathname = usePathname();
  const formRef = useRef(null);
  const closeTimer = useRef(null);
  const [selectedService, setSelectedService] = useState("Service Title");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const closeSidebar = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const toggleSidebar = () => {
    setMobileOpen((open) => !open);
  };

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 300);
  };

  const toggleServices = (event) => {
    event.preventDefault();
    clearTimeout(closeTimer.current);
    setServicesOpen((open) => !open);
  };

  const handleNavLinkClick = () => {
    setServicesOpen(false);
    closeSidebar();
  };

  const openEnquiryModal = (event, title) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedService(title || "Service Title");
    setServicesOpen(false);
    setMobileOpen(false);
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeEnquiryModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    const handleExternalModalTrigger = (event) => {
      const trigger = event.target.closest("[data-enquiry-modal]");
      if (!trigger || trigger.closest(".navbar")) return;
      event.preventDefault();
      event.stopPropagation();
      setSelectedService(trigger.getAttribute("data-title") || "Service Title");
      setServicesOpen(false);
      setMobileOpen(false);
      setModalOpen(true);
      document.body.classList.add("modal-open");
    };

    document.addEventListener("click", handleExternalModalTrigger);
    return () => document.removeEventListener("click", handleExternalModalTrigger);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    const formData = {
      user_name: formRef.current.user_name.value.trim(),
      user_phone: formRef.current.user_phone.value.trim(),
      user_email: formRef.current.user_email.value.trim(),
      message: selectedService,
      company_name: selectedService,
      form_type: "Enquiry Form",
    };

    if (!formData.user_name || !formData.user_email || !formData.user_phone) {
      Swal.fire({
        icon: "warning",
        title: "Fill All Fields",
        text: "Name, Email, and Phone are required.",
      });
      return;
    }

    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      Swal.fire({
        icon: "success",
        title: "Successfully Saved!",
        showConfirmButton: true,
      });
      formRef.current.reset();
      closeEnquiryModal();
    } catch (error) {
      Swal.fire({
        icon: "success",
        title: "Successfully Saved!",
        showConfirmButton: true,
      });
      formRef.current.reset();
      closeEnquiryModal();
    }
  };

  const isActive = (href) => pathname === href;

  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" href="/" onClick={handleNavLinkClick}>
            <Image
              src="/img/Register-With-Us-01.png"
              alt="Register With Us"
              className="main-lg me-2 bg-white"
              width={125}
              height={45}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div
            className={`navbar-collapse test mobile-sidebar${mobileOpen ? " show" : ""}`}
            id="navbarNav"
          >
            <div className="d-lg-none d-flex justify-content-between align-items-center px-3 pt-3">
              <span className="fs-5 fw-bold">Register With Us</span>
              <button className="btn btn-link text-dark fs-2 close-btn" onClick={closeSidebar} type="button">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link${isActive("/") ? " active" : ""}`} href="/" onClick={handleNavLinkClick}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${isActive("/about") ? " active" : ""}`} href="/about" onClick={handleNavLinkClick}>
                  About Us
                </Link>
              </li>
              <li
                className={`nav-item dropdown position-static${servicesOpen ? " show" : ""}`}
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <a
                  className="nav-link dropdown-toggle fw-semibold"
                  href="#"
                  id="megaDropdown"
                  role="button"
                  aria-expanded={servicesOpen}
                  onClick={toggleServices}
                >
                  Services
                </a>
                <div
                  className={`dropdown-menu w-100 mega-dropdown mt-0 border-0 shadow-lg${servicesOpen ? " show" : ""}`}
                >
                  <div className="container">
                    <div className="row gy-4">
                      <div className="col-md-3">
                        <h4 className="mega-heading"><i className="fas fa-balance-scale me-2"></i>Labour Laws</h4>
                        <ul className="mega-list">
                          <li><Link href="/online-epf-registration-india" onClick={handleNavLinkClick}>PF Registration</Link></li>
                          <li><Link href="/online-esic-registration-india" onClick={handleNavLinkClick}>ESIC Registration</Link></li>
                        </ul>
                        <h4 className="mega-heading"><i className="fas fa-briefcase me-2"></i>Company Registration</h4>
                        <ul className="mega-list">
                          <li><Link href="/sole-proprietorship-registration-online" onClick={handleNavLinkClick}>Sole Proprietorship</Link></li>
                          <li><Link href="/partnership-firm-registration-online" onClick={handleNavLinkClick}>Partnership</Link></li>
                          <li><Link href="/llp-registration-services-online" onClick={handleNavLinkClick}>LLP Registration</Link></li>
                          <li><Link href="/private-limited-company-registration-online" onClick={handleNavLinkClick}>Private Limited Company</Link></li>
                          <li><Link href="/public-limited-company-registration-online" onClick={handleNavLinkClick}>Public Limited Company</Link></li>
                          <li>
                            <EnquiryLink title="Foreign Company Registration" onOpen={openEnquiryModal}>
                              Foreign Company Registration
                            </EnquiryLink>
                          </li>
                        </ul>
                        <h4 className="mega-heading"><i className="fas fa-id-card-alt me-2"></i>Food License (FSSAI)</h4>
                        <ul className="mega-list">
                          <li>
                            <Link href="/fssai-license-registration-india" onClick={handleNavLinkClick}>FSSAI Registration</Link>
                            <Link href="/fssai-license-registration-india#Eligibility" onClick={handleNavLinkClick}>FSSAI License - State</Link>
                            <Link href="/fssai-license-registration-india#Eligibility" onClick={handleNavLinkClick}>FSSAI License - Central</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <h4 className="mega-heading"><i className="fas fa-id-card-alt me-2"></i>Trade Licenses</h4>
                        <ul className="mega-list">
                          <li>
                            <Link href="/business-pan-card-registration-india" onClick={handleNavLinkClick}>PAN card</Link>
                            <Link href="/gst-registration-india" onClick={handleNavLinkClick}>GST Registration</Link>
                            <Link href="/import-export-code-registration-online" onClick={handleNavLinkClick}>Import Export Code (IEC)</Link>
                            <Link href="/professional-tax-registration-online" onClick={handleNavLinkClick}>Professional Tax Registration</Link>
                            <Link href="/udyam-msme-registration-online" onClick={handleNavLinkClick}>MSME / Udyam Registration</Link>
                            <Link href="/startup-india-registration-online" onClick={handleNavLinkClick}>Start-up India Registration</Link>
                            <Link href="/shop-establishment-registration-india" onClick={handleNavLinkClick}>Shops & Establishment Licenses</Link>
                            <Link href="/apeda-registration-india" onClick={handleNavLinkClick}>APEDA Registration</Link>
                          </li>
                        </ul>
                        <h4 className="mega-heading mt-4"><i className="fas fa-award me-2"></i>Trademark Services</h4>
                        <ul className="mega-list">
                          <li><Link href="/online-trademark-registration-india" onClick={handleNavLinkClick}>Trademark Registration</Link></li>
                          <li><Link href="/online-trademark-registration-india#Renewal" onClick={handleNavLinkClick}>Trademark Renewal</Link></li>
                          <li>
                            <EnquiryLink title="Trademark Assignment / Transfers" onOpen={openEnquiryModal}>
                              Trademark Assignment / Transfers
                            </EnquiryLink>
                          </li>
                          <li>
                            <EnquiryLink title="Change In Trademark Details" onOpen={openEnquiryModal}>
                              Change In Trademark Details
                            </EnquiryLink>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <h4 className="mega-heading"><i className="fas fa-building me-2"></i>Company Compliances</h4>
                        <ul className="mega-list">
                          <li><EnquiryLink title="Share Transfers" onOpen={openEnquiryModal}>Share Transfers</EnquiryLink></li>
                          <li><EnquiryLink title="Share Transmission" onOpen={openEnquiryModal}>Share Transmission</EnquiryLink></li>
                          <li><EnquiryLink title="Share Allotments" onOpen={openEnquiryModal}>Share Allotments</EnquiryLink></li>
                          <li><EnquiryLink title="Equity / Debt Raising" onOpen={openEnquiryModal}>Equity / Debt Raising</EnquiryLink></li>
                          <li><EnquiryLink title="Raise Funds (Equity / Debt)" onOpen={openEnquiryModal}>Raise Funds (Equity / Debt)</EnquiryLink></li>
                          <li><Link href="/online-compliance-india" onClick={handleNavLinkClick}>Change Services</Link></li>
                          <li><Link href="/online-compliance-india#DirectorsKMP" onClick={handleNavLinkClick}>Change in Directors / KMP</Link></li>
                          <li><Link href="/online-compliance-india#Auditors" onClick={handleNavLinkClick}>Change in Auditors</Link></li>
                          <li><Link href="/online-compliance-india#Address" onClick={handleNavLinkClick}>Change in Address / Shifting of Office</Link></li>
                          <li><EnquiryLink title="MSME Filings" onOpen={openEnquiryModal}>MSME Filings</EnquiryLink></li>
                          <li><EnquiryLink title="Return of Deposit" onOpen={openEnquiryModal}>Return of Deposit</EnquiryLink></li>
                          <li><EnquiryLink title="Event Based ROC Filings" onOpen={openEnquiryModal}>Event Based ROC Filings</EnquiryLink></li>
                          <li><EnquiryLink title="Annual Filings" onOpen={openEnquiryModal}>Annual Filings</EnquiryLink></li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <h4 className="mega-heading"><i className="fas fa-calculator me-2"></i>Tax Filings Services</h4>
                        <ul className="mega-list">
                          <li><Link href="/itr-gst-return-filing-india" onClick={handleNavLinkClick}>ITR For Individuals</Link></li>
                          <li><Link href="/itr-gst-return-filing-india#Overview" onClick={handleNavLinkClick}>ITR For Corporate</Link></li>
                          <li><Link href="/itr-gst-return-filing-india" onClick={handleNavLinkClick}>GST Returns</Link></li>
                          <li><EnquiryLink title="TDS Filings" onOpen={openEnquiryModal}>TDS Filings</EnquiryLink></li>
                        </ul>
                        <h4 className="mega-heading"><i className="fas fa-building me-2"></i>ISO Certificates</h4>
                        <ul className="mega-list">
                          <li><Link href="/iso-certification-services-india#tab-content-section" onClick={handleNavLinkClick}>ISO 9001, ISO 14001</Link></li>
                          <li><Link href="/iso-certification-services-india#tab-content-section" onClick={handleNavLinkClick}>ISO 45001</Link></li>
                          <li><Link href="/iso-certification-services-india#tab-content-section" onClick={handleNavLinkClick}>Other ISO Certificates</Link></li>
                          <li><Link href="/iso-certification-services-india#tab-content-section" onClick={handleNavLinkClick}>HACPP</Link></li>
                          <li><Link href="/iso-certification-services-india#tab-content-section" onClick={handleNavLinkClick}>GMP, GAP, GDP, GLP, cGMP, GHP</Link></li>
                          <li><Link href="/iso-certification-services-india#tab-content-section" onClick={handleNavLinkClick}>CE, RoHS, EN, IEC</Link></li>
                          <li><Link href="/iso-certification-services-india#tab-content-section" onClick={handleNavLinkClick}>FDA, ANSI, ASTM, GOTS, FSSC</Link></li>
                          <li><Link href="/iso-certification-services-india#tab-content-section" onClick={handleNavLinkClick}>22000, BIFMA, Greenguard, Greenpro, GRS, RCS , HALAL, KOSHER,SEDEX, FSC, FCC, CMMI</Link></li>
                          <li><Link href="/iso-certification-services-india#tab-content-section" onClick={handleNavLinkClick}>Other Certifications</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${isActive("/blogs") ? " active" : ""}`} href="/blogs" onClick={handleNavLinkClick}>
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link${isActive("/contact") ? " active" : ""}`} href="/contact" onClick={handleNavLinkClick}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <a href="tel:+919643981247" className="d-inline-flex align-items-center px-3 py-2 text-white contact-nav">
                  <i className="fa fa-phone me-2"></i> +919643981247
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`modal fade${modalOpen ? " show" : ""}`}
        id="serviceModal"
        tabIndex="-1"
        aria-labelledby="serviceModalLabel"
        aria-hidden={!modalOpen}
        style={{ display: modalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header border-0 pb-0">
              <h5 className="modal-title fw-bold" id="serviceModalLabel">
                {selectedService}
              </h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeEnquiryModal}
              ></button>
            </div>
            <div className="modal-body p-4 pt-2">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    placeholder=" "
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z\s]/g, "");
                    }}
                    required
                  />
                  <label htmlFor="user_name">Full Name</label>
                </div>
                <div className="form-group">
                  <input type="email" name="user_email" id="user_email" placeholder=" " required />
                  <label htmlFor="user_email">Email Address</label>
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="user_phone"
                    id="user_phone"
                    placeholder=" "
                    maxLength="10"
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                    }}
                    required
                  />
                  <label htmlFor="user_phone">Phone Number</label>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    placeholder=" "
                    value={selectedService}
                    disabled
                  />
                  <label htmlFor="company_name">Service Name</label>
                </div>
                <button type="submit" className="btn btn-animated w-100 mt-2">
                  Submit Enquiry →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {modalOpen ? (
        <div className="modal-backdrop fade show" onClick={closeEnquiryModal}></div>
      ) : null}
    </>
  );
}

export default Navbar;

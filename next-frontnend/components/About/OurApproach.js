'use client';

import './OurApproach.css';
function OurApproach() {
    return (
        <section className="our-approach-section">
            <div className="container py-5">
                <h2 className="section-title text-center fw-bold text-white mb-5">Our Approach</h2>
                <div className="row gy-4">
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="feature-cards d-flex">
                            <i className="fas fa-globe feature-icons me-3"></i>
                            <div>
                                <h5 className="fw-bold">Fully Online, Zero Hassles</h5>
                                <p>Every step from application to approval is done digitally with no in-person visits or paperwork headaches.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="feature-cards d-flex">
                            <i className="fas fa-user-tie feature-icons me-3"></i>
                            <div>
                                <h5 className="fw-bold">Expert-Driven Process</h5>
                                <p>Our in-house team of CAs, CSs, and legal pros ensures accuracy, fast turnaround, and compliance every step of the way.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="feature-cards d-flex">
                            <i className="fas fa-rupee-sign feature-icons me-3"></i>
                            <div>
                                <h5 className="fw-bold">Clear, Fixed Pricing</h5>
                                <p>What you see is what you pay, with no hidden fees or last-minute surprises.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="feature-cards d-flex">
                            <i className="fas fa-briefcase feature-icons me-3"></i>
                            <div>
                                <h5 className="fw-bold">Business-Centric Solutions</h5>
                                <p>Services are tailored to startups, SMEs, freelancers, and high-growth businesses across all sectors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="feature-cards d-flex">
                            <i className="fas fa-clock feature-icons me-3"></i>
                            <div>
                                <h5 className="fw-bold">Real-Time Progress Tracking</h5>
                                <p>Stay informed with status updates, timelines, and support notifications directly on your dashboard.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12">
                        <div className="feature-cards d-flex">
                            <i className="fas fa-layer-group feature-icons me-3"></i>
                            <div>
                                <h5 className="fw-bold">All Services in One Place</h5>
                                <p>From business registration to GST, EPF, trademark, and compliance filings, everything is managed under one platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default OurApproach;

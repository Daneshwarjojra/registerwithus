'use client';

import React from 'react';
import './CompanyHighlights.css';
function CompanyHighlights() {
    return (
        <section className="section-highlights py-5">
            <div className="container">
                <div className='row' >
                    <div className='col-lg-4 col-md-4 col-sm-12' >
                        {/* Block 1 */}
                        <div className="highlight-block border-left-blue">
                            <div className="icon-box me-4">
                                <i className="fas fa-users"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold mb-2">Trusted by Thousands Nationwide</h4>
                                <p>
                                    With <strong>5000+ businesses</strong> served monthly and love from cities like Bengaluru & Gurugram,
                                    <strong> Register With Us</strong> is changing the way India registers businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12' >
                        {/* Block 2 */}
                        <div className="highlight-block border-left-green">
                            <div className="icon-box me-4">
                                <i className="fas fa-user-tie"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold mb-2">Meet the Founders</h4>
                                <p>
                                    A crew of CAs, CSs, developers & legal nerds — our team lives to simplify India’s business processes with precision and power.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12' >
                        {/* Block 3 */}
                        <div className="highlight-block border-left-orange">
                            <div className="icon-box me-4">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <div>
                                <h4 className="fw-bold mb-2">Partner with Us</h4>
                                <p>
                                    From GST to EPF, ESIC, LLP or trademark — whether you’re starting or scaling, we’ve got your back with clarity and speed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CompanyHighlights;

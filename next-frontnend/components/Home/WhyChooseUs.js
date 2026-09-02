'use client';

import React from 'react';
import './WhyChooseUs.css';
function WhyChooseUs() {
    return (
        <section className="whychooseus-section" >
            <div className="container py-5 text-center">
                <h2 className="section-title mb-3">
                    <span className="fw-bold text-white mb-2">Why Choose Us</span>
                </h2>
                <h5 className='text-center text-white my-4'>We&apos;re your reliable partner for business registrations and compliance. Our goal is simple: to make legal and tax processes easy so you can stay focused on growing your company. With a
                    proven track record in online business services, we take the hassle out of staying compliant.</h5>
                <div className="row g-4 justify-content-center mb-4">
                    {/* Feature 1 */}
                    <div className="col-md-3">
                        <div className="feature-card text-center p-4">
                            <i className="fas fa-shield-alt feature-icon mb-3"></i>
                            <h5 className='fw-bold' >Security & Trust</h5>
                            <p>Your data and registrations are secure with us. We follow strict
                                protocols to ensure safe online business compliance services in India with complete
                                transparency.</p>
                        </div>
                    </div>
                    {/* Feature 2 */}
                    <div className="col-md-3">
                        <div className="feature-card text-center p-4">
                            <i className="fas fa-cogs feature-icon mb-3"></i>
                            <h5 className='fw-bold' >Seamless Integration</h5>
                            <p> Our platform integrates with government portals and tools effortlessly, helping you apply for licenses and compliance online without the usual
                                friction.</p>
                        </div>
                    </div>
                    {/* Feature 3 */}
                    <div className="col-md-3">
                        <div className="feature-card text-center p-4">
                            <i className="fas fa-user-check feature-icon mb-3"></i>
                            <h5 className='fw-bold' >Customer Focus</h5>
                            <p>Every business is unique. As a company  compliance service provider
                                in India, we tailor solutions to fit your sector, scale, and strategic vision.</p>
                        </div>
                    </div>
                    {/* Feature 4 */}
                    <div className="col-md-3">
                        <div className="feature-card text-center p-4">
                            <i className="fas fa-lightbulb feature-icon mb-3"></i>
                            <h5 className='fw-bold' >Innovation & Growth</h5>
                            <p>We constantly upgrade our offerings to meet India&apos;s evolving
                                startup ecosystem, from business registration to tax filing experts, all in one place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WhyChooseUs;

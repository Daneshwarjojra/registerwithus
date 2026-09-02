'use client';

import './Aboutmain.css'
function Aboutmain() {
    return (
        <section>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center">
                        <img src="/img/Aboutmain.png" alt="Who We Are" className="who-we-are-img img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-3">Why We Exist?</h2>
                        <ul className='list-unstyled' >
                            <li><i className="fa-solid fa-check-double fa-icons me-2 text-dark"></i> We saw startups struggling with paperwork, delays, and hidden fees—so we built a smarter, clearer solution.</li>
                            <li><i className="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Trusted by thousands already, we’re fixing online business registration in India with fast turnarounds and transparent pricing.</li>
                            <li><i className="fa-solid fa-check-double fa-icons me-2 text-dark"></i> From company formation to statutory compliance and post-registration support, we’ve got your legal backend covered.</li>
                        </ul>
                         <h2 className="fw-bold mb-3">Why We Do?</h2>
                         <p>Our services span the full lifecycle of business setup and compliance:</p>
                         <ul className='list-unstyled' >
                            <li><span className='fw-bold' ><i className="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Company & LLP Registration: </span>Pvt Ltd, LLP, OPC, Public Ltd—tailored for founders, SMEs, and professionals</li>
                            <li><span className='fw-bold' ><i className="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Compliance & Statutory Registrations: </span>EPF, ESIC, GST, MSME/Udyam, FSSAI, import‑export licenses and many more</li>
                            <li><span className='fw-bold' ><i className="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Regulatory & Payroll Support: </span>ITR/GST filings, bookkeeping, payroll, and labor law compliance</li>
                            <li><span className='fw-bold' ><i className="fa-solid fa-check-double fa-icons me-2 text-dark"></i> Advisory & Connect Services: </span>Udyam/MSME, Startup India recognition, trademark applications, and funding access</li>
                         </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Aboutmain;

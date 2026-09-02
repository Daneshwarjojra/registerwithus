'use client';

import './Contactbanner.css';
function Contactbanner() {
    return (
        <section className="cont-sec">
            <div className="container py-5">
                <div className="position-relative w-100 bg-images">
                    <div className="position-absolute top-50 start-50 translate-middle theme-color text-center">
                        <h1 className="fw-bold">Contact Us</h1>
                        <p>Contact us for more information and statistics.</p>
                        <a
                            href="tel:+919643981247"
                            className="btn cta-btn-glass border text-dark"
                        >
                            <i className="fa-solid fa-phone me-2"></i>
                            Call Now
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contactbanner;

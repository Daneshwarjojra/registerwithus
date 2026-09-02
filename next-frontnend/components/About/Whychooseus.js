'use client';

import './Whychooseus.css'
function Whychooseus() {
    return (
        <section className="py-5 container">
            <h2 className="why-heading"><span className="bg-conten" >Why Choose Us?</span></h2>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-5 col-sm-12 text-center">
                    <div className="why-image">
                        <img src="/img/unsplash_iPum7Ket2jo.png" className="img-fluid" alt="Person with Sparkler" />
                    </div>
                </div>
                <div className="col-lg-7 col-sm-12">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="why-card">
                                <div className="why-card-top">
                                    <div className="why-icon">
                                        <img src="/img/images.png" alt="Expertise Icon" />
                                    </div>
                                </div>
                                <div className="why-card-body">
                                    <h5 className="why-card-title">Trusted Expertise</h5>
                                    <p className="why-card-text">
                                        With years of industry experience, we bring valuable insights and proven strategies to help your business succeed.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why-card">
                                <div className="why-card-top">
                                    <div className="why-icon">
                                        <img src="/img/images-1.png" alt="Collaborative Icon" />
                                    </div>
                                </div>
                                <div className="why-card-body">
                                    <h5 className="why-card-title">Collaborative Approach</h5>
                                    <p className="why-card-text">
                                        We work as an extension of your team, ensuring open communication and shared goals every step of the way.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why-card">
                                <div className="why-card-top">
                                    <div className="why-icon">
                                        <img src="/img/image 214.png" alt="Growth Icon" />
                                    </div>
                                </div>
                                <div className="why-card-body">
                                    <h5 className="why-card-title">Growth-Oriented Solutions</h5>
                                    <p className="why-card-text">
                                        Our tailored partnerships focus on long-term scalability and sustainable business growth.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="why-card">
                                <div className="why-card-top">
                                    <div className="why-icon">
                                        <img src="/img/electronic.png" alt="Support Icon" />
                                    </div>
                                </div>
                                <div className="why-card-body">
                                    <h5 className="why-card-title">Reliable Support</h5>
                                    <p className="why-card-text">
                                        From idea to execution, our dedicated team is always by your side, offering consistent support and guidance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Whychooseus;

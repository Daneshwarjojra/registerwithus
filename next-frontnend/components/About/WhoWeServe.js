'use client';

import React from 'react';
import './WhoWeServe.css';
function WhoWeServe() {
    const data = [
        {
            icon: 'fa-user-tie',
            title: 'Solopreneurs & Freelancers',
            desc: 'Transitioning from informal to formal setups effortlessly.',
        },
        {
            icon: 'fa-rocket',
            title: 'Tech Startups',
            desc: 'Need Pvt Ltd or LLP formats to go venture-ready.',
        },
        {
            icon: 'fa-chart-line',
            title: 'SMEs',
            desc: 'Scaling across states, hiring talent, and seeking credit.',
        },
        {
            icon: 'fa-shopping-cart',
            title: 'E-commerce & D2C Brands',
            desc: 'Get quick access to GST, FSSAI, or IEC registration.',
        },
        {
            icon: 'fa-users-cog',
            title: 'Growing Teams',
            desc: 'Set up payroll, EPF, and ESIC systems with ease.',
        }
    ];
    return (
        <section className="whoweserve-modern py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-5 text-white">Who Do We Serve?</h2>
                <div className="row justify-content-center g-4">
                    {data.map((item, idx) => (
                        <div className="col-md-6 col-lg-4" key={idx}>
                            <div className="glass-card text-center p-4 h-100">
                                <div className="icon-circle mx-auto mb-3">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                <h5 className="fw-semibold">{item.title}</h5>
                                <p className="text-muted">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default WhoWeServe;

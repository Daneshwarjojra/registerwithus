'use client';

import React, { useEffect } from 'react';
import './Counter.css';
function Counter() {
  useEffect(() => {
    // Load the PureCounter CDN script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@srexi/purecounterjs@1.5.0/dist/purecounter_vanilla.js';
    script.async = true;
    script.onload = () => {
      new window.PureCounter();
    };
    document.body.appendChild(script);
    // Cleanup if needed
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <section className="counter-bg">
      <div className="container py-5 section-container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0 text-start">
            <h2 className="fw-bold mb-3 counter-content">
              <span className="text-dark">Leading the way in</span>
              <span className=""> Compliance Solutions</span>
            </h2>
            <a href="/contact" className="btn btn-custom mt-4">
              Get Started <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
          <div className="col-lg-7">
            <div className="row text-center">
              <div className="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-0">
                <div className="stats-number">
                  <span className="purecounter theme-color" data-purecounter-start="0" data-purecounter-end="500" data-purecounter-duration="2">0</span>
                  <span className="plus theme-color">+</span>
                </div>
                <div className="text-dark fs-5 fw-bold">Completed works</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 mb-4 mb-md-0">
                <div className="stats-number">
                  <span className="purecounter theme-color" data-purecounter-start="0" data-purecounter-end="20000" data-purecounter-duration="2">0</span>
                  <span className="plus theme-color">+</span>
                </div>
                <div className="text-dark fs-5 fw-bold">Clients</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="stats-number">
                  <span className="purecounter theme-color" data-purecounter-start="0" data-purecounter-end="250" data-purecounter-duration="2">0</span>
                  <span className="plus theme-color">+</span>
                </div>
                <div className="text-dark fs-5 fw-bold">Professionals Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Counter;

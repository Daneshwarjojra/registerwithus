'use client';

import './Taskey.css';
function Taskey(props) {
  return (
    <section className="cta-split-section">
      <div className="container-fluid px-0">
        <div className="row g-0">
          {/* Left Content */}
          <div className="col-md-6 d-flex align-items-center justify-content-center cta-content">
            <div className="cta-box text-center text-white px-4 py-5">
              <h2
                className="fw-bold mb-3"
                dangerouslySetInnerHTML={{ __html: props.heading }}
              />
              <p className="mb-4">{props.subheading}</p>
              <a href={props.buttonLink} className="btn cta-btn-glass">
                {props.buttonText} <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
          {/* Right Image */}
          <div className="col-md-6 cta-image d-none d-md-block">
            <img
              src={props.imageSrc}
              alt="CTA Background"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Taskey;

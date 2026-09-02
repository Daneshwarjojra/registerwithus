'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Clients.css';
// Custom Prev Button
const PrevArrow = ({ onClick }) => (
  <button className="slick-prev-btn" onClick={onClick}>
    <i className="fas fa-chevron-left"></i>
  </button>
);
// Custom Next Button
const NextArrow = ({ onClick }) => (
  <button className="slick-next-btn" onClick={onClick}>
    <i className="fas fa-chevron-right"></i>
  </button>
);
function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false, // autoplay off
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="py-5 client-bg">
      <div className="container">
        <h2 className="section-title text-center mb-4 text-dark d-block about-us-heading">
          <span className="overlap-conte">Our Clients</span>
        </h2>
        <h5 className="text-center mb-5">
          Our clients love how we simplify online business compliance services in India.
          We're proud to support their journey from startup to scale.
        </h5>
        <Slider {...settings}>
          <div><img src="/img/logos/spinny.jpeg" alt="Spinny" className="client-logo" /></div>
          <div><img src="/img/logos/marg.jpeg" alt="Marg" className="client-logo" /></div>
          <div><img src="/img/logos/justdial.jpeg" alt="Justdial" className="client-logo" /></div>
          <div><img src="/img/logos/fia.jpeg" alt="FIA" className="client-logo" /></div>
          <div><img src="/img/logos/davinta.jpeg" alt="Davinta" className="client-logo" /></div>
          <div><img src="/img/logos/Milton.jpg" alt="Milton" className="client-logo" /></div>
          <div><img src="/img/logos/herbalife.jpeg" alt="Herbalife" className="client-logo" /></div>
        </Slider>
      </div>
    </section>
  );
}
export default Clients;

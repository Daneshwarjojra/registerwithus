'use client';

import React, { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import './WhatClientSays.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
const testimonials = [
  {
    text: "Register With Us has simplified our hiring process and made team collaboration much smoother.",
    img: "img/portraits/f-2.jpeg",
    name: "Trupti Jena",
    title: "Head of Talent Acquisition, India"
  },
  {
    text: "The platform helped us manage projects seamlessly and improved coordination across departments.",
    img: "img/portraits/m-1.jpeg",
    name: "Rajesh Dhala",
    title: "Senior HR Manager, Mumbai"
  },
  {
    text: "Using Register With Us, we are now able to track progress and assign tasks more efficiently.",
    img: "img/portraits/m-4.jpeg",
    name: "Mukesh Patra",
    title: "Project Manager, Bengaluru"
  },
  {
    text: "It has been a game-changer in simplifying daily operations and increasing productivity.",
    img: "img/portraits/m-5.jpeg",
    name: "Anita Kumar",
    title: "Operations Manager, Delhi"
  },
  {
    text: "Register With Us is one of the easiest tools we’ve adopted for project management and communication.",
    img: "img/portraits/m-6.jpeg",
    name: "Sanjay Raut",
    title: "Team Lead, Pune"
  },
  {
    text: "The platform has given us better visibility into our workflow and made HR management effortless.",
    img: "img/portraits/f-3.jpeg",
    name: "Nikita Agarwal",
    title: "HR Director, India"
  }
];
function WhatClientSays() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container py-5 text-center">
      <h2 className="section-title d-block mb-0">
        <span className="fw-bold about-us-heading">
          What Our Clients Says
        </span>
      </h2>
      <div className="swiper-wrapper-relative">
        <div className="swiper-custom-nav-inside">
          <button ref={prevRef} className="swiper-button-custom prev-btn">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button ref={nextRef} className="swiper-button-custom next-btn">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
          }}
          className="pt-5"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card text-start h-100">
                <i className="fas fa-quote-left quote-icon mb-3"></i>
                <p><strong>Register With Us</strong> {item.text}</p>
                <hr />
                <div className="d-flex align-items-center mt-3">
                  <img src={item.img} className="client-img me-3" alt={item.name} />
                  <div>
                    <div className="client-name">{item.name}</div>
                    <small>{item.title}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default WhatClientSays;

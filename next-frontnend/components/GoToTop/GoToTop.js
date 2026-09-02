'use client';

import React, { useState, useEffect } from 'react';
import './GoToTop.css';
const GoToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    visible && (
      <button className="go-to-top-btn" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </button>
    )
  );
};
export default GoToTop;

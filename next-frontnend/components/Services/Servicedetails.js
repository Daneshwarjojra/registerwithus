'use client';

import { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import './Servicedetails.css';

function renderList(items = []) {
  return (
    <ul>
      {items.map((item, index) => {
        if (item.includes(':')) {
          const parts = item.split(':');
          return (
            <li key={index}>
              <strong>{parts[0].trim()}:</strong>
              {parts.slice(1).join(':')}
            </li>
          );
        }
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

function renderParagraph(text, key) {
  const value = (text || '').trim();
  if (!value) return null;
  if (value.endsWith(':')) {
    return <h4 key={key}>{value.replace('•', '').trim()}</h4>;
  }
  if (value.includes(':')) {
    const parts = value.split(':');
    return (
      <p key={key}>
        <strong>{parts[0].replace('•', '').trim()}:</strong>
        {parts.slice(1).join(':')}
      </p>
    );
  }
  return <p key={key}>{value}</p>;
}

function TabContent({ tab }) {
  return (
    <>
      {tab.title ? <h4>{tab.title}</h4> : null}
      {tab.intro ? <p>{tab.intro}</p> : null}
      {Array.isArray(tab.content)
        ? tab.content.map((paragraph, index) => renderParagraph(paragraph, index))
        : null}
      {Array.isArray(tab.points)
        ? tab.points.map((point, index) => (
            <div className="mb-3" key={index}>
              <h5>{point.title}</h5>
              <p>{point.description}</p>
              {Array.isArray(point.subpoints) ? renderList(point.subpoints) : null}
            </div>
          ))
        : null}
      {Array.isArray(tab.types) ? (
        <div className="mb-4">
          {tab.types.map((type, index) => (
            <div className="mb-3" key={index}>
              <h5 className="fw-semibold">{type.heading}</h5>
              <p>{type.description}</p>
              {type.example ? <p className="text-muted"><em>{type.example}</em></p> : null}
            </div>
          ))}
        </div>
      ) : null}
      {Array.isArray(tab.identityDocuments) ? (
        <>
          <h5 className="mt-3">Identity Documents</h5>
          {renderList(tab.identityDocuments)}
        </>
      ) : null}
      {Array.isArray(tab.addressProof) ? (
        <>
          <h5 className="mt-3">Address Proof</h5>
          {renderList(tab.addressProof)}
        </>
      ) : null}
      {Array.isArray(tab.charges) ? (
        <>
          <h5 className="mt-3">Charges</h5>
          {renderList(tab.charges)}
        </>
      ) : null}
      {Array.isArray(tab.steps) ? (
        <>
          <h5 className="mt-3">Steps</h5>
          <ol>
            {tab.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      ) : null}
      {tab.note ? <p className="fst-italic">{tab.note}</p> : null}
      {Array.isArray(tab.details)
        ? tab.details.map((detail, index) => <p key={index}>{detail}</p>)
        : null}
    </>
  );
}

function parseFaqs(faqs = []) {
  if (!Array.isArray(faqs)) return [];
  const items = [];
  let currentQuestion = null;

  faqs.forEach((faq) => {
    if (faq && typeof faq === 'object' && faq.question) {
      items.push({
        question: String(faq.question),
        answer: String(faq.answer || ''),
      });
      currentQuestion = null;
      return;
    }

    const text = String(faq || '').trim();
    if (!text) return;
    if (!text.startsWith('→')) {
      currentQuestion = text;
      return;
    }
    if (currentQuestion) {
      items.push({
        question: currentQuestion,
        answer: text.replace(/^→\s*/, '').trim(),
      });
      currentQuestion = null;
    }
  });

  return items;
}

export default function Servicedetails({ service, slug }) {
  const form = useRef(null);
  const [openFaq, setOpenFaq] = useState(-1);
  const tabs = service?.tabs || [];
  const faqs = parseFaqs(service?.faqs);
  const heroTitle = tabs[0]?.title || service?.metaTitle || service?.service || 'Business Service';
  const heroIntro =
    service?.intro || tabs[0]?.intro || 'Start your journey with our professional services.';
  const heroPoints = tabs.map((tab) => tab.title).filter(Boolean).slice(0, 6);

  useEffect(() => {
    const formEl = document.querySelector('.sticky-form');
    const section = document.getElementById('tab-content-section');
    const tabWrapper = document.querySelector('.tab-wrapper');
    const pills = document.querySelectorAll('.nav-pills .nav-link');
    const buffer = 20;
    let lastFormState = '';

    const handleScroll = () => {
      if (!formEl || !section) return;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollY = window.scrollY;
      const formHeight = formEl.offsetHeight;
      const fixedTop = 190;
      const scrollBottom = scrollY + formHeight + fixedTop;

      if (scrollY + fixedTop >= sectionTop && scrollBottom + buffer < sectionBottom) {
        if (lastFormState !== 'fixed') {
          formEl.classList.add('fixed-form');
          formEl.classList.remove('at-bottom');
          lastFormState = 'fixed';
        }
      } else if (scrollBottom + buffer >= sectionBottom) {
        if (lastFormState !== 'bottom') {
          formEl.classList.remove('fixed-form');
          formEl.classList.add('at-bottom');
          lastFormState = 'bottom';
        }
      } else if (lastFormState !== 'static') {
        formEl.classList.remove('fixed-form', 'at-bottom');
        lastFormState = 'static';
      }

      if (scrollY + fixedTop >= sectionTop && scrollBottom + buffer < sectionBottom) {
        tabWrapper?.classList.add('fixed-tabs');
        tabWrapper?.classList.remove('d-none');
      } else if (scrollBottom + buffer >= sectionBottom || scrollY + fixedTop < sectionTop) {
        tabWrapper?.classList.remove('fixed-tabs');
        tabWrapper?.classList.add('d-none');
      }

      if (!tabWrapper?.classList.contains('d-none')) {
        const offsetMargin = 220;
        pills.forEach((pill) => {
                    const id = pill.getAttribute('href')?.replace('#', '');
          const target = document.getElementById(id);
          if (!target) return;
          const targetTop = target.offsetTop - offsetMargin;
          const targetBottom = targetTop + target.offsetHeight;
          if (scrollY >= targetTop && scrollY < targetBottom) {
            pills.forEach((item) => item.classList.remove('active'));
            pill.classList.add('active');
          }
        });
      }
    };

    const handleTabClick = (event) => {
      event.preventDefault();
      const id = event.currentTarget.getAttribute('href')?.replace('#', '');
      const target = document.getElementById(id);
      if (!target) return;
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const tabHeight = tabWrapper?.offsetHeight || 0;
      window.scrollTo({
        top: target.offsetTop - (navHeight + tabHeight + 20),
        behavior: 'smooth',
      });
      pills.forEach((item) => item.classList.remove('active'));
      event.currentTarget.classList.add('active');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    pills.forEach((pill) => pill.addEventListener('click', handleTabClick));

    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const tabHeight = tabWrapper?.offsetHeight || 0;
        window.scrollTo({
          top: el.offsetTop - (navHeight + tabHeight + 20),
          behavior: 'smooth',
        });
      }, 200);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      pills.forEach((pill) => pill.removeEventListener('click', handleTabClick));
    };
  }, [slug]);

  const scrollTabs = (offset) => {
    const tabList = document.querySelector('.scroll-tabs');
    if (tabList) tabList.scrollLeft += offset;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.current) return;
    const formData = {
      user_name: form.current.user_name.value.trim(),
      user_phone: form.current.user_phone.value.trim(),
      user_email: form.current.user_email.value.trim(),
      message: form.current.message.value.trim(),
      form_type: 'Quick Contact',
    };

    try {
      const response = await fetch("/api/submit", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Form Submitted Successfully!',
          text: 'We will connect with you soon.',
        });
        form.current.reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Form Submission Failed!',
          text: 'Under Maintenance. Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Server Error!',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  const handleExpertSubmit = async (event) => {
    event.preventDefault();
    const expertForm = event.target;
    const messageFromSlug = (slug || '')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const formData = {
      user_name: expertForm.expert_name?.value.trim(),
      user_phone: expertForm.expert_phone?.value.trim(),
      user_email: expertForm.expert_email?.value.trim(),
      form_type: 'Expert',
      message: messageFromSlug,
    };

    try {
      const response = await fetch("/api/submit", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        Swal.fire('Success', 'Expert form submitted successfully!', 'success');
        expertForm.reset();
      } else {
        Swal.fire('Failed', result.message || 'Server responded with failure', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Server/network error caught. See console.', 'error');
    }
  };

  return (
    <>
      <section className="py-4 bg-light hero-gradient-bg">
        <div className="container">
          <div className="row align-items-center banner-vh">
            <div className="col-lg-7 mb-4 mb-lg-0 text-white">
              <h1 className="fw-bold mb-3">{heroTitle}</h1>
              <p className="mb-3">{heroIntro}</p>
              <ul className="list-unstyled lh-lg">
                {heroPoints.map((title) => (
                  <li key={title}>
                    <i className="fa-solid fa-check-double me-2"></i> {title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="styled-form-containers">
                <p className="text-white">
                  Submit your details to get an instant <span>All-inclusive</span> Quote to your email and a <span>FREE</span> Expert Consultation
                </p>
                <form ref={form} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="user_name"
                    maxLength="50"
                    onInput={(event) => {
                      event.target.value = event.target.value.replace(/[^A-Za-z\s]/g, '');
                    }}
                    className="form-control custom-inputs mb-3"
                    placeholder="Your Name"
                    required
                  />
                  <div className="input-group mb-3">
                    <span className="input-group-text custom-addons">+91</span>
                    <input
                      type="tel"
                      name="user_phone"
                      maxLength="10"
                      onInput={(event) => {
                        event.target.value = event.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                      }}
                      className="form-control custom-inputs"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control custom-inputs mb-3"
                    placeholder="Email"
                    required
                  />
                  <textarea
                    name="message"
                    className="form-control custom-inputs mb-3"
                    placeholder="Message"
                    rows="3"
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-gradients w-100 fw-bold">
                    Register Now →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {slug === 'startup-india-registration-online' ? (
        <section className="startup-info-section py-5">
          <div className="container">
            <h2 className="startup-info-heading fw-bold mb-3">
              Details Required for Application for Startup India Registration
            </h2>
            <p className="startup-info-subtitle text-muted mb-4">
              You are required to provide the following details to apply for Startup India registration:
            </p>
            <ul className="startup-info-list list-unstyled">
              {[
                ['Name of Startup', 'Enter the official name of your business or startup as registered.'],
                ['Type of Organisation', 'Select your business structure - Private Limited Company, LLP, or Partnership Firm.'],
                ['Company PAN Number', "Provide the Permanent Account Number issued in your company's name."],
                ['Email ID', 'Enter a valid and active business email address for correspondence.'],
                ['Mobile Number', 'Provide the mobile number of the authorized representative for OTP verification and updates.'],
                ['Name of Authorized Person', 'Mention the full name of the individual authorized to represent the startup.'],
                ['Personal PAN Number', 'Enter the PAN of the authorized person for identification purposes.'],
                ['Address of Business', 'Fill in the complete official address where your business operates.'],
                ['City', 'Specify the city of your business location.'],
                ['State', 'Select the relevant state from the list provided.'],
                ['Pincode', 'Enter the postal code corresponding to your business address.'],
                ['Does your Company Have a GST Number?', 'Indicate whether your business is GST-registered by selecting Yes or No.'],
              ].map(([title, desc]) => (
                <li className="startup-info-item d-flex align-items-start mb-3" key={title}>
                  <i className="fa fa-check-circle text-primary me-2 mt-1"></i>
                  <div><strong>{title}:</strong> {desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section id="tab-content-section" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tab-wrapper mb-4">
                <div className="tab-arrow left" onClick={() => scrollTabs(-200)}>
                  <i className="fa fa-chevron-left"></i>
                </div>
                <ul className="nav nav-pills scroll-tabs">
                  {tabs.map((tab, index) => (
                    <li className="nav-item" key={tab.id || index}>
                      <a className={`nav-link ${index === 0 ? 'active' : ''}`} href={`#${tab.id}`}>
                        {tab.id}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="tab-arrow right" onClick={() => scrollTabs(200)}>
                  <i className="fa fa-chevron-right"></i>
                </div>
              </div>
              <div className="tab-content">
                {tabs.map((tab, index) => (
                  <div id={tab.id} style={{ paddingTop: '5rem' }} key={tab.id || index}>
                    <TabContent tab={tab} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 position-relative">
              <div className="bg-white p-4 rounded shadow sticky-form">
                <h5 className="fw-bold mb-3">Talk To Our Experts</h5>
                <form onSubmit={handleExpertSubmit}>
                  <input type="text" name="expert_name" className="form-control mb-3" placeholder="Your Name" required />
                  <div className="input-group mb-3">
                    <span className="input-group-text">+91</span>
                    <input type="tel" name="expert_phone" className="form-control" placeholder="Phone" required />
                  </div>
                  <input type="email" name="expert_email" className="form-control mb-3" placeholder="Email" required />
                  <button type="submit" className="btn btn-request w-100">Request Callback</button>
                  <p className="small mt-2 text-muted">We never share your details.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {faqs.length > 0 ? (
        <section>
          <div className="container py-5">
            <h2 className="section-title text-center text-dark d-block">
              <span className="overlap-conte">Frequently Asked Questions</span>
            </h2>
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="accordion-item" key={`${faq.question}-${index}`}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button${isOpen ? '' : ' collapsed'}`}
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}>
                      <div className="accordion-body">
                        <i className="fa fa-arrow-right me-2" aria-hidden="true"></i>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

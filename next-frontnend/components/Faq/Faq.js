'use client';

import { useState } from 'react';
import './faq.css';

const FAQ_ITEMS = [
  {
    question: '1. What services does Register With Us provide for startups and smatt businesses?',
    answer:
      'We offer all-in-one business compliance platform services including company formation, GST registration, FSSAI Licensing, trademark filings, tax returns, and more, entirely online.',
  },
  {
    question: '2. Can I apply for multiple registrations and licenses through Register With Us?',
    answer:
      'Yes! You can apply for licenses and compliance online, PAN, TAN, GST, EPF, MSME, FSSAI, IEC, and more, all from one convenient dashboard.',
  },
  {
    question: '3. Is your platform suitable for freefancers or sole proprietors?',
    answer:
      'Absolutely. From online MSME registration to tax and license compliance, our platform is ideal for freelancers, solopreneurs, and small businesses across India.',
  },
  {
    question: '4. How does Register With Us ensure timely filings and compliance?',
    answer:
      'As a trusted company compliance service provider in India, we use smart tools and expert support to handle every deadline, filing, and renewal without delays.',
  },
  {
    question: '5. Can I register my company online without visiting any government office?',
    answer:
      'Yes. You can start your company online with us. We handle the entire process digitally, from DSC to DIN, incorporation, and certification.',
  },
  {
    question: '6. Does your service include FSSAI and trademark applications?',
    answer:
      'Yes, we help you get your FSSAI license and apply for a trademark in India, ensuring your brand and business are protected under law.',
  },
  {
    question: '7. What kind of tax services do you offer for businesses?',
    answer:
      'Our online legal and tax services for businesses include GST returns, ITR filing (individual & corporate), TDS filing, and support for tax audits and reconciliation.',
  },
  {
    question: '8. How can I track my registration or license status?',
    answer:
      "After submission, you'll get live updates and support. We are India's trusted compliance & registration partner, ensuring full visibility for atL filings.",
  },
  {
    question: '9. Can I get  help updating directors, address, or capital in my company?',
    answer:
      'Yes, we provide ROC compliance support including changes in directors, shareholding, office address, and other company modifications under MCA guidelines.',
  },
  {
    question: '10.  Why  should I choose Register With Us over other platforms?',
    answer:
      'We combine expert service, transparent pricing, and end-to-end support. As your government registration service provider for business, we simplify every legal step.',
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-5">
      <div className="container my-5">
        <h2 className="section-title text-center text-dark d-block">
          <span className="about-us-heading">Frequently Asked Questions</span>
        </h2>
        <div className="accordion" id="faqAccordion">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="accordion-item" key={item.question}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button${isOpen ? '' : ' collapsed'}`}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {item.question}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}>
                  <div className="accordion-body">
                    <i className="fa fa-arrow-right me-2" aria-hidden="true"></i> {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;

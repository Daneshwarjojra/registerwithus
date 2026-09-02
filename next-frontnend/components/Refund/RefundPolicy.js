'use client';

// RefundPolicy.js
import React from 'react';
import './RefundPolicy.css';
function RefundPolicy() {
  return (
    <section className="refund-policy text-white py-5">
      <div className="container">
       <h3 className="icon-color mb-4"><i className="fas fa-undo-alt me-2"></i>Refund Understanding</h3>
        <div className="refund-box p-4 rounded">
          <p className='fs-5' >We are committed to fairness and transparency. Our goal is to provide exceptional service, but we understand that circumstances can change. This policy is designed to be clear and fair to both you, our client, and us, acknowledging the operational costs and irrecoverable government fees involved in our services.</p>
        </div>
        <h3 className="icon-color mb-4"><i className="fas fa-undo-alt me-2 mt-4"></i>Cooling-Off Period (Full Refund)</h3>
        <div className="refund-box p-4 rounded">
          <p className='fs-5' >You are eligible for a full refund if you cancel your request within 24 hours of payment, provided that work has not commenced as defined herein below.</p>
        </div>
        <h3 className="icon-color mb-4"><i className="fas fa-ban me-2 mt-4"></i>Non-Refundable Elements</h3>
        <div className="refund-box p-4 rounded">
          <p className='fs-5' >Please note that the following fees and charges are non-refundable under any circumstances once they have been paid on your behalf:</p>
          <ul>
            <li>All Government Fees (including but not limited to MCA fees, Trademark application fees, Stamp Duty).</li>
            <li>Costs for third-party consumables (e.g., Digital Signature Certificate (DSC), Notarisation charges).</li>
            <li>Payment gateway transaction charges (usually 1-3% of the transaction value).</li>
          </ul>
        </div>
        <h3 className="icon-color mb-4"><i className="fas fa-coins me-2 mt-4"></i>Partial Refunds</h3>
        <div className="refund-box p-4 rounded">
          <p className='fs-5' >This shall be applicable If you choose to cancel the service after the 24-hour cooling-off period or after work has commenced. In such an event, you shall be eligible for a partial refund. The refund amount shall be calculated on the basis of payments made as per clause 3.</p>
        </div>
        <h3 className="icon-color mb-4"><i className="fas fa-file-alt me-2 mt-4"></i>How to Request for Refund</h3>
        <div className="refund-box p-4 rounded">
          <ul>
            <li>Send an email to info@registerwithus.in with the subject line &quot;Refund Request – [Your Registered Phone Number] clearly stating the reason for the refund, and provide your registered email and phone number for verification.</li>
            <li>We will acknowledge your request within 1 Working Day and final decision will be communicated within 3 Working Days of receiving all necessary information.</li>
            <li>Approved refunds will be processed to the original mode of payment within 3-5 Working Days from the date of the decision.</li>
            <li>After the final submission of your application/documents to a government authority, you shall not be eligible for a refund.</li>
          </ul>
        </div>
        <h3 className="icon-color mb-4"><i className="fas fa-arrow-up me-2 mt-4"></i>Escalation</h3>
        <div className="refund-box p-4 rounded">
          <ul>
            <li>If you are not satisfied with the resolution provided by our support team, you can escalate the matter by writing to our Grievance Officer at info@registerwithus.in. A senior member of our team will review your case and respond within 7 Working Days.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default RefundPolicy;
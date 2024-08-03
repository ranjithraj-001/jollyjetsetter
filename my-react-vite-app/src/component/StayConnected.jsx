import React from 'react';
import './StayConnected.css'; 

const StayConnected = () => {
  return (
    <div className="stay-connected-section">
      <div className="stay-connected-info">
        <h2>Stay Connected</h2>
        <p>📞 +91 9940882200</p>
        <p>📧 mail@jollyjetsetter.in</p>
      </div>
      <form className="stay-connected-form">
        <input type="text" placeholder="Name *" required />
        <input type="text" placeholder="City of Residence *" required />
        <input type="email" placeholder="Email *" required />
        <input type="tel" placeholder="Phone Number *" required />
        <input type="text" placeholder="WhatsApp" />
        <input type="text" placeholder="Travel Destination *" required />
        <input type="date" placeholder="Date of Travel *" required />
        <input type="number" placeholder="No. of People *" required />
        <input type="text" placeholder="Vacation Type *" required />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default StayConnected;

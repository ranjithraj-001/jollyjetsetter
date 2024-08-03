import React, { useState } from 'react';
import './Kerala.css';

const Kerala = () => {
  const [mainImage, setMainImage] = useState('https://source.unsplash.com/featured/?kerala');

  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="kerala-tour-package">
      <div className="kerala-package-info">
        <h1>3 Nights Haridwar – Rishikesh Tour Package</h1>
        <p className="kerala-location">Delhi, Haridwar, Rishikesh</p>
        <hr />
        <div className="kerala-package-details">
          <div className="kerala-detail">
            <span className="kerala-icon">⏰</span>
            <p>3 Nights 4 Days</p>
          </div>
          <div className="kerala-detail">
            <span className="kerala-icon">📅</span>
            <p>Daily Tour</p>
          </div>
          <div className="kerala-detail">
            <span className="kerala-icon">👥</span>
            <p>Unlimited</p>
          </div>
          <div className="kerala-detail">
            <span className="kerala-icon">🗣️</span>
            <p>English</p>
          </div>
        </div>
      </div>
      <div className="kerala-image-gallery">
        <img src={'../public/kboat.jpeg'} alt="Main" className="kerala-main-image" />
        <div className="kerala-thumbnail-gallery">
          <img src='../kboat.jpeg' alt="Thumbnail 1" className="kerala-thumbnail" onClick={() => handleThumbnailClick('../kboat.jpeg')} />
          <img src='../keagle.jpeg'alt="Thumbnail 2" className="kerala-thumbnail" onClick={() => handleThumbnailClick('../keagle.jpeg')} />
          <img src='../kforest.jpeg'alt="Thumbnail 3" className="kerala-thumbnail" onClick={() => handleThumbnailClick('https://source.unsplash.com/1600x900/?kerala,3')} />
          <img src='../kmunnar.jpeg' alt="Thumbnail 4" className="kerala-thumbnail" onClick={() => handleThumbnailClick('https://source.unsplash.com/1600x900/?kerala,4')} />
          <img src='../kaalapi.jpeg' alt="Thumbnail 5" className="kerala-thumbnail" onClick={() => handleThumbnailClick('https://source.unsplash.com/1600x900/?kerala,5')} />
        </div>
      </div>
      <div className="kerala-enquiry-section">
        <div className="kerala-contact-info">
          <h2>Stay Connected</h2>
          <p>📞 +91 9940882200</p>
          <p>📧 mail@jollyjetsetter.in</p>
        </div>
        <form className="kerala-enquiry-form">
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
    </div>
  );
};

export default Kerala;

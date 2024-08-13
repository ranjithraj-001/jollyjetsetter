import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [faqOpen, setFaqOpen] = useState({});
  const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const togglePaymentForm = () => {
    setPaymentFormVisible(!isPaymentFormVisible);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert('The amount has been credited successfully!');
    setPaymentFormVisible(false); // Close the payment form after submission
  };

  const teamMembers = [
    {
      name: 'Ranjith',
      title: 'Founder & CEO',
      image: 'ranjithraj.jpg',
      description: 'Ranjith has over 20 years of experience in the travel industry, leading our team with passion and vision.',
      social: {
        linkedin: 'https://linkedin.com/in/ranjith',
        twitter: 'https://twitter.com/ranjith'
      }
    },
    {
      name: 'Sanjay',
      title: 'Head of Requirements',
      image: 'sanjay.jpg',
      description: 'Sanjay ensures our travel operations run smoothly, with a focus on efficiency and customer satisfaction.',
      social: {
        linkedin: 'https://linkedin.com/in/raj',
        twitter: 'https://twitter.com/raj'
      }
    },
    {
      name: 'Sabari ',
      title: 'General Manager',
      image: 'sab.jpg',
      description: 'Sabari ensures our travel operations run smoothly, with a focus on efficiency and customer satisfaction.',
      social: {
        linkedin: 'https://linkedin.com/in/raj',
        twitter: 'https://twitter.com/raj'
      }
    },
  ];

  const faqs = [
    {
      question: 'What types of travel packages do you offer?',
      answer: 'We offer a variety of travel packages including adventure tours, cultural experiences, and luxury getaways.',
    },
    {
      question: 'How can I book a travel package?',
      answer: 'You can book a travel package directly through our website or contact us via phone or email for personalized assistance.',
    },
  ];

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide unforgettable travel experiences by delivering exceptional service and personalized itineraries.
          </p>
        </div>
        <div className="about-content">
          <h2>Our Vision</h2>
          <p>
            We envision becoming the leading travel agency known for creating unique and memorable adventures across the globe.
          </p>
        </div>
      </section>
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Integrity</h3>
            <p>We operate with honesty and transparency in all our dealings with customers and partners.</p>
          </div>
          <div className="value-item">
            <h3>Customer Focus</h3>
            <p>We prioritize our customers' needs and strive to exceed their expectations in every interaction.</p>
          </div>
          <div className="value-item">
            <h3>Excellence</h3>
            <p>We are committed to providing top-notch service and high-quality travel experiences.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>We continuously seek innovative ways to enhance our services and create unique travel experiences.</p>
          </div>
        </div>
      </section>
      <section className="history-section">
        <h2>Our Journey</h2>
        <div className="history-timeline">
          <div className="timeline-item">
            <h3>2000</h3>
            <p>Founded with a vision to offer curated travel experiences.</p>
          </div>
          <div className="timeline-item">
            <h3>2005</h3>
            <p>Expanded services to include international travel packages.</p>
          </div>
          <div className="timeline-item">
            <h3>2010</h3>
            <p>Introduced personalized travel planning services.</p>
          </div>
          <div className="timeline-item">
            <h3>2020</h3>
            <p>Launched a new website with enhanced booking capabilities and user experience.</p>
          </div>
        </div>
      </section>
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.image} alt={member.name} className="team-member-image"/>
              <h3>{member.name}</h3>
              <p className="team-member-title">{member.title}</p>
              <p className="team-description">{member.description}</p>
              <div className="social-links">
                {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
                {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index} onClick={() => toggleFaq(index)}>
            <h3>{faq.question}</h3>
            {faqOpen[index] && <p>{faq.answer}</p>}
          </div>
        ))}
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Travel Agency. All rights reserved.</p>
      </footer>

      <button className="payment-button" onClick={togglePaymentForm}>
        Make a Fund Payment
      </button>

      <div className={`payment-form-container ${isPaymentFormVisible ? 'show' : ''}`}>
        <button className="close-button" onClick={togglePaymentForm}>Close</button>
        <form className="payment-form" onSubmit={handlePaymentSubmit}>
          <h2>Payment Information</h2>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="John Doe" required />

          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" placeholder="Enter Amount" required />

          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            name="card-number"
            placeholder="1234 5678 9012 3456"
            required
            pattern="\d{4} \d{4} \d{4} \d{4}"
            title="Card number should be in the format: 1234 5678 9012 3456"
          />

          <div className="payment-form-group">
            <div>
              <label htmlFor="expiry">Expiry Date (MM/YY)</label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                placeholder="MM/YY"
                required
                pattern="(0[1-9]|1[0-2])\/\d{2}"
                title="Expiry date should be in the format: MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
                required
                pattern="\d{3}"
                title="CVV should be exactly 3 digits"
              />
            </div>
          </div>

          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default About;

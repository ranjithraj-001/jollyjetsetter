import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    destination: '',
    travelDates: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);

  const validate = () => {
    const errors = {};
    const validators = {
      name: value => !value && 'Name is required',
      email: value => !value ? 'Email is required' : !/\S+@\S+\.\S+/.test(value) && 'Email is invalid',
      phone: value => !value ? 'Phone number is required' : !/^\d{10}$/.test(value) && 'Phone number is invalid',
      inquiryType: value => !value && 'Inquiry type is required',
      destination: value => !value && 'Travel destination is required',
      travelDates: value => !value && 'Travel dates are required',
      message: value => !value && 'Message is required'
    };

    for (const [key, validateFn] of Object.entries(validators)) {
      const error = validateFn(formData[key]);
      if (error) errors[key] = error;
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        if (selectedContactId) {
          await axios.put(`http://localhost:5000/api/contactmodel/${selectedContactId}`, formData);
          setSubmitted(true);
          setSelectedContactId(null);
        } else {
          await axios.post('http://localhost:5000/api/contactmodel', formData);
          setSubmitted(true);
        }
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          destination: '',
          travelDates: '',
          message: ''
        });
        fetchContacts();
      } catch (error) {
        setErrors({ global: 'An error occurred while submitting the form. Please try again.' });
      }
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contactmodel/${id}`);
      fetchContacts();
    } catch (error) {
      setErrors({ global: 'An error occurred while deleting the contact. Please try again.' });
    }
  };
  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contactmodel');
      setContacts(response.data);
    } catch (error) {
      setErrors({ global: 'An error occurred while fetching contacts. Please try again.' });
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>456 Travel Avenue, Suite 101</p>
          <p>Adventure City, AC 98765</p>
          <p>Email: <a href="mailto:info@travelagency.com">info@travelagency.com</a></p>
          <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14087.804595239016!2d77.22852962383215!3d28.61393214484706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d45f3e2f7ef%3A0x8f6f621d3a2b1e7!2sIndia%20Gate%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1630253369358!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Map Location"/>
        </div>
      </div>
      <div className="contact-form">
        <h2>{selectedContactId ? 'Update Your Message' : 'Send Us a Message'}</h2>
        {submitted && <p className="success-message">Thank you for your message! We will get back to you soon.</p>}
        {errors.global && <p className="error-message">{errors.global}</p>}
        <form onSubmit={handleSubmit}>
          {['name', 'email', 'phone', 'destination', 'travelDates'].map(field => (
            <div key={field}>
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]} 
                onChange={handleChange}
                className={errors[field] ? 'error' : ''}/>
              {errors[field] && <p className="error-message">{errors[field]}</p>}
            </div>
          ))}
          <label htmlFor="inquiryType">Inquiry Type</label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className={errors.inquiryType ? 'error' : ''} >
            <option value="">Select an inquiry type</option>
            <option value="booking">Booking</option>
            <option value="information">Information</option>
            <option value="complaint">Complaint</option>
            <option value="feedback">Feedback</option>
          </select>
          {errors.inquiryType && <p className="error-message">{errors.inquiryType}</p>}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}/>
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button type="submit">{selectedContactId ? 'Update' : 'Submit'}</button>
          {selectedContactId && (
            <button
              type="button"
              onClick={() => handleDelete(selectedContactId)}
              className="delete-button">
              Delete
            </button>
          )}
        </form>
      </div>
      <div className="submitted-contacts">
        <h2>Submitted Contacts</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Inquiry Type</th>
              <th>Destination</th>
              <th>Travel Dates</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.inquiryType}</td>
                <td>{contact.destination}</td>
                <td>{contact.travelDates}</td>
                <td>{contact.message}</td>
                <td>
                  <button
                    onClick={() => {
                      setFormData({
                        name: contact.name,
                        email: contact.email,
                        phone: contact.phone,
                        inquiryType: contact.inquiryType,
                        destination: contact.destination,
                        travelDates: contact.travelDates,
                        message: contact.message
                      });
                      setSelectedContactId(contact._id);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactPage;

import React, { useState } from 'react';
import './StayConnected.css'; 
import Axios from 'axios';

const StayConnected = () => {
  // State hooks to capture form input values
  const [name, setName] = useState("");
  const [cityOfResidence, setCityOfResidence] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [travelDestination, setTravelDestination] = useState("");
  const [dateOfTravel, setDateOfTravel] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [vacationType, setVacationType] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    
    // Form data to be sent to the backend
    const formData = {
      name,
      cityOfResidence,
      email,
      phoneNumber,
      whatsapp,
      travelDestination,
      dateOfTravel,
      numberOfPeople,
      vacationType,
    };

    // Sending form data to the backend
    Axios.post('http://localhost:5000/api/stay-connected/submit', formData)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <div className="stay-connected-section">
      <div className="stay-connected-info">
        <h2>Stay Connected</h2>
        <p>📞 +91 9940882200</p>
        <p>📧 mail@jollyjetsetter.in</p>
      </div>
      <form className="stay-connected-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name *" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="City of Residence *" 
          value={cityOfResidence} 
          onChange={(e) => setCityOfResidence(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email *" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="tel" 
          placeholder="Phone Number *" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="WhatsApp" 
          value={whatsapp} 
          onChange={(e) => setWhatsapp(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Travel Destination *" 
          value={travelDestination} 
          onChange={(e) => setTravelDestination(e.target.value)} 
          required 
        />
        <input 
          type="date" 
          placeholder="Date of Travel *" 
          value={dateOfTravel} 
          onChange={(e) => setDateOfTravel(e.target.value)} 
          required 
        />
        <input 
          type="number" 
          placeholder="No. of People *" 
          value={numberOfPeople} 
          onChange={(e) => setNumberOfPeople(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Vacation Type *" 
          value={vacationType} 
          onChange={(e) => setVacationType(e.target.value)} 
          required 
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default StayConnected;

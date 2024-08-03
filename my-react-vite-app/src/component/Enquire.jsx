import React from 'react';
import { useLocation } from 'react-router-dom';
import './Enquire.css';

const Enquire = () => {
  const location = useLocation();
  const { state } = location;
  const selectedPackage = state?.selectedPackage || {};

  return (
    <div className="enquire-page">
      <div className="image-container">
        <img src='s3.jpg' className="enquire-image" />
      </div>
      <div className="form-container">
        <h2>Enquire Form</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            City:
            <input type="text" name="city" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Phone No:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Travel Destination:
            <input type="text" name="travelDestination" required />
          </label>
          <label>
            Date of Travel:
            <input type="date" name="dateOfTravel" required />
          </label>
          <label>
            No of People:
            <input type="number" name="noOfPeople" required />
          </label>
          <label>
            Vacation Type:
            <input type="text" name="vacationType" required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Enquire;
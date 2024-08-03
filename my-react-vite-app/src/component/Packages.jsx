import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from 'axios';
import './Packages.css';

export const Packages = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        // console.log('Fetching data from https://retoolapi.dev/qdMLVq/data');
        const response = await axios.get('https://retoolapi.dev/qdMLVq/data');
        console.log('API response data:', response.data);
        setPackages(response.data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    fetchPackages();
  }, []);
  const filteredPackages = packages.filter(pkg =>
    pkg.location && pkg.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleCardClick = (id) => {
    navigate('/stayconnect');
  };

  return (
    <div className="packages-container">
      <section className="search-section">
        <h1>Tour Packages</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Where are you going?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>
      </section>
      <section className="packages-list">
        <h2>{/* {filteredPackages.length}  */}500 Tour places</h2>
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="package-card"
              onClick={() => handleCardClick(pkg.id)}
            >
              <img src={pkg.image} alt={pkg.title} />
              <div className="package-info">
                <p className="package-location">
                  <LocationOnIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  {pkg.location}
                </p>
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-duration">
                  <AccessTimeIcon style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                  {pkg.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Sail.css';

const Sail = () => {
  const navigate = useNavigate();

  const packages = [
    { src: 's3.jpg', name: 'Cruise from Kochi', location: 'Kochi - Lakshadweep - at Sea - Mumbai', duration: '7 days', groupSize: '30', languages: 'English, Hindi' },
    { src: 's4.jpg', name: 'Chennai Cruise', location: 'Chennai - at Sea - Chennai', duration: '5 days', groupSize: '25', languages: 'English, Tamil' },
    { src: 's5.jpg', name: 'Western Sea-Cation', location: 'Mumbai - at Sea - Kochi', duration: '8 days', groupSize: '35', languages: 'English, Marathi' },
    { src: 's1.jpg', name: 'Sundowner To Goa', location: 'Mumbai – Goa - Mumbai', duration: '3 days', groupSize: '20', languages: 'English, Konkani' },
    { src: 's6.jpg', name: 'Eastern Sea-Cation', location: 'Kolkata - at Sea - Vizag', duration: '6 days', groupSize: '28', languages: 'English, Bengali' },
    { src: 's7.jpg', name: 'South India Cruise', location: 'Chennai - Kochi - at Sea', duration: '9 days', groupSize: '32', languages: 'English, Malayalam' },
    { src: 's8.jpg', name: 'Heritage Cruise', location: 'Mumbai - Diu - at Sea', duration: '7 days', groupSize: '30', languages: 'English, Gujarati' },
    { src: 's9.jpg', name: 'Beach Cruise', location: 'Goa - at Sea - Mumbai' }
  ];

  const handleNavigateToEnquire = (pkg) => {
    navigate('/enquire', { state: { selectedPackage: pkg } });
  };

  return (
    <div className="page">
      <div className="background-container">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          interval={5000}
          transitionTime={1000}
        >
          <div>
            <img src="img123.jpg" alt="Background 1" />
          </div>
          <div>
            <img src="s5.jpg" alt="Background 2" />
          </div>
          <div>
            <img src="s3.jpg" alt="Background 3" />
          </div>
        </Carousel>
        <div className="overlay">
          <h1 className="heading1">Welcome to Our Cruises</h1>
          <p className="text">Explore the world's most beautiful destinations with us!</p>
        </div>
      </div>
      <div className="main-content">
        <div className="text-content">
          <h2 className="subheading">Cruises Packages in India</h2>
          <p className="paragraph">
            How does the idea of “waking up to a new destination every day” sound to you? Apparently, the imagination itself creates goosebumps of excitement for all of us.
            What if we tell you that you can experience the voyage of the breathtaking Indian Ocean with Cordelia Cruises? Well, it sounds great. 
            <br />
            <br />
            Isn’t it? The cruise tour will be launched in some fantastic destinations, like, Goa, Andaman, Kochi, Mumbai, Ganapatipule, Diu, and many other seaboard destinations. 
            <br />
            Cordelia Cruises is all set to serve you with the mesmerizing beauty of the Indian coastline. Click here to view all Cordelia Cruise Packages.
          </p>
        </div>
        <div className="image-content">
          <img src="s1.jpg" alt="Cruise Destination" className="image" />
        </div>

        <div className="text-content">
          <h2 className="subheading">Onboarding price on Cruises</h2>
          <p className="paragraph">
            If you were eagerly waiting for a fun family holiday, this is the best time for it. 
            Surprise your family with a holiday plan like never before. Take them to a new world of amusement on the cruise.
            <br />
            <br />
            We assure you that these bunches of amazing provisions by Cordelia cruise will be one of your most comfortable journeys. 
            Wait, are you pondering upon the Cordelia Cruise prices?
            <br />
            <br/>
            So, if you are also willing to spend some quality time with your family and loved ones and want them to enjoy leaving the pandemic situation behind, do book the tour. 
            This journey will be unforgettable for you and your family.
          </p>
        </div>
        <div className="image-content">
          <img src="s2.jpg" alt="Cruise Destination" className="image" />
        </div>
      </div>

      <div className="booking-images">
        {packages.map((pkg, index) => (
          <div key={index} className="booking-card">
            <img src={pkg.src} alt={pkg.name} className="booking-image" />
            <div className="booking-info">
              <h3 className="package-name">{pkg.name}</h3>
              <p className="location">{pkg.location}</p>
              <button onClick={() => handleNavigateToEnquire(pkg)} className="book-now">
                Book-Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sail;

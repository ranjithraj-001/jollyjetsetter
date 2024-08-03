import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';

export const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToPackages = () => {
    navigate('/packages');
  };

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showThumbs={false}
        showStatus={false}
      >
        <div className="image-container">
          <img src="homepage.jpg" alt="Profile" className="himages" />
          <div className="overlay-text">
            <h2>Travel,World Class</h2>
            <p>
              The real voyage of discovery consists not in seeking new landscapes,
              but in having new eyes. Discover it with jollyjetsetter, the No.1 Travel
              brand in South India.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src="ktyndis.jpg" alt="India Tour" className="himages" />
          <div className="overlay-text">
            <h2>India Tour Packages</h2>
            <p>
              Experience the diverse culture and stunning landscapes of India.
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src="disney.jpeg" alt="International" className="himages" />
          <div className="overlay-text1">
            <h2>International</h2>
            <p>
              Explore destinations around the world with our international packages.
            </p>
          </div>
        </div>
        {/* Add more images as needed */}
      </Carousel>
      <h3>Popular Packages</h3>
      <div className="packages-container">
        <div className="image1">
          <img src="ktyndis.jpg" alt="India Tour" />
          <div className="package-overlay">
            <h3>India Tour Packages</h3>
            <button onClick={handleNavigateToPackages}>98 TOURS</button>
          </div>
        </div>
        <div className="image2">
          <img src="disney.jpeg" alt="International" />
          <div className="package-overlay">
            <h3>International</h3>
            <button onClick={handleNavigateToPackages}>362 TOURS</button>
          </div>
        </div>
        <div className="image3">
          <img src="honeymoon.jpeg" alt="Honeymoon" />
          <div className="package-overlay">
            <h3>Honeymoon Packages</h3>
            <button onClick={handleNavigateToPackages}>17 TOURS</button>
          </div>
        </div>
        <div className="image4">
          <img src="europe.jpeg" alt="Europe" />
          <div className="package-overlay">
            <h3>Europe Tour Packages</h3>
            <button onClick={handleNavigateToPackages}>144 TOURS</button>
          </div>
        </div>
        <div className="image5">
          <img src="dubai.jpeg" alt="Dubai" />
          <div className="package-overlay">
            <h3>Dubai Tour Packages</h3>
            <button onClick={handleNavigateToPackages}>25 TOURS</button>
          </div>
        </div>
        <div className="image6">
          <img src="education.jpeg" alt="Educational" />
          <div className="package-overlay">
            <h3>Educational Tour Packages</h3>
            <button onClick={handleNavigateToPackages}>15 TOURS</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <h1 className="headings">50,000+ Abroad Trips</h1>
          <p>
            For the last decade, Jolly Jetsetter has organized more than 50,000
            international itineraries.
          </p>
        </div>
        <div className="box">
          <h1 className="headings">Handcrafted Experiences</h1>
          <p>
            Each and every itinerary is customized according to the taste of the
            customers.
          </p>
        </div>
        <div className="box">
          <h1 className="headings">Extremely Happy Travellers</h1>
          <p>
            Jolly Jetsetter holds a record of great customer satisfaction, and
            all customers are retained with us.
          </p>
        </div>
      </div>
      <footer>
        <p>Jolly Jetsetter</p>
        <p>Jolly Jetsetter Pvt. Ltd is a subsidiary of Sangam Group of Hotels, one of the biggest hotel chains in south Tamil Nadu.</p>
        <div className="social">
            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://x.com/home"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.google.com/"><i className="fa-brands fa-google"></i></a>
            <a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </footer>
    </>
  );
};

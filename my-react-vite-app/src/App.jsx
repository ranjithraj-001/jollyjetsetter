// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import { Home } from './component/Home';
import { Packages } from './component/Packages';
import ContactPage from './component/ContactPage';
// import Kerala from './component/Kerala';
import Sail from './component/Sail';
import Enquire from './component/Enquire';
import About from './component/About';
import StayConnected from './component/StayConnected';
function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sail" element={<Sail/>} />
        <Route path="/enquire" element={<Enquire/>} />
        <Route path="/stayconnect" element={<StayConnected/>} />
        {/* <Route path="/kerala/1" element={<Kerala />} /> */}
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router> 
  );
}

export default App;
// src/App.jsx


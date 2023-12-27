// Navbar.js

import React from 'react';
import '../CSS/Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* Replace 'your_logo.png' with the path to your logo image */}
        <img src="https://www.pawsmetics.com/wp-content/uploads/2017/08/donation-graphic.jpg" alt="Logo" />
        <span> WE PET</span>
      </div>
      <div className="nav-links">
        <a href="/Pet_Donation">Home</a>
        <a href="/Pet_Donation/About">About</a>
        <a href="/Pet_Donation/Contact">Contact</a>
        <a href="/Pet_Donation/Services">Services</a>
      </div>
    </div>
  );
};

export default Navbar;

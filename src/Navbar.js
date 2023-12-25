// Navbar.js

import React from 'react';
import './Navbar.css'; // You can create a separate CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        {/* Replace 'your_logo.png' with the path to your logo image */}
        <img src="https://www.pawsmetics.com/wp-content/uploads/2017/08/donation-graphic.jpg" alt="Logo" />
        <span> PET DONATION WEBSITE </span>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
        <a href="/Services">Services</a>
      </div>
    </div>
  );
};

export default Navbar;

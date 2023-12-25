// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

const Footer = () => {
    return (
      <div className="footer" style={{ backgroundColor: '#333', color: '#fff', padding: '20px' }}>
        <div className="footer-section pet-section">
          <h2>Welcome to WE Pet - Where Hearts Find Homes for Furry Friends!</h2>
          <p> At WE Pet, we believe in more than just providing a platform; we are the warm embrace for countless furry souls seeking a loving home. Our journey is a heartbeat for those who cannot speak, a sanctuary for the abandoned, and a canvas of hope for those left behind.
Join us in this heartwarming journey, where every click is a step towards building a family. At WE Pet, we don't just find homes for pets; we create families. Welcome to a world where compassion knows no bounds, and every pawprint leaves an indelible mark on the tapestry of our shared humanity. WE Pet - Because every pet deserves a story that begins with "forever." </p>
        </div>
        <div className="footer-section about-section">
          <h3>About</h3>
          <Link to="/About">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>
        <div className="footer-section explore-section">
          <h3>Explore</h3>
          <Link to="/">Home</Link>
          <Link to="/Services">Services</Link>
        </div>
        <div className="footer-section social-section">
          <h3>Social</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      <div className="footer-logo">
      <img src="https://www.pawsmetics.com/wp-content/uploads/2017/08/donation-graphic.jpg" alt="Company Logo" />
      <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
      
    </div>
  );
};

export default Footer;

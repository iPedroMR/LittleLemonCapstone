import React from "react";
import brandImage from "../images/brand.png";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <section className="footer-content">
        <div className="brand-container">
          <img src={brandImage} alt="Little Lemon Brand" />
        </div>
        <div className="document-navigation">
          <h3>Document Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="contact-details">
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="social-media-links">
          <h3>Social Media Links</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

import React from 'react';
import '../styles/Footer.css';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Need Help?</h3>
          <div className="contact-info">
            <p>CATALOGUE</p>
            <p>+92 21 234 312 2I5</p>
            <p>(Mon - Sat: 9.30am - 10:00pm | Sun: 11am - 8pm)</p>
            <p>eshop@afridi's.com</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul className="footer-links">
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/delivery">Delivery & Orders</a></li>
            <li><a href="/returns">Returns & Exchanges</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/track">Track My Order</a></li>
            <li><a href="/payment">Payment Guide</a></li>
            <li><a href="/fabric">Fabric Glossary</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/stores">Store Addresses</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icon">
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
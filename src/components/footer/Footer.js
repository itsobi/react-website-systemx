import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Learn More</a>
            <a href="#">Hosting</a>
            <a href="#">Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Support</h4>
          <div className="footer-links">
            <a href="#">Customer Service</a>

            <a href="#">Contact Us</a>
            <a href="#">Hosting</a>
            <a href="#">Messenger</a>
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <p>
              <FaMapMarkerAlt /> &nbsp;Texas, USA
            </p>
            <p>
              <FaPhoneAlt /> &nbsp;+1 214 190 1920
            </p>
            <p>
              <FaEnvelope /> &nbsp;info@systemx.com
            </p>
            <p>
              <FaGlobe /> &nbsp;www.socialx.com
            </p>
          </div>
        </div>
        <div className="footer-box">
          <p className="u-small-text">&copy; Copyright 2022. systemx.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

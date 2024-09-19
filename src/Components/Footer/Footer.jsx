import React from 'react';
import Logo from '../../assets/Logo.png';
import Button from '../../assets/Button.png';
import Button1 from '../../assets/Button1.png';
import Button2 from '../../assets/Button2.png';
import Btn1 from '../../assets/Btn1.png';
import Btn2 from '../../assets/Btn2.png';
import Btn3 from '../../assets/Btn3.png';
import './Footer.css'; 
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <button className="footer-btn">
            <img src={Button} alt="Button 1" className="footer-btn-img" />
          </button>
          <button className="footer-btn">
            <img src={Button1} alt="Button 2" className="footer-btn-img" />
          </button>
          <button className="footer-btn">
            <img src={Button2} alt="Button 3" className="footer-btn-img" />
          </button>
        </div>
        <div className="footer-links-section">
          <div className="footer-column">
            <h3>Home</h3>
            <button className="footer-link">Benefits</button>
            <button className="footer-link">Our Courses</button>
            <button className="footer-link">Our Testimonials</button>
            <button className="footer-link">Our FAQ</button>
          </div>
          <div className="footer-column">
            <h3>About Us</h3>
            <button className="footer-link">Company</button>
            <button className="footer-link">Achievements</button>
            <button className="footer-link">Our Goals</button>
          </div>
          <div className="footer-column footer-social">
            <h3>Social Profiles</h3>
            <div className="footer-social-btns">
              <button className="social-btn"><IoLogoFacebook /></button>
              <button className="social-btn"><FaTwitter /></button>
              <button className="social-btn"><FaLinkedinIn /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-text">
        <p>© 2023 Skillbridge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

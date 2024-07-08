
import React from 'react';
import logo from '../Image/logo.png';
import { Link } from 'react-router-dom';
import '../Css/Footer.css'; // Import the CSS file
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <img src={logo} alt="logo" height="200px" />
        <div className='social-icons'>
          <a href="#" ><FaSquareFacebook /></a>
          <a href="#" ><FaTwitter /></a>
          <a href="#" ><FaLinkedin /></a>
          <a href="#" ><FaPinterest /></a>
          <a href="https://wa.me/+916235633285" ><FaSquareWhatsapp /></a>
        </div>
        <p>Copyright @2024 developed by Anupavithra P B all rights reserved</p>
        
      </div>
      <div className='footer-links'>
        <div className='quick-links'>
          <h1 className='footer-h1'>Quick Links</h1>
          <ul className="footer-link">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
        <div className='want-links'>
          <h1 className='footer-h1'>I want to:</h1>
          <ul className="footer-link">
            <li><Link to="#">Find a Doctor</Link></li>
            <li><Link to="#">Request an Appointment</Link></li>
            <li><Link to="#">Get Opinion</Link></li>
          </ul>
        </div>
        <div className='support-links'>
          <h1 className='footer-h1'>Support</h1>
          <ul className="footer-link">
            <li><Link to="#">Contact Us</Link></li>
          </ul>
          <ul className="footer-link">
            <li><Link to="/adminlogin">Admin Login</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

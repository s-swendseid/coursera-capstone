import React from "react";
import "../../App.css";
import "./Footer.css";
import Logo from "../../assets/images/Logo.svg";

function Footer() {
  return (
    <footer>
      <div className="img-column">
        <img src={Logo} alt="company-logo" className="logo" />
      </div>

      <div className="footer-column shop-column">
        <h4>Shop</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>

      <div className="footer-column contact-column">
        <h4>Contact</h4>
        <p>123 St. Chicago, IL 12345</p>
        <p>(898) 789-4562</p>
        <p>info@littlelemon.com</p>
      </div>

      <div className="footer-column social-media-column">
        <h4>Social Media</h4>
        <ul>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">YouTube</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

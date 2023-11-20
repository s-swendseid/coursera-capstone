import React from "react";
import Logo from "../assets/Logo.svg";

function Footer() {
  return (
    <div>
      <img src={Logo} alt="company-logo" />

      <div>
        <h2>Shop</h2>
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

      <div>
        <h2>Contact</h2>
        <p>123 St. Chicago, IL 12345</p>
        <p>(898) 789-4562</p>
        <p>info@littlelemon.com</p>
      </div>

      <div>
        <h2>Social Media</h2>
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
    </div>
  );
}

export default Footer;

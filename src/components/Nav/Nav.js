import React, { useState } from "react";
import "../../App.css";
import "./Nav.css";
import Logo from "../../assets/Logo.svg";

function Nav() {
  const [isActive, setIsActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="desktop-nav">
        <div className="nav-content">
          <img src={Logo} alt="company-logo" className="desktop-img" />
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
      </nav>

      <nav className={isActive ? "active" : ""} onClick={toggleNav}>
        <div className="nav-content">
          <img src={Logo} alt="company-logo" className="mobile-img" />

          <div className={`sidebar ${isActive ? "active" : ""}`}>
            <div className="sidebar-header">
              <div className="close-button" onClick={closeSidebar}>
                &times;
              </div>
            </div>
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
        </div>

        {/* Hamburger menu icon */}
        <div className="nav-icon" onClick={toggleNav}>
          &#9776;
        </div>
      </nav>
    </>
  );
}

export default Nav;

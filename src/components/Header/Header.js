import React from "react";
import "../../App.css";
import "./Header.css";
import Food from "../../assets/images/restauranfood.jpg";

function Header() {
  return (
    <header>
      <section>
        <div className="hero-text" >
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, <br/> focused on
            traditional recipes served with <br/> a modern twist.
          </p>
          <button>Reserve a table</button>
        </div>
        <div className="hero-img">
          <img src={Food} alt="featured-dish"/>
        </div>
      </section>
    </header>
  );
}

export default Header;

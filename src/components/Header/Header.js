import React from "react";
import "../../App.css";
import "./Header.css";

function Header() {
  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean <br /> restaurant, focused on
            traditional recipes <br /> served with a modern twist.
          </p>
        </div>
        <div>{/* put image here */}</div>
      </section>
    </header>
  );
}

export default Header;

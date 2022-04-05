import React from "react";
import ReactDOM from "react-dom";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./logo512.png" className="img" alt=""/>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

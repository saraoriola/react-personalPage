import React from "react";
import Logo from '../../assets/sara.png';
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
      <div className="logo">
          <img src={Logo} alt="Logo" />
      </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

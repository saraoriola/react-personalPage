import React from "react";
import Logo from '../../assets/sara.png';
import "./header.css";

const Header = () => {
  return ( 
    <div className="header-container">
      <header> 
        <nav>
          <img src={Logo} alt="Logo" />
            <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      </div>
  );
};

export default Header;
